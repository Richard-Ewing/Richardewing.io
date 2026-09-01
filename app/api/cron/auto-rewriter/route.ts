import { NextResponse } from 'next/server';
import { supabaseAdmin as supabase } from '@/lib/supabase';
import { logAgentRun, createAgentTimer } from '@/lib/agents/logger';

// Autonomous Meta Rewriter Agent
// Called by the SEO Optimizer when low-CTR pages are detected
// Uses Gemini to rewrite meta titles/descriptions based on:
//   1. Current GSC performance data (what queries drive impressions)
//   2. Market intelligence (starving crowd pain points)
//   3. Scar Tissue framework rules
// Then commits changes to GitHub → Vercel auto-deploys

const GITHUB_OWNER = 'Richard-Ewing';
const GITHUB_REPO = 'Richardewing.io';
const GITHUB_BRANCH = 'main';

// Scar Tissue meta rewrite rules (embedded from skill)
const REWRITE_RULES = `
You are rewriting meta titles and descriptions for richardewing.io pages.

RULES:
1. Lead with PAIN, not features. The reader should feel the problem.
2. Include a NUMBER ($, %, time metric) in every title if possible.
3. Max 60 characters for titles, 155 for descriptions.
4. NEVER use these words: access, explore, direct, resilient, paradigm, improve, journey, tapestry, testament, unleash, synergy, holistic, cutting-edge, game-changer, equip, ecosystem, use, landscape
5. Match the primary search query that drives impressions to this page.
6. For tool pages: lead with the problem the tool solves, not the tool name.
7. For advisory pages: lead with the outcome, include the price.
8. Include "Richard Ewing" or "richardewing.io" in titles where appropriate.

STARVING CROWDS (target these pain points):
- VP Eng: AI tool costs out of control, Copilot ROI negative, billing shock
- CISO: Shadow AI everywhere, no governance, EU AI Act fines
- Platform Eng: AI agents failing in production, drift, hallucinations
- Eng Director: Vibe coding creating technical debt, AI code quality
- Ops VP: Verification tax, hours wasted checking AI outputs
`;

interface RewriteRequest {
    url: string;
    currentTitle: string;
    currentDescription: string;
    impressions: number;
    clicks: number;
    ctr: number;
    position: number;
    topQueries: string[];
}

interface RewriteResult {
    url: string;
    oldTitle: string;
    newTitle: string;
    oldDescription: string;
    newDescription: string;
    reasoning: string;
    filePath: string;
}

async function generateRewrite(page: RewriteRequest): Promise<{ title: string; description: string; reasoning: string } | null> {
    const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) return null;

    const prompt = `${REWRITE_RULES}

PAGE: ${page.url}
CURRENT TITLE: ${page.currentTitle}
CURRENT DESCRIPTION: ${page.currentDescription}
IMPRESSIONS (7d): ${page.impressions}
CLICKS (7d): ${page.clicks}
CTR: ${(page.ctr * 100).toFixed(1)}%
POSITION: ${page.position.toFixed(1)}
TOP QUERIES DRIVING TRAFFIC: ${page.topQueries.join(', ')}

The CTR is below 2%. Rewrite the title and description to increase clicks.
Focus on the top queries  -  these are what people are actually searching for.

Respond in this exact JSON format:
{"title": "new title here", "description": "new description here", "reasoning": "why this will improve CTR"}`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 1000,
                    thinkingConfig: {
                        thinkingBudget: 0
                    }
                }
            })
        });

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return null;
        return JSON.parse(jsonMatch[0]);
    } catch {
        return null;
    }
}

function urlToFilePath(url: string): string | null {
    // Map URL paths to their Next.js page files
    const path = url.replace('https://www.richardewing.io', '');

    if (path === '/' || path === '') return 'app/page.tsx';
    if (path.startsWith('/glossary/')) return null; // Glossary uses generateMetadata - skip
    if (path.startsWith('/blog/')) return null; // Blog uses dynamic metadata - skip
    if (path.startsWith('/vault/curriculum/tracks/')) return null; // Dynamic routes - skip

    // Static pages with metadata exports
    const staticMappings: Record<string, string> = {
        '/tools': 'app/tools/page.tsx',
        '/services': 'app/advisory/layout.tsx',
        '/exogram': 'app/exogram/layout.tsx',
        '/pricing': 'app/pricing/page.tsx',
        '/about': 'app/about/page.tsx',
        '/methodology': 'app/methodology/page.tsx',
        '/doctrine': 'app/doctrine/layout.tsx',
        '/roi': 'app/roi/page.tsx',
        '/for-ctos': 'app/for-ctos/page.tsx',
        '/for-boards': 'app/for-boards/page.tsx',
        '/for-investors': 'app/for-investors/page.tsx',
        '/certification': 'app/certification/page.tsx',
        '/workshops': 'app/workshops/page.tsx',
        '/skills': 'app/skills/page.tsx',
        '/vault': 'app/vault/page.tsx',
        '/ai-economics-crisis': 'app/ai-economics-crisis/page.tsx',
    };

    if (path.startsWith('/compare/')) return 'app/lib/pseo-matrix.json';

    if (staticMappings[path]) return staticMappings[path];

    // Tool pages
    if (path.startsWith('/tools/')) {
        const toolSlug = path.replace('/tools/', '');
        // Check layout.tsx first, then page.tsx
        return `app/tools/${toolSlug}/page.tsx`;
    }

    return null;
}

async function commitToGitHub(changes: Array<{ path: string; content: string }>): Promise<{ success: boolean; commitSha?: string; error?: string }> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return { success: false, error: 'No GITHUB_TOKEN' };

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
    };

    try {
        // Get current commit SHA
        const refRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/ref/heads/${GITHUB_BRANCH}`, { headers });
        const refData = await refRes.json();
        const currentCommitSha = refData.object?.sha;
        if (!currentCommitSha) return { success: false, error: 'Could not get current commit SHA' };

        // Get current tree
        const commitRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/commits/${currentCommitSha}`, { headers });
        const commitData = await commitRes.json();
        const treeSha = commitData.tree?.sha;

        // Create blobs for each changed file
        const treeItems = [];
        for (const change of changes) {
            const blobRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/blobs`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ content: change.content, encoding: 'utf-8' })
            });
            const blobData = await blobRes.json();
            treeItems.push({
                path: change.path,
                mode: '100644' as const,
                type: 'blob' as const,
                sha: blobData.sha,
            });
        }

        // Create new tree
        const newTreeRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/trees`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ base_tree: treeSha, tree: treeItems })
        });
        const newTreeData = await newTreeRes.json();

        // Create commit
        const date = new Date().toISOString().split('T')[0];
        const newCommitRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/commits`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                message: `chore(seo): autonomous meta rewrite  -  ${date}\n\nAutomated by SEO Optimizer Agent.\nRewrote ${changes.length} meta title(s)/description(s) based on GSC CTR data + market intelligence.`,
                tree: newTreeData.sha,
                parents: [currentCommitSha],
                author: {
                    name: 'SEO Optimizer Agent',
                    email: 'seo-agent@richardewing.io',
                    date: new Date().toISOString(),
                }
            })
        });
        const newCommitData = await newCommitRes.json();

        // Update branch ref
        await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/refs/heads/${GITHUB_BRANCH}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({ sha: newCommitData.sha })
        });

        return { success: true, commitSha: newCommitData.sha };
    } catch (e) {
        return { success: false, error: e instanceof Error ? e.message : 'Unknown error' };
    }
}

async function getFileContent(path: string): Promise<string | null> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return null;

    try {
        const res = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
            }
        });
        const data = await res.json();
        if (data.content) {
            return Buffer.from(data.content, 'base64').toString('utf-8');
        }
        return null;
    } catch {
        return null;
    }
}

function applyMetaRewrite(fileContent: string, newTitle: string, newDescription: string): string | null {
    let modified = fileContent;
    let changed = false;

    // Pattern 1: title: '...' or "..." or `...`
    const titleRegex = /title:\s*(['"`])(((?!\1)[^\\]|\\.)*)\1/;
    const titleMatch = modified.match(titleRegex);
    if (titleMatch) {
        const fullMatch = titleMatch[0];
        const quoteChar = titleMatch[1];
        let escapedTitle = newTitle;
        if (quoteChar === "'") escapedTitle = newTitle.replace(/'/g, "\\'");
        else if (quoteChar === '"') escapedTitle = newTitle.replace(/"/g, '\\"');
        else if (quoteChar === '`') escapedTitle = newTitle.replace(/`/g, '\\`');

        modified = modified.replace(fullMatch, `title: ${quoteChar}${escapedTitle}${quoteChar}`);
        changed = true;
    }

    // Pattern 2: description: '...' or "..." or `...`
    const descRegex = /description:\s*(['"`])(((?!\1)[^\\]|\\.)*)\1/;
    const descMatch = modified.match(descRegex);
    if (descMatch) {
        const fullMatch = descMatch[0];
        const quoteChar = descMatch[1];
        let escapedDesc = newDescription;
        if (quoteChar === "'") escapedDesc = newDescription.replace(/'/g, "\\'");
        else if (quoteChar === '"') escapedDesc = newDescription.replace(/"/g, '\\"');
        else if (quoteChar === '`') escapedDesc = newDescription.replace(/`/g, '\\`');

        modified = modified.replace(fullMatch, `description: ${quoteChar}${escapedDesc}${quoteChar}`);
        changed = true;
    }

    return changed ? modified : null;
}

async function submitToIndexNow(urls: string[]): Promise<{ submitted: number; error?: string }> {
    const indexNowKey = process.env.INDEXNOW_KEY || '3340d267ae86446787754f0e60a3edc5';
    if (!indexNowKey || urls.length === 0) return { submitted: 0 };

    try {
        const response = await fetch('https://api.indexnow.org/IndexNow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                host: 'www.richardewing.io',
                key: indexNowKey,
                keyLocation: `https://www.richardewing.io/${indexNowKey}.txt`,
                urlList: urls,
            })
        });
        if (response.ok || response.status === 202) {
            return { submitted: urls.length };
        }
        return { submitted: 0, error: `IndexNow returned ${response.status}` };
    } catch (error) {
        return { submitted: 0, error: error instanceof Error ? error.message : 'Unknown' };
    }
}

export async function POST(request: Request) {
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const timer = createAgentTimer();

    try {
        const body = await request.json();
        const pages: RewriteRequest[] = body.pages || [];

        if (pages.length === 0) {
            await logAgentRun({
                agent: 'auto-rewriter',
                status: 'skipped',
                duration_ms: timer.elapsed(),
                items_processed: 0,
                summary: 'No pages specified for rewrite.',
            });
            return NextResponse.json({ success: true, message: 'No pages to rewrite' });
        }

        // Cap at 5 rewrites per day to prevent runaway changes
        const toRewrite = pages.slice(0, 5);
        const results: RewriteResult[] = [];
        const fileChanges: Array<{ path: string; content: string }> = [];

        for (const page of toRewrite) {
            // 1. Map URL to file
            const filePath = urlToFilePath(page.url);
            if (!filePath) continue;

            // 2. Generate new title/description
            const rewrite = await generateRewrite(page);
            if (!rewrite) continue;

            // 3. Get current file content
            const content = await getFileContent(filePath);
            if (!content) continue;

            // 4. Apply rewrite
            let modified: string | null = null;
            if (filePath.endsWith('.json')) {
                try {
                    const parsed = JSON.parse(content);
                    const slug = page.url.split('/').pop();
                    const entryIndex = parsed.findIndex((e: any) => e.slug === slug);
                    if (entryIndex !== -1) {
                        parsed[entryIndex].title = rewrite.title;
                        parsed[entryIndex].metaDescription = rewrite.description;
                        modified = JSON.stringify(parsed, null, 4);
                    }
                } catch {
                    // Ignore JSON parse errors
                }
            } else {
                modified = applyMetaRewrite(content, rewrite.title, rewrite.description);
            }
            if (!modified) continue;

            results.push({
                url: page.url,
                oldTitle: page.currentTitle,
                newTitle: rewrite.title,
                oldDescription: page.currentDescription,
                newDescription: rewrite.description,
                reasoning: rewrite.reasoning,
                filePath,
            });

            fileChanges.push({ path: filePath, content: modified });
        }

        if (fileChanges.length === 0) {
            await logAgentRun({
                agent: 'auto-rewriter',
                status: 'skipped',
                duration_ms: timer.elapsed(),
                items_processed: 0,
                summary: 'Checked pages for meta tag rewrites. No viable improvements generated.',
            });
            return NextResponse.json({ success: true, message: 'No viable rewrites generated', results: [] });
        }

        // 5. Commit all changes to GitHub
        const commitResult = await commitToGitHub(fileChanges);

        // 6. Submit changed URLs to IndexNow
        const indexNowResult = await submitToIndexNow(results.map(r => `https://www.richardewing.io${r.url}`));

        // 7. Log to Supabase (seo_rewrites table)
        try {
            await supabase.from('seo_rewrites').insert(results.map(r => ({
                url: r.url,
                old_title: r.oldTitle,
                new_title: r.newTitle,
                old_description: r.oldDescription,
                new_description: r.newDescription,
                reasoning: r.reasoning,
                file_path: r.filePath,
                commit_sha: commitResult.commitSha || null,
                created_at: new Date().toISOString(),
            })));
        } catch { /* table may not exist yet */ }

        // 8. Log the agent run
        await logAgentRun({
            agent: 'auto-rewriter',
            status: commitResult.success ? 'completed' : 'failed',
            duration_ms: timer.elapsed(),
            items_processed: results.length,
            summary: `Autonomously rewrote meta tags for ${results.length} pages. IndexNow: ${indexNowResult.submitted} submitted.`,
            metadata: {
                commit: commitResult,
                results,
                indexNow: indexNowResult
            }
        });

        return NextResponse.json({
            success: commitResult.success,
            rewrites: results.length,
            commit: commitResult,
            results,
        });

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        await logAgentRun({
            agent: 'auto-rewriter',
            status: 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 0,
            summary: `Failed: ${message}`,
            metadata: { error: message }
        });
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

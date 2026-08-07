import { NextResponse } from 'next/server';
import { RESEARCH_CORPUS, CorpusArticle } from '@/app/lib/research-corpus';
import { generateArticleData } from '@/app/lib/article-generator';
import { articlesAuto } from '@/app/lib/blog-articles-auto';
import { corpusAuto } from '@/app/lib/research-corpus-auto';

const GITHUB_OWNER = 'Richard-Ewing';
const GITHUB_REPO = 'Richardewing.io';
const GITHUB_BRANCH = 'main';

async function commitToGitHub(changes: Array<{ path: string; content: string }>): Promise<{ success: boolean; commitSha?: string; error?: string }> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return { success: false, error: 'No GITHUB_TOKEN' };

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
    };

    try {
        const refRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/ref/heads/${GITHUB_BRANCH}`, { headers });
        const refData = await refRes.json();
        const currentCommitSha = refData.object?.sha;
        if (!currentCommitSha) return { success: false, error: 'Could not get current commit SHA' };

        const commitRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/commits/${currentCommitSha}`, { headers });
        const commitData = await commitRes.json();
        const treeSha = commitData.tree?.sha;

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

        const newTreeRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/trees`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ base_tree: treeSha, tree: treeItems })
        });
        const newTreeData = await newTreeRes.json();

        const date = new Date().toISOString().split('T')[0];
        const newCommitRes = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/git/commits`, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                message: `chore(content): auto-ingest new beehiiv posts - ${date}`,
                tree: newTreeData.sha,
                parents: [currentCommitSha],
                author: {
                    name: 'Auto Ingest Agent',
                    email: 'agent@richardewing.io',
                    date: new Date().toISOString(),
                }
            })
        });
        const newCommitData = await newCommitRes.json();

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

export async function GET(req: Request) {
    try {
        const authHeader = req.headers.get('authorization');
        if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            if (process.env.NODE_ENV === 'production') {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
        }

        const knownUrls = new Set([...RESEARCH_CORPUS.map(c => c.url.toLowerCase()), ...corpusAuto.map(c => c.url.toLowerCase())]);
        const detectedNewPosts: string[] = [];

        // Scrape Beehiiv
        const res = await fetch('https://theaieconomist.beehiiv.com/', {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            next: { revalidate: 0 }
        });

        if (!res.ok) {
            return NextResponse.json({ error: 'Failed to fetch beehiiv' }, { status: 500 });
        }

        const html = await res.text();
        const matches = [...html.matchAll(/href="(\/p\/[^"]+)"/g)].map(m => m[1]);
        const uniquePostPaths = [...new Set(matches)];
        
        const newUrlsToIngest: string[] = [];
        for (const path of uniquePostPaths) {
            const fullUrl = `https://theaieconomist.beehiiv.com${path}`;
            if (!knownUrls.has(fullUrl.toLowerCase())) {
                newUrlsToIngest.push(fullUrl);
            }
        }

        if (newUrlsToIngest.length === 0) {
            return NextResponse.json({ message: 'No new posts to ingest.' });
        }

        const newArticlesRecord: Record<string, any> = {};
        const newCorpusEntries: CorpusArticle[] = [];
        
        for (const fullUrl of newUrlsToIngest) {
            const pRes = await fetch(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            if (!pRes.ok) continue;
            const pPage = await pRes.text();
            
            const articleData = generateArticleData(pPage, fullUrl, 'Beehiiv');
            
            // Generate slug from title
            const slug = articleData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            newArticlesRecord[slug] = articleData;
            
            const corpusEntry: CorpusArticle = {
                id: `beehiiv-${slug}`,
                title: articleData.title,
                url: fullUrl,
                publisher: 'Beehiiv',
                domain: articleData.category as CorpusArticle['domain'],
                type: 'Evergreen', // Default
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                thesis: articleData.excerpt,
                relatedConceptIds: articleData.relatedConcepts
            };
            newCorpusEntries.push(corpusEntry);
        }

        if (Object.keys(newArticlesRecord).length === 0) {
            return NextResponse.json({ message: 'Failed to process any new posts.' });
        }

        // We will fetch the current content of blog-articles-auto.ts and research-corpus-auto.ts
        const currentArticlesAutoContent = await getFileContent('app/lib/blog-articles-auto.ts') || `import { ArticleData } from './blog-types';\n\nexport const articlesAuto: Record<string, ArticleData> = {};\n`;
        
        let newArticlesAutoContent = currentArticlesAutoContent;
        const entriesStr = Object.entries(newArticlesRecord).map(([s, a]) => `'${s}': ${JSON.stringify(a, null, 4)},`).join('\n');
        newArticlesAutoContent = newArticlesAutoContent.replace(/export const articlesAuto: Record<string, ArticleData> = \{/, `export const articlesAuto: Record<string, ArticleData> = {\n${entriesStr}`);

        const currentCorpusContent = await getFileContent('app/lib/research-corpus-auto.ts') || `import { CorpusArticle } from './research-corpus';\n\nexport const corpusAuto: CorpusArticle[] = [];\n`;
        
        let newCorpusContent = currentCorpusContent;
        const corpusEntriesStr = newCorpusEntries.map(e => JSON.stringify(e, null, 4) + ',').join('\n');
        newCorpusContent = newCorpusContent.replace(/export const corpusAuto: CorpusArticle\[\] = \[/, `export const corpusAuto: CorpusArticle[] = [\n${corpusEntriesStr}`);

        const commitResult = await commitToGitHub([
            { path: 'app/lib/blog-articles-auto.ts', content: newArticlesAutoContent },
            { path: 'app/lib/research-corpus-auto.ts', content: newCorpusContent }
        ]);

        return NextResponse.json({
            message: 'Ingested successfully',
            newUrls: newUrlsToIngest,
            commit: commitResult
        });

    } catch (e) {
        return NextResponse.json({ error: String(e) }, { status: 500 });
    }
}

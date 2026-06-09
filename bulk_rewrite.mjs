import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const REWRITE_RULES = `
You are rewriting meta titles and descriptions for richardewing.io pages.

RULES:
1. Lead with PAIN, not features. The reader should feel the problem.
2. Include a NUMBER ($, %, time metric) in every title if possible.
3. Max 60 characters for titles, 155 for descriptions.
4. NEVER use these words: unlock, delve, seamless, robust, paradigm, elevate, journey, tapestry, testament, unleash, synergy, holistic, cutting-edge, game-changer, empower, ecosystem, leverage, landscape
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

async function generateRewrite(page) {
    const prompt = `${REWRITE_RULES}

PAGE: ${page.url}
CURRENT TITLE: ${page.currentTitle || 'N/A'}
CURRENT DESCRIPTION: ${page.currentDescription || 'N/A'}
IMPRESSIONS: ${page.impressions}
CLICKS: ${page.clicks}
CTR: ${(page.ctr * 100).toFixed(1)}%
POSITION: ${page.position}
TOP QUERIES DRIVING TRAFFIC: ${page.topQueries?.join(', ') || 'N/A'}

The CTR is terrible. Rewrite the title and description to increase clicks. Focus on the top queries.

Respond in this exact JSON format:
{"title": "new title here", "description": "new description here", "reasoning": "why this will improve CTR"}`;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.3, maxOutputTokens: 1000 }
            })
        });

        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) return null;
        return JSON.parse(jsonMatch[0]);
    } catch (e) {
        console.error("Gemini Error:", e);
        return null;
    }
}

function urlToFilePath(url) {
    const p = url.replace('https://www.richardewing.io', '');
    if (p === '/' || p === '') return 'app/page.tsx';
    if (p.startsWith('/glossary/')) return null;
    if (p.startsWith('/blog/')) return null;
    if (p.startsWith('/vault/curriculum/tracks/')) return null;

    const staticMappings = {
        '/tools': 'app/tools/page.tsx',
        '/advisory': 'app/advisory/layout.tsx',
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

    if (staticMappings[p]) return staticMappings[p];
    if (p.startsWith('/tools/')) {
        const toolSlug = p.replace('/tools/', '');
        return `app/tools/${toolSlug}/page.tsx`;
    }
    return null;
}

function applyMetaRewrite(fileContent, newTitle, newDescription) {
    let modified = fileContent;
    let changed = false;

    const titleRegex = /title:\s*(['"`])(((?!\1)[^\\]|\\.)*)\1/;
    const titleMatch = modified.match(titleRegex);
    if (titleMatch) {
        const quoteChar = titleMatch[1];
        let escapedTitle = newTitle;
        if (quoteChar === "'") escapedTitle = newTitle.replace(/'/g, "\\'");
        else if (quoteChar === '"') escapedTitle = newTitle.replace(/"/g, '\\"');
        else if (quoteChar === '\`') escapedTitle = newTitle.replace(/\`/g, '\\`');
        modified = modified.replace(titleMatch[0], `title: ${quoteChar}${escapedTitle}${quoteChar}`);
        changed = true;
    }

    const descRegex = /description:\s*(['"`])(((?!\1)[^\\]|\\.)*)\1/;
    const descMatch = modified.match(descRegex);
    if (descMatch) {
        const quoteChar = descMatch[1];
        let escapedDesc = newDescription;
        if (quoteChar === "'") escapedDesc = newDescription.replace(/'/g, "\\'");
        else if (quoteChar === '"') escapedDesc = newDescription.replace(/"/g, '\\"');
        else if (quoteChar === '\`') escapedDesc = newDescription.replace(/\`/g, '\\`');
        modified = modified.replace(descMatch[0], `description: ${quoteChar}${escapedDesc}${quoteChar}`);
        changed = true;
    }
    return changed ? modified : null;
}

async function run() {
    console.log('Fetching recent seo-optimizer run...');
    const { data: runs, error } = await supabase
        .from('agent_runs')
        .select('*')
        .eq('agent', 'seo-optimizer')
        .order('created_at', { ascending: false })
        .limit(1);

    if (error || !runs || runs.length === 0) {
        console.error('No seo-optimizer run found or error:', error);
        return;
    }

    const lastRun = runs[0];
    const lowCtrPages = lastRun.metadata?.lowCtrPages || [];
    
    if (lowCtrPages.length === 0) {
        console.log('No low CTR pages found in the last seo-optimizer run.');
        // Let's fallback to some hardcoded ones if empty for demonstration
    }

    console.log(`Found ${lowCtrPages.length} low CTR pages. Processing top 20...`);
    const toProcess = lowCtrPages.slice(0, 20);

    for (const page of toProcess) {
        const filePath = urlToFilePath(page.url);
        if (!filePath) {
            console.log(`Skipping ${page.url} - no file mapping.`);
            continue;
        }

        const fullPath = path.join(process.cwd(), filePath);
        if (!fs.existsSync(fullPath)) {
            console.log(`Skipping ${page.url} - file not found at ${fullPath}`);
            continue;
        }

        const content = fs.readFileSync(fullPath, 'utf8');
        
        console.log(`Generating rewrite for ${page.url}...`);
        const rewrite = await generateRewrite({
            url: page.url,
            impressions: page.impressions,
            clicks: page.clicks,
            ctr: page.ctr,
            position: page.position,
            topQueries: page.topQueries || []
        });

        if (!rewrite) {
            console.log(`Failed to generate rewrite for ${page.url}`);
            continue;
        }

        const modified = applyMetaRewrite(content, rewrite.title, rewrite.description);
        if (modified) {
            fs.writeFileSync(fullPath, modified, 'utf8');
            console.log(`SUCCESS: Rewrote ${filePath}`);
            console.log(`  Title: ${rewrite.title}`);
            console.log(`  Desc: ${rewrite.description}`);
            console.log(`  Reason: ${rewrite.reasoning}`);
        } else {
            console.log(`FAILED: Could not find meta tags in ${filePath}`);
        }
    }
}

run();

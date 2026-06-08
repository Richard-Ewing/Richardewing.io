const fs = require('fs');
const path = require('path');

// Load and clean environment variables from .env.production.local
const envPath = path.join(__dirname, '../.env.production.local');
if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
        if (!line.trim() || line.startsWith('#')) continue;
        const index = line.indexOf('=');
        if (index === -1) continue;
        const key = line.slice(0, index).trim();
        let val = line.slice(index + 1).trim();
        // Remove quotes if present
        if (val.startsWith('"') && val.endsWith('"')) {
            val = val.slice(1, -1);
        }
        // Replace escaped newlines
        val = val.replace(/\\r\\n/g, '').replace(/\\n/g, '\n');
        process.env[key] = val;
    }
}

// Ensure clean environment variables
for (const key of Object.keys(process.env)) {
    if (typeof process.env[key] === 'string') {
        process.env[key] = process.env[key].replace(/[\r\n]/g, '').trim();
    }
}

console.log('CRON_SECRET:', process.env.CRON_SECRET);
console.log('GITHUB_TOKEN:', process.env.GITHUB_TOKEN ? 'EXISTS (length: ' + process.env.GITHUB_TOKEN.length + ')' : 'MISSING');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'EXISTS' : 'MISSING');

const GITHUB_OWNER = 'Richard-Ewing';
const GITHUB_REPO = 'Richardewing.io';
const GITHUB_BRANCH = 'main';

async function test() {
    const page = {
        url: '/tools/copilot-roi',
        currentTitle: 'Is GitHub Copilot Actually Saving You Money? | True ROI Calculator',
        currentDescription: 'GitHub Copilot costs $19/dev/month but creates code that needs 40% more review time. Calculate the true ROI after accounting for code churn, review overhead, and quality degradation.',
        impressions: 120,
        clicks: 1,
        ctr: 0.0083,
        position: 4.5,
        topQueries: ['github copilot roi', 'copilot cost savings']
    };

    console.log('\n--- Step 1: urlToFilePath ---');
    const filePath = urlToFilePath(page.url);
    console.log('filePath:', filePath);
    if (!filePath) return;

    console.log('\n--- Step 2: getFileContent ---');
    const content = await getFileContent(filePath);
    console.log('content exists:', !!content);
    if (!content) return;

    console.log('\n--- Step 3: generateRewrite ---');
    const rewrite = await generateRewrite(page);
    console.log('rewrite:', rewrite);
    if (!rewrite) return;

    console.log('\n--- Step 4: applyMetaRewrite ---');
    const modified = applyMetaRewrite(content, rewrite.title, rewrite.description);
    console.log('modified exists and changed:', !!modified && modified !== content);
}

function urlToFilePath(url) {
    const pathVal = url.replace('https://www.richardewing.io', '');
    if (pathVal === '/' || pathVal === '') return 'app/page.tsx';
    if (pathVal.startsWith('/glossary/')) return null;
    if (pathVal.startsWith('/blog/')) return null;

    const staticMappings = {
        '/tools': 'app/tools/page.tsx',
        '/advisory': 'app/advisory/page.tsx',
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

    if (staticMappings[pathVal]) return staticMappings[pathVal];

    if (pathVal.startsWith('/tools/')) {
        const toolSlug = pathVal.replace('/tools/', '');
        return `app/tools/${toolSlug}/page.tsx`;
    }

    return null;
}

async function getFileContent(filePath) {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        console.error('No GITHUB_TOKEN in process.env');
        return null;
    }

    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`;
    console.log('Fetching:', url);
    try {
        const res = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'Node-Fetch'
            }
        });
        console.log('GitHub response status:', res.status);
        const data = await res.json();
        if (res.status !== 200) {
            console.error('GitHub error data:', data);
            return null;
        }
        if (data.content) {
            return Buffer.from(data.content, 'base64').toString('utf-8');
        }
        return null;
    } catch (e) {
        console.error('Fetch error:', e);
        return null;
    }
}

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
`;

async function generateRewrite(page) {
    const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('No GEMINI/GOOGLE_API_KEY in process.env');
        return null;
    }

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
Focus on the top queries — these are what people are actually searching for.

Respond in this exact JSON format:
{"title": "new title here", "description": "new description here", "reasoning": "why this will improve CTR"}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    try {
        const response = await fetch(url, {
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
        console.log('Gemini response status:', response.status);
        const data = await response.json();
        if (response.status !== 200) {
            console.error('Gemini error data:', data);
            return null;
        }
        console.log('Gemini raw data:', JSON.stringify(data, null, 2));
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        console.log('Gemini output text:', text);
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            console.log('No json match found in:', text);
            return null;
        }
        try {
            return JSON.parse(jsonMatch[0]);
        } catch (e) {
            console.error('JSON parse error:', e, 'for string:', jsonMatch[0]);
            return null;
        }
    } catch (e) {
        console.error('Gemini fetch error:', e);
        return null;
    }
}

function applyMetaRewrite(fileContent, newTitle, newDescription) {
    let modified = fileContent;
    let changed = false;

    const titleMatch = modified.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (titleMatch) {
        console.log('Matched title:', titleMatch[0]);
        modified = modified.replace(titleMatch[0], `title: '${newTitle.replace(/'/g, "\\'")}'`);
        changed = true;
    } else {
        console.log('No title match found via regex');
    }

    const descMatch = modified.match(/description:\s*['"`]([^'"`]{20,})['"`]/);
    if (descMatch) {
        console.log('Matched description:', descMatch[0]);
        modified = modified.replace(descMatch[0], `description: '${newDescription.replace(/'/g, "\\'")}'`);
        changed = true;
    } else {
        console.log('No description match found via regex');
    }

    return changed ? modified : null;
}

test();

const fs = require('fs');
const path = require('path');

const targetFiles = [
    'app/ai-integration/page.tsx',
    'app/ai-integration/system/page.tsx',
    'app/articles/[slug]/page.tsx',
    'app/case-studies/runtime-incidents/page.tsx',
    'app/certification/page.tsx',
    'app/compare/ai-coding-agents/page.tsx',
    'app/compare/ai-guardrails-platforms/page.tsx',
    'app/compare/claude-md-is-not-governance/page.tsx',
    'app/compare/cursor-problems/page.tsx',
    'app/compare/github-copilot-problems/page.tsx',
    'app/compare/why-ai-coding-burns-money/page.tsx',
    'app/compare/why-claude-loses-context/page.tsx',
    'app/compare/why-cursor-rewrites-files/page.tsx',
    'app/compare/why-mcp-is-dangerous/page.tsx',
    'app/compare/why-retry-loops-happen/page.tsx',
    'app/compare/windsurf-problems/page.tsx',
    'app/diagrams/page.tsx',
    'app/executive-briefing/page.tsx',
    'app/runtime-architecture/page.tsx',
    'app/runtime-failure-index/page.tsx',
    'app/skills/getting-started/page.tsx',
    'app/skills/page.tsx',
    'app/telemetry/page.tsx'
];

targetFiles.forEach(relPath => {
    const fullPath = path.join(__dirname, '..', relPath);
    if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️ Warning: ${relPath} does not exist!`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Replace non-www canonical tags with www
    // alternates: { canonical: 'https://richardewing.io/...' }
    // or standard URL strings: 'https://richardewing.io/...'
    const originalContent = content;
    content = content.replace(/https:\/\/richardewing\.io/g, 'https://www.richardewing.io');

    if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ Updated canonical domain in: ${relPath}`);
    } else {
        console.log(`ℹ️ No changes needed in: ${relPath}`);
    }
});

console.log('Sweep complete.');

const fs = require('fs');
const path = require('path');

let errors = 0;

function assert(condition, message) {
    if (!condition) {
        console.error(`🔴 FAIL: ${message}`);
        errors++;
    } else {
        console.log(`✅ PASS: ${message}`);
    }
}

// 1. Verify that next.config.ts does not contain wildcard redirects or active pages redirects
const nextConfigPath = path.join(__dirname, '../next.config.ts');
if (fs.existsSync(nextConfigPath)) {
    const content = fs.readFileSync(nextConfigPath, 'utf8');
    assert(!content.includes('/exogram/docs/:slug*'), 'next.config.ts should not contain /exogram/docs/:slug* wildcard');
    assert(!content.includes('/industries/:slug*'), 'next.config.ts should not contain /industries/:slug* wildcard');
    assert(!content.includes("source: '/industries/cleantech'"), 'next.config.ts should not redirect /industries/cleantech');
    assert(!content.includes("source: '/exogram/docs/state-hashing'"), 'next.config.ts should not redirect /exogram/docs/state-hashing');
    assert(!content.includes("source: '/glossary/email-marketing-automation'"), 'next.config.ts should not redirect /glossary/email-marketing-automation');
    assert(!content.includes("source: '/glossary/rice-framework'"), 'next.config.ts should not redirect /glossary/rice-framework');
} else {
    assert(false, 'next.config.ts exists');
}

// 2. Verify glossary term rice-framework exists
const pmTermsPath = path.join(__dirname, '../app/glossary/terms/product-management.ts');
if (fs.existsSync(pmTermsPath)) {
    const content = fs.readFileSync(pmTermsPath, 'utf8');
    assert(content.includes("slug: 'rice-framework'"), 'Product management terms should include rice-framework');
} else {
    assert(false, 'product-management.ts exists');
}

// 3. Verify sitemap.ts has industrySubPages
const sitemapPath = path.join(__dirname, '../app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
    const content = fs.readFileSync(sitemapPath, 'utf8');
    assert(content.includes('industrySubPages'), 'sitemap.ts should contain industrySubPages');
    assert(content.includes('...industrySubPages'), 'sitemap.ts should spread ...industrySubPages in return');
} else {
    assert(false, 'sitemap.ts exists');
}

// 4. Verify canonical links in app files are www
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
    if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        assert(!content.includes("https://richardewing.io/"), `File ${relPath} should not contain non-www https://richardewing.io/`);
        assert(content.includes("https://www.richardewing.io/"), `File ${relPath} should contain standard www https://www.richardewing.io/`);
    } else {
        assert(false, `File ${relPath} exists`);
    }
});

console.log(`\nVerification complete. Errors: ${errors}`);
process.exit(errors > 0 ? 1 : 0);

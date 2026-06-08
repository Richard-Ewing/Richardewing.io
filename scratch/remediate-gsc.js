const fs = require('fs');
const path = require('path');

function fixNextConfig() {
    const file = path.join(__dirname, '../next.config.ts');
    let content = fs.readFileSync(file, 'utf8');

    // 1. Remove the /about -> /principal redirect (circular loop)
    const circularAboutRedirect = `      {
        source: '/about',
        destination: '/principal',
        permanent: true,
      },`;
    content = content.replace(circularAboutRedirect, '');

    // 2. Add old-to-new redirects for Track 5 (6-x -> 5-x) and Track 6 (11-x -> 6-x)
    const insertionPoint = `{ source: '/principal', destination: '/about', permanent: true },`;
    const newRedirects = `
      { source: '/vault/curriculum/tracks/product-economics/6-:id', destination: '/vault/curriculum/tracks/product-economics/5-:id', permanent: true },
      { source: '/vault/curriculum/tracks/ai-operations/11-:id', destination: '/vault/curriculum/tracks/ai-operations/6-:id', permanent: true },`;
    content = content.replace(insertionPoint, insertionPoint + newRedirects);

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed next.config.ts');
}

function fixSitemap() {
    const file = path.join(__dirname, '../app/sitemap.ts');
    let content = fs.readFileSync(file, 'utf8');

    // 1. Replace /principal sitemap entry with /about
    content = content.replace("add(`${baseUrl}/principal`, 'monthly', 0.8);", "add(`${baseUrl}/about`, 'monthly', 0.8);");

    // 2. Import articles as well
    content = content.replace("import { frameworks } from '@/lib/data';", "import { frameworks, articles } from '@/lib/data';");

    // 3. Remove the pSEO Matrix loop
    const pseoLoop = `    // pSEO Matrix (compare pages) — only add if not already a static compare page
    (pseoMatrixData || []).forEach((item: any) => {
        if (!comparePages.includes(item.slug)) {
            add(\`\${baseUrl}/compare/\${item.slug}\`, 'weekly', 0.8);
        }
    });`;
    content = content.replace(pseoLoop, '');

    // 4. Add the 4 hardcoded compare pages to sitemap comparePages
    const hardcodedSlugs = [
        "'claude-code-vs-cursor-governance'",
        "'claude-code-retry-loop-prevention'",
        "'claude-context-rot-mitigation'",
        "'cursor-repository-drift-prevention'"
    ];
    content = content.replace(
        "        'ai-coding-agents', 'ai-guardrails-platforms',",
        `        'claude-code-vs-cursor-governance', 'claude-code-retry-loop-prevention',
        'claude-context-rot-mitigation', 'cursor-repository-drift-prevention',
        'ai-coding-agents', 'ai-guardrails-platforms',`
    );

    // 5. Add internal canonical articles to the sitemap
    const insertionPoint = `    // === VAULT CURRICULUM ===
    add(\`\${baseUrl}/vault/curriculum/tracks\`, 'monthly', 0.7);`;
    
    const canonicalSitemapCode = `    // === VAULT CURRICULUM ===
    add(\`\${baseUrl}/vault/curriculum/tracks\`, 'monthly', 0.7);

    // === CANONICAL ARTICLES ===
    articles
        .filter(article => !article.externalUrl)
        .forEach(article => add(\`\${baseUrl}/articles/\${article.slug}\`, 'monthly', 0.8));`;
    content = content.replace(insertionPoint, canonicalSitemapCode);

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed app/sitemap.ts');
}

function fixCompareMetadata() {
    const file = path.join(__dirname, '../app/compare/[slug]/page.tsx');
    let content = fs.readFileSync(file, 'utf8');

    // 1. Add INDEXED_SLUGS definition before COMPARISONS
    const target = 'const COMPARISONS = [';
    const indexedSlugsDef = `const INDEXED_SLUGS = new Set([
    // Hardcoded
    'claude-code-vs-cursor-governance',
    'claude-code-retry-loop-prevention',
    'claude-context-rot-mitigation',
    'cursor-repository-drift-prevention',
    // Static comparePages from sitemap
    'ai-coding-agents', 'ai-guardrails-platforms',
    'github-copilot-problems', 'cursor-problems', 'windsurf-problems',
    'why-claude-loses-context', 'why-retry-loops-happen', 'why-cursor-rewrites-files',
    'why-ai-coding-burns-money', 'why-mcp-is-dangerous', 'claude-md-is-not-governance',
    'pdi-vs-sonarqube', 'pdi-vs-codeclimate', 'pdi-vs-waydev',
    'audit-interview-vs-leetcode', 'audit-interview-vs-hackerrank', 'audit-interview-vs-traditional',
    'aueb-vs-aws-cost-explorer', 'ev-se-vs-jellyfish', 'aper-vs-jellyfish', 'aper-vs-linearb',
    'copilot-roi-vs-gitclear', 'dora-metrics-vs-aper',
    'shadow-ai-vs-shadow-it', 'technical-debt-vs-technical-insolvency', 'vibe-coding-vs-agile',
]);\n\nconst COMPARISONS = [`;

    if (!content.includes('const INDEXED_SLUGS')) {
        content = content.replace(target, indexedSlugsDef);
    }

    // 2. Modify generateMetadata to inject robots header for unindexed comparison pages
    const metadataTarget = `    return {
        title: \`\${comparison.title} | Enterprise Comparison\`,
        description: comparison.description,
        alternates: { canonical: \`https://www.richardewing.io/compare/\${slug}\` },`;
        
    const metadataReplacement = `    const isIndexed = INDEXED_SLUGS.has(slug);

    return {
        title: \`\${comparison.title} | Enterprise Comparison\`,
        description: comparison.description,
        alternates: { canonical: \`https://www.richardewing.io/compare/\${slug}\` },
        robots: isIndexed ? undefined : { index: false, follow: true },`;

    content = content.replace(metadataTarget, metadataReplacement);

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed app/compare/[slug]/page.tsx');
}

function fixStructuredData() {
    const file = path.join(__dirname, '../app/components/seo/StructuredData.tsx');
    let content = fs.readFileSync(file, 'utf8');

    const courseSchemaTarget = `export const generateCourseSchema = (name: string, description: string, provider: string, url: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
        '@type': 'Organization',
        name: provider,
        sameAs: 'https://www.richardewing.io'
    },
    url
});`;

    const courseSchemaReplacement = `export const generateCourseSchema = (name: string, description: string, provider: string, url: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
        '@type': 'Organization',
        name: provider,
        sameAs: 'https://www.richardewing.io'
    },
    url,
    isAccessibleForFree: 'False',
    hasPart: {
        '@type': 'WebPageElement',
        isAccessibleForFree: 'False',
        cssSelector: '.ai-content'
    }
});`;

    content = content.replace(courseSchemaTarget, courseSchemaReplacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed app/components/seo/StructuredData.tsx');
}

function fixCurriculumPage() {
    const file = path.join(__dirname, '../app/vault/curriculum/tracks/[...slug]/page.tsx');
    let content = fs.readFileSync(file, 'utf8');

    // 1. Pass hasAccess to ModuleStepper
    content = content.replace(
        '<ModuleStepper parsedContent={aiContent}>',
        '<ModuleStepper parsedContent={aiContent} hasAccess={hasAccess}>'
    );

    // 2. Fix jsonPath/htmlPath dot fallback
    const pathsTarget = `    try {
        const jsonPath = path.join(process.cwd(), 'app', 'content', 'parsed', \`\${mod.moduleId}.json\`);
        const htmlPath = path.join(process.cwd(), 'app', 'content', 'modules', \`\${mod.moduleId}.html\`);`;

    const pathsReplacement = `    try {
        let jsonPath = path.join(process.cwd(), 'app', 'content', 'parsed', \`\${mod.moduleId}.json\`);
        let htmlPath = path.join(process.cwd(), 'app', 'content', 'modules', \`\${mod.moduleId}.html\`);
        
        if (!fs.existsSync(jsonPath)) {
            const dotPath = path.join(process.cwd(), 'app', 'content', 'parsed', \`\${mod.moduleId.replace('-', '.')}.json\`);
            if (fs.existsSync(dotPath)) {
                jsonPath = dotPath;
            }
        }
        if (!fs.existsSync(htmlPath)) {
            const dotPath = path.join(process.cwd(), 'app', 'content', 'modules', \`\${mod.moduleId.replace('-', '.')}.html\`);
            if (fs.existsSync(dotPath)) {
                htmlPath = dotPath;
            }
        }`;

    content = content.replace(pathsTarget, pathsReplacement);

    // 3. Fix internal articles fallback link in dynamically generated module page (lines 199)
    content = content.replace(
        'const href = article.externalUrl || article.legacyUrl || `/blog/${article.slug}`;',
        'const href = article.externalUrl || article.legacyUrl || `/articles/${article.slug}`;'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed app/vault/curriculum/tracks/[...slug]/page.tsx');
}

function fixArticlesContent() {
    const file = path.join(__dirname, '../app/articles/content.tsx');
    let content = fs.readFileSync(file, 'utf8');

    // Replace the fallback for articles from /blog/ to /articles/
    // Since there are two occurrences, do a split & join or replace all
    content = content.split('const href = article.externalUrl || article.legacyUrl || `/blog/${article.slug}`;')
                     .join('const href = article.externalUrl || article.legacyUrl || `/articles/${article.slug}`;');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed app/articles/content.tsx');
}

function fixArticlesData() {
    const file = path.join(__dirname, '../app/lib/data.ts');
    let content = fs.readFileSync(file, 'utf8');

    // Remove legacyUrl fields
    content = content.replace('        legacyUrl: "/canonical/technical-insolvency.html",', '');
    content = content.replace('        legacyUrl: "/canonical/innovation-tax.html"', '');
    content = content.replace('        legacyUrl: "/canonical/ai-margin-autopsy.html"', '');
    content = content.replace('        legacyUrl: "/canonical/governance-of-subtraction.html"', '');

    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed app/lib/data.ts');
}

function fixTracks() {
    // 1. Rename IDs in curriculum-tracks-5-6.ts (Track 5: product-economics/6-1 -> product-economics/5-1)
    const file5 = path.join(__dirname, '../app/lib/curriculum-tracks-5-6.ts');
    let content5 = fs.readFileSync(file5, 'utf8');
    content5 = content5.replace("tracks5and6Modules['product-economics/6-1'] = m('6-1',", "tracks5and6Modules['product-economics/5-1'] = m('5-1',");
    content5 = content5.replace("const t6 = 'Track 6 — AI Economics';", "const t6 = 'Product Management Economics';");
    content5 = content5.replace("'/vault/curriculum/tracks/product-economics/6-2'", "'/vault/curriculum/tracks/product-economics/5-2'");
    fs.writeFileSync(file5, content5, 'utf8');
    console.log('Fixed app/lib/curriculum-tracks-5-6.ts');

    // 2. Rename IDs in curriculum-tracks-11.ts (Track 6: ai-operations/11-x -> ai-operations/6-x)
    const file11 = path.join(__dirname, '../app/lib/curriculum-tracks-11.ts');
    let content11 = fs.readFileSync(file11, 'utf8');
    
    // Replace track name t11 definition
    content11 = content11.replace("const t11 = 'Track 11 — AI Operations & Governance';", "const t11 = 'AI Operations Economics & Cost Governance';");

    // Replace all keys and module IDs in tracks11Modules
    for (let i = 1; i <= 16; i++) {
        const oldKey = `ai-operations/11-${i}`;
        const newKey = `ai-operations/6-${i}`;
        content11 = content11.split(`tracks11Modules['${oldKey}'] = m('11-${i}',`).join(`tracks11Modules['${newKey}'] = m('6-${i}',`);
        content11 = content11.split(`'/vault/curriculum/tracks/ai-operations/11-${i}'`).join(`'/vault/curriculum/tracks/ai-operations/6-${i}'`);
    }
    fs.writeFileSync(file11, content11, 'utf8');
    console.log('Fixed app/lib/curriculum-tracks-11.ts');

    // 3. Rename references in curriculum-tracks-ui.ts
    const fileUi = path.join(__dirname, '../app/lib/curriculum-tracks-ui.ts');
    let contentUi = fs.readFileSync(fileUi, 'utf8');

    // For Track 5: id: '6-x' -> id: '5-x', and href
    for (let i = 1; i <= 15; i++) {
        contentUi = contentUi.replace(`{ id: '6-${i}', name: '5.${i} `, `{ id: '5-${i}', name: '5.${i} `);
        contentUi = contentUi.replace(`href: '/vault/curriculum/tracks/product-economics/6-${i}'`, `href: '/vault/curriculum/tracks/product-economics/5-${i}'`);
    }

    // For Track 6: id: '11-x' -> id: '6-x', and href
    for (let i = 1; i <= 16; i++) {
        contentUi = contentUi.replace(`{ id: '11-${i}', name: '6.${i} `, `{ id: '6-${i}', name: '6.${i} `);
        contentUi = contentUi.replace(`href: '/vault/curriculum/tracks/ai-operations/11-${i}'`, `href: '/vault/curriculum/tracks/ai-operations/6-${i}'`);
    }
    fs.writeFileSync(fileUi, contentUi, 'utf8');
    console.log('Fixed app/lib/curriculum-tracks-ui.ts');

    // 4. Update mappings in curriculum-data.ts
    const fileData = path.join(__dirname, '../app/lib/curriculum-data.ts');
    let contentData = fs.readFileSync(fileData, 'utf8');

    // Update embedded tool mappings
    contentData = contentData.replace(
        "if (mod.moduleId === '11-1' || mod.moduleId === '11-16') mod.embeddedTool = 'aueb';",
        "if (mod.moduleId === '11-1' || mod.moduleId === '11-16' || mod.moduleId === '6-1' || mod.moduleId === '6-16') mod.embeddedTool = 'aueb';"
    );
    contentData = contentData.replace(
        "if (mod.moduleId === '6-1') mod.embeddedTool = 'aper';",
        "if (mod.moduleId === '5-1') mod.embeddedTool = 'aper';"
    );

    // Update related articles and mappings
    contentData = contentData.replace(
        "'product-management-economics': ['6-1', '8-2', '11-1']",
        "'product-management-economics': ['5-1', '8-2', '11-1']"
    );
    contentData = contentData.replace(
        "'b2b-saas-coordination-tax-saas-engineering-margins': ['6-1', '14-1']",
        "'b2b-saas-coordination-tax-saas-engineering-margins': ['5-1', '14-1']"
    );
    contentData = contentData.replace(
        "'what-a-product-economist-actually-does': ['6-1', '13-1']",
        "'what-a-product-economist-actually-does': ['5-1', '13-1']"
    );

    fs.writeFileSync(fileData, contentData, 'utf8');
    console.log('Fixed app/lib/curriculum-data.ts');
}

fixNextConfig();
fixSitemap();
fixCompareMetadata();
fixStructuredData();
fixCurriculumPage();
fixArticlesContent();
fixArticlesData();
fixTracks();
console.log('All changes applied successfully!');

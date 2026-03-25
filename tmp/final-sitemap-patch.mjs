import fs from 'fs';

// 1. Extract 50 Comparisons
let compText = fs.readFileSync('app/comparisons/[slug]/page.tsx', 'utf8');
let compSlugs = [...compText.matchAll(/"slug"\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
let compSlugs2 = [...compText.matchAll(/(?<!")slug\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
let allComps = [...new Set([...compSlugs, ...compSlugs2])];

// 2. Extract 50 Guides
let guideText = fs.readFileSync('app/guides/page.tsx', 'utf8');
let guideSlugs = [...guideText.matchAll(/slug\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
let guideSlugs2 = [...guideText.matchAll(/"slug"\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
let allGuides = [...new Set([...guideSlugs, ...guideSlugs2])];

// 3. Prepare the Injection Payload
let injection = `
        // --- DYNAMICALLY INJECTED 50/50 MILESTONE AND EXOGRAM DOCS ---
        ...[
            ${allComps.map(s => `'${s}'`).join(',\n            ')}
        ].map(slug => ({
            url: \`\${baseUrl}/comparisons/\${slug}\`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),

        ...[
            ${allGuides.map(s => `'${s}'`).join(',\n            ')}
        ].map(slug => ({
            url: \`\${baseUrl}/guides/\${slug}\`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),

        ...exogramDocs.map(doc => ({
            url: \`\${baseUrl}/exogram/docs/\${doc.slug}\`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
`;

let sitemapStr = fs.readFileSync('app/sitemap.ts', 'utf8');

// Insert import if not exists
if (!sitemapStr.includes('exogramDocs')) {
    sitemapStr = sitemapStr.replace(/(import.*?;[\r\n]+)(?!import)/, `$1import { exogramDocs } from '@/lib/exogram-docs';\n`);
}

// Ensure we aren't double-injecting
if (!sitemapStr.includes('DYNAMICALLY INJECTED')) {
    sitemapStr = sitemapStr.replace(/(\s*\/\/\s*Legal)/, injection + '\n$1');
}

fs.writeFileSync('app/sitemap.ts', sitemapStr);
console.log('Sitemap successfully appended natively with Safe Injection Strategy.');

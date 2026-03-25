import fs from 'fs';
import path from 'path';

// 1. Extract 50 Comparisons Metadata
let compText = fs.readFileSync('app/comparisons/[slug]/page.tsx', 'utf8');
let compEntries = [];
let compRegex = /{[\s\S]*?"slug"\s*:\s*["']([^"']+)["'][\s\S]*?"title"\s*:\s*["']([^"']+)["'][\s\S]*?}/g;
let match;
while ((match = compRegex.exec(compText)) !== null) {
    compEntries.push({ slug: match[1], title: match[2], type: 'comparison' });
}
let compRegex2 = /{[\s\S]*?(?<!")slug\s*:\s*["']([^"']+)["'][\s\S]*?(?<!")title\s*:\s*["']([^"']+)["'][\s\S]*?}/g;
while ((match = compRegex2.exec(compText)) !== null) {
    compEntries.push({ slug: match[1], title: match[2], type: 'comparison' });
}
let uniqueComps = Array.from(new Map(compEntries.map(item => [item.slug, item])).values());

// 2. Extract 50 Guides by reading the filesystem
let guideEntries = [];
const guidesDir = path.join('app', 'guides');
const subdirs = fs.readdirSync(guidesDir).filter(f => fs.statSync(path.join(guidesDir, f)).isDirectory());

for (const slug of subdirs) {
    const pagePath = path.join(guidesDir, slug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf8');
        let headlineMatch = content.match(/headline:\s*['"](.*?)['"]/);
        let titleMatch = content.match(/title:\s*['"](.*?)['"]/);
        let title = headlineMatch ? headlineMatch[1] : (titleMatch ? titleMatch[1] : slug.replace(/-/g, ' '));
        
        // Clean up title
        title = title.replace(/ \| Richard Ewing/, '').replace(/Hub — /, '— ').trim();
        guideEntries.push({ slug, title, type: 'guide' });
    }
}

let uniqueGuides = Array.from(new Map(guideEntries.map(item => [item.slug, item])).values());

// 3. Write out to lib/seo-links.ts
let output = `export interface SeoLink {
    slug: string;
    title: string;
    type: 'guide' | 'comparison';
}

export const allSeoLinks: SeoLink[] = [
    ${uniqueComps.map(c => `{ slug: "${c.slug}", title: "${c.title.replace(/"/g, '\\"')}", type: "comparison" }`).join(',\n    ')},
    ${uniqueGuides.map(c => `{ slug: "${c.slug}", title: "${c.title.replace(/"/g, '\\"')}", type: "guide" }`).join(',\n    ')}
];
`;

fs.writeFileSync('app/lib/seo-links.ts', output);
console.log(`Successfully generated seo-links.ts with ${uniqueComps.length} comparisons and ${uniqueGuides.length} guides.`);

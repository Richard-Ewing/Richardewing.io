import fs from 'fs';

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
// deduplicate
let uniqueComps = Array.from(new Map(compEntries.map(item => [item.slug, item])).values());

// 2. Extract 50 Guides Metadata
let guideText = fs.readFileSync('app/guides/page.tsx', 'utf8');
let guideEntries = [];
let guideRegex = /{[\s\S]*?slug\s*:\s*["']([^"']+)["'][\s\S]*?title\s*:\s*["']([^"']+)["'][\s\S]*?}/g;
while ((match = guideRegex.exec(guideText)) !== null) {
    guideEntries.push({ slug: match[1], title: match[2], type: 'guide' });
}
let guideRegex2 = /{[\s\S]*?"slug"\s*:\s*["']([^"']+)["'][\s\S]*?"title"\s*:\s*["']([^"']+)["'][\s\S]*?}/g;
while ((match = guideRegex2.exec(guideText)) !== null) {
    guideEntries.push({ slug: match[1], title: match[2], type: 'guide' });
}
// deduplicate
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
console.log(`Generated seo-links.ts with ${uniqueComps.length} comparisons and ${uniqueGuides.length} guides.`);

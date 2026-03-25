import fs from 'fs';

let compText = fs.readFileSync('app/comparisons/[slug]/page.tsx', 'utf8');
let compSlugs = [...compText.matchAll(/"slug"\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
let compSlugs2 = [...compText.matchAll(/(?<!")slug\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
let allComps = [...new Set([...compSlugs, ...compSlugs2])];

const newGuides = [
    'multi-agent-orchestration', 'cto-to-ctro', 'ai-native-development-teams', 'post-quantum-migration', 'hybrid-ai-infrastructure',
    'ai-agent-compliance-framework', 'confidential-computing-playbook', 'gpu-finops-supercomputing', 'ai-security-posture-2026', 'spatial-computing-economics'
];

let sitemapStr = fs.readFileSync('app/sitemap.ts', 'utf8');

// Replace comparisons safely
const compReplacement = 'const allComparisonSlugs: string[] = [\n    ' + allComps.map(s => `'${s}'`).join(',') + '\n];';
sitemapStr = sitemapStr.replace(/const allComparisonSlugs:\s*string\[\]\s*=\s*\[[\s\S]*?\];/, compReplacement);

// Append new guides safely
let guideMatch = sitemapStr.match(/const allGuideSlugs:\s*string\[\]\s*=\s*\[([\s\S]*?)\];/);
if (guideMatch) {
    let existingGuidesContent = guideMatch[1].replace(/,\s*$/, '');
    let appendedGuidesContent = existingGuidesContent + ',\n    ' + newGuides.map(s => `'${s}'`).join(',') + '\n';
    let guideReplacement = 'const allGuideSlugs: string[] = [' + appendedGuidesContent + '];';
    sitemapStr = sitemapStr.replace(/const allGuideSlugs:\s*string\[\]\s*=\s*\[[\s\S]*?\];/, guideReplacement);
}

fs.writeFileSync('app/sitemap.ts', sitemapStr);
console.log('Sitemap successfully appended with ' + allComps.length + ' comparisons and 10 new guides.');

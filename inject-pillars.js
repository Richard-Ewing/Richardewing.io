/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const termsDir = path.join(__dirname, 'app', 'glossary', 'terms');

const targetSlugs = [
    'platform-engineering', 'serverless-computing', 'infrastructure-as-code',
    'data-mesh', 'data-lakehouse', 'vector-database',
    'shadow-ai', 'prompt-injection',
    'okrs',
    'microservices', 'event-driven-architecture',
    'finops', 'burn-multiple',
    'saas-valuation', 'net-revenue-retention',
    'developer-experience', 'dora-metrics', 'design-system'
];

function injectPillars() {
    const files = fs.readdirSync(termsDir).filter(f => f.endsWith('.ts'));
    let changesCount = 0;

    for (const file of files) {
        if (file === 'index.ts' || file === '2026-expansion.ts') continue;
        
        const filePath = path.join(termsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        for (const slug of targetSlugs) {
            // Match `slug: 'the-slug',` or `slug: "the-slug",`
            const regex = new RegExp(`(slug:\\s*['"]${slug}['"]\\s*,)`, 'g');
            
            content = content.replace(regex, (match) => {
                // Determine if tier is already there just to be safe. 
                // We'll just replace it and add tier: 'pillar', right after it.
                // It's possible tier: 'pillar' was added around there, but these are existing basic terms so they don't have it.
                modified = true;
                changesCount++;
                return `${match} tier: 'pillar',`;
            });
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        }
    }
    
    console.log(`Finished injecting pillars. Total changes: ${changesCount}`);
}

injectPillars();

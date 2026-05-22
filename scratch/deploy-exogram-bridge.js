/**
 * deploy-exogram-bridge.js
 * 
 * Adds ExogramBridge component import and usage to 8 compare pages.
 * Inserts the bridge BEFORE the last section/back-nav at the bottom of each page.
 */

const fs = require('fs');

const PAGES = [
    'app/compare/cursor-problems/page.tsx',
    'app/compare/why-claude-loses-context/page.tsx',
    'app/compare/why-retry-loops-happen/page.tsx',
    'app/compare/why-cursor-rewrites-files/page.tsx',
    'app/compare/why-ai-coding-burns-money/page.tsx',
    'app/compare/why-mcp-is-dangerous/page.tsx',
    'app/compare/github-copilot-problems/page.tsx',
    'app/compare/windsurf-problems/page.tsx',
];

let fixed = 0;

for (const pagePath of PAGES) {
    if (!fs.existsSync(pagePath)) {
        console.log('⚠️  Not found: ' + pagePath);
        continue;
    }
    
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Skip if already has ExogramBridge
    if (content.includes('ExogramBridge')) {
        console.log('⏭️  Already has bridge: ' + pagePath);
        continue;
    }
    
    // Add import
    if (!content.includes('ExogramBridge')) {
        // Find the last import line and add after it
        const importLines = content.match(/^import .+$/gm);
        if (importLines && importLines.length > 0) {
            const lastImport = importLines[importLines.length - 1];
            content = content.replace(
                lastImport,
                lastImport + "\nimport ExogramBridge from '@/components/ExogramBridge';"
            );
        }
    }
    
    // Find the right place to insert — before the last back-link or closing tags
    // Look for "← Return" or "← Back" or "Return to" pattern
    const backNavPatterns = [
        /<div className="text-center">\s*\n\s*<Link href="\/compare"/,
        /← Return to Comparisons/,
        /← Back to/,
        /← Return to/,
    ];
    
    let inserted = false;
    for (const pattern of backNavPatterns) {
        const match = content.match(pattern);
        if (match) {
            // Find the div that contains this back-nav
            const matchIndex = content.indexOf(match[0]);
            // Insert ExogramBridge before this element
            content = content.slice(0, matchIndex) + 
                '\n                <ExogramBridge />\n\n                ' + 
                content.slice(matchIndex);
            inserted = true;
            break;
        }
    }
    
    if (!inserted) {
        // Fallback: insert before the closing </div> of the main container
        // Find the last </main> and insert before it
        const lastMainClose = content.lastIndexOf('</main>');
        if (lastMainClose !== -1) {
            content = content.slice(0, lastMainClose) + 
                '\n                <ExogramBridge />\n            ' + 
                content.slice(lastMainClose);
            inserted = true;
        }
    }
    
    if (inserted) {
        fs.writeFileSync(pagePath, content, 'utf8');
        fixed++;
        console.log('✅ ' + pagePath);
    } else {
        console.log('⚠️  Could not find insertion point: ' + pagePath);
    }
}

console.log('\n📊 Deployed ExogramBridge to ' + fixed + '/' + PAGES.length + ' pages');

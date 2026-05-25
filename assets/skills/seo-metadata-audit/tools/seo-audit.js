const fs = require('fs');
const path = require('path');

// ============================================================================
// SEO METADATA AUDIT TOOL
// Extracts all metadata from page.tsx and layout.tsx files,
// scores them against SEO best practices, and reports violations.
// ============================================================================

const appDir = path.join(process.cwd(), 'app');

function findFiles(dir, pattern) {
    let results = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                results = results.concat(findFiles(fullPath, pattern));
            } else if (entry.name.match(pattern)) {
                results.push(fullPath);
            }
        }
    } catch(e) {}
    return results;
}

const allFiles = [
    ...findFiles(appDir, /^page\.tsx$/),
    ...findFiles(appDir, /^layout\.tsx$/),
];

const results = [];
let hardBlocks = 0;
let warnings = 0;
let recommendations = 0;

for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const relPath = path.relative(appDir, file).replace(/\\/g, '/');
    
    // Skip dynamic routes
    if (relPath.includes('[')) continue;
    if (!content.includes('export const metadata')) continue;
    
    const lines = content.split('\n');
    let title = null;
    let description = null;
    let insideMetadata = false;
    let insideNested = false; // track openGraph/twitter blocks
    let braceDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Track when we enter the metadata block
        if (line.includes('export const metadata')) {
            insideMetadata = true;
            braceDepth = 0;
        }
        
        if (!insideMetadata) continue;
        
        // Track brace depth to know when we're inside nested objects
        for (const ch of line) {
            if (ch === '{') braceDepth++;
            if (ch === '}') braceDepth--;
        }
        
        // openGraph and twitter are nested objects at depth 2+
        if (line.match(/^\s*(openGraph|twitter)\s*:/)) {
            insideNested = true;
        }
        
        // Title: handle both string and { default: '...' } formats
        if (!title && !insideNested) {
            // String format: title: 'value'
            const m1 = line.match(/^\s*title:\s*['"](.+?)['"]/);
            if (m1) title = m1[1];
            // Object format: default: 'value'
            const m2 = line.match(/^\s*default:\s*['"](.+?)['"]/);
            if (m2 && !title) title = m2[1];
        }
        
        // Description: only match top-level (not inside openGraph/twitter)
        if (!description && !insideNested && line.match(/^\s*description:\s*/)) {
            const m = line.match(/description:\s*['"](.+?)['"]/);
            if (m) description = m[1];
        }
        
        // Reset nested flag when we exit the nested block
        if (insideNested && braceDepth <= 1) {
            insideNested = false;
        }
        
        // Exit metadata block
        if (insideMetadata && braceDepth <= 0 && i > 0) {
            break;
        }
    }
    
    const issues = [];
    const status = { hardBlock: false, warning: false };
    
    if (!title) {
        issues.push('HARD_BLOCK: Missing title');
        status.hardBlock = true;
    } else {
        if (title.length > 60) {
            issues.push(`HARD_BLOCK: Title too long (${title.length}/60): "${title}"`);
            status.hardBlock = true;
        }
        if (title.endsWith('...')) {
            issues.push('HARD_BLOCK: Title contains ellipsis truncation');
            status.hardBlock = true;
        }
        if (!title.match(/[|—:\-]/)) {
            issues.push('WARNING: Title lacks brand separator (| — : -)');
            status.warning = true;
        }
        if (!title.match(/free|stop|save|avoid|unlock|hidden|why|how|calculate|exact|\$|%|\d/i)) {
            issues.push('RECOMMENDATION: Title lacks power words or numbers');
        }
    }
    
    if (!description) {
        issues.push('HARD_BLOCK: Missing description');
        status.hardBlock = true;
    } else {
        if (description.length > 155) {
            issues.push(`HARD_BLOCK: Description too long (${description.length}/155): "${description}"`);
            status.hardBlock = true;
        }
        if (description.length < 80) {
            issues.push(`WARNING: Description too short (${description.length}/155) — wasting SERP real estate`);
            status.warning = true;
        }
        if (description.endsWith('...')) {
            issues.push('HARD_BLOCK: Description contains ellipsis truncation');
            status.hardBlock = true;
        }
        if (description.match(/^(This page|Learn about|Information about)/i)) {
            issues.push('RECOMMENDATION: Description uses passive voice — rewrite to be outcome-focused');
        }
    }
    
    if (status.hardBlock) hardBlocks++;
    else if (status.warning) warnings++;
    else if (issues.length > 0) recommendations++;
    
    results.push({
        path: relPath,
        title: title || 'MISSING',
        titleLen: title ? title.length : 0,
        description: description || 'MISSING',
        descLen: description ? description.length : 0,
        issues,
        status: status.hardBlock ? 'BLOCK' : status.warning ? 'WARNING' : issues.length > 0 ? 'OPTIMIZE' : 'GOOD',
    });
}

// Sort: BLOCK first, then WARNING, then OPTIMIZE, then GOOD
const order = { BLOCK: 0, WARNING: 1, OPTIMIZE: 2, GOOD: 3 };
results.sort((a, b) => order[a.status] - order[b.status]);

// Output report
console.log('═'.repeat(80));
console.log('  SEO METADATA AUDIT REPORT');
console.log('═'.repeat(80));
console.log(`  Pages scanned: ${results.length}`);
console.log(`  🔴 HARD BLOCKS: ${hardBlocks}`);
console.log(`  🟡 WARNINGS: ${warnings}`);
console.log(`  🔵 RECOMMENDATIONS: ${results.filter(r => r.status === 'OPTIMIZE').length}`);
console.log(`  ✅ GOOD: ${results.filter(r => r.status === 'GOOD').length}`);
console.log('─'.repeat(80));

for (const r of results) {
    if (r.issues.length === 0) continue;
    const icon = r.status === 'BLOCK' ? '🔴' : r.status === 'WARNING' ? '🟡' : '🔵';
    console.log(`\n${icon} ${r.path}`);
    console.log(`   Title (${r.titleLen}): ${r.title}`);
    console.log(`   Desc  (${r.descLen}): ${r.description}`);
    r.issues.forEach(i => console.log(`   → ${i}`));
}

console.log('\n' + '═'.repeat(80));
if (hardBlocks > 0) {
    console.log('  ❌ AUDIT FAILED — Fix all HARD_BLOCK violations before committing');
    process.exit(1);
} else {
    console.log('  ✅ AUDIT PASSED — No blocking violations found');
}

const fs = require('fs');
const path = require('path');

// ============================================================================
// SEO VERIFY — Post-fix verification
// Checks: no ellipsis, no orphaned escaped quotes, all limits clean
// Usage: node assets/skills/seo-metadata-audit/tools/seo-verify.js
// ============================================================================

const appDir = path.join(process.cwd(), 'app');

function findFiles(dir, pattern) {
    let results = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) results = results.concat(findFiles(fullPath, pattern));
            else if (entry.name.match(pattern)) results.push(fullPath);
        }
    } catch(e) {}
    return results;
}

const files = [...findFiles(appDir, /^page\.tsx$/), ...findFiles(appDir, /^layout\.tsx$/)];
let errors = 0;

console.log('═'.repeat(60));
console.log('  SEO VERIFY — Post-fix integrity check');
console.log('═'.repeat(60) + '\n');

for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const relPath = path.relative(appDir, file).replace(/\\/g, '/');
    if (relPath.includes('[')) continue;
    if (!content.includes('export const metadata')) continue;

    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check for orphaned text after closing quote (corruption from regex replacement)
        if (line.match(/description:\s*'[^']*'[a-z]/i) || line.match(/description:\s*"[^"]*"[a-z]/i)) {
            console.log(`🔴 CORRUPTED DESC: ${relPath} (line ${i + 1})`);
            console.log(`   ${line.trim()}`);
            errors++;
        }
        
        // Check for ellipsis in title or description
        if (line.match(/^\s*(title|description):\s*/) && line.includes('...')) {
            // Make sure it's actual trailing ellipsis, not content like "..."
            if (line.match(/\.\.\.['"]\s*,?\s*$/)) {
                console.log(`🔴 ELLIPSIS: ${relPath} (line ${i + 1})`);
                console.log(`   ${line.trim()}`);
                errors++;
            }
        }

        // Check title length
        if (line.match(/^\s*title:\s*['"]/) && !line.match(/openGraph|twitter/)) {
            const m = line.match(/title:\s*['"](.+?)['"]/);
            if (m && m[1].length > 60) {
                console.log(`🔴 TITLE TOO LONG (${m[1].length}/60): ${relPath}`);
                console.log(`   ${m[1]}`);
                errors++;
            }
        }

        // Check description length
        if (line.match(/^\s*description:\s*['"]/) && !line.match(/openGraph|twitter/)) {
            const m = line.match(/description:\s*['"](.+?)['"]/);
            if (m && m[1].length > 155) {
                console.log(`🔴 DESC TOO LONG (${m[1].length}/155): ${relPath}`);
                console.log(`   ${m[1]}`);
                errors++;
            }
        }
    }
}

console.log('\n' + '═'.repeat(60));
if (errors === 0) {
    console.log('  ✅ ALL CLEAR — No integrity issues found');
} else {
    console.log(`  ❌ FOUND ${errors} ISSUE(S) — Fix before deploying`);
    process.exit(1);
}
console.log('═'.repeat(60) + '\n');

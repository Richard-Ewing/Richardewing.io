const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('d:\\Antigravity_RichardEwing.io\\app');
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // 1. Change all <Link href="/api/buy/..." to <a href="/api/buy/..."
    // Note: This regex needs to capture the specific Link tag and its attributes up to the closing >
    // It assumes something like <Link href="/api/buy/foo" className="bar">
    const regex = /<Link\s+([^>]*href="\/api\/buy\/[^>]+)\s*>/g;
    
    // We also need to fix the closing </Link> for those specific tags. 
    // Since an AST parser is safer, we'll do a simple trick: if we change <Link to <a on the line, we change </Link> to </a> on that same line or nearby.
    // Given the complexity of JSX multiline, let's use a simpler approach.
});

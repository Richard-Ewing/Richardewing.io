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
            if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
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

    // Replace "/curriculum/tracks" with "/vault/curriculum/tracks"
    content = content.replace(/(['"`])\/curriculum\/tracks(['"`])/g, '$1/vault/curriculum/tracks$2');
    
    // Replace "/guides" with "/vault/curriculum/tracks"
    content = content.replace(/(['"`])\/guides(['"`])/g, '$1/vault/curriculum/tracks$2');
    
    // Replace "/guides/..." with "/vault/curriculum/tracks"
    content = content.replace(/(['"`])\/guides\/[^'"`]+(['"`])/g, '$1/vault/curriculum/tracks$2');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
        console.log(`Modified: ${file}`);
    }
});

console.log(`Modified ${modifiedCount} files for redirects.`);

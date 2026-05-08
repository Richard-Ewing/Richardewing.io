const fs = require('fs');
const path = require('path');

const targetDirs = ['app', 'public', 'lib', 'components'];
const targetExts = ['.ts', '.tsx', '.md', '.json', '.txt'];

const replacements = [
    { regex: /Product Economist/g, replace: 'AI Economist' },
    { regex: /product economist/g, replace: 'AI economist' },
    { regex: /Product Economics/g, replace: 'AI Economics' },
    { regex: /product economics/g, replace: 'AI economics' }
];

function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (targetExts.includes(path.extname(fullPath))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            
            for (const r of replacements) {
                content = content.replace(r.regex, r.replace);
            }
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

for (const dir of targetDirs) {
    processDirectory(path.join(process.cwd(), dir));
}

console.log("Rebranding text replacements complete.");

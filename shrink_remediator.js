const fs = require('fs');
const path = require('path');

function walk(dir) {
    let res = [];
    let list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        let stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            res = res.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                res.push(file);
            }
        }
    });
    return res;
}

let files = walk('d:/Antigravity_RichardEwing.io/app/tools').concat(walk('d:/Antigravity_RichardEwing.io/app/components'));
let cMods = 0;

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    let orig = c;
    
    // Adding shrink-0 to prevent Grid layout engine from cutting off overflow-hidden child blocks!
    c = c.replace(/className="([^"]*overflow-hidden[^"]*)"/g, (match, p1) => {
        if (!p1.includes('shrink-0') && (p1.includes('bg-white') || p1.includes('bg-zinc-50') || p1.includes('bg-white/')) && (p1.includes('rounded-3xl') || p1.includes('rounded-2xl') || p1.includes('rounded-xl'))) {
            return `className="${p1.trim()} shrink-0"`;
        }
        return match;
    });

    if (c !== orig) {
        fs.writeFileSync(f, c);
        cMods++;
    }
});

console.log('Modified ' + cMods + ' files to add shrink-0 logic');

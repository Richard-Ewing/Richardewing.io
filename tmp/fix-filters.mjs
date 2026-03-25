import fs from 'fs';

let lines = fs.readFileSync('app/guides/page.tsx', 'utf8').split(/\r?\n/);
let modified = false;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('const freeGuides = guides.filter(g => g.free);')) {
        lines[i] = '    const freeGuides = guides.filter((g) => g?.free);';
        modified = true;
    }
    if (lines[i].includes('const premiumGuides = guides.filter(g => !g.free);')) {
        lines[i] = '    const premiumGuides = guides.filter((g) => g && !g.free);';
        modified = true;
    }
}

if (modified) {
    fs.writeFileSync('app/guides/page.tsx', lines.join('\n'));
    console.log('Successfully applied TS map closure fixes without PowerShell escaping bugs.');
} else {
    console.log('No matches found for filter lines.');
}

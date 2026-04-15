const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['app', 'components'];
const EXTENSIONS = ['.tsx', '.jsx', '.ts'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            const ext = path.extname(file);
            if (EXTENSIONS.includes(ext)) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

const files = [];
DIRECTORIES.forEach(dir => {
    if (fs.existsSync(dir)) {
        getAllFiles(dir, files);
    }
});

let modifiedFiles = 0;

const excludeList = [
    'audit-interview\\\\[sessionId]\\\\page.tsx',
    'audit-interview/[sessionId]/page.tsx'
];

files.forEach(file => {
    const isExcluded = excludeList.some(ex => file.includes(ex) || file.includes(ex.replace(/\//g, '\\')));
    if (isExcluded) return;

    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // 1. AMP UP COLORS: Upgrade any 600, 700, 800 colored text to 900+ (maximum legibility)
    const vibrantColors = ['red', 'orange', 'yellow', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];
    vibrantColors.forEach(color => {
        // Find text-[color]-600, 700, 800 and map to text-[color]-900 font-bold
        const regexMid = new RegExp(`text-${color}-[678]00(?!\\/[0-9]+)`, 'g');
        content = content.replace(regexMid, `text-${color}-900 font-extrabold`);
    });

    // 2. AMP UP GRAYS: Upgrade any text-zinc-600, 700, 800 to text-zinc-950 font-bold
    const drabColors = ['slate', 'gray', 'zinc', 'neutral', 'stone'];
    drabColors.forEach(color => {
        const regexDrab = new RegExp(`text-${color}-[5678]00(?!\\/[0-9]+)`, 'g');
        content = content.replace(regexDrab, `text-zinc-950 font-bold`);
    });

    // 3. ANY 'text-xs' or 'text-sm' should have font-bold guaranteed if it doesn't already
    // (We achieve this quickly by replacing 'text-xs' with 'text-xs font-bold' but avoiding stacking it if it's there)
    // Actually, simple regex to avoid `font-bold font-bold`: we replace `text-xs ` with `text-xs font-bold `.
    content = content.replace(/text-xs /g, 'text-xs font-bold ');
    content = content.replace(/text-sm /g, 'text-sm font-semibold ');
    
    // Cleanup any duplicates we might have just made
    content = content.replace(/font-bold font-bold/g, 'font-bold');
    content = content.replace(/font-extrabold font-bold/g, 'font-extrabold');
    content = content.replace(/font-bold font-extrabold/g, 'font-extrabold');
    content = content.replace(/font-semibold font-semibold/g, 'font-semibold');
    content = content.replace(/font-bold font-semibold/g, 'font-bold');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles++;
    }
});

console.log(`Successfully amped up text legibility across ${modifiedFiles} files.`);

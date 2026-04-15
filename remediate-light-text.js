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

    // 1. Replace text-[color]-[100/200/300] with text-[color]-800 font-bold
    const colors = ['red', 'orange', 'yellow', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'amber'];
    
    colors.forEach(color => {
        // e.g. text-yellow-200 -> text-yellow-800 font-bold
        const regexLightText = new RegExp(`text-${color}-[123]00(?!\\/[0-9]+)`, 'g');
        content = content.replace(regexLightText, `text-${color}-800 font-bold`);
        
        // Also handle cases with opacity, e.g. text-yellow-200/50 -> text-yellow-800 font-bold
        const regexLightTextOpacity = new RegExp(`text-${color}-[123]00\\/[0-9]+`, 'g');
        content = content.replace(regexLightTextOpacity, `text-${color}-800 font-bold`);
    });

    // 2. Map text-white inside gantt charts or general text-white to text-zinc-900 font-bold
    // Wait, replacing 'text-white' fully might break legitimate white text on truly dark elements like the hero headers.
    // The user screenshot showed Gantt items. 
    // Actually, looking at the code, Gantt uses `text-cyan-700` or `text-orange-200`. It didn't use `text-white`.
    // We already fixed `text-[color]-200`. Let's also look for `text-white/[number]` since those are used for faint descriptions.
    // PDI had `text-zinc-900 font-bold/60` which is valid.
    content = content.replace(/text-white\/[0-9]{1,2}/g, 'text-zinc-900 font-semibold');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles++;
    }
});

console.log(`Successfully remediated ${modifiedFiles} files for inverted contrast neon text.`);

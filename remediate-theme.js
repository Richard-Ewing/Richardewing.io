const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['app', 'components'];
const EXTENSIONS = ['.tsx', '.ts', '.jsx', '.css'];

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

// Exclude these dark files/paths explicitly where darkening text would break legibility
const excludeList = [
    'audit-interview\\\\[sessionId]\\\\page.tsx',
    'audit-interview/[sessionId]/page.tsx'
];

files.forEach(file => {
    const isExcluded = excludeList.some(ex => file.includes(ex) || file.includes(ex.replace(/\//g, '\\')));
    if (isExcluded) return;

    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;

    // Make small text bigger and bolder
    content = content.replace(/text-\[10px\]/g, 'text-xs font-medium');
    content = content.replace(/text-xs\s+text-zinc-500/g, 'text-sm text-zinc-700');
    content = content.replace(/text-xs\s+text-zinc-400/g, 'text-sm text-zinc-600');
    
    // Make general text darker
    content = content.replace(/text-zinc-500/g, 'text-zinc-700');
    content = content.replace(/text-zinc-400/g, 'text-zinc-600');
    content = content.replace(/text-slate-500/g, 'text-slate-700');
    content = content.replace(/text-slate-400/g, 'text-slate-600');
    content = content.replace(/text-gray-500/g, 'text-gray-700');
    content = content.replace(/text-gray-400/g, 'text-gray-600');

    // Make borders darker
    content = content.replace(/border-zinc-200/g, 'border-zinc-400');
    content = content.replace(/border-zinc-300/g, 'border-zinc-500');
    content = content.replace(/border-slate-200/g, 'border-slate-400');
    content = content.replace(/border-slate-300/g, 'border-slate-500');
    content = content.replace(/border-gray-200/g, 'border-gray-400');
    content = content.replace(/border-gray-300/g, 'border-gray-500');
    
    // Some specifics from common tailwind usage
    content = content.replace(/text-zinc-900\/60/g, 'text-zinc-900/80');

    // Clean up duplicate font weights if they accidentally happen
    content = content.replace(/font-medium\s+font-medium/g, 'font-medium');
    content = content.replace(/font-semibold\s+font-medium/g, 'font-semibold');
    content = content.replace(/font-bold\s+font-medium/g, 'font-bold');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles++;
    }
});

console.log(`Successfully remediated ${modifiedFiles} files for legibility and contrast.`);

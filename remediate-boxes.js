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

    // Convert Dark Backgrounds to Light Backgrounds
    content = content.replace(/bg-zinc-900/g, 'bg-zinc-50 border border-zinc-200');
    content = content.replace(/bg-zinc-950/g, 'bg-white border border-zinc-200');
    content = content.replace(/bg-slate-900/g, 'bg-slate-50 border border-slate-200');
    content = content.replace(/bg-slate-950/g, 'bg-white border border-slate-200');
    content = content.replace(/bg-gray-900/g, 'bg-gray-50 border border-gray-200');
    content = content.replace(/bg-gray-950/g, 'bg-white border border-gray-200');
    content = content.replace(/bg-neutral-900/g, 'bg-neutral-50 border border-neutral-200');
    content = content.replace(/bg-neutral-950/g, 'bg-white border border-neutral-200');
    
    // Gradients
    content = content.replace(/from-zinc-900(\/\d+)?/g, 'from-zinc-100');
    content = content.replace(/via-zinc-900(\/\d+)?/g, 'via-zinc-100');
    content = content.replace(/to-zinc-900(\/\d+)?/g, 'to-zinc-50');
    
    content = content.replace(/from-slate-900(\/\d+)?/g, 'from-slate-100');
    content = content.replace(/via-slate-900(\/\d+)?/g, 'via-slate-100');
    content = content.replace(/to-slate-900(\/\d+)?/g, 'to-slate-50');

    content = content.replace(/from-neutral-900(\/\d+)?/g, 'from-neutral-100');
    content = content.replace(/via-neutral-900(\/\d+)?/g, 'via-neutral-100');
    content = content.replace(/to-neutral-900(\/\d+)?/g, 'to-neutral-50');

    // Solid blacks
    content = content.replace(/bg-black/g, 'bg-zinc-50 border border-zinc-300');
    content = content.replace(/bg-\[#111111\]/g, 'bg-white border border-zinc-200');
    content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-white border border-zinc-200');
    
    // Fix any remaining light text that would be on the new light background
    content = content.replace(/text-white/g, 'text-zinc-950 font-semibold');
    content = content.replace(/text-zinc-100/g, 'text-zinc-900 font-medium');
    content = content.replace(/text-zinc-200/g, 'text-zinc-900');
    content = content.replace(/text-zinc-300/g, 'text-zinc-800');
    content = content.replace(/text-slate-100/g, 'text-slate-900 font-medium');
    content = content.replace(/text-slate-200/g, 'text-slate-900');
    content = content.replace(/text-[#ffffff]/g, 'text-zinc-950 font-semibold');
    
    // "all smaller text in smaller boxes SITE WIDE, need to address the shading of the text"
    // "massive darken of the shade"
    content = content.replace(/text-sm\s+text-[a-z]+-\d00/g, 'text-sm text-zinc-900 font-medium');
    content = content.replace(/text-xs\s+text-[a-z]+-\d00/g, 'text-xs text-zinc-900 font-bold');
    
    // Further darkening
    content = content.replace(/text-zinc-500/g, 'text-zinc-800');
    content = content.replace(/text-slate-500/g, 'text-slate-800');
    content = content.replace(/text-gray-500/g, 'text-gray-800');
    content = content.replace(/text-neutral-500/g, 'text-neutral-800');

    // And make sure any `text-zinc-400` that wasn't transformed earlier is transformed
    content = content.replace(/text-zinc-400/g, 'text-zinc-900 font-medium');
    content = content.replace(/text-slate-400/g, 'text-slate-900 font-medium');
    content = content.replace(/text-gray-400/g, 'text-gray-900 font-medium');
    content = content.replace(/text-neutral-400/g, 'text-neutral-900 font-medium');

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles++;
    }
});

console.log(`Successfully remediated ${modifiedFiles} files for black boxes and text shading.`);

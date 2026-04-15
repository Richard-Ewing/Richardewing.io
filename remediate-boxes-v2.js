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

    // 1. Target Dark Hex Codes in Backgrounds/Gradients
    // Matches bg-[#0f1115], from-[#0a0c10], via-[#1c1c1c], to-[#000000]
    content = content.replace(/bg-\[#[0-1][0-9a-fA-F]{5}\]/g, 'bg-zinc-50 border border-zinc-200');
    content = content.replace(/from-\[#[0-1][0-9a-fA-F]{5}\]/g, 'from-zinc-50');
    content = content.replace(/via-\[#[0-1][0-9a-fA-F]{5}\]/g, 'via-zinc-100');
    content = content.replace(/to-\[#[0-1][0-9a-fA-F]{5}\]/g, 'to-zinc-50');

    // 2. Fix Unreadable Faint Text (e.g. text-cyan-500/60 => text-cyan-800 font-bold)
    // For small text contexts. We'll target text-[color]-[300-500]/[10-80]
    // Red, Cyan, Purple, Emerald, Blue, etc.
    const colors = ['red', 'cyan', 'blue', 'purple', 'emerald', 'indigo', 'orange', 'yellow', 'zinc', 'slate'];
    colors.forEach(color => {
        const regexFade = new RegExp(`text-${color}-[3-5]00\\/[1-8]0`, 'g');
        content = content.replace(regexFade, `text-${color}-900 font-bold`);
        
        // Also just base light colors on dark background which are now on light backgrounds
        const regexLight = new RegExp(`text-${color}-[3-4]00(?!\\/)`, 'g');
        content = content.replace(regexLight, `text-${color}-800 font-semibold`);
    });

    // 3. Fix the "White text in dark gradients" text sizes.
    // If we have `text-white/60`, make it `text-zinc-900`
    content = content.replace(/text-white\/[0-9]+/g, 'text-zinc-900 font-bold');
    
    // 4. Any GlowCard components that still have dark styles internally (e.g., if there's a specific wrapper we missed)
    // 5. Explicitly replace via-black
    content = content.replace(/via-black/g, 'via-zinc-100');
    content = content.replace(/to-black/g, 'to-zinc-50');
    
    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles++;
    }
});

console.log(`Successfully remediated ${modifiedFiles} files for hex codes and opacity shading.`);

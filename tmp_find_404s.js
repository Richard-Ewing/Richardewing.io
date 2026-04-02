const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'app');
const internalLinks = new Set();
const existingPaths = new Set();

function scanForFiles(dir, callback) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            // Track all directory paths for App Router 
            const routePath = '/' + path.relative(rootDir, fullPath).replace(/\\/g, '/');
            if (fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'route.ts'))) {
                existingPaths.add(routePath);
                // Handle catch-all routes
                if (routePath.includes('[...')) {
                    existingPaths.add('CATCH-ALL');
                }
            }
            scanForFiles(fullPath, callback);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            callback(fullPath);
        }
    }
}

// Add root page.tsx
if(fs.existsSync(path.join(rootDir, 'page.tsx'))) existingPaths.add('/');

scanForFiles(rootDir, (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.matchAll(/href=["'](\/?[^"']+)["']/g);
    for (const match of matches) {
        if (match[1].startsWith('/') && !match[1].startsWith('//')) {
            internalLinks.add({ url: match[1], file: path.relative(__dirname, filePath) });
        }
    }
});

const errors = [];
for (const linkObj of internalLinks) {
    let checkUrl = linkObj.url.split('#')[0].split('?')[0]; // simple normalizer
    if (checkUrl.endsWith('/') && checkUrl.length > 1) checkUrl = checkUrl.slice(0, -1);
    
    if (checkUrl === '/') continue;

    let found = false;
    if (existingPaths.has(checkUrl)) found = true;
    
    // Dynamic/catch-all checks (basic)
    if (!found) {
        for (const p of existingPaths) {
            if (p === 'CATCH-ALL') { found = true; break; }
            if (p.includes('[') && p.includes(']')) {
                // very basic dynamic route bypass
                const baseRoute = p.split(/\[\w+\]/)[0];
                if (checkUrl.startsWith(baseRoute)) found = true;
            }
        }
    }

    if (!found) {
        errors.push(`404 Warning: ${checkUrl} (found in ${linkObj.file})`);
    }
}

console.log(`Scanned ${internalLinks.size} internal linking usages.`);
console.log(`Found ${errors.length} potential 404s:`);
errors.forEach(e => console.log(e));

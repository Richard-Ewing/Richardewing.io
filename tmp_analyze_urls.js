const fs = require('fs');
const http = require('http');

async function fetchSitemap() {
    return new Promise((resolve, reject) => {
        http.get('http://localhost:3000/sitemap.xml', (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function fetchUrlStatus(path) {
    return new Promise((resolve) => {
        http.get(http://localhost:3000 + path, (res) => {
            resolve(res.statusCode);
        }).on('error', () => resolve(0));
    });
}

async function main() {
    let sitemap = '';
    try { sitemap = await fetchSitemap(); } catch(e) {}
    const sitemapUrls = new Set();
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(sitemap)) !== null) { sitemapUrls.add(match[1]); }

    const urlsFile = 'C:/Users/richa/.gemini/antigravity/brain/9800a0e7-c69d-4ea0-9d83-ab924550d94f/scratch/crawled_not_indexed_tasks.txt';
    const lines = fs.readFileSync(urlsFile, 'utf8').split('\n').map(l => l.trim()).filter(l => l);
    
    const results = [];
    for (let i = 0; i < lines.length; i++) {
        const fullUrl = lines[i];
        if(!fullUrl.startsWith('http')) continue;
        const urlObj = new URL(fullUrl);
        const path = urlObj.pathname + urlObj.search;
        const inSitemap = sitemapUrls.has(fullUrl) || sitemapUrls.has(fullUrl.replace('http://', 'https://'));
        const statusCode = await fetchUrlStatus(path);
        results.push({ url: fullUrl, path: path, inSitemap, statusCode });
    }

    fs.writeFileSync('C:/Users/richa/.gemini/antigravity/brain/2c29e758-8894-4442-ba5d-c58a95f3ce37/scratch/url_analysis.json', JSON.stringify(results, null, 2));
    console.log('Analysis complete! File written.');
}

main();

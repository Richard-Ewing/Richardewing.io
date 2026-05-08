const { execSync } = require('child_process');
const https = require('https');

https.get("https://www.richardewing.io/sitemap.xml", (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
        const regex = /<loc>(.*?)<\/loc>/g;
        let match;
        const urls = [];
        while ((match = regex.exec(data)) !== null) {
            urls.push(match[1]);
        }

        if (urls.length === 0) {
            console.log("No URLs found. Sitemap might be down or not XML.");
            return;
        }

        // Filter to only ping blog posts and frameworks
        const targetUrls = urls.filter(u => u.includes('/blog/') || u.includes('/articles/frameworks/') || u === 'https://www.richardewing.io/blog');
        
        // Take first 100 to avoid hitting the 200 limit from other scripts.
        const limitedUrls = targetUrls.slice(0, 100);
        console.log(`Found ${targetUrls.length} relevant URLs. Pinging the first ${limitedUrls.length} to GSC...`);

        const chunkSize = 10;
        for (let i = 0; i < limitedUrls.length; i += chunkSize) {
            const chunk = limitedUrls.slice(i, i + chunkSize);
            console.log(`Executing chunk ${Math.floor(i / chunkSize) + 1}...`);
            try {
                const output = execSync(`node ping-google.js ${chunk.join(' ')}`, { encoding: 'utf-8' });
                console.log(output);
            } catch (e) {
                console.error(`Error executing chunk:`, e.message);
            }
        }
        console.log('Mass ping to GSC complete.');
    });
});

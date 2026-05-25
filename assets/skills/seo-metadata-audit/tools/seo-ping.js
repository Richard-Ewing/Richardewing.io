const { execSync } = require('child_process');
const https = require('https');
const path = require('path');

// ============================================================================
// SEO PING — One command to notify both Google and Bing
// Usage: node assets/skills/seo-metadata-audit/tools/seo-ping.js
// ============================================================================

const rootDir = path.resolve(__dirname, '..', '..', '..', '..');

console.log('═'.repeat(60));
console.log('  SEO PING — Google Indexing API + Bing IndexNow');
console.log('═'.repeat(60));

// ─── STEP 1: Bing IndexNow (bulk — all sitemap URLs) ───────────────────────
console.log('\n📡 STEP 1: Bing IndexNow (bulk sitemap submission)...\n');

try {
    const output = execSync(`node ping-all.js`, {
        encoding: 'utf-8',
        cwd: rootDir,
        timeout: 30000,
    });
    console.log(output);
} catch (e) {
    console.error('Bing IndexNow error:', e.message);
}

// ─── STEP 2: Google Indexing API (priority pages) ───────────────────────────
console.log('\n📡 STEP 2: Google Indexing API (priority crawl queue)...\n');

// Fetch sitemap to get all URLs
const sitemapUrl = 'https://www.richardewing.io/sitemap.xml';

https.get(sitemapUrl, (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
        const regex = /<loc>(.*?)<\/loc>/g;
        let match;
        const allUrls = [];
        while ((match = regex.exec(data)) !== null) {
            allUrls.push(match[1]);
        }

        if (allUrls.length === 0) {
            console.log('No URLs found in sitemap.');
            return;
        }

        // Filter to static pages only (skip dynamic blog/glossary/compare slugs for quota)
        // Focus on the pages most likely to have updated metadata
        const priorityPaths = [
            '/tools', '/compare', '/industries', '/exogram',
            '/advisory', '/blog', '/pricing', '/principal',
            '/faq', '/glossary', '/benchmark', '/reports',
            '/curriculum', '/diagnose', '/frameworks', '/resources',
            '/for-boards', '/for-ctos', '/for-investors',
            '/workshops', '/testimonials', '/checklist', '/challenges',
            '/certification', '/briefings', '/executive-briefing',
            '/articles', '/profiles', '/book', '/methodology',
            '/roi', '/start-here', '/diagrams', '/system-prompts',
            '/telemetry', '/partnerships', '/doctrine', '/manifesto',
            '/skills', '/answers', '/ai-integration', '/architecture',
            '/runtime', '/failures', '/case-studies', '/careers',
            '/legal', '/system', '/benchmarks',
        ];

        // Include URLs that start with any priority path
        const priorityUrls = allUrls.filter(url => {
            const urlPath = url.replace('https://www.richardewing.io', '');
            // Include root
            if (urlPath === '' || urlPath === '/') return true;
            // Include if it starts with a priority path and doesn't have too many segments (skip deep dynamic pages)
            return priorityPaths.some(p => urlPath.startsWith(p)) && urlPath.split('/').length <= 4;
        });

        // Cap at 200 (Google daily limit)
        const urlsToSubmit = priorityUrls.slice(0, 200);

        console.log(`Found ${allUrls.length} total sitemap URLs`);
        console.log(`Filtered to ${priorityUrls.length} priority URLs`);
        console.log(`Submitting ${urlsToSubmit.length} URLs (Google limit: 200/day)\n`);

        // Submit in chunks of 10
        const chunkSize = 10;
        let success = 0;
        let errors = 0;

        for (let i = 0; i < urlsToSubmit.length; i += chunkSize) {
            const chunk = urlsToSubmit.slice(i, i + chunkSize);
            const chunkNum = Math.floor(i / chunkSize) + 1;
            const totalChunks = Math.ceil(urlsToSubmit.length / chunkSize);

            try {
                const output = execSync(
                    `node ping-google.js ${chunk.join(' ')}`,
                    { encoding: 'utf-8', cwd: rootDir, timeout: 30000 }
                );
                const s = (output.match(/SUCCESS/g) || []).length;
                const e = (output.match(/ERROR/g) || []).length;
                success += s;
                errors += e;
                
                // If we hit quota, stop early
                if (output.includes('429')) {
                    console.log(`\n⚠️ Google quota reached after ${success} URLs. Remaining will be picked up on next crawl.`);
                    break;
                }
                
                process.stdout.write(`  Chunk ${chunkNum}/${totalChunks}: ${s} success, ${e} errors\n`);
            } catch (err) {
                console.error(`  Chunk ${chunkNum} error: ${err.message}`);
                errors += chunk.length;
            }
        }

        console.log('\n' + '═'.repeat(60));
        console.log('  RESULTS SUMMARY');
        console.log('═'.repeat(60));
        console.log(`  Bing IndexNow:  ✅ All sitemap URLs submitted`);
        console.log(`  Google API:     ✅ ${success} accepted, ❌ ${errors} errors`);
        console.log('═'.repeat(60) + '\n');
    });
}).on('error', (e) => {
    console.error('Error fetching sitemap:', e.message);
});

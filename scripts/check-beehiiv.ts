import fs from 'fs';
import { allArticles } from '../app/lib/blog-data';
import { RESEARCH_CORPUS } from '../app/lib/research-corpus';

async function checkBeehiiv() {
    console.log("Checking live Beehiiv feed at https://theaieconomist.beehiiv.com/ ...");
    try {
        const res = await fetch('https://theaieconomist.beehiiv.com/', {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
        });
        const html = await res.text();
        const matches = [...html.matchAll(/href="(\/p\/[^"]+)"/g)].map(m => m[1]);
        const unique = [...new Set(matches)];
        
        console.log(`Found ${unique.length} post link(s) on Beehiiv homepage:`);
        unique.forEach(link => console.log(" - " + link));

        const blogSlugs = new Set(Object.keys(allArticles));
        const researchUrls = new Set(RESEARCH_CORPUS.map(r => r.url.toLowerCase()));

        console.log("\nChecking details for each post link:");
        for (const path of unique) {
            const fullUrl = `https://theaieconomist.beehiiv.com${path}`;
            const pSlug = path.replace('/p/', '');
            const inBlogData = blogSlugs.has(pSlug);
            const inResearch = researchUrls.has(fullUrl.toLowerCase());

            console.log(`\nSlug: ${pSlug}`);
            console.log(`  Full URL: ${fullUrl}`);
            console.log(`  In app/lib/blog-data.ts: ${inBlogData ? 'YES' : 'NO'}`);
            console.log(`  In app/lib/research-corpus.ts: ${inResearch ? 'YES' : 'NO'}`);

            try {
                const pRes = await fetch(fullUrl, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
                });
                if (pRes.ok) {
                    const pPage = await pRes.text();
                    const titleMatch = pPage.match(/<title>(.*?)<\/title>/);
                    const title = titleMatch ? titleMatch[1].replace(' - The AI Economist', '').trim() : 'Unknown';
                    console.log(`  Live Title: "${title}"`);
                }
            } catch (err) {
                console.error("  Error fetching post detail:", err);
            }
        }
    } catch (err) {
        console.error("Error fetching Beehiiv homepage:", err);
    }
}

checkBeehiiv();

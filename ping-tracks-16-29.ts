import { execSync } from 'child_process';
import { modules } from './app/lib/curriculum-data';

const baseUrl = 'https://www.richardewing.io/curriculum/tracks/';
let urls = [];

// Get all module slugs
for (const [slug, mod] of Object.entries(modules)) {
    // Determine if it belongs to Track 16 through 29
    // Slugs usually look like ai-operations/11-1 or guides/16-4
    // or just 18-1
    let isTarget = false;
    
    // Check if the moduleId starts with 16- through 29-
    const match = mod.moduleId.match(/^(\d+)-/);
    if (match) {
        const num = parseInt(match[1]);
        if (num >= 16 && num <= 29) {
            isTarget = true;
        }
    }
    
    if (isTarget) {
        urls.push(`${baseUrl}${slug}`);
    }
}

console.log(`Pinging ${urls.length} target URLs for Tracks 16-29 to Google and Bing...`);

if (urls.length > 0) {
    try {
        execSync(`node ping-google.js ${urls.join(' ')}`, { stdio: 'inherit' });
    } catch (e) {
        console.error('Error pinging Google:', (e as Error).message);
    }

    try {
        execSync(`node ping-indexnow.js ${urls.join(' ')}`, { stdio: 'inherit' });
    } catch (e) {
        console.error('Error pinging IndexNow:', (e as Error).message);
    }

    console.log('Automated indexing payload dispatched.');
} else {
    console.log("No URLs found!");
}

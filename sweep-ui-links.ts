import { tracks } from './app/lib/curriculum-tracks-ui';
import { getAllModuleSlugs, getModule } from './app/lib/curriculum-data';

async function sweep() {
    console.log("Starting site-wide sweep for UI broken links...");
    let brokenLinks = 0;
    let totalLinks = 0;

    // 1. Check all UI curriculum links
    tracks.forEach(track => {
        track.modules.forEach(mod => {
            if (mod.href && mod.href.includes('/vault/curriculum/tracks/')) {
                totalLinks++;
                // Extract the slug
                const slugStr = mod.href.replace('/vault/curriculum/tracks/', '');
                
                const moduleData = getModule(slugStr);
                if (!moduleData) {
                    console.log(`❌ BROKEN LINK: Track "${track.title}" -> Module "${mod.name}"`);
                    console.log(`   href: ${mod.href}`);
                    console.log(`   slug resolved as: ${slugStr} (NOT FOUND in registry)\n`);
                    brokenLinks++;
                }
            }
        });
    });

    console.log(`\nSweep complete. Checked ${totalLinks} curriculum links.`);
    if (brokenLinks === 0) {
        console.log(`✅ All curriculum UI links are valid and resolve to the backend registry.`);
    } else {
        console.log(`❌ Found ${brokenLinks} broken curriculum UI links.`);
    }
}

sweep();

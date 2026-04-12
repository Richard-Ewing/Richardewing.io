const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const key = require('../google-credentials.json');

const jwtClient = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

const MAX_BATCH_SIZE = 200; // Google Indexing API single batch limit

async function pushSeoMatrix() {
    const dataPath = path.join(__dirname, '../app/lib/pseo-matrix.json');
    if (!fs.existsSync(dataPath)) {
        console.log("No pSEO matrix generated yet. Run the generator script first.");
        return;
    }

    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Found ${data.length} Programmatic SEO entries.`);

    // We will ping a maximum of 200 URLs at a time to stay within limits.
    // In production, slice this array or keep a state file to know where you left off.
    const batch = data.slice(0, MAX_BATCH_SIZE);

    jwtClient.authorize(function(err, tokens) {
        if (err) {
            console.error('Authorization error:', err);
            return;
        }
        console.log("Authenticated with Google API.");
        
        let successCount = 0;
        let p = Promise.resolve();

        batch.forEach((entry, idx) => {
            p = p.then(() => new Promise((resolve) => {
                const url = `https://www.richardewing.io/compare/${entry.slug}`;
                const options = {
                    url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${tokens.access_token}`
                    },
                    body: JSON.stringify({
                        url: url,
                        type: 'URL_UPDATED'
                    })
                };

                // Use native fetch to avoid extra dependencies footprint
                fetch(options.url, {
                    method: options.method,
                    headers: options.headers,
                    body: options.body
                })
                .then(res => res.json())
                .then(json => {
                    console.log(`[${idx+1}/${batch.length}] Pinged ${url} - Status: ${json.urlNotificationMetadata?.latestUpdate?.type || 'Success'}`);
                    successCount++;
                    // Staggering requests slightly to avoid Google dropping them
                    setTimeout(resolve, 500);
                })
                .catch(e => {
                    console.error(`Error forcing indexing for ${url}:`, e);
                    resolve();
                });
            }));
        });

        p.then(() => {
            console.log(`\n✅ Completed indexing ping for ${successCount} permutations. Run tomorrow for the next batch.`);
        });
    });
}

pushSeoMatrix();

const https = require('https');

// The IndexNow Key
const key = "3340d267ae86446787754f0e60a3edc5";
const keyLocation = "https://www.richardewing.io/" + key + ".txt";

https.get("https://www.richardewing.io/sitemap.xml", (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
        // Extract all <loc> contents
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

        console.log(`Found ${urls.length} URLs in the live sitemap. Sending mass bulk ping...`);

        const payload = JSON.stringify({
          host: "www.richardewing.io",
          key: key,
          keyLocation: keyLocation,
          urlList: urls
        });

        const options = {
          hostname: 'api.indexnow.org',
          port: 443,
          path: '/indexnow',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Content-Length': Buffer.byteLength(payload)
          }
        };

        const req = https.request(options, (res2) => {
          console.log(`STATUS: ${res2.statusCode}`);
          if (res2.statusCode === 200 || res2.statusCode === 202) {
              console.log("Mass Bulk Submission perfectly accepted by IndexNow API.");
          } else {
             console.log("Something went wrong!");
          }
        });
        
        req.on('error', (e) => {
          console.error(`ERROR: ${e.message}`);
        });

        req.write(payload);
        req.end();
    });
}).on('error', (e) => {
    console.error(`Error fetching sitemap: ${e.message}`);
});

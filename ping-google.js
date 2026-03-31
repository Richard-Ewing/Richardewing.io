const { google } = require('googleapis');
const https = require('https');
const fs = require('fs');
const path = require('path');

// 1. Setup paths
const keyPath = path.join(__dirname, 'google-credentials.json');

// Ensure the credential file exists before proceeding
if (!fs.existsSync(keyPath)) {
  console.error("🔴 ERROR: google-credentials.json not found in the root directory!");
  console.error("Please place the Service Account JSON file downloaded from Google Cloud into the root of this project.");
  process.exit(1);
}

// 2. Extract URLs from command line arguments
const urls = process.argv.slice(2);

if (urls.length === 0) {
  console.error("🔴 ERROR: Please provide at least one URL to ping.");
  console.error("Example: node ping-google.js https://www.richardewing.io/blog/test-article");
  process.exit(1);
}

// 3. Authenticate with Google API using the Service Account
const auth = new google.auth.GoogleAuth({
  keyFile: keyPath,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

async function pingGoogle(urlToPing) {
  try {
    // Await the auth client
    const authClient = await auth.getClient();
    
    // Obtain the access token required for the header
    const accessTokenObj = await authClient.getAccessToken();
    const token = accessTokenObj.token;

    // Define the JSON payload according to Google Indexing API specifications
    const payload = JSON.stringify({
      url: urlToPing,
      type: "URL_UPDATED" // Use URL_DELETED if you want to remove a page from the index
    });

    const options = {
      hostname: 'indexing.googleapis.com',
      port: 443,
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    console.log(`\n📡 Transmitting URL to Google Search Console: ${urlToPing}`);

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
            console.log(`✅ SUCCESS (Status 200)`);
            console.log(`Google has accepted the request. The URL has been pushed to the Priority Crawl Queue.`);
        } else if (res.statusCode === 403) {
            console.error(`🔴 ERROR 403: Forbidden`);
            console.error(`Google rejected the request. You must add the Service Account email ('client_email' from the JSON file) as an 'Owner' in your Google Search Console settings.`);
        } else if (res.statusCode === 429) {
            console.error(`🔴 ERROR 429: Quota Exceeded`);
            console.error(`You have hit your daily Google Indexing API limit (typically 200 URLs/day).`);
        } else {
            console.log(`⚠️ WARNING: Received Status Code ${res.statusCode}`);
            console.log(`Response Payload: ${data}`);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`🔴 Critical Request Error: ${e.message}`);
    });

    req.write(payload);
    req.end();

  } catch (error) {
    console.error(`🔴 Failed to authenticate or dispatch request: ${error.message}`);
  }
}

// Process all URLs sequentially
async function processAll() {
  console.log(`\nInitiating Google Indexing API Protocol...`);
  console.log(`Total Targets: ${urls.length}\n`);

  for (const url of urls) {
      await pingGoogle(url);
  }
}

processAll();

// ping-indexnow.js
const https = require('https');

// The IndexNow Key
const key = "3340d267ae86446787754f0e60a3edc5";
const keyLocation = "https://www.richardewing.io/" + key + ".txt";

// Pass the URLs you want to ping via command line arguments
// e.g., node ping-indexnow.js https://www.richardewing.io/blog/cio-com
const urls = process.argv.slice(2);

if (urls.length === 0) {
    console.error("Please provide at least one URL to ping. Example: node ping-indexnow.js https://www.richardewing.io/");
    process.exit(1);
}

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

console.log(`📡 Pinging IndexNow API for ${urls.length} URL(s)...`);

const req = https.request(options, (res) => {
  console.log(`\n✅ STATUS: ${res.statusCode}`);
  if (res.statusCode === 200 || res.statusCode === 202) {
      console.log("Success! The search engines have accepted the ping.");
  } else {
      console.log("Warning: IndexNow responded with a non-200 status.");
  }
  res.on('data', (d) => process.stdout.write(d + "\n"));
});

req.on('error', (e) => {
  console.error(`❌ ERROR: ${e.message}`);
});

req.write(payload);
req.end();

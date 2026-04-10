const { google } = require('googleapis');
const https = require('https');
const fs = require('fs');
const path = require('path');

// 1. Setup paths
const keyPath = path.join(__dirname, 'google-credentials.json');

// Ensure the credential file exists before proceeding
if (!fs.existsSync(keyPath)) {
  console.error("🔴 ERROR: google-credentials.json not found in the root directory!");
  process.exit(1);
}

// URLs from User Request
const urls = [
"https://www.richardewing.io/vault/curriculum/tracks/25/25-9",
"https://www.richardewing.io/vault/curriculum/tracks/model-routing/25-9",
"https://www.richardewing.io/vault/curriculum/tracks/cloud-finops/14-13",
"https://www.richardewing.io/vault/curriculum/tracks/ai-operations/11-10",
"https://www.richardewing.io/vault/curriculum/tracks/ai-operations/11-14",
"https://www.richardewing.io/vault/curriculum/tracks/enterprise-architecture/12-7",
"https://www.richardewing.io/vault/curriculum/tracks/ai-operations/11-2",
"https://www.richardewing.io/vault/curriculum/tracks/startup-economics/10-15",
"https://www.richardewing.io/vault/curriculum/tracks/ai-operations/11-8",
"https://www.richardewing.io/vault/curriculum/tracks/enterprise-architecture/12-3",
"https://www.richardewing.io/vault/curriculum/tracks/data-economics/8-8",
"https://www.richardewing.io/vault/curriculum/tracks/startup-economics/10-5",
"https://clerk.richardewing.io/",
"https://www.richardewing.io/glossary/serverless",
"https://www.richardewing.io/industries/cybersecurity",
"https://www.richardewing.io/glossary/design-system",
"https://www.richardewing.io/glossary/rice-framework",
"https://www.richardewing.io/.well-known/ai-agent-manifest.json",
"https://www.richardewing.io/curriculum/tracks/cloud-finops/14-14",
"https://www.richardewing.io/curriculum/tracks/engineering-economics/1-3",
"https://www.richardewing.io/curriculum/tracks/fullstack-career/18-2",
"https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-1",
"https://www.richardewing.io/comparisons/supabase-vs-firebase",
"http://richardewing.io/",
"https://richardewing.io/",
"https://www.richardewing.io/curriculum/tracks/engineering-economics/1-1",
"https://www.richardewing.io/curriculum/tracks/34/34-2",
"https://www.richardewing.io/curriculum/tracks/fractional-engineering/50-3",
"https://www.richardewing.io/curriculum/tracks/agile-economics/19-4",
"https://richardewing.io/canonical/capital-allocation-strategy.html",
"https://www.richardewing.io/canonical/capital-allocation-strategy.html",
"https://www.richardewing.io/briefs/cost-of-maybe.html",
"https://www.richardewing.io/vault/curriculum/tracks/capstone/4-14",
"https://www.richardewing.io/vault/curriculum/tracks/devops-economics/5-15",
"https://www.richardewing.io/vault/curriculum/tracks/rd-capital-management/3-15",
"https://www.richardewing.io/vault/curriculum/tracks/rd-capital-management/3-7",
"https://www.richardewing.io/vault/curriculum/tracks/engineering-economics/1-14",
"https://www.richardewing.io/vault/curriculum/tracks/product-economics/6-4",
"https://www.richardewing.io/vault/curriculum/tracks/capstone/4-15",
"https://www.richardewing.io/vault/curriculum/tracks/devops-economics/5-7",
"https://www.richardewing.io/vault/curriculum/tracks/engineering-economics/1-10",
"https://www.richardewing.io/vault/curriculum/tracks/capstone/4-11",
"https://www.richardewing.io/vault/curriculum/tracks/capstone/4-10",
"https://www.richardewing.io/vault/curriculum/tracks/devops-economics/5-12",
"https://www.richardewing.io/vault/curriculum/tracks/engineering-economics/1-16",
"https://www.richardewing.io/vault/curriculum/tracks/ai-product-economics/2-11",
"https://www.richardewing.io/vault/curriculum/tracks/product-economics/6-13",
"https://www.richardewing.io/vault/curriculum/tracks/ai-product-economics/2-16",
"https://www.richardewing.io/vault/curriculum/tracks/rd-capital-management/3-10",
"https://www.richardewing.io/vault/curriculum/tracks/product-economics/6-7",
"https://www.richardewing.io/vault/curriculum/tracks/devops-economics/5-14",
"https://www.richardewing.io/vault/curriculum/tracks/capstone/4-9",
"https://www.richardewing.io/vault/curriculum/tracks/devops-economics/5-5",
"https://www.richardewing.io/vault/curriculum/tracks/rd-capital-management/3-8",
"https://www.richardewing.io/vault/curriculum/tracks/product-economics/6-6",
"https://www.richardewing.io/vault/curriculum/tracks/monolith-classic-database/45-9",
"https://www.richardewing.io/curriculum/tracks/breaking-into-tech/56-6",
"https://www.richardewing.io/vault/curriculum/tracks/35/35-5",
"https://www.richardewing.io/vault/curriculum/tracks/40/40-7",
"https://www.richardewing.io/vault/curriculum/tracks/36/36-4",
"https://www.richardewing.io/vault/curriculum/tracks/healthtech-economics/53-6",
"https://www.richardewing.io/vault/curriculum/tracks/traditional-pm/21-10",
"https://www.richardewing.io/vault/curriculum/tracks/fintech-economics/52-13",
"https://www.richardewing.io/vault/curriculum/tracks/27/27-8",
"https://www.richardewing.io/vault/curriculum/tracks/agentic-governance/58-2",
"https://www.richardewing.io/vault/curriculum/tracks/healthtech-economics/53-12",
"https://www.richardewing.io/vault/curriculum/tracks/32/32-7",
"https://www.richardewing.io/vault/curriculum/tracks/25/25-7",
"https://www.richardewing.io/vault/curriculum/tracks/agentic-governance/58-5",
"https://www.richardewing.io/vault/curriculum/tracks/27/27-10",
"https://www.richardewing.io/vault/curriculum/tracks/mainframe-legacy-systems/42-6",
"https://www.richardewing.io/vault/curriculum/tracks/33/33-10",
"https://www.richardewing.io/vault/curriculum/tracks/27/27-6",
"https://www.richardewing.io/vault/curriculum/tracks/24/24-7",
"https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-11",
"https://www.richardewing.io/vault/curriculum/tracks/31/31-9",
"https://www.richardewing.io/vault/curriculum/tracks/23/23-10",
"https://www.richardewing.io/vault/curriculum/tracks/35/35-10",
"https://www.richardewing.io/vault/curriculum/tracks/executive-alignment-governance/47-2",
"https://www.richardewing.io/vault/curriculum/tracks/outsourcing-economics/44-3",
"https://www.richardewing.io/curriculum/tracks/capstone/4-14",
"https://www.richardewing.io/vault/curriculum/tracks/23/23-9",
"https://www.richardewing.io/vault/curriculum/tracks/fractional-engineering/50-2",
"https://www.richardewing.io/vault/curriculum/tracks/25/25-6",
"https://www.richardewing.io/vault/curriculum/tracks/26/26-6",
"https://www.richardewing.io/vault/curriculum/tracks/b2b-saas-economics/51-13",
"https://www.richardewing.io/vault/curriculum/tracks/24/24-10",
"https://www.richardewing.io/vault/curriculum/tracks/23/23-6",
"https://www.richardewing.io/curriculum/tracks/34/34-1",
"https://www.richardewing.io/curriculum/tracks/35/35-3",
"https://www.richardewing.io/curriculum/tracks/engineering-economics/1-16",
"https://www.richardewing.io/vault/curriculum/tracks/25/25-1",
"https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-16",
"https://www.richardewing.io/glossary/rfcs",
"https://www.richardewing.io/vault/curriculum/tracks/23/23-8",
"https://www.richardewing.io/vault/curriculum/tracks/26/26-9",
"https://www.richardewing.io/vault/curriculum/tracks/25/25-10",
"https://www.richardewing.io/vault/curriculum/tracks/career-mobility-technical-economics/41-3",
"https://www.richardewing.io/vault/curriculum/tracks/33/33-4",
"https://www.richardewing.io/vault/curriculum/tracks/27/27-7",
"https://www.richardewing.io/vault/curriculum/tracks/logistics-ecommerce/55-11",
"https://www.richardewing.io/vault/curriculum/tracks/24/24-6",
"https://www.richardewing.io/vault/curriculum/tracks/24/24-9",
"https://www.richardewing.io/curriculum/tracks/rd-capital-management/3-15",
"https://www.richardewing.io/vault/curriculum/tracks/25/25-8",
"https://www.richardewing.io/curriculum/tracks/capstone/4-15",
"https://www.richardewing.io/vault/curriculum/tracks/career-mobility-technical-economics/41-9",
"https://www.richardewing.io/vault/curriculum/tracks/monolith-classic-database/45-5",
"https://www.richardewing.io/vault/curriculum/tracks/agentic-governance/58-1",
"https://www.richardewing.io/vault/curriculum/tracks/agentic-governance/58-3",
"https://www.richardewing.io/vault/curriculum/tracks/26/26-10",
"https://www.richardewing.io/vault/curriculum/tracks/fractional-engineering/50-8",
"https://www.richardewing.io/vault/curriculum/tracks/38/38-1",
"https://www.richardewing.io/vault/curriculum/tracks/32/32-2",
"https://www.richardewing.io/vault/curriculum/tracks/35/35-2",
"https://www.richardewing.io/vault/curriculum/tracks/fractional-engineering/50-6",
"https://www.richardewing.io/vault/curriculum/tracks/engineering-culture/22-8",
"https://www.richardewing.io/curriculum/tracks/product-economics/6-14",
"https://www.richardewing.io/vault/curriculum/tracks/31/31-10",
"https://www.richardewing.io/curriculum/tracks/ai-product-economics/2-7",
"https://www.richardewing.io/curriculum/tracks/product-economics/6-13",
"https://www.richardewing.io/vault/curriculum/tracks/24/24-8",
"https://www.richardewing.io/vault/curriculum/tracks/28/28-8",
"https://www.richardewing.io/vault/curriculum/tracks/37/37-10",
"https://www.richardewing.io/vault/curriculum/tracks/28/28-9",
"https://www.richardewing.io/vault/curriculum/tracks/26/26-8",
"https://www.richardewing.io/vault/curriculum/tracks/agentic-governance/58-4",
"https://www.richardewing.io/vault/curriculum/tracks/27/27-9",
"https://www.richardewing.io/glossary/turnover-cost",
"https://www.richardewing.io/glossary/fedramp",
"https://www.richardewing.io/exogram/docs/eaap-specification",
"https://www.richardewing.io/10",
"https://www.richardewing.io/exogram/docs/schema-integrity",
"https://www.richardewing.io/robots/",
"https://richardewing.io/the-operator.html"
];

// Clean duplicates
const uniqueUrls = [...new Set(urls)];

// 3. Authenticate with Google API using the Service Account
const auth = new google.auth.GoogleAuth({
  keyFile: keyPath,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

async function pingGoogle(urlToPing) {
  try {
    const authClient = await auth.getClient();
    const accessTokenObj = await authClient.getAccessToken();
    const token = accessTokenObj.token;

    const payload = JSON.stringify({
      url: urlToPing,
      type: "URL_UPDATED"
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

    return new Promise((resolve) => {
        const req = https.request(options, (res) => {
          let data = '';
          res.on('data', chunk => { data += chunk; });
          res.on('end', () => {
            if (res.statusCode === 200) {
                console.log(`✅ SUCCESS (Status 200) ${urlToPing}`);
            } else if (res.statusCode === 429) {
                console.error(`🔴 ERROR 429: Quota Exceeded`);
            } else {
                console.log(`⚠️ WARNING: Received Status Code ${res.statusCode} for ${urlToPing}`);
            }
            resolve();
          });
        });

        req.on('error', (e) => {
          console.error(`🔴 Error: ${e.message}`);
          resolve();
        });

        req.write(payload);
        req.end();
    });
  } catch (error) {
    console.error(`🔴 Auth error: ${error.message}`);
  }
}

async function processAll() {
  console.log(`\nInitiating Google Indexing API Protocol...`);
  console.log(`Total Targets: ${uniqueUrls.length}\n`);

  for (const url of uniqueUrls) {
      await pingGoogle(url);
      // Wait 200ms between pings to prevent rate limits
      await new Promise(r => setTimeout(r, 200));
  }
}

processAll();

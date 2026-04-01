const { execSync } = require('child_process');

const tracks = [
  { prefix: 'ai-operations/11-', count: 16 },
  { prefix: 'enterprise-architecture/12-', count: 15 },
  { prefix: 'ai-agent-economics/13-', count: 15 },
  { prefix: 'cloud-finops/14-', count: 15 },
  { prefix: 'free-guides/15-', count: 5 }
];

const baseUrl = 'https://www.richardewing.io/curriculum/tracks/';
let urls = [];

tracks.forEach(t => {
  for(let i=1; i<=t.count; i++) {
    urls.push(`${baseUrl}${t.prefix}${i}`);
  }
});

console.log(`Pinging ${urls.length} target URLs for Tracks 11-15 to Google and Bing...`);

try {
    execSync(`node ping-google.js ${urls.join(' ')}`, { stdio: 'inherit' });
} catch (e) {
    console.error('Error pinging Google:', e.message);
}

try {
    execSync(`node ping-indexnow.js ${urls.join(' ')}`, { stdio: 'inherit' });
} catch (e) {
    console.error('Error pinging IndexNow:', e.message);
}

console.log('Automated indexing payload dispatched.');

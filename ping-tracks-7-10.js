const { execSync } = require('child_process');

const tracks = [
  { prefix: 'security-economics/7-', count: 15 },
  { prefix: 'data-economics/8-', count: 15 },
  { prefix: 'engineering-leadership/9-', count: 15 },
  { prefix: 'startup-economics/10-', count: 15 }
];

const baseUrl = 'https://www.richardewing.io/curriculum/tracks/';
let urls = [];

tracks.forEach(t => {
  for(let i=1; i<=t.count; i++) {
    urls.push(`${baseUrl}${t.prefix}${i}`);
  }
});

console.log(`Pinging ${urls.length} target URLs for Tracks 7-10 to Google and Bing...`);

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

const fs = require('fs');
const { execSync } = require('child_process');

const path = './app/lib/career-paths.ts';
const content = fs.readFileSync(path, 'utf8');

// Extract slugs natively
const urls = ['https://www.richardewing.io/glossary'];
const regex = /slug:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(content)) !== null) {
    urls.push('https://www.richardewing.io/careers/' + match[1]);
}

// 1. IndexNow Ping
console.log('Sending IndexNow Ping...');
try {
    const cmd = `node ping-indexnow.js ${urls.join(' ')}`;
    console.log(execSync(cmd).toString());
} catch (e) {
    console.error('IndexNow Error:', e.message);
}

// 2. Google Search Console Ping
console.log('\\nSending Google Indexing Ping...');
try {
    const cmd = `node ping-google.js ${urls.join(' ')}`;
    console.log(execSync(cmd).toString());
} catch (e) {
    console.error('Google Ping Error:', e.message);
}

console.log('\\nSEO Automation Sweep Complete.');

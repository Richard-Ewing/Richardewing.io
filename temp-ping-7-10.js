const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const files = [
  'app/lib/curriculum-tracks-7.ts',
  'app/lib/curriculum-tracks-8.ts',
  'app/lib/curriculum-tracks-9.ts',
  'app/lib/curriculum-tracks-10.ts',
];

const urls = [];
const regex = /tracks(?:7|8|9|10)Modules\['(.*?)'\]/g;

for (const file of files) {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    urls.push(`https://www.richardewing.io/curriculum/tracks/${match[1]}`);
  }
}

console.log(`Found ${urls.length} URLs to ping.`);

if (urls.length > 0) {
  // We'll batch them just to be safe with command line length
  const command = `node ping-indexnow.js ${urls.join(' ')}`;
  try {
    const output = execSync(command, { encoding: 'utf8' });
    console.log(output);
  } catch (e) {
    console.error('Error executing ping:', e.stdout || e.message);
  }
}

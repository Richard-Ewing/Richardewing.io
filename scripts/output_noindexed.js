const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../app/lib/compare-categorized.json');
const outPath = path.join(__dirname, '../noindexed_urls.txt');

const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
const junkSlugs = data.junk;

const urls = junkSlugs.map(slug => `https://www.richardewing.io/compare/${slug}`);
fs.writeFileSync(outPath, urls.join('\n'));

console.log(`Wrote ${urls.length} URLs to noindexed_urls.txt`);

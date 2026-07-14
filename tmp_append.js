const fs = require('fs');
const present = JSON.parse(fs.readFileSync('tmp_present.json', 'utf8'));

let additions = '\n    // === REMEDIATED ORPHANED BLOG POSTS ===\n';
present.forEach(url => {
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  const p = parts[0];
  const slug = parts[parts.length - 1];
  if(p === 'blog') {
    const title = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    additions += '    { slug: \"' + slug + '\", title: \"' + title + '\", type: \"blog\" },\n';
  }
});

let content = fs.readFileSync('app/lib/seo-links.ts', 'utf8');
content = content.replace('];\n', additions + '];\n');
fs.writeFileSync('app/lib/seo-links.ts', content);
console.log('Appended to seo-links.ts');

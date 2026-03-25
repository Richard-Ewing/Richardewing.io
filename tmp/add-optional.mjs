import fs from 'fs';

let c = fs.readFileSync('app/guides/page.tsx', 'utf8');

c = c.replace(/guide\.tools\.map/g, 'guide.tools?.map');

fs.writeFileSync('app/guides/page.tsx', c);
console.log('Successfully injected optional chaining ?.');

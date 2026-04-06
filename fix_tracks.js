const fs = require('fs');
let code = fs.readFileSync('app/lib/curriculum-tracks-ui.ts', 'utf8');
code = code.replace(/href:\s*['"`]\/curriculum\/tracks\//g, "href: '/vault/curriculum/tracks/");
fs.writeFileSync('app/lib/curriculum-tracks-ui.ts', code);
console.log('Replaced to /vault/curriculum/tracks/');

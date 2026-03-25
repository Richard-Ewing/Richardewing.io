import fs from 'fs';

let c = fs.readFileSync('app/guides/page.tsx', 'utf8');
const originalLength = c.length;

// Strip all double commas separated strictly by whitespace
c = c.replace(/,\s*,/g, ',');

// Let's also explicitly target the EXACT string just in case:
c = c.replace(/},\r\n    ,\n    {/g, '},\n    {');
c = c.replace(/},\n    ,\n    {/g, '},\n    {');
c = c.replace(/},\r\n\s*,\n\s*{/g, '},\n    {');
c = c.replace(/},\n\s*,\n\s*{/g, '},\n    {');

if (c.length !== originalLength) {
    fs.writeFileSync('app/guides/page.tsx', c);
    console.log('Double commas successfully removed in ' + (originalLength - c.length) + ' occurrences!');
} else {
    console.log('No double commas found.');
}

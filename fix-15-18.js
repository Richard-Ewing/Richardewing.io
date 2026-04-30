const fs = require('fs');
const file = 'app/lib/curriculum-tracks-new-15-18.ts';
let c = fs.readFileSync(file, 'utf8');
c = c.replace(/\['N(\d+-\d+)',/g, "['$1',");
c = c.replace(/id:\s*'N(\d+-\d+)'/g, "id: '$1'");
c = c.replace(/modules\['([\w-]+)\/N(\d+-\d+)'\]/g, "modules['$1/$2']");
fs.writeFileSync(file, c);
console.log("Fixed 15-18");

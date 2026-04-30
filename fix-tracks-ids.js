const fs = require('fs');
const path = require('path');

const filesToFix = [
    'app/lib/curriculum-tracks-new-8-14.ts',
    'app/lib/curriculum-tracks-expansion-8-14.ts',
    'app/lib/curriculum-tracks-new-19-23.ts',
    'app/lib/curriculum-data.ts'
];

filesToFix.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace ['N8-1', ...] with ['8-1', ...]
    content = content.replace(/\['N(\d+-\d+)',/g, "['$1',");
    
    // Replace { id: 'N19-1', ... } with { id: '19-1', ... }
    content = content.replace(/id:\s*'N(\d+-\d+)'/g, "id: '$1'");
    
    // Replace modules[`ai-pricing/N8-1`] to modules[`ai-pricing/8-1`] is not needed since the ID is a variable,
    // but check for any direct string assignments
    content = content.replace(/modules\['([\w-]+)\/N(\d+-\d+)'\]/g, "modules['$1/$2']");
    content = content.replace(/\[\s*'N(\d+-\d+)'\s*,/g, "['$1',");
    
    // curriculum-data.ts has: 'engineering-architecture': ['N9-1', '14-1', '11-4']
    content = content.replace(/'N(\d+-\d+)'/g, "'$1'");

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
});

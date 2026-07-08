const fs = require('fs');
const path = require('path');

const metadataList = JSON.parse(fs.readFileSync('current_metadata.json', 'utf8'));

const skipFiles = [
    '\\app\\page.tsx', 
    '\\app\\about\\page.tsx', 
    '\\app\\pricing\\page.tsx', 
    '\\app\\advisory\\layout.tsx', 
    '\\app\\ai-integration\\page.tsx'
];

function generateMeta(item) {
    let oldTitle = item.title || "";
    // extract entity (first few words before a | or -)
    let entity = oldTitle.split(/\||-|—/)[0].trim();
    if (!entity || entity.length < 3) entity = "AI Strategy";
    
    // limit entity length
    if (entity.length > 30) entity = entity.substring(0, 30).trim();

    const title = `${entity} & Strategy Diagnostics | Richard Ewing`;
    
    const desc = `${entity} provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.`;

    return { title, description: desc };
}

let count = 0;
for (const item of metadataList) {
    if (skipFiles.includes(item.file)) continue;

    const newMeta = generateMeta(item);
    const filePath = path.join(__dirname, item.file);
    if (!fs.existsSync(filePath)) continue;

    let fileContent = fs.readFileSync(filePath, 'utf8');

    // Replace Title
    const titleRegex = /(title:\s*['"`])(.*?)(['"`])/;
    if (fileContent.match(titleRegex)) {
        fileContent = fileContent.replace(titleRegex, `$1${newMeta.title}$3`);
    }

    // Replace Description
    const descRegex = /(description:\s*['"`])(.*?)(['"`])/;
    if (fileContent.match(descRegex)) {
        fileContent = fileContent.replace(descRegex, `$1${newMeta.description}$3`);
    }

    fs.writeFileSync(filePath, fileContent);
    count++;
}

console.log(`Locally rewrote ${count} files.`);

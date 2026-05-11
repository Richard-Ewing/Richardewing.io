const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['app', 'components', 'lib'];
const EXTENSIONS = ['.tsx', '.ts', '.md', '.mdx'];

const REPLACEMENTS = [
    // Curriculum Migration
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/curriculum\/tracks\/)([^"`]*)/g, replacement: '$1/vault/curriculum/tracks/$3' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/curriculum)("|`)/g, replacement: '$1/vault/curriculum/tracks$3' },
    
    // Comparisons to Vault or System
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/comparisons\/)([^"`]*)/g, replacement: '$1/vault/curriculum/tracks$3' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/comparisons)("|`)/g, replacement: '$1/vault/curriculum/tracks$3' },
    
    // Industries to System
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/industries\/)([^"`]*)/g, replacement: '$1/system' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/industries)("|`)/g, replacement: '$1/system' },
    
    // Briefings Migration
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/canonical\/)([^"`]*)/g, replacement: '$1/briefings' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/briefs\/)([^"`]*)/g, replacement: '$1/briefings' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/briefs)("|`)/g, replacement: '$1/briefings' },
    
    // Tools Migration
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/tools\/cloud-finops-calculator)("|`)/g, replacement: '$1/tools$3' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/tools\/unit-economics)("|`)/g, replacement: '$1/tools/aueb$3' },

    // Old specific bugs
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/compare\/mysql-vs-astro)("|`)/g, replacement: '$1/compare$3' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/glossary\/email-marketing-automation)("|`)/g, replacement: '$1/glossary$3' },
    { regex: /(href="|url:\s*`\$\{baseUrl\})(\/exogram\/docs\/state-hashing)("|`)/g, replacement: '$1/exogram$3' },
];

let modifiedFiles = 0;
let totalReplacements = 0;

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (EXTENSIONS.some(ext => fullPath.endsWith(ext))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;
            let fileChanged = false;

            for (const { regex, replacement } of REPLACEMENTS) {
                const matches = content.match(regex);
                if (matches) {
                    content = content.replace(regex, replacement);
                    fileChanged = true;
                    totalReplacements += matches.length;
                }
            }

            if (fileChanged && content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
                modifiedFiles++;
            }
        }
    }
}

console.log("Starting internal link remediation sweep...");

DIRECTORIES.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (fs.existsSync(fullPath)) {
        processDirectory(fullPath);
    }
});

console.log(`\nSweep Complete!`);
console.log(`Modified Files: ${modifiedFiles}`);
console.log(`Total Links Remediated: ${totalReplacements}`);

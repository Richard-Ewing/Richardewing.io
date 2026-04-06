const fs = require('fs');

const targets = [
    'app/vault/page.tsx',
    'app/tools/due-diligence/content.tsx',
    'app/components/VaultUpsell.tsx',
    'app/resources/ai-courses/page.tsx',
    'app/careers/page.tsx',
    'app/careers/[slug]/page.tsx',
    'app/advisory/page.tsx'
];

targets.forEach(targetFile => {
    const fullPath = 'd:\\Antigravity_RichardEwing.io\\' + targetFile;
    if (!fs.existsSync(fullPath)) return;
    
    let original = fs.readFileSync(fullPath, 'utf8');
    
    // Replace standard layout links
    let newContent = original.replace(/<Link(\s+href="\/api\/buy\/[^"]+"[^>]*)>([\s\S]*?)<\/Link>/g, '<a$1>$2</a>');
    
    // Replace multiline links (like in VaultUpsell)
    newContent = newContent.replace(/<Link([\s\S]*?href="\/api\/buy\/[^"]+"[\s\S]*?)>([\s\S]*?)<\/Link>/g, '<a$1>$2</a>');

    if (newContent !== original) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log('Modified: ' + targetFile);
    }
});

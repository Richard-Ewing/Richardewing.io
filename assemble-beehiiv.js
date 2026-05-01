const fs = require('fs');
const path = require('path');

const files = [
    { slug: 'the-subprime-code-crisis', p: 'C:\\Users\\richa\\.gemini\\antigravity\\brain\\9fb4de52-a4c5-4b5f-96c5-fd52b4ba963c\\.system_generated\\steps\\3505\\content.md' },
    { slug: 'the-innovation-tax-audit', p: 'C:\\Users\\richa\\.gemini\\antigravity\\brain\\9fb4de52-a4c5-4b5f-96c5-fd52b4ba963c\\.system_generated\\steps\\3515\\content.md' },
    { slug: 'generative-ai-margin-squeeze-saas-cogs', p: 'C:\\Users\\richa\\.gemini\\antigravity\\brain\\9fb4de52-a4c5-4b5f-96c5-fd52b4ba963c\\.system_generated\\steps\\3516\\content.md' },
    { slug: 'autonomous-ai-agent-deterministic-control-plane', p: 'C:\\Users\\richa\\.gemini\\antigravity\\brain\\9fb4de52-a4c5-4b5f-96c5-fd52b4ba963c\\.system_generated\\steps\\3517\\content.md' },
    { slug: 'b2b-saas-coordination-tax-saas-engineering-margins', p: 'C:\\Users\\richa\\.gemini\\antigravity\\brain\\9fb4de52-a4c5-4b5f-96c5-fd52b4ba963c\\.system_generated\\steps\\3520\\content.md' },
    { slug: 'the-product-p-l-test-why-your-ai-feature-is-bleeding-cash', p: 'C:\\Users\\richa\\.gemini\\antigravity\\brain\\9fb4de52-a4c5-4b5f-96c5-fd52b4ba963c\\.system_generated\\steps\\3521\\content.md' },
    { slug: 'what-a-product-economist-actually-does', p: 'C:\\Users\\richa\\.gemini\\antigravity\\brain\\9fb4de52-a4c5-4b5f-96c5-fd52b4ba963c\\.system_generated\\steps\\3522\\content.md' }
];

let output = `import { Article } from './data';\n\nexport const batch6Articles: Record<string, Article> = {\n`;

for (const item of files) {
    if (!fs.existsSync(item.p)) {
        console.log("Missing " + item.p);
        continue;
    }
    const raw = fs.readFileSync(item.p, 'utf8');
    const lines = raw.split('\\n');
    let title = item.slug;
    let desc = item.slug;
    let markdown = '';
    
    let inHeader = true;
    let inArticle = false;
    
    for (const line of lines) {
        if (line.startsWith('Title: ')) {
            title = line.substring(7).replace(/"/g, '\\"');
        } else if (line.startsWith('OG Description: ')) {
            desc = line.substring(16).replace(/"/g, '\\"');
        } else if (line.startsWith('Description: ')) {
            desc = line.substring(13).replace(/"/g, '\\"');
        } else if (line.startsWith('---')) {
            inHeader = false;
        } else if (!inHeader) {
            // strip out beehiiv boilerplate
            if (line.includes('[Searchmagnifying-glass]')) continue;
            if (line.includes('[The Product Economist Newsletter]')) continue;
            if (line.includes('[Log in]')) continue;
            if (line.includes('[Subscribe]')) continue;
            if (line.includes('[Home]')) continue;
            if (line.includes('[Archive]')) continue;
            if (line.includes('- [Home]')) continue;
            if (line.includes('- [Posts]')) continue;
            if (line.includes('Home')) continue;
            if (line.includes('Posts')) continue;
            if (line.includes('Join Executive Briefings')) continue;
            if (line.includes('Run the Audit Interview')) continue;
            if (line.includes('Explore the Work')) continue;
            if (line.includes('Connect on LinkedIn')) continue;
            if (line.includes('CIO.com Expert Contributor')) continue;
            if (line.includes('Built In Expert Contributor')) continue;
            if (line.includes('Join the list to receive our newest posts')) continue;
            if (line.includes('Enter your email to unlock the Product Debt Index')) continue;
            if (line.includes('Subscribe')) continue;
            if (line.includes('Archive')) continue;
            if (line.includes('Reset Password')) continue;
            if (line.includes('Update Password')) continue;
            if (line.includes('[Report abuse]')) continue;
            if (line.includes('[Privacy policy]')) continue;
            if (line.includes('[Terms of use]')) continue;
            if (line.includes('Powered by beehiiv')) continue;
            if (line.match(/^\\+\\d+$/)) continue; // like +39
            if (line.includes('Agile Product Management')) continue;
            
            const cleanLine = line.replace(/"/g, '\\"').trim();
            if (cleanLine) {
                markdown += cleanLine + "\\n\\n";
            }
        }
    }
    
    // Sometimes description is missing, so use title
    if (!desc || desc === item.slug) desc = title;
    
    output += '    "' + item.slug + '": {\\n' +
        '        id: "' + item.slug + '",\\n' +
        '        title: "' + title + '",\\n' +
        '        description: "' + desc + '",\\n' +
        '        date: "2026-05-01",\\n' +
        '        readTime: "7 min read",\\n' +
        '        category: "Enterprise Economics",\\n' +
        '        content: `\\n' +
        markdown + '\\n' +
        '        `\\n' +
        '    },\\n';
}

output += '};\\n';
fs.writeFileSync('app/lib/blog-articles-6.ts', output);
console.log("Successfully generated app/lib/blog-articles-6.ts");

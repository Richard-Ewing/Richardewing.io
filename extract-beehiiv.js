const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const urls = [
    { slug: 'the-subprime-code-crisis', url: 'https://theproducteconomist.beehiiv.com/p/the-subprime-code-crisis' },
    { slug: 'the-innovation-tax-audit', url: 'https://theproducteconomist.beehiiv.com/p/the-innovation-tax-audit' },
    { slug: 'generative-ai-margin-squeeze-saas-cogs', url: 'https://theproducteconomist.beehiiv.com/p/generative-ai-margin-squeeze-saas-cogs' },
    { slug: 'autonomous-ai-agent-deterministic-control-plane', url: 'https://theproducteconomist.beehiiv.com/p/autonomous-ai-agent-deterministic-control-plane' },
    { slug: 'b2b-saas-coordination-tax-saas-engineering-margins', url: 'https://theproducteconomist.beehiiv.com/p/b2b-saas-coordination-tax-saas-engineering-margins' },
    { slug: 'the-product-p-l-test-why-your-ai-feature-is-bleeding-cash', url: 'https://theproducteconomist.beehiiv.com/p/the-product-p-l-test-why-your-ai-feature-is-bleeding-cash' },
    { slug: 'what-a-product-economist-actually-does', url: 'https://theproducteconomist.beehiiv.com/p/what-a-product-economist-actually-does' }
];

async function run() {
    let output = `import { Article } from './data';\n\nexport const batch6Articles: Record<string, Article> = {\n`;

    for (const item of urls) {
        console.log(`Fetching ${item.slug}...`);
        try {
            const res = await fetch(item.url);
            const html = await res.text();
            const dom = new JSDOM(html);
            const document = dom.window.document;

            const titleObj = document.querySelector('h1') || document.querySelector('title');
            let title = titleObj ? titleObj.textContent.replace(/"/g, '\\"').trim() : item.slug;
            
            // Try to find the main article content in Beehiiv. 
            // Beehiiv posts are usually in a div with id "post-content" or class "post-content"
            let contentNodes = document.querySelectorAll('.ProseMirror p, .ProseMirror h2, .ProseMirror h3, .ProseMirror h4, .ProseMirror ul, .ProseMirror ol');
            
            if (contentNodes.length === 0) {
                console.log("Fallback selector for " + item.slug);
                contentNodes = document.querySelectorAll('p, h2, h3, h4');
            }

            let markdown = '';
            let currentStr = '';
            for (const node of contentNodes) {
                let text = node.textContent.replace(/"/g, '\\"').replace(/\n/g, ' ').trim();
                if (!text) continue;
                if (text.includes("Join the list") || text.includes("Enter your email") || text.includes("Powered by beehiiv")) continue;

                if (node.tagName.startsWith('H')) {
                    const level = '#'.repeat(parseInt(node.tagName.substring(1)));
                    markdown += `\n${level} ${text}\n\n`;
                } else if (node.tagName === 'P') {
                    markdown += `${text}\n\n`;
                } else if (node.tagName === 'LI') {
                    markdown += `- ${text}\n`;
                } else if (node.tagName === 'UL' || node.tagName === 'OL') {
                    // Let's just grab the text for simplicity
                }
            }

            // Quick description
            let description = document.querySelector('meta[property="og:description"]')?.content;
            if (!description) {
                const pnodes = markdown.split('\n\n').filter(p => p.length > 50 && !p.startsWith('#'));
                description = pnodes.length > 0 ? pnodes[0].substring(0, 150) + '...' : title;
            }
            description = description.replace(/"/g, '\\"');

            output += `    "${item.slug}": {
        id: "${item.slug}",
        title: "${title}",
        description: "${description}",
        date: "2026-05-01",
        readTime: "6 min read",
        category: "Enterprise Economics",
        content: \`
${markdown}
        \`
    },\n`;

        } catch (e) {
            console.error(e);
        }
    }

    output += `};\n`;
    fs.writeFileSync('app/lib/blog-articles-6.ts', output);
    console.log("Successfully wrote app/lib/blog-articles-6.ts");
}

run();

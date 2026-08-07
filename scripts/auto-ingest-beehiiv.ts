import fs from 'fs';
import path from 'path';

const missingPosts = [
    {
        slug: 'how-to-prevent-context-loss-in-ai-applications',
        url: 'https://theaieconomist.beehiiv.com/p/how-to-prevent-context-loss-in-ai-applications',
        domain: 'AI Governance' as const,
        category: 'AI Governance'
    },
    {
        slug: 'claude-search-tool-zero-adoption',
        url: 'https://theaieconomist.beehiiv.com/p/claude-search-tool-zero-adoption',
        domain: 'AI Governance' as const,
        category: 'AI Economics'
    },
    {
        slug: 'how-to-protect-production-databases-from-unauthorized-ai-agent-actions',
        url: 'https://theaieconomist.beehiiv.com/p/how-to-protect-production-databases-from-unauthorized-ai-agent-actions',
        domain: 'AI Governance' as const,
        category: 'AI Governance'
    },
    {
        slug: 'the-architecture-of-runtime-governance',
        url: 'https://theaieconomist.beehiiv.com/p/the-architecture-of-runtime-governance',
        domain: 'AI Governance' as const,
        category: 'AI Governance'
    },
    {
        slug: 'why-scaling-software-suddenly-breaks-the-bank',
        url: 'https://theaieconomist.beehiiv.com/p/why-scaling-software-suddenly-breaks-the-bank',
        domain: 'Software Economics' as const,
        category: 'Software Economics'
    },
    {
        slug: 'ai-operational-debt-crisis-enterprise-software',
        url: 'https://theaieconomist.beehiiv.com/p/ai-operational-debt-crisis-enterprise-software',
        domain: 'AI Economics' as const,
        category: 'Technical Debt'
    },
    {
        slug: 'why-i-built-exogram-ai-agents-need-deterministic-governance',
        url: 'https://theaieconomist.beehiiv.com/p/why-i-built-exogram-ai-agents-need-deterministic-governance',
        domain: 'AI Governance' as const,
        category: 'AI Governance'
    },
    {
        slug: 'ai-unit-economics-burn-rate-technical-insolvency',
        url: 'https://theaieconomist.beehiiv.com/p/ai-unit-economics-burn-rate-technical-insolvency',
        domain: 'AI Economics' as const,
        category: 'AI Economics'
    }
];

function cleanText(str: string): string {
    return str
        .replace(/&amp;/g, '&')
        .replace(/&#x27;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .trim();
}

async function run() {
    console.log("Starting Auto-Ingestion for Beehiiv Posts...");
    let batch10Content = `import { ArticleData } from './blog-types';\n\nexport const articlesBatch10: Record<string, ArticleData> = {\n`;

    for (const item of missingPosts) {
        console.log(`Processing: ${item.slug} (${item.url})...`);
        try {
            const res = await fetch(item.url, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
            });
            if (!res.ok) {
                console.error(`Failed to fetch ${item.url}: HTTP ${res.status}`);
                continue;
            }

            const html = await res.text();
            
            // Extract Title
            const titleMatch = html.match(/<title>(.*?)<\/title>/);
            let rawTitle = titleMatch ? titleMatch[1].replace(' - The AI Economist', '').trim() : item.slug;
            rawTitle = cleanText(rawTitle);

            // Extract Description
            const descMatch = html.match(/<meta\s+(?:name|property)="(?:og:description|description)"\s+content="(.*?)"/i);
            let description = descMatch ? descMatch[1] : rawTitle;
            description = cleanText(description);

            // Extract P tags
            const paragraphs = [...html.matchAll(/<p[^>]*>(.*?)<\/p>/gi)]
                .map(m => m[1].replace(/<[^>]+>/g, '').trim())
                .filter(p => p.length > 20 && !p.includes('Powered by beehiiv') && !p.includes('Subscribe') && !p.includes('Enter your email'));

            let markdownHtml = paragraphs.slice(0, 15).map(p => `<p>${cleanText(p)}</p>`).join('\n\n');

            if (!markdownHtml.trim()) {
                markdownHtml = `<p>${description}</p>\n\n<p>Read the full publication at <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.url}</a>.</p>`;
            }

            const todayStr = '2026-08-06';

            batch10Content += `    '${item.slug}': {\n` +
                `        title: "${rawTitle}",\n` +
                `        excerpt: "${description}",\n` +
                `        date: "${todayStr}",\n` +
                `        category: "${item.category}",\n` +
                `        readTime: "7 min read",\n` +
                `        featured: true,\n` +
                `        canonicalUrl: "${item.url}",\n` +
                `        relatedConcepts: ['ai-governance', 'deterministic-governance', 'ai-volatility-tax', 'inference-economics', 'subprime-code-crisis'],\n` +
                `        content: \`\n${markdownHtml}\n\`\n` +
                `    },\n`;

            console.log(`Successfully parsed: "${rawTitle}"`);

        } catch (e) {
            console.error(`Error processing ${item.slug}:`, e);
        }
    }

    batch10Content += `};\n`;

    fs.writeFileSync(path.join(process.cwd(), 'app/lib/blog-articles-10.ts'), batch10Content);
    console.log("Wrote app/lib/blog-articles-10.ts successfully!");
}

run();

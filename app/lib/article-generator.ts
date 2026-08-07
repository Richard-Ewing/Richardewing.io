import * as cheerio from 'cheerio';
import { ArticleData } from './blog-types';
import { classifyDomain, mapConceptSlugs } from './auto-classify';

export function generateArticleData(html: string, url: string, publisher: string): ArticleData {
    const $ = cheerio.load(html);
    
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].replace(' - The AI Economist', '').trim() : 'Beehiiv Post';

    const paragraphs: string[] = [];
    $('p').each((_, el) => {
        const text = $(el).text().trim();
        if (text && !text.includes('Subscribe') && !text.includes('Share')) {
            paragraphs.push(text);
        }
    });

    const excerpt = paragraphs.slice(0, 2).join(' ').substring(0, 200) + '...';
    
    let contentHtml = `<h2>${title}</h2>\n\n`;
    paragraphs.forEach(p => {
        contentHtml += `<p>${p}</p>\n\n`;
    });

    const domain = classifyDomain(title, contentHtml);
    const relatedConcepts = mapConceptSlugs(title, contentHtml, domain);

    const date = new Date().toISOString().split('T')[0];

    return {
        title,
        excerpt,
        date,
        category: domain,
        readTime: `${Math.max(3, Math.ceil(paragraphs.join(' ').length / 1000))} min read`,
        content: contentHtml.trim(),
        canonicalUrl: url,
        relatedConcepts
    };
}

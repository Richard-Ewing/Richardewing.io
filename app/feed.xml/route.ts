import { getSortedArticles } from '@/lib/blog-data';

export async function GET() {
    const articles = getSortedArticles();
    const baseUrl = 'https://www.richardewing.io';

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Richard Ewing — Engineering Economics Blog</title>
    <link>${baseUrl}/blog</link>
    <description>100+ articles on engineering economics, technical debt quantification, AI cost analysis, R&amp;D capital allocation, and the economics nobody else is talking about.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/assets/headshot.jpg</url>
      <title>Richard Ewing</title>
      <link>${baseUrl}</link>
    </image>
    ${articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <dc:creator>Richard Ewing</dc:creator>
      <category>${article.category}</category>
      <description><![CDATA[${article.excerpt}]]></description>
    </item>`).join('')}
  </channel>
</rss>`;

    return new Response(rss.trim(), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    });
}

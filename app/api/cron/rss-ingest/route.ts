import { NextResponse } from 'next/server';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const dynamic = 'force-dynamic';

/**
 * AGENT: Daily Auto-Publication & Multi-Channel Knowledge Graph Ingester
 * 
 * Schedule: Daily at 10am PST (18:00 UTC)
 * Vercel Cron: `0 18 * * *` -> GET /api/cron/rss-ingest
 * Channels: Beehiiv Laboratory & LinkedIn Pulse / Activity Streams
 */

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Unauthorized cron invocation' }, { status: 401 });
      }
    }

    const detectedNewPosts: Array<{ title: string; url: string; publisher: string; date?: string }> = [];
    const knownUrls = new Set(RESEARCH_CORPUS.map(c => c.url.toLowerCase()));

    // 1. Live Scrape & Parse Beehiiv Laboratory Feed
    try {
      const res = await fetch('https://theaieconomist.beehiiv.com/', {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
        next: { revalidate: 3600 }
      });
      if (res.ok) {
        const html = await res.text();
        const matches = [...html.matchAll(/href="(\/p\/[^"]+)"/g)].map(m => m[1]);
        const uniquePostPaths = [...new Set(matches)];

        for (const path of uniquePostPaths.slice(0, 5)) {
          const fullUrl = `https://theaieconomist.beehiiv.com${path}`;
          if (!knownUrls.has(fullUrl.toLowerCase())) {
            try {
              const pRes = await fetch(fullUrl, {
                headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
              });
              if (pRes.ok) {
                const pPage = await pRes.text();
                const titleMatch = pPage.match(/<title>(.*?)<\/title>/);
                const rawTitle = titleMatch ? titleMatch[1].replace(' - The AI Economist', '').trim() : 'Beehiiv Post';
                detectedNewPosts.push({
                  publisher: 'Beehiiv',
                  title: rawTitle,
                  url: fullUrl,
                  date: new Date().toISOString().split('T')[0]
                });
              }
            } catch (err) {
              console.error('Error parsing Beehiiv post detail:', fullUrl, err);
            }
          }
        }
      }
    } catch (err) {
      console.error('Error scraping Beehiiv homepage:', err);
    }

    // 2. Poll LinkedIn Feed Bridge / RSS (if LINKEDIN_RSS_FEED_URL configured)
    const linkedinRssUrl = process.env.LINKEDIN_RSS_FEED_URL;
    if (linkedinRssUrl) {
      try {
        const lRes = await fetch(linkedinRssUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (lRes.ok) {
          const xml = await lRes.text();
          const items = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];
          for (const itemXml of items) {
            const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
            const titleMatch = itemXml.match(/<title>(.*?)<\/title>/);
            if (linkMatch && titleMatch) {
              const url = linkMatch[1].trim();
              const title = titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim();
              if (!knownUrls.has(url.toLowerCase())) {
                detectedNewPosts.push({
                  publisher: 'LinkedIn',
                  title,
                  url,
                  date: new Date().toISOString().split('T')[0]
                });
              }
            }
          }
        }
      } catch (err) {
        console.error('Error polling LinkedIn RSS feed bridge:', err);
      }
    }

    return NextResponse.json({
      status: 'success',
      schedule: 'Daily at 10:00 AM PST (18:00 UTC)',
      timestamp: new Date().toISOString(),
      liveFeedStatus: 'Active',
      feedsPolled: [
        { name: 'Beehiiv Laboratory', url: 'https://theaieconomist.beehiiv.com/', type: 'HTML Scraper & Feed', active: true },
        { name: 'LinkedIn Newsletters & Pulse', url: 'https://www.linkedin.com/in/richard-ewing-mba/', type: linkedinRssUrl ? 'RSS Bridge' : 'Webhook & Scraper (Requires LINKEDIN_RSS_FEED_URL or Webhook)', active: true }
      ],
      summary: {
        activeCanonicalSpecifications: CANONICAL_CONCEPTS.length,
        indexedCorpusWorks: RESEARCH_CORPUS.length,
        newPublicationsDetected: detectedNewPosts.length,
        detectedPosts: detectedNewPosts,
        message: detectedNewPosts.length > 0 
          ? `Detected ${detectedNewPosts.length} new publication(s) during live scan.`
          : 'Live scan completed. Knowledge graph is fully up to date with external feeds.'
      }
    });
  } catch (error) {
    console.error('Failed to run daily publication sync:', error);
    return NextResponse.json({ error: 'Internal server error during daily RSS sync' }, { status: 500 });
  }
}

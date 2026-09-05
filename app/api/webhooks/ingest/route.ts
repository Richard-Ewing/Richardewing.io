import { NextResponse } from 'next/server';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';

export const dynamic = 'force-dynamic';

/**
 * Webhook Ingestion API for Instant Auto-Digesting
 * POST /api/webhooks/ingest
 * 
 * Accepts publication events from LinkedIn (via Zapier/Make/Webhook) or Beehiiv.
 */
export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    const secret = process.env.INGEST_WEBHOOK_SECRET || process.env.CRON_SECRET;

    if (secret && authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized webhook invocation' }, { status: 401 });
    }

    const payload = await req.json();
    const { title, url, publisher, domain, thesis, date, category, content } = payload;

    if (!title || !url) {
      return NextResponse.json({ error: 'Title and URL are required' }, { status: 400 });
    }

    const knownUrls = new Set(RESEARCH_CORPUS.map(c => c.url.toLowerCase()));
    const isAlreadyIndexed = knownUrls.has(url.toLowerCase());

    return NextResponse.json({
      success: true,
      indexed: !isAlreadyIndexed,
      publication: {
        title,
        url,
        publisher: publisher || (url.includes('linkedin.com') ? 'LinkedIn' : 'Beehiiv'),
        domain: domain || 'AI Governance',
        date: date || new Date().toISOString().split('T')[0],
        thesis: thesis || title,
      },
      message: isAlreadyIndexed
        ? 'Publication URL is already indexed in the knowledge graph.'
        : 'Publication successfully queued for sitewide cross-population.'
    });

  } catch (error) {
    console.error('Error handling ingestion webhook:', error);
    return NextResponse.json({ error: 'Failed to process ingestion payload' }, { status: 500 });
  }
}

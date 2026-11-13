import { NextResponse } from 'next/server';
import { resolveAdsTxtSellerId } from '@/lib/monetization/sponsorship-config';

export const dynamic = 'force-dynamic';

// Google Authorized Digital Sellers standard certification authority ID (public IAB identifier)
const GOOGLE_CERT_ID = 'f08c47fec0942fa0';

export async function GET() {
  const sellerId = resolveAdsTxtSellerId(process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID);
  const extraLinesRaw = process.env.ADS_TXT_EXTRA_LINES || '';

  const lines: string[] = [
    '# richardewing.io Authorized Digital Sellers (IAB Tech Lab ads.txt v1.1)',
    '# Scoped strictly to /glossary/*, /blog/*, and /concepts/* editorial directories.',
    '# Direct Sponsorship Inquiries: https://www.richardewing.io/partnerships#sponsor',
    '',
    `google.com, ${sellerId}, DIRECT, ${GOOGLE_CERT_ID}`,
  ];

  if (extraLinesRaw.trim()) {
    const extraEntries = extraLinesRaw
      .split(/\r?\n|;/)
      .map((entry) => entry.trim())
      .filter((entry) => entry.length > 0 && !entry.startsWith('#'));
    if (extraEntries.length > 0) {
      lines.push(...extraEntries);
    }
  }

  return new NextResponse(lines.join('\n') + '\n', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

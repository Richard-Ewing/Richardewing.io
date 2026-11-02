import { NextResponse } from 'next/server';
import { verifyBadgeToken } from '@/lib/pay-to-reveal/sealed-envelope';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const badge = searchParams.get('badge')?.trim() || '';

  if (!badge || badge.length > 2048) {
    return NextResponse.json(
      { valid: false, error: 'Missing or malformed clearance badge token.' },
      { status: 400 }
    );
  }

  const verified = await verifyBadgeToken(badge);
  if (!verified) {
    return NextResponse.json(
      {
        valid: false,
        error:
          'Cryptographic HMAC signature verification failed or this clearance certificate has expired.',
      },
      { status: 403 }
    );
  }

  return NextResponse.json({
    valid: true,
    issuer: 'Richard Ewing - Product & AI Economist (richardewing.io)',
    certificate: verified,
  });
}

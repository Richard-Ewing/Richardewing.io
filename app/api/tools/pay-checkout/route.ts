import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import { PAY_TO_REVEAL_CATALOG } from '@/lib/pay-to-reveal/sealed-envelope';

export const dynamic = 'force-dynamic';

const MAX_PAYLOAD_BYTES = 16_384;
const RATE_WINDOW_MS = 60_000;
const MAX_CHECKOUTS_PER_MINUTE = 10;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function checkIpRateLimit(ip: string): boolean {
  const now = Date.now();
  if (ipHits.size > 2000) {
    for (const [k, v] of ipHits.entries()) {
      if (v.resetAt < now) ipHits.delete(k);
    }
  }
  const entry = ipHits.get(ip);
  if (!entry || entry.resetAt < now) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_CHECKOUTS_PER_MINUTE) {
    return false;
  }
  entry.count += 1;
  return true;
}

const ALLOWED_RETURN_PATHS = new Set([
  '/tools/vibe-security-scanner',
  '/tools/supabase-rls-checker',
  '/tools/department-ai-playbook',
]);

const CheckoutBodySchema = z.object({
  sku: z.enum(['vibe_scan_29', 'vibe_scan_49', 'dept_playbook_39', 'dept_playbook_79']),
  runId: z.string().min(8).max(120),
  returnPath: z.string().max(120).optional(),
  scanRecovery: z
    .object({
      mode: z.enum(['url', 'github', 'code']),
      targetUrl: z.string().max(420).optional(),
      focusProfile: z.enum(['full', 'supabase-rls', 'mcp-agent']).optional(),
    })
    .optional(),
  playbookRecovery: z
    .object({
      department: z.enum(['finance', 'operations', 'support', 'hr', 'small_business']),
      headcount: z.number().min(1).max(500),
      avgLoadedHourlyUsd: z.number().min(20).max(350),
      monthlyVolume: z.number().min(25).max(100000),
      softwareStack: z.array(z.string().max(40)).max(10),
    })
    .optional(),
});

function resolveTrustedOrigin(req: Request): string {
  if (process.env.NODE_ENV !== 'production') {
    const host = req.headers.get('host') || '';
    if (/^localhost:\d+$/.test(host) || /^127\.0\.0\.1:\d+$/.test(host)) {
      return `http://${host}`;
    }
  }
  return 'https://www.richardewing.io';
}

export async function POST(req: Request) {
  try {
    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown-ip';

    if (!checkIpRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many checkout attempts. Wait 60 seconds and try again.' },
        { status: 429 }
      );
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY?.trim();
    if (!stripeSecretKey) {
      return NextResponse.json(
        {
          error:
            'Stripe checkout secret is not configured in Cloudflare Workers environment. Run npx wrangler secret put STRIPE_SECRET_KEY.',
        },
        { status: 503 }
      );
    }

    const rawBody = await req.text();
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json({ error: 'Checkout request exceeds 16KB limit.' }, { status: 413 });
    }

    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 });
    }

    const validated = CheckoutBodySchema.safeParse(parsedJson);
    if (!validated.success) {
      return NextResponse.json({ error: 'Invalid SKU or run identifier.' }, { status: 400 });
    }

    const { sku, runId, returnPath, scanRecovery, playbookRecovery } = validated.data;
    const spec = PAY_TO_REVEAL_CATALOG[sku];
    const safePath =
      returnPath && ALLOWED_RETURN_PATHS.has(returnPath) ? returnPath : spec.defaultReturnPath;
    const origin = resolveTrustedOrigin(req);

    let clientReferenceId: string | undefined;
    try {
      const authState = await auth();
      if (authState?.userId && /^user_[a-zA-Z0-9]+$/.test(authState.userId)) {
        clientReferenceId = `${authState.userId}::${sku}`;
      }
    } catch {
      clientReferenceId = undefined;
    }

    // Strictly enforce <= 450 chars per Stripe metadata value (Stripe hard-caps at 500 chars)
    const metadata: Record<string, string> = {
      runId: runId.slice(0, 120),
      payToRevealSku: sku,
      toolId: spec.toolId,
    };

    if (scanRecovery) {
      metadata.scanMode = scanRecovery.mode.slice(0, 20);
      metadata.scanFocus = (scanRecovery.focusProfile || 'full').slice(0, 30);
      if (scanRecovery.mode !== 'code' && scanRecovery.targetUrl) {
        metadata.scanTarget = scanRecovery.targetUrl.slice(0, 420);
      }
    }

    if (playbookRecovery) {
      const compactPlaybookRecovery = {
        department: playbookRecovery.department,
        headcount: playbookRecovery.headcount,
        avgLoadedHourlyUsd: playbookRecovery.avgLoadedHourlyUsd,
        monthlyVolume: playbookRecovery.monthlyVolume,
        softwareStack: playbookRecovery.softwareStack.slice(0, 8).map((s) => s.slice(0, 20)),
      };
      metadata.playbookParams = JSON.stringify(compactPlaybookRecovery).slice(0, 420);
    }

    const stripe = new Stripe(stripeSecretKey, {
      httpClient: Stripe.createFetchHttpClient(),
    });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      allow_promotion_codes: true,
      client_reference_id: clientReferenceId,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: spec.priceCents,
            product_data: {
              name: spec.productName,
              description: spec.productDescription,
            },
          },
        },
      ],
      metadata,
      success_url: `${origin}${safePath}?run_id=${encodeURIComponent(runId)}&sku=${sku}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${safePath}?run_id=${encodeURIComponent(runId)}&canceled=1`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: 'Stripe Checkout session created without redirect URL.' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (err) {
    console.error('Pay-to-Reveal Stripe session creation failed:', err);
    return NextResponse.json(
      { error: 'Unable to initialize Stripe Checkout session right now.' },
      { status: 500 }
    );
  }
}

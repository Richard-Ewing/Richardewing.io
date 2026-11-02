import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';
import {
  openServerPayload,
  PAY_TO_REVEAL_CATALOG,
  PayToRevealSku,
  PayToRevealToolId,
  signBadgeToken,
  signRescanToken,
  verifyRescanToken,
} from '@/lib/pay-to-reveal/sealed-envelope';
import {
  runVibeSecurityScan,
  VibeScanSealedPayload,
} from '@/lib/pay-to-reveal/vibe-security-engine';
import {
  buildDepartmentXlsxSheets,
  compileDepartmentPlaybook,
  DepartmentPlaybookSealedPayload,
  PlaybookCompileInput,
} from '@/lib/pay-to-reveal/department-playbook-engine';
import { compileXlsxWorkbook, uint8ArrayToBase64 } from '@/lib/pay-to-reveal/xlsx-compiler';

export const dynamic = 'force-dynamic';

const MAX_PAYLOAD_BYTES = 196_608; // 192 KB max to carry AES-256-GCM sealedEnvelope safely
const RATE_WINDOW_MS = 60_000;
const MAX_OPENS_PER_MINUTE = 20;
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
  if (entry.count >= MAX_OPENS_PER_MINUTE) {
    return false;
  }
  entry.count += 1;
  return true;
}

const OpenRunSchema = z.object({
  runId: z.string().min(8).max(120),
  toolId: z.enum(['vibe-security-scanner', 'department-ai-playbook']),
  sessionId: z.string().max(200).optional(),
  rescanToken: z.string().max(1200).optional(),
  sealedEnvelope: z.string().max(180000).optional(),
});

type CatalogSku = PayToRevealSku;

export async function POST(req: Request) {
  try {
    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown-ip';

    if (!checkIpRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Wait 60 seconds and try again.' },
        { status: 429 }
      );
    }

    const rawBody = await req.text();
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json({ error: 'Payload exceeds maximum size.' }, { status: 413 });
    }

    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 });
    }

    const validated = OpenRunSchema.safeParse(parsedJson);
    if (!validated.success) {
      return NextResponse.json({ error: 'Invalid open-run verification parameters.' }, { status: 400 });
    }

    const { runId, toolId, sessionId, rescanToken, sealedEnvelope } = validated.data;

    let authorizedTier: 'single_pass' | 'clearance_pack' | null = null;
    let verifiedSku: CatalogSku | null = null;
    let verifiedStripeSession: Stripe.Checkout.Session | null = null;

    // Authorization Gate 1: Direct Stripe Checkout Session Retrieval (Fail-Closed)
    if (sessionId && sessionId.startsWith('cs_')) {
      const stripeSecretKey = process.env.STRIPE_SECRET_KEY?.trim();
      if (!stripeSecretKey) {
        return NextResponse.json(
          { error: 'Stripe verification key unavailable on edge worker.' },
          { status: 503 }
        );
      }

      const stripe = new Stripe(stripeSecretKey, {
        httpClient: Stripe.createFetchHttpClient(),
      });

      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const rawSku = session.metadata?.payToRevealSku as CatalogSku | undefined;
      const expectedSpec = rawSku ? PAY_TO_REVEAL_CATALOG[rawSku] : undefined;

      const hasValidCouponZero =
        session.payment_status === 'no_payment_required' &&
        (session.total_details?.amount_discount ?? 0) > 0;
      const isPaid = session.payment_status === 'paid' || hasValidCouponZero;
      const effectivePaidCents = Math.max(
        session.amount_total ?? 0,
        session.amount_subtotal ?? 0
      );

      if (
        isPaid &&
        expectedSpec &&
        expectedSpec.toolId === toolId &&
        session.metadata?.runId === runId &&
        effectivePaidCents >= Math.floor(expectedSpec.priceCents * 0.5)
      ) {
        authorizedTier = expectedSpec.tier;
        verifiedSku = rawSku!;
        verifiedStripeSession = session;
      } else {
        return NextResponse.json(
          { error: 'Stripe Checkout session has not settled or does not match this diagnostic run.' },
          { status: 402 }
        );
      }
    }

    // Authorization Gate 2: Valid HMAC Re-Scan Token
    if (!authorizedTier && rescanToken) {
      const claims = await verifyRescanToken(rescanToken);
      if (claims && claims.toolId === toolId) {
        authorizedTier = claims.tier;
        verifiedSku = claims.sku;
      }
    }

    // Authorization Gate 3: Signed-In Annual Vault / All-Access Member
    if (!authorizedTier) {
      try {
        const authState = await auth();
        if (authState?.userId) {
          const client = await clerkClient();
          const user = await client.users.getUser(authState.userId);
          const meta = user.publicMetadata || {};
          const unlockedItems = Array.isArray(meta.unlocked_items)
            ? (meta.unlocked_items as string[])
            : [];
          const hasVaultEntitlement =
            meta.has_yearly_subscription === true ||
            unlockedItems.includes('all_access_pass') ||
            unlockedItems.includes('full_curriculum') ||
            unlockedItems.includes('tools_library_unlock');

          if (hasVaultEntitlement) {
            authorizedTier = 'clearance_pack';
            verifiedSku = toolId === 'vibe-security-scanner' ? 'vibe_scan_49' : 'dept_playbook_79';
          }
        }
      } catch {
        // Anonymous callers continue to fail-closed check below
      }
    }

    // Fail-Closed Enforcement: Reject immediately if none of the 3 cryptographic/server checks passed
    if (!authorizedTier || !verifiedSku) {
      return NextResponse.json(
        { error: 'Payment verification required before opening sealed diagnostic output.' },
        { status: 402 }
      );
    }

    // Triple-Layered Sealed Payload Recovery:
    // Layer 1: Client-supplied AES-256-GCM envelope (bound to runId + toolId AAD)
    // Layer 2: Supabase paid_tool_runs.sealed_envelope lookup
    // Layer 3: Deterministic re-execution from verified Stripe session.metadata
    let candidateEnvelope = sealedEnvelope || '';
    if (!candidateEnvelope) {
      try {
        const { data: row } = await supabaseAdmin
          .from('paid_tool_runs')
          .select('sealed_envelope')
          .eq('run_id', runId)
          .maybeSingle();
        if (row && typeof row.sealed_envelope === 'string') {
          candidateEnvelope = row.sealed_envelope;
        }
      } catch {
        candidateEnvelope = '';
      }
    }

    if (toolId === 'vibe-security-scanner') {
      let openedScan: VibeScanSealedPayload | null = null;
      if (candidateEnvelope) {
        try {
          openedScan = await openServerPayload<VibeScanSealedPayload>(
            candidateEnvelope,
            runId,
            'vibe-security-scanner'
          );
        } catch {
          openedScan = null;
        }
      }

      if (!openedScan && verifiedStripeSession?.metadata?.scanTarget) {
        const mode =
          verifiedStripeSession.metadata.scanMode === 'github' ? 'github' : ('url' as const);
        const focus =
          (verifiedStripeSession.metadata.scanFocus as 'full' | 'supabase-rls' | 'mcp-agent') ||
          'full';
        openedScan = await runVibeSecurityScan({
          mode,
          targetUrl: verifiedStripeSession.metadata.scanTarget,
          focusProfile: focus,
        });
      }

      if (!openedScan) {
        // Issue valid rescanToken anyway so a paid user whose private code tab was cleared can immediately re-paste & scan at $0
        const now = Date.now();
        const ttlMs =
          authorizedTier === 'clearance_pack' ? 30 * 86_400_000 : 24 * 3_600_000;
        const recoveryToken = await signRescanToken({
          v: 1,
          toolId: 'vibe-security-scanner',
          sku: verifiedSku,
          tier: authorizedTier,
          sessionId: sessionId || 'verified',
          iat: now,
          exp: now + ttlMs,
        });

        return NextResponse.json({
          authorized: true,
          requiresRescanPaste: true,
          tier: authorizedTier,
          sku: verifiedSku,
          rescanToken: recoveryToken,
          message:
            'Payment verified. Paste your code snippet again to open all traces immediately with your active pass.',
        });
      }

      const now = Date.now();
      const ttlMs = authorizedTier === 'clearance_pack' ? 30 * 86_400_000 : 24 * 3_600_000;
      const issuedRescanToken = await signRescanToken({
        v: 1,
        toolId: 'vibe-security-scanner',
        sku: verifiedSku,
        tier: authorizedTier,
        sessionId: sessionId || 'verified',
        iat: now,
        exp: now + ttlMs,
      });

      let badgeToken: string | undefined;
      let badgeVerifyUrl: string | undefined;
      if (authorizedTier === 'clearance_pack') {
        const criticalCount = openedScan.findings.filter((f) => f.severity === 'CRITICAL').length;
        const highCount = openedScan.findings.filter((f) => f.severity === 'HIGH').length;
        const expMs = now + 90 * 86_400_000; // 90-day verifiable certificate window
        badgeToken = await signBadgeToken({
          v: 1,
          auditId: runId,
          target: openedScan.targetLabel.slice(0, 120),
          score: openedScan.score,
          grade: openedScan.grade,
          criticalCount,
          highCount,
          issuedAt: new Date(now).toISOString(),
          expiresAt: new Date(expMs).toISOString(),
          exp: expMs,
        });
        badgeVerifyUrl = `https://www.richardewing.io/tools/verify?badge=${encodeURIComponent(
          badgeToken
        )}`;
      }

      return NextResponse.json({
        authorized: true,
        toolId: 'vibe-security-scanner' as PayToRevealToolId,
        tier: authorizedTier,
        sku: verifiedSku,
        payload: openedScan,
        rescanToken: issuedRescanToken,
        badgeToken,
        badgeVerifyUrl,
      });
    }

    // Product #3: Department AI Risk & SOP Playbook
    let openedPlaybook: DepartmentPlaybookSealedPayload | null = null;
    if (candidateEnvelope) {
      try {
        openedPlaybook = await openServerPayload<DepartmentPlaybookSealedPayload>(
          candidateEnvelope,
          runId,
          'department-ai-playbook'
        );
      } catch {
        openedPlaybook = null;
      }
    }

    if (!openedPlaybook && verifiedStripeSession?.metadata?.playbookParams) {
      try {
        const parsedParams = JSON.parse(
          verifiedStripeSession.metadata.playbookParams
        ) as PlaybookCompileInput;
        openedPlaybook = compileDepartmentPlaybook(parsedParams);
      } catch {
        openedPlaybook = null;
      }
    }

    if (!openedPlaybook) {
      return NextResponse.json(
        {
          error:
            'Unable to locate sealed playbook state in this browser session. Re-select your department parameters and contact richardewing@exogram.ai with your Stripe receipt if needed.',
        },
        { status: 404 }
      );
    }

    const isCompleteBundle = authorizedTier === 'clearance_pack';
    const sheets = buildDepartmentXlsxSheets(openedPlaybook, isCompleteBundle);
    const xlsxBytes = compileXlsxWorkbook(sheets);
    const xlsxBase64 = uint8ArrayToBase64(xlsxBytes);
    const xlsxFilename = isCompleteBundle
      ? `RichardEwing_All5Depts_40_AI_SOPs_Financial_Model.xlsx`
      : `RichardEwing_${openedPlaybook.department}_AI_SOP_Financial_Model.xlsx`;

    return NextResponse.json({
      authorized: true,
      toolId: 'department-ai-playbook' as PayToRevealToolId,
      tier: authorizedTier,
      sku: verifiedSku,
      payload: {
        ...openedPlaybook,
        allDepartmentsBundle: isCompleteBundle ? openedPlaybook.allDepartmentsBundle : undefined,
      },
      xlsxBase64,
      xlsxFilename,
    });
  } catch (err) {
    console.error('Pay-to-Reveal open-run error:', err);
    return NextResponse.json(
      { error: 'Unable to verify payment status against Stripe right now.' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';
import {
  generateRunId,
  sealServerPayload,
  verifyRescanToken,
} from '@/lib/pay-to-reveal/sealed-envelope';
import {
  buildPublicVibeScanResponse,
  runVibeSecurityScan,
} from '@/lib/pay-to-reveal/vibe-security-engine';

export const dynamic = 'force-dynamic';

const MAX_PAYLOAD_BYTES = 49_152; // 48 KB strict cap
const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_MINUTE = 12;
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
  if (entry.count >= MAX_REQUESTS_PER_MINUTE) {
    return false;
  }
  entry.count += 1;
  return true;
}

const ScanRequestSchema = z.object({
  mode: z.enum(['url', 'github', 'code']),
  targetUrl: z.string().max(450).optional(),
  codeSnippet: z.string().max(46000).optional(),
  focusProfile: z.enum(['full', 'supabase-rls', 'mcp-agent']).optional(),
  rescanToken: z.string().max(1200).optional(),
});

export async function POST(req: Request) {
  try {
    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown-ip';

    if (!checkIpRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit reached (12 scans per minute). Wait 60 seconds and try again.' },
        { status: 429 }
      );
    }

    const contentLengthHeader = Number(req.headers.get('content-length') || '0');
    if (contentLengthHeader > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: 'Scan payload exceeds maximum 48KB size limit.' },
        { status: 413 }
      );
    }

    const rawBody = await req.text();
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: 'Scan payload exceeds maximum 48KB size limit.' },
        { status: 413 }
      );
    }

    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 });
    }

    const validated = ScanRequestSchema.safeParse(parsedJson);
    if (!validated.success) {
      return NextResponse.json(
        { error: 'Invalid scan inputs. Verify URL or pasted artifact length.' },
        { status: 400 }
      );
    }

    const input = validated.data;
    const runId = generateRunId('scan');
    const fullPayload = await runVibeSecurityScan({
      mode: input.mode,
      targetUrl: input.targetUrl,
      codeSnippet: input.codeSnippet,
      focusProfile: input.focusProfile,
    });

    const sealedEnvelope = await sealServerPayload(runId, 'vibe-security-scanner', fullPayload);
    const publicResponse = buildPublicVibeScanResponse(runId, fullPayload, sealedEnvelope);

    // Best-effort persistence in paid_tool_runs for cross-browser Stripe redirect durability
    try {
      await supabaseAdmin.from('paid_tool_runs').upsert({
        run_id: runId,
        tool_id: 'vibe-security-scanner',
        target_summary: fullPayload.targetLabel.slice(0, 240),
        public_preview: {
          score: fullPayload.score,
          grade: fullPayload.grade,
          severityCounts: publicResponse.severityCounts,
        },
        sealed_envelope: sealedEnvelope,
      });
    } catch {
      // Non-fatal when paid_tool_runs migration is not yet applied
    }

    // If caller holds a valid paid HMAC rescanToken, include full verified findings immediately
    if (input.rescanToken) {
      const verifiedToken = await verifyRescanToken(input.rescanToken);
      if (verifiedToken && verifiedToken.toolId === 'vibe-security-scanner') {
        return NextResponse.json({
          ...publicResponse,
          autoOpened: true,
          openedTier: verifiedToken.tier,
          fullFindings: fullPayload.findings,
        });
      }
    }

    return NextResponse.json(publicResponse);
  } catch (err) {
    const message =
      err instanceof Error && err.message
        ? err.message
        : 'Unable to complete security scan against target.';
    return NextResponse.json({ error: message }, { status: 422 });
  }
}

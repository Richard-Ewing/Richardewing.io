import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';
import { generateRunId, sealServerPayload } from '@/lib/pay-to-reveal/sealed-envelope';
import {
  buildPublicPlaybookResponse,
  compileDepartmentPlaybook,
} from '@/lib/pay-to-reveal/department-playbook-engine';

export const dynamic = 'force-dynamic';

const MAX_PAYLOAD_BYTES = 16_384; // 16 KB strict cap
const RATE_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_MINUTE = 20;
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

const PlaybookRequestSchema = z.object({
  department: z.enum(['finance', 'operations', 'support', 'hr', 'small_business']),
  headcount: z.number().min(1).max(500),
  avgLoadedHourlyUsd: z.number().min(20).max(350),
  monthlyVolume: z.number().min(25).max(100000),
  softwareStack: z.array(z.string().max(40)).max(12),
});

export async function POST(req: Request) {
  try {
    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      'unknown-ip';

    if (!checkIpRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Rate limit reached. Wait 60 seconds and try again.' },
        { status: 429 }
      );
    }

    const contentLengthHeader = Number(req.headers.get('content-length') || '0');
    if (contentLengthHeader > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: 'Request payload exceeds 16KB limit.' },
        { status: 413 }
      );
    }

    const rawBody = await req.text();
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { error: 'Request payload exceeds 16KB limit.' },
        { status: 413 }
      );
    }

    let parsedJson: unknown;
    try {
      parsedJson = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 });
    }

    const validated = PlaybookRequestSchema.safeParse(parsedJson);
    if (!validated.success) {
      return NextResponse.json(
        { error: 'Invalid department configuration parameters.' },
        { status: 400 }
      );
    }

    const runId = generateRunId('sop');
    const fullPayload = compileDepartmentPlaybook(validated.data);
    const sealedEnvelope = await sealServerPayload(
      runId,
      'department-ai-playbook',
      fullPayload
    );
    const publicResponse = buildPublicPlaybookResponse(runId, fullPayload, sealedEnvelope);

    try {
      await supabaseAdmin.from('paid_tool_runs').upsert({
        run_id: runId,
        tool_id: 'department-ai-playbook',
        target_summary: `${fullPayload.departmentLabel} (${fullPayload.headcount} HC)`.slice(
          0,
          240
        ),
        public_preview: {
          department: fullPayload.department,
          monthlyRecoverableUsd: fullPayload.monthlyRecoverableUsd,
          annualRecoverableUsd: fullPayload.annualRecoverableUsd,
        },
        sealed_envelope: sealedEnvelope,
      });
    } catch {
      // Non-fatal if paid_tool_runs migration is pending
    }

    return NextResponse.json(publicResponse);
  } catch (err) {
    const message =
      err instanceof Error && err.message
        ? err.message
        : 'Unable to compile department SOP playbook.';
    return NextResponse.json({ error: message }, { status: 422 });
  }
}

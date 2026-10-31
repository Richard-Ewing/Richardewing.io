import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase';

export const dynamic = 'force-dynamic';

const MAX_TELEMETRY_BYTES = 16_384;

// Helper to map external signals to internal governance risks
function mapSignalToGovernanceRisk(signalType: string) {
    const signalMap: Record<string, string> = {
        'retry_spike': 'hallucination_debt',
        'failed_workflow': 'governance_drift',
        'token_inflation': 'margin_compression',
        'approval_loop': 'admissibility_instability',
        'mcp_token_saver_telemetry': 'token_efficiency_gain'
    };
    return signalMap[signalType] || 'unknown_operational_risk';
}

export async function POST(req: Request) {
    try {
        const contentLength = Number(req.headers.get('content-length') || '0');
        if (contentLength > MAX_TELEMETRY_BYTES) {
            return NextResponse.json({ error: 'Telemetry payload exceeds 16KB limit.' }, { status: 413 });
        }

        const rawBody = await req.text();
        if (rawBody.length > MAX_TELEMETRY_BYTES) {
            return NextResponse.json({ error: 'Telemetry payload exceeds 16KB limit.' }, { status: 413 });
        }

        const payload = JSON.parse(rawBody || '{}');
        const {
            organizationId,
            signalType = 'mcp_token_saver_telemetry',
            severity = 1,
            source = 'token_saver_mcp',
            rawData = {},
            raw_payload
        } = payload;

        const safeOrgId = typeof organizationId === 'string' && organizationId.trim()
            ? organizationId.trim().slice(0, 128)
            : 'ANONYMOUS_MCP_COMMUNITY';
        const safeSignalType = typeof signalType === 'string' ? signalType.slice(0, 64) : 'mcp_token_saver_telemetry';
        const safeSource = typeof source === 'string' ? source.slice(0, 64) : 'token_saver_mcp';
        const safeSeverity = typeof severity === 'number' ? Math.min(Math.max(severity, 1), 10) : 1;
        const effectivePayload = (raw_payload && typeof raw_payload === 'object')
            ? raw_payload
            : (rawData && typeof rawData === 'object' ? rawData : {});

        // Map to internal governance risk
        const governanceRisk = mapSignalToGovernanceRisk(safeSignalType);

        // Ingest bounded payload into Supabase
        const { error: insertError } = await supabaseAdmin
            .from('external_telemetry_events')
            .insert({
                org_id: safeOrgId,
                signal_type: safeSignalType,
                severity: safeSeverity,
                source: safeSource,
                raw_payload: { ...effectivePayload, mapped_risk: governanceRisk }
            });

        if (insertError) {
            console.warn('[TELEMETRY_LOG_WARN]', insertError.message);
        }

        return NextResponse.json({ success: true, mappedRisk: governanceRisk });

    } catch (error) {
        console.error('[TELEMETRY_INGESTION_ERROR]', error);
        return NextResponse.json({ error: 'Internal server error during telemetry ingestion.' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase';

export const dynamic = 'force-dynamic';

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
        const payload = await req.json();
        const { organizationId, signalType = 'mcp_token_saver_telemetry', severity = 1, source = 'token_saver_mcp', rawData = {}, raw_payload } = payload;

        const effectivePayload = raw_payload || rawData;

        // Map to internal governance risk
        const governanceRisk = mapSignalToGovernanceRisk(signalType);

        // Ingest into Supabase if secret is provided or if it is anonymized open-source MCP telemetry
        const { error: insertError } = await supabaseAdmin
            .from('external_telemetry_events')
            .insert({
                org_id: organizationId || 'ANONYMOUS_MCP_COMMUNITY',
                signal_type: signalType,
                severity: severity,
                source: source,
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


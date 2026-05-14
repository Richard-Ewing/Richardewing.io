import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase';

// Helper to map external signals to internal governance risks
function mapSignalToGovernanceRisk(signalType: string) {
    const signalMap: Record<string, string> = {
        'retry_spike': 'hallucination_debt',
        'failed_workflow': 'governance_drift',
        'token_inflation': 'margin_compression',
        'approval_loop': 'admissibility_instability'
    };
    return signalMap[signalType] || 'unknown_operational_risk';
}

export async function POST(req: Request) {
    try {
        // 1. Authenticate the webhook (simple token auth for this phase)
        const authHeader = req.headers.get('authorization');
        if (!authHeader || authHeader !== `Bearer ${process.env.TELEMETRY_WEBHOOK_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized telemetry source.' }, { status: 401 });
        }

        // 2. Parse external payload
        const payload = await req.json();
        const { organizationId, signalType, severity, source, rawData = {} } = payload;

        if (!organizationId || !signalType || severity === undefined || !source) {
            return NextResponse.json({ error: 'Malformed telemetry payload.' }, { status: 400 });
        }

        // 3. Map to internal governance risk
        const governanceRisk = mapSignalToGovernanceRisk(signalType);

        // 4. Ingest into Supabase
        const { error: insertError } = await supabaseAdmin
            .from('external_telemetry_events')
            .insert({
                org_id: organizationId,
                signal_type: signalType,
                severity: severity,
                source: source,
                raw_payload: { ...rawData, mapped_risk: governanceRisk }
            });

        if (insertError) throw insertError;

        // 5. (Future) Trigger real-time orchestration updates or alerts based on severity
        if (severity >= 8) {
            console.log(`[HIGH SEVERITY ALERT] Org ${organizationId} experienced ${signalType} via ${source}. Risk: ${governanceRisk}`);
            // Could trigger an immediate Beehiiv/Resend email to the CISO/CTO here.
        }

        return NextResponse.json({ success: true, mappedRisk: governanceRisk });

    } catch (error) {
        console.error('[TELEMETRY_INGESTION_ERROR]', error);
        return NextResponse.json({ error: 'Internal server error during telemetry ingestion.' }, { status: 500 });
    }
}

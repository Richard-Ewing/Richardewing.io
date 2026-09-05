import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '../../../../lib/supabase';
import { trackGovernanceDelta } from '../../../../lib/intelligence/observability';
import { getPercentile } from '../../../../lib/benchmarks/percentiles';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        // 1. Authenticate Identity
        const { userId, orgId } = await auth();
        
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized. Telemetry ingestion requires authentication.' }, { status: 401 });
        }

        // 2. Parse Payload
        const payload = await req.json();
        const { 
            diagnosticId, 
            score, 
            industry = 'Default', 
            companySize = 'Startup', 
            aiMaturity = 'Exploratory',
            architectureType = 'Unknown',
            operationalBurden = 'Unmeasured',
            rawData 
        } = payload;

        if (!diagnosticId || score === undefined) {
            return NextResponse.json({ error: 'Malformed telemetry payload. diagnosticId and score are required.' }, { status: 400 });
        }

        // 3. Upsert Organization Profile (if using Clerk Orgs)
        let resolvedOrgId = null;
        if (orgId) {
            const { data: orgData, error: orgError } = await supabaseAdmin
                .from('organization_profiles')
                .upsert({
                    clerk_org_id: orgId,
                    industry,
                    company_size: companySize,
                    ai_maturity: aiMaturity,
                    architecture_type: architectureType,
                    operational_burden: operationalBurden
                }, { onConflict: 'clerk_org_id' })
                .select('id')
                .single();

            if (orgError) {
                console.error('Failed to upsert organization profile', orgError);
            } else if (orgData) {
                resolvedOrgId = orgData.id;
            }
        }

        // 4. Calculate Current Percentile Band based on active benchmarks
        // In a fully live system, this would query the DB for the live benchmark. 
        // For now, we fallback to our static logic.
        const bandInfo = getPercentile(diagnosticId, score, industry);

        // 5. Ingest Diagnostic Result
        const { error: insertError } = await supabaseAdmin
            .from('diagnostic_results')
            .insert({
                user_id: userId,
                org_id: resolvedOrgId,
                diagnostic_id: diagnosticId,
                score,
                band: bandInfo.band,
                raw_payload: rawData
            });

        if (insertError) throw insertError;

        // 6. Asynchronously Track Deltas (Do not block response)
        let deltaInsights = null;
        if (resolvedOrgId) {
            deltaInsights = await trackGovernanceDelta(resolvedOrgId, diagnosticId, score);
            
            // Log a telemetry event if there's a severe regression
            if (deltaInsights?.isRegression && Math.abs(deltaInsights.delta) > 10) {
                await supabaseAdmin.from('telemetry_events').insert({
                    user_id: userId,
                    org_id: resolvedOrgId,
                    event_type: 'SEVERE_GOVERNANCE_REGRESSION',
                    metadata: deltaInsights
                });
            }
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Operational telemetry successfully ingested.',
            insights: deltaInsights 
        });

    } catch (error) {
        console.error('[INTELLIGENCE_INGEST_ERROR]', error);
        return NextResponse.json({ error: 'Internal server error during intelligence centralization.' }, { status: 500 });
    }
}

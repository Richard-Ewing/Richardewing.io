import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabase';
import { synthesizeGovernanceIntelligence } from '../../../../lib/intelligence/synthesis';

export const dynamic = 'force-dynamic';

/**
 * Cron endpoint to dispatch Executive Intelligence Subscriptions.
 * In production, this connects to Beehiiv or Resend to physically dispatch the email.
 */
export async function POST(req: Request) {
    try {
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const cadence = searchParams.get('cadence') || 'weekly';

        let timeWindowDays = 7;
        if (cadence === 'monthly') timeWindowDays = 30;
        if (cadence === 'quarterly') timeWindowDays = 90;

        // 1. Fetch recent governance trends
        const { data: trends, error: fetchError } = await supabaseAdmin
            .from('governance_trends')
            .select(`
                *,
                organization_profiles(industry, company_size, ai_maturity)
            `)
            .gte('created_at', new Date(Date.now() - timeWindowDays * 24 * 60 * 60 * 1000).toISOString()); // Dynamic window

        if (fetchError) throw fetchError;
        if (!trends || trends.length === 0) {
            return NextResponse.json({ message: 'No recent trends to report.' });
        }

        // 2. Group by Organization
        const orgMetrics: Record<string, any> = {};
        trends.forEach(trend => {
            const orgId = trend.org_id;
            if (!orgMetrics[orgId]) {
                orgMetrics[orgId] = {
                    orgId,
                    industry: trend.organization_profiles?.industry,
                    companySize: trend.organization_profiles?.company_size,
                    aiMaturity: trend.organization_profiles?.ai_maturity,
                    recentDeltas: []
                };
            }
            orgMetrics[orgId].recentDeltas.push({
                diagnosticId: trend.diagnostic_id,
                delta: trend.delta,
                currentScore: trend.current_score
            });
        });

        // 3. Synthesize & Dispatch
        const dispatches = [];
        for (const [orgId, metrics] of Object.entries(orgMetrics)) {
            const insight = synthesizeGovernanceIntelligence(metrics as any);
            
            // Here you would integrate with Beehiiv/Resend
            // await sendExecutiveDigestEmail(orgId, insight);
            
            dispatches.push({
                orgId,
                insight
            });
        }

        return NextResponse.json({ 
            success: true, 
            dispatched_count: dispatches.length,
            sample_dispatches: dispatches.slice(0, 3) 
        });

    } catch (error) {
        console.error('[DIGEST_GENERATION_ERROR]', error);
        return NextResponse.json({ error: 'Internal server error during digest dispatch.' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { supabaseAdmin, isSupabaseLive } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const ADMIN_EMAILS = ['richardewing1@gmail.com', 'richardewing@exogram.ai'];

async function verifyAdminOrCron(req: Request): Promise<boolean> {
    const authHeader = req.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    if (Boolean(cronSecret && cronSecret.length >= 16 && authHeader === `Bearer ${cronSecret}`)) {
        return true;
    }
    const { userId } = await auth();
    if (!userId) return false;
    const user = await currentUser();
    const email = user?.emailAddresses?.[0]?.emailAddress?.toLowerCase();
    return Boolean(email && ADMIN_EMAILS.includes(email));
}

export async function GET(req: Request) {
    const authorized = await verifyAdminOrCron(req);
    if (!authorized) {
        return NextResponse.json({ error: 'Unauthorized. Provide Bearer CRON_SECRET or sign in.' }, { status: 401 });
    }

    try {
        const [diagnosticsRes, telemetryRes, runsRes] = await Promise.all([
            supabaseAdmin
                .from('diagnostic_results')
                .select('id, diagnostic_id, score, band, created_at')
                .order('created_at', { ascending: false })
                .limit(25),
            supabaseAdmin
                .from('external_telemetry_events')
                .select('id, signal_type, severity, source, created_at')
                .order('created_at', { ascending: false })
                .limit(25),
            supabaseAdmin
                .from('agent_runs')
                .select('id, agent, status, summary, created_at')
                .order('created_at', { ascending: false })
                .limit(20)
        ]);

        return NextResponse.json({
            success: true,
            supabaseConnected: isSupabaseLive,
            marketResearch: telemetryRes.data || [],
            pendingRecommendations: [],
            implementedChanges: runsRes.data || [],
            recentDiagnostics: diagnosticsRes.data || [],
            generatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error('[ADMIN:INTELLIGENCE] Failed to load telemetry:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to query intelligence persistence layer.'
            },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    const authorized = await verifyAdminOrCron(request);
    if (!authorized) {
        return NextResponse.json({ error: 'Unauthorized. Provide Bearer CRON_SECRET or sign in.' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { action, recommendationId } = body;

        if (!recommendationId || typeof recommendationId !== 'string') {
            return NextResponse.json({ success: false, error: 'Valid recommendationId is required.' }, { status: 400 });
        }

        if (action === 'approve' || action === 'reject') {
            await supabaseAdmin.from('agent_runs').insert({
                agent: 'admin-intelligence-decision',
                status: action === 'approve' ? 'approved' : 'rejected',
                summary: `Recommendation ${recommendationId.slice(0, 64)} marked ${action}`
            });
            return NextResponse.json({
                success: true,
                message: `Recommendation ${recommendationId} ${action === 'approve' ? 'approved' : 'rejected'}.`
            });
        }

        return NextResponse.json({ success: false, error: 'Invalid action' }, { status: 400 });
    } catch {
        return NextResponse.json({ success: false, error: 'Failed to process request' }, { status: 500 });
    }
}

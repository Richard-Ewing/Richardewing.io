import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const ADMIN_EMAILS = new Set(['richardewing1@gmail.com', 'richardewing@exogram.ai']);

export async function GET() {
    const user = await currentUser();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const primaryEmail = user.emailAddresses?.[0]?.emailAddress?.toLowerCase() || '';
    const hasAdvisorAccess =
        user.publicMetadata?.has_ai_advisor_access === true ||
        user.publicMetadata?.has_yearly_subscription === true ||
        ADMIN_EMAILS.has(primaryEmail);

    if (!hasAdvisorAccess) {
        return NextResponse.json({ error: 'Active AI Integration Advisor subscription required' }, { status: 403 });
    }

    try {
        const { data, error } = await supabaseAdmin
            .from('ai_advisor_sessions')
            .select('id, status, current_phase, business_profile, generated_plan, created_at, updated_at')
            .eq('user_id', user.id)
            .order('updated_at', { ascending: false })
            .limit(20);

        if (error) {
            console.error('[AI Advisor] History error:', error);
            return NextResponse.json({ error: 'Failed to fetch history' }, { status: 500 });
        }

        return NextResponse.json({ sessions: data || [] });
    } catch (error) {
        console.error('[AI Advisor] History error:', error);
        return NextResponse.json({ error: 'Failed to fetch history' }, { status: 500 });
    }
}

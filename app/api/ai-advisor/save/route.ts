import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

const ADMIN_EMAILS = new Set(['richardewing1@gmail.com', 'richardewing@exogram.ai']);
const SESSION_ID_RE = /^[a-z0-9_-]{8,64}$/i;

export async function POST(req: Request) {
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

    const userId = user.id;

    try {
        const rawBody = await req.text();
        if (rawBody.length > 65536) {
            return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
        }

        const body = JSON.parse(rawBody);
        const { sessionId, businessProfile, conversationHistory, currentPhase, status, generatedPlan } = body;

        if (!sessionId || typeof sessionId !== 'string' || !SESSION_ID_RE.test(sessionId)) {
            return NextResponse.json({ error: 'Valid Session ID required' }, { status: 400 });
        }

        const { data: existingSession } = await supabaseAdmin
            .from('ai_advisor_sessions')
            .select('user_id')
            .eq('id', sessionId)
            .maybeSingle();

        if (existingSession && existingSession.user_id !== userId) {
            return NextResponse.json({ error: 'Forbidden session reference' }, { status: 403 });
        }

        const boundedHistory = Array.isArray(conversationHistory)
            ? conversationHistory.slice(-40).map((m: { role?: unknown; content?: unknown }) => ({
                  role: m?.role === 'assistant' ? 'assistant' : 'user',
                  content: String(m?.content || '').slice(0, 8000),
              }))
            : [];

        const record = {
            id: sessionId,
            user_id: userId,
            status: status === 'completed' ? 'completed' : 'in_progress',
            current_phase: Math.min(Math.max(Number(currentPhase) || 1, 1), 5),
            business_profile: businessProfile && typeof businessProfile === 'object' ? businessProfile : {},
            conversation_history: boundedHistory,
            generated_plan: generatedPlan || null,
            updated_at: new Date().toISOString(),
        };

        const { error } = await supabaseAdmin
            .from('ai_advisor_sessions')
            .upsert(record, { onConflict: 'id' });

        if (error) {
            console.error('[AI Advisor] Save error:', error);
            return NextResponse.json({ error: 'Failed to save session' }, { status: 500 });
        }

        return NextResponse.json({ success: true, sessionId });
    } catch (error) {
        console.error('[AI Advisor] Save error:', error);
        return NextResponse.json({ error: 'Failed to save session' }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: Request) {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { sessionId, businessProfile, conversationHistory, currentPhase, status, generatedPlan } = body;

        const record = {
            id: sessionId,
            user_id: userId,
            status: status || 'in_progress',
            current_phase: currentPhase || 1,
            business_profile: businessProfile || {},
            conversation_history: conversationHistory || [],
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

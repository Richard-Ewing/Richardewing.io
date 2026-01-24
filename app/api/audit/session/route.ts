import { NextResponse } from 'next/server';
import { HiringStore } from '../../../lib/hiring-store';
import { QUESTION_BANK, Role } from '../../../lib/question-bank';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { action } = body;

        if (action === 'CREATE_SESSION') {
            const { candidateId, interviewerId, role } = body;
            const sessionId = Math.random().toString(36).substring(7);
            const session = HiringStore.createSession(sessionId, candidateId || 'anon', interviewerId || 'anon', role as Role);
            return NextResponse.json(session);
        }

        if (action === 'SUBMIT_SCORE') {
            const { sessionId, phase, dimension, score, rationale } = body;
            HiringStore.logScore(sessionId, phase, dimension, score, rationale);
            return NextResponse.json({ success: true });
        }

        if (action === 'ADVANCE_PHASE') {
            const { sessionId } = body;
            const nextPhase = HiringStore.advancePhase(sessionId);
            return NextResponse.json({ nextPhase });
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

    } catch (error: any) {
        console.error('Audit API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
        return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }

    try {
        const session = HiringStore.getSession(sessionId);
        if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 });

        // Get questions for current phase
        // @ts-ignore
        const questions = !session.finalized ? QUESTION_BANK[session.role][session.current_phase] : [];

        // If finalized, return analytics
        let analytics = null;
        if (session.finalized) {
            analytics = HiringStore.analyzeSession(sessionId);
        }

        return NextResponse.json({
            session,
            questions,
            analytics
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

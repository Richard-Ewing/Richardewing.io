import { NextResponse } from 'next/server';
import { HiringStore } from '../../../lib/hiring-store';
import { QUESTION_BANK, SCENARIOS, Role, Question } from '../../../lib/question-bank';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { action, sessionId } = body;

        // --- NEW SESSION ---
        if (!action) {
            const { role = 'engineering', candidateId = 'CANDIDATE-001' } = body;

            // UNIVERSAL PROTOCOL: Load the fixed 5-phase gauntlet
            const questions = QUESTION_BANK[role as Role];

            const newSession = {
                session_id: crypto.randomUUID(),
                candidate_id: candidateId,
                role,
                created_at: new Date().toISOString(),
                current_phase: questions[0].title, // "The Signal" etc.
                phases: [], // Populated below
                finalized: false,
                scores: [],
                questions_map: {}
            };

            const questionsMap: Record<string, string> = {};
            const phaseNames = questions.map((q) => {
                questionsMap[q.title] = q.id;
                return q.title;
            });

            // HiringStore now expects phases array
            HiringStore.createSession(
                newSession.session_id,
                candidateId,
                'AI',
                role as Role,
                phaseNames,
                questionsMap
            );

            return NextResponse.json({
                sessionId: newSession.session_id
            });
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

        // Get Current Scenario
        let currentScenario = null;
        if (!session.finalized && session.questions_map) {
            const questionId = session.questions_map[session.current_phase];
            if (questionId) {
                const roleBank = QUESTION_BANK[session.role as Role];
                currentScenario = roleBank.find(q => q.id === questionId);
            }
        }

        // Calculate time remaining
        // Use generic 600s if specific phase missing
        const roleConfig: any = SCENARIOS[session.role];
        const phaseTimeLimit = roleConfig.time_limits[session.current_phase] || 600;
        // This is simple relative time since session start would be overall, 
        // ideally we track start time PER PHASE. 
        // For now, let's just return the limit constant and let frontend handle countdown or assume "session start" is "phase start" (simplification).
        // A better approach: The store should track `phase_start_time`. 
        // But for this robust update, I'll return the limit and let the frontend just count down from a static value for the phase duration,
        // OR calculate remaining based on session start if the whole session has a limit.
        // User's prompt implies "Ominous Countdown Timer: Pulses red when time is critical". 
        // Let's assume per-phase timer. I'll just return the limit.

        // If finalized, return analytics
        let analytics = null;
        if (session.finalized) {
            analytics = HiringStore.analyzeSession(sessionId);
        }

        // Use stored phases if available
        const allPhases = session.phases || SCENARIOS[session.role].phases;

        return NextResponse.json({
            session,
            currentScenario,
            analytics,
            phaseTimeLimit,
            phases: allPhases
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import { HiringStore } from '../../../lib/hiring-store';
import { QUESTION_BANK, SCENARIOS, Role } from '../../../lib/question-bank';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { action } = body;

        if (action === 'CREATE_SESSION') {
            const { candidateId, interviewerId, role } = body as { candidateId: string, interviewerId: string, role: Role };

            if (!role || !['engineering', 'pm'].includes(role)) {
                return NextResponse.json({ error: 'Invalid role' }, { status: 400 });
            }

            const sessionId = Math.random().toString(36).substring(7);

            // Randomize Scenarios
            const phases = SCENARIOS[role].phases;
            const questionsMap: Record<string, string> = {};

            phases.forEach(phase => {
                const options = QUESTION_BANK[role][phase];
                if (options && options.length > 0) {
                    const randomQ = options[Math.floor(Math.random() * options.length)];
                    questionsMap[phase] = randomQ.id;
                }
            });

            const session = HiringStore.createSession(sessionId, candidateId || 'anon', interviewerId || 'anon', role, questionsMap);
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

        // Get Current Scenario
        let currentScenario = null;
        if (!session.finalized) {
            const questionId = session.questions_map?.[session.current_phase];
            if (questionId) {
                // Find question in bank (search all phases for role)
                const phases = SCENARIOS[session.role].phases;
                for (const p of phases) {
                    const found = QUESTION_BANK[session.role][p]?.find(q => q.id === questionId);
                    if (found) {
                        currentScenario = found;
                        break;
                    }
                }
            }
        }

        // Calculate time remaining
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

        const allPhases = SCENARIOS[session.role].phases;

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

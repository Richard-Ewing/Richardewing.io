import { NextResponse } from 'next/server';
import { HiringStore } from '../../../lib/hiring-store';
import { QUESTION_BANK_LEVELS, SCENARIOS, Role, Question } from '../../../lib/question-bank';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { action, sessionId } = body;

        // --- NEW SESSION ---
        if (!action) {
            const { role = 'engineering', candidateId = 'CANDIDATE-001', level = 5 } = body;

            // LEVELING LOGIC: Select questions based on level
            // Default to 5 (Senior) if level not found
            // Cast level to number just in case
            const targetLevel = Number(level);
            const validLevel = [3, 5, 7].includes(targetLevel) ? targetLevel : 5;

            const roleBank = QUESTION_BANK_LEVELS[role as Role];
            const questions = roleBank[validLevel] || roleBank[5];

            const newSession = {
                session_id: crypto.randomUUID(),
                candidate_id: candidateId,
                role,
                level: validLevel,
                created_at: new Date().toISOString(),
                current_phase: 'Detection', // Phase 1 Name
                phases_completed: [],
                finalized: false,
                scores: []
            };

            // Map questions to phases (Phase 1, Phase 2, ...)
            // We use generic names or derived from question title if needed
            // But UI expects a list of phases.
            // Let's define the phase names based on the Question types or just generic
            const questionsMap: Record<string, string> = {};
            const phaseNames = questions.map((q, i) => {
                let name = `Phase ${i + 1}`;
                if (i === 0) name = 'Detection';
                else if (i === 1) name = 'Correction';
                else if (i === 2) name = 'Defense';

                questionsMap[name] = q.id;
                return name;
            });

            // Store session
            HiringStore.createSession(
                newSession.session_id,
                candidateId,
                'AI',
                role as Role,
                phaseNames,
                questionsMap,
                validLevel
            );

            return NextResponse.json({
                sessionId: newSession.session_id,
                level: validLevel
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
        // Get Current Scenario
        let currentScenario = null;
        if (!session.finalized && session.questions_map) {
            const questionId = session.questions_map[session.current_phase];
            if (questionId) {
                const level = session.level || 5;
                // @ts-ignore
                const roleBank = QUESTION_BANK_LEVELS[session.role as Role];
                // @ts-ignore
                const levelQuestions = roleBank[level] || roleBank[5];
                // @ts-ignore
                currentScenario = levelQuestions.find(q => q.id === questionId);
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

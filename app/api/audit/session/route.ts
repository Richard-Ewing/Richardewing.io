import { NextResponse } from 'next/server';
import { HiringStore } from '../../../lib/hiring-store';
import { QUESTION_BANK, SCENARIOS, Role, Question } from '../../../lib/question-bank';
import { model } from '@/app/lib/gemini';

const evaluateAnswer = async (question: Question, answer: string, role: string) => {
    if (!question.grading) return { score: 1, feedback: "No rubric available." };

    try {
        const prompt = `
System: You are a Bar Raiser at a top-tier tech company (Netflix/Stripe level). 
You are interviewing a candidate for a ${role === 'engineering' ? 'Senior Software Engineer' : 'Product Manager'} role.
Your goal is to assess their "Altitude" of judgment.

Scoring Scale:
3 = L3 (Junior): Focuses on syntax, immediate fixes, or surface-level metrics. "Code Monkey".
4 = L4 (Mid): Competent execution but lacks broader system awareness.
5 = L5 (Senior): Considers system health, maintenance costs, and trade-offs.
6 = L6 (Staff/Principal): Focuses on Capital Efficiency, ROI, Leverage, and Second-Order effects. "Financial Steward".
7 = L7 (Distinguished): Enterprise Strategy shift.

Question: "${question.prompt}"

L3 Answer Example (Low Altitude): "${question.grading.l3_example}"
L6 Answer Example (High Altitude): "${question.grading.l6_example}"
Rubric: "${question.grading.rubric}"

Candidate Answer: "${answer}"

Task: Evaluate the candidate. Be critical. Short answers are fine if they hit the L6 key points (Capital/Leverage).
Return valid JSON only: { "score": number (3-7), "rationale": "One sentence explanation of why they got this score, referencing the specific missing/present signal." }
        `;

        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
            },
        });

        const response = result.response;
        const text = response.text();

        // Parse JSON safely
        const json = JSON.parse(text);
        return { score: json.score, feedback: json.rationale };

    } catch (e) {
        console.error("Gemini Critical Failure:", e);
        // @ts-ignore
        if (e.response) {
            // @ts-ignore
            console.error("Gemini Data:", JSON.stringify(e.response, null, 2));
        }

        // Debug Config
        const key = process.env.GEMINI_API_KEY;
        console.error("API Key Status:", key ? `Present (${key.substring(0, 4)}...)` : "MISSING");

        // Fallback for when API fails/quota exceeded
        return { score: 3, feedback: "Automated scoring unavailable. Baseline score assigned." };
    }
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action } = body;

        console.log(`[AUDIT] Action: ${action} | Session: ${body.sessionId}`);

        // --- NEW SESSION ---
        if (action === 'START_SESSION') {
            const { role, candidateId, interviewerId } = body;

            // 1. Get Questions
            // Universal Protocol: Load ALL 5 phases for the role
            const scenarios = QUESTION_BANK[role as Role];
            if (!scenarios) return NextResponse.json({ error: 'Invalid role' }, { status: 400 });

            const phases = scenarios.map(q => q.title);
            const questionsMap = scenarios.reduce((acc, q) => {
                acc[q.title] = q.id;
                return acc;
            }, {} as Record<string, string>);

            // 2. Create Session
            const session = HiringStore.createSession(
                crypto.randomUUID(),
                candidateId || 'anon',
                interviewerId || 'system',
                role as Role,
                phases,
                questionsMap
            );

            return NextResponse.json({ sessionId: session.session_id });
        }

        // --- SUBMIT FINDINGS (SCORING) ---
        if (action === 'SUBMIT_SCORE') {
            const { sessionId, phase, dimension, rationale } = body; // Score is calculated server-side now

            const session = HiringStore.getSession(sessionId);
            if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 });

            const questionId = session.questions_map[phase];
            const roleBank = QUESTION_BANK[session.role as Role];
            const question = roleBank.find(q => q.id === questionId);

            if (!question) return NextResponse.json({ error: 'Question not found' }, { status: 404 });

            // 3. LLM Eval
            const { score, feedback } = await evaluateAnswer(question, rationale, session.role);

            // Log the LLM score
            HiringStore.logScore(sessionId, phase, dimension, score, feedback);

            return NextResponse.json({ success: true, evaluation: feedback, score });
        }

        // --- ADVANCE PHASE ---
        if (action === 'ADVANCE_PHASE') {
            const { sessionId } = body;
            const nextPhase = HiringStore.advancePhase(sessionId);
            return NextResponse.json({ nextPhase });
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
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

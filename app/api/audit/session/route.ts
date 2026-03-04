import { NextResponse } from 'next/server';
import { HiringStore } from '../../../lib/hiring-store';
import { QUESTION_BANK, SCENARIOS, Role, Question, selectRandomQuestions } from '../../../lib/question-bank';
import { model } from '@/app/lib/gemini';

const evaluateAnswer = async (question: Question, answer: string, role: string) => {
    if (!question.grading) return { score: 4, feedback: "No rubric available. Neutral score assigned." };

    const grading = question.grading;

    const doEval = async (): Promise<{ score: number; feedback: string }> => {
        const prompt = `
System: You are a CALIBRATED Bar Raiser at a top-tier tech company (Netflix/Stripe level). 
You are interviewing a candidate for a ${role === 'engineering' ? 'Senior Software Engineer' : 'Product Manager'} role.
Your job is to PRECISELY assess their "Altitude" of judgment.

CRITICAL CALIBRATION RULES:
- You MUST differentiate between levels. Do NOT default to L3.
- Read the answer carefully. If it shows ANY system-level or economic thinking, it is AT LEAST L4.
- Score based on the STRONGEST signal in their answer, not the weakest.

Scoring Dimensions:
1. Verification Depth: Do they question assumptions? Do they look beyond the surface?
2. Architectural Reasoning: Do they consider system-wide effects? Scale? Dependencies?
3. Economic Awareness: Do they think about cost, ROI, capital efficiency, maintenance liability?
4. AI Interrogation: Do they treat outputs skeptically? Test edge cases?

Level Definitions (BE PRECISE):
- L3 (Score 3): ONLY if the answer is purely superficial. They restate the obvious, suggest trivial fixes, or miss the core issue entirely. Example: "${grading.l3_example}"
- L4 (Score 4): The answer identifies the right problem area but stays local in scope. They see immediate risks but miss second-order effects or economic implications.
- L5 (Score 5): The answer demonstrates system-level thinking. They identify maintenance liability, scalability concerns, or economic trade-offs. They can prioritize and defer intelligently.
- L6 (Score 6): ONLY for exceptional answers that show capital stewardship, leverage thinking, and second-order strategic effects. Example: "${grading.l6_example}"

Question: "${question.prompt}"

Rubric: "${grading.rubric}"

Candidate Answer: "${answer}"

INSTRUCTIONS:
1. First, identify the STRONGEST signal in the answer (quote it).
2. Map that signal to the scoring dimensions above.
3. Assign a score 3-6 based on the level definitions.
4. If the answer mentions trade-offs, deferral, or economic impact → score at LEAST 4.
5. If the answer mentions system-wide effects, maintenance liability, or capital efficiency → score at LEAST 5.

Return valid JSON only: 
{ 
  "score": number (3-6), 
  "rationale": "Markdown formatted. Bold the **Strongest Signal** and the **Growth Area**. Reference specific dimensions." 
}
        `;

        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
            },
        });

        const response = result.response;
        const text = response.text();
        const json = JSON.parse(text);

        // Clamp score to valid range
        const score = Math.max(3, Math.min(6, json.score));
        return { score, feedback: json.rationale };
    };

    // Try with one retry on failure
    try {
        return await doEval();
    } catch (e1) {
        console.warn("Gemini eval attempt 1 failed, retrying...", e1);
        try {
            return await doEval();
        } catch (e2) {
            console.error("Gemini Critical Failure (both attempts):", e2);
            // Default to L4 (neutral mid-range) instead of L3 on failure
            return { score: 4, feedback: "Automated scoring temporarily unavailable. Neutral score assigned. Your actual performance may differ." };
        }
    }
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { action } = body;

        console.log(`[AUDIT] Action: ${action} | Session: ${body.sessionId}`);

        // --- NEW SESSION (STATELESS) ---
        if (action === 'START_SESSION') {
            const { role, candidateId, interviewerId } = body;

            // 1. Select RANDOM questions (one per phase) for rotation
            const validRole = role as Role;
            if (!QUESTION_BANK[validRole]) return NextResponse.json({ error: 'Invalid role' }, { status: 400 });

            const selectedQuestions = selectRandomQuestions(validRole);
            const phases = selectedQuestions.map(q => q.title);
            const questionsMap = selectedQuestions.reduce((acc, q) => {
                acc[q.title] = q.id;
                return acc;
            }, {} as Record<string, string>);

            // 2. Generate Session Object (No DB save)
            const session = HiringStore.generateSession(
                crypto.randomUUID(),
                candidateId || 'anon',
                interviewerId || 'system',
                validRole,
                phases,
                questionsMap
            );

            return NextResponse.json({ session });
        }

        // --- GRADE ANSWER (STATELESS) ---
        if (action === 'GRADE_ANSWER') {
            const { role, phase, answer } = body;

            // Need to lookup question ID from strict maps since we don't trust client to send question ID directly?
            // Actually, client has questions_map. But safer to look up from Role + Phase Name.
            const roleBank = QUESTION_BANK[role as Role];
            const question = roleBank?.find(q => q.title === phase);

            if (!question) {
                return NextResponse.json({ error: 'Question object not found for phase' }, { status: 404 });
            }

            // LLM Eval
            const { score, feedback } = await evaluateAnswer(question, answer, role);

            return NextResponse.json({ success: true, evaluation: feedback, score });
        }

        // --- ANALYZE SESSION (STATELESS) ---
        if (action === 'ANALYZE_SESSION') {
            const { scores, role } = body;
            if (!scores || !Array.isArray(scores)) {
                return NextResponse.json({ error: 'Invalid scores' }, { status: 400 });
            }

            const analytics = HiringStore.analyzeSession(scores, role as Role);
            return NextResponse.json({ analytics });
        }

        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

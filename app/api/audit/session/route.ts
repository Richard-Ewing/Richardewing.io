import { NextResponse } from 'next/server';
import { HiringStore } from '../../../lib/hiring-store';
import { QUESTION_BANK, SCENARIOS, Role, Question, selectRandomQuestions } from '../../../lib/question-bank';
import { model } from '@/app/lib/gemini';

export const dynamic = 'force-dynamic';

const evaluateAnswer = async (question: Question, answer: string, role: string) => {
    if (!question.grading) return { score: 4, feedback: "No rubric available. Neutral score assigned." };

    const grading = question.grading;

    const doEval = async (): Promise<{ score: number; feedback: string }> => {
        const prompt = `
System: You are a CALIBRATED Bar Raiser at a top-tier tech company (Netflix/Stripe level). 
You are interviewing a candidate for a ${role === 'engineering' ? 'Senior Software Engineer' : 'Product Manager'} role.
Your job is to PRECISELY assess their "Altitude" of judgment across an L3-L8 scale.

CRITICAL CALIBRATION RULES:
- You MUST differentiate between levels. Do NOT default to L3 or L4.
- Read the answer carefully. If it shows ANY system-level or economic thinking, it is AT LEAST L5.
- Score based on the STRONGEST signal in their answer, not the weakest.
- A truly exceptional answer that reframes the problem or shows portfolio-level thinking MUST be scored L7 or L8.

Scoring Dimensions:
1. Verification Depth: Do they question assumptions? Do they look beyond the surface?
2. Architectural Reasoning: Do they consider system-wide effects? Scale? Dependencies?
3. Economic Awareness: Do they think about cost, ROI, capital efficiency, maintenance liability?
4. Strategic Altitude: Do they connect decisions to org-level, market-level, or enterprise-value implications?

Level Definitions (BE PRECISE  -  USE THE FULL L3-L8 RANGE):
- L3 (Score 3): ONLY if the answer is purely superficial. They restate the obvious, suggest trivial fixes, or miss the core issue entirely. Example: "${grading.l3_example}"
- L4 (Score 4): The answer identifies the right problem area but stays local in scope. They see immediate risks but miss second-order effects or economic implications. Shows competence but not depth.
- L5 (Score 5): Demonstrates system-level thinking. Identifies maintenance liability, scalability concerns, or economic trade-offs. Can prioritize and defer intelligently. This is a solid senior-level answer.
- L6 (Score 6): Exceptional answers showing capital stewardship, use thinking, and second-order strategic effects. Quantifies impact, proposes concrete solutions with acceptance criteria. Example: "${grading.l6_example}"
- L7 (Score 7): Portfolio-level strategic thinking. Connects the specific issue to broader organizational patterns, market positioning, or enterprise value. Proposes frameworks that prevent entire classes of problems, not just this one.
- L8 (Score 8): Executive-grade foresight. Reframes the entire problem, identifies industry-wide patterns, articulates how this decision affects capital allocation at the org level. Demonstrates the ability to realign teams and strategy around fundamental truths.

Question: "${question.prompt}"

Rubric: "${grading.rubric}"

Candidate Answer: "${answer}"

INSTRUCTIONS:
1. First, identify the STRONGEST signal in the answer (quote it).
2. Map that signal to the scoring dimensions above.
3. Assign a score 3-8 based on the level definitions.
4. SCORING GUIDELINES:
   - Answer only restates the problem or suggests obvious fixes → L3
   - Answer identifies the right area but stays local → L4
   - Answer mentions trade-offs, deferral, or economic impact → AT LEAST L5
   - Answer mentions system-wide effects, maintenance liability, or capital efficiency → AT LEAST L6
   - Answer connects to org-level patterns, proposes preventive frameworks → L7
   - Answer reframes the problem, shows executive-level strategic foresight → L8

Return valid JSON only: 
{ 
  "score": number (3-8), 
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

        // Clamp score to valid L3-L8 range
        const score = Math.max(3, Math.min(8, json.score));
        return { score, feedback: json.rationale };
    };

    // Try with one retry on failure
    try {
        return await doEval();
    } catch (e1) {
        console.warn("Gemini eval attempt 1 failed, retrying...", e1);
        try {
            return await doEval();
        } catch (e2: any) {
            console.error("Gemini Critical Failure (both attempts):", e2);
            const errMsg = e2?.message || String(e2);
            // Default to L4 (neutral mid-range) instead of L3 on failure
            return { score: 4, feedback: `Automated scoring temporarily unavailable. Error: ${errMsg.slice(0, 200)}` };
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
            const { role, phase, answer, questionId } = body;

            // Lookup by question ID (preferred) or fallback to phase title match
            const roleBank = QUESTION_BANK[role as Role];
            let question: Question | undefined;

            if (questionId) {
                // Use exact ID match  -  this ensures the correct rubric is used
                // even when multiple variants share the same phase title
                question = roleBank?.find(q => q.id === questionId);
            }

            // Fallback: lookup by phase title (legacy behavior)
            if (!question) {
                question = roleBank?.find(q => q.title === phase);
            }

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

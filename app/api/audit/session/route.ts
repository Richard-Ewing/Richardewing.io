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
Your goal is to assess their "Altitude" of judgment across 4 Dimensions.

Dimensions:
1. Verification Depth (Safety/Robustness)
2. Architectural Reasoning (System/Global context)
3. Economic Awareness (Cost/ROI/Capital Efficiency)
4. AI Interrogation (Treating AI as intern vs oracle)

Scoring Scale (Level):
3 = L3 (Junior): Syntax focused, local scope, ignores cost.
4 = L4 (Mid/Senior): Competent, identifies immediate risks.
5 = L5 (Staff): System awareness, maintenance liability, economic trade-offs.
6 = L6 (Principal): Capital steward, leverage, second-order effects.

Question: "${question.prompt}"

Rubric: "${question.grading.rubric}"

Candidate Answer: "${answer}"

Task: Evaluate the candidate.
Return valid JSON only: 
{ 
  "score": number (3-6), 
  "rationale": "Markdown formatted summary. Bold the **Strongest Signal** and the **Growth Area**. Mention specific dimensions." 
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

        // Parse JSON safely
        const json = JSON.parse(text);
        return { score: json.score, feedback: json.rationale };

    } catch (e) {
        console.error("Gemini Critical Failure:", e);
        return { score: 3, feedback: "Automated scoring unavailable. Baseline score assigned." };
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

            // 1. Get Questions
            // Universal Protocol: Load ALL 5 phases for the role
            const scenarios = QUESTION_BANK[role as Role];
            if (!scenarios) return NextResponse.json({ error: 'Invalid role' }, { status: 400 });

            const phases = scenarios.map(q => q.title);
            const questionsMap = scenarios.reduce((acc, q) => {
                acc[q.title] = q.id;
                return acc;
            }, {} as Record<string, string>);

            // 2. Generate Session Object (No DB save)
            const session = HiringStore.generateSession(
                crypto.randomUUID(),
                candidateId || 'anon',
                interviewerId || 'system',
                role as Role,
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

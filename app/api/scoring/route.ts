import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

// Schema for input validation
const ScoreRequestSchema = z.object({
    role: z.enum(['engineering', 'pm']),
    scores: z.object({
        verification_depth: z.number().min(0).max(3),
        architectural_reasoning: z.number().min(0).max(3),
        economic_awareness: z.number().min(0).max(3),
        ai_interrogation: z.number().min(0).max(3),
    }),
    observations: z.array(z.string()),
    outcome: z.string(),
    rationale: z.string(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate input
        const validated = ScoreRequestSchema.safeParse(body);
        if (!validated.success) {
            return NextResponse.json(
                { error: 'Invalid input', details: validated.error.issues },
                { status: 400 }
            );
        }

        const { role, scores, observations, outcome, rationale } = validated.data;

        if (!process.env.GOOGLE_API_KEY) {
            console.error('Configuration Error: GOOGLE_API_KEY is missing');
            return NextResponse.json(
                { error: 'Server configuration error: Google API Key is missing.' },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                temperature: 0.7,
            },
            systemInstruction: 'You are a high-agency executive advisor.',
        });

        const prompt = `
        Act as 'The Product Economist'. Write a hiring defense memo for a ${role} candidate.
        
        SCORES (0-3 scale):
        - Verification Depth: ${scores.verification_depth}
        - Architectural Reasoning: ${scores.architectural_reasoning}
        - Economic Awareness: ${scores.economic_awareness}
        - AI Interrogation: ${scores.ai_interrogation}
        
        VERDICT: ${outcome}
        RATIONALE: ${rationale}
        
        INTERVIEWER NOTES:
        ${observations.join("; ")}
        
        INSTRUCTIONS:
        Write a concise, 4-sentence paragraph explaining the hiring decision.
        Use terms like "Capital Risk," "Leverage," "Technical Insolvency," and "Judgment."
        Do not use HR fluff. Be ruthless and direct.
        `;

        const result = await model.generateContent(prompt);
        const memo = result.response.text();

        return NextResponse.json({ memo });

    } catch (error) {
        console.error('Audit Engine Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate memo', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

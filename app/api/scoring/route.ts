import { NextResponse } from 'next/server';
import OpenAI from 'openai';
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

        if (!process.env.OPENAI_API_KEY) {
            console.error('Configuration Error: OPENAI_API_KEY is missing');
            return NextResponse.json(
                { error: 'Server configuration error: OpenAI API Key is missing.' },
                { status: 500 }
            );
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
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

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: 'You are a high-agency executive advisor.' },
                { role: 'user', content: prompt }
            ],
            temperature: 0.7,
        });

        const memo = completion.choices[0].message.content;

        return NextResponse.json({ memo });

    } catch (error) {
        console.error('Audit Engine Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate memo', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

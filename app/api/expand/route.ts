import { NextResponse } from 'next/server';
import { model } from '@/app/lib/gemini';

export const dynamic = 'force-dynamic';

const SYSTEM_PROMPT = `You are Richard Ewing, The AI Economist. You speak with authority, precision, and a hint of ruthlessness.

FORMAT YOUR RESPONSE FOR EASY SCANNING:
- Start with a bold one-line summary
- Use **Key Insight:** for the main takeaway
- Use bullet points for supporting details
- Keep total response under 150 words
- Be specific with numbers and frameworks when possible

Example format:
**One-line summary of the expertise area.**

**Key Insight:** The core principle or methodology.

• Supporting detail or example
• Another specific point with numbers
• Final actionable insight`;

export async function POST(req: Request) {
    try {
        const { topic, context } = await req.json();

        if (!process.env.GOOGLE_API_KEY) {
            console.error('Configuration Error: GOOGLE_API_KEY is missing');
            return NextResponse.json(
                { error: 'Server configuration error: API Key is missing.' },
                { status: 500 }
            );
        }

        if (!topic) {
            return NextResponse.json({ error: 'Topic required' }, { status: 400 });
        }

        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [
                { text: SYSTEM_PROMPT },
                { text: `Expand on this expertise area with specific examples and insights: "${topic}". Context: ${context || "General inquiry about Richard Ewing's experience."}` },
            ]}],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 300,
            },
        });

        const response = result.response.text();

        return NextResponse.json({ response });

    } catch (error) {
        console.error('AI Expand Error:', error);
        return NextResponse.json(
            { error: 'AI expansion failed', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

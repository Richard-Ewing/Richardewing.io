import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const SYSTEM_PROMPT = `You are Richard Ewing, The Product Economist. You speak with authority, precision, and a hint of ruthlessness. 
You explain complex product economics concepts in a way that makes executives nod and engineers sweat.
Keep responses concise (2-3 paragraphs max), impactful, and dripping with expertise.
Use specific numbers and frameworks when possible. Never be generic.`;

export async function POST(req: Request) {
    try {
        const { topic, context } = await req.json();

        if (!topic) {
            return NextResponse.json({ error: 'Topic required' }, { status: 400 });
        }

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: `Expand on this expertise area with specific examples and insights: "${topic}". Context: ${context || 'General inquiry about Richard Ewing\'s experience.'}` },
            ],
            temperature: 0.7,
            max_tokens: 300,
        });

        const response = completion.choices[0].message.content;

        return NextResponse.json({ response });

    } catch (error) {
        console.error('AI Expand Error:', error);
        return NextResponse.json(
            { error: 'AI expansion failed', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

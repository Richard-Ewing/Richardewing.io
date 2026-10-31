import { NextResponse } from 'next/server';
import { client } from '@/app/lib/gemini';

export const dynamic = 'force-dynamic';

const ipExpandTracker = new Map<string, { count: number; expiresAt: number }>();

function isExpandRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = ipExpandTracker.get(ip);

    if (!record || now > record.expiresAt) {
        if (ipExpandTracker.size >= 2000) {
            const oldestKey = ipExpandTracker.keys().next().value;
            if (oldestKey) ipExpandTracker.delete(oldestKey);
        }
        ipExpandTracker.set(ip, { count: 1, expiresAt: now + 10 * 60 * 1000 });
        return false;
    }

    if (record.count >= 20) {
        return true;
    }

    record.count += 1;
    return false;
}

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
        const ip =
            req.headers.get('cf-connecting-ip')?.trim() ||
            req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
            '127.0.0.1';

        if (isExpandRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Rate limit reached. Please wait a few minutes and try again.' },
                { status: 429 }
            );
        }

        const rawBody = await req.text();
        if (rawBody.length > 4096) {
            return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
        }

        const { topic: rawTopic, context: rawContext } = JSON.parse(rawBody);
        const topic = typeof rawTopic === 'string' ? rawTopic.trim().slice(0, 160) : '';
        const context = typeof rawContext === 'string' ? rawContext.trim().slice(0, 600) : '';

        if (!process.env.GOOGLE_API_KEY) {
            console.error('Configuration Error: GOOGLE_API_KEY is missing');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        if (!topic) {
            return NextResponse.json({ error: 'Topic required' }, { status: 400 });
        }

        const interaction = await client.interactions.create({
            model: 'gemini-3.8-flash',
            input: `Expand on this expertise area with specific examples and insights: "${topic}". Context: ${context || "General inquiry about Richard Ewing's experience."}`,
            system_instruction: SYSTEM_PROMPT,
        });
        const response = interaction.output_text || '';

        return NextResponse.json({ response });
    } catch (error) {
        console.error('AI Expand Error:', error);
        return NextResponse.json(
            { error: 'AI expansion failed' },
            { status: 500 }
        );
    }
}

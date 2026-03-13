import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

// Zod Schema for strict typing
const TicketSchema = z.object({
    ticket: z.string(),
    category: z.enum(['Maintenance', 'Retention', 'Growth']),
    reasoning: z.string(),
});

const ResponseSchema = z.object({
    categorized: z.array(TicketSchema),
});

// THE "RUTHLESS" PERSONA
const SYSTEM_PROMPT = `
You are The Product Economist, a ruthless forensic auditor for private equity firms. 
Your job is to classify engineering tasks into three capital buckets to detect insolvency.

CLASSIFICATION RULES (IMMUTABLE):
1. MAINTENANCE (The Bad - "Variable Yield Asset Decay"):
   - Keywords: fix, bug, refactor, debt, migration, compliance, security, patch, update, meeting, admin, prep, investigation, research, stability, infrastructure, chore, cleanup.
   - Logic: If it keeps the lights on but adds no new revenue, it is Maintenance. "Refactoring" is ALWAYS Maintenance.

2. RETENTION (The Necessary - "Churn Prevention"):
   - Keywords: performance, latency, uptime, churn reduction, customer request, support ticket, enterprise requirement, sso, rbac, gdpr.
   - Logic: If it stops a customer from leaving but doesn't attract a new one, it is Retention.

3. GROWTH (The Good - "Net New ARR"):
   - Keywords: new feature, launch, market expansion, upsell, pricing tier, viral, acquisition, onboarding, revenue, experiment.
   - Logic: If it directly drives Net New ARR, it is Growth.

OUTPUT INSTRUCTION:
Return a JSON object with a "categorized" array. Each item MUST have these exact keys:
- "ticket": The original ticket text.
- "category": Exactly one of "Maintenance", "Retention", or "Growth".
- "reasoning": A short explanation (1 sentence).
`;

export async function POST(req: Request) {
    try {
        const { tickets } = await req.json();

        if (!process.env.GOOGLE_API_KEY) {
            console.error('Configuration Error: GOOGLE_API_KEY is missing');
            return NextResponse.json(
                { error: 'Server configuration error: Google API Key is missing. Please check .env.local.' },
                { status: 500 }
            );
        }

        if (!tickets || !Array.isArray(tickets) || tickets.length === 0) {
            return NextResponse.json(
                { error: 'Invalid input: tickets array required' },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                temperature: 0.1,
                responseMimeType: 'application/json',
            },
        });

        const result = await model.generateContent([
            { text: SYSTEM_PROMPT },
            { text: `AUDIT THIS BACKLOG:\n${tickets.join('\n')}` },
        ]);

        const rawResponse = result.response.text();

        if (!rawResponse) {
            throw new Error('Empty response from Gemini');
        }

        // Parse and validate response
        const parsed = JSON.parse(rawResponse);
        const validated = ResponseSchema.parse(parsed);

        // Calculate category counts
        const categories = {
            maintenance: validated.categorized.filter(t => t.category === 'Maintenance').length,
            retention: validated.categorized.filter(t => t.category === 'Retention').length,
            growth: validated.categorized.filter(t => t.category === 'Growth').length,
        };

        return NextResponse.json({
            categorized: validated.categorized,
            categories,
            total: validated.categorized.length,
        });

    } catch (error) {
        console.error('PDI Analysis Error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: 'Invalid response format from AI', details: error.issues },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: 'Analysis failed', message: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

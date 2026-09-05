import { NextResponse } from 'next/server';
import { model } from '@/app/lib/gemini';
import { z } from 'zod';

export const dynamic = 'force-dynamic';

// Zod Schema for strict typing
const TicketSchema = z.object({
    ticket: z.string(),
    category: z.enum(['Maintenance', 'Retention', 'Growth']),
    reasoning: z.string(),
});

const ResponseSchema = z.object({
    categorized: z.array(TicketSchema),
    qpep_roadmap: z.array(z.object({
        month: z.number(),
        focus: z.string(),
        action_items: z.array(z.string()),
    })).min(1).max(5),
});

// THE "RUTHLESS" PERSONA
const SYSTEM_PROMPT = `
You are The AI Economist, a ruthless forensic auditor for private equity firms. 
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

4. Q-PEP REMEDIATION (The Cure):
   - You MUST analyze the specific 'Maintenance' tickets identified.
   - You MUST generate a 3-month Quarterly Product Execution Plan (Q-PEP) to eliminate this debt.
   - Month 1 is aggressive triage. Month 2 is structural refactor. Month 3 is CI/CD & Automation.
   - Provide 3 highly tactical action items per month based specifically on the user's backlog.

OUTPUT INSTRUCTION:
Return ONLY a valid JSON object matching this exact schema:
{
  "categorized": [
    {
      "ticket": "string (the original ticket text)",
      "category": "string (must be EXACTLY one of: 'Maintenance', 'Retention', 'Growth')",
      "reasoning": "string (1 short sentence)"
    }
  ],
  "qpep_roadmap": [
    {
      "month": number (1, 2, or 3),
      "focus": "string (the strategic theme)",
      "action_items": ["string", "string", "string"]
    }
  ]
}
`;

export async function POST(req: Request) {
    try {
        const { tickets } = await req.json();

        if (!process.env.GOOGLE_API_KEY) {
            console.error('Configuration Error: GOOGLE_API_KEY is missing');
            return NextResponse.json(
                { error: 'Server configuration error: API Key is missing. Please check environment variables.' },
                { status: 500 }
            );
        }

        if (!tickets || !Array.isArray(tickets) || tickets.length === 0) {
            return NextResponse.json(
                { error: 'Invalid input: tickets array required' },
                { status: 400 }
            );
        }

        const result = await model.generateContent({
            contents: [
                { role: 'user', parts: [
                    { text: SYSTEM_PROMPT },
                    { text: `AUDIT THIS BACKLOG:\n${tickets.join('\n')}` },
                ]},
            ],
            generationConfig: {
                temperature: 0.1,
                responseMimeType: 'application/json',
            },
        });

        const rawResponse = result.response.text();

        if (!rawResponse) {
            throw new Error('Empty response from Gemini');
        }

        // Strip markdown formatting if the LLM wrapped the JSON
        const cleanJson = rawResponse.replace(/```json/gi, '').replace(/```/gi, '').trim();

        // Parse and validate response
        const parsed = JSON.parse(cleanJson);
        const validated = ResponseSchema.parse(parsed);

        // Calculate category counts
        const categories = {
            maintenance: validated.categorized.filter(t => t.category === 'Maintenance').length,
            retention: validated.categorized.filter(t => t.category === 'Retention').length,
            growth: validated.categorized.filter(t => t.category === 'Growth').length,
        };

        return NextResponse.json({
            categorized: validated.categorized,
            qpep_roadmap: validated.qpep_roadmap,
            categories,
            total: validated.categorized.length,
        });

    } catch (error: any) {
        console.error('PDI Analysis Error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: `Invalid response format from AI: ${JSON.stringify(error.issues)}` },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { error: error?.message || 'Unknown server error during analysis' },
            { status: 500 }
        );
    }
}

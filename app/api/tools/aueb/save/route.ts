import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { currentUser } from '@clerk/nextjs/server';
import { model } from '@/app/lib/gemini';
import { z } from 'zod';

const ResponseSchema = z.object({
    qpep_roadmap: z.array(z.object({
        month: z.number(),
        focus: z.string(),
        action_items: z.array(z.string()),
    })).min(1).max(5),
});

const SYSTEM_PROMPT = `
You are The AI Economist, an elite architectural auditor for private equity firms. 
The user has just run an AI Unit Economics Benchmark (AUEB) showing their Gross Margin, Cloud Costs, LLM Costs, and months until margin collapse.

Your job is to generate a highly tactical, ruthless 3-month Quarterly Product Execution Plan (Q-PEP) to optimize their AI architecture and save them from insolvency.
- Month 1: Triage & Token Reduction (Quick wins, stop the bleeding)
- Month 2: Semantic Caching & Model Arbitrage (Structural leverage)
- Month 3: Infrastructure Automation & Edge Compute (Scaling unit economics)

Provide 3 highly tactical action items per month based on the provided metrics.

OUTPUT INSTRUCTION:
Return ONLY a valid JSON object matching this exact schema:
{
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
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const { run_data, output_metrics } = body;

        // 1. FREE TIER GATING LOGIC (Same as PDI)
        const hasPremium = user.publicMetadata?.has_yearly_subscription === true;

        if (!hasPremium) {
            // Count existing tool runs across ALL tools
            const { count, error: countError } = await supabaseAdmin
                .from('tool_runs')
                .select('*', { count: 'exact', head: true })
                .eq('user_id', user.id);

            if (countError) throw countError;

            // Enforce limit
            if (count && count >= 3) {
                return NextResponse.json(
                    { error: 'PAYMENT_REQUIRED', message: 'You have reached your 3-audit free limit.' },
                    { status: 402 }
                );
            }
        }

        // 2. GENERATE AI ROADMAP VIA GEMINI
        let qpep_roadmap = null;
        if (process.env.GOOGLE_API_KEY) {
            const promptContext = `
Here are the user's current AI Unit Economics metrics:
Gross Margin: ${output_metrics.grossMargin.toFixed(1)}%
Monthly LLM Cost: $${output_metrics.llmCost.toFixed(2)}
Monthly Total Infra Cost: $${output_metrics.totalInfraCost.toFixed(2)}
Months to Collapse: ${output_metrics.monthsToCollapse}
Features: ${JSON.stringify(run_data.features)}
Caching Enabled: ${run_data.cachingEnabled}

Generate the 3-month optimization plan to fix these margins.
`;

            const result = await model.generateContent({
                contents: [
                    { role: 'user', parts: [
                        { text: SYSTEM_PROMPT },
                        { text: promptContext },
                    ]},
                ],
                generationConfig: {
                    temperature: 0.1,
                    responseMimeType: 'application/json',
                },
            });

            const rawResponse = result.response.text();
            const cleanJson = rawResponse.replace(/\`\`\`json/gi, '').replace(/\`\`\`/gi, '').trim();
            const parsed = JSON.parse(cleanJson);
            const validated = ResponseSchema.parse(parsed);
            qpep_roadmap = validated.qpep_roadmap;
        }

        // 3. PERSIST SNAPSHOT TO VAULT
        const { data, error } = await supabaseAdmin
            .from('tool_runs')
            .insert({
                user_id: user.id,
                tool_id: 'AUEB',
                run_data: run_data, // Raw inputs
                output_metrics: { ...output_metrics, qpep_roadmap }, // Calculated outputs + roadmap
                financial_waste: output_metrics.monthlyCost, // We use monthlyCost as the "waste" metric for the dashboard
                score: Math.floor(output_metrics.grossMargin) // Margin acts as the 0-100 score
            })
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({
            success: true,
            run: data,
            qpep_roadmap
        });

    } catch (error: any) {
        console.error('AUEB Save/Generate Error:', error);
        return NextResponse.json(
            { error: error?.message || 'Unknown server error during save' },
            { status: 500 }
        );
    }
}

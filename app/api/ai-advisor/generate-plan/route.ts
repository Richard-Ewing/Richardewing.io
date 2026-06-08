import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { supabaseAdmin } from '@/lib/supabase';
import { storeBusinessFact } from '@/lib/exogram';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { sessionId, businessProfile, painPoints, techStack, goals } = await req.json();

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
        }

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            generationConfig: {
                thinkingConfig: {
                    thinkingBudget: 0
                }
            }
        });

        const prompt = `You are Richard Ewing's AI Integration Advisor. Generate a comprehensive, actionable AI Integration Roadmap for this business.

BUSINESS PROFILE:
${JSON.stringify(businessProfile, null, 2)}

PAIN POINTS:
${JSON.stringify(painPoints, null, 2)}

CURRENT TECH STACK:
${JSON.stringify(techStack, null, 2)}

GOALS & BUDGET:
${JSON.stringify(goals, null, 2)}

Generate a detailed roadmap as a JSON object with this EXACT structure:
{
  "executive_summary": "2-3 sentence overview",
  "estimated_weekly_hours_saved": <number>,
  "estimated_monthly_roi": <number in dollars>,
  "phases": [
    {
      "name": "Quick Wins",
      "timeline": "Week 1-2",
      "actions": [
        {
          "title": "Action name",
          "description": "What to do and why",
          "tool": "Specific AI tool name",
          "tool_url": "https://...",
          "estimated_roi": "$X/month or X hours/week saved",
          "difficulty": "Easy",
          "monthly_cost": "$X/month",
          "time_to_implement": "X hours",
          "hours_saved_weekly": <number>
        }
      ]
    },
    {
      "name": "Foundation",
      "timeline": "Month 1",
      "actions": [...]
    },
    {
      "name": "Growth",
      "timeline": "Month 2-3",
      "actions": [...]
    },
    {
      "name": "Optimization",
      "timeline": "Month 4-6",
      "actions": [...]
    }
  ],
  "total_monthly_tool_cost": "$X/month",
  "key_risks": ["risk1", "risk2"],
  "next_steps": ["step1", "step2", "step3"]
}

IMPORTANT:
- Use REAL tool names and real URLs (ChatGPT, Claude, Zapier, HubSpot, Notion AI, etc.)
- Be specific to their industry and business size
- Estimate realistic ROI numbers
- Include at least 2-3 actions per phase
- Total should have 8-15 action items

Return ONLY the JSON object, no markdown code fences.`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Parse the roadmap JSON
        let roadmapData;
        try {
            // Try direct parse first
            roadmapData = JSON.parse(responseText);
        } catch {
            // Try extracting from code fence
            const jsonMatch = responseText.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
            if (jsonMatch) {
                roadmapData = JSON.parse(jsonMatch[1]);
            } else {
                throw new Error('Failed to parse roadmap response');
            }
        }

        // Save the completed plan to Supabase
        await supabaseAdmin
            .from('ai_advisor_sessions')
            .update({
                status: 'completed',
                generated_plan: roadmapData,
                updated_at: new Date().toISOString(),
            })
            .eq('id', sessionId);

        // Store key facts to Exogram Vault
        try {
            await storeBusinessFact(
                sessionId,
                'completed_roadmap',
                `AI Integration Roadmap completed for ${businessProfile?.name || 'business'} in ${businessProfile?.industry || 'unknown'} industry. Estimated ${roadmapData.estimated_weekly_hours_saved || 0} hours/week saved, ${roadmapData.phases?.length || 0} phases, ${roadmapData.phases?.reduce((acc: number, p: { actions: unknown[] }) => acc + (p.actions?.length || 0), 0) || 0} action items.`,
                0.95
            );
        } catch {
            // Non-critical
        }

        return NextResponse.json({
            success: true,
            roadmap: roadmapData,
        });
    } catch (error) {
        console.error('[AI Advisor] Generate plan error:', error);
        return NextResponse.json(
            { error: 'Failed to generate roadmap' },
            { status: 500 }
        );
    }
}

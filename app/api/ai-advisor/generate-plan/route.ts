import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { client } from '@/app/lib/gemini';
import { supabaseAdmin } from '@/lib/supabase';
import { storeBusinessFact } from '@/lib/exogram';

export const dynamic = 'force-dynamic';

const ADMIN_EMAILS = new Set(['richardewing1@gmail.com', 'richardewing@exogram.ai']);
const SESSION_ID_RE = /^[a-z0-9_-]{8,64}$/i;

export async function POST(req: Request) {
    const user = await currentUser();
    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const primaryEmail = user.emailAddresses?.[0]?.emailAddress?.toLowerCase() || '';
    const hasAdvisorAccess =
        user.publicMetadata?.has_ai_advisor_access === true ||
        user.publicMetadata?.has_yearly_subscription === true ||
        ADMIN_EMAILS.has(primaryEmail);

    if (!hasAdvisorAccess) {
        return NextResponse.json({ error: 'Active AI Integration Advisor subscription required' }, { status: 403 });
    }

    const userId = user.id;

    try {
        const { sessionId, businessProfile, painPoints, techStack, goals } = await req.json();

        if (!sessionId || typeof sessionId !== 'string' || !SESSION_ID_RE.test(sessionId)) {
            return NextResponse.json({ error: 'Valid Session ID required' }, { status: 400 });
        }

        const { data: existingSession } = await supabaseAdmin
            .from('ai_advisor_sessions')
            .select('user_id')
            .eq('id', sessionId)
            .maybeSingle();

        if (existingSession && existingSession.user_id !== userId) {
            return NextResponse.json({ error: 'Forbidden session reference' }, { status: 403 });
        }

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

        const interaction = await client.interactions.create({
            model: 'gemini-3.8-flash',
            input: prompt
        });
        const responseText = interaction.output_text || '';

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

        // Save the completed plan to Supabase (scoped to owning user)
        await supabaseAdmin
            .from('ai_advisor_sessions')
            .update({
                status: 'completed',
                generated_plan: roadmapData,
                updated_at: new Date().toISOString(),
            })
            .eq('id', sessionId)
            .eq('user_id', userId);

        // Store anonymized benchmark facts to Exogram Vault (scrubbed of client name PII)
        try {
            const anonymizedIndustry = String(businessProfile?.industry || 'general enterprise').slice(0, 80);
            await storeBusinessFact(
                sessionId,
                'completed_roadmap',
                `AI Integration Roadmap completed in ${anonymizedIndustry} industry. Estimated ${roadmapData.estimated_weekly_hours_saved || 0} hours/week saved, ${roadmapData.phases?.length || 0} phases, ${roadmapData.phases?.reduce((acc: number, p: { actions: unknown[] }) => acc + (p.actions?.length || 0), 0) || 0} action items.`,
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

import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { supabaseAdmin } from '@/lib/supabase';
import { storeBusinessFact, searchBusinessContext } from '@/lib/exogram';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// ---------------------------------------------------------------------------
// Phase Definitions
// ---------------------------------------------------------------------------

const PHASES = [
    {
        id: 1,
        name: 'Discovery',
        description: 'Understanding your business',
        systemContext: `You are Richard Ewing's AI Integration Advisor — an expert business consultant specializing in helping companies integrate AI into their operations. You are in Phase 1: Discovery.

Your goal is to deeply understand the user's business. Ask about:
- Business name, industry, and what they sell/do
- Company size (employees, revenue range)
- How long they've been in business
- Their primary market and customers
- Current business challenges

Be conversational, warm, and professional. Ask ONE question at a time. When you have enough info about their business (usually after 3-5 exchanges), tell them you're ready to move to the next phase and summarize what you've learned.

End your message with [PHASE_COMPLETE] when you have sufficient discovery information.
Do NOT include [PHASE_COMPLETE] until you've gathered: business type, industry, approximate size, and key challenges.`,
    },
    {
        id: 2,
        name: 'Pain Points',
        description: 'Identifying operational challenges',
        systemContext: `You are Richard Ewing's AI Integration Advisor in Phase 2: Pain Points Analysis.

You already know about their business from Phase 1. Now dig into:
- Where they waste the most time (repetitive tasks, manual processes)
- What frustrates their team the most
- Where they lose money or efficiency
- Customer-facing pain points (slow response times, errors, etc.)
- Any failed technology implementations

Be empathetic and specific. When they mention a pain point, dig deeper — ask "how many hours per week does that consume?" or "what does that cost you monthly?"

End your message with [PHASE_COMPLETE] when you have 3-5 clear pain points documented.`,
    },
    {
        id: 3,
        name: 'Tech Stack',
        description: 'Mapping current technology',
        systemContext: `You are Richard Ewing's AI Integration Advisor in Phase 3: Technology Audit.

Map their current technology landscape:
- What software/tools do they currently use? (CRM, accounting, project management, communication)
- Have they tried any AI tools? (ChatGPT, Copilot, Jasper, etc.) What was the experience?
- What's their team's technical comfort level? (1-10 scale)
- Do they have IT support or a technical person on staff?
- What's their data situation? (organized/messy, digital/paper, cloud/local)

End your message with [PHASE_COMPLETE] when you have a clear picture of their tech stack and AI readiness.`,
    },
    {
        id: 4,
        name: 'Goals & Budget',
        description: 'Defining objectives and resources',
        systemContext: `You are Richard Ewing's AI Integration Advisor in Phase 4: Goals & Budget.

Understand what they want to achieve and what resources they have:
- What's the #1 thing they want AI to help with?
- What would success look like in 90 days? In 6 months?
- Monthly budget they're willing to invest in AI tools ($0-500, $500-2000, $2000-5000, $5000+)
- Time they can dedicate to learning/implementing (hours per week)
- Any concerns or fears about AI (job displacement, data privacy, complexity)
- Timeline urgency (ASAP, within a quarter, exploratory)

End your message with [PHASE_COMPLETE] when you have clear goals, budget range, and timeline.`,
    },
    {
        id: 5,
        name: 'Roadmap Generation',
        description: 'Building your AI integration plan',
        systemContext: `You are Richard Ewing's AI Integration Advisor in Phase 5: Roadmap Generation.

You now have ALL the information. Generate a comprehensive AI Integration Roadmap. Your response should be a warm, encouraging summary followed by the structured roadmap.

Start with: "Based on everything you've shared, here's your personalized AI Integration Roadmap..."

Then provide a structured plan with:
1. **Executive Summary** — 2-3 sentence overview of the opportunity
2. **Quick Wins (Week 1-2)** — 2-3 actions they can take immediately with minimal effort
3. **Foundation Phase (Month 1)** — Core tools to implement, training needed
4. **Growth Phase (Month 2-3)** — Advanced integrations, workflow automation
5. **Optimization Phase (Month 4-6)** — Scaling what works, measuring ROI

For EACH action item include:
- Specific AI tool recommendation (real tool names — ChatGPT, Claude, Zapier AI, HubSpot AI, etc.)
- Estimated ROI or time saved
- Implementation difficulty (Easy/Medium/Hard)
- Estimated monthly cost of the tool
- Time to implement

End with estimated total ROI (hours saved per week + dollar value).

Format the roadmap as structured JSON wrapped in \`\`\`json ... \`\`\` so it can be parsed.
The JSON should follow this structure:
{
  "executive_summary": "string",
  "estimated_weekly_hours_saved": number,
  "estimated_monthly_roi": number,
  "phases": [
    {
      "name": "string",
      "timeline": "string",
      "actions": [
        {
          "title": "string",
          "description": "string",
          "tool": "string",
          "tool_url": "string",
          "estimated_roi": "string",
          "difficulty": "Easy|Medium|Hard",
          "monthly_cost": "string",
          "time_to_implement": "string",
          "hours_saved_weekly": number
        }
      ]
    }
  ],
  "total_monthly_tool_cost": "string",
  "key_risks": ["string"],
  "next_steps": ["string"]
}

After the JSON block, add a brief encouraging closing message.
Include [ROADMAP_COMPLETE] at the very end.`,
    },
];

// ---------------------------------------------------------------------------
// POST Handler
// ---------------------------------------------------------------------------

export async function POST(req: Request) {
    const { userId } = await auth();
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const {
            sessionId,
            message,
            currentPhase = 1,
            conversationHistory = [],
            businessProfile = {},
        } = body;

        // Build the system prompt for the current phase
        const phase = PHASES.find((p) => p.id === currentPhase) || PHASES[0];

        // Search Exogram vault for relevant business context (non-blocking)
        let vaultContext = '';
        try {
            if (message && currentPhase <= 4) {
                const searchResults = await searchBusinessContext(
                    `${businessProfile.industry || ''} ${message}`.trim(),
                    3
                );
                if (searchResults.length > 0) {
                    vaultContext = `\n\nRelevant industry context from past consultations:\n${searchResults.map((r) => `- ${r.claim} (confidence: ${r.confidence})`).join('\n')}`;
                }
            }
        } catch {
            // Non-critical — continue without vault context
        }

        // Build conversation for Gemini
        const systemPrompt = `${phase.systemContext}

Current business profile gathered so far:
${JSON.stringify(businessProfile, null, 2)}
${vaultContext}

Rules:
- Be conversational, warm, and professional
- Use the user's business name when you know it
- Reference specific details they've shared to show you're listening
- Keep responses concise but thorough (3-6 sentences per response)
- Do not repeat questions they've already answered
- If they give short answers, gently probe deeper`;

        const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            generationConfig: {
                thinkingConfig: {
                    thinkingBudget: 0
                }
            } as any
        });

        // Build chat history for Gemini
        const chatHistory = conversationHistory.map(
            (msg: { role: string; content: string }) => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }],
            })
        );

        const chat = model.startChat({
            history: chatHistory,
            systemInstruction: systemPrompt,
        });

        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        // Check for phase completion
        const phaseComplete = responseText.includes('[PHASE_COMPLETE]');
        const roadmapComplete = responseText.includes('[ROADMAP_COMPLETE]');
        const cleanResponse = responseText
            .replace('[PHASE_COMPLETE]', '')
            .replace('[ROADMAP_COMPLETE]', '')
            .trim();

        // Extract roadmap JSON if present
        let roadmapData = null;
        if (roadmapComplete || currentPhase === 5) {
            const jsonMatch = cleanResponse.match(/```json\s*([\s\S]*?)\s*```/);
            if (jsonMatch) {
                try {
                    roadmapData = JSON.parse(jsonMatch[1]);
                } catch {
                    console.error('[AI Advisor] Failed to parse roadmap JSON');
                }
            }
        }

        // Store key facts to Exogram Vault (async, non-blocking)
        if (phaseComplete && sessionId) {
            try {
                const summary = `Phase ${currentPhase} (${phase.name}) completed for ${businessProfile.name || 'unknown business'} in ${businessProfile.industry || 'unknown industry'}. Key info: ${message.slice(0, 200)}`;
                await storeBusinessFact(
                    sessionId,
                    `phase_${currentPhase}_summary`,
                    summary,
                    0.9
                );
            } catch {
                // Non-critical
            }
        }

        // Save to Supabase
        if (sessionId) {
            const updatedHistory = [
                ...conversationHistory,
                { role: 'user', content: message },
                { role: 'assistant', content: cleanResponse },
            ];

            const nextPhase = phaseComplete ? Math.min(currentPhase + 1, 5) : currentPhase;
            const status = roadmapComplete ? 'completed' : 'in_progress';

            await supabaseAdmin.from('ai_advisor_sessions').upsert(
                {
                    id: sessionId,
                    user_id: userId,
                    status,
                    current_phase: nextPhase,
                    business_profile: businessProfile,
                    conversation_history: updatedHistory,
                    generated_plan: roadmapData,
                    updated_at: new Date().toISOString(),
                },
                { onConflict: 'id' }
            );
        }

        return NextResponse.json({
            response: cleanResponse,
            phaseComplete,
            roadmapComplete,
            roadmapData,
            nextPhase: phaseComplete
                ? Math.min(currentPhase + 1, 5)
                : currentPhase,
        });
    } catch (error) {
        console.error('[AI Advisor] Chat error:', error);
        return NextResponse.json(
            { error: 'Failed to process message' },
            { status: 500 }
        );
    }
}

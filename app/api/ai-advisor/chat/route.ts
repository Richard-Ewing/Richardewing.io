import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { client } from '@/app/lib/gemini';
import { supabaseAdmin } from '@/lib/supabase';
import { storeBusinessFact, searchBusinessContext } from '@/lib/exogram';

export const dynamic = 'force-dynamic';

const ADMIN_EMAILS = new Set(['richardewing1@gmail.com', 'richardewing@exogram.ai']);
const SESSION_ID_RE = /^[a-z0-9_-]{8,64}$/i;
const MAX_MESSAGE_CHARS = 4000;
const MAX_HISTORY_TURNS = 30;

// ---------------------------------------------------------------------------
// Phase Definitions
// ---------------------------------------------------------------------------

const PHASES = [
    {
        id: 1,
        name: 'Discovery',
        description: 'Understanding your business',
        systemContext: `You are Richard Ewing's AI Integration Advisor  -  an expert business consultant specializing in helping companies integrate AI into their operations. You are in Phase 1: Discovery.

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

Be empathetic and specific. When they mention a pain point, dig deeper  -  ask "how many hours per week does that consume?" or "what does that cost you monthly?"

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
1. **Executive Summary**  -  2-3 sentence overview of the opportunity
2. **Quick Wins (Week 1-2)**  -  2-3 actions they can take immediately with minimal effort
3. **Foundation Phase (Month 1)**  -  Core tools to implement, training needed
4. **Growth Phase (Month 2-3)**  -  Advanced integrations, workflow automation
5. **Optimization Phase (Month 4-6)**  -  Scaling what works, measuring ROI

For EACH action item include:
- Specific AI tool recommendation (real tool names  -  ChatGPT, Claude, Zapier AI, HubSpot AI, etc.)
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
        const rawBody = await req.text();
        if (rawBody.length > 65536) {
            return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
        }

        const body = JSON.parse(rawBody);
        const {
            sessionId,
            message: rawMessage,
            currentPhase = 1,
            conversationHistory: rawHistory = [],
            businessProfile = {},
        } = body;

        const message = String(rawMessage || '').trim().slice(0, MAX_MESSAGE_CHARS);
        if (!message) {
            return NextResponse.json({ error: 'Message required' }, { status: 400 });
        }

        const validSessionId =
            typeof sessionId === 'string' && SESSION_ID_RE.test(sessionId)
                ? sessionId
                : null;

        if (validSessionId) {
            const { data: existingSession } = await supabaseAdmin
                .from('ai_advisor_sessions')
                .select('user_id')
                .eq('id', validSessionId)
                .maybeSingle();

            if (existingSession && existingSession.user_id !== userId) {
                return NextResponse.json({ error: 'Forbidden session reference' }, { status: 403 });
            }
        }

        const conversationHistory = Array.isArray(rawHistory)
            ? rawHistory.slice(-MAX_HISTORY_TURNS).map((m: { role?: unknown; content?: unknown }) => ({
                  role: m?.role === 'assistant' ? 'assistant' : 'user',
                  content: String(m?.content || '').slice(0, MAX_MESSAGE_CHARS),
              }))
            : [];

        // Build the system prompt for the current phase
        const safePhaseId = Math.min(Math.max(Number(currentPhase) || 1, 1), 5);
        const phase = PHASES.find((p) => p.id === safePhaseId) || PHASES[0];

        // Search Exogram vault for relevant business context (non-blocking)
        let vaultContext = '';
        try {
            if (message && safePhaseId <= 4) {
                const searchResults = await searchBusinessContext(
                    `${String(businessProfile?.industry || '').slice(0, 80)} ${message.slice(0, 200)}`.trim(),
                    3
                );
                if (searchResults.length > 0) {
                    vaultContext = `\n\nRelevant industry context from past consultations:\n${searchResults.map((r) => `- ${r.claim} (confidence: ${r.confidence})`).join('\n')}`;
                }
            }
        } catch {
            // Non-critical  -  continue without vault context
        }

        // Build conversation for Gemini
        const systemPrompt = `${phase.systemContext}

Current business profile gathered so far:
${JSON.stringify(businessProfile, null, 2).slice(0, 4000)}
${vaultContext}

Rules:
- Be conversational, warm, and professional
- Use the user's business name when you know it
- Reference specific details they've shared to show you're listening
- Keep responses concise but thorough (3-6 sentences per response)
- Do not repeat questions they've already answered
- If they give short answers, gently probe deeper`;

        const conversationText = conversationHistory.map(
            (msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`
        ).join('\n');

        const input = conversationText ? `${conversationText}\nuser: ${message}` : message;

        const interaction = await client.interactions.create({
            model: 'gemini-3.8-flash',
            input,
            system_instruction: systemPrompt
        });

        const responseText = interaction.output_text || '';

        // Check for phase completion
        const phaseComplete = responseText.includes('[PHASE_COMPLETE]');
        const roadmapComplete = responseText.includes('[ROADMAP_COMPLETE]');
        const cleanResponse = responseText
            .replace('[PHASE_COMPLETE]', '')
            .replace('[ROADMAP_COMPLETE]', '')
            .trim();

        // Extract roadmap JSON if present
        let roadmapData = null;
        if (roadmapComplete || safePhaseId === 5) {
            const jsonMatch = cleanResponse.match(/```json\s*([\s\S]*?)\s*```/);
            if (jsonMatch) {
                try {
                    roadmapData = JSON.parse(jsonMatch[1]);
                } catch {
                    console.error('[AI Advisor] Failed to parse roadmap JSON');
                }
            }
        }

        // Store anonymized industry benchmark facts to Exogram Vault (scrubbed of client names and raw chat PII)
        if (phaseComplete && validSessionId) {
            try {
                const anonymizedIndustry = String(businessProfile?.industry || 'general enterprise').slice(0, 80);
                const anonymizedSize = String(businessProfile?.size || 'unspecified size').slice(0, 40);
                const summary = `Phase ${safePhaseId} (${phase.name}) completed for an organization in ${anonymizedIndustry} (${anonymizedSize}).`;
                await storeBusinessFact(
                    validSessionId,
                    `phase_${safePhaseId}_summary`,
                    summary,
                    0.9
                );
            } catch {
                // Non-critical
            }
        }

        // Save to Supabase
        if (validSessionId) {
            const updatedHistory = [
                ...conversationHistory,
                { role: 'user', content: message },
                { role: 'assistant', content: cleanResponse },
            ];

            const nextPhase = phaseComplete ? Math.min(safePhaseId + 1, 5) : safePhaseId;
            const status = roadmapComplete ? 'completed' : 'in_progress';

            await supabaseAdmin.from('ai_advisor_sessions').upsert(
                {
                    id: validSessionId,
                    user_id: userId,
                    status,
                    current_phase: nextPhase,
                    business_profile: businessProfile && typeof businessProfile === 'object' ? businessProfile : {},
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
                ? Math.min(safePhaseId + 1, 5)
                : safePhaseId,
        });
    } catch (error) {
        console.error('[AI Advisor] Chat error:', error);
        return NextResponse.json(
            { error: 'Failed to process message' },
            { status: 500 }
        );
    }
}

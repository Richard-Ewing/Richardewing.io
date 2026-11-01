import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import { client } from '@/app/lib/gemini';
import { supabaseAdmin } from '@/lib/supabase';
import { storeBusinessFact, searchBusinessContext } from '@/lib/exogram';
import {
    ADVISOR_WIDGET_CATALOG,
    compileCatalogPrompt,
    createIncrementalUiParser,
    hydrateLegacyRoadmapJson,
    sanitizeLegacyRoadmapData,
    type IncrementalParseSnapshot,
    type LegacyRoadmapData,
} from '@/lib/sovereign-ui-stream';

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
When the user quantifies a clear operational bottleneck (role, weekly hours, and estimated monthly dollar burn), include a compact \`\`\`ui ... \`\`\` block emitting a PainCostCard(role, weeklyHours, monthlyBurnUsd, fixSummary) using specific job titles (such as CEO, CFO, COO, Customer Support Manager, Engineering Manager, or VP of Operations).

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

When the user shares concrete tools in a category (CRM, ERP, Customer Support, Finance, or Engineering), include a compact \`\`\`ui ... \`\`\` block emitting a StackReadinessCard(category, currentTools, readinessScore, integrationNote).

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

When clear 90-day targets and monthly tool budget are confirmed, you may include a compact \`\`\`ui ... \`\`\` block with MetricStrip([Metric(label, value, delta)]) summarizing target hours recovered, monthly budget ceiling, and target payback window.

End your message with [PHASE_COMPLETE] when you have clear goals, budget range, and timeline.`,
    },
    {
        id: 5,
        name: 'Roadmap Generation',
        description: 'Building your AI integration plan',
        systemContext: `You are Richard Ewing's AI Integration Advisor in Phase 5: Roadmap Generation.

You now have ALL the information. Generate a comprehensive AI Integration Roadmap. Your response should open with a warm, direct executive summary (2-3 sentences), followed immediately by a structured \`\`\`ui ... \`\`\` widget block and a brief closing note.

Start with: "Based on everything you've shared, here's your personalized AI Integration Roadmap..."

Emit the structured plan inside a single \`\`\`ui ... \`\`\` block using positional Sovereign UI expressions:
1. Four RoadmapPhaseCard assignments covering Quick Wins (Week 1-2), Foundation Phase (Month 1), Growth Phase (Month 2-3), and Optimization Phase (Month 4-6), where each action uses ActionRow(title, description, tool, toolUrl, estimatedRoi, difficulty, monthlyCost, timeToImplement, hoursSavedWeekly) with real tool names and valid https:// URLs.
2. One MetricStrip summarizing Weekly Hours Saved, Monthly Dollar Impact, and Total Monthly Tool Cost.
3. One ExecutiveActionGate("Validate architecture & vendor contracts before rollout", "/schedule?source=advisor-roadmap", projectedImpact, "Book Executive Review").
4. One root = AdvisoryBoard([quickWins, foundation, growth, optimization, kpis, gate], executiveSummary, totalMonthlyToolCost, keyRisks, nextSteps, estimatedWeeklyHoursSaved, estimatedMonthlyRoi).

After closing the \`\`\`ui\`\`\` fence, add a brief encouraging closing note and include [ROADMAP_COMPLETE] at the very end.`,
    },
];

const CATALOG_SYSTEM_APPENDIX = compileCatalogPrompt(ADVISOR_WIDGET_CATALOG);

function stripLegacyJsonFence(text: string): string {
    return text
        .replace(/```json[\s\S]*?```/gi, '')
        .replace(/\[PHASE_COMPLETE\]/g, '')
        .replace(/\[ROADMAP_COMPLETE\]/g, '')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function dedupePriorHistory(
    history: Array<{ role: string; content: string }>,
    currentUserMessage: string
): Array<{ role: string; content: string }> {
    if (history.length === 0) return history;
    const last = history[history.length - 1];
    if (last.role === 'user' && last.content.trim() === currentUserMessage.trim()) {
        return history.slice(0, -1);
    }
    return history;
}

function extractRoadmapData(
    finalSnap: IncrementalParseSnapshot,
    rawResponseText: string,
    safePhaseId: number,
    roadmapComplete: boolean
): LegacyRoadmapData | null {
    const hydrated = hydrateLegacyRoadmapJson(finalSnap);
    if (hydrated) {
        return hydrated;
    }

    if (roadmapComplete || safePhaseId === 5) {
        const jsonMatch = rawResponseText.match(/```json\s*([\s\S]*?)\s*```/i);
        if (jsonMatch) {
            try {
                const parsed = JSON.parse(jsonMatch[1]);
                const sanitized = sanitizeLegacyRoadmapData(parsed);
                if (sanitized) {
                    return sanitized;
                }
            } catch {
                console.error('[AI Advisor] Failed to parse fallback roadmap JSON');
            }
        }
    }

    return null;
}

interface PersistAdvisorTurnParams {
    validSessionId: string | null;
    userId: string;
    safePhaseId: number;
    phaseName: string;
    phaseComplete: boolean;
    roadmapComplete: boolean;
    businessProfile: Record<string, unknown>;
    conversationHistory: Array<{ role: string; content: string }>;
    userMessage: string;
    cleanResponse: string;
    roadmapData: LegacyRoadmapData | null;
}

async function persistAdvisorTurn(params: PersistAdvisorTurnParams): Promise<void> {
    const {
        validSessionId,
        userId,
        safePhaseId,
        phaseName,
        phaseComplete,
        roadmapComplete,
        businessProfile,
        conversationHistory,
        userMessage,
        cleanResponse,
        roadmapData,
    } = params;

    if (phaseComplete && validSessionId) {
        try {
            const anonymizedIndustry = String(businessProfile?.industry || 'general enterprise').slice(0, 80);
            const anonymizedSize = String(businessProfile?.size || 'unspecified size').slice(0, 40);
            const summary = `Phase ${safePhaseId} (${phaseName}) completed for an organization in ${anonymizedIndustry} (${anonymizedSize}).`;
            await storeBusinessFact(validSessionId, `phase_${safePhaseId}_summary`, summary, 0.9);
        } catch {
            // Non-critical telemetry store
        }
    }

    if (validSessionId) {
        try {
            const updatedHistory = [
                ...conversationHistory,
                { role: 'user', content: userMessage },
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
                    business_profile:
                        businessProfile && typeof businessProfile === 'object' ? businessProfile : {},
                    conversation_history: updatedHistory,
                    generated_plan: roadmapData,
                    updated_at: new Date().toISOString(),
                },
                { onConflict: 'id' }
            );
        } catch (err) {
            console.error('[AI Advisor] Session persistence error:', err);
        }
    }
}

async function schedulePostResponsePersistence(task: Promise<void>): Promise<void> {
    let scheduledOnEdge = false;
    try {
        const cf = getCloudflareContext();
        if (cf?.ctx && typeof cf.ctx.waitUntil === 'function') {
            cf.ctx.waitUntil(task);
            scheduledOnEdge = true;
        }
    } catch {
        // Running outside Cloudflare Workers isolate (e.g. local Node runtime)
    }

    if (!scheduledOnEdge) {
        await task;
    }
}

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
        return NextResponse.json(
            { error: 'Active AI Integration Advisor subscription required' },
            { status: 403 }
        );
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
            stream: rawStream = false,
        } = body;

        const wantStream = rawStream === true;
        const message = String(rawMessage || '').trim().slice(0, MAX_MESSAGE_CHARS);
        if (!message) {
            return NextResponse.json({ error: 'Message required' }, { status: 400 });
        }

        const validSessionId =
            typeof sessionId === 'string' && SESSION_ID_RE.test(sessionId) ? sessionId : null;

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

        const rawNormalizedHistory = Array.isArray(rawHistory)
            ? rawHistory
                  .slice(-MAX_HISTORY_TURNS)
                  .map((m: { role?: unknown; content?: unknown }) => ({
                      role: m?.role === 'assistant' ? 'assistant' : 'user',
                      content: String(m?.content || '').slice(0, MAX_MESSAGE_CHARS),
                  }))
            : [];
        const priorHistory = dedupePriorHistory(rawNormalizedHistory, message);

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

        const systemPrompt = `${phase.systemContext}

Current business profile gathered so far:
${JSON.stringify(businessProfile, null, 2).slice(0, 4000)}
${vaultContext}

${CATALOG_SYSTEM_APPENDIX}

Rules:
- Be conversational, warm, and professional
- Use the user's business name when you know it
- Reference specific details they've shared to show you're listening
- Keep prose concise and concrete (3-6 sentences outside any \`\`\`ui\`\`\` block)
- Never use em-dashes in prose or widget strings; use colons, commas, or periods
- Do not repeat questions they've already answered
- If they give short answers, gently probe deeper`;

        const conversationText = priorHistory
            .map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`)
            .join('\n');

        const input = conversationText ? `${conversationText}\nuser: ${message}` : message;

        if (wantStream) {
            const interactionStream = await client.interactions.create({
                model: 'gemini-3.8-flash',
                input,
                system_instruction: systemPrompt,
                stream: true,
            });

            const encoder = new TextEncoder();
            let streamCancelled = false;

            const readable = new ReadableStream<Uint8Array>({
                cancel() {
                    streamCancelled = true;
                },
                async start(controller) {
                    const parser = createIncrementalUiParser(ADVISOR_WIDGET_CATALOG);
                    let fullResponseText = '';
                    let lastWidgetHash = '[]';
                    let controllerClosed = false;

                    const isDisconnected = () =>
                        streamCancelled || controllerClosed || Boolean(req.signal?.aborted);

                    const safeEnqueue = (frame: string): boolean => {
                        if (isDisconnected()) return false;
                        try {
                            controller.enqueue(encoder.encode(frame));
                            return true;
                        } catch {
                            streamCancelled = true;
                            controllerClosed = true;
                            return false;
                        }
                    };

                    const safeClose = () => {
                        if (controllerClosed || streamCancelled) return;
                        controllerClosed = true;
                        try {
                            controller.close();
                        } catch {
                            // Stream already closed by client disconnect
                        }
                    };

                    try {
                        for await (const event of interactionStream) {
                            if (isDisconnected()) break;

                            if (
                                event.event_type === 'step.delta' &&
                                event.delta &&
                                'text' in event.delta &&
                                typeof event.delta.text === 'string' &&
                                event.delta.text.length > 0
                            ) {
                                const chunk = event.delta.text;
                                fullResponseText += chunk;
                                const snap = parser.feed(chunk);

                                if (
                                    !safeEnqueue(
                                        `data: ${JSON.stringify({
                                            type: 'delta',
                                            text: chunk,
                                            proseText: stripLegacyJsonFence(snap.proseText),
                                        })}\n\n`
                                    )
                                ) {
                                    break;
                                }

                                const currentWidgetHash = JSON.stringify(snap.widgets);
                                if (currentWidgetHash !== lastWidgetHash) {
                                    lastWidgetHash = currentWidgetHash;
                                    if (
                                        !safeEnqueue(
                                            `data: ${JSON.stringify({
                                                type: 'ui',
                                                widgets: snap.widgets,
                                                pendingRefs: snap.pendingRefs,
                                            })}\n\n`
                                        )
                                    ) {
                                        break;
                                    }
                                }
                            }
                        }

                        if (isDisconnected()) {
                            return;
                        }

                        const finalSnap = parser.finalize();
                        const phaseComplete =
                            finalSnap.phaseComplete || fullResponseText.includes('[PHASE_COMPLETE]');
                        const roadmapData = extractRoadmapData(
                            finalSnap,
                            fullResponseText,
                            safePhaseId,
                            finalSnap.roadmapComplete || fullResponseText.includes('[ROADMAP_COMPLETE]')
                        );
                        const roadmapComplete =
                            finalSnap.roadmapComplete ||
                            fullResponseText.includes('[ROADMAP_COMPLETE]') ||
                            Boolean(roadmapData);
                        const cleanResponse =
                            stripLegacyJsonFence(finalSnap.proseText) ||
                            stripLegacyJsonFence(fullResponseText);
                        const nextPhase = phaseComplete ? Math.min(safePhaseId + 1, 5) : safePhaseId;

                        const finalWidgetHash = JSON.stringify(finalSnap.widgets);
                        if (finalWidgetHash !== lastWidgetHash) {
                            safeEnqueue(
                                `data: ${JSON.stringify({
                                    type: 'ui',
                                    widgets: finalSnap.widgets,
                                    pendingRefs: finalSnap.pendingRefs,
                                })}\n\n`
                            );
                        }

                        await schedulePostResponsePersistence(
                            persistAdvisorTurn({
                                validSessionId,
                                userId,
                                safePhaseId,
                                phaseName: phase.name,
                                phaseComplete,
                                roadmapComplete,
                                businessProfile:
                                    businessProfile && typeof businessProfile === 'object'
                                        ? (businessProfile as Record<string, unknown>)
                                        : {},
                                conversationHistory: priorHistory,
                                userMessage: message,
                                cleanResponse,
                                roadmapData,
                            })
                        );

                        safeEnqueue(
                            `data: ${JSON.stringify({
                                type: 'done',
                                response: cleanResponse,
                                widgets: finalSnap.widgets,
                                phaseComplete,
                                roadmapComplete,
                                roadmapData,
                                nextPhase,
                            })}\n\n`
                        );
                    } catch (streamError) {
                        if (!isDisconnected()) {
                            console.error('[AI Advisor] Stream execution error:', streamError);
                            safeEnqueue(
                                `data: ${JSON.stringify({
                                    type: 'error',
                                    error: 'Upstream advisor stream interrupted. Please retry.',
                                })}\n\n`
                            );
                        }
                    } finally {
                        safeClose();
                    }
                },
            });

            return new Response(readable, {
                status: 200,
                headers: {
                    'Content-Type': 'text/event-stream; charset=utf-8',
                    'Cache-Control': 'private, no-cache, no-store, no-transform',
                    Connection: 'keep-alive',
                    'X-Accel-Buffering': 'no',
                },
            });
        }

        // Standard JSON response path (backward-compatible when stream is omitted/false)
        const interaction = await client.interactions.create({
            model: 'gemini-3.8-flash',
            input,
            system_instruction: systemPrompt,
        });

        const responseText = interaction.output_text || '';
        const parser = createIncrementalUiParser(ADVISOR_WIDGET_CATALOG);
        parser.feed(responseText);
        const finalSnap = parser.finalize();

        const phaseComplete =
            finalSnap.phaseComplete || responseText.includes('[PHASE_COMPLETE]');
        const roadmapData = extractRoadmapData(
            finalSnap,
            responseText,
            safePhaseId,
            finalSnap.roadmapComplete || responseText.includes('[ROADMAP_COMPLETE]')
        );
        const roadmapComplete =
            finalSnap.roadmapComplete ||
            responseText.includes('[ROADMAP_COMPLETE]') ||
            Boolean(roadmapData);
        const cleanResponse =
            stripLegacyJsonFence(finalSnap.proseText) || stripLegacyJsonFence(responseText);
        const nextPhase = phaseComplete ? Math.min(safePhaseId + 1, 5) : safePhaseId;

        await persistAdvisorTurn({
            validSessionId,
            userId,
            safePhaseId,
            phaseName: phase.name,
            phaseComplete,
            roadmapComplete,
            businessProfile:
                businessProfile && typeof businessProfile === 'object'
                    ? (businessProfile as Record<string, unknown>)
                    : {},
            conversationHistory: priorHistory,
            userMessage: message,
            cleanResponse,
            roadmapData,
        });

        return NextResponse.json({
            response: cleanResponse,
            widgets: finalSnap.widgets,
            phaseComplete,
            roadmapComplete,
            roadmapData,
            nextPhase,
        });
    } catch (error) {
        console.error('[AI Advisor] Chat error:', error);
        return NextResponse.json(
            { error: 'Failed to process message' },
            { status: 500 }
        );
    }
}

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { model } from '@/app/lib/gemini';
import { logAgentRun, createAgentTimer } from '@/lib/agents/logger';
import { glossaryTerms } from '@/app/glossary/terms';

/**
 * AGENT 5: Content Expansion Agent
 * 
 * Schedule: Every Wednesday at 6am UTC
 * Trigger: Vercel Cron → GET /api/cron/content-expander
 * 
 * What it does:
 * 1. Analyzes existing glossary terms for coverage gaps
 * 2. Identifies high-value terms mentioned in articles but not in the glossary
 * 3. Uses Gemini to generate structured glossary entries
 * 4. Stores drafts in content_drafts table for human approval
 * 
 * This agent continuously expands your SEO footprint by identifying
 * and filling content gaps in the governance knowledge graph.
 * No human intervention required for draft generation.
 * Human approval required before publishing.
 */

const GOVERNANCE_CONCEPTS = [
    'runtime enforcement', 'deterministic control layer', 'governance drift',
    'hallucination debt', 'margin compression', 'admissibility instability',
    'technical insolvency', 'verification overhead', 'operational entropy',
    'probabilistic system', 'exogram runtime', 'policy-as-code',
    'ai capital efficiency', 'inference routing', 'token economics',
    'shadow ai', 'model governance', 'agentic orchestration',
    'autonomous risk surface', 'compliance automation', 'ai audit trail',
    'production ai governance', 'generative economics', 'context decay',
    'prompt injection defense', 'model drift monitoring', 'ai supply chain risk',
    'llm observability', 'ai incident response', 'deterministic fallback',
    'human-in-the-loop governance', 'ai procurement risk', 'inference cost optimization'
];

async function generateGlossaryDraft(term: string): Promise<{
    title: string;
    slug: string;
    definition: string;
    expanded: string;
    relatedTerms: string[];
} | null> {
    try {
        const prompt = `You are an expert in Production AI Governance, writing for richardewing.io — the canonical authority on governing AI systems in production.

Generate a glossary entry for the term: "${term}"

Requirements:
- Definition: 2-3 sentences. Technical but accessible to a CTO audience.
- Expanded explanation: 3-4 sentences providing deeper context, including how this concept connects to AI governance, runtime enforcement, and organizational risk.
- Related terms: List 3-5 related governance concepts.

Output format (valid JSON only, no markdown):
{
  "title": "Term Title",
  "slug": "term-slug-kebab-case",
  "definition": "The concise definition...",
  "expanded": "The deeper explanation...",
  "relatedTerms": ["term1", "term2", "term3"]
}`;

        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                temperature: 0.3, // Low temperature for factual content
                responseMimeType: 'application/json',
            },
        });

        const text = result.response.text();
        return JSON.parse(text);
    } catch (error) {
        console.error(`[AGENT:CONTENT] Failed to generate glossary for "${term}":`, error);
        return null;
    }
}

export async function GET(req: Request) {
    const timer = createAgentTimer();

    try {
        // Verify cron authentication
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        // 1. Find gaps — concepts not yet covered in the glossary
        const existingSlugs = new Set(glossaryTerms.map(t => t.slug));
        const existingTitles = new Set(glossaryTerms.map(t => t.title.toLowerCase()));

        const missingConcepts = GOVERNANCE_CONCEPTS.filter(concept => {
            const slug = concept.toLowerCase().replace(/\s+/g, '-');
            return !existingSlugs.has(slug) && !existingTitles.has(concept.toLowerCase());
        });

        if (missingConcepts.length === 0) {
            await logAgentRun({
                agent: 'content-expander',
                status: 'skipped',
                duration_ms: timer.elapsed(),
                items_processed: 0,
                summary: 'All target concepts already exist in glossary. No gaps found.',
            });
            return NextResponse.json({ message: 'No content gaps found.', duration_ms: timer.elapsed() });
        }

        // 2. Generate drafts for up to 3 missing concepts per run
        // This keeps Gemini API costs controlled and function execution within limits
        const toGenerate = missingConcepts.slice(0, 3);
        const drafts: Array<{ term: string; draft: any; status: string }> = [];

        for (const concept of toGenerate) {
            const draft = await generateGlossaryDraft(concept);
            if (draft) {
                // 3. Store in content_drafts table
                const { error } = await supabaseAdmin
                    .from('content_drafts')
                    .upsert({
                        content_type: 'glossary',
                        slug: draft.slug,
                        title: draft.title,
                        content: {
                            definition: draft.definition,
                            expanded: draft.expanded,
                            relatedTerms: draft.relatedTerms
                        },
                        status: 'draft',
                        generated_by: 'content-expander-agent',
                        generated_at: new Date().toISOString()
                    }, { onConflict: 'content_type,slug' });

                drafts.push({
                    term: concept,
                    draft,
                    status: error ? `upsert-warning: ${error.message}` : 'stored'
                });
            } else {
                drafts.push({ term: concept, draft: null, status: 'generation-failed' });
            }
        }

        const successCount = drafts.filter(d => d.status === 'stored').length;

        await logAgentRun({
            agent: 'content-expander',
            status: successCount > 0 ? 'completed' : 'failed',
            duration_ms: timer.elapsed(),
            items_processed: successCount,
            summary: `Generated ${successCount}/${toGenerate.length} glossary drafts. ${missingConcepts.length - toGenerate.length} concepts remaining.`,
            metadata: {
                totalGaps: missingConcepts.length,
                generated: drafts.map(d => ({ term: d.term, status: d.status })),
                remaining: missingConcepts.slice(toGenerate.length)
            }
        });

        return NextResponse.json({
            success: true,
            gaps_found: missingConcepts.length,
            drafts_generated: successCount,
            remaining_gaps: missingConcepts.length - toGenerate.length,
            drafts: drafts.map(d => ({ term: d.term, slug: d.draft?.slug, status: d.status })),
            duration_ms: timer.elapsed()
        });

    } catch (error) {
        await logAgentRun({
            agent: 'content-expander',
            status: 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 0,
            summary: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            metadata: { error: String(error) }
        });
        console.error('[AGENT:CONTENT-EXPANDER] Fatal error:', error);
        return NextResponse.json({ error: 'Agent execution failed.' }, { status: 500 });
    }
}

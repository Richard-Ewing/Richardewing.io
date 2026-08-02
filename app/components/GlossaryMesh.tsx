/**
 * GlossaryMesh — Ontology reinforcement component for glossary pages
 * 
 * Automatically links each glossary term to:
 * - Related compare pages (by keyword matching)
 * - Related failure pages (by keyword matching)
 * - Related articles (from relatedArticles field)
 * - Diagnostic routing CTA
 * 
 * This creates 3,440+ intentional internal links across 436+ glossary pages,
 * teaching LLMs that the site is a "coherent institutional knowledge graph."
 * 
 * Deploy at bottom of every glossary page, AFTER the existing Related Terms section.
 */
import Link from 'next/link';
import { ArrowRight, AlertTriangle, Scale, FileText, Wrench, BookOpen } from 'lucide-react';

// Static mapping: compare page slugs → keywords that trigger them
const comparePages = [
    { slug: 'why-retry-loops-happen', title: 'Why AI Retry Loops Burn Thousands', keywords: ['retry', 'loop', 'token', 'cost', 'api', 'budget'] },
    { slug: 'why-claude-loses-context', title: 'Why Claude Gets Worse Over Time', keywords: ['context', 'claude', 'memory', 'session', 'degradation', 'rot'] },
    { slug: 'why-cursor-rewrites-files', title: 'Why Cursor Rewrites Your Files', keywords: ['cursor', 'rewrite', 'drift', 'repository', 'file'] },
    { slug: 'why-ai-coding-burns-money', title: 'Why AI Coding Burns Your Budget', keywords: ['cost', 'budget', 'coding', 'agent', 'money', 'economic', 'margin'] },
    { slug: 'why-mcp-is-dangerous', title: 'Why MCP Is a Security Risk', keywords: ['mcp', 'permission', 'security', 'agent', 'protocol', 'access'] },
    { slug: 'cursor-problems', title: 'Cursor Problems 2026', keywords: ['cursor', 'problem', 'rewrite', 'credit'] },
    { slug: 'claude-md-is-not-governance', title: 'CLAUDE.md Is Not Governance', keywords: ['claude', 'governance', 'rule', 'instruction', 'deterministic'] },
    { slug: 'technical-debt-vs-technical-insolvency', title: 'Technical Debt vs Insolvency', keywords: ['debt', 'insolvency', 'maintenance', 'capacity'] },
    { slug: 'shadow-ai-vs-shadow-it', title: 'Shadow AI vs Shadow IT', keywords: ['shadow', 'unauthorized', 'compliance', 'risk'] },
    { slug: 'ai-guardrails-platforms', title: 'AI Guardrails Platforms Compared', keywords: ['guardrail', 'safety', 'filter', 'probabilistic', 'governance'] },
];

// Static mapping: failure page slugs → keywords
const failurePages = [
    { slug: 'context-rot', title: 'Context Rot', keywords: ['context', 'memory', 'session', 'degradation', 'forget'] },
    { slug: 'hallucination-debt', title: 'Hallucination Debt', keywords: ['hallucination', 'confidence', 'accuracy', 'truth', 'verification'] },
    { slug: 'retry-inflation', title: 'Retry Inflation', keywords: ['retry', 'loop', 'cost', 'token', 'escalation'] },
    { slug: 'autonomous-execution-risk', title: 'Autonomous Execution Risk', keywords: ['agent', 'execution', 'permission', 'autonomous', 'kill switch'] },
    { slug: 'orchestration-debt', title: 'Orchestration Debt', keywords: ['orchestration', 'pipeline', 'workflow', 'integration'] },
];

// Static mapping: tool pages
const toolPages = [
    { slug: '/tools/pdi', name: 'Product Debt Index', keywords: ['debt', 'maintenance', 'insolvency', 'capacity', 'engineering'] },
    { slug: '/tools/aueb', name: 'AI Unit Economics Calculator', keywords: ['cost', 'unit', 'economics', 'margin', 'api', 'pricing'] },
    { slug: '/tools/aper', name: 'APER Calculator', keywords: ['revenue', 'engineer', 'productivity', 'output'] },
    { slug: '/diagnose', name: 'Full Diagnostics Hub', keywords: ['diagnose', 'assess', 'audit', 'measure', 'calculate'] },
];

const conceptPages = [
    { slug: 'shadow-ai', keywords: ['shadow ai', 'shadow-ai', 'unsanctioned ai', 'unmonitored ai'] },
    { slug: 'ai-agent-sprawl', keywords: ['agent sprawl', 'ai sprawl', 'agent proliferation'] },
    { slug: 'prompt-injection', keywords: ['prompt injection', 'injection attack', 'adversarial prompt'] },
    { slug: 'model-collapse', keywords: ['model collapse', 'ai inflation', 'synthetic data'] },
    { slug: 'inference-economics', keywords: ['inference cost', 'inference economics', 'token cost', 'api cost'] },
    { slug: 'technical-insolvency', keywords: ['technical insolvency', 'insolvency date', 'maintenance exceeds'] },
    { slug: 'agentic-engineering', keywords: ['agentic engineering', 'multi-agent', 'agent architecture'] },
    { slug: 'context-rot', keywords: ['context rot', 'context degradation', 'reasoning decay'] },
    { slug: 'innovation-tax', keywords: ['innovation tax', 'maintenance burden', 'innovation overhead'] },
    { slug: 'coordination-tax', keywords: ['coordination tax', 'coordination cost', 'team scaling cost'] },
    { slug: 'r-and-d-ponzi', keywords: ['r&d ponzi', 'ponzi scheme', 'velocity metrics', 'engineering dashboard'] },
    { slug: 'feature-bloat-calculus', keywords: ['feature bloat', 'bloat calculus', 'feature maintenance'] },
    { slug: 'cost-of-predictivity', keywords: ['cost of predictivity', 'deterministic cost', 'predictivity'] },
    { slug: 'ai-margin-squeeze', keywords: ['margin squeeze', 'ai margin', 'gross margin erosion'] },
    { slug: 'ten-man-parity', keywords: ['10-man parity', 'ten-man parity', 'small team'] },
    { slug: 'semantic-caching', keywords: ['semantic caching', 'semantic cache', 'query caching'] },
    { slug: 'capitalization-matrix', keywords: ['capitalization matrix', 'asc 350', 'r&d capitalization'] },
    { slug: 'systems-governor', keywords: ['systems governor', 'software engineer role'] },
    { slug: 'zombie-code', keywords: ['zombie code', 'sunset protocol', 'dead features', 'dead code'] },
    { slug: 'slm-repatriation', keywords: ['slm repatriation', 'small language model', 'model repatriation'] },
    { slug: 'state-integrity-hashing', keywords: ['state integrity', 'integrity hashing', 'hash verification'] },
    { slug: 'dora-financial-translation', keywords: ['dora metrics', 'dora financial', 'financial translation'] },
    { slug: 'ai-volatility-tax', keywords: ['ai volatility tax', 'volatility tax', 'cogs'] },
    { slug: 'agent-kill-switch', keywords: ['kill switch', 'circuit breaker', 'execution control'] },
    { slug: 'deterministic-governance', keywords: ['deterministic governance', 'code gates'] },
    { slug: 'product-economist', keywords: ['product economist', 'p&l', 'margin contribution'] },
    { slug: 'subprime-code-crisis', keywords: ['subprime code', 'code inflation', 'debt bubble'] },
    { slug: 'vibe-coding', keywords: ['vibe coding', 'vibe code', 'superficial'] },
    { slug: 'ai-governance', keywords: ['ai governance', 'enterprise governance', 'governance'] },
    { slug: 'ai-economics', keywords: ['ai economics', 'tokenomics', 'unit economics'] },
    { slug: 'ai-tokenomics-cogs', keywords: ['tokenomics', 'ai cogs', 'inference cogs'] },
    { slug: 'runtime-vs-alignment', keywords: ['runtime governance', 'model alignment', 'rlhf'] },
    { slug: 'induced-demand-software', keywords: ['induced demand', 'software demand'] }
];

function matchByKeywords(items: { slug: string; title?: string; name?: string; keywords: string[] }[], termSlug: string, termTitle: string, termCategory: string, limit: number) {
    const searchText = `${termSlug} ${termTitle} ${termCategory}`.toLowerCase();
    return items
        .map(item => ({
            ...item,
            score: item.keywords.reduce((acc, kw) => acc + (searchText.includes(kw) ? 1 : 0), 0),
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
}

interface GlossaryMeshProps {
    termSlug: string;
    termTitle: string;
    termCategory: string;
    relatedArticles?: { title: string; url: string }[];
    relatedFailures?: string[];
}

export default function GlossaryMesh({ termSlug, termTitle, termCategory, relatedArticles, relatedFailures }: GlossaryMeshProps) {
    const matchedCompare = matchByKeywords(comparePages, termSlug, termTitle, termCategory, 3);
    const matchedFailures = matchByKeywords(failurePages, termSlug, termTitle, termCategory, 2);
    const matchedTools = matchByKeywords(toolPages, termSlug, termTitle, termCategory, 2);
    const matchedConcepts = matchByKeywords(conceptPages, termSlug, termTitle, termCategory, 3);

    // Merge explicit relatedFailures with keyword-matched ones
    const explicitFailureSlugs = relatedFailures || [];
    const allFailureSlugs = new Set([
        ...explicitFailureSlugs,
        ...matchedFailures.map(f => f.slug),
    ]);
    const failureItems = Array.from(allFailureSlugs).slice(0, 3).map(slug => {
        const found = failurePages.find(f => f.slug === slug);
        return found || { slug, title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), keywords: [] };
    });

    const hasContent = matchedCompare.length > 0 || failureItems.length > 0 || matchedTools.length > 0 || (relatedArticles && relatedArticles.length > 0) || matchedConcepts.length > 0;
    if (!hasContent) return null;

    return (
        <section className="mb-12 mt-8 pt-8 border-t border-zinc-200">
            <h2 className="text-xl font-bold text-zinc-900 mb-6 font-grotesk">
                🌐 Explore the Governance Knowledge Graph
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Compare pages */}
                {matchedCompare.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Scale className="w-4 h-4 text-violet-500" />
                            <span className="text-xs font-mono font-bold text-violet-600 uppercase tracking-wider">Compare</span>
                        </div>
                        {matchedCompare.map(item => (
                            <Link
                                key={item.slug}
                                href={`/compare/${item.slug}`}
                                className="block p-3 rounded-lg border border-zinc-100 hover:border-violet-200 hover:bg-violet-50/30 transition-all group"
                            >
                                <span className="text-sm font-semibold text-zinc-800 group-hover:text-violet-700 transition-colors">
                                    {item.title}
                                </span>
                                <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-violet-500 inline ml-1 transition-colors" />
                            </Link>
                        ))}
                    </div>
                )}

                {/* Failure pages */}
                {failureItems.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-4 h-4 text-rose-500" />
                            <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">Failure Modes</span>
                        </div>
                        {failureItems.map(item => (
                            <Link
                                key={item.slug}
                                href={`/failures/${item.slug}`}
                                className="block p-3 rounded-lg border border-zinc-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all group"
                            >
                                <span className="text-sm font-semibold text-zinc-800 group-hover:text-rose-700 transition-colors">
                                    {item.title}
                                </span>
                                <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-rose-500 inline ml-1 transition-colors" />
                            </Link>
                        ))}
                    </div>
                )}

                {/* Published articles */}
                {relatedArticles && relatedArticles.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">Published</span>
                        </div>
                        {relatedArticles.map(article => (
                            <a
                                key={article.url}
                                href={article.url}
                                target={article.url.startsWith('/') ? undefined : '_blank'}
                                rel={article.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                                className="block p-3 rounded-lg border border-zinc-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
                            >
                                <span className="text-sm font-semibold text-zinc-800 group-hover:text-emerald-700 transition-colors">
                                    {article.title}
                                </span>
                                <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-emerald-500 inline ml-1 transition-colors" />
                            </a>
                        ))}
                    </div>
                )}

                {/* Diagnostic tools */}
                {matchedTools.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <Wrench className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">Diagnose</span>
                        </div>
                        {matchedTools.map(item => (
                            <Link
                                key={item.slug}
                                href={item.slug}
                                className="block p-3 rounded-lg border border-zinc-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                            >
                                <span className="text-sm font-semibold text-zinc-800 group-hover:text-blue-700 transition-colors">
                                    {item.name}
                                </span>
                                <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-blue-500 inline ml-1 transition-colors" />
                            </Link>
                        ))}
                    </div>
                )}

                {/* Canonical Concepts */}
                {matchedConcepts.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">Canonical Concept Specification</span>
                        </div>
                        {matchedConcepts.map(item => {
                            const displayTitle = item.title || item.name || item.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                            return (
                                <Link
                                    key={item.slug}
                                    href={`/concepts/${item.slug}`}
                                    className="block p-3 rounded-lg border border-zinc-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all group"
                                >
                                    <span className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                                        {displayTitle}
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-500 inline ml-1 transition-colors" />
                                </Link>
                            );
                        })}
                    </div>
                )}

            </div>
        </section>
    );
}

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
import { ArrowRight, AlertTriangle, Scale, FileText, Wrench } from 'lucide-react';

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

    const hasContent = matchedCompare.length > 0 || failureItems.length > 0 || matchedTools.length > 0 || (relatedArticles && relatedArticles.length > 0);
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
                                <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-violet-500 inline ml-1 transition-colors" />
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
                                <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-rose-500 inline ml-1 transition-colors" />
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
                                <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-emerald-500 inline ml-1 transition-colors" />
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
                                <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:text-blue-500 inline ml-1 transition-colors" />
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import compareCategorized from '../lib/compare-categorized.json';
import pseoMatrix from '../lib/pseo-matrix.json';

export const metadata: Metadata = {
    title: 'Architectural & Platform Comparisons | Richard Ewing',
    description: 'Compare AI coding platforms, runtime governance architectures, and engineering metrics. Objective cost, risk, and ROI evaluations.',
    alternates: { canonical: 'https://www.richardewing.io/compare' },
    openGraph: {
        title: 'Architectural & Platform Comparisons | Richard Ewing',
        description: 'Compare AI coding platforms, runtime governance architectures, and engineering metrics.',
        url: 'https://www.richardewing.io/compare',
        type: 'website',
    },
};

const curattedComparisons = [
    {
        title: 'Exogram vs LangChain Guardrails',
        subtitle: 'Deterministic Runtime vs Prompt Wrapper',
        description: 'Why pre-execution zero-trust gateways outperform probabilistic prompt wrappers for enterprise safety.',
        href: '/compare/exogram-vs-langchain',
        color: 'cyan'
    },
    {
        title: 'Exogram vs Lakera & Guardrails AI',
        subtitle: 'Runtime Interception vs Observability',
        description: 'Pre-execution admissibility runtime vs post-hoc LLM monitoring and content moderation tools.',
        href: '/compare/exogram-vs-lakera',
        color: 'purple'
    },
    {
        title: 'Advisory vs Big-4 Tech Due Diligence',
        subtitle: 'Empirical Audit vs Checklist Advisory',
        description: 'Forensic codebase and R&D capital audits vs survey-based management checklists.',
        href: '/compare/advisory-vs-big4',
        color: 'indigo'
    },
    {
        title: 'Claude Code vs Cursor Governance',
        subtitle: 'Runtime Gating vs Prompt Boundaries',
        description: 'Why deterministic runtime gating outperforms probabilistic prompt boundaries for enterprise AI development.',
        href: '/compare/claude-code-vs-cursor-governance',
        color: 'amber'
    },
    {
        title: 'Claude Code Retry Loop Prevention',
        subtitle: 'Token Burn & Patch Loops',
        description: 'How to stop Claude Code from getting caught in recursive patch loops that burn API compute.',
        href: '/compare/claude-code-retry-loop-prevention',
        color: 'cyan'
    },
    {
        title: 'Product Debt Index vs SonarQube',
        subtitle: 'Financial vs Technical Debt',
        description: 'Comparing code quality tools against dollar-denominated financial debt models.',
        href: '/compare/pdi-vs-sonarqube',
        color: 'emerald'
    }
];

const colorMap: Record<string, { border: string; text: string; hover: string }> = {
    amber: { border: 'border-amber-500/30', text: 'text-amber-900', hover: 'hover:border-amber-500/60' },
    cyan: { border: 'border-cyan-500/30', text: 'text-cyan-900', hover: 'hover:border-cyan-500/60' },
    indigo: { border: 'border-indigo-500/30', text: 'text-indigo-900', hover: 'hover:border-indigo-500/60' },
    purple: { border: 'border-purple-500/30', text: 'text-purple-900', hover: 'hover:border-purple-500/60' },
    emerald: { border: 'border-emerald-500/30', text: 'text-emerald-900', hover: 'hover:border-emerald-500/60' },
};

export default function CompareIndexPage() {
    // Filter directory links to ONLY Tier A indexed comparison pages
    const tierASlugs = new Set((compareCategorized.tierA_indexed as string[]) || []);
    const filteredMatrix = (pseoMatrix as { slug: string; title: string; toolA: string; toolB: string }[])
        .filter(item => tierASlugs.has(item.slug));

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="mb-12 border-b border-zinc-400 pb-8">
                    <div className="text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        Evaluations & Benchmarks
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Architectural & Platform Comparisons
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-2xl">
                        Objective cost, risk, and ROI evaluations of AI coding assistants, guardrails, and engineering metrics platforms.
                    </p>
                </div>

                {/* Featured Comparisons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {curattedComparisons.map((c) => {
                        const theme = colorMap[c.color] || colorMap.amber;
                        return (
                            <Link key={c.href} href={c.href} className="group block">
                                <div className={`rounded-2xl border ${theme.border} ${theme.hover} p-8 transition-all bg-white hover:bg-zinc-50 shadow-sm`}>
                                    <div className={`text-xs font-bold font-mono uppercase tracking-widest mb-2 ${theme.text}`}>{c.subtitle}</div>
                                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-3 group-hover:text-zinc-900">{c.title}</h2>
                                    <p className="text-zinc-900 font-semibold mb-4 text-sm">{c.description}</p>
                                    <span className={`text-xs font-bold uppercase tracking-widest ${theme.text}`}>Read Comparison &rarr;</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Tier A Comparison Directory */}
                {filteredMatrix.length > 0 && (
                    <div className="mt-16 pt-12 border-t border-zinc-400">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8">
                            High-Intent Strategic Comparisons
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredMatrix.map((page) => (
                                <Link 
                                    key={page.slug} 
                                    href={`/compare/${page.slug}`}
                                    className="text-sm font-bold text-zinc-900 hover:text-cyan-900 transition-colors bg-white/70 border border-zinc-300 rounded-lg p-3 hover:bg-white truncate block"
                                    title={page.title}
                                >
                                    {page.toolA} vs {page.toolB}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-center py-12 border-t border-zinc-400 mt-16">
                    <p className="text-zinc-900 font-semibold mb-4 text-sm">Explore diagnostic calculators</p>
                    <Link href="/tools" className="text-cyan-900 font-extrabold hover:text-cyan-900 uppercase tracking-widest text-xs">
                        View All Diagnostic Tools &rarr;
                    </Link>
                </div>
            </div>
        </main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import compareCategorized from '../lib/compare-categorized.json';
import pseoMatrix from '../lib/pseo-matrix.json';

export const metadata: Metadata = {
    title: 'Engineering Tool & Metric Comparisons',
    description: 'Head-to-head architectural comparisons of AI tools, engineering metrics, and governance platforms. Objective cost, risk, and ROI evaluations.',
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
        title: 'Why AI API Bills Jump 4x After Adding Tools',
        subtitle: 'Token Inflation & Schema Re-Transmission',
        description: 'Why adding web search or database tools multiplies token bills by 400% and how prompt caching solves it.',
        href: '/compare/why-anthropic-bills-spike-with-tool-use',
        color: 'red'
    },
    {
        title: 'Why AI Bill Spikes From Silent Retries',
        subtitle: 'The Inference Retry Spiral',
        description: 'Why your dashboard shows 95% success but monthly API spend jumps 40% due to automated retry loops.',
        href: '/compare/why-ai-costs-spiral-from-silent-retries',
        color: 'red'
    },
    {
        title: 'Why AI Prompts Stop Working When Models Update',
        subtitle: 'Model Version Depreciation Cliff',
        description: 'Why vendor model updates cause silent semantic drift and how to pin dated snapshots with golden eval suites.',
        href: '/compare/why-ai-prompts-break-after-model-updates',
        color: 'purple'
    },
    {
        title: 'Why AI Product Specs Waste Engineering Time',
        subtitle: 'Synthetic Spec Inflation',
        description: 'Why product managers churn out 30-page AI PRDs in minutes that solve zero validated customer problems.',
        href: '/compare/why-ai-prds-and-specs-create-waste',
        color: 'amber'
    },
    {
        title: 'Why Your Engineers Are Babysitting AI All Day',
        subtitle: 'The API Janitor Trap',
        description: 'Why senior engineering capacity gets swallowed by continuous prompt tuning and flaky vector glue code.',
        href: '/compare/why-ai-teams-become-api-janitors',
        color: 'red'
    },
    {
        title: 'Why Forgotten AI Features Burn Cloud Budgets',
        subtitle: 'Zombie Feature Compute Drain',
        description: 'Why features with 15 users still cost $8,000/month in continuous vector embedding refreshes.',
        href: '/compare/why-unused-ai-features-drain-cloud-budgets',
        color: 'cyan'
    },
    {
        title: 'How to Find Secret AI Tools in Your Company',
        subtitle: 'The Shadow AI Vendor Tax',
        description: 'Why employees expense dozens of unapproved AI tools with company data and how to run a zero-blame audit.',
        href: '/compare/why-companies-pay-shadow-ai-vendor-tax',
        color: 'indigo'
    },
    {
        title: 'Why Boardroom AI Metrics Mean Nothing',
        subtitle: 'Board AI Metric Theater',
        description: 'Why investors reject commit volume vanity slides and demand P&L proof of gross margin expansion.',
        href: '/compare/why-board-ai-metrics-sound-impressive-but-mean-nothing',
        color: 'amber'
    },
    {
        title: 'Why AI Code Leads to More Outages',
        subtitle: 'The AI Technical Debt Accelerator',
        description: 'Why pull request velocity is up 35% but production incidents and code review times doubled.',
        href: '/compare/why-ai-code-creates-more-bugs-than-it-fixes',
        color: 'red'
    },
    {
        title: 'Why Hosting Your Own AI Model Costs More Than APIs',
        subtitle: 'Cloud GPU Idle Costs vs API Tokens',
        description: 'Why renting dedicated AWS GPUs to run open-source Llama models often costs 3x more than OpenAI tokens.',
        href: '/compare/why-local-llms-are-more-expensive-than-apis',
        color: 'purple'
    },
    {
        title: 'Why Senior Engineers Spend All Day Reviewing AI Code',
        subtitle: 'The AI Code Review Bottleneck',
        description: 'Why generating code faster creates massive pull request review queues that burn out senior engineers.',
        href: '/compare/why-ai-pr-review-time-is-exploding',
        color: 'amber'
    },
    {
        title: 'Why CFOs Are Canceling AI Pilots in 2026',
        subtitle: 'AI Pilot ROI & Margin Proof',
        description: 'Why enterprise finance chiefs are shutting down 6-figure AI pilots that fail to show gross margin expansion.',
        href: '/compare/why-cfos-are-shutting-down-ai-pilots',
        color: 'red'
    },
    {
        title: 'Why Your Search AI Keeps Giving Outdated Answers',
        subtitle: 'Vector Database Ghost Chunks',
        description: 'Why RAG search systems keep quoting deleted documents and old product prices after updates.',
        href: '/compare/why-rag-returns-stale-data-after-updates',
        color: 'cyan'
    },
    {
        title: 'Why AI Coding Tools Didn\'t Lower Engineering Payroll',
        subtitle: 'The Jevons Paradox of Software',
        description: 'Why buying Copilot or Cursor subscriptions did not reduce software engineering headcount.',
        href: '/compare/why-copilot-didnt-reduce-engineering-headcount',
        color: 'indigo'
    },
    {
        title: 'Why Your New AI Feature Is Losing Money on Every User',
        subtitle: 'Negative-Carry Product Economics',
        description: 'Why bundling variable token compute into flat-rate SaaS subscriptions destroys profit margins.',
        href: '/compare/why-ai-feature-margins-turn-negative',
        color: 'red'
    },
    {
        title: 'Why Cursor Rewrites Your Project Files',
        subtitle: 'Scope Creep & Repository Drift',
        description: 'How to stop IDE coding agents from touching files outside the prompt boundary and breaking imports.',
        href: '/compare/why-cursor-rewrites-files',
        color: 'amber'
    },
    {
        title: 'Why Model Context Protocol (MCP) Is Dangerous',
        subtitle: 'Zero-Trust Agent Defense',
        description: 'Why unsanitized local MCP server connections expose companies to prompt injections and data leaks.',
        href: '/compare/why-mcp-is-dangerous',
        color: 'red'
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
    red: { border: 'border-rose-500/30', text: 'text-rose-900', hover: 'hover:border-rose-500/60' },
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

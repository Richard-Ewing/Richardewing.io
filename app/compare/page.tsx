import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Tool Comparisons | PDI vs SonarQube & More | Ewing',
    description: 'Side-by-side comparisons of R&D diagnostic tools vs mainstream alternatives. See why economic metrics outperform vanity code quality scores.',
    keywords: ['tool comparison', 'sonarqube alternative', 'leetcode alternative', 'product debt index', 'audit interview protocol'],
    alternates: { canonical: 'https://www.richardewing.io/compare' },
};

const comparisons = [
    {
        title: 'Shadow AI Scanner vs Wiz.io',
        subtitle: 'Liability vs Infrastructure',
        description: 'Wiz scans cloud infrastructure. The Shadow AI Endpoint Scanner calculates the exact Cost of Doing Nothing (CODN) for every localized shadow endpoint.',
        href: '/tools/shadow-ai/vs/wiz',
        color: 'rose',
    },
    {
        title: 'Prompt Defensibility vs Promptfoo',
        subtitle: 'Extrapolation vs CLI Testing',
        description: 'Promptfoo handles CLI testing. The Intrusion Sandbox generates C-Suite executable Confidential Audits detailing the dollar liability of payload extrusion.',
        href: '/tools/prompt-injection-sandbox/vs/promptfoo',
        color: 'orange',
    },
    {
        title: 'Agent FinOps vs Datadog LLM',
        subtitle: 'Unit Economics vs Observability',
        description: 'Datadog traces deployment latency. The Agentic FinOps Emulator models the $100k+ API bankruptcy before multi-agent logic is universally shipped.',
        href: '/tools/agent-router/vs/datadog-llm',
        color: 'indigo',
    },
    {
        title: 'Volatility Auditor vs Scale AI',
        subtitle: 'EBITDA vs Fine-Tuning',
        description: 'Scale handles data. The Volatility Tax Auditor (VTA) acts as a Board-level actuary, forecasting unpredictable human-AI fallback support costs.',
        href: '/tools/vta',
        color: 'fuchsia',
    },
    {
        title: 'PDI vs SonarQube',
        subtitle: 'Economic Debt vs Code Quality',
        description: 'SonarQube measures code smells. PDI calculates when Technical Debt will mathematically bankrupt your engineering capacity.',
        href: '/compare/pdi-vs-sonarqube',
        color: 'cyan',
    },
    {
        title: 'Vendor Defensibility vs Gartner',
        subtitle: 'Surgical Math vs Subjective Grid',
        description: 'Gartner measures subjective positioning. Due Diligence Engine executes mathematical SLM CODN extraction for strict contract leverage.',
        href: '/tools/due-diligence/vs/gartner-magic-quadrant',
        color: 'amber',
    },
    {
        title: 'AUEB vs AWS Explorer',
        subtitle: 'AI Margin vs Cloud Spend',
        description: 'AWS tracks basic server spend. AUEB tells you whether your Generative AI features suffer from structural margin collapse.',
        href: '/compare/aueb-vs-aws-cost-explorer',
        color: 'emerald',
    },
    {
        title: 'Copilot ROI vs GitClear',
        subtitle: 'EBITDA vs LOC Generation',
        description: 'GitClear tracks code output volume. Copilot ROI Forecaster calculates the exact EBITDA destruction caused by downstream Vibe Coding Debt & review drag.',
        href: '/compare/copilot-roi-vs-gitclear',
        color: 'fuchsia',
    },
];

import pseoMatrix from '../lib/pseo-matrix.json';

export default function ComparePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Targeted Diagnostic Engines vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Mainstream SaaS</span>
                    </h1>
                    <p className="text-lg text-zinc-900 mb-12 max-w-2xl">
                        Mainstream tools measure engineering activity, code syntax, and server usage. Our specialized forensic engines calculate the exact EBITDA hemorrhage caused by Technical Debt, AI Volatility, and Shadow Architecture.
                    </p>

                    <div className="space-y-6">
                        {comparisons.map((c) => {
                            const colorMap: Record<string, { border: string, hover: string, text: string }> = {
                                cyan: { border: 'border-cyan-500/20', hover: 'hover:border-cyan-500/50', text: 'text-cyan-900 font-extrabold font-semibold' },
                                purple: { border: 'border-purple-500/20', hover: 'hover:border-purple-500/50', text: 'text-purple-900 font-extrabold font-semibold' },
                                orange: { border: 'border-orange-500/20', hover: 'hover:border-orange-500/50', text: 'text-orange-900 font-extrabold font-semibold' },
                                emerald: { border: 'border-emerald-500/20', hover: 'hover:border-emerald-500/50', text: 'text-emerald-900 font-extrabold font-semibold' },
                                rose: { border: 'border-rose-500/20', hover: 'hover:border-rose-500/50', text: 'text-rose-400' },
                                indigo: { border: 'border-indigo-500/20', hover: 'hover:border-indigo-500/50', text: 'text-indigo-900 font-extrabold font-semibold' },
                                fuchsia: { border: 'border-fuchsia-500/20', hover: 'hover:border-fuchsia-500/50', text: 'text-zinc-950 font-semibolduchsia-400' },
                                amber: { border: 'border-amber-500/20', hover: 'hover:border-amber-500/50', text: 'text-amber-400' }
                            };
                            const theme = colorMap[c.color] || colorMap.cyan;

                            return (
                                <Link key={c.href} href={c.href} className="group block">
                                    <div className={`rounded-2xl border ${theme.border} ${theme.hover} p-8 transition-all hover:bg-zinc-50`}>
                                        <div className={`text-xs font-bold font-mono uppercase tracking-widest mb-2 ${theme.text}`}>{c.subtitle}</div>
                                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-3 group-hover:text-zinc-900">{c.title}</h2>
                                        <p className="text-zinc-900 mb-4">{c.description}</p>
                                        <span className={`text-sm font-semibold font-bold uppercase tracking-widest ${theme.text}`}>Read Comparison →</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Programmatic SEO Directory (Resolves Ahrefs Orphan Errors) */}
                    <div className="mt-20 pt-16 border-t border-zinc-400">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8">
                            Complete Comparison Directory
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {pseoMatrix.map((page) => (
                                <Link 
                                    key={page.slug} 
                                    href={`/compare/${page.slug}`}
                                    className="text-sm font-bold text-zinc-900 hover:text-cyan-900 transition-colors bg-white/50 border border-zinc-400/50 rounded-lg p-3 hover:bg-white truncate block"
                                    title={page.title}
                                >
                                    {page.toolA} vs {page.toolB}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="text-center py-16 border-t border-zinc-400 mt-16">
                        <p className="text-zinc-900 mb-4">Try all tools free</p>
                        <Link href="/tools" className="text-cyan-900 font-extrabold font-semibold hover:text-cyan-900 font-extrabold font-semibold font-bold uppercase tracking-widest text-sm">
                            View All Diagnostic Tools →
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

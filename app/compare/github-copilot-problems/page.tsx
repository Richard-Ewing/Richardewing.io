import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, DollarSign, Star, ArrowRight } from 'lucide-react';
import ExogramBridge from '@/components/ExogramBridge';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'GitHub Copilot Problems & Fixes 2026 | Ewing',
    description: 'GitHub Copilot generates code 55% faster but increases review burden 3x. The hidden costs, IP risks, and governance controls for enterprise.',
    keywords: ['GitHub Copilot problems', 'GitHub Copilot problems 2026', 'GitHub Copilot not worth it', 'GitHub Copilot complaints', 'GitHub Copilot alternative', 'Copilot waste of money', 'Copilot cancelled', 'Copilot downgraded', 'Copilot rate limiting', 'Copilot PR ads', 'Copilot model carousel', 'GitHub Copilot Enterprise review', 'GitHub Copilot vs governance'],
    openGraph: {
        title: 'GitHub Copilot Problems 2026 — Real User Complaints & Governance Solutions',
        description: 'Why developers are leaving Copilot and what runtime governance actually fixes.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/github-copilot-problems' },
};

const complaints = [
    {
        title: 'Model Carousel Regressions',
        severity: 'HIGH',
        source: 'Reddit / G2',
        quote: '"The model carousel keeps swapping models without telling us. Quality dropped overnight and nobody knows which model we\'re even using anymore."',
        detail: 'GitHub frequently swaps underlying models (GPT, Claude variants) without proactive communication. Users report accuracy regressions, latency spikes, and inconsistent code style after silent model switches.',
        fix: 'Runtime governance validates output quality per-task against deterministic thresholds. If quality drops below baseline, execution halts — regardless of which model is running underneath.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: 'PR Ads & Trust Violations',
        severity: 'CRITICAL',
        source: 'Hacker News / Reddit',
        quote: '"They literally injected promotional tips into our pull requests. In a production workflow. That\'s not a feature, that\'s a trust violation."',
        detail: 'In March 2026, GitHub injected promotional "tips" into pull requests, causing widespread developer outrage. This incident — combined with opaque model changes — has severely eroded trust in the platform.',
        fix: 'Governance middleware operates outside vendor control. Your policies, your enforcement, your audit trail — independent of platform decisions.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: 'Surprise Bills & Usage-Based Pricing',
        severity: 'HIGH',
        source: 'Reddit / Trustpilot',
        quote: '"We budgeted $60/user/month. Then the usage-based credits kicked in and our bill was 3x what we expected."',
        detail: 'As of June 2026, Copilot Enterprise moved to token-based usage billing via "GitHub AI Credits." Combined with the mandatory $21/user/month Enterprise Cloud fee, total costs often reach $60-80+/user/month with no spending cap.',
        fix: 'Financial circuit breakers halt execution when cost-per-task exceeds thresholds. Per-session caps prevent runaway spending regardless of vendor billing model.',
        color: 'bg-orange-50 border-orange-200',
    },
    {
        title: 'Aggressive Rate Limiting',
        severity: 'MEDIUM',
        source: 'G2 / Reddit',
        quote: '"Even on Pro, I hit rate limits by Thursday every week. For $19/month I expect to actually use the tool."',
        detail: 'Professional users report hitting rate limits mid-week, disrupting workflows. Copilot\'s weekly limits restrict productive usage, forcing developers to ration AI assistance.',
        fix: 'Token governance optimizes every request — eliminating retry waste and context pollution that consume rate-limited capacity on non-productive work.',
        color: 'bg-yellow-50 border-yellow-200',
    },
    {
        title: 'Speculative Code & Partial Context',
        severity: 'HIGH',
        source: 'G2 / Developer Forums',
        quote: '"Copilot only reads a fraction of our codebase. It makes up function signatures that don\'t exist and imports packages we\'ve never used."',
        detail: 'Copilot analyzes only a subset of project files, leading to hallucinated imports, fabricated API calls, and speculative code that compiles but silently breaks at runtime.',
        fix: 'Hallucination Debt Reduction validates all generated imports, dependencies, and API references against the actual codebase before code reaches your repository.',
        color: 'bg-orange-50 border-orange-200',
    },
];

const severityColors: Record<string, string> = {
    CRITICAL: 'bg-rose-100 text-rose-700',
    HIGH: 'bg-orange-100 text-orange-700',
    MEDIUM: 'bg-yellow-100 text-yellow-700',
};

export default function GitHubCopilotProblemsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <AlertTriangle size={14} /> Competitor Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        GitHub Copilot Problems in 2026
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Real complaints from G2, Reddit, and developer forums. Model carousel regressions, PR ads, surprise bills, rate limiting, and speculative code — and what governance actually fixes.
                    </p>
                </div>

                {/* Pricing Context */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="w-5 h-5 text-rose-600" />
                        <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A]">GitHub Copilot Enterprise Pricing (2026)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                            <div className="text-2xl font-bold text-[#1A1A1A]">$39</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase">per user / month</div>
                            <div className="text-xs text-zinc-400 mt-1">Copilot Enterprise seat</div>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                            <div className="text-2xl font-bold text-[#1A1A1A]">+ $21</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase">per user / month</div>
                            <div className="text-xs text-zinc-400 mt-1">Required GH Enterprise Cloud</div>
                        </div>
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 text-center">
                            <div className="text-2xl font-bold text-rose-700">$60+</div>
                            <div className="text-xs text-rose-600 font-mono uppercase">total per user / month</div>
                            <div className="text-xs text-rose-500 mt-1">+ usage-based overages</div>
                        </div>
                    </div>
                </div>

                {/* Complaints */}
                <div className="space-y-4 mb-8">
                    {complaints.map((c, i) => (
                        <div key={i} className={`rounded-2xl border p-6 ${c.color}`}>
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h3 className="text-lg font-grotesk font-bold text-[#1A1A1A]">{c.title}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase">{c.source}</span>
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${severityColors[c.severity]}`}>{c.severity}</span>
                                </div>
                            </div>
                            <blockquote className="text-sm italic text-[#4A4A4A] border-l-2 border-zinc-300 pl-4 mb-3">
                                {c.quote}
                            </blockquote>
                            <p className="text-sm text-[#3A3A3A] leading-relaxed mb-3">{c.detail}</p>
                            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                                <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest">Governance Fix</span>
                                <p className="text-sm text-emerald-800 mt-1">{c.fix}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Anchor */}
                <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-8 text-white">
                    <h2 className="text-xl font-grotesk font-bold mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" /> The Pricing Reality
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-4 bg-white/10 rounded-xl text-center">
                            <div className="text-2xl font-bold">$720</div>
                            <div className="text-xs text-zinc-400 font-mono uppercase">Copilot Enterprise / year</div>
                            <div className="text-[10px] text-zinc-500 mt-1">per user, no governance</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl text-center">
                            <div className="text-2xl font-bold">$10K+</div>
                            <div className="text-xs text-zinc-400 font-mono uppercase">Enterprise guardrails / year</div>
                            <div className="text-[10px] text-zinc-500 mt-1">quote-gated, 6-month deploy</div>
                        </div>
                        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center">
                            <div className="text-2xl font-bold text-emerald-400">$99</div>
                            <div className="text-xs text-emerald-300 font-mono uppercase">one-time, per module</div>
                            <div className="text-[10px] text-emerald-200 mt-1">deploy in 15 minutes</div>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-400">
                        Each governance module costs less than a single month of Copilot Enterprise — and it deploys in 15 minutes, not 6 months.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        View All 15 Governance Modules →
                    </Link>
                    <Link href="/compare/ai-coding-agents" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                        Full Agent Comparison
                    </Link>
                </div>

                {/* FAQ */}
                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'Is GitHub Copilot worth it in 2026?', a: 'For basic autocomplete, yes. For agentic workflows, no — Copilot has no retry loop detection, no context rot prevention, no financial circuit breakers, and no file scope enforcement. You are paying $60+/user/month for a tool that ships without governance infrastructure.' },
                            { q: 'Why are developers leaving GitHub Copilot?', a: 'The top reasons from G2 and Reddit: model carousel regressions (quality drops from silent model swaps), the PR ads incident (promotional content injected into pull requests), surprise bills from usage-based pricing, aggressive rate limiting on Pro tiers, and speculative code that hallucinates imports and API calls.' },
                            { q: 'What is the best GitHub Copilot alternative?', a: 'It depends on your needs. Claude Code offers deeper reasoning. Cursor offers better context awareness. But none of them ship with governance. The actual fix is to deploy runtime governance infrastructure on top of whichever agent you choose.' },
                            { q: 'How does governance compare to Copilot Enterprise?', a: 'Copilot Enterprise ($60+/user/month) provides code generation without governance. Each governance module here ($99 one-time) provides the enforcement layer Copilot is missing: context rot prevention, retry inflation control, financial circuit breakers, and file scope restrictions.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Internal Links — Hub and Spoke */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm">
                    <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">Related Analyses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { title: 'Cursor Problems 2026', href: '/compare/cursor-problems' },
                            { title: 'Windsurf Problems 2026', href: '/compare/windsurf-problems' },
                            { title: 'Why Retry Loops Happen', href: '/compare/why-retry-loops-happen' },
                            { title: 'Why AI Coding Burns Money', href: '/compare/why-ai-coding-burns-money' },
                            { title: 'CLAUDE.md Is Not Governance', href: '/compare/claude-md-is-not-governance' },
                            { title: 'Full Agent Comparison', href: '/compare/ai-coding-agents' },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg hover:bg-violet-50 transition-colors text-sm font-bold text-[#1A1A1A]">
                                <ArrowRight size={14} className="text-violet-600" /> {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                
                <AdvisoryCTA variant="compare" />

                <ExogramBridge />

                <div className="text-center">
                    <Link href="/compare" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Comparisons</Link>
                </div>
            </div>
        </main>
    );
}

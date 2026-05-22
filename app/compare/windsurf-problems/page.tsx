import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, DollarSign, ArrowRight } from 'lucide-react';
import ExogramBridge from '@/components/ExogramBridge';

export const metadata: Metadata = {
    title: 'Windsurf Problems 2026 | Why Developers Left Windsurf | Richard Ewing',
    description: 'Real Windsurf complaints from G2, Reddit, and developer forums: pricing rug pull, credit burn, failed requests charging credits, acquisition uncertainty, hallucinations, and context loss. Governance solutions.',
    keywords: ['Windsurf problems', 'Windsurf problems 2026', 'Windsurf AI complaints', 'Windsurf pricing', 'Windsurf credit burn', 'Windsurf alternative', 'Windsurf rug pull', 'left Windsurf', 'switched from Windsurf', 'Windsurf credits expensive', 'Windsurf hallucinations', 'Windsurf Cascade problems'],
    openGraph: {
        title: 'Windsurf Problems 2026 — Real User Complaints & Governance Solutions',
        description: 'Why developers left Windsurf and what runtime governance actually fixes.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/windsurf-problems' },
};

const complaints = [
    {
        title: 'Pricing "Rug Pull"',
        severity: 'CRITICAL',
        source: 'Reddit / Hacker News',
        quote: '"They went from $15/month to $20/month with stricter quotas. Users who paid for annual plans got worse terms than what they signed up for. That\'s a rug pull."',
        detail: 'In March 2026, Windsurf raised prices and shifted to daily/weekly usage quotas. Power users who relied on the previous credit system felt betrayed by sudden cost increases and more restrictive limits. Annual subscribers reported getting worse terms mid-subscription.',
        fix: 'Runtime governance is vendor-independent. Your enforcement layer operates regardless of which AI tool changes its pricing or terms — protecting your workflows from platform decisions.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: 'Silent Credit Burn',
        severity: 'HIGH',
        source: 'Reddit / Trustpilot',
        quote: '"I watched my credits drain in real-time and had no idea what was consuming them. Background Cascade tasks were burning tokens I didn\'t authorize."',
        detail: 'Users report that credits deplete rapidly and unpredictably. Background Cascade agent tasks consume credits silently, auto-refill features obscure actual spending, and the credit accounting system provides insufficient transparency into what specific operations cost.',
        fix: 'Per-task and per-session financial circuit breakers with transparent token accounting. Every token consumed is logged, attributed, and capped — no silent burns.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: 'Failed Requests Still Charge Credits',
        severity: 'HIGH',
        source: 'Reddit / Support Forums',
        quote: '"The tool crashed mid-generation. I got no output. But my credit balance still dropped. When I contacted support, they said it was \'expected behavior.\'"',
        detail: 'Users report that system errors, timeouts, and failed generations still consume credits. This contradicts documentation and creates a billing model where users pay for failed attempts with no recourse. Support responses have been described as inadequate.',
        fix: 'Governance middleware tracks output quality per-token. If a generation fails or produces no usable output, the retry budget accounts for it — preventing waste from being billed as productive work.',
        color: 'bg-orange-50 border-orange-200',
    },
    {
        title: 'Post-Acquisition Uncertainty',
        severity: 'MEDIUM',
        source: 'Hacker News / Reddit',
        quote: '"The team got split between Google and Cognition Labs. Nobody knows who actually owns Windsurf anymore or how long it\'ll be supported."',
        detail: 'After Windsurf\'s technology and team were split between Google and Cognition Labs in 2025, users have expressed concern about the product\'s long-term direction, pace of innovation, and ongoing support commitment.',
        fix: 'Governance infrastructure is platform-independent. If your AI tool gets acquired, deprecated, or sunset, your governance layer, policies, and enforcement middleware transfer to any replacement tool.',
        color: 'bg-yellow-50 border-yellow-200',
    },
    {
        title: 'Hallucinations & Context Loss',
        severity: 'HIGH',
        source: 'G2 / Reddit',
        quote: '"After about 40 minutes, Cascade starts hallucinating function names, forgets what we already built, and repeats the same failed approach three times in a row."',
        detail: 'Windsurf\'s Cascade agent suffers from the same context rot problem as all AI coding agents: as conversations grow, the signal-to-noise ratio degrades until the agent reasons against its own stale assumptions. Users report repetitive failures, hallucinated code, and forgotten context.',
        fix: 'Context Rot Prevention deploys bounded cognition middleware that enforces checkpoint rotation before degradation occurs — maintaining signal-to-noise ratio throughout the session.',
        color: 'bg-orange-50 border-orange-200',
    },
];

const severityColors: Record<string, string> = {
    CRITICAL: 'bg-rose-100 text-rose-700',
    HIGH: 'bg-orange-100 text-orange-700',
    MEDIUM: 'bg-yellow-100 text-yellow-700',
};

export default function WindsurfProblemsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <AlertTriangle size={14} /> Competitor Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Windsurf Problems in 2026
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Real complaints from G2, Reddit, and developer forums. Pricing rug pull, silent credit burn, failed requests charging credits, acquisition uncertainty, and context loss — and what governance fixes.
                    </p>
                </div>

                {/* Pricing Context */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="w-5 h-5 text-cyan-600" />
                        <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A]">Windsurf Pricing (2026)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                            <div className="text-2xl font-bold text-[#1A1A1A]">$20</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase">Pro / month</div>
                            <div className="text-xs text-zinc-400 mt-1">Daily/weekly quotas</div>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                            <div className="text-2xl font-bold text-[#1A1A1A]">$60</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase">Enterprise / user / month</div>
                            <div className="text-xs text-zinc-400 mt-1">SSO + ZDR + 1000 credits</div>
                        </div>
                        <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200 text-center">
                            <div className="text-2xl font-bold text-cyan-700">$720</div>
                            <div className="text-xs text-cyan-600 font-mono uppercase">Enterprise / user / year</div>
                            <div className="text-xs text-cyan-500 mt-1">no governance included</div>
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
                            <div className="text-xs text-zinc-400 font-mono uppercase">Windsurf Enterprise / year</div>
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
                        Each governance module costs less than 2 months of Windsurf Pro — and it works with every agent, not just one vendor.
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
                            { q: 'Is Windsurf dead after the acquisition?', a: 'Windsurf still operates, but the team split between Google and Cognition Labs in 2025 has created uncertainty about long-term support, feature development, and pricing stability. Governance infrastructure is platform-independent — it transfers to any replacement tool.' },
                            { q: 'Why did Windsurf raise prices?', a: 'Windsurf shifted from flexible credit-based pricing to daily/weekly quotas and raised the Pro plan from $15 to $20/month. Power users who relied on the previous model described it as a "rug pull" — paying more for less predictable access.' },
                            { q: 'Why does Windsurf burn credits so fast?', a: 'Windsurf\'s Cascade agent runs background tasks that consume credits silently. Combined with failed requests still charging credits and opaque credit accounting, users report spending 2-3x what they expected.' },
                            { q: 'What is the best Windsurf alternative?', a: 'Cursor and Claude Code are the most common migration targets. But all AI coding agents share the same governance gaps. The fix is not switching tools — it\'s deploying runtime governance on top of whichever tool you choose.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Hub Links */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm">
                    <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">Related Analyses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                            { title: 'GitHub Copilot Problems 2026', href: '/compare/github-copilot-problems' },
                            { title: 'Cursor Problems 2026', href: '/compare/cursor-problems' },
                            { title: 'Why Claude Loses Context', href: '/compare/why-claude-loses-context' },
                            { title: 'Why AI Coding Burns Money', href: '/compare/why-ai-coding-burns-money' },
                            { title: 'AI Guardrails Platform Comparison', href: '/compare/ai-guardrails-platforms' },
                            { title: 'Full Agent Comparison', href: '/compare/ai-coding-agents' },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg hover:bg-violet-50 transition-colors text-sm font-bold text-[#1A1A1A]">
                                <ArrowRight size={14} className="text-violet-600" /> {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                
                <ExogramBridge />

                <div className="text-center">
                    <Link href="/compare" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Comparisons</Link>
                </div>
            </div>
        </main>
    );
}

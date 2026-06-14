import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, DollarSign, ArrowRight } from 'lucide-react';
import ExogramBridge from '@/components/ExogramBridge';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why Does Cursor Keep Rewriting My Files? | Cursor AI Problems 2026',
    description: 'Cursor rewrites unrelated files, loses context mid-session, and creates technical debt. The known failure modes and governance fixes.',
    keywords: ['Cursor problems', 'Cursor problems 2026', 'Cursor AI complaints', 'Cursor credits expensive', 'Cursor rewriting files', 'Cursor alternative', 'Cursor crashes', 'Cursor ignores rules', '.cursorrules not working Cursor', 'Cursor AI review', 'Cursor vs governance', 'left Cursor', 'switched from Cursor'],
    openGraph: {
        title: 'Cursor Problems 2026 — Real User Complaints & Governance Solutions',
        description: 'Why developers are frustrated with Cursor and what runtime governance actually fixes.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/cursor-problems' },
};

const complaints = [
    {
        title: 'Credit Anxiety & Unpredictable Costs',
        severity: 'HIGH',
        source: 'Reddit / G2',
        quote: '"The credit system is anxiety-inducing. I can\'t predict my costs, and heavy usage days burn through my allocation before lunch."',
        detail: 'Cursor\'s credit-based pricing model has been the #1 complaint in 2026. Power users report daily overages, rapidly depleted annual subscriptions, and difficulty understanding how specific prompts consume credits. Many feel the value proposition has shifted negatively compared to earlier flat-rate tiers.',
        fix: 'Financial circuit breakers enforce per-task ($25) and per-session ($50) caps. Token governance eliminates the retry waste and context pollution that burn through credits on non-productive work.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: 'File Rewriting Without Permission',
        severity: 'CRITICAL',
        source: 'Reddit / Cursor Forums',
        quote: '"I asked it to fix one button. It refactored my entire auth middleware, changed 23 files, and broke 4 features. Composer mode has zero file boundaries."',
        detail: 'Cursor\'s Composer mode has full repository access by default. Users report that asking for a one-line fix results in sweeping multi-file refactors that introduce new bugs, break existing features, and require full git reverts.',
        fix: 'Repository Drift Prevention enforces file scope declarations, directory guards, and mutation limits (default: 5 files per task). The agent cannot touch files outside the approved scope.',
        color: 'bg-rose-50 border-rose-200',
    },
    {
        title: '.cursorrules Ignored Under Pressure',
        severity: 'HIGH',
        source: 'Reddit / Developer Forums',
        quote: '"My .cursorrules file says DO NOT modify anything in /config. After 20 messages, it rewrote my entire config directory because it thought it would be \'helpful.\'"',
        detail: '.cursorrules is a text-based instruction file that competes for context window space. As conversations grow, the model prioritizes recent messages over initial configuration — effectively making .cursorrules invisible after ~60 minutes.',
        fix: 'Runtime governance operates outside the context window. Middleware enforcement intercepts agent actions before execution and blocks violations — regardless of what the model\'s text instructions say.',
        color: 'bg-orange-50 border-orange-200',
    },
    {
        title: 'Crashes & Memory Leaks on Large Codebases',
        severity: 'MEDIUM',
        source: 'G2 / Reddit',
        quote: '"Cursor is a VS Code fork that can\'t handle our monorepo. Memory usage hits 4GB, the UI freezes, and I have to force-quit twice a day."',
        detail: 'As a VS Code fork, Cursor inherits Electron\'s performance limitations. Users with large codebases report UI lag, memory leaks during extended sessions, crashes during multi-file operations, and corrupted chat histories after updates.',
        fix: 'Context window compression and checkpoint rotation reduce the cognitive load on the agent — decreasing memory pressure and preventing the session bloat that causes crashes.',
        color: 'bg-yellow-50 border-yellow-200',
    },
    {
        title: 'Black Box Code Generation',
        severity: 'HIGH',
        source: 'Hacker News / Reddit',
        quote: '"Cursor generates code I don\'t understand. My junior devs commit it without reviewing. We now have a black box codebase that nobody can maintain."',
        detail: 'Cursor\'s speed incentivizes "vibe coding" — accepting AI output without understanding it. This creates codebases that are fragile, undocumented, and architecturally incoherent. Teams report that maintaining AI-generated code costs 3-5x more than writing it from scratch.',
        fix: 'Verification Burden Collapse deploys zero-trust validation pipelines that score generated code and reject low-confidence patches before humans see them — preventing black box accumulation.',
        color: 'bg-orange-50 border-orange-200',
    },
];

const severityColors: Record<string, string> = {
    CRITICAL: 'bg-rose-100 text-rose-700',
    HIGH: 'bg-orange-100 text-orange-700',
    MEDIUM: 'bg-yellow-100 text-yellow-700',
};

export default function CursorProblemsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-200 bg-purple-50 text-purple-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <AlertTriangle size={14} /> Competitor Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Cursor Problems in 2026
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Real complaints from G2, Reddit, and developer forums. Credit anxiety, file rewriting, .cursorrules ignored, crashes, and black box code — and what governance actually fixes.
                    </p>
                </div>

                {/* Pricing Context */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-8 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="w-5 h-5 text-purple-600" />
                        <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A]">Cursor Pricing (2026)</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                            <div className="text-2xl font-bold text-[#1A1A1A]">$20</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase">Pro / month</div>
                            <div className="text-xs text-zinc-600 mt-1">Limited credits, overages extra</div>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl text-center">
                            <div className="text-2xl font-bold text-[#1A1A1A]">$40</div>
                            <div className="text-xs text-zinc-500 font-mono uppercase">Ultra / month</div>
                            <div className="text-xs text-zinc-600 mt-1">More credits, same problems</div>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-xl border border-purple-200 text-center">
                            <div className="text-2xl font-bold text-purple-700">Custom</div>
                            <div className="text-xs text-purple-600 font-mono uppercase">Enterprise / month</div>
                            <div className="text-xs text-purple-500 mt-1">SSO + pooled credits (est. $40-60/user)</div>
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
                <div className="bg-[#1A1A1A] rounded-2xl p-8 mb-8 text-zinc-900">
                    <h2 className="text-xl font-grotesk font-bold mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" /> The Pricing Reality
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-4 bg-white/10 rounded-xl text-center">
                            <div className="text-2xl font-bold">$480+</div>
                            <div className="text-xs text-zinc-600 font-mono uppercase">Cursor Enterprise / year</div>
                            <div className="text-[10px] text-zinc-500 mt-1">per user + overages, no governance</div>
                        </div>
                        <div className="p-4 bg-white/10 rounded-xl text-center">
                            <div className="text-2xl font-bold">$10K+</div>
                            <div className="text-xs text-zinc-600 font-mono uppercase">Enterprise guardrails / year</div>
                            <div className="text-[10px] text-zinc-500 mt-1">quote-gated, 6-month deploy</div>
                        </div>
                        <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-center">
                            <div className="text-2xl font-bold text-emerald-400">$99</div>
                            <div className="text-xs text-emerald-300 font-mono uppercase">one-time, per module</div>
                            <div className="text-[10px] text-emerald-200 mt-1">deploy in 15 minutes</div>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-600">
                        Each governance module costs less than 3 months of Cursor Pro — and it deploys in 15 minutes, not 6 months.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-zinc-900 font-bold rounded hover:bg-zinc-100 transition-colors">
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
                            { q: 'Why does Cursor keep rewriting files I didn\'t ask it to touch?', a: 'Cursor\'s Composer mode has full repository access by default. There are no file scope restrictions, no directory guards, and no mutation limits. The agent interprets "fix this bug" as permission to touch anything it thinks is related — and its definition of "related" includes your entire codebase.' },
                            { q: 'My .cursorrules stopped working. How do I fix it?', a: '.cursorrules is a text-based instruction file that competes for context window space. Under context pressure, the model prioritizes recent messages over initial configuration. The fix is not a better .cursorrules file — it is middleware enforcement that operates outside the context window.' },
                            { q: 'Is Cursor worth the price in 2026?', a: 'For individual developers on the Pro plan ($20/month), Cursor provides strong value for autocomplete and short tasks. For teams on Enterprise ($40-60/user/month), the lack of governance infrastructure — no retry limits, no scope enforcement, no financial circuit breakers — means you are paying premium prices for an ungoverned tool.' },
                            { q: 'What is the best Cursor alternative?', a: 'Claude Code offers deeper reasoning. Windsurf offers agentic workflows. VS Code + Copilot offers ecosystem integration. But all of them share the same fundamental problem: no runtime governance. The fix is governance infrastructure deployed on top of whichever agent you choose.' },
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
                            { title: 'Windsurf Problems 2026', href: '/compare/windsurf-problems' },
                            { title: 'Why Cursor Rewrites Files', href: '/compare/why-cursor-rewrites-files' },
                            { title: 'CLAUDE.md Is Not Governance', href: '/compare/claude-md-is-not-governance' },
                            { title: 'Why AI Coding Burns Money', href: '/compare/why-ai-coding-burns-money' },
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

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCw, Shield, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Why Retry Loops Happen | AI Doom Loop & Retry Storm Fix | Richard Ewing',
    description: 'Why AI coding agents get stuck in a loop, hitting the same error over and over. Doom loops, retry storms, and the retry inflation cascade explained with governance containment.',
    keywords: ['AI retry loop', 'AI doom loop', 'AI retry storm', 'Claude Code stuck in a loop', 'AI same error over and over', 'Cursor keeps failing', 'Cursor keeps retrying', 'AI agent stuck', 'retry inflation', 'AI coding agent loop', 'Claude Code retry', 'context pollution', 'streak breaker AI'],
    openGraph: {
        title: 'Why Retry Loops Happen — AI Agent Retry Inflation',
        description: 'The mechanics of retry inflation: why AI coding agents get stuck and how governance breaks the cycle.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/why-retry-loops-happen' },
};

export default function WhyRetryLoopsHappenPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-orange-200 bg-orange-50 text-orange-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <RefreshCw size={14} /> Technical Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Why Retry Loops Happen
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your AI agent is stuck in a loop, hitting the same error over and over. Developers call it a &quot;doom loop&quot; or &quot;retry storm.&quot; Here&apos;s exactly why it happens and how governance breaks the cycle.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">The Retry Inflation Cascade</h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        When an AI coding agent fails at a task, it retries. Each retry adds the failed attempt to the context window. This makes the next attempt harder, not easier, because the context is now polluted with failure history.
                    </p>
                    <div className="space-y-3">
                        {[
                            { step: '1', title: 'First attempt fails', desc: 'The initial approach hits an error. Context usage: 15%.', bg: 'bg-yellow-50 border-yellow-200' },
                            { step: '2', title: 'Agent retries with error context', desc: 'The error message and failed code now occupy context space. Usage: 30%.', bg: 'bg-orange-50 border-orange-200' },
                            { step: '3', title: 'Second retry compounds', desc: 'Two failed attempts now pollute context. Agent tries increasingly complex solutions. Usage: 55%.', bg: 'bg-orange-50 border-orange-200' },
                            { step: '4', title: 'Context reaches critical', desc: 'Multiple failures crowd out original instructions. Agent can no longer "see" the correct approach. Usage: 85%.', bg: 'bg-rose-50 border-rose-200' },
                            { step: '5', title: 'Session collapses', desc: 'Context is full. Agent restarts session, losing all progress. The cycle begins again with fresh context but no memory.', bg: 'bg-rose-50 border-rose-200' },
                            { step: '6', title: 'Cost compounds exponentially', desc: 'Each restart adds 200K tokens. Five restarts = 1M+ tokens burned. $30+ on a single task.', bg: 'bg-rose-100 border-rose-300' },
                        ].map((s, i) => (
                            <div key={i} className={`rounded-xl border p-4 ${s.bg}`}>
                                <div className="flex items-start gap-3">
                                    <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#1A1A1A] flex-shrink-0">{s.step}</span>
                                    <div>
                                        <h3 className="text-sm font-bold text-[#1A1A1A]">{s.title}</h3>
                                        <p className="text-sm text-[#4A4A4A] mt-1">{s.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">Why This Affects Every Agent</h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        Retry inflation is not specific to Claude Code. It affects <strong>every AI coding agent</strong> that operates within a finite context window:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { agent: 'Claude Code', issue: 'No retry limit, no cost cap, no context pruning' },
                            { agent: 'Cursor', issue: 'Retries with full error context, no escalation trigger' },
                            { agent: 'Windsurf', issue: 'Cascade mode amplifies retry depth across files' },
                            { agent: 'Cline / Roo Code', issue: 'Auto-approve mode enables infinite retry loops' },
                        ].map((a, i) => (
                            <div key={i} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200">
                                <div className="text-sm font-bold text-[#1A1A1A]">{a.agent}</div>
                                <div className="text-xs text-[#4A4A4A] mt-1">{a.issue}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" /> How Governance Breaks the Cycle
                    </h2>
                    <ul className="space-y-3 text-emerald-800 text-sm">
                        <li><strong>Retry ceiling (streak breaker)</strong> — maximum 3 attempts before mandatory human escalation. No more doom loops.</li>
                        <li><strong>Context pruning</strong> — remove failed attempt history to prevent context pollution and retry storms</li>
                        <li><strong>Cost monitoring</strong> — halt execution when cost-per-retry exceeds threshold</li>
                        <li><strong>Session reset</strong> — guided session restart preserving architectural context</li>
                        <li><strong>Escalation routing</strong> — notify human with failure summary and recommended approach</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills/retry-inflation-control" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        Deploy Retry Inflation Control →
                    </Link>
                    <Link href="/case-studies/runtime-incidents" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                        Read Incident Reports
                    </Link>
                </div>

                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'Why doesn\'t Claude just stop retrying?', a: 'Claude is designed to persist until the task is complete. Without an explicit retry limit or streak breaker, it will continue attempting the task indefinitely — creating a doom loop where each retry makes the next retry more likely to fail.' },
                            { q: 'Is this the same as an "infinite loop" or "doom loop"?', a: 'A doom loop (or retry storm) is a specific agent behavior pattern where each failed retry adds error context that makes the next attempt harder. It\'s not a code bug — it\'s a compounding cascade. When your agent is stuck in a loop hitting the same error over and over, this is what\'s happening.' },
                            { q: 'My agent keeps failing with the same error. How do I fix it?', a: 'If your agent keeps failing on the same task, it is in a retry inflation spiral. The fix is a streak breaker — a hard limit of 3 attempts before mandatory human escalation. Without this, the agent will burn $25-$1,100 in tokens with no forward progress.' },
                            { q: 'How much does retry inflation actually cost?', a: 'Documented incidents range from $25 (caught early) to $1,100 (unattended overnight). The average ungoverned doom loop incident costs $80-$150.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Infrastructure Catalog</Link>
                </div>
            </div>
        </main>
    );
}

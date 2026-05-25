import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, AlertTriangle, Shield, TrendingDown } from 'lucide-react';
import ExogramBridge from '@/components/ExogramBridge';

export const metadata: Metadata = {
    title: 'Why AI Coding Burns Money | Hidden Cost Analysis',
    description: 'Enterprise AI coding tools cost 10-50x more in production than prototypes. The variable compute economics your CFO needs to see before renewal.',
    keywords: ['AI coding cost', 'Claude Code expensive', 'AI agent cost overrun', 'AI coding surprise bill', 'Cursor token cost', 'AI coding burns money', 'API token waste', 'AI agent budget', 'retry inflation cost', 'vibe coding maintenance nightmare', 'AI generated code abandonware'],
    openGraph: {
        title: 'Why AI Coding Burns Money — Token Cost Analysis',
        description: 'The hidden economics of AI coding agents: retry inflation, context waste, and how governance contains costs.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/why-ai-coding-burns-money' },
};

const costBreakdown = [
    { source: 'Retry Inflation', pct: '35%', desc: 'Failed attempts compound token consumption. Each retry adds more context, making subsequent retries more expensive.', cost: '$35-$400/incident' },
    { source: 'Context Waste', pct: '25%', desc: 'Verbose error messages, stale conversation, and failed file reads consuming tokens without producing value.', cost: '$20-$150/session' },
    { source: 'Scope Creep', pct: '20%', desc: 'Agent modifies files outside the requested scope, then spends tokens fixing the unintended changes.', cost: '$15-$200/incident' },
    { source: 'Unattended Execution', pct: '15%', desc: 'Agent runs overnight or during meetings with no human oversight, burning tokens on circular logic.', cost: '$50-$1,100/incident' },
    { source: 'Orchestration Loops', pct: '5%', desc: 'Multi-agent workflows where agents agree with each other without doing work, consuming compute at scale.', cost: '$100-$890/incident' },
];

export default function WhyAICodingBurnsMoneyPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <DollarSign size={14} /> Cost Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Why AI Coding Burns Money
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        $100–$1,100 token burns in a single session are documented, not hypothetical.
                        Here&apos;s exactly where the money goes — and how to stop it.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">The Five Cost Leak Sources</h2>
                    <div className="space-y-6">
                        {costBreakdown.map((item, i) => (
                            <div key={i} className="border-b border-zinc-100 pb-6 last:border-0 last:pb-0">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-[#1A1A1A]">{item.source}</h3>
                                        <span className="text-xs font-mono text-zinc-500">{item.pct} of total waste</span>
                                    </div>
                                    <span className="px-3 py-1 bg-rose-50 border border-rose-200 rounded text-sm font-bold text-rose-700">{item.cost}</span>
                                </div>
                                <p className="text-sm text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                                <div className="mt-3 w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                                    <div className="h-full bg-rose-400 rounded-full" style={{ width: item.pct }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">Real Documented Incidents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 text-center">
                            <div className="text-2xl font-bold text-rose-700">$1,147</div>
                            <div className="text-xs text-rose-600 font-mono uppercase">Overnight token burn</div>
                            <p className="text-xs text-[#4A4A4A] mt-2">Agent in retry loop for 6h 36m. Zero usable output.</p>
                        </div>
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 text-center">
                            <div className="text-2xl font-bold text-rose-700">$890</div>
                            <div className="text-xs text-rose-600 font-mono uppercase">Agreement loop</div>
                            <p className="text-xs text-[#4A4A4A] mt-2">340 turns of agents agreeing. Zero code produced.</p>
                        </div>
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 text-center">
                            <div className="text-2xl font-bold text-rose-700">$340</div>
                            <div className="text-xs text-rose-600 font-mono uppercase">CSS animation loop</div>
                            <p className="text-xs text-[#4A4A4A] mt-2">67 retry attempts on a simple task.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" /> How Governance Contains Costs
                    </h2>
                    <ul className="space-y-3 text-emerald-800 text-sm">
                        <li><strong>Per-task budget caps</strong> — execution halts at $25 by default</li>
                        <li><strong>Per-session budget caps</strong> — hard ceiling at $50 per session</li>
                        <li><strong>Retry limits</strong> — maximum 3 retries before human escalation</li>
                        <li><strong>Unattended timeout</strong> — automatic halt after 30 minutes without interaction</li>
                        <li><strong>Agreement loop detection</strong> — halts multi-agent workflows with no tool invocations</li>
                        <li><strong>Scope enforcement</strong> — blocks file modifications outside the approved scope</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills/ai-cost-containment" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        Deploy Cost Containment →
                    </Link>
                    <Link href="/telemetry" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                        View Cost Telemetry
                    </Link>
                </div>

                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'I got a surprise bill from my AI coding tool. Why?', a: 'Surprise bills happen because AI coding agents have no default financial circuit breakers. Without governance, a doom loop or retry storm can consume $100-$1,100 in tokens overnight with no human notification. Cost governance adds per-task ($25) and per-session ($50) caps that halt execution before your bill explodes.' },
                            { q: 'How much does a typical AI coding session cost?', a: 'A governed session costs $8-$40. An ungoverned session with retry inflation can cost $100-$1,100. The difference is whether financial circuit breakers are in place.' },
                            { q: 'Can I just set a budget in the API?', a: 'API-level budget limits stop ALL execution, including productive work. Governance-level limits are task-aware — they halt only when the cost-per-task ratio indicates waste, not productive computation.' },
                            { q: 'Is vibe coding creating a maintenance nightmare?', a: 'Yes. AI-generated codebases accumulate technical debt 3-5x faster than human-written code because agents optimize for local fixes, not architectural coherence. Without governance, vibe coding produces black box codebases that become abandonware — too fragile to modify, too expensive to maintain.' },
                            { q: 'What about Claude Max/Pro subscriptions?', a: 'Subscription plans cap your bill but not your waste. You still burn through rate limits on retries and context waste. Governance prevents the waste itself, making every token productive.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">
                <ExogramBridge />

                ← Return to Infrastructure Catalog</Link>
                </div>
            </div>
        </main>
    );
}

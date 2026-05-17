import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Shield, Clock, Brain } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Why Claude Loses Context | Context Loss & Session Amnesia Fix | Richard Ewing',
    description: 'Technical explanation of why Claude Code gets worse over long sessions. Context loss, session amnesia, context bleeding, context decay, and recursive patch loops explained with governance solutions.',
    keywords: ['Claude Code losing context', 'Claude Code context loss', 'Claude Code session amnesia', 'Claude context rot', 'Claude context bleeding', 'Claude context drowning', 'Claude context decay', 'why Claude forgets instructions', 'Claude contradicts itself', 'Claude loses track', 'Claude Code getting worse', 'Claude Code context window', 'Claude Code long sessions'],
    openGraph: {
        title: 'Why Claude Loses Context — The Technical Explanation',
        description: 'Why Claude Code degrades over long sessions and the runtime governance infrastructure that prevents it.',
    },
    alternates: { canonical: 'https://richardewing.io/compare/why-claude-loses-context' },
};

export default function WhyClaudeLosesContextPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-200 bg-blue-50 text-blue-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Brain size={14} /> Technical Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Why Claude Code Loses Context
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Context loss, session amnesia, context bleeding — it&apos;s not a bug. It&apos;s an architectural constraint called context decay. And it&apos;s solvable.
                    </p>
                </div>

                <article className="prose-custom">
                    {/* Section 1 */}
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                        <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">The Core Problem: Context Loss & Session Amnesia</h2>
                        <p className="text-[#4A4A4A] leading-relaxed mb-4">
                            Claude Code operates within a <strong>200K token context window</strong>. Every message, every file read, every error, every retry — it all accumulates in that window. There is no automatic garbage collection.
                        </p>
                        <p className="text-[#4A4A4A] leading-relaxed mb-4">
                            After approximately 60 minutes of active use, the context window begins filling with:
                        </p>
                        <ul className="space-y-2 text-[#3A3A3A]">
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" /> <span>Failed attempts and error messages</span></li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" /> <span>Verbose file contents from every read operation</span></li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" /> <span>Correction history and patch-over-patch sequences</span></li>
                            <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" /> <span>Stale conversation turns no longer relevant to the task</span></li>
                        </ul>
                        <p className="text-[#4A4A4A] leading-relaxed mt-4">
                            As the context fills, the <strong>original instructions get pushed further away</strong> from the model&apos;s attention. By hour 2, Claude literally cannot &quot;see&quot; what you told it at the beginning. This is why it loses track of your architecture, contradicts itself on design decisions, and exhibits what developers call &quot;context drowning&quot; — the agent is submerged in noise and can no longer surface the signal.
                        </p>
                    </div>

                    {/* The Timeline */}
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                        <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">The Degradation Timeline</h2>
                        <div className="space-y-4">
                            {[
                                { time: '0-30 min', recall: '95%+', desc: 'All instructions fresh. High-quality output.', color: 'bg-emerald-50 border-emerald-200' },
                                { time: '30-60 min', recall: '80-90%', desc: 'Subtle drift begins. May repeat suggestions or miss constraints.', color: 'bg-yellow-50 border-yellow-200' },
                                { time: '60-120 min', recall: '40-65%', desc: 'Architectural decisions forgotten. Agent begins contradicting earlier work.', color: 'bg-orange-50 border-orange-200' },
                                { time: '120+ min', recall: '<40%', desc: 'Agent patching its own patches. Session effectively corrupted.', color: 'bg-rose-50 border-rose-200' },
                            ].map((phase, i) => (
                                <div key={i} className={`rounded-xl border p-4 ${phase.color}`}>
                                    <div className="flex items-center gap-4">
                                        <div className="text-center min-w-[80px]">
                                            <div className="text-sm font-bold text-[#1A1A1A]">{phase.time}</div>
                                            <div className="text-xs text-zinc-500">Recall: {phase.recall}</div>
                                        </div>
                                        <p className="text-sm text-[#3A3A3A]">{phase.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why System Prompts Don't Fix This */}
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                        <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">Why CLAUDE.md Alone Doesn&apos;t Fix This</h2>
                        <p className="text-[#4A4A4A] leading-relaxed mb-4">
                            The CLAUDE.md system prompt is loaded at session start, but it occupies tokens in the same context window. As the session grows, even the system prompt gets less attention weight.
                        </p>
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                            <p className="text-sm font-bold text-rose-800">
                                &quot;System prompts are natural language suggestions, not deterministic constraints. Under context pressure, agents routinely bypass text-based instructions.&quot;
                            </p>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 mb-8">
                        <h2 className="text-xl font-grotesk font-bold text-emerald-900 mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5" /> The Governance Solution
                        </h2>
                        <p className="text-emerald-800 leading-relaxed mb-4">
                            Runtime governance prevents context rot through <strong>deterministic enforcement</strong>, not natural language suggestions:
                        </p>
                        <ul className="space-y-3 text-emerald-800">
                            <li className="flex items-start gap-2"><span className="font-bold text-emerald-700">1.</span> <span><strong>Checkpoint Rotation</strong> — automatically prune stale context at 65% utilization while preserving architectural state</span></li>
                            <li className="flex items-start gap-2"><span className="font-bold text-emerald-700">2.</span> <span><strong>Semantic Reset</strong> — emergency context purge at 85% that reloads core instructions</span></li>
                            <li className="flex items-start gap-2"><span className="font-bold text-emerald-700">3.</span> <span><strong>Patch Chain Detection</strong> — halt execution when an agent patches the same file 3+ times</span></li>
                            <li className="flex items-start gap-2"><span className="font-bold text-emerald-700">4.</span> <span><strong>Session Duration Limits</strong> — mandatory checkpoints every 30 minutes</span></li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills/context-rot-prevention" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                            Deploy Context Rot Prevention →
                        </Link>
                        <Link href="/telemetry" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                            View Context Degradation Data
                        </Link>
                    </div>

                    {/* FAQ */}
                    <div className="mt-12">
                        <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-3">
                            {[
                                { q: 'Why does Claude lose context and get session amnesia?', a: 'Claude operates within a finite context window. As conversations grow, original instructions get pushed out of the attention window — causing context loss, session amnesia, and context bleeding between tasks. The agent loses track of architecture decisions and starts contradicting itself.' },
                                { q: 'Does this happen with all AI coding agents?', a: 'Yes. Context decay affects Claude Code, Cursor, Windsurf, Cline, and every agent that operates within a finite context window. The rate varies by model, but the pattern — context drowning, instruction drift, and eventual session amnesia — is universal.' },
                                { q: 'Can I just start a new session?', a: 'Starting a new session resets context but loses all accumulated understanding of your codebase. The real solution is checkpoint rotation — preserving architectural state while pruning conversation history to prevent context window bankruptcy.' },
                                { q: 'How much does context rot actually cost?', a: 'In documented incidents, context rot has caused 6+ hours of rework, 23 corrupted files, and $340+ in wasted tokens in a single session. Across a team, this compounds into $100K+ annually.' },
                            ].map((faq, i) => (
                                <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                    <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                    <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </article>

                <div className="mt-8 text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Infrastructure Catalog</Link>
                </div>
            </div>
        </main>
    );
}

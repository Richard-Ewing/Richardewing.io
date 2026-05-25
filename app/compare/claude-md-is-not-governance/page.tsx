import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, Layers } from 'lucide-react';

export const metadata: Metadata = {
    title: 'CLAUDE.md Is Not Governance | Why Agents Ignore It',
    description: 'Markdown files are suggestions, not enforcement. Why CLAUDE.md fails as governance and what deterministic controls actually prevent AI drift.',
    keywords: ['CLAUDE.md not working', 'CLAUDE.md ignored', 'CLAUDE.md bypassed', '.cursorrules ignored', '.cursorrules not working', 'system prompt bypass', 'AI agent ignores rules', 'AI agent ignores instructions', 'AI governance vs system prompts', 'Claude Code ignoring instructions', 'AI coding agent disobeys', 'AI rules suggestions not constraints'],
    openGraph: {
        title: 'CLAUDE.md Is Not Governance — Why System Prompts Fail',
        description: 'The structural difference between text-based AI instructions and deterministic runtime governance enforcement.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/claude-md-is-not-governance' },
};

export default function ClaudeMdIsNotGovernancePage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-amber-200 bg-amber-50 text-amber-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Layers size={14} /> Governance Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        CLAUDE.md Is Not Governance
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your CLAUDE.md is being ignored. Your .cursorrules stopped working. Your AI agent ignores instructions after 20 messages. That&apos;s because system prompts are suggestions, not constraints. Runtime governance is deterministic enforcement. They are not the same thing.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">The Fundamental Problem</h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        CLAUDE.md, .cursorrules, and system prompts are <strong>text-based instructions</strong> injected at the beginning of a conversation. They ask the model to follow rules. But they have no enforcement mechanism.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
                            <h3 className="text-sm font-bold text-rose-800 mb-3">What CLAUDE.md Does</h3>
                            <ul className="space-y-2 text-sm text-rose-900">
                                <li>• Asks the agent to follow rules</li>
                                <li>• Uses natural language</li>
                                <li>• Has no enforcement</li>
                                <li>• Competes for context space</li>
                                <li>• Gets less attention over time</li>
                                <li>• Can be overridden by user prompts</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                            <h3 className="text-sm font-bold text-emerald-800 mb-3">What Governance Does</h3>
                            <ul className="space-y-2 text-sm text-emerald-900">
                                <li>• Enforces rules via middleware</li>
                                <li>• Uses policy-as-code (YAML)</li>
                                <li>• Blocks unauthorized actions</li>
                                <li>• Operates outside context window</li>
                                <li>• Enforcement never degrades</li>
                                <li>• Cannot be overridden by prompts</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                        <p className="text-sm font-bold text-rose-800">
                            Documented: &quot;Do not modify files outside the /src directory&quot; in CLAUDE.md was bypassed within 3 messages when the agent determined a config change would be &quot;helpful.&quot;
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">Why Text Instructions Get Bypassed</h2>
                    <div className="space-y-4">
                        {[
                            { reason: 'Context pressure', desc: 'As conversation grows, system prompt gets less attention weight. The model\'s focus shifts to recent messages.', impact: 'Rules forgotten after ~60 min' },
                            { reason: 'Helpfulness override', desc: 'Models are trained to be helpful. When the agent determines a rule-violating action would be "better," helpfulness wins.', impact: 'Rules overridden proactively' },
                            { reason: 'Ambiguity exploitation', desc: 'Natural language rules have interpretive gaps. The agent finds valid readings that justify violations.', impact: 'Rules reinterpreted creatively' },
                            { reason: 'Instruction injection', desc: 'User prompts can inadvertently override system prompt rules through stronger language.', impact: 'Rules overridden by user' },
                        ].map((r, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-zinc-50 rounded-xl">
                                <AlertTriangle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">{r.reason}</h3>
                                    <p className="text-sm text-[#4A4A4A] mt-1">{r.desc}</p>
                                    <span className="text-xs font-mono text-rose-600 mt-1 block">{r.impact}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">The 4-Layer Governance Stack</h2>
                    <p className="text-[#4A4A4A] mb-6">
                        Real governance operates across 4 layers, each with middleware enforcement that cannot be bypassed by the model.
                    </p>
                    <div className="space-y-3">
                        {[
                            { layer: 'Identity', desc: 'Who is the agent? What are its principles? What are its boundaries?', enforcement: 'CLAUDE.md + policy.yaml manifest', color: 'border-cyan-200 bg-cyan-50' },
                            { layer: 'Skill', desc: 'What can the agent do? What procedures must it follow?', enforcement: 'Operational procedures + YAML policies', color: 'border-purple-200 bg-purple-50' },
                            { layer: 'Tool', desc: 'Which tools can the agent use? What permissions are required?', enforcement: 'middleware.ts + permission manifests', color: 'border-red-200 bg-red-50' },
                            { layer: 'Environment', desc: 'What files can it access? What are the cost limits?', enforcement: 'File guards + budget caps + context limits', color: 'border-emerald-200 bg-emerald-50' },
                        ].map((l, i) => (
                            <div key={i} className={`rounded-xl border p-4 ${l.color}`}>
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">{l.layer} Layer</h3>
                                    <span className="text-[10px] font-mono text-zinc-500">{l.enforcement}</span>
                                </div>
                                <p className="text-sm text-[#4A4A4A]">{l.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" /> How to Move Beyond System Prompts
                    </h2>
                    <ul className="space-y-3 text-emerald-800 text-sm">
                        <li><strong>Step 1</strong> — Deploy CLAUDE.md as identity layer (necessary but not sufficient)</li>
                        <li><strong>Step 2</strong> — Add policy.yaml with machine-readable rules</li>
                        <li><strong>Step 3</strong> — Deploy middleware.ts that intercepts and enforces policies</li>
                        <li><strong>Step 4</strong> — Configure file guards, cost limits, and retry caps</li>
                        <li><strong>Step 5</strong> — Add audit logging for every agent action</li>
                        <li><strong>Step 6</strong> — Set up human escalation triggers for threshold violations</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills/runtime-governance" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                        Deploy Runtime Governance →
                    </Link>
                    <Link href="/runtime-architecture" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                        View 4-Layer Architecture
                    </Link>
                </div>

                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'My CLAUDE.md is being ignored. Why?', a: 'CLAUDE.md occupies tokens in the same context window as your conversation. As the session grows, even system prompt instructions get less attention weight. The model treats them as suggestions, not constraints. After ~60 minutes, your CLAUDE.md is effectively invisible to the agent.' },
                            { q: 'My .cursorrules stopped working. How do I fix it?', a: '.cursorrules is the same pattern as CLAUDE.md — text-based instructions competing for context space. Under pressure, the model prioritizes recent messages over initial configuration. The fix is not a better .cursorrules file — it is middleware enforcement that operates outside the context window.' },
                            { q: 'Why does my AI agent ignore instructions?', a: 'AI agents are trained to be helpful, not obedient. When the agent determines a rule-violating action would produce a "better" outcome, helpfulness overrides your instructions. This is why text-based rules are suggestions, not constraints. Only deterministic middleware can enforce rules the model cannot override.' },
                            { q: 'Should I delete my CLAUDE.md?', a: 'No. CLAUDE.md is the Identity Layer — it is necessary but not sufficient. Keep it as the agent\'s mission and principles, but add middleware enforcement on top of it.' },
                            { q: 'What does "middleware enforcement" mean?', a: 'Middleware intercepts agent actions before they execute. For example, a file guard middleware checks if the file being modified is in the approved scope. If not, the action is blocked — regardless of what the agent\'s text instructions say.' },
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

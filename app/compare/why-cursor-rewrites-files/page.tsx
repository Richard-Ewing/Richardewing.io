import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, Shield, AlertTriangle } from 'lucide-react';
import ExogramBridge from '@/components/ExogramBridge';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why Cursor Rewrites Files & Fixes',
    description: 'Empirical guide to stopping IDE coding agents from destroying working imports and creating repository drift.',
    keywords: ['Cursor rewrites files', 'Cursor rewriting files', 'Cursor modifying wrong files', 'AI agent scope creep', 'AI unintended edits', 'AI changing everything', 'AI touched something it shouldn\'t', 'AI refactoring code I didn\'t ask', 'Windsurf file access', 'AI coding agent file mutation', 'repository drift', 'AI agent changing my code'],
    openGraph: {
        title: 'Why Cursor Rewrites Files - AI Agent Scope Creep Explained',
        description: 'The mechanics of repository drift and scope creep mutation in AI coding agents.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/why-cursor-rewrites-files' },
};

export default function WhyCursorRewritesFilesPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-200 bg-purple-50 text-purple-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Code2 size={14} /> Technical Analysis
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Why Cursor Rewrites Your Files
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        You asked it to fix one function. It started rewriting files across the entire project, making unintended edits, and changing everything. It touched something it shouldn&apos;t have and now your auth middleware is broken. This is scope creep mutation - and it&apos;s solvable.
                    </p>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">What Actually Happens</h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        When you give an AI coding agent a task, it evaluates all files it can access. There are <strong>no default boundaries</strong> restricting which files it can modify. The agent interprets &quot;fix this bug&quot; as permission to touch anything it thinks is related.
                    </p>
                    <div className="space-y-3 mb-6">
                        {[
                            { step: 'You ask', desc: '"Fix the login validation bug in auth.ts"' },
                            { step: 'Agent reads', desc: 'auth.ts, user.ts, middleware.ts, config.ts, types.ts...' },
                            { step: 'Agent decides', desc: '"auth.ts uses an outdated pattern. Let me refactor the whole auth system."' },
                            { step: 'Agent modifies', desc: '23 files across 6 directories. Introduces new dependencies. Changes API contracts.' },
                            { step: 'Result', desc: 'Login bug is fixed. But 4 other features are now broken.' },
                        ].map((s, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
                                <span className="text-xs font-mono font-bold text-zinc-500 mt-0.5 min-w-[80px]">{s.step}</span>
                                <span className="text-sm text-[#3A3A3A]">{s.desc}</span>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                        <p className="text-sm font-bold text-rose-800">
                            Documented incident: A single &quot;fix CSS animation&quot; prompt resulted in 94 files modified, 3 config files changed, and a completely altered directory structure.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-4">Why This Is Universal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { agent: 'Cursor', issue: 'Composer mode has full repository access by default. No file guard.' },
                            { agent: 'Windsurf', issue: 'Cascade mode propagates changes across files automatically.' },
                            { agent: 'Claude Code', issue: 'No per-task file scope restriction. Can modify any project file.' },
                            { agent: 'Cline / Roo Code', issue: 'Auto-approve mode enables unrestricted multi-file mutations.' },
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
                        <Shield className="w-5 h-5" /> How Governance Contains Scope Creep
                    </h2>
                    <ul className="space-y-3 text-emerald-800 text-sm">
                        <li><strong>File scope declaration</strong> - every task must declare which files it will modify before execution</li>
                        <li><strong>Directory guards</strong> - restrict agent access to specific directories per task</li>
                        <li><strong>Mutation limits</strong> - maximum files modified per task (default: 5)</li>
                        <li><strong>Change review gates</strong> - pause execution when file count exceeds threshold</li>
                        <li><strong>Rollback capability</strong> - git-based automatic rollback for unauthorized modifications</li>
                        <li><strong>Diff summary</strong> - force agent to summarize all planned changes before execution</li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link href="/skills/repository-drift-prevention" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors shadow-sm">
                        Deploy Drift Prevention →
                    </Link>
                    <Link href="/skills/agentic-change-management" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                        Deploy Change Management →
                    </Link>
                </div>

                <div className="mt-12 mb-8">
                    <h2 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {[
                            { q: 'Can\'t I just tell it not to modify other files?', a: 'You can, but text-based instructions are routinely bypassed under context pressure. The agent\'s "helpful" optimization instinct overrides explicit scope restrictions when it determines a broader change would be "better." It will keep rewriting files and refactoring code you didn\'t ask it to touch. Only middleware enforcement prevents this.' },
                            { q: 'My AI keeps changing everything - how do I stop unintended edits?', a: 'Unintended edits happen because AI agents have no default file scope boundary. Every file in your repository is fair game. Governance adds file scope declarations, directory guards, and mutation limits (default: 5 files per task) so the agent cannot touch something it shouldn\'t.' },
                            { q: 'How many files can an agent modify in one session?', a: 'Without governance, there is no limit. Documented incidents show 23-94 files modified in a single task. With governance, the default limit is 5 files per task with human approval required for more.' },
                            { q: 'I had to revert after AI changes broke my project. How do I prevent this?', a: 'Governance includes git-based automatic rollback for unauthorized modifications and change review gates that pause execution when file count exceeds threshold. You should never have to manually revert AI changes again.' },
                            { q: 'Is this the same as "repository drift"?', a: 'Scope creep is a single-task problem. Repository drift is the cumulative effect: after many ungoverned sessions, your repository diverges significantly from its intended architecture. Both require governance to prevent.' },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm">
                                <summary className="p-4 cursor-pointer text-sm font-bold text-[#1A1A1A] hover:text-violet-700">{faq.q}</summary>
                                <div className="px-4 pb-4 text-sm text-[#4A4A4A]">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>

                <AdvisoryCTA variant="compare" />

                <ExogramBridge />

                <div className="text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Infrastructure Catalog</Link>
                </div>
            </div>
        </main>
    );
}

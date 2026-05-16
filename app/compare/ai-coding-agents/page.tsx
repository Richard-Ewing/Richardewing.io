import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, AlertTriangle, Check, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Claude Code vs Cursor vs Windsurf | Runtime Governance Comparison | Richard Ewing',
    description: 'How Claude Code, Cursor, Windsurf, Cline, and Roo Code compare for agentic safety, governance, and deterministic execution. What each tool gets right — and where runtime infrastructure is missing.',
    keywords: ['Claude Code vs Cursor', 'Cursor vs Windsurf', 'Claude Code vs Windsurf', 'AI coding agent comparison', 'Claude Code governance', 'Cursor governance', 'Windsurf safety', 'Cline vs Roo Code', 'best AI coding agent', 'agentic safety comparison', 'deterministic vs probabilistic coding'],
    openGraph: {
        title: 'Claude Code vs Cursor vs Windsurf — Runtime Governance Comparison',
        description: 'Feature-by-feature comparison of agentic safety, governance infrastructure, and runtime controls.',
    },
    alternates: { canonical: 'https://richardewing.io/compare/ai-coding-agents' },
};

const agents = [
    { name: 'Claude Code', type: 'Terminal Agent', maker: 'Anthropic' },
    { name: 'Cursor', type: 'AI-Native IDE', maker: 'Cursor Inc.' },
    { name: 'Windsurf', type: 'AI IDE', maker: 'Codeium' },
    { name: 'Cline', type: 'VS Code Extension', maker: 'Open Source' },
    { name: 'Roo Code', type: 'VS Code Extension', maker: 'Open Source' },
];

const features = [
    { category: 'Identity Governance', items: [
        { name: 'System prompt enforcement', claude: 'partial', cursor: 'partial', windsurf: 'partial', cline: 'minimal', roo: 'minimal' },
        { name: 'CLAUDE.md / .cursorrules', claude: 'yes', cursor: 'yes', windsurf: 'yes', cline: 'no', roo: 'no' },
        { name: 'Runtime identity constraints', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'Authority boundary enforcement', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
    ]},
    { category: 'Skill Governance', items: [
        { name: 'Context rot prevention', claude: 'manual', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'Retry loop detection', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'Patch chain halt', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'Checkpoint rotation', claude: 'manual', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
    ]},
    { category: 'Tool Governance', items: [
        { name: 'Command whitelisting', claude: 'partial', cursor: 'no', windsurf: 'minimal', cline: 'yes', roo: 'yes' },
        { name: 'MCP context isolation', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'File access restrictions', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'partial', roo: 'partial' },
        { name: 'Tool capability manifests', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
    ]},
    { category: 'Environment Governance', items: [
        { name: 'Scope enforcement', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'Financial circuit breakers', claude: 'basic', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'Repository drift detection', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
        { name: 'Ghost dependency scanning', claude: 'no', cursor: 'no', windsurf: 'no', cline: 'no', roo: 'no' },
    ]},
];

function StatusCell({ status }: { status: string }) {
    if (status === 'yes') return <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs"><Check size={14} /> Yes</span>;
    if (status === 'no') return <span className="inline-flex items-center gap-1 text-rose-600 font-bold text-xs"><X size={14} /> No</span>;
    if (status === 'partial') return <span className="text-amber-600 font-bold text-xs">Partial</span>;
    if (status === 'manual') return <span className="text-amber-600 font-bold text-xs">Manual</span>;
    if (status === 'basic') return <span className="text-amber-600 font-bold text-xs">Basic</span>;
    return <span className="text-zinc-400 font-bold text-xs">{status}</span>;
}

export default function AgentComparisonPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <ShieldCheck size={14} /> Runtime Governance Comparison
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Claude Code vs Cursor vs Windsurf
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Every major AI coding agent ships without runtime governance infrastructure.
                        This comparison shows exactly what's missing — and what you need to deploy.
                    </p>
                </div>

                {/* Agent Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
                    {agents.map(a => (
                        <div key={a.name} className="bg-white rounded-xl p-4 border border-[rgba(0,0,0,0.08)] text-center">
                            <div className="font-bold text-[#1A1A1A] text-sm">{a.name}</div>
                            <div className="text-[10px] font-mono text-zinc-500 uppercase mt-1">{a.type}</div>
                            <div className="text-[10px] text-zinc-400 mt-0.5">{a.maker}</div>
                        </div>
                    ))}
                </div>

                {/* Comparison Tables */}
                {features.map(section => (
                    <div key={section.category} className="mb-8">
                        <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                            <ShieldCheck size={18} className="text-violet-600" />
                            {section.category}
                        </h2>
                        <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-zinc-100">
                                        <th className="text-left p-3 font-bold text-zinc-700 text-xs uppercase">Feature</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Claude Code</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Cursor</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Windsurf</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Cline</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Roo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.items.map(item => (
                                        <tr key={item.name} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                                            <td className="p-3 font-medium text-[#3A3A3A]">{item.name}</td>
                                            <td className="p-3 text-center"><StatusCell status={item.claude} /></td>
                                            <td className="p-3 text-center"><StatusCell status={item.cursor} /></td>
                                            <td className="p-3 text-center"><StatusCell status={item.windsurf} /></td>
                                            <td className="p-3 text-center"><StatusCell status={item.cline} /></td>
                                            <td className="p-3 text-center"><StatusCell status={item.roo} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}

                {/* Key Insight */}
                <div className="my-12 p-8 bg-rose-50 border border-rose-200 rounded-2xl">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="text-rose-600 flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-grotesk font-bold text-[#1A1A1A] text-lg mb-2">The Critical Gap</h3>
                            <p className="text-[#4A4A4A] leading-relaxed">
                                No major AI coding agent ships with runtime governance infrastructure. Context rot prevention, retry inflation control, MCP isolation, repository drift detection, and financial circuit breakers are <strong>not built into any tool</strong>. This is the governance layer that must be deployed on top.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Which AI coding agent is safest?', a: 'None of them ship with runtime governance infrastructure by default. Claude Code has the most mature permission model (command approval prompts), but it lacks context rot prevention, retry inflation control, and financial circuit breakers. All agents require external governance deployment.' },
                            { q: 'Can I use governance skills with any agent?', a: 'Yes. The 15 governance modules on this site are designed for Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer, Devin, OpenHands, and SWE-Agent. Each includes a CLAUDE.md manifest, YAML policies, TypeScript middleware, and reusable bash tools.' },
                            { q: 'What is runtime governance?', a: 'Runtime governance is the enforcement layer between the AI agent and your codebase. It intercepts agent actions, validates them against policy manifests, and halts execution when governance boundaries are violated. It prevents context rot, retry inflation, repository drift, and financial overruns.' },
                            { q: 'Why does Claude Code get worse after an hour?', a: 'Context rot. As the context window fills with stale assumptions, failed attempts, and correction history, the signal-to-noise ratio degrades until the agent is reasoning against its own historical errors. The Context Rot Prevention System deploys bounded cognition middleware to enforce checkpoint rotation before degradation occurs.' },
                        ].map(faq => (
                            <details key={faq.q} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-5">
                                <summary className="font-bold text-[#1A1A1A] cursor-pointer">{faq.q}</summary>
                                <p className="mt-3 text-[#4A4A4A] text-sm leading-relaxed">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="p-10 bg-[#1A1A1A] rounded-2xl text-white text-center">
                    <h2 className="text-2xl font-grotesk font-bold mb-4">Deploy the governance layer these tools are missing.</h2>
                    <p className="text-zinc-400 mb-6">15 runtime infrastructure modules. Works with every agent.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded hover:bg-zinc-100 transition-colors">
                            View All 15 Modules →
                        </Link>
                        <Link href="/runtime-architecture" className="px-8 py-4 text-white font-bold rounded border border-zinc-700 hover:border-zinc-500 transition-colors">
                            Read the Architecture
                        </Link>
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    Claude Code vs Cursor 2026, Cursor vs Windsurf comparison, Claude Code vs Windsurf, best AI coding agent 2026, AI coding agent safety, Claude Code governance, Cursor governance, Windsurf runtime, Cline vs Roo Code, deterministic vs probabilistic coding agents, agentic safety comparison, AI agent runtime control
                </div>
            </div>
        </main>
    );
}

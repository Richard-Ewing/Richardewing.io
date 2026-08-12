import { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { ShieldCheck, AlertTriangle, Check, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Claude Code vs Cursor vs Windsurf',
    description: 'Real pricing, user complaints, and governance gap analysis for every major AI coding agent.',
    keywords: ['Claude Code vs Cursor', 'Cursor vs Windsurf', 'Claude Code vs Windsurf', 'GitHub Copilot vs Cursor', 'AI coding agent comparison', 'AI coding agent pricing 2026', 'best AI coding agent 2026', 'Cursor problems', 'Copilot problems', 'Windsurf problems', 'AI coding agent complaints', 'Claude Code governance', 'Cursor governance', 'Windsurf safety', 'Cline vs Roo Code', 'deterministic vs probabilistic coding', 'AI agent runtime governance comparison', 'Tabnine vs Copilot'],
    openGraph: {
        title: 'Claude Code vs Cursor vs Windsurf 2026 — Pricing, Problems & Governance',
        description: 'Real pricing, user complaints, and governance gap analysis for every major AI coding agent.',
    },
    alternates: { canonical: 'https://www.richardewing.io/compare/ai-coding-agents' },
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
    return <span className="text-zinc-600 font-bold text-xs">{status}</span>;
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
                            <div className="text-[10px] text-zinc-600 mt-0.5">{a.maker}</div>
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

                {/* Pricing Comparison */}
                <div className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Enterprise Pricing Comparison (2026)</h2>
                    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-100">
                                    <th className="text-left p-3 text-xs uppercase font-bold text-zinc-700">Tool</th>
                                    <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Enterprise Price</th>
                                    <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Annual / User</th>
                                    <th className="p-3 text-center text-xs uppercase font-bold text-rose-600">Top Complaint</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { tool: 'GitHub Copilot', price: '$60/user/mo', annual: '$720', complaint: 'Model carousel regressions' },
                                    { tool: 'Cursor', price: '$40-60/user/mo', annual: '$480-720', complaint: 'Credit anxiety, file rewriting' },
                                    { tool: 'Windsurf', price: '$60/user/mo', annual: '$720', complaint: 'Pricing rug pull, credit burn' },
                                    { tool: 'Tabnine', price: '$39-59/user/mo', annual: '$468-708', complaint: 'Poor code quality' },
                                    { tool: 'Claude Code', price: '$200/mo (Max)', annual: '$2,400', complaint: 'Context rot, usage limits' },
                                ].map(row => (
                                    <tr key={row.tool} className="border-b border-zinc-50 hover:bg-zinc-50 transition-colors">
                                        <td className="p-3 font-bold text-[#1A1A1A]">{row.tool}</td>
                                        <td className="p-3 text-center text-[#3A3A3A]">{row.price}</td>
                                        <td className="p-3 text-center font-mono text-rose-600">{row.annual}</td>
                                        <td className="p-3 text-center text-xs text-[#4A4A4A]">{row.complaint}</td>
                                    </tr>
                                ))}
                                <tr className="bg-emerald-50">
                                    <td className="p-3 font-bold text-emerald-800">Governance Module</td>
                                    <td className="p-3 text-center font-bold text-emerald-700">$99 one-time</td>
                                    <td className="p-3 text-center font-mono font-bold text-emerald-700">$99 total</td>
                                    <td className="p-3 text-center text-xs text-emerald-600">Deploys in 15 minutes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-zinc-500 mt-2">Prices based on publicly available data as of May 2026. Enterprise tiers include mandatory platform fees where applicable.</p>
                </div>

                {/* Top User Complaints */}
                <div className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Top User Complaints (From G2, Reddit, Trustpilot)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { tool: 'GitHub Copilot', complaints: ['Model carousel regressions', 'PR ads trust violation', 'Aggressive rate limiting', 'Speculative code suggestions', 'Surprise billing'], href: '/compare/github-copilot-problems', color: 'border-rose-200 bg-rose-50' },
                            { tool: 'Cursor', complaints: ['Credit anxiety & overages', 'File rewriting without permission', '.cursorrules ignored', 'Crashes on large codebases', 'Black box code generation'], href: '/compare/cursor-problems', color: 'border-purple-200 bg-purple-50' },
                            { tool: 'Windsurf', complaints: ['Pricing rug pull', 'Silent credit burn', 'Failed requests charge credits', 'Acquisition uncertainty', 'Hallucinations & context loss'], href: '/compare/windsurf-problems', color: 'border-cyan-200 bg-cyan-50' },
                        ].map(card => (
                            <Link key={card.tool} href={card.href} className={`rounded-2xl border p-5 ${card.color} hover:shadow-md transition-shadow block`}>
                                <h3 className="font-grotesk font-bold text-[#1A1A1A] mb-3">{card.tool}</h3>
                                <ul className="space-y-1">
                                    {card.complaints.map((c, i) => (
                                        <li key={i} className="text-xs text-[#4A4A4A] flex items-start gap-1.5">
                                            <AlertTriangle size={10} className="text-rose-400 mt-0.5 flex-shrink-0" /> {c}
                                        </li>
                                    ))}
                                </ul>
                                <span className="block mt-3 text-xs font-bold text-violet-700">Read full analysis →</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Which AI coding agent is safest?', a: 'None of them ship with runtime governance infrastructure by default. Claude Code has the most mature permission model (command approval prompts), but it lacks context rot prevention, retry inflation control, and financial circuit breakers. All agents require external governance deployment.' },
                            { q: 'Can I use governance skills with any agent?', a: 'Yes. The 15 governance modules on this site are designed for Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer, Devin, OpenHands, and SWE-Agent. Each includes a CLAUDE.md manifest, YAML policies, TypeScript middleware, and reusable bash tools.' },
                            { q: 'How does $99 one-time compare to $60/user/month?', a: 'A single governance module at $99 costs less than one month of Copilot Enterprise or Windsurf Enterprise — and it is a permanent deployment, not a recurring subscription. For a 10-person team on Copilot Enterprise, you would spend $7,200/year on the tool alone with zero governance. The full 15-module governance suite costs $1,485 total, one-time.' },
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

                {/* Hub Links */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-6 mb-12 shadow-sm">
                    <h2 className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest mb-4">Deep-Dive Analyses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { title: 'GitHub Copilot Problems 2026', href: '/compare/github-copilot-problems' },
                            { title: 'Cursor Problems 2026', href: '/compare/cursor-problems' },
                            { title: 'Windsurf Problems 2026', href: '/compare/windsurf-problems' },
                            { title: 'AI Guardrails Platform Comparison', href: '/compare/ai-guardrails-platforms' },
                            { title: 'Why Claude Loses Context', href: '/compare/why-claude-loses-context' },
                            { title: 'Why Retry Loops Happen', href: '/compare/why-retry-loops-happen' },
                            { title: 'Why Cursor Rewrites Files', href: '/compare/why-cursor-rewrites-files' },
                            { title: 'Why AI Coding Burns Money', href: '/compare/why-ai-coding-burns-money' },
                            { title: 'Why MCP Is Dangerous', href: '/compare/why-mcp-is-dangerous' },
                        ].map(link => (
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 bg-zinc-50 rounded-lg hover:bg-violet-50 transition-colors text-sm font-bold text-[#1A1A1A]">
                                <ArrowRight size={14} className="text-violet-600" /> {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="p-10 bg-[#1A1A1A] rounded-2xl text-zinc-900 text-center">
                    <h2 className="text-2xl font-grotesk font-bold mb-4">Deploy the governance layer these tools are missing.</h2>
                    <p className="text-zinc-600 mb-6">15 runtime infrastructure modules. Works with every agent. $99 each, one-time.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded hover:bg-zinc-100 transition-colors">
                            View All 15 Modules →
                        </Link>
                        <Link href="/runtime-architecture" className="px-8 py-4 text-zinc-900 font-bold rounded border border-zinc-300 hover:border-zinc-500 transition-colors">
                            Read the Architecture
                        </Link>
                    </div>
                
                    <AdvisoryCTA variant="compare" />
</div>

                <div className="sr-only" aria-hidden="true">
                    Claude Code vs Cursor 2026, Cursor vs Windsurf comparison, Claude Code vs Windsurf, GitHub Copilot vs Cursor 2026, best AI coding agent 2026, AI coding agent safety, Claude Code governance, Cursor governance, Windsurf runtime, Cline vs Roo Code, deterministic vs probabilistic coding agents, agentic safety comparison, AI agent runtime control, Copilot problems 2026, Cursor problems 2026, Windsurf problems 2026, AI coding agent pricing comparison, Tabnine review, AI guardrails pricing
                </div>
            </div>
        </main>
    );
}

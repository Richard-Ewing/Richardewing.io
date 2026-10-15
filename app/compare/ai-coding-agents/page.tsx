import { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { ShieldCheck, AlertTriangle, Check, X, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Claude Code vs Cursor vs Windsurf',
    description: 'Compare Claude Code, Cursor, and Windsurf on real pricing and failure modes. Audit token churn, context loss, and deterministic runtime guardrails.',
    keywords: ['Claude Code vs Cursor', 'Cursor vs Windsurf', 'Claude Code vs Windsurf', 'GitHub Copilot vs Cursor', 'AI coding agent comparison', 'AI coding agent pricing 2026', 'best AI coding agent 2026', 'Cursor problems', 'Copilot problems', 'Windsurf problems', 'AI coding agent complaints', 'Claude Code governance', 'Cursor governance', 'Windsurf safety', 'Cline vs Roo Code', 'deterministic vs probabilistic coding', 'AI agent runtime governance comparison', 'Tabnine vs Copilot'],
    openGraph: {
        title: 'Claude Code vs Cursor vs Windsurf 2026 - Pricing, Problems & Governance',
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
        <main className="min-h-screen bg-[var(--paper,#f4f1e9)] pt-32 pb-24 text-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 uppercase tracking-widest">
                    <Link href="/compare" className="hover:text-zinc-950 transition-colors">Compare</Link>
                    <span>/</span>
                    <span className="text-[var(--gold,#b77a35)] font-extrabold">Claude Code vs Cursor vs Windsurf</span>
                </div>

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[var(--gold,#b77a35)]/30 bg-[var(--card,#ffffff)] text-[var(--forest2,#162e26)] font-mono text-xs tracking-widest font-bold uppercase shadow-sm">
                        <ShieldCheck size={14} className="text-[var(--gold,#b77a35)]" /> Runtime Governance Comparison
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[var(--forest2,#162e26)] mb-6 tracking-tight">
                        Claude Code vs Cursor vs Windsurf
                    </h1>
                    <p className="text-lg text-zinc-800 max-w-2xl mx-auto font-medium">
                        Every major AI coding agent ships without runtime governance infrastructure.
                        This comparison shows exactly what's missing &ndash; and what you need to deploy.
                    </p>
                </div>

                {/* Agent Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12">
                    {agents.map(a => (
                        <div key={a.name} className="bg-[var(--card,#ffffff)] rounded-xl p-4 border border-[var(--line,#e2ded4)] text-center shadow-sm">
                            <div className="font-bold text-[var(--forest2,#162e26)] text-sm">{a.name}</div>
                            <div className="text-[10px] font-mono text-[var(--gold,#b77a35)] uppercase mt-1 font-bold">{a.type}</div>
                            <div className="text-[10px] text-zinc-600 mt-0.5">{a.maker}</div>
                        </div>
                    ))}
                </div>

                {/* Comparison Tables */}
                {features.map(section => (
                    <div key={section.category} className="mb-8">
                        <h2 className="text-lg font-serif font-bold text-[var(--forest2,#162e26)] mb-4 flex items-center gap-2">
                            <ShieldCheck size={18} className="text-[var(--gold,#b77a35)]" />
                            {section.category}
                        </h2>
                        <div className="bg-[var(--card,#ffffff)] rounded-xl border border-[var(--line,#e2ded4)] overflow-x-auto shadow-sm">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[var(--line,#e2ded4)] font-mono text-xs text-zinc-600 uppercase tracking-wider">
                                        <th className="text-left p-3 font-bold text-xs uppercase">Feature</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold bg-[var(--forest2,#162e26)]/10 text-[var(--forest2,#162e26)] border-x border-[var(--line,#e2ded4)]">Claude Code</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Cursor</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Windsurf</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Cline</th>
                                        <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Roo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.items.map(item => (
                                        <tr key={item.name} className="border-b border-[var(--line,#e2ded4)] hover:bg-[var(--paper,#f4f1e9)]/50 transition-colors">
                                            <td className="p-3 font-medium text-zinc-900">{item.name}</td>
                                            <td className="p-3 text-center bg-[var(--forest2,#162e26)]/[0.03] border-x border-[var(--line,#e2ded4)]"><StatusCell status={item.claude} /></td>
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
                <div className="my-12 p-8 bg-[var(--card,#ffffff)] border-l-4 border-[var(--gold,#b77a35)] rounded-2xl border border-[var(--line,#e2ded4)] shadow-sm">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="text-[var(--gold,#b77a35)] flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-serif font-bold text-[var(--forest2,#162e26)] text-lg mb-2">The Critical Gap</h3>
                            <p className="text-zinc-800 leading-relaxed font-medium">
                                No major AI coding agent ships with runtime governance infrastructure. Context rot prevention, retry inflation control, MCP isolation, repository drift detection, and financial circuit breakers are <strong>not built into any tool</strong>. This is the governance layer that must be deployed on top.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pricing Comparison */}
                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-[var(--forest2,#162e26)] mb-6">Enterprise Pricing Comparison (2026)</h2>
                    <div className="bg-[var(--card,#ffffff)] rounded-2xl border border-[var(--line,#e2ded4)] overflow-x-auto shadow-sm">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-[var(--line,#e2ded4)] font-mono text-xs text-zinc-600 uppercase tracking-wider">
                                    <th className="text-left p-3 text-xs uppercase font-bold">Tool</th>
                                    <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Enterprise Price</th>
                                    <th className="p-3 text-center text-xs uppercase font-bold text-zinc-700">Annual / User</th>
                                    <th className="p-3 text-center text-xs uppercase font-bold text-rose-700">Top Complaint</th>
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
                                    <tr key={row.tool} className="border-b border-[var(--line,#e2ded4)] hover:bg-[var(--paper,#f4f1e9)]/50 transition-colors">
                                        <td className="p-3 font-bold text-zinc-950">{row.tool}</td>
                                        <td className="p-3 text-center text-zinc-800">{row.price}</td>
                                        <td className="p-3 text-center font-mono text-rose-700 font-semibold">{row.annual}</td>
                                        <td className="p-3 text-center text-xs text-zinc-700">{row.complaint}</td>
                                    </tr>
                                ))}
                                <tr className="bg-[var(--forest2,#162e26)]/10">
                                    <td className="p-3 font-bold text-[var(--forest2,#162e26)]">Governance Module</td>
                                    <td className="p-3 text-center font-bold text-[var(--forest2,#162e26)]">$99 one-time</td>
                                    <td className="p-3 text-center font-mono font-bold text-[var(--forest2,#162e26)]">$99 total</td>
                                    <td className="p-3 text-center text-xs text-[var(--forest2,#162e26)] font-semibold">Deploys in 15 minutes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-zinc-600 mt-2 font-mono">Prices based on publicly available data as of May 2026. Enterprise tiers include mandatory platform fees where applicable.</p>
                </div>

                {/* Top User Complaints */}
                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-[var(--forest2,#162e26)] mb-6">Top User Complaints (From G2, Reddit, Trustpilot)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { tool: 'GitHub Copilot', complaints: ['Model carousel regressions', 'PR ads trust violation', 'Aggressive rate limiting', 'Speculative code suggestions', 'Surprise billing'], href: '/compare/github-copilot-problems' },
                            { tool: 'Cursor', complaints: ['Credit anxiety & overages', 'File rewriting without permission', '.cursorrules ignored', 'Crashes on large codebases', 'Black box code generation'], href: '/compare/cursor-problems' },
                            { tool: 'Windsurf', complaints: ['Pricing rug pull', 'Silent credit burn', 'Failed requests charge credits', 'Acquisition uncertainty', 'Hallucinations & context loss'], href: '/compare/windsurf-problems' },
                        ].map(card => (
                            <Link key={card.tool} href={card.href} className="rounded-2xl border border-[var(--line,#e2ded4)] bg-[var(--card,#ffffff)] p-5 hover:border-[var(--gold,#b77a35)] hover:shadow-md transition-all block">
                                <h3 className="font-serif font-bold text-[var(--forest2,#162e26)] mb-3">{card.tool}</h3>
                                <ul className="space-y-1">
                                    {card.complaints.map((c, i) => (
                                        <li key={i} className="text-xs text-zinc-700 flex items-start gap-1.5">
                                            <AlertTriangle size={10} className="text-amber-600 mt-0.5 flex-shrink-0" /> {c}
                                        </li>
                                    ))}
                                </ul>
                                <span className="block mt-3 text-xs font-bold font-mono uppercase tracking-wider text-[var(--gold,#b77a35)]">Read full analysis &rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-[var(--forest2,#162e26)] mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Which AI coding agent is safest?', a: 'None of them ship with runtime governance infrastructure by default. Claude Code has the most mature permission model (command approval prompts), but it lacks context rot prevention, retry inflation control, and financial circuit breakers. All agents require external governance deployment.' },
                            { q: 'Can I use governance skills with any agent?', a: 'Yes. The 15 governance modules on this site are designed for Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, Copilot, Gemini Code Assist, Amazon Q Developer, Devin, OpenHands, and SWE-Agent. Each includes a CLAUDE.md manifest, YAML policies, TypeScript middleware, and reusable bash tools.' },
                            { q: 'How does $99 one-time compare to $60/user/month?', a: 'A single governance module at $99 costs less than one month of Copilot Enterprise or Windsurf Enterprise &ndash; and it is a permanent deployment, not a recurring subscription. For a 10-person team on Copilot Enterprise, you would spend $7,200/year on the tool alone with zero governance. The full 15-module governance suite costs $1,485 total, one-time.' },
                            { q: 'What is runtime governance?', a: 'Runtime governance is the enforcement layer between the AI agent and your codebase. It intercepts agent actions, validates them against policy manifests, and halts execution when governance boundaries are violated. It prevents context rot, retry inflation, repository drift, and financial overruns.' },
                            { q: 'Why does Claude Code get worse after an hour?', a: 'Context rot. As the context window fills with stale assumptions, failed attempts, and correction history, the signal-to-noise ratio degrades until the agent is reasoning against its own historical errors. The Context Rot Prevention System deploys bounded cognition middleware to enforce checkpoint rotation before degradation occurs.' },
                        ].map(faq => (
                            <details key={faq.q} className="bg-[var(--card,#ffffff)] rounded-xl border border-[var(--line,#e2ded4)] p-5 shadow-sm">
                                <summary className="font-bold text-[var(--forest2,#162e26)] cursor-pointer">{faq.q}</summary>
                                <p className="mt-3 text-zinc-700 text-sm leading-relaxed font-medium">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Architectural Breakdown: Claude Code vs. Google Gemini Spark */}
                <div className="mb-12 bg-[var(--card,#ffffff)] rounded-2xl border border-[var(--line,#e2ded4)] p-6 sm:p-8 shadow-sm">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[var(--gold,#b77a35)]/30 bg-[var(--gold,#b77a35)]/10 text-[var(--forest2,#162e26)] font-mono text-xs font-bold uppercase tracking-widest">
                        Research Insight &bull; Built In Published Analysis
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-[var(--forest2,#162e26)] mb-4">
                        Claude Code vs. Google Gemini Spark: The Terminal vs. Cloud Paradigm Divergence
                    </h2>
                    <p className="text-zinc-800 leading-relaxed mb-6 font-medium">
                        In our published comparative analysis on Built In, we dissected the fundamental architectural divergence between Anthropic's Claude Code and Google's Gemini Spark. Claude Code is an interactive terminal agent: it prompts for confirmation on bash executions and diff mutations, giving engineers real-time supervisory oversight. Gemini Spark represents unattended, cloud-native persistence: running continuously in background developer environments to clear backlogs asynchronously.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 rounded-xl bg-[var(--paper,#f4f1e9)]/70 border border-[var(--line,#e2ded4)]">
                            <h3 className="font-serif font-bold text-[var(--forest2,#162e26)] mb-2">Claude Code: Terminal Interactive Oversight</h3>
                            <ul className="space-y-2 text-xs text-zinc-700">
                                <li>&bull; <strong>Execution Model:</strong> Local CLI session bound to developer terminal.</li>
                                <li>&bull; <strong>Supervision Vector:</strong> Real-time human approval before commands execute.</li>
                                <li>&bull; <strong>Drift Risk:</strong> Lower unintended repository drift due to continuous engineer presence.</li>
                                <li>&bull; <strong>Cognitive Bottleneck:</strong> The human engineer remains the operational constraint. Context rot accelerates over prolonged sessions.</li>
                            </ul>
                        </div>
                        <div className="p-5 rounded-xl bg-[var(--paper,#f4f1e9)]/70 border border-[var(--line,#e2ded4)]">
                            <h3 className="font-serif font-bold text-[var(--forest2,#162e26)] mb-2">Gemini Spark: Cloud Background Persistence</h3>
                            <ul className="space-y-2 text-xs text-zinc-700">
                                <li>&bull; <strong>Execution Model:</strong> Cloud-native background worker operating asynchronously.</li>
                                <li>&bull; <strong>Supervision Vector:</strong> Post-hoc PR review queues and batch artifact inspection.</li>
                                <li>&bull; <strong>Drift Risk:</strong> Higher cumulative drift if state contracts and authority boundaries are unmonitored.</li>
                                <li>&bull; <strong>Governance Requirement:</strong> Mandatory supervisory review queues and deterministic rollback logging before merge.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-[var(--line,#e2ded4)]">
                        <span className="text-xs text-zinc-600 font-mono">Published by Richard Ewing on Built In (September 2026)</span>
                        <div className="flex gap-4">
                            <Link href="/concepts/persistence-vs-authority" className="text-xs font-bold font-mono text-[var(--gold,#b77a35)] hover:underline">
                                Concept: Persistence vs Authority &rarr;
                            </Link>
                            <Link href="/concepts/supervisory-review-queue" className="text-xs font-bold font-mono text-[var(--gold,#b77a35)] hover:underline">
                                Concept: Supervisory Review Queue &rarr;
                            </Link>
                            <a href="https://builtin.com/articles/claude-code-vs-google-gemini-spark" target="_blank" rel="noopener noreferrer" className="text-xs font-bold font-mono text-[var(--forest2,#162e26)] hover:underline">
                                Read Built In Article &#x2197;
                            </a>
                        </div>
                    </div>
                </div>

                {/* Hub Links */}
                <div className="bg-[var(--card,#ffffff)] rounded-2xl border border-[var(--line,#e2ded4)] p-6 mb-12 shadow-sm">
                    <h2 className="text-xs font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-4">Deep-Dive Analyses</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { title: 'Things I Got Wrong: Founder Post-Mortem', href: 'https://www.linkedin.com/pulse/things-i-got-wrong-founders-post-mortem-building-ai-products-ewing-gr10c/' },
                            { title: 'Claude Code vs Google Gemini Spark', href: 'https://builtin.com/articles/claude-code-vs-google-gemini-spark' },
                            { title: 'The AI Agent To-Do List', href: 'https://builtin.com/articles/ai-agents-to-do-list' },
                            { title: 'Company Owns the Agent Risk (CIO.com)', href: 'https://www.cio.com/article/4223955/your-ai-agent-may-have-made-the-decision-but-your-company-owns-the-risk.html' },
                            { title: 'Frontier Model Economics', href: 'https://builtin.com/articles/frontier-model' },
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
                            <Link key={link.href} href={link.href} className="flex items-center gap-2 p-3 bg-[var(--paper,#f4f1e9)]/60 border border-[var(--line,#e2ded4)] rounded-lg hover:border-[var(--gold,#b77a35)] transition-colors text-sm font-medium text-zinc-900">
                                <ArrowRight size={14} className="text-[var(--gold,#b77a35)] shrink-0" /> {link.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="p-8 sm:p-12 bg-[var(--forest2,#162e26)] rounded-2xl text-[var(--paper,#f4f1e9)] text-center border border-[var(--gold,#b77a35)]/30 shadow-xl">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">Deploy the governance layer these tools are missing.</h2>
                    <p className="text-zinc-300 mb-6 max-w-xl mx-auto">15 runtime infrastructure modules. Works with every agent. $99 each, one-time.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link href="/skills" className="px-8 py-4 bg-[var(--gold,#b77a35)] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-[var(--gold,#b77a35)]/90 transition-colors shadow-sm">
                            View All 15 Modules &rarr;
                        </Link>
                        <Link href="/runtime-architecture" className="px-8 py-4 text-[var(--paper,#f4f1e9)] font-mono text-xs uppercase tracking-widest font-bold rounded-xl border border-[var(--gold,#b77a35)]/40 hover:bg-white/5 transition-colors">
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

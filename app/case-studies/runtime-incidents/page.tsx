import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, DollarSign, Clock, Shield, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Runtime Incident Reports | Real Agentic Failure Case Studies | Richard Ewing',
    description: 'Documented runtime incidents from Claude Code, Cursor, Windsurf, and agentic engineering systems. Real failures, real costs, real containment.',
    keywords: ['Claude Code failures', 'agentic runtime incidents', 'AI coding agent failures', 'context rot incident', 'retry inflation cost', 'MCP security breach', 'Cursor file corruption', 'AI agent cost overrun'],
    openGraph: {
        title: 'Runtime Incident Reports — Real Agentic Failures',
        description: 'Documented runtime incidents with telemetry, timelines, blast radius, and governance containment analysis.',
    },
    alternates: { canonical: 'https://richardewing.io/case-studies/runtime-incidents' },
};

const incidents = [
    {
        id: 'CRP-2024-001',
        title: 'The $1,100 Overnight Token Burn',
        system: 'Claude Code',
        layer: 'Environment Governance',
        skill: 'AI Cost Containment',
        skillSlug: 'ai-cost-containment',
        timeline: '11:47 PM — 6:23 AM (6h 36m unattended)',
        blastRadius: '$1,147 in API tokens consumed. Zero usable output.',
        rootCause: 'Agent entered recursive retry loop on a failing test. No financial circuit breaker. No unattended execution limits. Agent burned through context window 14 times, each time restarting from scratch.',
        telemetry: { tokensConsumed: '4.2M', costUsd: '$1,147', retriesDetected: 89, usableOutput: '0 lines shipped' },
        containment: 'AI Cost Containment System would have halted execution at $25 budget cap (97.8% savings). Unattended timeout would have triggered at 30 minutes.',
        color: 'rose',
    },
    {
        id: 'CRP-2024-002',
        title: 'The 47-File Cursor Rewrite',
        system: 'Cursor',
        layer: 'Environment Governance',
        skill: 'Repository Drift Prevention',
        skillSlug: 'repository-drift-prevention',
        timeline: '2:15 PM — 2:52 PM (37 minutes)',
        blastRadius: '47 files modified. 12 new phantom dependencies introduced. 3 config files overwritten.',
        rootCause: 'Agent was asked to refactor a single utility function. Without scope enforcement, it followed import chains across the entire codebase, "fixing" each file it touched. Ghost dependencies imported from packages not in package.json.',
        telemetry: { filesModified: 47, phantomDeps: 12, configsOverwritten: 3, rollbackTime: '4.5 hours' },
        containment: 'Repository Drift Prevention would have blocked out-of-scope mutations at file 2. Import validator would have caught phantom dependencies immediately.',
        color: 'amber',
    },
    {
        id: 'CRP-2024-003',
        title: 'The .env Credential Leak via MCP',
        system: 'Claude Code + MCP',
        layer: 'Tool Governance',
        skill: 'MCP Governance',
        skillSlug: 'mcp-governance',
        timeline: '10:30 AM — 10:31 AM (instant)',
        blastRadius: 'AWS access keys, database credentials, and Stripe API keys exposed to third-party MCP server.',
        rootCause: 'Agent connected to an MCP tool server that requested file system access. Server read .env file containing production credentials. No context isolation. No capability manifest validation.',
        telemetry: { credentialsExposed: 5, serverVerification: 'None', contextIsolation: 'None', detectionTime: '3 days' },
        containment: 'MCP Governance System would have blocked .env access via file-guard, validated server against manifest, and enforced context isolation.',
        color: 'red',
    },
    {
        id: 'CRP-2024-004',
        title: 'The $890 Agreement Loop',
        system: 'Multi-Agent (CrewAI)',
        layer: 'Skill Governance',
        skill: 'Orchestration Entropy',
        skillSlug: 'orchestration-entropy',
        timeline: '9:00 AM — 3:15 PM (6h 15m)',
        blastRadius: '$890 in compute. 340 turns of agents agreeing with each other. Zero tool invocations. Zero code produced.',
        rootCause: 'Three agents entered an agreement loop — each validating the previous agent\'s output without performing any actual work. No turn limit. No tool-invocation requirement. No agreement loop detection.',
        telemetry: { totalTurns: 340, toolInvocations: 0, costUsd: '$890', codeProduced: '0 lines' },
        containment: 'Orchestration Entropy System would have detected the agreement loop at turn 10 and halted the workflow (99% cost prevention).',
        color: 'purple',
    },
    {
        id: 'CRP-2024-005',
        title: 'The Rubber-Stamp PR Avalanche',
        system: 'Cursor + GitHub',
        layer: 'Skill Governance',
        skill: 'Verification Burden Collapse',
        skillSlug: 'verification-burden-collapse',
        timeline: 'Sprint duration (2 weeks)',
        blastRadius: '34 AI-generated PRs merged with <2 min review. 8 contained bugs. 3 reached production. 1 caused a customer-facing outage.',
        rootCause: 'AI code generation volume exceeded team review capacity. Engineers began rubber-stamping PRs to clear the queue. No confidence scoring. No review timer. No burnout detection.',
        telemetry: { prsSubmitted: 34, avgReviewTime: '1.8 min', bugsShipped: 8, productionIncidents: 1 },
        containment: 'Verification Burden Collapse Prevention would have flagged rubber-stamp reviews, throttled AI generation when queue exceeded 8 PRs, and routed low-confidence code to deep review.',
        color: 'orange',
    },
    {
        id: 'CRP-2024-006',
        title: 'Context Rot: Agent Forgot Its Own Architecture',
        system: 'Claude Code',
        layer: 'Skill Governance',
        skill: 'Context Rot Prevention',
        skillSlug: 'context-rot-prevention',
        timeline: '10:00 AM — 1:45 PM (3h 45m)',
        blastRadius: '23 files corrupted with contradictory implementations. Agent began patching its own patches. 6 hours remediation.',
        rootCause: 'After 90 minutes, the agent\'s context window filled. Original architecture instructions were pushed out. Agent continued generating code that contradicted the initial design, then tried to "fix" the contradictions by patching files it had just modified.',
        telemetry: { sessionDuration: '225 min', filesCorrupted: 23, patchChainDepth: 7, remediationHours: 6 },
        containment: 'Context Rot Prevention would have triggered checkpoint rotation at 65% utilization and mandatory semantic reset at 85%. Patch chain detector would have halted at depth 3.',
        color: 'blue',
    },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    rose: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
};

export default function RuntimeIncidentsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <AlertTriangle size={14} /> Runtime Incident Reports
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Real Agentic Failures.<br />Real Costs. Real Containment.
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Documented runtime incidents from Claude Code, Cursor, Windsurf, and multi-agent systems.
                        Each incident maps to the governance system that would have prevented it.
                    </p>
                </div>

                <div className="space-y-8">
                    {incidents.map((inc) => {
                        const c = colorClasses[inc.color] || colorClasses.rose;
                        return (
                            <div key={inc.id} className={`bg-white rounded-2xl border ${c.border} shadow-sm overflow-hidden`}>
                                <div className={`${c.bg} p-6 border-b ${c.border}`}>
                                    <div className="flex items-start justify-between gap-4 flex-wrap">
                                        <div>
                                            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${c.text}`}>{inc.id} — {inc.system}</span>
                                            <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mt-1">{inc.title}</h2>
                                        </div>
                                        <span className="px-3 py-1 bg-white rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-[rgba(0,0,0,0.1)]">
                                            {inc.layer}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-rose-700 mb-2 border-b border-rose-100 pb-1">
                                                <Clock className="w-3 h-3 inline mr-1" />Timeline
                                            </span>
                                            <p className="text-sm text-[#3A3A3A] font-medium">{inc.timeline}</p>
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold uppercase tracking-widest text-rose-700 mb-2 border-b border-rose-100 pb-1">
                                                <AlertTriangle className="w-3 h-3 inline mr-1" />Blast Radius
                                            </span>
                                            <p className="text-sm text-[#3A3A3A] font-bold">{inc.blastRadius}</p>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <span className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2 border-b border-zinc-100 pb-1">Root Cause</span>
                                        <p className="text-sm text-[#4A4A4A] leading-relaxed">{inc.rootCause}</p>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                        {Object.entries(inc.telemetry).map(([key, val]) => (
                                            <div key={key} className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 text-center">
                                                <div className="text-lg font-bold text-[#1A1A1A]">{String(val)}</div>
                                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                        <span className="block text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">
                                            <Shield className="w-3 h-3 inline mr-1" />Governance Containment
                                        </span>
                                        <p className="text-sm text-emerald-800 font-medium">{inc.containment}</p>
                                        <Link href={`/skills/${inc.skillSlug}`} className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-emerald-700 hover:text-emerald-900 uppercase tracking-widest">
                                            Deploy {inc.skill} <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 p-10 bg-[#1A1A1A] rounded-2xl text-white text-center">
                    <h2 className="text-2xl font-grotesk font-bold mb-4">Every incident above was preventable.</h2>
                    <p className="text-zinc-400 mb-6">Deploy runtime governance infrastructure to contain these failures before they occur.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded hover:bg-zinc-100 transition-colors">
                            View All 15 Runtime Modules →
                        </Link>
                        <Link href="/runtime-architecture" className="px-8 py-4 text-white font-bold rounded border border-zinc-700 hover:border-zinc-500 transition-colors">
                            Read the Architecture Doctrine
                        </Link>
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    Claude Code failure, Cursor rewrite incident, MCP credential leak, retry inflation cost, agreement loop multi-agent, rubber stamp PR, context rot incident, AI agent cost overrun, runtime governance incident report
                </div>

                <div className="mt-8 text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Marketplace</Link>
                </div>
            </div>
        </main>
    );
}

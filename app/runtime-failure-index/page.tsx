import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, TrendingUp, DollarSign, Shield, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Runtime Failure Index | Agentic Failure Database & Risk Rankings | Richard Ewing',
    description: 'The canonical runtime failure index for AI coding agents. Ranked by frequency, cost, and blast radius. Context rot, retry inflation, MCP leaks, orchestration collapse, and 15+ documented failure modes.',
    keywords: ['AI agent failures', 'Claude Code failure modes', 'runtime failure index', 'agentic failure database', 'AI coding agent risks', 'context rot frequency', 'retry inflation cost', 'MCP security breach', 'AI governance failure taxonomy', 'most common AI coding failures'],
    openGraph: {
        title: 'Runtime Failure Index — The Canonical Agentic Failure Database',
        description: 'Ranked failure modes for AI coding agents: frequency, cost, blast radius, and governance containment mapping.',
    },
    alternates: { canonical: 'https://richardewing.io/runtime-failure-index' },
};

const failureIndex = [
    { rank: 1, name: 'Context Rot', frequency: 'Very High', avgCost: '$80-$340/incident', blastRadius: '23 files avg', trend: '↑ Growing', agents: 'All agents', riskScore: 98, module: 'Context Rot Prevention', slug: 'context-rot-prevention', category: 'Cognition' },
    { rank: 2, name: 'Retry Inflation', frequency: 'Very High', avgCost: '$25-$1,100/incident', blastRadius: 'Session-wide', trend: '↑ Growing', agents: 'All agents', riskScore: 96, module: 'Retry Inflation Control', slug: 'retry-inflation-control', category: 'Economics' },
    { rank: 3, name: 'Repository Drift', frequency: 'High', avgCost: '$200-$2,000/incident', blastRadius: '47-94 files', trend: '↑ Growing', agents: 'Cursor, Windsurf', riskScore: 94, module: 'Repository Drift Prevention', slug: 'repository-drift-prevention', category: 'Environment' },
    { rank: 4, name: 'Identity Drift', frequency: 'Very High', avgCost: '$50-$200/incident', blastRadius: '18 files avg', trend: '→ Stable', agents: 'All agents', riskScore: 90, module: 'Deterministic Agentic Engineering', slug: 'deterministic-agentic-engineering', category: 'Identity' },
    { rank: 5, name: 'MCP Credential Exposure', frequency: 'Medium', avgCost: '$5K-$500K/breach', blastRadius: 'Critical (security)', trend: '↑ Growing rapidly', agents: 'Claude Code, Cline', riskScore: 92, module: 'MCP Governance', slug: 'mcp-governance', category: 'Security' },
    { rank: 6, name: 'Tool Permission Leak', frequency: 'Medium', avgCost: '$500-$10K/incident', blastRadius: '47 files avg', trend: '↑ Growing', agents: 'Windsurf, Roo Code', riskScore: 88, module: 'Tool Permission Governance', slug: 'tool-permission-governance', category: 'Security' },
    { rank: 7, name: 'Verification Bypass', frequency: 'High', avgCost: '$50K-$200K/quarter', blastRadius: 'Production outages', trend: '↑ Growing', agents: 'All agents', riskScore: 86, module: 'Verification Burden Collapse', slug: 'verification-burden-collapse', category: 'Quality' },
    { rank: 8, name: 'Orchestration Collapse', frequency: 'Medium', avgCost: '$100-$890/incident', blastRadius: 'Workflow-wide', trend: '↑ Growing', agents: 'Multi-agent', riskScore: 82, module: 'Orchestration Entropy', slug: 'orchestration-entropy', category: 'Architecture' },
    { rank: 9, name: 'Hallucination Debt', frequency: 'High', avgCost: '$100-$500/incident', blastRadius: '400 lines avg', trend: '→ Stable', agents: 'Codex, Claude Code', riskScore: 80, module: 'Hallucination Debt Reduction', slug: 'hallucination-debt-reduction', category: 'Quality' },
    { rank: 10, name: 'Context Window Overflow', frequency: 'Very High', avgCost: '$30-$150/incident', blastRadius: 'Session-wide', trend: '→ Stable', agents: 'All agents', riskScore: 78, module: 'Context Window Compression', slug: 'context-window-compression', category: 'Cognition' },
    { rank: 11, name: 'Token Cost Overrun', frequency: 'High', avgCost: '$100-$1,100/incident', blastRadius: 'Financial', trend: '↑ Growing', agents: 'All agents', riskScore: 85, module: 'AI Cost Containment', slug: 'ai-cost-containment', category: 'Economics' },
    { rank: 12, name: 'Scope Creep Mutation', frequency: 'High', avgCost: '$200-$1,000/incident', blastRadius: '30-94 files', trend: '→ Stable', agents: 'Cursor, Claude Code', riskScore: 76, module: 'Agentic Change Management', slug: 'agentic-change-management', category: 'Environment' },
    { rank: 13, name: 'Autonomous Execution Risk', frequency: 'Medium', avgCost: '$500-$5K/incident', blastRadius: 'System-wide', trend: '↑ Growing rapidly', agents: 'All agents', riskScore: 84, module: 'Autonomous Execution Safety', slug: 'autonomous-execution-safety', category: 'Security' },
    { rank: 14, name: 'Governance Theater', frequency: 'Very High', avgCost: 'Unquantified', blastRadius: 'Organizational', trend: '→ Stable', agents: 'All agents', riskScore: 74, module: 'Runtime Governance', slug: 'runtime-governance', category: 'Architecture' },
    { rank: 15, name: 'Engineering Economics Collapse', frequency: 'High', avgCost: '$135K/quarter', blastRadius: 'Team-wide', trend: '↑ Growing', agents: 'Enterprise-scale', riskScore: 88, module: 'AI Engineering Economics', slug: 'ai-engineering-economics', category: 'Economics' },
];

const categoryColors: Record<string, string> = {
    Cognition: 'bg-blue-100 text-blue-700',
    Economics: 'bg-amber-100 text-amber-700',
    Environment: 'bg-emerald-100 text-emerald-700',
    Identity: 'bg-violet-100 text-violet-700',
    Security: 'bg-rose-100 text-rose-700',
    Quality: 'bg-orange-100 text-orange-700',
    Architecture: 'bg-cyan-100 text-cyan-700',
};

const topStats = [
    { label: 'Most Common', value: 'Context Rot', sub: 'Affects virtually all sessions > 60 min' },
    { label: 'Most Expensive', value: '$1,100 single session', sub: 'Overnight retry inflation burn' },
    { label: 'Fastest Growing', value: 'MCP Credential Leaks', sub: 'MCP adoption scaling without governance' },
    { label: 'Highest Blast Radius', value: 'Repository Drift', sub: '94 files modified in one incident' },
    { label: 'Most Underestimated', value: 'Governance Theater', sub: 'System prompts ≠ deterministic governance' },
    { label: 'Largest Organizational Cost', value: '$135K/quarter', sub: 'AI tools net-negative at enterprise scale' },
];

export default function RuntimeFailureIndexPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <BarChart3 size={14} /> Failure Intelligence
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Runtime Failure Index
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
                        The canonical taxonomy of agentic runtime failures. 15 documented failure modes ranked by frequency, cost, blast radius, and trend direction.
                        Each failure maps to a deployable governance containment module.
                    </p>
                </div>

                {/* Top Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                    {topStats.map((s, i) => (
                        <div key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-4 shadow-sm">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-rose-600">{s.label}</span>
                            <div className="text-lg font-bold text-[#1A1A1A] mt-1">{s.value}</div>
                            <div className="text-xs text-zinc-500 mt-1">{s.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Main Index Table */}
                <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm overflow-hidden mb-12">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-200">
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">#</th>
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Failure Mode</th>
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Category</th>
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Frequency</th>
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Avg Cost</th>
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Trend</th>
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Risk</th>
                                    <th className="px-4 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Module</th>
                                </tr>
                            </thead>
                            <tbody>
                                {failureIndex.map((f) => (
                                    <tr key={f.rank} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                                        <td className="px-4 py-3 text-sm font-bold text-zinc-400">{f.rank}</td>
                                        <td className="px-4 py-3">
                                            <div className="text-sm font-bold text-[#1A1A1A]">{f.name}</div>
                                            <div className="text-[10px] text-zinc-500">{f.agents}</div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${categoryColors[f.category]}`}>{f.category}</span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-[#3A3A3A]">{f.frequency}</td>
                                        <td className="px-4 py-3 text-sm font-bold text-rose-600">{f.avgCost}</td>
                                        <td className="px-4 py-3">
                                            <span className={`text-xs font-bold ${f.trend.includes('↑') ? 'text-rose-600' : 'text-zinc-500'}`}>{f.trend}</span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-12 bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                                    <div className={`h-full rounded-full ${f.riskScore >= 90 ? 'bg-rose-500' : f.riskScore >= 80 ? 'bg-orange-500' : 'bg-yellow-500'}`} style={{ width: `${f.riskScore}%` }} />
                                                </div>
                                                <span className="text-xs font-mono text-zinc-500">{f.riskScore}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <Link href={`/skills/${f.slug}`} className="text-xs font-bold text-violet-700 hover:text-violet-900 whitespace-nowrap">
                                                {f.module} →
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Category Breakdown */}
                <div className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Failure Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {Object.entries(
                            failureIndex.reduce((acc, f) => { acc[f.category] = (acc[f.category] || 0) + 1; return acc; }, {} as Record<string, number>)
                        ).map(([cat, count]) => (
                            <div key={cat} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-4 text-center shadow-sm">
                                <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase mb-2 ${categoryColors[cat]}`}>{cat}</span>
                                <div className="text-2xl font-bold text-[#1A1A1A]">{count}</div>
                                <div className="text-xs text-zinc-500">failure modes</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Findings */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-12 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-6">Key Findings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">No agent ships runtime governance</h3>
                                    <p className="text-xs text-zinc-500">Claude Code, Cursor, Windsurf, Cline, Roo Code, and Codex all lack deterministic governance enforcement.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <TrendingUp className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">MCP risks are scaling fastest</h3>
                                    <p className="text-xs text-zinc-500">As MCP adoption increases, credential exposure and supply chain risks grow proportionally without governance.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <DollarSign className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">AI agents are frequently net-negative</h3>
                                    <p className="text-xs text-zinc-500">Documented enterprise deployments show remediation costs exceeding productivity gains without governance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">Governance reduces costs by 60-93%</h3>
                                    <p className="text-xs text-zinc-500">Documented containment across all 15 failure modes shows consistent 60-93% cost reduction when governance is deployed.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">System prompts are not governance</h3>
                                    <p className="text-xs text-zinc-500">Text-based instructions in CLAUDE.md/.cursorrules are routinely bypassed under context pressure. Only middleware enforcement is deterministic.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="text-sm font-bold text-[#1A1A1A]">The 4-layer model contains all failures</h3>
                                    <p className="text-xs text-zinc-500">Every documented failure maps to Identity, Skill, Tool, or Environment governance — confirming the runtime architecture is complete.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cross-links (Hub and Spoke) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <Link href="/case-studies/runtime-incidents" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-rose-200 transition-colors group">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-600">Incident Reports</span>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-rose-700 transition-colors">15 Documented Incidents →</h3>
                        <p className="text-xs text-zinc-500 mt-1">Full timelines, telemetry, and containment analysis</p>
                    </Link>
                    <Link href="/telemetry" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-emerald-200 transition-colors group">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">Telemetry</span>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-emerald-700 transition-colors">Governance Metrics →</h3>
                        <p className="text-xs text-zinc-500 mt-1">Before/after governance impact data</p>
                    </Link>
                    <Link href="/executive-briefing" className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm hover:border-violet-200 transition-colors group">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600">Executive</span>
                        <h3 className="text-lg font-bold text-[#1A1A1A] mt-2 group-hover:text-violet-700 transition-colors">Board-Ready Briefing →</h3>
                        <p className="text-xs text-zinc-500 mt-1">Maturity model, risk matrix, ROI analysis</p>
                    </Link>
                </div>

                {/* CTA */}
                <div className="p-10 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm text-center">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">Deploy Containment for Any Failure Mode</h2>
                    <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                        Every failure in this index maps to a deployable runtime infrastructure module with TypeScript middleware, YAML policy manifests, and operational tooling.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                            View All 15 Runtime Modules →
                        </Link>
                        <Link href="/diagrams" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                            View Architecture Diagrams
                        </Link>
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    runtime failure index, AI agent failure database, Claude Code failure modes, agentic failure taxonomy, context rot frequency, retry inflation cost data, MCP security breach risk, orchestration collapse pattern, AI governance failure ranking, most common AI coding failures, most expensive AI coding failures, AI agent risk assessment
                </div>

                <div className="mt-8 text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">← Return to Infrastructure Catalog</Link>
                </div>
            </div>
        </main>
    );
}

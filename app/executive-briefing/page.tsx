import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, AlertTriangle, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Executive AI Briefing | Board-Ready Intelligence',
    description: 'Monthly intelligence on AI governance, engineering economics, and operational risk. Written for executives who buy outcomes.',
    keywords: ['AI governance executive briefing', 'AI risk matrix', 'AI governance maturity model', 'AI coding agent ROI', 'engineering leadership AI governance', 'CTO AI governance', 'board AI risk', 'AI governance scorecard'],
    openGraph: {
        title: 'Executive Briefing — AI Governance for Engineering Leadership',
        description: 'Board-ready governance assessment: maturity model, risk matrix, and ROI analysis for AI coding agent deployment.',
    },
    alternates: { canonical: 'https://www.richardewing.io/executive-briefing' },
};

const maturityLevels = [
    { level: 1, name: 'Ad Hoc', description: 'No governance. Agents run unrestricted. Failures are discovered after damage.', risk: 'Critical', color: 'bg-rose-100 text-rose-800 border-rose-200', indicators: ['No system prompts', 'No cost limits', 'No approval gates', 'No audit trail'] },
    { level: 2, name: 'Reactive', description: 'System prompts only. Governance is text-based and routinely bypassed under context pressure.', risk: 'High', color: 'bg-orange-100 text-orange-800 border-orange-200', indicators: ['CLAUDE.md / .cursorrules', 'Manual review', 'No automated enforcement', 'No telemetry'] },
    { level: 3, name: 'Structured', description: 'YAML policies + middleware. Some automated enforcement but not comprehensive.', risk: 'Medium', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', indicators: ['Policy-as-code', 'Some automated gates', 'Basic cost limits', 'Partial audit trail'] },
    { level: 4, name: 'Governed', description: 'Full runtime governance across all 4 layers. Deterministic enforcement with telemetry.', risk: 'Low', color: 'bg-emerald-100 text-emerald-800 border-emerald-200', indicators: ['4-layer governance', 'Automated enforcement', 'Financial circuit breakers', 'Full audit trail'] },
    { level: 5, name: 'Institutional', description: 'Self-healing governance with adaptive thresholds, automatic remediation, and organizational learning.', risk: 'Minimal', color: 'bg-cyan-100 text-cyan-800 border-cyan-200', indicators: ['Adaptive thresholds', 'Auto-remediation', 'Cross-team telemetry', 'Governance evolution'] },
];

const riskMatrix = [
    { failure: 'Context Rot', likelihood: 'Very High', impact: 'High', score: 'CRITICAL', module: 'Context Rot Prevention', slug: 'context-rot-prevention' },
    { failure: 'Retry Inflation', likelihood: 'Very High', impact: 'High', score: 'CRITICAL', module: 'Retry Inflation Control', slug: 'retry-inflation-control' },
    { failure: 'Repository Drift', likelihood: 'High', impact: 'Very High', score: 'CRITICAL', module: 'Repository Drift Prevention', slug: 'repository-drift-prevention' },
    { failure: 'MCP Credential Leak', likelihood: 'Medium', impact: 'Severe', score: 'CRITICAL', module: 'MCP Governance', slug: 'mcp-governance' },
    { failure: 'Token Cost Overrun', likelihood: 'High', impact: 'High', score: 'HIGH', module: 'AI Cost Containment', slug: 'ai-cost-containment' },
    { failure: 'Orchestration Collapse', likelihood: 'Medium', impact: 'High', score: 'HIGH', module: 'Orchestration Entropy', slug: 'orchestration-entropy' },
    { failure: 'Verification Bypass', likelihood: 'High', impact: 'Medium', score: 'HIGH', module: 'Verification Burden Collapse', slug: 'verification-burden-collapse' },
    { failure: 'Tool Permission Leak', likelihood: 'Medium', impact: 'Very High', score: 'HIGH', module: 'Tool Permission Governance', slug: 'tool-permission-governance' },
    { failure: 'Identity Drift', likelihood: 'Very High', impact: 'Medium', score: 'MEDIUM', module: 'Deterministic Agentic Engineering', slug: 'deterministic-agentic-engineering' },
    { failure: 'Hallucinated Dependencies', likelihood: 'Medium', impact: 'Medium', score: 'MEDIUM', module: 'Hallucination Debt Reduction', slug: 'hallucination-debt-reduction' },
];

const scorecardItems = [
    { category: 'Identity Governance', question: 'Are agent mission, principles, and boundaries defined in policy-as-code?', weight: 'High' },
    { category: 'Skill Governance', question: 'Are operational procedures codified with automated enforcement?', weight: 'High' },
    { category: 'Tool Governance', question: 'Are tool permissions scoped with approval gates for destructive operations?', weight: 'Critical' },
    { category: 'Environment Governance', question: 'Are file paths restricted, context windows monitored, and costs capped?', weight: 'Critical' },
    { category: 'Financial Controls', question: 'Are per-task and per-session budget limits enforced automatically?', weight: 'High' },
    { category: 'Audit Trail', question: 'Is every agent action logged with rollback capability?', weight: 'Medium' },
    { category: 'Human Escalation', question: 'Do agents automatically escalate when thresholds are exceeded?', weight: 'High' },
    { category: 'Verification Pipeline', question: 'Is AI-generated code confidence-scored before human review?', weight: 'Medium' },
];

const scoreColors: Record<string, string> = {
    CRITICAL: 'bg-rose-100 text-rose-700',
    HIGH: 'bg-orange-100 text-orange-700',
    MEDIUM: 'bg-yellow-100 text-yellow-700',
};

export default function ExecutiveBriefingPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        Executive Briefing
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        AI Governance for Engineering Leadership
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
                        Board-ready assessment framework for AI coding agent governance.
                        Maturity model, risk matrix, governance scorecard, and ROI analysis.
                    </p>
                </div>

                {/* Section 1: Maturity Model */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">AI Governance Maturity Model</h2>
                    <p className="text-[#4A4A4A] mb-8">Five levels of governance maturity. Most engineering organizations are at Level 1 or 2. The infrastructure on this platform enables immediate elevation to Level 4.</p>
                    <div className="space-y-4">
                        {maturityLevels.map((lvl) => (
                            <div key={lvl.level} className={`rounded-xl border p-6 ${lvl.color}`}>
                                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                                    <div>
                                        <span className="text-xs font-mono font-bold uppercase tracking-widest">Level {lvl.level}</span>
                                        <h3 className="text-xl font-grotesk font-bold">{lvl.name}</h3>
                                    </div>
                                    <span className="px-3 py-1 bg-white/60 rounded-full text-xs font-bold uppercase tracking-widest">
                                        Risk: {lvl.risk}
                                    </span>
                                </div>
                                <p className="text-sm mb-3">{lvl.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {lvl.indicators.map((ind, i) => (
                                        <span key={i} className="px-2 py-1 bg-white/50 rounded text-xs font-mono">{ind}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Risk Matrix */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Runtime Risk Matrix</h2>
                    <p className="text-[#4A4A4A] mb-8">Top 10 operational risks from deploying AI coding agents without governance, ordered by composite risk score.</p>
                    <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-zinc-50 border-b border-zinc-200">
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Failure Mode</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Likelihood</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Impact</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Risk Score</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Containment Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riskMatrix.map((row, i) => (
                                        <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-bold text-[#1A1A1A]">{row.failure}</td>
                                            <td className="px-6 py-4 text-sm text-[#3A3A3A]">{row.likelihood}</td>
                                            <td className="px-6 py-4 text-sm text-[#3A3A3A]">{row.impact}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${scoreColors[row.score]}`}>{row.score}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Link href={`/skills/${row.slug}`} className="text-sm font-bold text-violet-700 hover:text-violet-900">
                                                    {row.module} →
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Section 3: Governance Scorecard */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Governance Scorecard</h2>
                    <p className="text-[#4A4A4A] mb-8">Self-assessment checklist for evaluating your organization&apos;s current AI governance posture.</p>
                    <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm overflow-hidden">
                        {scorecardItems.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 border-b border-zinc-100 last:border-0">
                                <div className="w-6 h-6 rounded border-2 border-zinc-300 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600">{item.category}</span>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                            item.weight === 'Critical' ? 'bg-rose-100 text-rose-700' :
                                            item.weight === 'High' ? 'bg-orange-100 text-orange-700' :
                                            'bg-zinc-100 text-zinc-700'
                                        }`}>{item.weight}</span>
                                    </div>
                                    <p className="text-sm text-[#3A3A3A]">{item.question}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 4: ROI Summary */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Governance ROI Summary</h2>
                    <p className="text-[#4A4A4A] mb-8">Estimated annual impact for a team of 10 engineers using AI coding agents.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-8 text-center shadow-sm">
                            <DollarSign className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-rose-700 mb-1">$180K+</div>
                            <div className="text-sm text-[#4A4A4A] font-bold">Annual Cost Without Governance</div>
                            <p className="text-xs text-zinc-500 mt-2">Rework, retry inflation, broken deploys, remediation overhead</p>
                        </div>
                        <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-8 text-center shadow-sm">
                            <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-emerald-700 mb-1">$25K</div>
                            <div className="text-sm text-[#4A4A4A] font-bold">Annual Cost With Governance</div>
                            <p className="text-xs text-zinc-500 mt-2">Governance deployment + remaining operational overhead</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-8 text-center shadow-sm">
                            <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-emerald-700 mb-1">$155K</div>
                            <div className="text-sm text-emerald-800 font-bold">Annual Savings</div>
                            <p className="text-xs text-emerald-700 mt-2">86% reduction in operational waste</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="p-10 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm text-center">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">Ready to Deploy Governance?</h2>
                    <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                        Start with any module. Each includes TypeScript middleware, YAML policy manifests, operational tooling, and a step-by-step deployment guide.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                            View All 15 Runtime Modules →
                        </Link>
                        <Link href="/telemetry" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                            View Operational Telemetry
                        </Link>
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    AI governance executive briefing, CTO AI governance, board AI risk assessment, AI governance maturity model, runtime risk matrix, AI governance scorecard, AI coding agent ROI, engineering leadership AI, AI governance posture assessment
                </div>

                <div className="mt-8 text-center">
                    <Link href="/skills" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">
                        ← Return to Infrastructure Catalog
                    </Link>
                </div>
            </div>
        </main>
    );
}

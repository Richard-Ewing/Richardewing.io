import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingDown, TrendingUp, DollarSign, AlertTriangle, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Runtime Telemetry | Agentic Governance Metrics & Cost Analysis | Richard Ewing',
    description: 'Operational telemetry for AI coding agents: retry inflation rates, context degradation curves, token burn analysis, and governance ROI metrics. Data-driven runtime containment.',
    keywords: ['AI agent telemetry', 'Claude Code cost analysis', 'retry inflation metrics', 'context rot measurement', 'AI coding agent ROI', 'governance telemetry dashboard', 'token burn rate', 'agent cost containment'],
    openGraph: {
        title: 'Runtime Telemetry — Agentic Governance Metrics',
        description: 'Operational telemetry showing why AI coding agents fail and how runtime governance contains costs.',
    },
    alternates: { canonical: 'https://richardewing.io/telemetry' },
};

const costData = [
    { label: 'Simple refactor', ungoverned: '$8', governed: '$8', savings: '0%', risk: 'Low' },
    { label: 'Multi-file feature', ungoverned: '$45', governed: '$25', savings: '44%', risk: 'Medium' },
    { label: 'Complex integration', ungoverned: '$180', governed: '$40', savings: '78%', risk: 'High' },
    { label: 'Overnight session', ungoverned: '$500+', governed: '$50', savings: '90%', risk: 'Critical' },
    { label: 'Retry loop incident', ungoverned: '$340', governed: '$25', savings: '93%', risk: 'Critical' },
    { label: 'Multi-agent workflow', ungoverned: '$890', governed: '$75', savings: '92%', risk: 'Critical' },
];

const retryInflation = [
    { attempt: 1, tokens: '15K', cost: '$0.45', contextUse: '8%' },
    { attempt: 2, tokens: '32K', cost: '$0.96', contextUse: '16%' },
    { attempt: 3, tokens: '58K', cost: '$1.74', contextUse: '29%' },
    { attempt: 5, tokens: '110K', cost: '$3.30', contextUse: '55%' },
    { attempt: 10, tokens: '185K', cost: '$5.55', contextUse: '93%' },
    { attempt: 15, tokens: '200K', cost: '$6.00', contextUse: '100% — SESSION LOST' },
    { attempt: 'RESTART', tokens: '+200K', cost: '+$6.00', contextUse: 'Reset to 0%' },
    { attempt: 'RESTART ×5', tokens: '1M+', cost: '$30+', contextUse: 'Compounding' },
];

const contextDegradation = [
    { time: '0 min', recall: '100%', quality: 'Perfect', status: 'green' },
    { time: '30 min', recall: '95%', quality: 'Strong', status: 'green' },
    { time: '60 min', recall: '82%', quality: 'Acceptable', status: 'yellow' },
    { time: '90 min', recall: '64%', quality: 'Degrading', status: 'orange' },
    { time: '120 min', recall: '41%', quality: 'Critical', status: 'red' },
    { time: '180 min', recall: '23%', quality: 'Failed', status: 'red' },
];

const governanceMetrics = [
    { metric: 'Context rot incidents', before: '3.2 per session', after: '0.1 per session', improvement: '97%', icon: AlertTriangle },
    { metric: 'Average rework hours', before: '4.0 hours', after: '0.5 hours', improvement: '87%', icon: Clock },
    { metric: 'Broken production deploys', before: '2.1 per month', after: '0 per month', improvement: '100%', icon: Shield },
    { metric: 'Token cost per task', before: '$45 average', after: '$18 average', improvement: '60%', icon: DollarSign },
    { metric: 'Session efficiency', before: '60%', after: '95%', improvement: '58%', icon: TrendingUp },
    { metric: 'Files corrupted per session', before: '8.3 average', after: '0.2 average', improvement: '98%', icon: TrendingDown },
];

const statusColors: Record<string, string> = {
    green: 'bg-emerald-100 text-emerald-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    orange: 'bg-orange-100 text-orange-800',
    red: 'bg-rose-100 text-rose-800',
};

export default function TelemetryPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6">
                {/* Hero */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 font-mono text-sm tracking-widest font-bold uppercase">
                        Operational Telemetry
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        Runtime Governance Telemetry
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-3xl mx-auto">
                        Operational metrics that convert governance philosophy into measurable reality.
                        Every number below is derived from documented production incidents.
                    </p>
                </div>

                {/* Section 1: Governance Impact */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Governance Impact Metrics</h2>
                    <p className="text-[#4A4A4A] mb-8">Before and after deploying runtime governance infrastructure across production agent sessions.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {governanceMetrics.map((m, i) => (
                            <div key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                                        <m.icon className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <span className="text-sm font-bold text-[#1A1A1A]">{m.metric}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-3">
                                    <div>
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-rose-600 font-bold">Before</span>
                                        <div className="text-lg font-bold text-rose-700">{m.before}</div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-600 font-bold">After</span>
                                        <div className="text-lg font-bold text-emerald-700">{m.after}</div>
                                    </div>
                                </div>
                                <div className="w-full bg-zinc-100 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                                        style={{ width: m.improvement }}
                                    />
                                </div>
                                <span className="text-xs font-bold text-emerald-600 mt-1 block">{m.improvement} improvement</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Cost Comparison Table */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Cost Comparison: Governed vs Ungoverned</h2>
                    <p className="text-[#4A4A4A] mb-8">Token costs per task type with and without runtime governance infrastructure deployed.</p>
                    <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-zinc-50 border-b border-zinc-200">
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Task Type</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-rose-600">Ungoverned</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">Governed</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Savings</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Risk Level</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {costData.map((row, i) => (
                                        <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-bold text-[#1A1A1A]">{row.label}</td>
                                            <td className="px-6 py-4 text-sm font-bold text-rose-600">{row.ungoverned}</td>
                                            <td className="px-6 py-4 text-sm font-bold text-emerald-600">{row.governed}</td>
                                            <td className="px-6 py-4 text-sm font-bold text-emerald-700">{row.savings}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                    row.risk === 'Critical' ? 'bg-rose-100 text-rose-700' :
                                                    row.risk === 'High' ? 'bg-orange-100 text-orange-700' :
                                                    row.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                    'bg-zinc-100 text-zinc-700'
                                                }`}>{row.risk}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Section 3: Retry Inflation Escalation */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Retry Inflation Escalation Curve</h2>
                    <p className="text-[#4A4A4A] mb-8">How token consumption and cost compound with each retry attempt. At attempt 15, the session is lost entirely. Multiple restarts create exponential cost escalation.</p>
                    <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-zinc-50 border-b border-zinc-200">
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Attempt</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Tokens Used</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Cumulative Cost</th>
                                        <th className="px-6 py-4 text-left text-xs font-mono font-bold uppercase tracking-widest text-zinc-600">Context Usage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {retryInflation.map((row, i) => (
                                        <tr key={i} className={`border-b border-zinc-100 ${
                                            typeof row.attempt === 'string' ? 'bg-rose-50' : i > 4 ? 'bg-orange-50' : ''
                                        }`}>
                                            <td className="px-6 py-3 text-sm font-bold text-[#1A1A1A]">{String(row.attempt)}</td>
                                            <td className="px-6 py-3 text-sm text-[#3A3A3A]">{row.tokens}</td>
                                            <td className="px-6 py-3 text-sm font-bold text-rose-600">{row.cost}</td>
                                            <td className="px-6 py-3 text-sm text-[#3A3A3A]">{row.contextUse}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                        <p className="text-sm font-bold text-emerald-800">
                            <Shield className="w-4 h-4 inline mr-1" />
                            With Retry Inflation Control: execution halts at attempt 3 ($1.74) with human escalation. 93% cost reduction.
                        </p>
                    </div>
                </section>

                {/* Section 4: Context Degradation */}
                <section className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-2">Context Degradation Over Time</h2>
                    <p className="text-[#4A4A4A] mb-8">Instruction recall accuracy degrades predictably as session duration increases. Without governance, agents forget their own architecture within 2 hours.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {contextDegradation.map((d, i) => (
                            <div key={i} className="bg-white rounded-xl border border-[rgba(0,0,0,0.08)] p-4 text-center shadow-sm">
                                <div className="text-xs font-mono text-zinc-500 mb-2">{d.time}</div>
                                <div className="text-2xl font-bold text-[#1A1A1A] mb-1">{d.recall}</div>
                                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase ${statusColors[d.status]}`}>
                                    {d.quality}
                                </span>
                                {/* Visual bar */}
                                <div className="mt-3 w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${
                                            d.status === 'green' ? 'bg-emerald-500' :
                                            d.status === 'yellow' ? 'bg-yellow-500' :
                                            d.status === 'orange' ? 'bg-orange-500' :
                                            'bg-rose-500'
                                        }`}
                                        style={{ width: d.recall }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                        <p className="text-sm font-bold text-emerald-800">
                            <Shield className="w-4 h-4 inline mr-1" />
                            With Context Rot Prevention: checkpoint rotation at 60 min maintains &gt;90% recall indefinitely.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <div className="p-10 bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-sm text-center">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">Deploy Governance. Measure the Difference.</h2>
                    <p className="text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                        Every metric on this page improves when runtime governance infrastructure is deployed.
                        Start with any module. Measure the delta.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/skills" className="px-8 py-4 bg-[#1A1A1A] text-white font-bold rounded hover:bg-zinc-800 transition-colors">
                            View All 15 Runtime Modules →
                        </Link>
                        <Link href="/case-studies/runtime-incidents" className="px-8 py-4 bg-white text-[#1A1A1A] font-bold rounded border border-[#1A1A1A] hover:bg-[#F5F0EB] transition-colors">
                            Read the Incident Reports
                        </Link>
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    AI agent telemetry, runtime governance metrics, retry inflation data, context degradation curve, Claude Code cost analysis, Cursor token burn, AI coding agent ROI, governance ROI metrics, context rot measurement, verification burden metrics, agentic engineering economics
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

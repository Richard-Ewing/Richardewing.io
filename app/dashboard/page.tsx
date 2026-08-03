"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { loadUnifiedDiagnosticHistory } from '../../lib/storage/session';
import { calculateTrends } from '../../lib/history/trends';
import { DiagnosticResult } from '../../types/diagnostics';
import { getPercentile } from '../../lib/benchmarks/percentiles';
import { GovernanceStatus } from '../components/dashboard/GovernanceStatus';
import { TrendCard } from '../components/dashboard/TrendCard';
import { BenchmarkCard } from '../components/dashboard/BenchmarkCard';
import { RiskCard } from '../components/dashboard/RiskCard';
import { LongitudinalTrendChart } from '../components/LongitudinalTrendChart';
import { Activity, LayoutDashboard, Settings, DollarSign, Cpu, Shield, PieChart, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function ExecutiveDashboard() {
    const [history, setHistory] = useState<DiagnosticResult[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const data = loadUnifiedDiagnosticHistory();
        // Sort by timestamp
        setHistory(data.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()));
    }, []);

    if (!isClient) return null;

    const trends = calculateTrends(history);
    const hasData = history.length > 0;

    // Latest individual scores
    const latestPdi = history.filter(h => h.diagnosticId === 'pdi').pop();
    const latestAper = history.filter(h => h.diagnosticId === 'aper').pop();
    const latestAueb = history.filter(h => h.diagnosticId === 'aueb').pop();

    const pdiPercentile = latestPdi ? getPercentile('pdi', latestPdi.score, latestPdi.industry) : null;
    const aperPercentile = latestAper ? getPercentile('aper', latestAper.score, latestAper.industry) : null;
    const auebPercentile = latestAueb ? getPercentile('aueb', latestAueb.score, latestAueb.industry) : null;

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 text-cyan-700" />
                            </div>
                            <span className="text-sm font-mono text-zinc-800 uppercase tracking-widest font-bold">Enterprise Operating System</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">Executive AI Command Center</h1>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/tools" className="px-4 py-2 bg-cyan-600 border border-cyan-500 text-zinc-950 font-semibold rounded-lg text-sm font-bold hover:bg-cyan-700 transition-colors flex items-center gap-2">
                            <Activity className="w-4 h-4" /> New Diagnostic Run
                        </Link>
                    </div>
                </header>

                {/* Executive Morning Briefing & Causal Root Cause Diagnostics */}
                <div className="mb-10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950 text-white rounded-2xl p-8 shadow-xl border border-zinc-800">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Executive Morning Briefing • Mon, Aug 3</span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">Proactive Prevention Active</span>
                            </div>
                            <h2 className="text-2xl font-grotesk font-bold text-white">What Changed, Why, & Priority Decision Directives</h2>
                        </div>
                        <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-xs font-mono text-cyan-300 font-bold">
                            Causal Confidence: 84%
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="space-y-3 bg-zinc-900/80 p-5 rounded-xl border border-zinc-800">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-rose-400 font-bold">1. Spend Trajectory</span>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">Requires CFO Approval</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">AI Spend Increased +18% MoM</h3>
                            <p className="text-xs text-zinc-300">Annualized waste rate rose by <strong className="text-rose-400">$318,000/yr</strong> driven by un-cached PDF context dumps in engineering.</p>
                        </div>

                        <div className="space-y-3 bg-zinc-900/80 p-5 rounded-xl border border-zinc-800">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-amber-400 font-bold">2. Causal Chain</span>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Requires VP Eng Approval</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">Verification Drag Rose +11%</h3>
                            <p className="text-xs text-zinc-300">Generated PR volume rose +42% after Cursor expansion while code review capacity remained fixed.</p>
                        </div>

                        <div className="space-y-3 bg-zinc-900/80 p-5 rounded-xl border border-zinc-800">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-emerald-400 font-bold">3. Proactive Prevention</span>
                                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Pre-Launch Intervention</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">Prevent Agent X Verification Cost</h3>
                            <p className="text-xs text-zinc-300">Engineering plans to deploy Agent X next sprint. Deploying Token Saver prior to launch avoids <strong className="text-emerald-400">$118,000/yr</strong> in context rot.</p>
                        </div>
                    </div>

                    {/* Multi-Combination Architecture Optimization Engine View */}
                    <div className="bg-zinc-900/90 rounded-xl p-5 border border-zinc-800">
                        <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
                            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Architecture Optimization Engine • Permutation Simulation</span>
                            <span className="text-xs font-mono text-emerald-400 font-bold">Highest Yield: Option C (-71% Spend)</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
                            <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                                <span className="text-zinc-400 block">Baseline</span>
                                <strong className="text-white block mt-1">100% Frontier APIs</strong>
                                <span className="text-zinc-400 block mt-1">$450,000/yr • CPUO $0.41</span>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                                <span className="text-cyan-400 block">Option A</span>
                                <strong className="text-white block mt-1">Sonnet + Caching</strong>
                                <span className="text-emerald-400 block mt-1">Save $216,000/yr (-48%)</span>
                            </div>
                            <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                                <span className="text-violet-400 block">Option B</span>
                                <strong className="text-white block mt-1">Local 8B SLM Cluster</strong>
                                <span className="text-emerald-400 block mt-1">Save $283,500/yr (-63%)</span>
                            </div>
                            <div className="p-3 bg-cyan-950/60 rounded border border-cyan-500/50">
                                <span className="text-emerald-300 font-bold block">Option C (Recommended)</span>
                                <strong className="text-white block mt-1">Intent Router + Token Saver</strong>
                                <span className="text-emerald-300 font-bold block mt-1">Save $319,500/yr (-71%)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5-Product Module Quick Navigation Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                    <Link href="/dashboard/capital" className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-cyan-500 transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Product 1</span>
                            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-600 transition-colors" />
                        </div>
                        <h3 className="font-grotesk font-bold text-zinc-900 flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-cyan-700" /> AI Capital Ledger
                        </h3>
                        <p className="text-xs text-zinc-800 mt-1">CFO spend & unit economics</p>
                    </Link>

                    <Link href="/dashboard/engineering" className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-violet-500 transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-violet-700 font-bold uppercase">Product 2</span>
                            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-violet-600 transition-colors" />
                        </div>
                        <h3 className="font-grotesk font-bold text-zinc-900 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-violet-700" /> Engineering Capital
                        </h3>
                        <p className="text-xs text-zinc-800 mt-1">CTO technical insolvency date</p>
                    </Link>

                    <Link href="/dashboard/governance" className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-emerald-500 transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Product 3</span>
                            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-600 transition-colors" />
                        </div>
                        <h3 className="font-grotesk font-bold text-zinc-900 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-emerald-700" /> Runtime Governance
                        </h3>
                        <p className="text-xs text-zinc-800 mt-1">CISO shadow AI & kill switch</p>
                    </Link>

                    <Link href="/dashboard/product-economics" className="p-4 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-amber-500 transition-all group">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-amber-700 font-bold uppercase">Product 4</span>
                            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-600 transition-colors" />
                        </div>
                        <h3 className="font-grotesk font-bold text-zinc-900 flex items-center gap-2">
                            <PieChart className="w-4 h-4 text-amber-700" /> Product Economics
                        </h3>
                        <p className="text-xs text-zinc-800 mt-1">CPO roadmap capital score</p>
                    </Link>
                </div>

                {/* Question-Driven Executive Entrypoints */}
                <div className="mb-10 bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                    <h2 className="text-lg font-grotesk font-bold text-zinc-900 mb-4 flex items-center gap-2 border-b border-zinc-100 pb-3">
                        <HelpCircle className="w-5 h-5 text-cyan-700" /> Executive Questions Navigation
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link href="/dashboard/capital" className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-cyan-50/50 hover:border-cyan-300 transition-all">
                            <span className="text-xs font-mono text-cyan-700 font-bold">1. Financial Visibility</span>
                            <h4 className="font-bold text-zinc-900 mt-1">"Where is our AI spend actually going?"</h4>
                            <p className="text-xs text-zinc-800 mt-1">View cost per inference, useful output margins, and AI Volatility Tax ($/yr).</p>
                        </Link>

                        <Link href="/dashboard/engineering" className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-violet-50/50 hover:border-violet-300 transition-all">
                            <span className="text-xs font-mono text-violet-700 font-bold">2. Capital Allocation</span>
                            <h4 className="font-bold text-zinc-900 mt-1">"Which engineering initiatives produce revenue vs burn?"</h4>
                            <p className="text-xs text-zinc-800 mt-1">Evaluate Product Debt Index, verification drag, and insolvency trajectory.</p>
                        </Link>

                        <Link href="/dashboard/governance" className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all">
                            <span className="text-xs font-mono text-emerald-700 font-bold">3. Risk Enforcement</span>
                            <h4 className="font-bold text-zinc-900 mt-1">"How do we enforce governance before regulatory fines hit?"</h4>
                            <p className="text-xs text-zinc-800 mt-1">Audit shadow AI API keys, agent permissions, and kill-switch endpoints.</p>
                        </Link>
                    </div>
                </div>

                {!hasData ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                        <Activity className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mb-2">No Diagnostic Intelligence Found</h2>
                        <p className="text-zinc-800 mb-8 max-w-md mx-auto">
                            Complete your first governance assessment to establish a baseline and generate your enterprise command center.
                        </p>
                        <Link href="/start-here" className="inline-flex px-6 py-3 bg-cyan-600 text-zinc-950 font-semibold font-bold rounded-lg hover:bg-cyan-700 transition-colors">
                            Initialize Governance Baseline
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Top Level Status */}
                        <GovernanceStatus 
                            status={trends?.governanceMaturity as any || 'Unknown'} 
                            lastAssessmentDate={trends?.lastAssessmentDate} 
                        />

                        {/* KPI Deltas */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <TrendCard 
                                title="Product Debt Index" 
                                metric={trends?.pdiTrend?.latest ?? 'N/A'} 
                                delta={trends?.pdiTrend?.delta ?? 0} 
                                isHigherBetter={false}
                                description="Overall maintenance burden and architecture variance."
                            />
                            <TrendCard 
                                title="AI Gross Margin (AUEB)" 
                                metric={trends?.auebTrend ? `${trends.auebTrend.latest}%` : 'N/A'} 
                                delta={trends?.auebTrend?.delta ?? 0} 
                                isHigherBetter={true}
                                description="Synthetic COGS and inference routing efficiency."
                            />
                            <TrendCard 
                                title="Productivity (APER)" 
                                metric={trends?.aperTrend ? `$${(trends.aperTrend.latest / 1000).toFixed(0)}k` : 'N/A'} 
                                delta={trends?.aperTrend ? Number(((trends.aperTrend.delta / trends.aperTrend.first) * 100).toFixed(1)) : 0} 
                                isHigherBetter={true}
                                description="Revenue per engineer annualized."
                            />
                        </div>

                        {/* Longitudinal Trends & Risks */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                                <LongitudinalTrendChart 
                                    title="Operational Entropy (PDI)" 
                                    history={history.filter(h => h.diagnosticId === 'pdi')}
                                    description={`Velocity of Decay is currently: ${trends?.entropyAcceleration}`}
                                />
                            </div>
                            <div className="space-y-6">
                                <RiskCard 
                                    title="Governance Drift"
                                    riskLevel={latestPdi && latestPdi.score > 60 ? 'High' : 'Moderate'}
                                    description={latestPdi ? `Your PDI score is ${latestPdi.score}. ${pdiPercentile?.interpretation}` : 'Complete a PDI assessment to evaluate governance drift.'}
                                    actionLabel="Remediate via Exogram"
                                    actionUrl="/challenges/governance-drift"
                                />
                                <RiskCard 
                                    title="AI Margin Collapse"
                                    riskLevel={latestAueb && latestAueb.score < 50 ? 'Critical' : 'Low'}
                                    description={latestAueb ? `Gross margin is ${latestAueb.score}%. ${auebPercentile?.interpretation}` : 'Run AUEB to check synthetic COGS vulnerability.'}
                                    actionLabel="Implement Routing Policy"
                                    actionUrl="/challenges/ai-margin-collapse"
                                />
                            </div>
                        </div>

                        {/* Benchmarks */}
                        <div>
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mb-6 border-b border-zinc-200 pb-4">Industry Benchmarks</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {latestPdi && pdiPercentile && (
                                    <BenchmarkCard 
                                        title="Product Debt Index"
                                        yourScore={latestPdi.score}
                                        industryAverage={58}
                                        topQuartile={35}
                                        percentileBand={pdiPercentile.band}
                                        description="Lower is better. Reflects the percentage of engineering capacity consumed by maintenance."
                                        isHigherBetter={false}
                                    />
                                )}
                                {latestAueb && auebPercentile && (
                                    <BenchmarkCard 
                                        title="AI Gross Margin (AUEB)"
                                        yourScore={latestAueb.score}
                                        industryAverage={60}
                                        topQuartile={78}
                                        percentileBand={auebPercentile.band}
                                        description="Higher is better. Software-like margins on non-deterministic compute workloads."
                                    />
                                )}
                                {latestAper && aperPercentile && (
                                    <BenchmarkCard 
                                        title="Productivity (APER) %"
                                        yourScore={Math.min(100, (latestAper.score / 1000000) * 100)} // Normalize to % for the visual bar 
                                        industryAverage={48}
                                        topQuartile={80}
                                        percentileBand={aperPercentile.band}
                                        description="Annualized Revenue per Engineer. Bars normalized to $1M max scale."
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


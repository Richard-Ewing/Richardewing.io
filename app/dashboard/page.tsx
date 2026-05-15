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
import { Activity, LayoutDashboard, Settings } from 'lucide-react';

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
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 text-cyan-700" />
                            </div>
                            <span className="text-sm font-mono text-zinc-800 uppercase tracking-widest font-bold">Enterprise Operating Console</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">Governance Command Center</h1>
                    </div>
                    {hasData && (
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white border border-zinc-300 rounded-lg text-sm font-bold text-zinc-700 hover:bg-zinc-50 flex items-center gap-2">
                                <Settings className="w-4 h-4" /> Preferences
                            </button>
                            <Link href="/tools" className="px-4 py-2 bg-zinc-50 border border-zinc-200 text-zinc-950 font-semibold rounded-lg text-sm font-bold hover:bg-zinc-800 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> New Assessment
                            </Link>
                        </div>
                    )}
                </header>

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

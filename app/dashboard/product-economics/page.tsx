"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PieChart, TrendingUp, BarChart3, CheckCircle2, Activity, ArrowUpRight } from 'lucide-react';

export default function ProductEconomicsPage() {
    const [featureCost, setFeatureCost] = useState<number>(120000);
    const [aiOperatingCost, setAiOperatingCost] = useState<number>(32000);
    const [attributedRevenue, setAttributedRevenue] = useState<number>(450000);
    const [retentionImpactPct, setRetentionImpactPct] = useState<number>(14);

    const totalInvestment = featureCost + aiOperatingCost;
    const netReturn = attributedRevenue - totalInvestment;
    const capitalReturnScore = Math.min(100, Math.max(0, Math.round((attributedRevenue / totalInvestment) * 20)));
    const roiPercentage = Math.round((netReturn / totalInvestment) * 100);

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 mb-6">
                    <Link href="/dashboard" className="hover:text-cyan-600 transition-colors">Console</Link>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">Product Economics</span>
                </div>

                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                <PieChart className="w-5 h-5 text-amber-700" />
                            </div>
                            <span className="text-sm font-mono text-amber-700 font-bold uppercase tracking-wider">Product 4 • Chief Product Officer</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">Product Economics & Roadmap Portfolio</h1>
                        <p className="text-zinc-900 text-sm mt-2 max-w-2xl">
                            Evaluates product features as capital investments, calculating return scores, AI operating margin drag, and portfolio allocation efficiency.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link href="/tools/aper" className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg text-sm transition-colors flex items-center gap-2">
                            <Activity className="w-4 h-4" /> Run APER Portfolio Audit
                        </Link>
                    </div>
                </header>

                {/* Main Controls & Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    
                    {/* Controls */}
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
                        <h2 className="text-lg font-grotesk font-bold text-zinc-900 border-b border-zinc-100 pb-3">Initiative Investment Profile</h2>
                        
                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Build Engineering Cost ($)</label>
                            <input 
                                type="number" 
                                value={featureCost}
                                onChange={(e) => setFeatureCost(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Annual AI Operating Cost ($)</label>
                            <input 
                                type="number" 
                                value={aiOperatingCost}
                                onChange={(e) => setAiOperatingCost(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Attributed Annual Revenue ($)</label>
                            <input 
                                type="number" 
                                value={attributedRevenue}
                                onChange={(e) => setAttributedRevenue(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-amber-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Customer Retention Impact ({retentionImpactPct}%)</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="40" 
                                value={retentionImpactPct}
                                onChange={(e) => setRetentionImpactPct(Number(e.target.value))}
                                className="w-full accent-amber-500"
                            />
                        </div>
                    </div>

                    {/* KPI Display */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-zinc-800 uppercase tracking-widest font-bold">Capital Return Score</span>
                                <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{capitalReturnScore} / 100</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Portfolio investment return index</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">ROI Percentage:</span>
                                <span className={roiPercentage > 100 ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                                    +{roiPercentage}%
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold">Net Contribution</span>
                                <h3 className="text-3xl font-grotesk font-bold text-amber-800 mt-2">${netReturn.toLocaleString()}</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Annual net value created</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">Total Outlay: ${totalInvestment.toLocaleString()}</span>
                                <span className="text-amber-700 font-bold">{roiPercentage > 50 ? 'Strong ROI' : 'Low Return'}</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm sm:col-span-2 flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-xs font-mono text-amber-700 uppercase tracking-widest font-bold">Product Roadmap Classification</span>
                                    <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">
                                        {roiPercentage > 150 ? 'Tier 1 • High Yield Investment' : roiPercentage > 30 ? 'Tier 2 • Moderate Yield' : 'Tier 3 • Value Destroying Feature'}
                                    </h3>
                                    <p className="text-sm text-zinc-900 mt-1">
                                        Replaces subjective feature voting with deterministic capital allocation scoring.
                                    </p>
                                </div>
                                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 font-bold">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                                <span className="text-xs font-mono text-zinc-800">Calculates capital return across all roadmap epics</span>
                                <Link href="/tools/aper" className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1">
                                    Product APER Audit <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Directives */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                    <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-amber-700" /> CPO Product Economics Directives
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-amber-700 font-bold">1. Feature Sunset Protocol</span>
                            <h4 className="font-bold text-zinc-900">Deprecate Negative-Margin AI Features</h4>
                            <p className="text-xs text-zinc-900">Retire product features where monthly LLM inference exceeds customer subscription or expansion revenue contribution.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-amber-700 font-bold">2. Capital Return Prioritization</span>
                            <h4 className="font-bold text-zinc-900">Prioritize High-Score Epics</h4>
                            <p className="text-xs text-zinc-900">Reallocate engineering sprint cycles strictly toward roadmap items with Capital Return Scores above 70.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-amber-700 font-bold">3. Unit Economics Gating</span>
                            <h4 className="font-bold text-zinc-900">Mandate Margin Approval</h4>
                            <p className="text-xs text-zinc-900">Require all AI feature PRDs to include a verified unit cost budget before approval for engineering build.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

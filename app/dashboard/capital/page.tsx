"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { DollarSign, ArrowUpRight, TrendingDown, Layers, ShieldCheck, Activity, FileText } from 'lucide-react';

export default function AICapitalLedgerPage() {
    const [infraSpend, setInfraSpend] = useState<number>(45000);
    const [usefulOutputs, setUsefulOutputs] = useState<number>(185000);
    const [promptRetriesPct, setPromptRetriesPct] = useState<number>(18);
    const [modelOverprovisionPct, setModelOverprovisionPct] = useState<number>(22);

    const costPerInference = (infraSpend / (usefulOutputs * 1.25)).toFixed(3);
    const costPerUsefulOutput = (infraSpend / usefulOutputs).toFixed(3);
    const retryWaste = Math.round(infraSpend * (promptRetriesPct / 100));
    const overprovisionWaste = Math.round(infraSpend * (modelOverprovisionPct / 100));
    const annualVolatilityTax = Math.round((retryWaste + overprovisionWaste) * 12);
    const grossMarginWithAI = Math.max(15, Math.round(78 - (infraSpend / 1000) * 0.4));

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Module Breadcrumb & Navigation */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 mb-6">
                    <Link href="/dashboard" className="hover:text-cyan-600 transition-colors">Console</Link>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">AI Capital Ledger</span>
                </div>

                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-cyan-700" />
                            </div>
                            <span className="text-sm font-mono text-cyan-700 font-bold uppercase tracking-wider">Product 1 • CFO & Finance</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">AI Capital Ledger & Unit Economics</h1>
                        <p className="text-zinc-900 text-sm mt-2 max-w-2xl">
                            Continuous measurement of inference unit economics, model arbitration efficiency, variable COGS, and AI Volatility Tax.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link href="/tools/aueb" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-lg text-sm transition-colors flex items-center gap-2 shadow-sm">
                            <Activity className="w-4 h-4" /> Run AUEB Audit
                        </Link>
                    </div>
                </header>

                {/* Main Interactive Controls & KPIs */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    
                    {/* Controls */}
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
                        <h2 className="text-lg font-grotesk font-bold text-zinc-900 border-b border-zinc-100 pb-3">Capital Parameters</h2>
                        
                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Monthly AI Infra Spend ($)</label>
                            <input 
                                type="number" 
                                value={infraSpend}
                                onChange={(e) => setInfraSpend(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-cyan-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Monthly Useful Outputs (Tokens/Requests)</label>
                            <input 
                                type="number" 
                                value={usefulOutputs}
                                onChange={(e) => setUsefulOutputs(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-cyan-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Prompt Retry Overhead ({promptRetriesPct}%)</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="40" 
                                value={promptRetriesPct}
                                onChange={(e) => setPromptRetriesPct(Number(e.target.value))}
                                className="w-full accent-cyan-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Model Overprovisioning ({modelOverprovisionPct}%)</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="50" 
                                value={modelOverprovisionPct}
                                onChange={(e) => setModelOverprovisionPct(Number(e.target.value))}
                                className="w-full accent-cyan-500"
                            />
                        </div>
                    </div>

                    {/* KPI Display */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-zinc-800 uppercase tracking-widest font-bold">Unit Economics</span>
                                <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">${costPerUsefulOutput}</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Cost per verified useful output</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">Raw Inference: ${costPerInference}</span>
                                <span className="text-cyan-700 font-bold">Variance: {((Number(costPerUsefulOutput) / Number(costPerInference) - 1) * 100).toFixed(0)}%</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-zinc-800 uppercase tracking-widest font-bold">Margin Assessment</span>
                                <h3 className="text-3xl font-grotesk font-bold text-emerald-700 mt-2">{grossMarginWithAI}%</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Blended Gross Margin with AI COGS</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">Baseline Target: 75%</span>
                                <span className={grossMarginWithAI >= 70 ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                                    {grossMarginWithAI >= 70 ? 'Healthy' : 'Margin At Risk'}
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm sm:col-span-2 flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-xs font-mono text-rose-700 uppercase tracking-widest font-bold">Annual AI Volatility Tax</span>
                                    <h3 className="text-4xl font-grotesk font-bold text-rose-800 mt-2">${annualVolatilityTax.toLocaleString()}</h3>
                                    <p className="text-sm text-zinc-900 mt-1">
                                        Annual financial capital destroyed via prompt retries, context rot, and unarbitrated frontier LLM queries.
                                    </p>
                                </div>
                                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 font-bold">
                                    <TrendingDown className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                                <span className="text-xs font-mono text-zinc-800">Recovers to bottom line upon SLM routing adoption</span>
                                <Link href="/tools/slm-vs-api" className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1">
                                    SLM Router Simulator <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Ledger Recommendations */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                    <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-6 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-cyan-700" /> Automated CFO Execution Directive
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-cyan-700 font-bold">1. Semantic Caching</span>
                            <h4 className="font-bold text-zinc-900">Enforce Exact-Match Cache Boundary</h4>
                            <p className="text-xs text-zinc-900">Eliminates up to 34% of repeated query costs across customer support and internal RAG pipelines.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-cyan-700 font-bold">2. Model Arbitrage</span>
                            <h4 className="font-bold text-zinc-900">Route 80B Tier to 8B SLMs</h4>
                            <p className="text-xs text-zinc-900">Downgrade deterministic formatting and classification calls from frontier models to localized 8B parameter models.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-cyan-700 font-bold">3. Hard Token Caps</span>
                            <h4 className="font-bold text-zinc-900">Set Hard Billing Ceilings</h4>
                            <p className="text-xs text-zinc-900">Install programmatic rate limiting at the API proxy layer to block unconstrained developer experimentation loops.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

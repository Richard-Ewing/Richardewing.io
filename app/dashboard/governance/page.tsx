"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Lock, AlertOctagon, CheckCircle2, Activity, ArrowUpRight } from 'lucide-react';

export default function RuntimeGovernancePage() {
    const [totalAgents, setTotalAgents] = useState<number>(14);
    const [unrestrictedAgents, setUnrestrictedAgents] = useState<number>(3);
    const [shadowKeysCount, setShadowKeysCount] = useState<number>(8);
    const [killSwitchCoveragePct, setKillSwitchCoveragePct] = useState<number>(75);

    const governanceScore = Math.max(10, Math.round(100 - (unrestrictedAgents * 15) - (shadowKeysCount * 4) + (killSwitchCoveragePct * 0.3)));
    const riskExposureRating = governanceScore > 85 ? 'Low Risk' : governanceScore > 65 ? 'Moderate Exposure' : 'High Regulatory Exposure';

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-800 mb-6">
                    <Link href="/dashboard" className="hover:text-cyan-600 transition-colors">Console</Link>
                    <span>/</span>
                    <span className="text-zinc-900 font-semibold">Runtime Governance</span>
                </div>

                {/* Header */}
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-emerald-700" />
                            </div>
                            <span className="text-sm font-mono text-emerald-700 font-bold uppercase tracking-wider">Product 3 • CISO & Risk Management</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">Runtime Governance Intelligence</h1>
                        <p className="text-zinc-900 text-sm mt-2 max-w-2xl">
                            Audits autonomous agent permissions, shadow AI API key proliferation, kill-switch coverage, and regulatory compliance readiness.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link href="/tools/shadow-ai" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-sm transition-colors flex items-center gap-2">
                            <Activity className="w-4 h-4" /> Run Shadow AI Audit
                        </Link>
                    </div>
                </header>

                {/* Controls & Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    
                    {/* Controls */}
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-6">
                        <h2 className="text-lg font-grotesk font-bold text-zinc-900 border-b border-zinc-100 pb-3">Security & Boundary Inputs</h2>
                        
                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Active Autonomous Agents ({totalAgents})</label>
                            <input 
                                type="number" 
                                value={totalAgents}
                                onChange={(e) => setTotalAgents(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Unrestricted API Access Agents ({unrestrictedAgents})</label>
                            <input 
                                type="number" 
                                value={unrestrictedAgents}
                                onChange={(e) => setUnrestrictedAgents(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Detected Shadow AI API Keys ({shadowKeysCount})</label>
                            <input 
                                type="number" 
                                value={shadowKeysCount}
                                onChange={(e) => setShadowKeysCount(Number(e.target.value))}
                                className="w-full bg-zinc-50 border border-zinc-300 rounded-lg px-3 py-2 text-sm font-mono text-zinc-900 focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono text-zinc-900 font-bold uppercase mb-2">Kill-Switch Coverage ({killSwitchCoveragePct}%)</label>
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                value={killSwitchCoveragePct}
                                onChange={(e) => setKillSwitchCoveragePct(Number(e.target.value))}
                                className="w-full accent-emerald-500"
                            />
                        </div>
                    </div>

                    {/* KPI Display */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-zinc-800 uppercase tracking-widest font-bold">Governance Posture Score</span>
                                <h3 className="text-3xl font-grotesk font-bold text-emerald-800 mt-2">{governanceScore} / 100</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Deterministic control boundary evaluation</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">Status:</span>
                                <span className={governanceScore > 75 ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                                    {riskExposureRating}
                                </span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">Kill Switch Coverage</span>
                                <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{killSwitchCoveragePct}%</h3>
                                <p className="text-xs text-zinc-800 mt-1 font-mono">Programmatic agent shutdown endpoints</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono">
                                <span className="text-zinc-800">Uncovered: {100 - killSwitchCoveragePct}%</span>
                                <span className="text-emerald-700 font-bold">{killSwitchCoveragePct >= 90 ? 'Audit Ready' : 'Gap Exists'}</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm sm:col-span-2 flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-xs font-mono text-emerald-700 uppercase tracking-widest font-bold">Shadow AI Risk Exposure</span>
                                    <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{shadowKeysCount} Unsanctioned Keys / Endpoints</h3>
                                    <p className="text-sm text-zinc-900 mt-1">
                                        Data exfiltration risk and unmonitored API liability across engineering teams.
                                    </p>
                                </div>
                                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 font-bold">
                                    <Lock className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                                <span className="text-xs font-mono text-zinc-800">Evaluates against EU AI Act & NIST AI RMF specifications</span>
                                <Link href="/tools/eu-ai-act-checker" className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                                    EU AI Act Checker <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Directives */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                    <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-700" /> CISO Runtime Protection Directives
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-emerald-700 font-bold">1. Kill Switch Mandate</span>
                            <h4 className="font-bold text-zinc-900">Install Circuit Breakers</h4>
                            <p className="text-xs text-zinc-900">Every autonomous agent loop must register a remote kill-switch endpoint with automatic token velocity shutdowns.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-emerald-700 font-bold">2. Key Revocation</span>
                            <h4 className="font-bold text-zinc-900">Purge Shadow API Keys</h4>
                            <p className="text-xs text-zinc-900">Rotate all personal OpenAI and Anthropic developer keys to enterprise SSO-backed secrets manager proxies.</p>
                        </div>
                        <div className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
                            <span className="text-xs font-mono text-emerald-700 font-bold">3. Input Sanitize Sandbox</span>
                            <h4 className="font-bold text-zinc-900">Prompt Injection Firewall</h4>
                            <p className="text-xs text-zinc-900">Route all user inputs through deterministic sanitization layers before exposing to agent tool-calling contexts.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CustomerWorkspaceStore, CustomerOrganizationWorkspace } from '../../lib/workspace/customerWorkspace';
import { LayoutDashboard, ShieldCheck, DollarSign, Target, FileText, Download, Layers, ArrowUpRight, Activity } from 'lucide-react';

export default function CustomerWorkspacePage() {
    const [workspace, setWorkspace] = useState<CustomerOrganizationWorkspace | null>(null);

    useEffect(() => {
        setWorkspace(CustomerWorkspaceStore.getWorkspace());
    }, []);

    if (!workspace) return null;

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <LayoutDashboard className="w-5 h-5 text-cyan-600" />
                            </div>
                            <span className="text-sm font-mono text-cyan-700 font-bold uppercase tracking-wider">Customer Operating System</span>
                        </div>
                        <h1 className="text-4xl font-grotesk font-bold text-zinc-900">{workspace.organizationName}</h1>
                        <p className="text-xs font-mono text-zinc-600 mt-1">
                            Persistent Organizational Memory • Subscription: <span className="text-emerald-700 font-bold">{workspace.subscriptionTier}</span>
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Link href="/wizard" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-zinc-950 font-bold rounded-lg text-xs font-mono transition-colors flex items-center gap-2">
                            <Target className="w-4 h-4" /> Launch Mission Wizard
                        </Link>
                    </div>
                </header>

                {/* Persistent KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                        <span className="text-xs font-mono text-emerald-700 font-bold uppercase">Cumulative Verified Savings</span>
                        <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">${workspace.cumulativeSavingsUSD.toLocaleString()}</h3>
                        <p className="text-xs text-zinc-500 mt-1 font-mono">14 Interventions Verified</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                        <span className="text-xs font-mono text-cyan-700 font-bold uppercase">Decision Accuracy Rate</span>
                        <h3 className="text-3xl font-grotesk font-bold text-cyan-700 mt-2">{workspace.decisionAccuracyPct}%</h3>
                        <p className="text-xs text-zinc-500 mt-1 font-mono">Calibrated via Exogram Ledger</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                        <span className="text-xs font-mono text-violet-700 font-bold uppercase">Active Executive Missions</span>
                        <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{workspace.activeMissionsCount}</h3>
                        <p className="text-xs text-zinc-500 mt-1 font-mono">In Execution & Monitoring</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                        <span className="text-xs font-mono text-amber-700 font-bold uppercase">Board Deck Repository</span>
                        <h3 className="text-3xl font-grotesk font-bold text-zinc-900 mt-2">{workspace.historicalBoardDecksCount} Decks</h3>
                        <p className="text-xs text-zinc-500 mt-1 font-mono">Historical Executive Memory</p>
                    </div>
                </div>

                {/* Main Navigation & Quick Mission Launch Cards */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-cyan-950 text-white rounded-2xl p-8 shadow-xl border border-zinc-800 space-y-6 mb-10">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                        <div>
                            <span className="text-xs font-mono text-cyan-400 font-bold uppercase">Persistent Enterprise Command</span>
                            <h2 className="text-2xl font-grotesk font-bold text-white">Active Executive Mission Pipeline</h2>
                        </div>
                        <Link href="/missions" className="text-xs font-mono text-cyan-400 hover:underline">
                            View All Missions &rarr;
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                        <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800">
                            <span className="text-cyan-400 font-bold">1. Reduce AI OpEx</span>
                            <h4 className="font-bold text-white mt-1">Deploy Token Saver Sidecars</h4>
                            <span className="text-emerald-400 block mt-2">Annual Savings: $319,500/yr</span>
                        </div>

                        <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800">
                            <span className="text-violet-400 font-bold">2. Renew Cursor Enterprise</span>
                            <h4 className="font-bold text-white mt-1">Licensing & Drift Evaluation</h4>
                            <span className="text-emerald-400 block mt-2">Target Payback: 60 Days</span>
                        </div>

                        <div className="p-4 bg-zinc-900/90 rounded-xl border border-zinc-800">
                            <span className="text-amber-400 font-bold">3. Board Prep Briefing</span>
                            <h4 className="font-bold text-white mt-1">11-Slide Deck Compilation</h4>
                            <span className="text-cyan-400 block mt-2">Ready for Q3 Board Meeting</span>
                        </div>
                    </div>
                </div>

                {/* Stored Artifacts Repository */}
                <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
                    <h3 className="text-xl font-grotesk font-bold text-zinc-900 mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-cyan-600" /> Organizational Memory & Artifact Repository
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono mb-6">All historical board decks, executive memos, and architecture reviews stored permanently for auditability.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-mono text-cyan-700 font-bold uppercase">BoardDeck</span>
                                <h4 className="font-bold text-zinc-900 text-sm mt-1">Q3 2026 Board Briefing Deck</h4>
                                <span className="text-[10px] font-mono text-zinc-500 block mt-1">11 Compiled Slides • Verified $319.5k ROI</span>
                            </div>
                            <a href="https://richardewing.io/exports/boarddeck_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-cyan-700 font-bold flex items-center justify-between">
                                Download Board Deck <Download className="w-3.5 h-3.5" />
                            </a>
                        </div>

                        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-mono text-violet-700 font-bold uppercase">ExecutiveMemo</span>
                                <h4 className="font-bold text-zinc-900 text-sm mt-1">Token Saver Sidecar Architecture Review</h4>
                                <span className="text-[10px] font-mono text-zinc-500 block mt-1">CFO Briefing • Zero Code Egress Verified</span>
                            </div>
                            <a href="https://richardewing.io/exports/executivememo_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-violet-700 font-bold flex items-center justify-between">
                                Download Executive Memo <Download className="w-3.5 h-3.5" />
                            </a>
                        </div>

                        <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase">RiskRegister</span>
                                <h4 className="font-bold text-zinc-900 text-sm mt-1">Shadow AI & Context Rot Audit</h4>
                                <span className="text-[10px] font-mono text-zinc-500 block mt-1">CISO Audit • 14 Repos Cleaned</span>
                            </div>
                            <a href="https://richardewing.io/exports/riskregister_dp_board_001.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 pt-2 border-t border-zinc-200 text-xs font-mono text-emerald-700 font-bold flex items-center justify-between">
                                Download Risk Register <Download className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

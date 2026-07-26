"use client";

import React, { useState } from 'react';
import { FileText, Shield, PieChart, Check, Download, ExternalLink } from 'lucide-react';

export const DeliverablePreview = () => {
    const [activeTab, setActiveTab] = useState<'brief' | 'pdi' | 'board'>('brief');

    return (
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 text-zinc-100 shadow-2xl my-12 overflow-hidden relative">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-400 uppercase tracking-widest mb-1">
                        <FileText className="w-4 h-4" />
                        <span>Tangible Output Guarantee</span>
                    </div>
                    <h3 className="text-2xl font-grotesk font-bold text-white">
                        Every Engagement Produces Board-Ready Deliverables
                    </h3>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl">
                    <button
                        onClick={() => setActiveTab('brief')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                            activeTab === 'brief' ? 'bg-violet-600 text-white' : 'text-zinc-300 hover:text-white'
                        }`}
                    >
                        Risk Report PDF
                    </button>
                    <button
                        onClick={() => setActiveTab('pdi')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                            activeTab === 'pdi' ? 'bg-violet-600 text-white' : 'text-zinc-300 hover:text-white'
                        }`}
                    >
                        Unit Economics Matrix
                    </button>
                    <button
                        onClick={() => setActiveTab('board')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                            activeTab === 'board' ? 'bg-violet-600 text-white' : 'text-zinc-300 hover:text-white'
                        }`}
                    >
                        1-Page Executive Summary
                    </button>
                </div>
            </div>

            {/* Content Preview Canvas */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 relative min-h-[280px]">
                {activeTab === 'brief' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="flex justify-between items-start border-b border-zinc-800 pb-4">
                            <div>
                                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">SAMPLE DOCUMENT OUTPUT</span>
                                <h4 className="text-lg font-bold text-white">R&D Capital & AI Unit Economics Audit</h4>
                                <p className="text-xs text-zinc-300 font-medium">Prepared for: Board of Directors & C-Suite</p>
                            </div>
                            <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                                CONFIDENTIAL
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <span className="text-zinc-300 font-mono font-semibold block mb-1">Identified Capital Leakage</span>
                                <span className="text-xl font-bold font-mono text-rose-400">$840,000 / yr</span>
                                <p className="text-[10px] text-zinc-400 mt-1 font-medium">Ungoverned retries & zombie features</p>
                            </div>
                            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <span className="text-zinc-300 font-mono font-semibold block mb-1">Technical Insolvency Date</span>
                                <span className="text-xl font-bold font-mono text-amber-400">Q3 2027</span>
                                <p className="text-[10px] text-zinc-400 mt-1 font-medium">Point where maintenance outpaces innovation</p>
                            </div>
                            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                                <span className="text-zinc-300 font-mono font-semibold block mb-1">Remediation Margin Upside</span>
                                <span className="text-xl font-bold font-mono text-emerald-400">+34% Net ROI</span>
                                <p className="text-[10px] text-zinc-400 mt-1 font-medium">Via VPC model repatriation & cost-caps</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'pdi' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="flex justify-between items-start border-b border-zinc-800 pb-4">
                            <div>
                                <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">PRODUCT DEBT INDEX (PDI) MATRIX</span>
                                <h4 className="text-lg font-bold text-white">5-Dimension Governance Maturity Breakdown</h4>
                            </div>
                        </div>
                        <div className="space-y-2 text-xs font-mono">
                            {[
                                { dim: 'Cost Visibility & Tagging', score: '32%', status: 'Critical Risk', color: 'text-rose-400' },
                                { dim: 'Deterministic Model Controls', score: '48%', status: 'Moderate', color: 'text-amber-400' },
                                { dim: 'Shadow AI Exfiltration Guard', score: '88%', status: 'Protected', color: 'text-emerald-400' },
                                { dim: 'R&D Innovation vs OpEx Split', score: '41%', status: 'At Risk', color: 'text-amber-400' },
                            ].map((row, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                                    <span className="text-zinc-200 font-sans font-semibold">{row.dim}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="font-bold text-white">{row.score}</span>
                                        <span className={`text-[10px] uppercase font-bold ${row.color}`}>{row.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'board' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="border-b border-zinc-800 pb-4">
                            <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">EXECUTIVE BRIEF</span>
                            <h4 className="text-lg font-bold text-white">1-Page Board Executive Briefing</h4>
                        </div>
                        <blockquote className="border-l-2 border-violet-500 pl-4 py-1 text-sm text-zinc-200 italic font-medium">
                            &ldquo;This audit translates complex technical architecture and non-deterministic model spend into CFO-ready P&L impact. Every finding includes a specific dollar magnitude and a 90-day remediation action.&rdquo;
                        </blockquote>
                        <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-zinc-300">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-400" />
                                <span>Specific dollar-denominated findings</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-emerald-400" />
                                <span>Clear technical vs financial alignment</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <p className="text-xs text-zinc-400 font-mono text-center mt-4">
                * All written reports delivered in PDF and interactive dashboard formats. Anonymized sample shown.
            </p>
        </div>
    );
};

export default DeliverablePreview;

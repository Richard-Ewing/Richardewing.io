"use client";

import React, { useState } from 'react';
import { Award, AlertTriangle, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export const CareerWinBenchmarkVisual = () => {
    const [selectedTab, setSelectedTab] = useState<'mirror' | 'forge' | 'benchmark'>('mirror');

    return (
        <div className="my-12 bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden relative">
            {/* Top Badge & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest mb-1 text-orange-400">
                        <Award className="w-4 h-4" />
                        <span>CareerWin OS Live Intelligence</span>
                    </div>
                    <h3 className="text-2xl font-grotesk font-bold text-white">
                        The Career Operating System Engine
                    </h3>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 bg-slate-950 border border-slate-800 p-1.5 rounded-xl text-xs font-mono w-full sm:w-auto">
                    <button
                        onClick={() => setSelectedTab('mirror')}
                        className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg font-bold transition-all ${
                            selectedTab === 'mirror' ? 'bg-orange-600 text-white shadow' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        LinkedIn Mirror
                    </button>
                    <button
                        onClick={() => setSelectedTab('forge')}
                        className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg font-bold transition-all ${
                            selectedTab === 'forge' ? 'bg-orange-600 text-white shadow' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        Evidence Forge
                    </button>
                    <button
                        onClick={() => setSelectedTab('benchmark')}
                        className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg font-bold transition-all ${
                            selectedTab === 'benchmark' ? 'bg-orange-600 text-white shadow' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        Comp Benchmarks
                    </button>
                </div>
            </div>

            {/* Interactive Panel Display */}
            {selectedTab === 'mirror' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-200 font-bold pb-2 border-b border-slate-800">
                        <span>CROSS-DOCUMENT CONTRADICTION DETECTION</span>
                        <span className="text-orange-400 font-bold">3 MISMATCHES FOUND</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                        {/* Resume Column */}
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                            <div className="flex items-center gap-2 text-blue-300 font-bold border-b border-slate-800 pb-2">
                                <FileText className="w-4 h-4 text-blue-400" />
                                <span>RESUME CLAIMS</span>
                            </div>
                            <div className="p-2 bg-red-950/50 border border-red-800/80 text-red-200 rounded flex justify-between font-semibold">
                                <span>VP Product (2021-Present)</span>
                                <span className="text-[10px] text-red-400 font-bold">⚠ MISMATCH</span>
                            </div>
                            <div className="p-2 bg-red-950/50 border border-red-800/80 text-red-200 rounded flex justify-between font-semibold">
                                <span>Led team of 12 engineers</span>
                                <span className="text-[10px] text-red-400 font-bold">⚠ MISMATCH</span>
                            </div>
                            <div className="p-2 bg-emerald-950/50 border border-emerald-800/80 text-emerald-100 rounded flex justify-between font-semibold">
                                <span>Grew ARR $2M to $18M</span>
                                <span className="text-[10px] text-emerald-400 font-bold">✓ VERIFIED</span>
                            </div>
                        </div>

                        {/* LinkedIn Column */}
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                            <div className="flex items-center gap-2 text-indigo-300 font-bold border-b border-slate-800 pb-2">
                                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                                <span>LINKEDIN PUBLIC FOOTPRINT</span>
                            </div>
                            <div className="p-2 bg-red-950/50 border border-red-800/80 text-red-200 rounded flex justify-between font-semibold">
                                <span>VP Product & Co-Founder</span>
                                <span className="text-[10px] text-red-400 font-bold">⚠ MISMATCH</span>
                            </div>
                            <div className="p-2 bg-red-950/50 border border-red-800/80 text-red-200 rounded flex justify-between font-semibold">
                                <span>Led engineering team of 15+</span>
                                <span className="text-[10px] text-red-400 font-bold">⚠ MISMATCH</span>
                            </div>
                            <div className="p-2 bg-emerald-950/50 border border-emerald-800/80 text-emerald-100 rounded flex justify-between font-semibold">
                                <span>Grew ARR $2M to $18M</span>
                                <span className="text-[10px] text-emerald-400 font-bold">✓ VERIFIED</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedTab === 'forge' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-200 font-bold pb-2 border-b border-slate-800">
                        <span>THE EVIDENCE FORGE</span>
                        <span className="text-emerald-400 font-bold">VAGUE BULLET RE-ENGINEERED</span>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 text-xs font-mono">
                        <div>
                            <span className="text-red-400 font-bold block mb-1">STATED VAGUE CLAIM (SCORE: 34/100):</span>
                            <div className="p-3 bg-red-950/40 border border-red-900/60 text-red-100 font-medium rounded-lg">
                                &ldquo;Led product strategy for enterprise SaaS platform and managed team.&rdquo;
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-8 h-8 rounded-full bg-orange-600/30 text-orange-400 flex items-center justify-center font-bold">
                                ↓
                            </div>
                        </div>

                        <div>
                            <span className="text-emerald-400 font-bold block mb-1">RE-ENGINEERED VERIFIED EVIDENCE (SCORE: 96/100):</span>
                            <div className="p-3 bg-emerald-950/50 border border-emerald-800/80 text-emerald-100 rounded-lg font-sans text-sm font-bold">
                                &ldquo;Architected multi-tenant AI routing engine for 45,000 active enterprise users, expanding ARR from $2.4M to $18.1M while reducing churn by 73% across 14-person engineering organization.&rdquo;
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectedTab === 'benchmark' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-200 font-bold pb-2 border-b border-slate-800">
                        <span>EXECUTIVE & STAFF+ LEVELING BENCHMARKS</span>
                        <span className="text-orange-400 font-bold">Q3 2026 LIVE DATA</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <span className="text-slate-300 font-bold block mb-1">Staff Engineer (L6)</span>
                            <span className="text-xl font-bold text-white">$340K - $420K</span>
                            <span className="text-[10px] text-emerald-400 font-bold block mt-1">+14% for AI Runtime Expertise</span>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <span className="text-slate-300 font-bold block mb-1">VP Engineering (L8)</span>
                            <span className="text-xl font-bold text-white">$450K - $650K</span>
                            <span className="text-[10px] text-emerald-400 font-bold block mt-1">+0.5% - 1.5% Equity Target</span>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <span className="text-slate-300 font-bold block mb-1">Fractional CPO</span>
                            <span className="text-xl font-bold text-white">$10K / mo</span>
                            <span className="text-[10px] text-orange-400 font-bold block mt-1">4 Engagements Max Cap</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom CTA Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-300 font-medium">
                    CareerWin OS is deployed live for engineers, product leads, and executives.
                </span>
                <a
                    href="https://careerwin.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
                >
                    <span>See Live Benchmarks at CareerWin.ai</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default CareerWinBenchmarkVisual;

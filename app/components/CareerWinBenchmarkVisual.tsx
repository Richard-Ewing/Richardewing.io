"use client";

import React, { useState } from 'react';
import { Award, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export const CareerWinBenchmarkVisual = () => {
    const [selectedTab, setSelectedTab] = useState<'mirror' | 'grounding' | 'stack'>('grounding');

    return (
        <div className="my-12 bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden relative">
            {/* Top Badge & Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest mb-1 text-orange-400">
                        <Award className="w-4 h-4" />
                        <span>Official CareerWin.ai Workflow Preview</span>
                    </div>
                    <h3 className="text-2xl font-grotesk font-bold text-white">
                        How CareerWin.ai Tailors Without Making Things Up
                    </h3>
                </div>

                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 bg-slate-950 border border-slate-800 p-1.5 rounded-xl text-xs font-mono w-full sm:w-auto">
                    <button
                        onClick={() => setSelectedTab('grounding')}
                        className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg font-bold transition-all ${
                            selectedTab === 'grounding' ? 'bg-orange-600 text-white shadow' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        Gap Questions
                    </button>
                    <button
                        onClick={() => setSelectedTab('mirror')}
                        className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg font-bold transition-all ${
                            selectedTab === 'mirror' ? 'bg-orange-600 text-white shadow' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        LinkedIn Check
                    </button>
                    <button
                        onClick={() => setSelectedTab('stack')}
                        className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg font-bold transition-all ${
                            selectedTab === 'stack' ? 'bg-orange-600 text-white shadow' : 'text-slate-300 hover:text-white'
                        }`}
                    >
                        1-Tool Stack ($29)
                    </button>
                </div>
            </div>

            {/* Tab 1: Grounded Gap Questions across professions */}
            {selectedTab === 'grounding' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-200 font-bold pb-2 border-b border-slate-800">
                        <span>EXAMPLE REQUIREMENT COVERAGE CHECK</span>
                        <span className="text-emerald-400 font-bold">ZERO INVENTED METRICS</span>
                    </div>

                    <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 text-xs font-mono">
                        <div>
                            <span className="text-amber-300 font-bold block mb-1">JOB POSTING REQUIREMENT NOT YET ON YOUR RESUME:</span>
                            <div className="p-3 bg-amber-950/40 border border-amber-800/60 text-amber-100 font-medium rounded-lg">
                                &ldquo;Requires vendor contract management, audit readiness, or clinical/operational throughput tracking.&rdquo;
                            </div>
                        </div>

                        <div>
                            <span className="text-red-400 font-bold block mb-1">WHAT GENERIC AI TOOLS DO (BLOCKED IN CAREERWIN.AI):</span>
                            <div className="p-3 bg-red-950/40 border border-red-900/60 text-red-100 font-medium rounded-lg">
                                Invents a fake percentage (&ldquo;Cut vendor spend by 40%&rdquo;) that falls apart in a 30-minute hiring manager screen.
                            </div>
                        </div>

                        <div>
                            <span className="text-emerald-400 font-bold block mb-1">WHAT CAREERWIN.AI DOES INSTEAD:</span>
                            <div className="p-3 bg-emerald-950/50 border border-emerald-800/80 text-emerald-100 rounded-lg font-sans text-sm font-semibold">
                                Asks you one plain question first (&ldquo;Did you manage vendor renewals, shift ratios, or audit checklists in this role? If so, how many?&rdquo;) and writes only the facts you confirm.
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Tab 2: Resume vs LinkedIn Check */}
            {selectedTab === 'mirror' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-200 font-bold pb-2 border-b border-slate-800">
                        <span>EXAMPLE RESUME VS. LINKEDIN CONSISTENCY CHECK</span>
                        <span className="text-orange-400 font-bold">ILLUSTRATIVE EXAMPLE</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                            <div className="flex items-center gap-2 text-blue-300 font-bold border-b border-slate-800 pb-2">
                                <FileText className="w-4 h-4 text-blue-400" />
                                <span>UPLOADED RESUME</span>
                            </div>
                            <div className="p-2 bg-red-950/50 border border-red-800/80 text-red-200 rounded flex justify-between font-semibold">
                                <span>Operations Lead (Mar 2022 - Present)</span>
                                <span className="text-[10px] text-red-400 font-bold">DATE DRIFT</span>
                            </div>
                            <div className="p-2 bg-emerald-950/50 border border-emerald-800/80 text-emerald-100 rounded flex justify-between font-semibold">
                                <span>Managed 18-person regional team</span>
                                <span className="text-[10px] text-emerald-400 font-bold">MATCHED</span>
                            </div>
                        </div>

                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                            <div className="flex items-center gap-2 text-indigo-300 font-bold border-b border-slate-800 pb-2">
                                <ShieldCheck className="w-4 h-4 text-indigo-400" />
                                <span>PUBLIC LINKEDIN PROFILE</span>
                            </div>
                            <div className="p-2 bg-red-950/50 border border-red-800/80 text-red-200 rounded flex justify-between font-semibold">
                                <span>Senior Supervisor (Aug 2022 - Present)</span>
                                <span className="text-[10px] text-red-400 font-bold">5-MO GAP</span>
                            </div>
                            <div className="p-2 bg-emerald-950/50 border border-emerald-800/80 text-emerald-100 rounded flex justify-between font-semibold">
                                <span>Managed 18-person regional team</span>
                                <span className="text-[10px] text-emerald-400 font-bold">MATCHED</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Tab 3: Sourced Nov 2026 Stack Comparison */}
            {selectedTab === 'stack' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-200 font-bold pb-2 border-b border-slate-800">
                        <span>VERIFIED VENDOR PRICING COMPARISON (NOV 2026)</span>
                        <span className="text-emerald-400 font-bold">$29/MO REPLACES $118.94/MO</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <span className="text-slate-300 font-bold block mb-1">Teal + Jobscan + Simplify+</span>
                            <span className="text-xl font-bold text-white">$118.94 / mo</span>
                            <span className="text-[10px] text-slate-400 font-bold block mt-1">$29 + $49.95 + $39.99/mo</span>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-xl border border-emerald-700/60">
                            <span className="text-emerald-300 font-bold block mb-1">CareerWin.ai Founding Plan</span>
                            <span className="text-xl font-bold text-white">$29 / mo</span>
                            <span className="text-[10px] text-emerald-400 font-bold block mt-1">Monthly, 30-day refund</span>
                        </div>
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                            <span className="text-slate-300 font-bold block mb-1">After You Get Hired</span>
                            <span className="text-xl font-bold text-white">$5 / mo</span>
                            <span className="text-[10px] text-orange-400 font-bold block mt-1">Optional Keeper for raises</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom CTA Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Built for experienced professionals across healthcare, operations, trades, finance, public sector, and tech.</span>
                </span>
                <a
                    href="https://careerwin.ai/teardown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
                >
                    <span>Check My Resume Free (No Sign-Up)</span>
                    <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
};

export default CareerWinBenchmarkVisual;

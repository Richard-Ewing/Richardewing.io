"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Rocket, Users, Coins, Calculator, TrendingDown, RefreshCcw, DownloadCloud, TrendingUp, Clock, ShieldAlert, Lock, Zap } from 'lucide-react';
import Link from 'next/link';
import ToolCelebration from '@/app/components/ToolCelebration';
import ToolGate from '../../components/tool-gate';
import { ExportToPDFButton } from '../../components/ExportToPDFButton';
import { VaultUpsell } from '../../components/VaultUpsell';
import styles from './styles.module.css';

export default function AIRoiTimelineContent() {
    const [engineers, setEngineers] = useState(50);
    const [salary, setSalary] = useState(150000);
    const [aiStrategy, setAiStrategy] = useState<'copilot' | 'rag' | 'slm'>('rag');
    
    // Derived Costs
    const totalFteCost = engineers * salary;
    
    // AI Strategy Data
    const strategyData = {
        copilot: { capEx: 20000, opExPerUser: 400, gain: 0.15, name: 'SaaS Copilots' },
        rag: { capEx: 150000, opExPerUser: 2500, gain: 0.25, name: 'Proprietary RAG' },
        slm: { capEx: 400000, opExPerUser: 800, gain: 0.35, name: 'Fine-Tuned SLM' }
    };
    
    const activeStrategy = strategyData[aiStrategy];
    
    // Financial Mathematics
    const implementationCost = activeStrategy.capEx;
    const annualAiOpex = engineers * activeStrategy.opExPerUser;
    const displacedEngineers = Math.floor(engineers * activeStrategy.gain);
    const grossSavings = displacedEngineers * salary;
    const netAnnualSavings = grossSavings - annualAiOpex;
    const breakEvenMonths = netAnnualSavings > 0 ? (implementationCost / netAnnualSavings) * 12 : -1;

    // View State
    const [view, setView] = useState<'input' | 'gate' | 'results'>('input');

    const handleCalculate = () => {
        setView('gate');
    };

    const processResults = () => {
        setView('results');
        
        // Persist the run to the intelligence dashboard
        fetch('/api/tools/runs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                tool_id: 'ai-roi-timeline',
                run_data: { engineers, salary, aiStrategy },
                output_metrics: { implementationCost, netAnnualSavings, breakEvenMonths }
            })
        }).catch(e => console.error('Failed to log tool run:', e));
    };

    return (
        <div className="min-h-screen bg-white text-zinc-950 py-20 px-4 sm:px-6 relative overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_50%)] pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <Link href="/tools" className="inline-flex items-center text-zinc-950 font-bold hover:text-zinc-900 transition-colors mb-12 font-mono text-xs font-bold uppercase tracking-widest">
                    <ArrowLeft size={14} className="mr-2" /> Back to Tools
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 tracking-tight leading-tight">
                        AI Break-Even <br/> Modeler
                    </h1>
                    <p className="text-zinc-900 mt-4 max-w-2xl text-lg leading-relaxed">
                        Calculate exactly when your CapEx drops below human FTE OpEx displacement. Stop guessing ROI; model it.
                    </p>
                </div>

                {view === 'input' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* INPUT PANEL */}
                        <div className="space-y-6">
                            <div className="bg-zinc-100 p-6 rounded-2xl border border-zinc-400 space-y-8">
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label htmlFor="engineers-range" className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest flex items-center gap-2"><Users size={12}/> Headcount</label>
                                        <div className="text-2xl font-bold font-mono">{engineers} FTEs</div>
                                    </div>
                                    <input id="engineers-range" title="Engineers" aria-label="Engineers count" type="range" min="10" max="500" step="5" value={engineers} onChange={(e) => setEngineers(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                                </div>
                                
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label htmlFor="salary-range" className="text-xs font-bold font-mono text-green-400 uppercase tracking-widest flex items-center gap-2"><Coins size={12}/> Cost / FTE</label>
                                        <div className="text-2xl font-bold font-mono">${(salary/1000).toFixed(0)}k</div>
                                    </div>
                                    <input id="salary-range" title="Salary per FTE" aria-label="Salary per FTE" type="range" min="80000" max="300000" step="10000" value={salary} onChange={(e) => setSalary(parseInt(e.target.value))} className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
                                </div>
                            </div>
                        </div>

                        {/* STRATEGY SELECTION */}
                        <div className="space-y-4 flex flex-col justify-between">
                            <div className="space-y-3">
                                <label className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest block mb-4">Architecture Strategy</label>
                                
                                {Object.entries(strategyData).map(([key, data]) => {
                                    const isActive = aiStrategy === key;
                                    return (
                                        <div 
                                            key={key} 
                                            onClick={() => setAiStrategy(key as any)}
                                            className={`p-4 rounded-xl border cursor-pointer transition-all ${isActive ? 'bg-purple-500/10 border-purple-500/50' : 'bg-white border-zinc-400 hover:border-zinc-500'}`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="font-bold text-zinc-900">{data.name}</div>
                                                <div className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold">{(data.gain * 100)}% Gain</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mt-3 text-xs font-bold text-zinc-950 font-mono">
                                                <div>CapEx: ${(data.capEx/1000).toFixed(0)}k</div>
                                                <div>OpEx/Yr: ${(data.opExPerUser)}/user</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <button onClick={handleCalculate} className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-auto">
                                Run Matrix <Rocket size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {view === 'gate' && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                        <ToolGate toolName="the Break-Even Modeler" onUnlock={() => { processResults(); }}>
                            <></>
                        </ToolGate>
                    </motion.div>
                )}

                {view === 'results' && (
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                        <ToolCelebration show={view === 'results'} toolName="AI ROI Modeler" />
                        
                        <div id="ai-roi-timeline-artifact" className="bg-white p-2 sm:p-6 rounded-3xl">
                            <div className="flex flex-col sm:flex-row items-center justify-between bg-white/60 border border-purple-500/20 rounded-2xl p-6 mb-8 backdrop-blur-md">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-rose-500/20 text-rose-400 border border-rose-500/50 px-2 py-0.5 rounded text-xs font-bold font-medium font-mono tracking-widest uppercase flex items-center gap-1"><Lock size={10} /> CONFIDENTIAL EXECUTIVE AUDIT</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-zinc-950 mb-1">Timeline Dashboard</h2>
                                </div>
                                <div className="mt-4 sm:mt-0 flex gap-4">
                                    <button onClick={() => setView('input')} className="px-4 py-2 border border-zinc-400 rounded-lg text-xs font-bold font-mono uppercase hover:bg-white/5 transition flex items-center gap-2">
                                        <RefreshCcw size={14} /> Recalibrate
                                    </button>
                                    <ExportToPDFButton targetId="ai-roi-pdf-export-zone" fileName={`AI_ROI_Timeline.pdf`} />
                                </div>
                            </div>

                        <div id="ai-roi-pdf-export-zone">
                         {/* Executive Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-6 bg-zinc-50 border border-zinc-400 rounded-2xl relative overflow-hidden group shrink-0">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl group-hover:bg-rose-500/10 transition-colors duration-500"></div>
                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">Implementation CapEx</div>
                                <div className="text-3xl sm:text-4xl font-black text-rose-400 break-words">${implementationCost.toLocaleString()}</div>
                                <div className="text-xs font-bold text-zinc-900 font-bold mt-2 font-mono">Initial setup & training cost</div>
                            </div>
                            
                            <div className="p-6 bg-zinc-50 border border-zinc-400 rounded-2xl relative overflow-hidden group shrink-0">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl group-hover:bg-green-500/10 transition-colors duration-500"></div>
                                <div className="text-xs font-bold font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">Annual Net Savings</div>
                                <div className="text-3xl sm:text-4xl font-black text-green-400 break-words">${netAnnualSavings.toLocaleString()}</div>
                                <div className="text-xs font-bold text-zinc-900 font-bold mt-2 font-mono">Displacing {displacedEngineers} FTEs</div>
                            </div>

                            <div className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                                <div className="text-xs font-bold font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest mb-2 flex items-center gap-2">Break-Even Horizon</div>
                                <div className="text-3xl sm:text-4xl font-black text-zinc-900">
                                    {breakEvenMonths < 0 ? 'Never' : `${breakEvenMonths.toFixed(1)} Months`}
                                </div>
                                <div className="text-xs font-bold text-zinc-900 font-bold/50 mt-2 font-mono">Until CapEx is recovered</div>
                            </div>
                        </div>

                        {/* Visualization Matrix */}
                        <div className="p-8 bg-white border border-zinc-400 rounded-2xl">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><TrendingDown className="text-zinc-900" /> Capital Amortization Timeline</h3>
                            
                            {/* Horizontal bar timeline representing months */}
                            <div className="space-y-4">
                                {[3, 6, 12, 18, 24].map((month) => {
                                    const netPosition = (netAnnualSavings / 12 * month) - implementationCost;
                                    const isProfitable = netPosition > 0;
                                    const maxLoss = implementationCost;
                                    const maxProfit = (netAnnualSavings / 12 * 24) - implementationCost;
                                    const spread = maxProfit + maxLoss;
                                    const zeroPoint = (maxLoss / spread) * 100;
                                    const barWidth = Math.abs(netPosition / spread) * 100;
                                    
                                    return (
                                        <div key={month} className="grid grid-cols-12 items-center gap-4 group">
                                            <div className="col-span-2 text-xs font-bold font-mono text-zinc-900">Month {month}</div>
                                            <div className="col-span-8 bg-white h-4 rounded-full relative overflow-hidden border border-zinc-400">
                                                <div id={`zero-line-${month}`} className={`absolute top-0 bottom-0 border-l border-zinc-500 z-10`} style={{ left: `${zeroPoint}%` }} />
                                                
                                                {/* The Bar */}
                                                <div 
                                                    id={`bar-graph-${month}`}
                                                    className={`absolute top-0 bottom-0 rounded-full ${isProfitable ? 'bg-green-500/50 group-hover:bg-green-400' : 'bg-rose-500/50 group-hover:bg-rose-400'} transition-colors`}
                                                    style={{ width: `${barWidth}%`, left: `${isProfitable ? zeroPoint : zeroPoint - barWidth}%` }}
                                                />
                                            </div>
                                            <div className={`col-span-2 text-right font-mono text-xs font-bold ${isProfitable ? 'text-green-400' : 'text-rose-400'}`}>
                                                {isProfitable ? '+' : '-'}${Math.abs(Math.round(netPosition)).toLocaleString()}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-8 pt-8 border-t border-zinc-400">
                                {/* 3-STEP BOARD REMEDIATION PLAYBOOK */}
                                <div className="capsule-container rounded-2xl p-6 sm:p-8 mb-8 border border-zinc-400 bg-zinc-50">
                                    <h3 className="text-xl font-bold text-zinc-950 mb-6 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                        3-Step CapEx Justification Playbook
                                    </h3>
                                    <p className="text-zinc-900 text-sm font-semibold mb-8">Execute this operational sequence to securely finance the ${implementationCost.toLocaleString()} CapEx requirement and guarantee the {breakEvenMonths.toFixed(1)}-month payback period.</p>

                                    <div className="space-y-4">
                                        {/* Step 1 */}
                                        <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-rose-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-rose-500/10 transition-colors"></div>
                                            <div className="bg-rose-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-rose-500/20">
                                                <span className="text-rose-400 font-bold font-mono">01</span>
                                            </div>
                                            <div className="relative z-10 w-full">
                                                <h4 className="text-zinc-950 font-bold mb-2">Hard-Lock the Headcount Freeze</h4>
                                                <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">The ${netAnnualSavings.toLocaleString()} annual savings model depends entirely on strict capacity displacement. Phantom hiring will destroy the break-even math.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-rose-400 uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-sm font-semibold font-medium text-zinc-950">Mandate an immediate requisition freeze in the affected department. Any backfill requests for the {displacedEngineers} displaced roles must require direct Board/CFO approval.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step 2 */}
                                        <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-amber-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
                                            <div className="bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-amber-500/20">
                                                <span className="text-amber-400 font-bold font-mono">02</span>
                                            </div>
                                            <div className="relative z-10 w-full">
                                                <h4 className="text-zinc-950 font-bold mb-2">Quarantine the Implementation CapEx</h4>
                                                <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">Without strict vendor and compute isolation, the initial ${implementationCost.toLocaleString()} investment will silently inflate through unmonitored API inference charges.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-sm font-semibold font-medium text-zinc-950">Establish a dedicated FinOps tracking tag specifically for this deployment. Route API tokens through a rigid gateway proxy (e.g. Cloudflare AI Gateway) with hard-capped daily spend limits.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step 3 */}
                                        <div className="bg-white/80 border border-zinc-400 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start border-l-2 border-l-cyan-500 relative overflow-hidden group hover:bg-zinc-100 transition-colors shrink-0">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
                                            <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-cyan-500/20">
                                                <span className="text-cyan-900 font-extrabold font-semibold font-bold font-mono">03</span>
                                            </div>
                                            <div className="relative z-10 w-full">
                                                <h4 className="text-zinc-950 font-bold mb-2">Schedule the Audit Clawback</h4>
                                                <p className="text-zinc-900 text-sm font-semibold leading-relaxed mb-4">CapEx investments without structured post-mortems are effectively donations to engineering R&D. Accountability must be verified at precisely {breakEvenMonths.toFixed(1)} months.</p>
                                                <div className="bg-white/60 p-3 rounded border border-zinc-400 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-xs font-bold font-medium font-mono text-cyan-900 font-extrabold font-semibold uppercase tracking-widest font-bold">
                                                        <Zap size={10} /> Execution Directive
                                                    </div>
                                                    <p className="text-sm font-semibold font-medium text-zinc-950">Insert a calendar hold for a 30-minute executive review on the exact breakeven date. If the net position is not positive, the owning VP must submit a detailed remediation plan.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <VaultUpsell 
                                    urgencyLevel={breakEvenMonths < 12 ? 'growth' : 'critical'}
                                    recommendedTracks={[
                                        { id: 'TRACK-01', title: 'Agentic Workflow Construction', desc: 'Accelerate breakeven by deploying deterministic agents.' },
                                        { id: 'TRACK-04', title: 'AI Unit Economics & Margin Collapse', desc: 'Identify AI insolvency triggers and restructure inference costs.' }
                                    ]} 
                                />

                                {/* Advisory Upsell */}
                                <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border border-purple-500/20 rounded-2xl">
                                  <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                      <span className="text-2xl">🎯</span>
                                    </div>
                                    <div>
                                      <p className="text-xs font-bold font-mono text-purple-600 uppercase tracking-wider mb-1">Want an Expert to Run This?</p>
                                      <h4 className="text-lg font-bold text-zinc-950 mb-2">Get a realistic AI ROI timeline for your organization</h4>
                                      <p className="text-sm text-zinc-600 mb-4">The timeline shows the gap. A $500 Strategy Session builds a board-ready AI investment case with specific milestones, risk-adjusted returns, and a kill criteria framework.</p>
                                      <div className="flex flex-wrap gap-3">
                                        <a href="/advisory" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Book Advisory Session →</a>
                                        <a href="/api/buy/gut_check" className="inline-flex items-center gap-2 px-5 py-2.5 border border-purple-500/30 text-purple-700 text-sm font-bold rounded-lg hover:bg-purple-50 transition-colors">$450 Gut-Check Call →</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

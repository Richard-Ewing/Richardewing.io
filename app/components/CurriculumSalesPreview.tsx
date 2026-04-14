'use client';

import React from 'react';
import { ShieldCheck, BarChart3, Presentation, Lock, Zap, Clock, PlayCircle, FileText, Database, Network, Cpu, LayoutTemplate, Activity } from 'lucide-react';
import { BorderBeam } from './magicui/border-beam';

interface CurriculumSalesPreviewProps {
    lessons?: any[];
}

export default function CurriculumSalesPreview({ lessons = [] }: CurriculumSalesPreviewProps) {
    return (
        <div className="mt-16 relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-white shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Header Content */}
            <div className="relative z-10 p-10 md:p-14 text-center border-b border-zinc-200 bg-zinc-50">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-600 font-mono text-xs uppercase tracking-widest mb-6">
                    <ShieldCheck className="w-4 h-4" /> End of Free Sequence
                </div>
                <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-zinc-900 mb-6">
                    Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-400 to-purple-500">Execution Fidelity</span>.
                </h2>
                <p className="text-lg text-zinc-800 max-w-2xl mx-auto mb-10">
                    You've seen the theory. The Vault contains the exact board-ready financial models, autonomous AI orchestration codes, and executive action playbooks that drive 8-figure valuation impacts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left mt-10">
                    <div className="bg-gradient-to-br from-white/5 to-transparent border border-zinc-200 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                        <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-5 border border-purple-500/30">
                                <BarChart3 className="w-6 h-6 text-purple-600" />
                            </div>
                            <h4 className="text-zinc-900 font-bold font-grotesk text-lg mb-2">Executive Dashboards</h4>
                            <p className="text-zinc-800 text-sm leading-relaxed">Generate deterministic, board-ready financial artifacts to justify CAPEX workflows immediately to your CFO.</p>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/5 to-transparent border border-zinc-200 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                        <div className="absolute inset-0 bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-5 border border-cyan-500/30">
                                <Database className="w-6 h-6 text-cyan-600" />
                            </div>
                            <h4 className="text-zinc-900 font-bold font-grotesk text-lg mb-2">Defensible Economics</h4>
                            <p className="text-zinc-800 text-sm leading-relaxed">Replace heuristic guesswork with hard mathematical frameworks for build-vs-buy and SLA penalty negotiations.</p>
                        </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white/5 to-transparent border border-zinc-200 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-[40px] pointer-events-none" />
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-5 border border-emerald-500/30">
                                <Zap className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h4 className="text-zinc-900 font-bold font-grotesk text-lg mb-2">3-Step Playbooks</h4>
                            <p className="text-zinc-800 text-sm leading-relaxed">Actionable remediation templates attached to every module to neutralize friction and drive instant deployment velocity.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* High-Fidelity Vault Encrypted Visuals */}
            <div className="relative bg-white overflow-hidden border-t border-zinc-200 pb-20 pt-10">
                {/* Radial gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-50/40 via-black to-zinc-100 pointer-events-none" />
                
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-600 font-mono text-[10px] uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" /> Highly Classified Assets
                        </div>
                        <h3 className="text-3xl font-bold font-grotesk text-zinc-900">Engineering Intelligence Awaiting Extraction</h3>
                        <p className="text-zinc-700 text-sm mt-3 max-w-xl mx-auto">No generic advice. No filler. Just uncompromising architectural truths and unit economic calculators.</p>
                    </div>

                    <div className="relative w-full aspect-[21/9] flex items-center justify-center -mt-10 perspective-[1000px] select-none pointer-events-none">
                        
                        {/* Center Encrypted Modal over the glass panes */}
                        <div className="absolute inset-0 z-30 flex items-center justify-center backdrop-blur-[2px]">
                            <div className="bg-white/80 p-10 rounded-3xl border border-rose-500/30 shadow-[0_0_100px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(244,63,94,0.1)] text-center max-w-md backdrop-blur-3xl transform scale-110 relative overflow-hidden">
                                <BorderBeam size={300} duration={8} delay={0} colorFrom="#f43f5e" colorTo="#3b82f6" borderWidth={2} />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 blur-[50px]" />
                                <div className="w-20 h-20 rounded-full bg-rose-50 border border-rose-500/30 flex items-center justify-center mx-auto mb-6 shadow-inner relative z-10">
                                    <Lock className="w-8 h-8 text-rose-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-zinc-900 mb-4 relative z-10 tracking-tight">Vault Terminal Locked</h4>
                                <p className="text-xs text-zinc-800 font-mono uppercase tracking-widest leading-relaxed relative z-10 bg-white/50 p-4 rounded-xl border border-zinc-200">
                                    Awaiting authorization clearance. Unlock the module to decrypt architectural playbooks, P&L models, and deterministic diagnostic utilities.
                                </p>
                            </div>
                        </div>

                        {/* Faux Premium UI Elements Floating in 3D Space */}
                        <div className="absolute w-full h-full transform-style-3d opacity-20">
                            {/* Left Data Pane */}
                            <div className="absolute left-[5%] top-[15%] w-[35%] h-[60%] bg-zinc-50 border border-zinc-200 rounded-2xl p-6 transform -rotate-y-12 rotate-z-3 shadow-2xl overflow-hidden backdrop-blur-md">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-cyan-600" />
                                        <div className="text-xs font-mono uppercase text-cyan-600 font-bold">Telemetry Stream</div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-full h-3 bg-white/5 rounded-sm" />
                                    <div className="w-full flex gap-3 h-24 mt-2">
                                        <div className="flex-1 bg-white/5 rounded-lg border border-zinc-200 flex flex-col justify-end p-2 gap-1">
                                            <div className="w-full h-1/2 bg-cyan-500/20 rounded-sm" />
                                        </div>
                                        <div className="flex-1 bg-white/5 rounded-lg border border-zinc-200 flex flex-col justify-end p-2 gap-1">
                                            <div className="w-full h-3/4 bg-purple-500/20 rounded-sm" />
                                        </div>
                                        <div className="flex-1 bg-white/5 rounded-lg border border-zinc-200 flex flex-col justify-end p-2 gap-1">
                                            <div className="w-full h-full bg-emerald-500/20 rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="w-[80%] h-3 bg-white/5 rounded-sm" />
                                    <div className="w-full h-16 bg-white/5 rounded-xl border border-zinc-200 mt-4 flex items-center justify-between px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/30" />
                                            <div className="space-y-1">
                                                <div className="w-16 h-2 bg-white/20 rounded-sm" />
                                                <div className="w-10 h-2 bg-white/10 rounded-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Code/Architecture Pane */}
                            <div className="absolute right-[5%] top-[25%] w-[35%] h-[60%] bg-white border border-purple-500/20 rounded-2xl p-6 transform rotate-y-12 -rotate-z-3 shadow-2xl overflow-hidden backdrop-blur-md">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
                                <div className="flex items-center gap-3 mb-6 border-b border-zinc-200 pb-4">
                                    <Network className="w-5 h-5 text-purple-600" />
                                    <div className="text-xs font-mono uppercase text-zinc-800 tracking-widest">Inference Architecture</div>
                                </div>
                                <div className="font-mono text-[10px] text-purple-300/50 space-y-2">
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">01</span>
                                        <span className="text-emerald-600/50">import</span> <span>{'{ orchestrator }'}</span> <span className="text-emerald-600/50">from</span> <span className="text-amber-400/50">'@exogram/core'</span>;
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">02</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">03</span>
                                        <span className="text-purple-600/50">const</span> <span>router</span> = <span>new</span> <span className="text-cyan-600/50">AgentRouter</span>({`{`});
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">04</span>
                                        <span className="ml-4 text-rose-600/50">strategy:</span> <span className="text-amber-400/50">'COST_EFFICIENT_SLM'</span>,
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">05</span>
                                        <span className="ml-4 text-rose-600/50">fallback:</span> <span className="text-amber-400/50">'FRONTIER_MODEL'</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">06</span>
                                        <span>{`});`}</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">07</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-zinc-800">08</span>
                                        <span className="text-emerald-600/50">await</span> <span>router.guardrail</span>({`payload`});
                                    </div>
                                </div>
                                <div className="absolute bottom-6 right-6 w-16 h-16 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                                    <Cpu className="w-8 h-8 text-purple-600" />
                                </div>
                            </div>
                            
                            {/* Center Top Board Presentation Pane */}
                            <div className="absolute left-[30%] top-[5%] w-[40%] h-[20%] bg-zinc-50 border border-emerald-500/20 rounded-xl p-4 transform -translate-z-10 shadow-2xl flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <LayoutTemplate className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <div className="w-24 h-2 bg-white/20 rounded-full mb-2" />
                                        <div className="w-32 h-2 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                                <div className="w-16 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                    <div className="text-[8px] text-emerald-600 font-mono uppercase font-bold tracking-widest">+ 340%</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Syllabus Render Map (Coursera-style) */}
            <div className="relative p-10 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold font-grotesk text-zinc-900 mb-6 border-b border-zinc-200 pb-4 flex items-center gap-3">
                        <FileText className="w-5 h-5 text-cyan-600" /> Module Syllabus
                    </h3>
                    
                    {lessons && lessons.length > 0 ? (
                        <div className="space-y-4">
                            {lessons.map((lesson, idx) => (
                                <div key={idx} className="bg-white/[0.02] border border-zinc-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group/lock hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
                                            {idx % 2 === 0 ? <PlayCircle className="w-5 h-5 text-cyan-500/50" /> : <Database className="w-5 h-5 text-purple-500/50" />}
                                        </div>
                                        <div>
                                            <h4 className="text-zinc-900 font-bold mb-1 group-hover/lock:text-cyan-600 transition-colors flex items-center gap-2">
                                                Lesson {idx + 1}: {lesson.title}
                                            </h4>
                                            <p className="text-zinc-700 text-sm line-clamp-2 max-w-2xl">{lesson.content}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 shrink-0 md:pl-6 md:border-l border-zinc-200">
                                        <div className="flex flex-col items-center gap-1 opacity-60">
                                            <Clock className="w-4 h-4 text-zinc-800" />
                                            <span className="text-[10px] font-mono text-zinc-700">{15 + (idx * 5)} MIN</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                            <Lock className="w-4 h-4 text-zinc-700" />
                                        </div>
                                    </div>
                                    
                                    {/* Scanline effect entirely aesthetic */}
                                    <div className="absolute inset-y-0 left-0 w-1 bg-cyan-500 opacity-0 group-hover/lock:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white/80 border border-zinc-200 rounded-2xl p-10 text-center">
                            <Lock className="w-8 h-8 text-zinc-800 mx-auto mb-4" />
                            <p className="text-zinc-700 font-mono text-sm uppercase">Curriculum data locked behind perimeter.</p>
                        </div>
                    )}
                </div>

                {/* Gradient overlay to fade bottom */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none z-10" />
                
                <div className="absolute inset-x-0 bottom-12 flex items-center justify-center z-20 pointer-events-none">
                    <div className="bg-cyan-50 backdrop-blur-xl border border-cyan-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                        <ShieldCheck className="w-5 h-5 text-cyan-600" />
                        <span className="text-cyan-600 font-mono uppercase tracking-widest text-sm font-bold shadow-cyan-400 drop-shadow-md">Encrypted Vault Asset</span>
                    </div>
                </div>
            </div>
        </div>
    );
}



import React from 'react';
import { ShieldCheck, BarChart3, Presentation, Lock, Zap, Clock, PlayCircle, FileText } from 'lucide-react';

interface CurriculumSalesPreviewProps {
    lessons?: any[];
}

export default function CurriculumSalesPreview({ lessons = [] }: CurriculumSalesPreviewProps) {
    return (
        <div className="mt-16 relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-zinc-950">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Header Content */}
            <div className="relative z-10 p-10 md:p-14 text-center border-b border-white/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
                    <ShieldCheck className="w-4 h-4" /> You've reached the end of the Free Primer
                </div>
                <h2 className="text-3xl md:text-5xl font-grotesk font-bold text-white mb-6">
                    Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Premium Vault</span>.
                </h2>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
                    The free preview taught you the mechanics. Now, unlock the proprietary frameworks, unit economics spreadsheets, and executive playbooks that actually win market share.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 border border-purple-500/30">
                            <BarChart3 className="w-5 h-5 text-purple-400" />
                        </div>
                        <h4 className="text-white font-bold font-grotesk mb-2">15 Advisory Masterclasses</h4>
                        <p className="text-zinc-500 text-sm">Deep-dive tracks covering everything from DevOps ROI to Series B burnout pipelines.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/30">
                            <Presentation className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h4 className="text-white font-bold font-grotesk mb-2">Executive Playbooks</h4>
                        <p className="text-zinc-500 text-sm">Actionable templates to defend rewrites, justify headcount, and speak to investors.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 border border-emerald-500/30">
                            <Zap className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h4 className="text-white font-bold font-grotesk mb-2">150+ Frameworks</h4>
                        <p className="text-zinc-500 text-sm">Instant access to the entire curriculum data engine and continuous updates.</p>
                    </div>
                </div>
            </div>

            {/* Syllabus Render Map (Coursera-style) */}
            <div className="relative p-10 bg-zinc-950/80">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold font-grotesk text-white mb-6 border-b border-white/10 pb-4">Syllabus Overview</h3>
                    
                    {lessons && lessons.length > 0 ? (
                        <div className="space-y-4">
                            {lessons.map((lesson, idx) => (
                                <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 group/lock hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                                            {idx % 2 === 0 ? <PlayCircle className="w-5 h-5 text-cyan-500/50" /> : <FileText className="w-5 h-5 text-purple-500/50" />}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1 group-hover/lock:text-cyan-400 transition-colors flex items-center gap-2">
                                                Lesson {idx + 1}: {lesson.title}
                                            </h4>
                                            <p className="text-zinc-500 text-sm line-clamp-2 max-w-2xl">{lesson.content}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-6 shrink-0 md:pl-6 md:border-l border-white/10">
                                        <div className="flex flex-col items-center gap-1 opacity-60">
                                            <Clock className="w-4 h-4 text-zinc-400" />
                                            <span className="text-[10px] font-mono text-zinc-500">{15 + (idx * 5)} MIN</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                            <Lock className="w-4 h-4 text-zinc-500" />
                                        </div>
                                    </div>
                                    
                                    {/* Scanline effect entirely aesthetic */}
                                    <div className="absolute inset-y-0 left-0 w-1 bg-cyan-500 opacity-0 group-hover/lock:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-10 text-center">
                            <Lock className="w-8 h-8 text-zinc-600 mx-auto mb-4" />
                            <p className="text-zinc-500 font-mono text-sm uppercase">Curriculum data locked behind perimeter.</p>
                        </div>
                    )}
                </div>

                {/* Gradient overlay to fade bottom */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none" />
                
                <div className="absolute inset-x-0 bottom-12 flex items-center justify-center z-20 pointer-events-none">
                    <div className="bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-full px-6 py-3 flex items-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                        <ShieldCheck className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-400 font-mono uppercase tracking-widest text-sm font-bold">Encrypted Vault Asset</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

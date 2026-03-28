import React from 'react';
import { ShieldCheck, BarChart3, Presentation, Lock, Zap } from 'lucide-react';

export default function CurriculumSalesPreview() {
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
                        <p className="text-zinc-500 text-sm">Instant access to the entire 60-module curriculum data engine and continuous updates.</p>
                    </div>
                </div>
            </div>

            {/* Blurred Mockup Area to demonstrate value */}
            <div className="relative p-10 bg-zinc-950/50">
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-10" />
                
                <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6 opacity-30 select-none pointer-events-none">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <div className="h-4 bg-zinc-800 rounded w-1/3 mb-6" />
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-3 bg-zinc-800 rounded w-3/4" />
                                    <div className="h-2 bg-zinc-800 rounded w-1/2" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-zinc-800 rounded-full" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-3 bg-zinc-800 rounded w-full" />
                                    <div className="h-2 bg-zinc-800 rounded w-2/3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                        <div className="h-4 bg-emerald-500/20 rounded w-1/4 mb-4" />
                        <div className="h-10 bg-zinc-800 rounded w-1/2 mb-6" />
                        <div className="h-32 bg-zinc-800 rounded-xl w-full" />
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 mt-16">
                    <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4 flex items-center gap-3">
                        <Lock className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-mono uppercase tracking-widest text-sm font-bold">Premium Content Locked</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

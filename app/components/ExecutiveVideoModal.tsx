"use client";

import React, { useState } from 'react';
import { Play, X, Shield, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const ExecutiveVideoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Inline Video Trigger Pill / Card */}
            <div
                onClick={() => setIsOpen(true)}
                className="group relative cursor-pointer inline-flex items-center gap-4 p-3 pr-6 rounded-2xl bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-zinc-900 border border-purple-500/30 text-white shadow-xl shadow-purple-950/20 hover:border-purple-400 hover:scale-[1.01] transition-all duration-200"
            >
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-purple-400/50 shrink-0 bg-purple-950">
                    <Image
                        src="/assets/headshot.jpg"
                        alt="Richard Ewing Video Briefing"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-purple-950/40 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-white/90 text-purple-950 flex items-center justify-center pl-0.5 group-hover:scale-110 transition-transform">
                            <Play className="w-3 h-3 fill-current" />
                        </div>
                    </div>
                </div>

                <div className="text-left">
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-purple-300 uppercase tracking-widest">
                        <Sparkles className="w-3 h-3 text-purple-400" />
                        <span>90-Second Executive Brief</span>
                    </div>
                    <div className="font-bold text-sm text-white group-hover:text-purple-200 transition-colors">
                        What is an AI Economist?
                    </div>
                    <div className="text-xs text-zinc-300 font-medium">
                        Watch Richard Ewing explain AI unit economics & governance
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
                    <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl text-white">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mb-4">
                            <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                                Executive Briefing Video
                            </span>
                            <h3 className="text-2xl font-grotesk font-bold text-white">
                                What is an AI Economist?
                            </h3>
                        </div>

                        {/* Video Player Canvas */}
                        <div className="relative aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-16 h-16 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/30">
                                <Play className="w-8 h-8 fill-current ml-1" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">
                                AI Economics & R&D Capital Audit Overview
                            </h4>
                            <p className="text-xs text-zinc-400 max-w-md mb-6 leading-relaxed">
                                &ldquo;An AI Economist translates engineering output into CFO-level financial outcomes. We audit R&D spend, calculate unit economics, and install deterministic cost caps.&rdquo;
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center text-[10px] font-mono">
                                <span className="px-2.5 py-1 bg-zinc-800 rounded text-purple-300">CTO Board Defense</span>
                                <span className="px-2.5 py-1 bg-zinc-800 rounded text-purple-300">CFO P&L Visibility</span>
                                <span className="px-2.5 py-1 bg-zinc-800 rounded text-purple-300">PE Tech Due Diligence</span>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-between items-center text-xs text-zinc-400 font-mono">
                            <span>Presenter: Richard Ewing, Founder of Exogram & CareerWin.ai</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors cursor-pointer"
                            >
                                Close Video
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExecutiveVideoModal;

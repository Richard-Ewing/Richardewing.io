'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ModuleStepperProps {
    children: React.ReactNode;
    nextHref?: string;
    moduleTitle: string;
}

export default function ModuleStepper({ children, nextHref, moduleTitle }: ModuleStepperProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const childArray = React.Children.toArray(children);
    const totalLessons = childArray.length;

    const handleNext = () => {
        if (activeIndex < totalLessons - 1) {
            setActiveIndex(activeIndex + 1);
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Progress Bar */}
            <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${((activeIndex + 1) / totalLessons) * 100}%` }}
                    />
                </div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    Lesson {activeIndex + 1} / {totalLessons}
                </div>
            </div>

            {/* Render the Active Lesson */}
            <div className="min-h-[400px]">
                {childArray[activeIndex]}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-8">
                <button
                    onClick={handlePrev}
                    disabled={activeIndex === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-sm tracking-widest disabled:opacity-30 disabled:pointer-events-none hover:bg-white/5 transition-all"
                >
                    <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                
                {activeIndex < totalLessons - 1 ? (
                    <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-8 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold text-sm tracking-widest hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all shadow-lg shadow-cyan-500/10"
                    >
                        Next Lesson <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                ) : (
                    nextHref ? (
                        <a
                            href={nextHref}
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm tracking-widest hover:opacity-90 transition-all shadow-lg shadow-emerald-500/20"
                        >
                            Complete Module <CheckCircle2 className="w-4 h-4 ml-1" />
                        </a>
                    ) : (
                        <div className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 font-bold text-sm tracking-widest cursor-default">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Track Completed
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

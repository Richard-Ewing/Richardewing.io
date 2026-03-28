'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

interface ModuleStepperProps {
    children: React.ReactNode;
    nextHref?: string;
    moduleTitle: string;
}

export default function ModuleStepper({ children, nextHref, moduleTitle }: ModuleStepperProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isCompleting, setIsCompleting] = useState(false);
    const { userId } = useAuth();
    const router = useRouter();
    const childArray = React.Children.toArray(children);
    const totalLessons = childArray.length;

    useEffect(() => {
        // Log progress when user loads the activeIndex
        if (!userId) return;
        const progress = Math.round(((activeIndex + 1) / totalLessons) * 100);
        const isCompleted = activeIndex === totalLessons - 1;
        
        fetch('/api/progress', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content_id: moduleTitle || 'unknown_module',
                content_type: 'curriculum',
                progress_percentage: progress,
                is_completed: isCompleted
            })
        }).catch(err => console.debug('Failed to log progress', err));
    }, [activeIndex, moduleTitle, totalLessons, userId]);

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

    const handleComplete = async () => {
        if (!userId) {
            if (nextHref) router.push(nextHref);
            return;
        }
        
        setIsCompleting(true);
        try {
            await fetch('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content_id: moduleTitle || 'unknown_module',
                    content_type: 'curriculum',
                    progress_percentage: 100,
                    is_completed: true
                })
            });
        } catch (err) {
            console.debug('Failed to log completion', err);
        } finally {
            if (nextHref) {
                router.push(nextHref);
            }
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
                        <button
                            onClick={handleComplete}
                            disabled={isCompleting}
                            className={`flex items-center gap-2 px-8 py-3 rounded-xl text-white font-bold text-sm tracking-widest transition-all shadow-lg ${isCompleting ? 'bg-emerald-600/50 cursor-wait' : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 shadow-emerald-500/20'}`}
                        >
                            {isCompleting ? 'Completing...' : 'Mark as Complete & Continue'} <CheckCircle2 className="w-4 h-4 ml-1" />
                        </button>
                    ) : (
                        <button 
                            onClick={handleComplete}
                            disabled={isCompleting}
                            className={`flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 text-white font-bold text-sm tracking-widest transition-all ${isCompleting ? 'bg-white/5 cursor-wait' : 'bg-white/10 hover:bg-white/20'}`}
                        >
                            {isCompleting ? 'Saving...' : 'Mark Track as Completed'} <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProgressCompleteButton({ moduleId, nextHref }: { moduleId: string, nextHref?: string }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const progress = JSON.parse(localStorage.getItem('vault_progress') || '[]');
        if (progress.includes(moduleId)) {
            setTimeout(() => setIsCompleted(true), 0);
        }
    }, [moduleId]);

    const handleComplete = async () => {
        const progress = JSON.parse(localStorage.getItem('vault_progress') || '[]');
        if (!progress.includes(moduleId)) {
            progress.push(moduleId);
            localStorage.setItem('vault_progress', JSON.stringify(progress));
            setIsCompleted(true);
        }

        // Trigger a custom event so other components (if on the same page) could update
        window.dispatchEvent(new Event('vault_progress_updated'));

        // Sync with database for cross-device persistence
        try {
            await fetch('/api/progress', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content_id: moduleId,
                    content_type: 'module',
                    progress_percentage: 100,
                    is_completed: true
                })
            });
        } catch (error) {
            console.error('Failed to sync progress to database', error);
        }

        if (nextHref) {
            router.push(nextHref);
        }
    };

    return (
        <div className="mt-12 text-center">
            {isCompleted ? (
                <div className="inline-flex flex-col items-center gap-4 w-full">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                        <span>✓ Module Completed</span>
                    </div>
                    {nextHref ? (
                        <button onClick={() => router.push(nextHref)} className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm underline underline-offset-4">
                            Proceed to Next Module →
                        </button>
                    ) : (
                        /* ADVISORY ESCALATION PITCH (End of Track) */
                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-5 duration-700 max-w-2xl mx-auto text-left relative">
                            {/* Glow FX */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
                            
                            <div className="rounded-3xl border border-zinc-200 bg-zinc-100 backdrop-blur-xl overflow-hidden shadow-2xl relative z-10">
                                <div className="p-8 pb-0 flex gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">Track Completed</div>
                                        <h3 className="text-2xl font-grotesk font-bold text-zinc-950 mb-2">Unlock Private Office Hours</h3>
                                        <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                                            You've mastered the theory. Now let's map it to your specific stack. Book a 1-on-1 strategic synthesis call to apply this exact framework to your firm's architecture, team layout, and board commitments.
                                        </p>
                                    </div>
                                </div>
                                <div className="border-t border-zinc-200 bg-zinc-50 p-6 flex items-center justify-between">
                                    <div className="text-xs text-zinc-700 max-w-[200px]">Enterprise Advisory Intake Questionnaire required pre-call.</div>
                                    <button onClick={() => window.location.href='/advisory'} className="px-6 py-3 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-widest rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-xs">
                                        Apply for Advisory →
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <button
                    onClick={handleComplete}
                    className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold hover:opacity-90 transition-all overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative z-10 flex items-center gap-2">
                        Mark Module as Complete {nextHref && '& Continue →'}
                    </span>
                </button>
            )}
        </div>
    );
}

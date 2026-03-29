'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProgressCompleteButton({ moduleId, nextHref }: { moduleId: string, nextHref?: string }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const progress = JSON.parse(localStorage.getItem('vault_progress') || '[]');
        if (progress.includes(moduleId)) {
            setIsCompleted(true);
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
                <div className="inline-flex flex-col items-center gap-4">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                        <span>✓ Module Completed</span>
                    </div>
                    {nextHref && (
                        <button onClick={() => router.push(nextHref)} className="text-zinc-400 hover:text-white transition-colors text-sm underline underline-offset-4">
                            Proceed to Next Module →
                        </button>
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

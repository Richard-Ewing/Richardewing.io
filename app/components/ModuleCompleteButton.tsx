'use client';

import { useState } from 'react';
import Link from 'next/link';
import CelebrationOverlay from './CelebrationOverlay';

interface ModuleCompleteButtonProps {
    nextHref?: string;
    moduleTitle: string;
}

export default function ModuleCompleteButton({ nextHref, moduleTitle }: ModuleCompleteButtonProps) {
    const [celebrating, setCelebrating] = useState(false);
    const [completed, setCompleted] = useState(false);

    const handleComplete = () => {
        setCelebrating(true);
        setCompleted(true);
        // Persist completion to localStorage
        try {
            const key = 'completedModules';
            const stored = JSON.parse(localStorage.getItem(key) || '[]');
            if (!stored.includes(moduleTitle)) {
                stored.push(moduleTitle);
                localStorage.setItem(key, JSON.stringify(stored));
            }
        } catch { /* localStorage not available */ }
    };

    return (
        <>
            <CelebrationOverlay
                isActive={celebrating}
                onComplete={() => setCelebrating(false)}
                title="Module Complete!"
                subtitle={`You finished "${moduleTitle}". Keep building your engineering economics expertise.`}
                duration={4500}
            />

            <div className="mt-12 rounded-2xl border border-zinc-400 bg-zinc-50 p-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-1">
                            {completed ? '🏆 Module Complete!' : 'Finished all lessons?'}
                        </h3>
                        <p className="text-sm text-zinc-900 font-medium">
                            {completed
                                ? 'Great work! Your progress has been saved.'
                                : 'Mark this module as complete to track your progress.'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {!completed ? (
                            <button
                                onClick={handleComplete}
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 font-semibold font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
                            >
                                ✓ Mark Complete
                            </button>
                        ) : (
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                                <span className="text-emerald-800 font-semibold text-lg">✓</span>
                                <span className="text-sm font-bold text-emerald-800 font-semibold">Completed</span>
                            </div>
                        )}
                        {nextHref && (
                            <Link
                                href={nextHref}
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-zinc-950 font-semibold font-bold text-sm hover:opacity-90 transition-opacity"
                            >
                                Next Module →
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <Link href="/curriculum/tracks" className="text-sm text-zinc-900 font-medium hover:text-zinc-900 transition-colors">← Back to Tracks</Link>
            </div>
        </>
    );
}

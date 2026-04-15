'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface VaultProgressFlywheelProps {
    serverCompletedCount: number;
    totalModulesCount: number;
    serverCompletedModuleIds: string[];
}

export default function VaultProgressFlywheel({ serverCompletedCount, totalModulesCount, serverCompletedModuleIds }: VaultProgressFlywheelProps) {
    const [completedCount, setCompletedCount] = useState(serverCompletedCount);
    const [percentage, setPercentage] = useState(
        totalModulesCount > 0 ? Math.min(100, Math.round((serverCompletedCount / totalModulesCount) * 100)) : 0
    );

    useEffect(() => {
        let isSyncNeeded = false;
        let localIdsToSync: string[] = [];
        try {
            const localRaw = localStorage.getItem('vault_progress');
            if (localRaw) {
                const localIds = JSON.parse(localRaw) as string[];
                // Merge local into server
                const merged = new Set([...serverCompletedModuleIds, ...localIds]);
                if (merged.size > serverCompletedCount) {
                    setTimeout(() => {
                        setCompletedCount(merged.size);
                        setPercentage(totalModulesCount > 0 ? Math.min(100, Math.round((merged.size / totalModulesCount) * 100)) : 0);
                    }, 0);
                    isSyncNeeded = true;
                    localIdsToSync = localIds;
                }
            }
        } catch (e) {
            console.error('Failed to parse local vault_progress for flywheel', e);
        }

        if (isSyncNeeded && localIdsToSync.length > 0) {
            fetch('/api/progress/sync', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ moduleIds: localIdsToSync })
            }).catch(console.error);
        }
    }, [serverCompletedModuleIds, serverCompletedCount, totalModulesCount]);

    const circumference = 2 * Math.PI * 45; // r=45
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <section className="card p-6 border-violet-500/20 bg-violet-500/[0.02] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                <div className="relative w-32 h-32 flex-shrink-0">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="64" cy="64" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-zinc-900/5" />
                        <circle 
                            cx="64" cy="64" r="45" fill="none" stroke="currentColor" strokeWidth="8" 
                            className="text-violet-500 transition-all duration-1000 ease-out"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-grotesk font-bold text-zinc-900">{percentage}%</span>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-zinc-950 mb-2">Architectural Mastery</h2>
                    <p className="text-sm font-semibold text-zinc-900 font-medium mb-4">
                        You have mastered <strong className="text-violet-400">{completedCount}</strong> out of <strong className="text-zinc-900">{totalModulesCount}</strong> core modules across {Math.ceil(totalModulesCount / 15)} disciplines. The curriculum continually adapts to macroeconomic trends.
                    </p>
                    <Link href="/vault/curriculum/tracks" className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-zinc-400 rounded-lg text-sm font-semibold text-zinc-950 transition-all">
                        Explore All {Math.ceil(totalModulesCount / 15)} Tracks <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

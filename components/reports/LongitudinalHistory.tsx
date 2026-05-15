'use client';

import React, { useEffect, useState } from 'react';
import { loadDiagnosticHistory, DiagnosticSessionRecord } from '@/lib/storage/session';
import { DiagnosticTool } from '@/lib/diagnostics/benchmarks';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

interface LongitudinalHistoryProps {
    tool: DiagnosticTool;
    scoreKey: string; // the key inside data that holds the primary score
}

export function LongitudinalHistory({ tool, scoreKey }: LongitudinalHistoryProps) {
    const [history, setHistory] = useState<DiagnosticSessionRecord[]>([]);

    useEffect(() => {
        const records = loadDiagnosticHistory(tool);
        setHistory(records);
    }, [tool]);

    if (history.length < 2) {
        // Not enough history to show a trendline
        return null;
    }

    const firstScore = history[0].data[scoreKey];
    const latestScore = history[history.length - 1].data[scoreKey];
    const delta = latestScore - firstScore;

    const isHigherBetter = tool !== 'pdi';
    let isImproved = false;
    if (isHigherBetter) {
        isImproved = delta > 0;
    } else {
        isImproved = delta < 0;
    }

    return (
        <div className="bg-white border border-zinc-200 rounded-xl p-6 mt-6">
            <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-zinc-900 font-medium" />
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Historical Trend</span>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm text-zinc-900 font-medium">Initial Score</div>
                    <div className="text-2xl font-bold text-zinc-900 font-medium">{typeof firstScore === 'number' ? firstScore.toFixed(0) : firstScore}</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {delta === 0 ? (
                        <span className="text-sm font-bold text-zinc-800">No Change</span>
                    ) : isImproved ? (
                        <div className="flex flex-col items-center text-emerald-600">
                            <TrendingUp className="w-6 h-6 mb-1" />
                            <span className="text-xs font-bold uppercase tracking-widest">Improved</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-red-600">
                            <TrendingDown className="w-6 h-6 mb-1" />
                            <span className="text-xs font-bold uppercase tracking-widest">Regressed</span>
                        </div>
                    )}
                </div>

                <div className="text-right">
                    <div className="text-sm text-zinc-900 font-medium">Latest Score</div>
                    <div className="text-2xl font-bold text-zinc-900">{typeof latestScore === 'number' ? latestScore.toFixed(0) : latestScore}</div>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100">
                <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-900 font-bold">{new Date(history[0].timestamp).toLocaleDateString()}</span>
                    <span className="text-xs text-zinc-900 font-bold">{new Date(history[history.length - 1].timestamp).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}

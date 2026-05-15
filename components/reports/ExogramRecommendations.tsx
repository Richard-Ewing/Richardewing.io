import React from 'react';
import { getRelevantExogramCapabilities } from '@/lib/diagnostics/exogramMappings';
import Link from 'next/link';

interface ExogramRecommendationsProps {
    score: number;
    maintenance: number;
}

export function ExogramRecommendations({ score, maintenance }: ExogramRecommendationsProps) {
    const mappings = getRelevantExogramCapabilities(score, maintenance);

    if (mappings.length === 0) return null;

    return (
        <div className="capsule-container rounded-2xl p-6 mb-6 mt-6 bg-purple-50/50 border border-purple-200">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-purple-900">Exogram Inevitability</span>
            </div>
            <p className="text-sm font-medium text-zinc-900 mb-4">
                Your current operational risks require deterministic enforcement infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {mappings.map((m, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 border border-purple-100 shadow-sm">
                        <div className="text-xs font-bold text-zinc-800 mb-1">Risk Identified</div>
                        <div className="text-sm font-bold text-red-900 mb-2">{m.risk}</div>
                        <div className="text-xs font-bold text-zinc-800 mb-1">Required Enforcement</div>
                        <div className="text-sm font-bold text-purple-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            {m.capability}
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/exogram" className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors">
                Explore Exogram Infrastructure →
            </Link>
        </div>
    );
}

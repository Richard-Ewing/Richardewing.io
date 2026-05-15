import React from 'react';

interface BenchmarkCardProps {
    title: string;
    yourScore: number;
    industryAverage: number;
    topQuartile: number;
    percentileBand: string;
    description: string;
    isHigherBetter?: boolean;
}

export function BenchmarkCard({ title, yourScore, industryAverage, topQuartile, percentileBand, description, isHigherBetter = true }: BenchmarkCardProps) {
    const isTopTier = percentileBand === 'Top Quartile';
    const isAboveAverage = percentileBand === 'Above Average';
    
    let bandColor = 'text-red-600';
    if (isTopTier) bandColor = 'text-emerald-600';
    else if (isAboveAverage) bandColor = 'text-amber-600';

    return (
        <div className="p-5 rounded-xl border border-zinc-200 bg-white">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold font-grotesk text-lg text-zinc-900">{title}</h3>
                <span className={`text-xs font-mono font-bold uppercase tracking-widest px-2 py-1 bg-zinc-100 rounded ${bandColor}`}>
                    {percentileBand}
                </span>
            </div>
            
            <p className="text-sm text-zinc-900 font-medium mb-6 font-medium leading-relaxed">{description}</p>
            
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs font-bold text-zinc-800 mb-1">
                        <span>Your Assessment</span>
                        <span className="text-zinc-900">{yourScore}</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-2">
                        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: `${Math.min(100, Math.max(0, yourScore))}%` }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs font-bold text-zinc-800 mb-1">
                        <span>Industry Average</span>
                        <span>{industryAverage}</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-1.5">
                        <div className="bg-zinc-300 h-1.5 rounded-full" style={{ width: `${Math.min(100, Math.max(0, industryAverage))}%` }}></div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-xs font-bold text-zinc-800 mb-1">
                        <span>Top Quartile</span>
                        <span>{topQuartile}</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-1.5">
                        <div className="bg-zinc-300 h-1.5 rounded-full" style={{ width: `${Math.min(100, Math.max(0, topQuartile))}%` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

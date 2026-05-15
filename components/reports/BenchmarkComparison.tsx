import React from 'react';
import { getBenchmark, DiagnosticTool } from '@/lib/diagnostics/benchmarks';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface BenchmarkComparisonProps {
    tool: DiagnosticTool;
    userScore: number;
    industry?: string;
}

export function BenchmarkComparison({ tool, userScore, industry = 'Default' }: BenchmarkComparisonProps) {
    const benchmark = getBenchmark(tool, industry);
    
    // Determine interpretation based on unit (e.g. higher score is worse for PDI, higher is better for APER/AUEB)
    const isHigherBetter = tool !== 'pdi';
    
    const delta = userScore - benchmark.industryAverage;
    const absDelta = Math.abs(delta);
    
    let isBetterThanAverage = false;
    if (delta === 0) {
        isBetterThanAverage = false; // tie
    } else if (isHigherBetter) {
        isBetterThanAverage = delta > 0;
    } else {
        isBetterThanAverage = delta < 0;
    }

    const formatValue = (val: number) => {
        if (benchmark.unit === 'currency') return `$${(val / 1000).toFixed(0)}k`;
        if (benchmark.unit === 'percentage') return `${val}%`;
        return val.toString();
    };

    return (
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 mt-6">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Category Benchmark: {industry === 'Default' ? 'Global SaaS' : industry}</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="text-sm text-zinc-900 font-medium mb-1">Your Score</div>
                    <div className="text-3xl font-bold text-zinc-900">{formatValue(userScore)}</div>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                    {delta === 0 ? (
                        <div className="flex flex-col items-center text-zinc-800">
                            <Minus className="w-6 h-6 mb-1" />
                            <span className="text-xs font-bold uppercase tracking-widest">Average</span>
                        </div>
                    ) : isBetterThanAverage ? (
                        <div className="flex flex-col items-center text-emerald-600">
                            <TrendingUp className="w-6 h-6 mb-1" />
                            <span className="text-xs font-bold uppercase tracking-widest">{formatValue(absDelta)} Better</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-red-600">
                            <TrendingDown className="w-6 h-6 mb-1" />
                            <span className="text-xs font-bold uppercase tracking-widest">{formatValue(absDelta)} Worse</span>
                        </div>
                    )}
                </div>

                <div className="text-right">
                    <div className="text-sm text-zinc-900 font-medium mb-1">Industry Avg</div>
                    <div className="text-3xl font-bold text-zinc-900">{formatValue(benchmark.industryAverage)}</div>
                </div>
            </div>
            
            <p className="mt-4 text-sm text-zinc-900 font-medium italic">
                Organizations in your category average a score of {formatValue(benchmark.industryAverage)}. Your organization scored {formatValue(userScore)}.
            </p>
        </div>
    );
}

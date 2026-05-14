import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface TrendCardProps {
    title: string;
    metric: string | number;
    delta: number;
    isHigherBetter?: boolean;
    description: string;
}

export function TrendCard({ title, metric, delta, isHigherBetter = true, description }: TrendCardProps) {
    const isPositiveDelta = delta > 0;
    const isNeutralDelta = delta === 0;
    
    // Determine if the trend is "good" or "bad"
    let isFavorable = isNeutralDelta;
    if (!isNeutralDelta) {
        isFavorable = isHigherBetter ? isPositiveDelta : !isPositiveDelta;
    }

    const trendColor = isFavorable ? 'text-emerald-600' : 'text-red-600';
    const trendBg = isFavorable ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100';
    const neutralBg = 'bg-zinc-50 border-zinc-200 text-zinc-500';

    return (
        <div className="p-5 rounded-xl border border-zinc-200 bg-white h-full flex flex-col justify-between">
            <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">{title}</h3>
                <div className="flex items-end gap-3 mb-3">
                    <span className="text-3xl font-grotesk font-bold text-zinc-900">{metric}</span>
                    
                    <div className={`flex items-center px-2 py-0.5 rounded text-xs font-bold ${isNeutralDelta ? neutralBg : trendBg} ${!isNeutralDelta && trendColor}`}>
                        {isPositiveDelta ? <ArrowUpRight className="w-3 h-3 mr-1" /> : (isNeutralDelta ? <Minus className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />)}
                        {Math.abs(delta)}%
                    </div>
                </div>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
                {description}
            </p>
        </div>
    );
}

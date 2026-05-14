import React from 'react';
import { AlertTriangle, AlertOctagon, Info } from 'lucide-react';

interface RiskCardProps {
    title: string;
    riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
    description: string;
    actionLabel?: string;
    actionUrl?: string;
}

export function RiskCard({ title, riskLevel, description, actionLabel, actionUrl }: RiskCardProps) {
    const levelStyles = {
        Low: 'bg-emerald-50 border-emerald-200 text-emerald-800',
        Moderate: 'bg-amber-50 border-amber-200 text-amber-800',
        High: 'bg-orange-50 border-orange-200 text-orange-800',
        Critical: 'bg-red-50 border-red-200 text-red-800'
    };

    const levelIcon = {
        Low: <Info className="w-5 h-5 text-emerald-600" />,
        Moderate: <AlertTriangle className="w-5 h-5 text-amber-600" />,
        High: <AlertTriangle className="w-5 h-5 text-orange-600" />,
        Critical: <AlertOctagon className="w-5 h-5 text-red-600" />
    };

    return (
        <div className={`p-5 rounded-xl border ${levelStyles[riskLevel]} flex flex-col justify-between h-full`}>
            <div>
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold font-grotesk text-lg">{title}</h3>
                    {levelIcon[riskLevel]}
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest opacity-80 mb-2">
                    Risk Level: {riskLevel}
                </div>
                <p className="text-sm opacity-90 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
            {actionLabel && actionUrl && (
                <div className="mt-5">
                    <a href={actionUrl} className="inline-flex text-xs font-bold font-mono tracking-widest uppercase hover:underline opacity-90">
                        {actionLabel} &rarr;
                    </a>
                </div>
            )}
        </div>
    );
}

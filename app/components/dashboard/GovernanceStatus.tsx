import React from 'react';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

interface GovernanceStatusProps {
    status: 'Developing' | 'Reactive' | 'Advanced' | 'Unknown';
    lastAssessmentDate?: Date;
}

export function GovernanceStatus({ status, lastAssessmentDate }: GovernanceStatusProps) {
    const statusConfig = {
        Unknown: { icon: Shield, color: 'text-zinc-500', bg: 'bg-zinc-100', border: 'border-zinc-200', text: 'Baseline Required' },
        Developing: { icon: ShieldAlert, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', text: 'Developing / High Risk' },
        Reactive: { icon: Shield, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', text: 'Reactive / Moderate Risk' },
        Advanced: { icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'Advanced / Governed' }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
        <div className={`p-5 rounded-xl border ${config.bg} ${config.border} flex items-center justify-between`}>
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${config.color}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">Overall Governance Maturity</h3>
                    <div className={`text-xl font-grotesk font-bold ${config.color}`}>
                        {config.text}
                    </div>
                </div>
            </div>
            {lastAssessmentDate && (
                <div className="text-right">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">Last Sync</div>
                    <div className="text-sm font-bold text-zinc-900">{lastAssessmentDate.toLocaleDateString()}</div>
                </div>
            )}
        </div>
    );
}

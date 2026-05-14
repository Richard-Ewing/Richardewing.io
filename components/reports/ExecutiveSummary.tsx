import React from 'react';
import { LeadCaptureGate } from '@/components/reports/LeadCaptureGate';

interface ExecutiveSummaryProps {
    tool: string;
    persona: string;
    isAtRisk: boolean;
    freeChildren?: React.ReactNode;
    gatedChildren?: React.ReactNode;
    extraData?: Record<string, any>;
}

export function ExecutiveSummary({ tool, persona, isAtRisk, freeChildren, gatedChildren, extraData }: ExecutiveSummaryProps) {
    return (
        <div className="bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-50/60 rounded-2xl p-6 border border-zinc-400">
            <div className="flex items-center gap-2 mb-4">
                <div className={`w-3 h-3 rounded-full animate-pulse ${isAtRisk ? 'bg-red-500' : 'bg-cyan-400'}`} />
                <span className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-900">Executive Summary</span>
            </div>

            {freeChildren && (
                <ul className="space-y-2 text-zinc-900 text-sm font-semibold mb-6">
                    {freeChildren}
                </ul>
            )}

            {gatedChildren && (
                <LeadCaptureGate toolName={tool} extraData={{ persona, ...extraData }}>
                    <div className="mt-6">
                        {gatedChildren}
                    </div>
                </LeadCaptureGate>
            )}
        </div>
    );
}

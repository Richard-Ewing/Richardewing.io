'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function MemoryComparisonTable() {
    const comparisonRows = [
        {
            dimension: 'Starting point',
            ordinary: 'Responds mainly to what you type now',
            exogram: 'Uses relevant context from your prior work, preferences, decisions, and current task'
        },
        {
            dimension: 'Prompting burden',
            ordinary: 'Requires detailed prompting to get useful results',
            exogram: 'Lets you ask naturally and clarifies only what it still needs'
        },
        {
            dimension: 'Continuity',
            ordinary: 'Starts each new thread with limited or no memory of prior work',
            exogram: 'Carries forward projects, plans, relationships, and open work'
        },
        {
            dimension: 'Depth of response',
            ordinary: 'Gives an answer to the immediate question',
            exogram: 'Helps identify what matters, what changed, and what should happen next'
        },
        {
            dimension: 'Transparency',
            ordinary: 'Memory is often hidden, generic, or invisible to the user',
            exogram: 'Lets you see, edit, and control the context it uses'
        },
        {
            dimension: 'Privacy options',
            ordinary: 'Typically runs through one cloud provider with limited control',
            exogram: 'One Exogram experience with private local and cloud reasoning options'
        },
        {
            dimension: 'Core outcome',
            ordinary: 'Answers an isolated prompt in the moment',
            exogram: 'Helps continue a project, decision, research process, or long-running plan'
        }
    ];

    return (
        <div className="w-full overflow-hidden border border-[var(--line)] rounded-2xl bg-white shadow-sm text-left">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-[var(--line)] bg-[var(--paper2)]">
                            <th className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] w-1/4">
                                Dimension
                            </th>
                            <th className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] w-[37.5%] border-l border-[var(--line)]">
                                Typical AI Chat
                            </th>
                            <th className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--gold)] w-[37.5%] border-l border-[var(--line)] bg-[var(--forest2)] text-white">
                                Exogram
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--line)] text-sm">
                        {comparisonRows.map((row, idx) => (
                            <tr
                                key={row.dimension}
                                className={`transition-colors ${
                                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAF8]'
                                } hover:bg-[var(--paper)]`}
                            >
                                <td className="py-4 px-5 font-semibold text-[var(--ink)] align-top text-xs font-mono">
                                    {row.dimension}
                                </td>
                                <td className="py-4 px-5 text-[var(--muted)] align-top border-l border-[var(--line)] leading-relaxed text-xs sm:text-sm">
                                    <div className="flex items-start gap-2">
                                        <X className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                                        <span>{row.ordinary}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-5 text-[var(--ink)] font-medium align-top border-l border-[var(--line)] bg-[var(--forest2)]/5 leading-relaxed text-xs sm:text-sm">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5 font-bold" />
                                        <span>{row.exogram}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-[var(--paper2)] border-t border-[var(--line)] text-xs text-[var(--muted)] font-mono flex items-center justify-between">
                <span>The difference between answering a prompt and understanding the situation.</span>
                <span className="text-[var(--gold)] font-bold">Exogram</span>
            </div>
        </div>
    );
}

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
        <div className="w-full overflow-hidden border border-zinc-300 rounded-2xl bg-white shadow-sm text-left">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-300 bg-zinc-50/80">
                            <th className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 w-1/4">
                                Dimension
                            </th>
                            <th className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 w-[37.5%] border-l border-zinc-200">
                                Typical AI Chat
                            </th>
                            <th className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 w-[37.5%] border-l border-zinc-200 bg-purple-50/60">
                                Exogram
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-sm">
                        {comparisonRows.map((row, idx) => (
                            <tr
                                key={row.dimension}
                                className={`transition-colors ${
                                    idx % 2 === 0 ? 'bg-white' : 'bg-zinc-50/30'
                                } hover:bg-purple-50/20`}
                            >
                                <td className="py-4 px-5 font-semibold text-zinc-950 align-top text-xs font-mono">
                                    {row.dimension}
                                </td>
                                <td className="py-4 px-5 text-zinc-600 align-top border-l border-zinc-200 leading-relaxed text-xs sm:text-sm">
                                    <div className="flex items-start gap-2">
                                        <X className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                                        <span>{row.ordinary}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-5 text-zinc-900 font-medium align-top border-l border-zinc-200 bg-purple-50/30 leading-relaxed text-xs sm:text-sm">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                                        <span>{row.exogram}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-4 bg-zinc-50 border-t border-zinc-200 text-xs text-zinc-600 font-mono flex items-center justify-between">
                <span>The difference between answering a prompt and understanding the situation.</span>
                <span className="text-purple-700 font-bold">Exogram</span>
            </div>
        </div>
    );
}

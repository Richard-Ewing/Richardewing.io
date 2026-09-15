'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

export default function MemoryComparisonTable() {
    const comparisonRows = [
        {
            dimension: 'Scope of Memory',
            ordinary: 'Saves preferences or past messages',
            exogram: 'Preserves scoped events, entities, relationships, evidence, and task state'
        },
        {
            dimension: 'Retrieval Logic',
            ordinary: 'Retrieves similar text based on raw vector similarity',
            exogram: 'Retrieves context based on relevance, relationship, timing, source, and status'
        },
        {
            dimension: 'Epistemic Status',
            ordinary: 'Treats all remembered content similarly',
            exogram: 'Distinguishes a fact, preference, proposal, policy, verified outcome, and inference'
        },
        {
            dimension: 'Visibility & Control',
            ordinary: 'Uses personalization invisibly behind closed doors',
            exogram: 'Shows relevant context transparently and lets users edit or suppress it'
        },
        {
            dimension: 'Temporal Accuracy',
            ordinary: 'May carry stale or outdated context forward indefinitely',
            exogram: 'Actively tracks current, superseded, expired, and disputed information'
        },
        {
            dimension: 'Portability',
            ordinary: 'Is often tied to one proprietary provider or walled garden',
            exogram: 'Preserves context across compatible local and cloud models'
        },
        {
            dimension: 'Core Outcome',
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
                                Ordinary AI Memory
                            </th>
                            <th className="py-4 px-5 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 w-[37.5%] border-l border-zinc-200 bg-purple-50/60">
                                Exogram Persistent Context
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
                <span>The distinction between simple storage and durable cognitive continuity.</span>
                <span className="text-purple-700 font-bold">Context Architecture</span>
            </div>
        </div>
    );
}

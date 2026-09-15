'use client';

import React from 'react';
import { ArrowDown, HelpCircle, Layers, GitBranch, RefreshCw, Zap, Compass } from 'lucide-react';

export default function CognitiveLoopVisual() {
    const steps = [
        {
            number: '01',
            label: 'What happened',
            detail: 'Meaningful conversations, recorded actions, decisions, artifacts, and outcomes with source provenance.',
            icon: Zap,
            color: 'text-purple-700 bg-purple-100 border-purple-200'
        },
        {
            number: '02',
            label: 'What it means',
            detail: 'Semantic extraction identifying key entities: people, projects, claims, preferences, and commitments.',
            icon: Layers,
            color: 'text-cyan-700 bg-cyan-100 border-cyan-200'
        },
        {
            number: '03',
            label: 'How it relates',
            detail: 'Cross-temporal entity graphing connecting people, systems, documents, and historical initiatives.',
            icon: GitBranch,
            color: 'text-indigo-700 bg-indigo-100 border-indigo-200'
        },
        {
            number: '04',
            label: 'What changed',
            detail: 'Active temporal tracking distinguishing current, proposed, verified, superseded, or expired reality.',
            icon: RefreshCw,
            color: 'text-amber-700 bg-amber-100 border-amber-200'
        },
        {
            number: '05',
            label: 'What matters now',
            detail: 'Context packet assembly extracting only the specific evidence and active state required for this task.',
            icon: Compass,
            color: 'text-emerald-700 bg-emerald-100 border-emerald-200'
        },
        {
            number: '06',
            label: 'What the AI should ask, explain, or do next',
            detail: 'Connected foundation model reasons with ground truth, asks minimal clarifying questions, and acts.',
            icon: HelpCircle,
            color: 'text-blue-700 bg-blue-100 border-blue-200'
        }
    ];

    return (
        <div className="w-full bg-white border border-zinc-300 rounded-2xl p-6 md:p-8 shadow-sm text-left my-8">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700">
                        The Cognitive Cycle
                    </span>
                    <h3 className="text-xl font-grotesk font-bold text-zinc-950 mt-1">
                        How Exogram Preserves Continuity
                    </h3>
                </div>
                <div className="text-xs font-mono text-zinc-500 hidden sm:block">
                    Closed-Loop Context Flow
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
                {steps.map((step, idx) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={step.number}
                            className="p-5 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-purple-300 transition-all flex flex-col justify-between group relative"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`p-2 rounded-lg border ${step.color}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-mono font-bold text-zinc-400 group-hover:text-purple-600 transition-colors">
                                        Step {step.number}
                                    </span>
                                </div>
                                <h4 className="text-base font-bold text-zinc-950 font-grotesk mb-2">
                                    {step.label}
                                </h4>
                                <p className="text-xs text-zinc-700 leading-relaxed">
                                    {step.detail}
                                </p>
                            </div>

                            {idx < steps.length - 1 && (
                                <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 group-hover:text-purple-600">
                                    <span>Next progression</span>
                                    <span className="font-bold">↓</span>
                                </div>
                            )}
                            {idx === steps.length - 1 && (
                                <div className="mt-4 pt-3 border-t border-emerald-200 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-bold">
                                    <span>Ready for execution</span>
                                    <span>✓</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

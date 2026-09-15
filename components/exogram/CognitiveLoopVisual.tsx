'use client';

import React from 'react';
import { MessageSquare, Lightbulb, ArrowDownRight, HelpCircle, CheckCircle2, RefreshCw } from 'lucide-react';

export default function CognitiveLoopVisual() {
    const steps = [
        {
            number: '01',
            label: 'You ask naturally',
            detail: 'No special formatting, no system prompts, no lengthy backstory. Just say what you need.',
            icon: MessageSquare,
            color: 'text-purple-700 bg-purple-100 border-purple-200'
        },
        {
            number: '02',
            label: 'Exogram understands the relevant situation',
            detail: 'Draws from your retained context: prior work, decisions, preferences, relationships, and what has changed.',
            icon: Lightbulb,
            color: 'text-cyan-700 bg-cyan-100 border-cyan-200'
        },
        {
            number: '03',
            label: 'It brings forward useful context',
            detail: 'Selects only the information that matters for this specific task. No flooding, no stale assumptions.',
            icon: ArrowDownRight,
            color: 'text-indigo-700 bg-indigo-100 border-indigo-200'
        },
        {
            number: '04',
            label: 'It answers, suggests, and asks the next best question',
            detail: 'Provides a grounded response and identifies the smallest clarification that would materially improve the result.',
            icon: HelpCircle,
            color: 'text-amber-700 bg-amber-100 border-amber-200'
        },
        {
            number: '05',
            label: 'You confirm, correct, or redirect',
            detail: 'See what context Exogram used. Edit assumptions. Dismiss irrelevant history. Stay in control.',
            icon: CheckCircle2,
            color: 'text-emerald-700 bg-emerald-100 border-emerald-200'
        },
        {
            number: '06',
            label: 'The work continues instead of starting over',
            detail: 'Next session, next week, next project. Exogram picks up where you left off.',
            icon: RefreshCw,
            color: 'text-blue-700 bg-blue-100 border-blue-200'
        }
    ];

    return (
        <div className="w-full bg-white border border-zinc-300 rounded-2xl p-6 md:p-8 shadow-sm text-left my-8">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
                <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-700">
                        The Interaction Loop
                    </span>
                    <h3 className="text-xl font-grotesk font-bold text-zinc-950 mt-1">
                        How a conversation with Exogram works
                    </h3>
                </div>
                <div className="text-xs font-mono text-zinc-500 hidden sm:block">
                    Continuous Context Loop
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
                                    <span>Next</span>
                                    <span className="font-bold">→</span>
                                </div>
                            )}
                            {idx === steps.length - 1 && (
                                <div className="mt-4 pt-3 border-t border-emerald-200 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-bold">
                                    <span>Loop continues</span>
                                    <span>↻</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

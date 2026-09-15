'use client';

import React, { useState } from 'react';
import { History, GitBranch, ShieldCheck, Cpu, Layers } from 'lucide-react';

export default function ContextualAIVisual() {
    const [activeStage, setActiveStage] = useState<number>(2);

    const stages = [
        {
            id: 0,
            title: '1. Raw Events',
            desc: 'Conversations, documents, decisions, constraints',
            tag: 'Provenance Ledger',
            icon: History,
            preview: 'Recorded with source origin, timestamp, and actor identity.'
        },
        {
            id: 1,
            title: '2. Semantic & Graph',
            desc: 'People, projects, preferences, dependencies',
            tag: 'Entity Graph',
            icon: GitBranch,
            preview: 'Extracted relationships connecting decisions across multiple months.'
        },
        {
            id: 2,
            title: '3. Temporal State',
            desc: 'Current vs superseded vs proposed vs verified',
            tag: 'Active Reality',
            icon: Layers,
            preview: 'Differentiates active constraints from expired assumptions.'
        },
        {
            id: 3,
            title: '4. Context Assembly',
            desc: 'Minimal high-relevance packet for the active task',
            tag: 'Zero Bloat',
            icon: ShieldCheck,
            preview: 'Extracts only what matters without flooding the prompt window.'
        },
        {
            id: 4,
            title: '5. Model Reasoning',
            desc: 'Frontier, open-weight, or local inference models',
            tag: 'Model Agnostic',
            icon: Cpu,
            preview: 'Model interprets, plans, and explains with accurate ground truth.'
        }
    ];

    return (
        <div className="w-full bg-white border border-zinc-300 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden text-left">
            {/* Background subtle radial glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-5 mb-6">
                <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900">
                        Exogram Continuous Context Pipeline
                    </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
                    <span>Evidence-Linked</span>
                    <span className="text-zinc-400">•</span>
                    <span>Model-Agnostic</span>
                    <span className="text-zinc-400">•</span>
                    <span>User-Controlled</span>
                </div>
            </div>

            {/* Pipeline Stage Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
                {stages.map((stage) => {
                    const Icon = stage.icon;
                    const isActive = activeStage === stage.id;
                    return (
                        <button
                            key={stage.id}
                            onClick={() => setActiveStage(stage.id)}
                            type="button"
                            className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                                isActive
                                    ? 'bg-purple-50/80 border-purple-500 shadow-sm ring-1 ring-purple-500/20'
                                    : 'bg-zinc-50/70 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-100/60'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <Icon className={`w-4 h-4 ${isActive ? 'text-purple-600' : 'text-zinc-600'}`} />
                                <span className={`text-[10px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                                    isActive ? 'bg-purple-200/70 text-purple-900' : 'bg-zinc-200/60 text-zinc-600'
                                }`}>
                                    {stage.tag}
                                </span>
                            </div>
                            <div>
                                <p className={`text-xs font-bold leading-snug ${isActive ? 'text-zinc-950' : 'text-zinc-800'}`}>
                                    {stage.title}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Active Stage Simulation Inspector */}
            <div className="bg-zinc-900 rounded-xl p-5 md:p-6 text-white border border-zinc-800 relative">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <span className="text-purple-400 font-bold">STATE INSPECTOR:</span>
                        <span className="text-zinc-200">{stages[activeStage].title}</span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400">
                        Status: Active &amp; Verified
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                    <div className="bg-zinc-950/80 p-3.5 rounded-lg border border-zinc-800">
                        <div className="text-zinc-400 text-[11px] mb-1 uppercase tracking-wider">Subsystem Objective</div>
                        <div className="text-zinc-200 font-sans font-medium text-sm leading-snug">
                            {stages[activeStage].desc}
                        </div>
                    </div>
                    <div className="bg-zinc-950/80 p-3.5 rounded-lg border border-zinc-800">
                        <div className="text-zinc-400 text-[11px] mb-1 uppercase tracking-wider">Runtime Guarantee</div>
                        <div className="text-zinc-200 font-sans font-medium text-sm leading-snug">
                            {stages[activeStage].preview}
                        </div>
                    </div>
                    <div className="bg-zinc-950/80 p-3.5 rounded-lg border border-zinc-800 flex flex-col justify-between">
                        <div>
                            <div className="text-zinc-400 text-[11px] mb-1 uppercase tracking-wider">Provenance &amp; Control</div>
                            <div className="text-emerald-400 font-mono text-xs">
                                ✓ Fully auditable &amp; user-revocable
                            </div>
                        </div>
                        <div className="text-[10px] text-zinc-500 mt-2">
                            Compatible with local or hosted foundation models
                        </div>
                    </div>
                </div>

                {/* Cognitive Flow Ribbon */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono overflow-x-auto whitespace-nowrap gap-4">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        What happened
                    </span>
                    <span>→</span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        What it means
                    </span>
                    <span>→</span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        How it relates
                    </span>
                    <span>→</span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        What changed
                    </span>
                    <span>→</span>
                    <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        What matters now
                    </span>
                </div>
            </div>
        </div>
    );
}

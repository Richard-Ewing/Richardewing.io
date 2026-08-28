'use client';

import React, { useState } from 'react';
import { FileCode, CheckCircle2, AlertCircle, ArrowRight, BookOpen } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

interface SpecCriterion {
    id: string;
    label: string;
    desc: string;
    points: number;
    category: 'Schema' | 'Boundary' | 'Verification' | 'Economics';
}

const SPEC_CRITERIA: SpecCriterion[] = [
    {
        id: 'json-schema',
        label: 'Explicit Input/Output Schemas Defined (Zod / JSON Schema)',
        desc: 'All API payloads and function inputs have strict types, required fields, and validation boundaries defined.',
        points: 25,
        category: 'Schema'
    },
    {
        id: 'file-boundaries',
        label: 'Strict File & Directory Mutation Boundary (Whitelisted Paths)',
        desc: 'The spec explicitly declares which files the agent may modify and bans all edits outside target folders.',
        points: 25,
        category: 'Boundary'
    },
    {
        id: 'executable-tests',
        label: 'Pre-Written Unit / Integration Assertions Included',
        desc: 'The specification provides concrete test cases and assertions that the agent code must pass before completing.',
        points: 25,
        category: 'Verification'
    },
    {
        id: 'token-cost-budget',
        label: 'Token & Latency Performance Caps Specified',
        desc: 'Maximum token burn per transaction and p95 latency thresholds are documented as hard pass/fail criteria.',
        points: 25,
        category: 'Economics'
    }
];

export default function SpecQualityScorecardTool() {
    const [criteriaState, setCriteriaState] = useState<Record<string, boolean>>({
        'json-schema': true,
        'file-boundaries': true,
        'executable-tests': false,
        'token-cost-budget': false
    });

    const toggleCriteria = (id: string) => {
        setCriteriaState(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const specScore = Object.entries(criteriaState).reduce((sum, [id, checked]) => {
        if (!checked) return sum;
        const c = SPEC_CRITERIA.find(item => item.id === id);
        return sum + (c ? c.points : 0);
    }, 0);

    let readinessTier = 'High Drift Risk (Conversational Prompt)';
    let badgeColor = 'bg-rose-50 text-rose-800 border-rose-200';
    let guidance = 'Do not pass this spec to autonomous agents. High likelihood of multi-file repository corruption and broken imports.';

    if (specScore >= 80) {
        readinessTier = 'Executable Machine-Readable Contract';
        badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        guidance = 'Ready for agent execution. The agent will execute deterministically with minimal hallucination risk.';
    } else if (specScore >= 50) {
        readinessTier = 'Partially Specified (Requires Manual Guardrails)';
        badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
        guidance = 'Add automated unit assertions and file boundary lists before running autonomous multi-file refactors.';
    }

    return (
        <ToolGate toolName="Spec-Driven Development Scorecard">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-900 uppercase tracking-widest mb-3">
                        <FileCode className="w-3.5 h-3.5 text-emerald-600" />
                        Product &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        Spec-Driven Development <span className="text-emerald-600">Quality Scorecard</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        In the AI era, vague PRDs produce chaotic code. Grade your feature specifications for machine-readable completeness before handing tasks to Claude Code, Antigravity, or Devin.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Criteria */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                4 Pillars of an Executable Specification
                            </h2>

                            <div className="space-y-4">
                                {SPEC_CRITERIA.map(c => {
                                    const isChecked = criteriaState[c.id];
                                    return (
                                        <div
                                            key={c.id}
                                            onClick={() => toggleCriteria(c.id)}
                                            className={'p-4 rounded-2xl border transition-all cursor-pointer ' + (
                                                isChecked
                                                    ? 'bg-emerald-50/40 border-emerald-300'
                                                    : 'bg-zinc-50 border-zinc-200 hover:border-zinc-300'
                                            )}
                                        >
                                            <div className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => {}}
                                                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-xs font-bold text-zinc-950 font-grotesk">{c.label}</span>
                                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-200 text-zinc-800 uppercase">
                                                            {c.category} &bull; +{c.points} pts
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{c.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Score */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">
                                    Spec Execution Readiness Score
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <div className="text-5xl font-extrabold font-grotesk text-emerald-600">{specScore}</div>
                                    <div className="text-xl font-mono font-bold text-zinc-400">/ 100</div>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 border ' + badgeColor}>
                                    {readinessTier}
                                </div>
                            </div>

                            {/* Status & Guidance */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-300 space-y-2">
                                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                                    Agent Execution Guidance
                                </div>
                                <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                                    {guidance}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/products"
                                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                                >
                                    Book SDD Product Workshop &rarr;
                                </Link>
                                <ExportToPDFButton targetId="spec-scorecard" fileName="sdd-spec-scorecard.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-2">
                            <div className="font-bold text-emerald-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-emerald-900 leading-relaxed">
                                Connects to <Link href="/framework/product" className="underline font-bold">The General Contractor PM Model</Link> and <Link href="/concepts/spec-driven-development" className="underline font-bold">Spec-Driven Development</Link>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <DiagnosticCTA />
                </div>
            </div>
        </ToolGate>
    );
}

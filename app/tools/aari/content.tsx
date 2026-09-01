'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

interface VectorQuestion {
    id: string;
    text: string;
    weight: number;
    category: string;
}

const QUESTIONS: VectorQuestion[] = [
    // Vector 1: Spec & Boundary Rigor
    { id: 'v1_1', category: 'Spec & Boundaries', text: 'Tasks are provided to agents with immutable machine-readable boundary rules (e.g. AGENTS.md, max diff bounds).', weight: 8 },
    { id: 'v1_2', category: 'Spec & Boundaries', text: 'Features have written architectural specifications before code generation begins (Spec-Driven Development).', weight: 7 },
    { id: 'v1_3', category: 'Spec & Boundaries', text: 'Agents are restricted to editing target sub-trees and forbidden from modifying root configuration without explicit elevation.', weight: 6 },
    
    // Vector 2: Zero-Trust Compiler & Verification Gates
    { id: 'v2_1', category: 'Compiler & Gates', text: 'Static type verification (e.g. tsc --noEmit, mypy) runs automatically and blocks non-compiling agent code.', weight: 9 },
    { id: 'v2_2', category: 'Compiler & Gates', text: 'Unit and integration test suites execute in CI/CD and prevent agents from modifying test assertions to pass.', weight: 8 },
    { id: 'v2_3', category: 'Compiler & Gates', text: 'Deterministic formatting, linting, and hygiene checks run on post-tool execution hooks.', weight: 6 },

    // Vector 3: Sandboxed Worktree Concurrency
    { id: 'v3_1', category: 'Sandbox & Worktrees', text: 'Subagents operate in isolated Git worktrees or temporary branches, never directly on main.', weight: 8 },
    { id: 'v3_2', category: 'Sandbox & Worktrees', text: 'Agents have access to isolated, ephemeral test databases rather than shared staging state.', weight: 7 },
    { id: 'v3_3', category: 'Sandbox & Worktrees', text: 'Multi-agent concurrency prevents port collisions and shared lockfile race conditions.', weight: 6 },

    // Vector 4: State Isolation & Dependency Health
    { id: 'v4_1', category: 'Architecture & State', text: 'Codebase relies on strict schema contracts (Zod, Protobuf, TypeScript interfaces) between modules.', weight: 8 },
    { id: 'v4_2', category: 'Architecture & State', text: 'External third-party dependencies are strictly locked and cannot be silently added by agents.', weight: 7 },
    { id: 'v4_3', category: 'Architecture & State', text: 'Global application state is minimized; functions are pure and testable in isolation.', weight: 6 },

    // Vector 5: Review Velocity & Human Governance
    { id: 'v5_1', category: 'Human Review & Ops', text: 'Engineers review small, incremental diffs (<100 lines) rather than bulk 50-file agent PRs.', weight: 8 },
    { id: 'v5_2', category: 'Human Review & Ops', text: 'Reviewers are trained to audit architectural logic rather than just checking if code runs.', weight: 6 },
];

export default function AARITool() {
    const [answers, setAnswers] = useState<Record<string, boolean>>({
        v1_1: true,
        v1_2: false,
        v1_3: false,
        v2_1: true,
        v2_2: false,
        v2_3: false,
        v3_1: true,
        v3_2: false,
        v3_3: false,
        v4_1: true,
        v4_2: false,
        v4_3: false,
        v5_1: false,
        v5_2: false,
    });

    const [engineersCount, setEngineersCount] = useState<number>(12);
    const [averageSalary, setAverageSalary] = useState<number>(165000);

    const toggleAnswer = (id: string) => {
        setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Calculate score
    const totalPossibleWeight = QUESTIONS.reduce((acc, q) => acc + q.weight, 0);
    const earnedWeight = QUESTIONS.reduce((acc, q) => acc + (answers[q.id] ? q.weight : 0), 0);
    const readinessScore = Math.round((earnedWeight / totalPossibleWeight) * 100);

    // Calculate drift liability
    const driftRiskMultiplier = (100 - readinessScore) / 100;
    const seniorReviewTaxHoursPerYear = engineersCount * 220 * 8 * 0.25 * driftRiskMultiplier;
    const annualDriftLiability = Math.round(seniorReviewTaxHoursPerYear * (averageSalary / 2000));

    let tierLabel = 'Tier D: Immediate Contamination Threat';
    let tierColor = 'text-rose-600 bg-rose-50 border-rose-200';
    let tierDesc = 'Your repository lacks deterministic gates and boundary contracts. Turning on autonomous subagents will cause severe context loss, hallucinated refactor loops, and silent API breakage.';

    if (readinessScore >= 85) {
        tierLabel = 'Tier A: Sovereign Autonomous Ready';
        tierColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
        tierDesc = 'Your repository enforces strict type verification, isolated worktrees, and machine-readable specs. Autonomous agents can operate safely with high use.';
    } else if (readinessScore >= 65) {
        tierLabel = 'Tier B: Supervised Semi-Autonomous';
        tierColor = 'text-cyan-700 bg-cyan-50 border-cyan-200';
        tierDesc = 'Good foundation. Agents can handle single-file tasks and unit test creation, but require strict human diff gating to prevent cross-module drift.';
    } else if (readinessScore >= 45) {
        tierLabel = 'Tier C: High Drift Vulnerability';
        tierColor = 'text-amber-700 bg-amber-50 border-amber-200';
        tierDesc = 'High risk of recursive debug loops and negative-carry code accumulation. Senior engineers will spend up to 40% of sprint capacity reviewing broken AI diffs.';
    }

    return (
        <ToolGate toolName="Autonomous Agent Readiness Index">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3">
                        <Terminal className="w-3.5 h-3.5 text-cyan-600" />
                        Diagnostic Proving Ground &bull; Step 4 of Sovereign Engine
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        Autonomous Agent Readiness Index <span className="text-cyan-600">(AARI)</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        Vendors claim you can &ldquo;just turn on autonomous agents.&rdquo; In practice, unconstrained agents trash messy repos in hours. Audit your codebase readiness across 14 deterministic vectors before deploying agent swarms.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: 14 Questions */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-200">
                                <div>
                                    <h2 className="text-lg font-bold font-grotesk text-zinc-950">Codebase Readiness Checklist</h2>
                                    <p className="text-xs text-zinc-500 font-medium">Check all capabilities currently enforced in your engineering pipeline</p>
                                </div>
                                <button
                                    onClick={() => setAnswers(Object.keys(answers).reduce((acc, k) => ({ ...acc, [k]: false }), {}))}
                                    className="text-xs font-mono text-zinc-500 hover:text-zinc-900 font-bold underline"
                                >
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-3">
                                {QUESTIONS.map((q) => {
                                    const isChecked = !!answers[q.id];
                                    return (
                                        <div
                                            key={q.id}
                                            onClick={() => toggleAnswer(q.id)}
                                            className={'p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ' + (
                                                isChecked
                                                    ? 'bg-cyan-50/50 border-cyan-300 text-zinc-950'
                                                    : 'bg-zinc-50/70 border-zinc-200 text-zinc-700 hover:bg-zinc-100/60'
                                            )}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => {}}
                                                className="mt-0.5 w-4 h-4 text-cyan-600 rounded border-zinc-300 focus:ring-cyan-500 pointer-events-none"
                                            />
                                            <div className="flex-1">
                                                <div className="text-xs font-semibold leading-relaxed">{q.text}</div>
                                                <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider mt-1 block">
                                                    {q.category} &bull; {q.weight} pts
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Team Parameters */}
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm space-y-4">
                            <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-zinc-900">Engineering Team Parameters</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-zinc-700 block mb-1">Total Engineers / Developers</label>
                                    <input
                                        type="number"
                                        min={1}
                                        max={500}
                                        value={engineersCount}
                                        onChange={(e) => setEngineersCount(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-cyan-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-zinc-700 block mb-1">Average Fully Loaded Salary ($)</label>
                                    <input
                                        type="number"
                                        min={50000}
                                        max={500000}
                                        step={5000}
                                        value={averageSalary}
                                        onChange={(e) => setAverageSalary(Math.max(50000, parseInt(e.target.value) || 50000))}
                                        className="w-full px-3 py-2 border border-zinc-300 rounded-xl font-mono text-sm font-bold text-zinc-900 focus:outline-none focus:border-cyan-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Live Score & Financial Exposure */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        {/* Score Card */}
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md">
                            <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">Readiness Score</div>
                            <div className="flex items-baseline gap-3">
                                <div className="text-6xl font-extrabold font-grotesk text-zinc-950">{readinessScore}</div>
                                <div className="text-xl font-mono font-bold text-zinc-400">/ 100</div>
                            </div>

                            {/* Progress bar */}
                            <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden my-4 border border-zinc-200">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: readinessScore + '%' }}
                                    transition={{ duration: 0.5 }}
                                    className={'h-full ' + (
                                        readinessScore >= 85 ? 'bg-emerald-500' :
                                        readinessScore >= 65 ? 'bg-cyan-500' :
                                        readinessScore >= 45 ? 'bg-amber-500' : 'bg-rose-500'
                                    )}
                                />
                            </div>

                            {/* Tier Badge */}
                            <div className={'px-4 py-2 rounded-xl border text-xs font-bold font-mono uppercase tracking-wider mb-4 ' + tierColor}>
                                {tierLabel}
                            </div>

                            <p className="text-xs text-zinc-700 leading-relaxed font-medium mb-6">
                                {tierDesc}
                            </p>

                            {/* Financial Liability Box */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-300 space-y-2">
                                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                                    Projected Annual Unmitigated Drift Drag
                                </div>
                                <div className="text-2xl font-bold font-mono text-rose-600">
                                    ${annualDriftLiability.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">/ yr</span>
                                </div>
                                <p className="text-[11px] text-zinc-600 leading-normal">
                                    Based on {engineersCount} engineers spending senior bandwidth fixing hallucinated refactors and PR merge conflicts.
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/exogram"
                                    className="text-xs font-bold text-indigo-700 hover:text-indigo-900 hover:underline flex items-center gap-1"
                                >
                                    Learn About Exogram Governance &rarr;
                                </Link>
                                <ExportToPDFButton targetId="aari-diagnostic" fileName="aari-readiness-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs space-y-2">
                            <div className="font-bold text-indigo-950 uppercase font-mono tracking-wider">
                                5-Step Sovereign Pipeline Link
                            </div>
                            <p className="text-indigo-900 leading-relaxed">
                                This diagnostic operationalizes research from <Link href="/research/publications" className="underline font-bold">Cursor vs Google Antigravity</Link> and maps directly to the <Link href="/concepts/deterministic-governance" className="underline font-bold">Deterministic Governance</Link> concept.
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

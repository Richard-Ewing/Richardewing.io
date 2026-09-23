'use client';

import React, { useState } from 'react';
import { Landmark, ShieldCheck, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

interface BoardQuestion {
    id: string;
    label: string;
    desc: string;
    weight: number;
    category: 'Fiduciary' | 'Financial' | 'Compliance' | 'Operational';
}

const BOARD_QUESTIONS: BoardQuestion[] = [
    {
        id: 'signing-matrix',
        label: 'Corporate Signing Matrix for Autonomous Agents',
        desc: 'The board has established formal financial authorization limits ($) for automated AI agents and smart contracts.',
        weight: 20,
        category: 'Compliance'
    },
    {
        id: 'rd-capitalization-audit',
        label: 'Forensic R&D Capitalization vs Maintenance Audit',
        desc: 'Management provides audited verification that maintenance OpEx is not being misclassified as capitalized innovation R&D.',
        weight: 20,
        category: 'Financial'
    },
    {
        id: 'negative-carry-debt-reserve',
        label: 'Negative-Carry Code & AI Debt Balance Sheet Escrow',
        desc: 'The company tracks code entropy and maintains explicit capital reserves for post-AI architectural refactoring.',
        weight: 20,
        category: 'Fiduciary'
    },
    {
        id: 'shadow-ai-policy',
        label: 'Zero-Trust Shadow AI & MCP Enterprise Whitelist',
        desc: 'Employees and contractors are strictly barred from connecting unapproved local AI tools or MCP servers to corporate IP.',
        weight: 20,
        category: 'Operational'
    },
    {
        id: 'unit-margin-governance',
        label: 'AI Feature Unit Margin Floor Mandate (>= 70%)',
        desc: 'Product roadmaps require affirmative gross margin modeling before deploying variable-token generative AI features.',
        weight: 20,
        category: 'Financial'
    }
];

export default function BoardRiskScorecardTool() {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
        'signing-matrix': false,
        'rd-capitalization-audit': true,
        'negative-carry-debt-reserve': false,
        'shadow-ai-policy': true,
        'unit-margin-governance': false
    });

    const toggleItem = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const boardScore = Object.entries(checkedItems).reduce((sum, [id, checked]) => {
        if (!checked) return sum;
        const q = BOARD_QUESTIONS.find(item => item.id === id);
        return sum + (q ? q.weight : 0);
    }, 0);

    let governanceTier = 'Severe Fiduciary Risk & Governance Void';
    let tierColor = 'bg-rose-50 text-rose-800 border-rose-200';
    let assessment = 'Critical board-level oversight gap. The enterprise lacks formal agent signing thresholds and is vulnerable to un-monitored margin erosion.';

    if (boardScore >= 80) {
        governanceTier = 'Sovereign Board Governance & Strong Fiduciary Oversight';
        tierColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        assessment = 'Excellent governance posture. Board possesses quantitative visibility into AI unit economics and technical balance sheet liabilities.';
    } else if (boardScore >= 50) {
        governanceTier = 'Moderate Oversight (Improved SOX & Margin Exposure)';
        tierColor = 'bg-amber-50 text-amber-800 border-amber-200';
        assessment = 'Acceptable baseline, but requires immediate implementation of autonomous agent signing limits and Section 174 audit verification.';
    }

    return (
        <ToolGate toolName="Board AI Governance Scorecard">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-900 uppercase tracking-widest mb-3">
                        <Landmark className="w-3.5 h-3.5 text-amber-600" />
                        Boardroom &bull; Fiduciary Oversight Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        Board AI Governance &amp; <span className="text-amber-600">Fiduciary Risk Scorecard</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        For Board Directors, CEOs, and Audit Committees: Evaluate corporate AI capital efficiency, autonomous signing boundaries, and technical insolvency risk in boardroom financial language.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Checklist */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                5 Fiduciary Pillars for Corporate Directors
                            </h2>

                            <div className="space-y-4">
                                {BOARD_QUESTIONS.map(q => {
                                    const isChecked = checkedItems[q.id];
                                    return (
                                        <div
                                            key={q.id}
                                            onClick={() => toggleItem(q.id)}
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
                                                        <span className="text-xs font-bold text-zinc-950 font-grotesk">{q.label}</span>
                                                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-200 text-zinc-800 uppercase">
                                                            {q.category} &bull; +{q.weight} pts
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-zinc-600 mt-1 leading-relaxed">{q.desc}</p>
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
                                    Board Governance Health Index
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <div className="text-5xl font-extrabold font-grotesk text-amber-600">{boardScore}</div>
                                    <div className="text-xl font-mono font-bold text-zinc-400">/ 100</div>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 border ' + tierColor}>
                                    {governanceTier}
                                </div>
                            </div>

                            {/* Assessment */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-300 space-y-2">
                                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                                    Audit Committee Finding
                                </div>
                                <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                                    {assessment}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/board"
                                    className="text-xs font-bold text-amber-700 hover:text-amber-900 hover:underline"
                                >
                                    Schedule Board Executive Briefing &rarr;
                                </Link>
                                <ExportToPDFButton targetId="board-scorecard" fileName="board-ai-governance-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-2">
                            <div className="font-bold text-amber-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-amber-900 leading-relaxed">
                                Directly connects to <Link href="/for-boards" className="underline font-bold">For Board Members</Link>, <Link href="/framework/governance" className="underline font-bold">Executive AI Fiduciary Framework</Link>, and the published CIO.com research on <a href="https://www.cio.com/article/4223955/your-ai-agent-may-have-made-the-decision-but-your-company-owns-the-risk.html" target="_blank" rel="noopener noreferrer" className="underline font-bold">Corporate Agent Liability</a>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4 Pillars & 6 Executive Questions from CIO.com */}
                <div className="mt-12 bg-white border border-zinc-300 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
                    <div className="border-b border-zinc-200 pb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest mb-3">
                            Executive Research Reference • CIO.com
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                            The 4 Pillars of Agent Governance &amp; The 6 Executive Procurement Questions
                        </h2>
                        <p className="mt-2 text-sm text-zinc-700 leading-relaxed font-medium">
                            Synthesized from Richard Ewing's published analysis in CIO.com (&quot;Your AI Agent May Have Made the Decision, but Your Company Owns the Risk&quot;). When autonomous agents act in production, the legal, financial, and regulatory accountability never transfers to the vendor: it remains entirely with the deploying enterprise.
                        </p>
                    </div>

                    {/* The 4 Pillars */}
                    <div>
                        <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">
                            The 4 Architectural Pillars of Agent Governance
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <div className="text-xs font-mono font-bold text-cyan-900 uppercase mb-1">01. Monitoring</div>
                                <h4 className="text-sm font-bold text-zinc-950 mb-1">Continuous Telemetry</h4>
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    Real-time tracking of agent actions, system interactions, and latency without relying on delayed post-run log exports.
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <div className="text-xs font-mono font-bold text-indigo-900 uppercase mb-1">02. Auditability</div>
                                <h4 className="text-sm font-bold text-zinc-950 mb-1">Immutable Ledger</h4>
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    Forensic recording of prompts, context state, intermediate reasoning chains, tool invocations, and output diffs.
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <div className="text-xs font-mono font-bold text-amber-900 uppercase mb-1">03. Authorization</div>
                                <h4 className="text-sm font-bold text-zinc-950 mb-1">Enforced Boundaries</h4>
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    Granular financial thresholds ($), corporate signing limits, and capability manifests that agents cannot bypass.
                                </p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <div className="text-xs font-mono font-bold text-rose-900 uppercase mb-1">04. Accountability</div>
                                <h4 className="text-sm font-bold text-zinc-950 mb-1">Deterministic Rollback</h4>
                                <p className="text-xs text-zinc-600 leading-relaxed">
                                    Unambiguous human ownership, clear escalation paths, and automated rollback mechanisms when mutations fail.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The 6 Executive Procurement Questions */}
                    <div>
                        <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">
                            The 6 Questions Every Board &amp; Audit Committee Must Demand
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-xs font-mono font-bold text-amber-800">1. Scope &amp; Authority</span>
                                <p className="text-xs text-zinc-800 mt-1 font-medium">What specific decisions and transactions is this agent authorized to execute without human intervention?</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-xs font-mono font-bold text-amber-800">2. Financial Signing Limits</span>
                                <p className="text-xs text-zinc-800 mt-1 font-medium">At what financial dollar threshold, contract commitment, or risk exposure does human sign-off become mandatory?</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-xs font-mono font-bold text-amber-800">3. Audit Trail Integrity</span>
                                <p className="text-xs text-zinc-800 mt-1 font-medium">Can every automated action be reconstructed step-by-step from prompt, context, tool invocation, and decision state?</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-xs font-mono font-bold text-amber-800">4. Rollback &amp; Recovery</span>
                                <p className="text-xs text-zinc-800 mt-1 font-medium">If the agent executes an erroneous or catastrophic mutation, what is the exact deterministic recovery protocol?</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-xs font-mono font-bold text-amber-800">5. Blast Radius Containment</span>
                                <p className="text-xs text-zinc-800 mt-1 font-medium">Are credentials and tool permissions scoped strictly to least privilege, or does the agent possess wide system access?</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
                                <span className="text-xs font-mono font-bold text-amber-800">6. Regulatory Accountability</span>
                                <p className="text-xs text-zinc-800 mt-1 font-medium">Who within executive leadership is legally and operationally accountable when the agent produces non-compliant outcomes?</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
                        <span className="text-xs text-zinc-500 font-mono">Published by Richard Ewing on CIO.com</span>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/concepts/the-transaction-that-succeeds" className="text-xs font-bold text-amber-800 hover:text-amber-950 underline">
                                Concept: The Transaction That Succeeds →
                            </Link>
                            <Link href="/concepts/persistence-vs-authority" className="text-xs font-bold text-amber-800 hover:text-amber-950 underline">
                                Concept: Persistence vs Authority →
                            </Link>
                            <a href="https://www.cio.com/article/4223955/your-ai-agent-may-have-made-the-decision-but-your-company-owns-the-risk.html" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-cyan-900 hover:text-cyan-700 underline">
                                Read Full Article on CIO.com ↗
                            </a>
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

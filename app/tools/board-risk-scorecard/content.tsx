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
        id: 'subprime-debt-reserve',
        label: 'Subprime Code & AI Debt Balance Sheet Escrow',
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
        'subprime-debt-reserve': false,
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
        governanceTier = 'Moderate Oversight (Elevated SOX & Margin Exposure)';
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
                                Directly connects to <Link href="/for-boards" className="underline font-bold">For Board Members</Link> and <Link href="/framework/governance" className="underline font-bold">Executive AI Fiduciary Framework</Link>.
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

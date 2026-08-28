'use client';

import React, { useState } from 'react';
import { Crown, Sparkles, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import ToolGate from '@/app/components/tool-gate';
import { ExportToPDFButton } from '@/app/components/ExportToPDFButton';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';
import Link from 'next/link';

interface OperatingVector {
    id: string;
    pillar: string;
    title: string;
    description: string;
    score: number; // 1 to 5
}

const INITIAL_VECTORS: OperatingVector[] = [
    { id: 'strategy', pillar: 'CEO Strategy', title: 'Sovereign Moat vs Wrapper Dependency', description: 'Enterprise builds proprietary data/model assets rather than renting commoditized wrappers.', score: 3 },
    { id: 'capital', pillar: 'CFO Capital', title: 'Section 174 & True Innovation Accounting', description: 'Engineering spend is audited for maintenance OpEx vs capitalizable R&D.', score: 2 },
    { id: 'product', pillar: 'CPO Product', title: 'Unit Margin Floor & Outcome Pricing', description: 'Feature roadmap enforces 70%+ gross margin floor and outcome-based pricing.', score: 3 },
    { id: 'operations', pillar: 'COO Ops', title: 'Deterministic Runtime Governance', description: 'Agentic workflows execute through zero-trust proxies with binary signing limits.', score: 2 },
    { id: 'talent', pillar: 'Talent Ladder', title: 'Post-Syntax Career Architecture', description: 'Hiring and leveling reward architectural judgment over manual syntax authoring.', score: 3 }
];

export default function CEOOperatingModelTool() {
    const [vectors, setVectors] = useState<OperatingVector[]>(INITIAL_VECTORS);

    const updateScore = (id: string, score: number) => {
        setVectors(prev => prev.map(v => v.id === id ? { ...v, score } : v));
    };

    const totalScore = vectors.reduce((acc, v) => acc + v.score, 0);
    const maxScore = vectors.length * 5;
    const percentage = Math.round((totalScore / maxScore) * 100);

    let maturityTier = 'Stage 1: Performative AI Pilots (High Risk)';
    let tierColor = 'bg-rose-50 text-rose-800 border-rose-200';
    let assessment = 'Your organization suffers from fragmented AI experimentation. Individual departments are adopting point solutions without unified capital allocation or deterministic governance.';

    if (percentage >= 80) {
        maturityTier = 'Stage 4: Sovereign Autonomous Enterprise';
        tierColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
        assessment = 'Industry-leading organizational architecture. Capital allocation, product margins, and autonomous agent governance are synchronized across all executive functions.';
    } else if (percentage >= 60) {
        maturityTier = 'Stage 3: Structured Modern Enterprise';
        tierColor = 'bg-cyan-50 text-cyan-800 border-cyan-200';
        assessment = 'Solid foundation. Prioritize eliminating negative-carry product features and formalizing corporate AI signing matrices.';
    } else if (percentage >= 40) {
        maturityTier = 'Stage 2: Early Cross-Functional Alignment';
        tierColor = 'bg-amber-50 text-amber-800 border-amber-200';
        assessment = 'Beginning executive alignment, but vulnerable to SaaS margin compression and un-monitored shadow agent delegation.';
    }

    return (
        <ToolGate toolName="CEO AI Operating Model Diagnostic">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono font-bold text-indigo-900 uppercase tracking-widest mb-3">
                        <Crown className="w-3.5 h-3.5 text-indigo-600" />
                        CEO &amp; Executive Suite &bull; Step 4 Diagnostic
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold font-grotesk text-zinc-950 tracking-tight">
                        CEO &amp; Executive AI <span className="text-indigo-600">Operating Model Diagnostic</span>
                    </h1>
                    <p className="mt-3 text-base text-zinc-700 max-w-3xl mx-auto font-medium leading-relaxed">
                        For CEOs, COOs, Managing Directors, and Cross-Functional Executives: Audit organizational maturity, capital allocation efficiency, and autonomous governance across all corporate functions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Sliders */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                            <h2 className="text-lg font-bold font-grotesk text-zinc-950 pb-3 border-b border-zinc-200">
                                5 Executive Maturity Dimensions
                            </h2>

                            <div className="space-y-5">
                                {vectors.map(v => (
                                    <div key={v.id} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-bold font-grotesk text-zinc-950">{v.title}</span>
                                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-800">
                                                {v.pillar} &bull; {v.score}/5
                                            </span>
                                        </div>
                                        <p className="text-xs text-zinc-600">{v.description}</p>
                                        <input
                                            type="range"
                                            min={1}
                                            max={5}
                                            step={1}
                                            value={v.score}
                                            onChange={e => updateScore(v.id, parseInt(e.target.value))}
                                            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Score */}
                    <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                        <div className="bg-white border-2 border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
                            <div>
                                <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mb-1">
                                    Operating Model Maturity
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <div className="text-5xl font-extrabold font-grotesk text-indigo-600">{percentage}%</div>
                                    <div className="text-xl font-mono font-bold text-zinc-400">({totalScore}/{maxScore})</div>
                                </div>
                                <div className={'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold mt-2 border ' + tierColor}>
                                    {maturityTier}
                                </div>
                            </div>

                            {/* Assessment */}
                            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-300 space-y-2">
                                <div className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-wider">
                                    Executive Finding
                                </div>
                                <p className="text-xs text-zinc-800 leading-relaxed font-medium">
                                    {assessment}
                                </p>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 flex items-center justify-between">
                                <Link
                                    href="/workspace/strategy"
                                    className="text-xs font-bold text-indigo-700 hover:text-indigo-900 hover:underline"
                                >
                                    Book CEO Strategy Session &rarr;
                                </Link>
                                <ExportToPDFButton targetId="ceo-diagnostic" fileName="ceo-operating-model-audit.pdf" />
                            </div>
                        </div>

                        {/* Sovereign Pipeline Connection */}
                        <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs space-y-2">
                            <div className="font-bold text-indigo-950 uppercase font-mono tracking-wider">
                                Sovereign Framework Connection
                            </div>
                            <p className="text-indigo-900 leading-relaxed">
                                Maps to <Link href="/doctrine" className="underline font-bold">Executive Operating Doctrine</Link> and <Link href="/framework/governance" className="underline font-bold">Sovereign Enterprise Architecture</Link>.
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

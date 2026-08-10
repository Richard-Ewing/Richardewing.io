"use client";

/**
 * GovernanceMaturityAssessment — Interactive self-assessment that produces
 * a Governance Maturity Score (0-100) across 5 dimensions.
 * 
 * This is the intermediate trust artifact between free diagnostic tools
 * and the $450/$7,500 advisory engagements. Enterprise buyers need one
 * intermediate trust object before high-ticket escalation.
 * 
 * Dimensions (grounded in CIO/CISO research):
 * 1. Agent Inventory & Discovery — do you know what's running?
 * 2. Policy Enforcement — binary gates or probabilistic guardrails?
 * 3. Cost Governance — per-task cost tracking + ceilings?
 * 4. Audit Infrastructure — tamper-evident trails?
 * 5. Incident Response — kill switch + rollback capability?
 */

import { useState } from 'react';
import Link from 'next/link';
import { Shield, ChevronRight, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface Question {
    id: string;
    dimension: string;
    text: string;
    options: { label: string; score: number }[];
}

const questions: Question[] = [
    {
        id: 'q1', dimension: 'Agent Inventory',
        text: 'Do you have a centralized registry of all AI agents operating in your organization?',
        options: [
            { label: 'No — we don\'t track individual agents', score: 0 },
            { label: 'Partially — some teams maintain their own lists', score: 1 },
            { label: 'Yes — centralized inventory with owner, scope, and permissions', score: 3 },
        ],
    },
    {
        id: 'q2', dimension: 'Agent Inventory',
        text: 'Can you identify which agents have access to production data vs. sandbox environments?',
        options: [
            { label: 'No — agents access whatever they need', score: 0 },
            { label: 'Somewhat — we have informal policies', score: 1 },
            { label: 'Yes — strict environment isolation with access logs', score: 3 },
        ],
    },
    {
        id: 'q3', dimension: 'Policy Enforcement',
        text: 'How do you control what actions AI agents can take?',
        options: [
            { label: 'Prompt instructions and guardrails only', score: 0 },
            { label: 'Guardrails + human-in-the-loop for some actions', score: 1 },
            { label: 'Deterministic policy gates — binary allow/block per action type', score: 3 },
        ],
    },
    {
        id: 'q4', dimension: 'Policy Enforcement',
        text: 'If an agent proposes a destructive action (e.g., deleting production data), what happens?',
        options: [
            { label: 'Nothing — the agent decides based on its training', score: 0 },
            { label: 'An LLM-based evaluator checks if it seems safe', score: 1 },
            { label: 'The action is blocked by an admissibility gate before execution', score: 3 },
        ],
    },
    {
        id: 'q5', dimension: 'Cost Governance',
        text: 'Do you track AI API costs per task, per agent, and per feature?',
        options: [
            { label: 'No — we track aggregate monthly API spend only', score: 0 },
            { label: 'Partially — we track per-project costs', score: 1 },
            { label: 'Yes — per-task cost tracking with hard ceilings and alerts', score: 3 },
        ],
    },
    {
        id: 'q6', dimension: 'Cost Governance',
        text: 'Do you have retry budgets that cap how many times an agent can retry a failed task?',
        options: [
            { label: 'No — agents retry until they succeed or time out', score: 0 },
            { label: 'Informally — developers set ad-hoc limits', score: 1 },
            { label: 'Yes — enforced retry budgets with cost ceiling per task', score: 3 },
        ],
    },
    {
        id: 'q7', dimension: 'Audit Infrastructure',
        text: 'Are AI agent actions logged with tamper-evident integrity (e.g., cryptographic hashing)?',
        options: [
            { label: 'No — standard application logs only', score: 0 },
            { label: 'We log actions but they\'re in standard log systems', score: 1 },
            { label: 'Yes — cryptographic audit trail with immutable chain', score: 3 },
        ],
    },
    {
        id: 'q8', dimension: 'Audit Infrastructure',
        text: 'Can you reconstruct the full decision chain of any agent action after the fact?',
        options: [
            { label: 'No — we only see inputs and outputs', score: 0 },
            { label: 'Sometimes — depends on the agent and logging level', score: 1 },
            { label: 'Yes — full reasoning trace, tool calls, and context captured', score: 3 },
        ],
    },
    {
        id: 'q9', dimension: 'Incident Response',
        text: 'Do you have a kill switch that can immediately suspend a misbehaving agent?',
        options: [
            { label: 'No — we\'d have to manually find and stop the process', score: 0 },
            { label: 'Sort of — we can revoke API keys but it takes time', score: 1 },
            { label: 'Yes — centralized kill switch with automatic rollback', score: 3 },
        ],
    },
    {
        id: 'q10', dimension: 'Incident Response',
        text: 'If an agent corrupts production state, can you automatically roll back to pre-action state?',
        options: [
            { label: 'No — we would manually assess and fix damage', score: 0 },
            { label: 'Partially — we have database backups but not instant rollback', score: 1 },
            { label: 'Yes — state integrity hashing with automatic rollback on deviation', score: 3 },
        ],
    },
];

const maturityLevels = [
    { min: 0, max: 6, level: 'Ad-Hoc', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30', description: 'No systematic governance. Agents operate with informal controls. High risk of shadow AI, cost spirals, and uncontained execution.' },
    { min: 7, max: 12, level: 'Reactive', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', description: 'Some controls exist but they are response-driven. Governance happens after incidents, not before them.' },
    { min: 13, max: 18, level: 'Defined', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', description: 'Policies are documented and some enforcement exists. But gaps remain in cost governance, audit trails, and incident response.' },
    { min: 19, max: 24, level: 'Managed', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', description: 'Deterministic enforcement across most dimensions. Cost tracking, audit trails, and kill switches are operational.' },
    { min: 25, max: 30, level: 'Optimized', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', description: 'Full runtime governance with cryptographic audit, automatic rollback, tiered inference routing, and continuous policy compilation.' },
];

function getMaturityLevel(score: number) {
    return maturityLevels.find(l => score >= l.min && score <= l.max) || maturityLevels[0];
}

export default function GovernanceMaturityAssessment() {
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [currentQ, setCurrentQ] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const totalScore = Object.values(answers).reduce((acc, v) => acc + v, 0);
    const maxScore = questions.length * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);
    const maturity = getMaturityLevel(totalScore);

    const handleAnswer = (questionId: string, score: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: score }));
        if (currentQ < questions.length - 1) {
            setTimeout(() => setCurrentQ(prev => prev + 1), 300);
        } else {
            setTimeout(() => setShowResults(true), 500);
        }
    };

    // Dimension scores
    const dimensions = ['Agent Inventory', 'Policy Enforcement', 'Cost Governance', 'Audit Infrastructure', 'Incident Response'];
    const dimensionScores = dimensions.map(dim => {
        const dimQuestions = questions.filter(q => q.dimension === dim);
        const dimScore = dimQuestions.reduce((acc, q) => acc + (answers[q.id] || 0), 0);
        const dimMax = dimQuestions.length * 3;
        return { name: dim, score: dimScore, max: dimMax, pct: Math.round((dimScore / dimMax) * 100) };
    });

    if (showResults) {
        return (
            <section className="py-16 md:py-24 bg-[#FCFAF7] text-zinc-900">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-4">
                            <Shield className="w-3 h-3" />
                            Governance Maturity Assessment
                        </span>
                        <h2 className="text-3xl font-bold mb-2">Your Governance Maturity Score</h2>
                    </div>

                    {/* Score */}
                    <div className={`rounded-2xl border ${maturity.border} ${maturity.bg} p-8 text-center mb-8`}>
                        <p className={`text-6xl font-bold font-mono ${maturity.color} mb-2`}>{percentage}%</p>
                        <p className={`text-xl font-bold ${maturity.color} mb-2`}>Level: {maturity.level}</p>
                        <p className="text-sm text-zinc-600 max-w-xl mx-auto">{maturity.description}</p>
                    </div>

                    {/* Dimension breakdown */}
                    <div className="space-y-4 mb-8">
                        {dimensionScores.map(dim => (
                            <div key={dim.name} className="rounded-xl bg-white/5 border border-white/10 p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-zinc-700">{dim.name}</span>
                                    <span className="text-sm font-mono text-zinc-600">{dim.score}/{dim.max}</span>
                                </div>
                                <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-700 ${
                                            dim.pct >= 80 ? 'bg-emerald-500' : dim.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                                        }`}
                                        style={{ width: `${dim.pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recommendations */}
                    <div className="rounded-xl border border-zinc-200 bg-white/50 p-6 mb-8">
                        <h3 className="text-lg font-bold text-zinc-200 mb-4">Recommended Next Steps</h3>
                        <div className="space-y-3">
                            {dimensionScores.filter(d => d.pct < 50).map(dim => (
                                <div key={dim.name} className="flex items-start gap-3">
                                    <XCircle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-zinc-700">{dim.name}: Critical Gap</p>
                                        <p className="text-xs text-zinc-500">
                                            {dim.name === 'Agent Inventory' && 'You cannot govern what you cannot see. Start with a centralized agent registry.'}
                                            {dim.name === 'Policy Enforcement' && 'Probabilistic guardrails are not governance. Implement deterministic admissibility gates.'}
                                            {dim.name === 'Cost Governance' && 'Without per-task cost tracking and retry budgets, cost spirals are inevitable.'}
                                            {dim.name === 'Audit Infrastructure' && 'Standard logs are not forensic-grade. You need cryptographic audit trails.'}
                                            {dim.name === 'Incident Response' && 'Without a kill switch and automatic rollback, every failure runs to completion.'}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {dimensionScores.filter(d => d.pct >= 50 && d.pct < 80).map(dim => (
                                <div key={dim.name} className="flex items-start gap-3">
                                    <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-zinc-700">{dim.name}: Partial Coverage</p>
                                        <p className="text-xs text-zinc-500">
                                            Some controls exist but enforcement is inconsistent. Focus on making existing policies deterministic.
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {dimensionScores.filter(d => d.pct >= 80).map(dim => (
                                <div key={dim.name} className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-semibold text-zinc-700">{dim.name}: Strong</p>
                                        <p className="text-xs text-zinc-500">
                                            This dimension is well-governed. Focus on maintaining and optimizing.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Escalation CTA */}
                    <div className="rounded-2xl bg-gradient-to-br from-violet-500/10 to-rose-500/10 border border-violet-500/20 p-8 text-center">
                        <h3 className="text-xl font-bold text-zinc-200 mb-2">Want a Professional Assessment?</h3>
                        <p className="text-sm text-zinc-600 mb-6 max-w-lg mx-auto">
                            This self-assessment gives you the starting point. A $450 Gut-Check Session reviews these results with Richard Ewing and delivers a prioritized remediation plan.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-rose-500 text-zinc-900 font-bold text-sm hover:opacity-90 transition-opacity"
                            >
                                Book a $450 Gut-Check <ChevronRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/diagnose"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-300 text-zinc-700 font-bold text-sm hover:border-violet-500 hover:text-zinc-900 transition-all"
                            >
                                Run More Diagnostics
                            </Link>
                        </div>
                    </div>

                    {/* Retake */}
                    <div className="text-center mt-6">
                        <button
                            onClick={() => { setAnswers({}); setCurrentQ(0); setShowResults(false); }}
                            className="text-xs text-zinc-600 hover:text-zinc-600 transition-colors font-mono"
                        >
                            Retake Assessment
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    const q = questions[currentQ];

    return (
        <section className="py-16 md:py-24 bg-[#FCFAF7] text-zinc-900">
            <div className="max-w-2xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-4">
                        <Shield className="w-3 h-3" />
                        2-Minute Assessment
                    </span>
                    <h2 className="text-3xl font-bold mb-2">
                        How Mature Is Your{' '}
                        <span className="text-violet-400">AI Governance?</span>
                    </h2>
                    <p className="text-zinc-600 text-sm">
                        10 questions. 2 minutes. Get your Governance Maturity Score with dimension-level breakdown.
                    </p>
                </div>

                {/* Progress */}
                <div className="mb-8">
                    <div className="flex justify-between text-xs font-mono text-zinc-600 mb-2">
                        <span>Question {currentQ + 1} of {questions.length}</span>
                        <span>{q.dimension}</span>
                    </div>
                    <div className="h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-violet-500 rounded-full transition-all duration-500"
                            style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Question */}
                <div className="rounded-2xl border border-zinc-200 bg-white/50 p-8 mb-6">
                    <p className="text-lg font-semibold text-zinc-200 mb-6">{q.text}</p>
                    <div className="space-y-3">
                        {q.options.map((opt, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswer(q.id, opt.score)}
                                className={`w-full text-left p-4 rounded-xl border transition-all ${
                                    answers[q.id] === opt.score
                                        ? 'border-violet-500 bg-violet-500/10 text-violet-300'
                                        : 'border-zinc-200 hover:border-zinc-600 text-zinc-600 hover:text-zinc-200'
                                }`}
                            >
                                <span className="text-sm">{opt.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                    <button
                        onClick={() => setCurrentQ(prev => Math.max(0, prev - 1))}
                        className={`text-xs font-mono text-zinc-600 hover:text-zinc-600 transition-colors ${currentQ === 0 ? 'invisible' : ''}`}
                    >
                        ← Previous
                    </button>
                    {answers[q.id] !== undefined && currentQ < questions.length - 1 && (
                        <button
                            onClick={() => setCurrentQ(prev => prev + 1)}
                            className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors"
                        >
                            Next →
                        </button>
                    )}
                </div>

            </div>
        </section>
    );
}

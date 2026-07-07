'use client';

import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Clock, CheckCircle, XCircle, ArrowRight, Calendar, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const COMPLIANCE_AREAS = [
    {
        id: 'inventory',
        name: 'AI System Inventory',
        question: 'Do you have a complete inventory of all AI systems in production and development?',
        weight: 15,
        risk: 'Article 6-7: Risk classification requires knowing all systems. 67% of employees use AI tools — only 18% have policies.',
    },
    {
        id: 'risk-classification',
        name: 'Risk Classification',
        question: 'Have all AI systems been classified by risk tier (Unacceptable, High, Limited, Minimal)?',
        weight: 15,
        risk: 'Article 6: Unclassified high-risk systems face immediate prohibition. Fines: up to 7% of global turnover.',
    },
    {
        id: 'transparency',
        name: 'Transparency Obligations',
        question: 'Do AI-interacting users know they are communicating with AI? Are outputs labeled?',
        weight: 10,
        risk: 'Article 52: AI-generated content must be disclosed. 47% of leaders made decisions based on unlabeled AI output.',
    },
    {
        id: 'data-governance',
        name: 'Data Governance',
        question: 'Is training data documented, bias-tested, and compliant with GDPR data processing requirements?',
        weight: 10,
        risk: 'Article 10: Training data must be relevant, representative, and free from errors. Non-compliance triggers both AI Act AND GDPR penalties.',
    },
    {
        id: 'human-oversight',
        name: 'Human Oversight',
        question: 'Do high-risk AI systems have human oversight mechanisms with ability to override?',
        weight: 15,
        risk: 'Article 14: High-risk systems must allow human override. Autonomous agents with no kill switch = direct violation.',
    },
    {
        id: 'incident-reporting',
        name: 'Incident Reporting',
        question: 'Do you have a documented process to report serious AI incidents within 72 hours?',
        weight: 10,
        risk: 'Article 62: Mandatory incident reporting. Most orgs can\'t even detect AI semantic failures — 82% of production AI bugs are from hallucinations.',
    },
    {
        id: 'documentation',
        name: 'Technical Documentation',
        question: 'Is there comprehensive technical documentation for all high-risk AI systems?',
        weight: 10,
        risk: 'Article 11: Technical docs must cover design, development, performance metrics. Fewer than 12% of AI apps are visible to security teams.',
    },
    {
        id: 'conformity-assessment',
        name: 'Conformity Assessment',
        question: 'Have high-risk AI systems undergone conformity assessment before deployment?',
        weight: 15,
        risk: 'Article 43: Self-assessment or third-party audit required. Most companies cannot pass an AI audit within 90 days.',
    },
];

export default function EUAIActChecker() {
    const [answers, setAnswers] = useState<Record<string, 'yes' | 'partial' | 'no' | null>>({});
    const [showResults, setShowResults] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const enforcement = new Date('2026-08-02');
        const now = new Date();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDaysLeft(Math.max(0, Math.ceil((enforcement.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))));
    }, []);

    const score = COMPLIANCE_AREAS.reduce((total, area) => {
        const answer = answers[area.id];
        if (answer === 'yes') return total + area.weight;
        if (answer === 'partial') return total + area.weight * 0.5;
        return total;
    }, 0);

    const answered = Object.values(answers).filter(v => v !== null).length;
    const allAnswered = answered === COMPLIANCE_AREAS.length;

    const riskLevel = score >= 80 ? 'LOW' : score >= 50 ? 'MEDIUM' : score >= 25 ? 'HIGH' : 'CRITICAL';
    const riskColor = riskLevel === 'LOW' ? 'emerald' : riskLevel === 'MEDIUM' ? 'amber' : riskLevel === 'HIGH' ? 'orange' : 'red';

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-mono uppercase tracking-widest mb-6">
                        <Clock className="w-3.5 h-3.5" />
                        {daysLeft} Days Until Enforcement
                    </div>
                    <h1 className="text-4xl font-grotesk font-bold text-zinc-950 mb-4">
                        EU AI Act Compliance Checker
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Fines up to <strong className="text-red-600">7% of global turnover</strong>. Enforcement starts August 2, 2026.
                        Score your readiness in 3 minutes.
                    </p>
                </div>

                {/* Countdown Banner */}
                <div className="mb-8 bg-gradient-to-r from-red-950 to-zinc-900 rounded-2xl p-6 text-zinc-900 flex items-center justify-between">
                    <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-red-400 mb-1">Enforcement Countdown</p>
                        <p className="text-3xl font-grotesk font-bold">{daysLeft} Days</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-zinc-600">67% of employees use AI tools</p>
                        <p className="text-xs text-zinc-600">Only 18% of orgs have formal policies</p>
                        <p className="text-xs text-zinc-600">12% of AI apps visible to security</p>
                    </div>
                </div>

                {/* Assessment */}
                <div className="space-y-4 mb-8">
                    {COMPLIANCE_AREAS.map((area) => (
                        <div key={area.id} className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-3 mb-3">
                                <Shield className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                                <div className="flex-1">
                                    <h3 className="font-grotesk font-bold text-zinc-900 mb-1">{area.name}</h3>
                                    <p className="text-sm text-zinc-700 mb-3">{area.question}</p>
                                    <div className="flex gap-2 mb-3">
                                        {(['yes', 'partial', 'no'] as const).map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setAnswers(prev => ({ ...prev, [area.id]: opt }))}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                                                    answers[area.id] === opt
                                                        ? opt === 'yes' ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                                        : opt === 'partial' ? 'bg-amber-50 border-amber-300 text-amber-700'
                                                        : 'bg-red-50 border-red-300 text-red-700'
                                                        : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                                                }`}
                                            >
                                                {opt === 'yes' ? '✓ Yes' : opt === 'partial' ? '◐ Partial' : '✗ No'}
                                            </button>
                                        ))}
                                    </div>
                                    {answers[area.id] !== 'yes' && answers[area.id] !== null && (
                                        <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded-lg">
                                            <p className="text-xs text-red-700 flex items-start gap-1.5">
                                                <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                                <span><strong>Risk:</strong> {area.risk}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results */}
                {allAnswered && (
                    <div className="bg-white border-2 border-zinc-200 rounded-2xl p-8 mb-8">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 text-center">Your EU AI Act Readiness</h2>
                        <div className="flex items-center justify-center gap-8 mb-8">
                            <div className="text-center">
                                <p className={`text-6xl font-grotesk font-bold text-${riskColor}-600`}>{score}%</p>
                                <p className="text-sm text-zinc-500 mt-1">Compliance Score</p>
                            </div>
                            <div className="text-center">
                                <p className={`text-2xl font-bold text-${riskColor}-600 bg-${riskColor}-50 px-4 py-2 rounded-lg border border-${riskColor}-200`}>
                                    {riskLevel} RISK
                                </p>
                                <p className="text-sm text-zinc-500 mt-1">{daysLeft} days to enforcement</p>
                            </div>
                        </div>

                        {score < 80 && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                                <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    {score < 25 ? 'Critical: Immediate Action Required' :
                                     score < 50 ? 'High Risk: Significant Gaps Detected' :
                                     'Medium Risk: Key Areas Need Attention'}
                                </h3>
                                <p className="text-sm text-red-700">
                                    {score < 25
                                        ? `Your organization faces potential fines of up to 7% of global turnover. With ${daysLeft} days until enforcement, you need an immediate governance audit.`
                                        : score < 50
                                        ? `Multiple compliance areas are unaddressed. At current trajectory, your organization will not be compliant by August 2026.`
                                        : `Good progress, but remaining gaps could expose significant liability. Prioritize the red-flagged areas above.`
                                    }
                                </p>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/tools/shadow-ai" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-zinc-900 font-bold rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all">
                                <Shield className="w-4 h-4" />
                                Run Shadow AI Scan
                            </Link>
                            <Link href="/advisory" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-200 text-zinc-700 font-medium rounded-xl hover:bg-zinc-50 transition-colors">
                                Book Governance Audit
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}

                {!allAnswered && (
                    <div className="text-center text-sm text-zinc-500">
                        {answered}/{COMPLIANCE_AREAS.length} areas assessed. Answer all to see your compliance score.
                    </div>
                )}
            </div>
        </div>
    );
}

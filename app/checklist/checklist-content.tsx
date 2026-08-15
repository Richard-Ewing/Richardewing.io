'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Lock, ArrowRight, Shield } from 'lucide-react';

const QUESTIONS = [
    { id: 1, text: 'What percentage of your R&D budget funds new capability vs. maintaining existing features?' },
    { id: 2, text: 'Can your CFO calculate the per-request cost of every AI-powered feature?' },
    { id: 3, text: 'Do you have a Technical Insolvency Date  -  the date when maintenance load exceeds engineering capacity?' },
    { id: 4, text: 'Has your board seen a Product Debt Index report in the last 90 days?' },
    { id: 5, text: 'How many AI agent permissions have been audited for least-privilege compliance?' },
    { id: 6, text: 'Do you measure retry inflation  -  the cost of recursive AI failure loops?' },
    { id: 7, text: 'Can you quantify your Innovation Tax  -  R&D spend that produces zero net-new capability?' },
    { id: 8, text: 'Do you have a kill switch protocol for negative-carry features?' },
    { id: 9, text: 'Are your AI model outputs verified before they reach production systems?' },
    { id: 10, text: 'Do you track hallucination debt  -  the cumulative cost of unverified AI outputs?' },
    { id: 11, text: 'Can you calculate the margin collapse point for each AI feature at scale?' },
    { id: 12, text: 'Does your governance infrastructure enforce deterministic verification at the runtime layer?' },
];

const GATE_AFTER = 4;

export default function ChecklistPageContent() {
    const [email, setEmail] = useState('');
    const [unlocked, setUnlocked] = useState(false);
    const [checked, setChecked] = useState<Record<number, boolean>>({});
    const [submitting, setSubmitting] = useState(false);

    const toggleCheck = (id: number) => {
        setChecked(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleUnlock = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setSubmitting(true);
        
        try {
            // Submit to Beehiiv
            await fetch('https://api.beehiiv.com/v2/publications/pub_00000000-0000-0000-0000-000000000000/subscriptions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, utm_source: 'checklist', reactivate_existing: true }),
            }).catch(() => {});
            
            setUnlocked(true);
        } catch {
            setUnlocked(true); // Fail-open for UX
        }
        setSubmitting(false);
    };

    const score = Object.values(checked).filter(Boolean).length;
    const scoreColor = score <= 3 ? 'text-rose-600' : score <= 7 ? 'text-amber-600' : score <= 10 ? 'text-cyan-600' : 'text-emerald-600';

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-3xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Shield size={14} /> Free Diagnostic
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6">
                        The 12-Point Enterprise<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">AI Governance Checklist</span>
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto font-medium">
                        The exact questions asked in <strong className="text-[#1A1A1A]">$7,500 R&D Capital Audits</strong>. 
                        Answer honestly. If you can&apos;t check 8 or more, your AI governance has structural gaps.
                    </p>
                </div>

                {/* Score Bar */}
                <div className="mb-8 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-zinc-500 uppercase tracking-widest">Your Score</span>
                    <div className="flex items-center gap-2">
                        <span className={`text-3xl font-grotesk font-bold ${scoreColor}`}>{score}</span>
                        <span className="text-zinc-600 font-bold">/12</span>
                    </div>
                </div>

                {/* Questions */}
                <div className="space-y-3 mb-12">
                    {QUESTIONS.map((q, i) => {
                        const isLocked = i >= GATE_AFTER && !unlocked;
                        
                        return (
                            <div
                                key={q.id}
                                className={`relative p-5 rounded-xl border transition-all ${
                                    isLocked 
                                        ? 'bg-zinc-50 border-zinc-200 select-none' 
                                        : checked[q.id]
                                            ? 'bg-emerald-50 border-emerald-200'
                                            : 'bg-white border-zinc-200 hover:border-violet-300'
                                }`}
                            >
                                {isLocked && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100/90 rounded-xl z-10 flex items-center justify-center">
                                        {i === GATE_AFTER && (
                                            <Lock className="w-5 h-5 text-zinc-600" />
                                        )}
                                    </div>
                                )}
                                <button
                                    onClick={() => !isLocked && toggleCheck(q.id)}
                                    disabled={isLocked}
                                    className="flex items-start gap-4 text-left w-full"
                                >
                                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                                        checked[q.id] 
                                            ? 'bg-emerald-500 border-emerald-500' 
                                            : 'border-zinc-300'
                                    }`}>
                                        {checked[q.id] && <CheckCircle2 className="w-4 h-4 text-zinc-900" />}
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest">
                                            Question {q.id}
                                        </span>
                                        <p className={`text-sm font-semibold mt-1 ${
                                            isLocked ? 'text-zinc-600 blur-[2px]' : 'text-[#1A1A1A]'
                                        }`}>
                                            {q.text}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Gate CTA */}
                {!unlocked && (
                    <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-rose-50 border-2 border-violet-200 text-center">
                        <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                            Get the Full Checklist Free
                        </h2>
                        <p className="text-sm text-[#4A4A4A] mb-6 max-w-md mx-auto">
                            Questions 5–12 cover agent permissions, retry economics, kill switches, and deterministic verification. Enter your email to unlock all 12.
                        </p>
                        <form onSubmit={handleUnlock} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 px-4 py-3 rounded-lg border border-zinc-300 bg-white text-[#1A1A1A] placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-400"
                            />
                            <button
                                type="submit"
                                disabled={submitting}
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-violet-500 text-zinc-900 font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2 justify-center"
                            >
                                {submitting ? 'Unlocking...' : 'Unlock All 12'} <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                        <p className="text-xs text-zinc-600 mt-3">No spam. One weekly briefing. Unsubscribe anytime.</p>
                    </div>
                )}

                {/* Score Interpretation */}
                {(unlocked || Object.keys(checked).length > 0) && (
                    <div className="mb-12 p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm">
                        <h2 className="text-lg font-grotesk font-bold text-[#1A1A1A] mb-4">Score Interpretation</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="font-bold text-rose-600 w-12 shrink-0">0-3</span>
                                <p className="text-zinc-700"><strong>Critical Governance Gap.</strong> Your AI systems are operationally unstable. You need an immediate R&D Capital Audit.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="font-bold text-amber-600 w-12 shrink-0">4-7</span>
                                <p className="text-zinc-700"><strong>Partial Coverage.</strong> You have awareness but no enforcement. Gaps will compound. Start with the Product Debt Index.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="font-bold text-cyan-600 w-12 shrink-0">8-10</span>
                                <p className="text-zinc-700"><strong>Strong Foundation.</strong> You&apos;re ahead of 80% of enterprises. Optimize with the AI Unit Economics Calculator.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="font-bold text-emerald-600 w-12 shrink-0">11-12</span>
                                <p className="text-zinc-700"><strong>Deterministic Governance.</strong> You&apos;re operating at the standard. Consider advisory licensing to formalize.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    <Link href="/tools/pdi" className="p-6 rounded-2xl bg-white border border-rose-200 hover:border-rose-400 transition-colors group">
                        <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest mb-2">Free Tool</div>
                        <h3 className="text-lg font-grotesk font-bold text-[#1A1A1A] group-hover:text-rose-700 transition-colors">Product Debt Index Calculator</h3>
                        <p className="text-sm text-zinc-500 mt-1">Calculate your Technical Insolvency Date →</p>
                    </Link>
                    <Link href="/services" className="p-6 rounded-2xl bg-white border border-violet-200 hover:border-violet-400 transition-colors group">
                        <div className="text-xs font-mono font-bold text-violet-600 uppercase tracking-widest mb-2">Advisory</div>
                        <h3 className="text-lg font-grotesk font-bold text-[#1A1A1A] group-hover:text-violet-700 transition-colors">R&D Capital Audit</h3>
                        <p className="text-sm text-zinc-500 mt-1">From $450 gut-check to $7,500 full audit →</p>
                    </Link>
                </div>

                <div className="text-center">
                    <Link href="/" className="text-sm font-bold text-zinc-600 hover:text-zinc-950 uppercase tracking-widest">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

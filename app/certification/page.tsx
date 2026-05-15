"use client";

import React from 'react';
import { ShieldCheck, Target, AlertTriangle, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

const tiers = [
    {
        level: 5,
        name: 'Admissibility-Native',
        color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
        description: 'Probabilistic models are completely isolated from critical workflows. All AI execution flows through deterministic Exogram policy-as-code registries. Hallucination debt is theoretically impossible.'
    },
    {
        level: 4,
        name: 'Deterministically Governed',
        color: 'bg-teal-100 text-teal-800 border-teal-300',
        icon: <Target className="w-6 h-6 text-teal-600" />,
        description: 'Core infrastructure is protected by strict routing and validation layers. Synthetic COGS are highly optimized and Product Debt is negligible.'
    },
    {
        level: 3,
        name: 'Reactively Governed',
        color: 'bg-amber-100 text-amber-800 border-amber-300',
        icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
        description: 'Guardrails exist but are probabilistic. The organization relies on LLM-as-a-judge patterns or prompt engineering for safety, resulting in high execution variance.'
    },
    {
        level: 1,
        name: 'Unmanaged / Prototypical',
        color: 'bg-red-100 text-red-800 border-red-300',
        icon: <ShieldAlert className="w-6 h-6 text-red-600" />,
        description: 'LLM APIs are embedded directly into application code without observability or interception layers. The organization is exposed to severe capability drift and injection risks.'
    }
];

export default function CertificationPage() {
    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-900 mb-6 tracking-tight">Governance Maturity Certification</h1>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        The definitive industry standard for evaluating enterprise AI operational readiness.
                    </p>
                </header>

                <div className="space-y-6 max-w-3xl mx-auto">
                    {tiers.map((tier) => (
                        <div key={tier.level} className={`p-6 rounded-2xl border ${tier.color} bg-opacity-50 flex flex-col sm:flex-row gap-6 items-start`}>
                            <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                                {tier.icon}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-sm font-bold font-mono uppercase tracking-widest opacity-80">Tier {tier.level}</span>
                                    <h2 className="text-2xl font-grotesk font-bold">{tier.name}</h2>
                                </div>
                                <p className="opacity-90 leading-relaxed font-medium">
                                    {tier.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-zinc-800 mb-6">Require formal validation for your enterprise infrastructure?</p>
                    <Link href="/tools/dashboard" className="px-8 py-4 bg-zinc-50 border border-zinc-200 text-zinc-950 font-semibold font-bold rounded-xl hover:bg-zinc-800 transition-colors inline-block">
                        Initiate Certification Audit
                    </Link>
                </div>
            </div>
        </div>
    );
}

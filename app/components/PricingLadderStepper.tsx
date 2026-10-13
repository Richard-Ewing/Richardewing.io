"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export interface PricingStep {
    stage: string;
    title: string;
    price: string;
    cadence: string;
    description: string;
    href: string;
    highlight?: boolean;
}

const defaultSteps: PricingStep[] = [
    {
        stage: '01. BENCHMARK',
        title: 'Free Diagnostic Suite',
        price: '$0',
        cadence: '25 live tools',
        description: 'Run interactive calculators for AI unit economics, APER, and Product Debt.',
        href: '/diagnose',
    },
    {
        stage: '02. OPERATING KIT',
        title: 'AI Economist Toolkit',
        price: '$29',
        cadence: 'instant download',
        description: '5 working Excel/CSV models, 12-slide CFO board deck, and 30-day P&L runbook.',
        href: '/toolkit',
        highlight: true,
    },
    {
        stage: '03. TEAR-DOWN',
        title: 'Product P&L & Pricing',
        price: '$450',
        cadence: '60-min 1-on-1',
        description: 'Live working session to stress-test AI pricing and cut zombie roadmap waste.',
        href: '/services#gut_check',
    },
    {
        stage: '04. TURNAROUND',
        title: 'P&L & Roadmap Sprint',
        price: '$2,500',
        cadence: '2-week sprint',
        description: 'Full feature-level ROI audit, AI pricing redesign, and board defense deck.',
        href: '/services#insolvency_diagnostic',
    },
    {
        stage: '05. LEADERSHIP',
        title: 'Fractional CPO / Exec',
        price: '$10,000',
        cadence: '/mo or Full-Time',
        description: 'Ongoing CPO/VP of Product leadership, 0-to-1 AI builds, or executive hire.',
        href: '/portfolio',
    },
];

export const PricingLadderStepper = () => {
    return (
        <div className="w-full my-8">
            <div className="text-center mb-6">
                <span className="text-xs font-mono font-bold text-violet-700 uppercase tracking-widest block mb-1">
                    How We Work Together
                </span>
                <h3 className="text-xl font-grotesk font-bold text-zinc-900">
                    From $0 Benchmarks &amp; $29 Operating Kit to Executive Product Leadership
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {defaultSteps.map((step, index) => (
                    <Link
                        key={index}
                        href={step.href}
                        className={`group relative p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                            step.highlight
                                ? 'bg-gradient-to-b from-purple-900 to-indigo-950 border-purple-500 text-white shadow-lg shadow-purple-950/20 hover:scale-[1.02]'
                                : 'bg-white/80 border-zinc-200 text-zinc-900 hover:border-violet-300 hover:bg-violet-50/30'
                        }`}
                    >
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className={`text-[10px] font-mono font-bold tracking-wider ${step.highlight ? 'text-purple-300' : 'text-zinc-400'}`}>
                                    {step.stage}
                                </span>
                                {step.highlight && (
                                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-purple-500 text-white">
                                        Popular
                                    </span>
                                )}
                            </div>

                            <div className="font-bold text-sm mb-1 group-hover:text-purple-600 transition-colors">
                                {step.title}
                            </div>

                            <div className="flex items-baseline gap-1 mb-2">
                                <span className={`text-xl font-extrabold font-mono ${step.highlight ? 'text-white' : 'text-zinc-950'}`}>
                                    {step.price}
                                </span>
                                <span className={`text-[10px] font-mono font-medium ${step.highlight ? 'text-purple-200' : 'text-zinc-500'}`}>
                                    {step.cadence}
                                </span>
                            </div>

                            <p className={`text-xs leading-normal font-medium ${step.highlight ? 'text-purple-100' : 'text-zinc-600'}`}>
                                {step.description}
                            </p>
                        </div>

                        <div className="mt-4 pt-2 border-t border-current/10 flex items-center justify-between text-xs font-bold">
                            <span>View Details</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PricingLadderStepper;

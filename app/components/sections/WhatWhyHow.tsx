"use client";

import { HelpCircle, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        title: "What Is This?",
        short: "The Translation Layer",
        description: "AI Economist = the translation layer between engineering output and CFO-level financial outcomes.",
        details: "Most consulting tells you how models work. I tell you how models impact your gross margins and P&L. I convert API parameters and token lengths into EBITDA compression forecasts.",
        icon: HelpCircle,
        color: "indigo"
    },
    {
        title: "Why Do You Need It?",
        short: "73% Maintenance Leak",
        description: "73% of R&D capital funds maintenance, not innovation. I find the leaks.",
        details: "Without strict cost caps and deterministic code analysis, your AI pilots become compounding liabilities. I identify zombie features and engineering capital misallocation before they trigger cash drain.",
        icon: AlertCircle,
        color: "rose"
    },
    {
        title: "How It Works",
        short: "3-Step Audit Protocol",
        description: "Diagnostic → Framework → Implementation. Secure cost ceilings in under 3 weeks.",
        details: "We start with a rapid economic diagnostic, deploy the Production AI Governance Framework parameters, and install Exogram deterministic guardrails at the runtime network layer.",
        icon: ShieldCheck,
        color: "emerald"
    }
];

const colorMap: Record<string, { bg: string; border: string; hoverBorder: string; text: string; iconBg: string; line: string }> = {
    indigo: {
        bg: "bg-indigo-50/50",
        border: "border-indigo-100",
        hoverBorder: "hover:border-indigo-400",
        text: "text-indigo-600",
        iconBg: "bg-indigo-100/50",
        line: "from-indigo-500 to-transparent"
    },
    rose: {
        bg: "bg-rose-50/50",
        border: "border-rose-100",
        hoverBorder: "hover:border-rose-400",
        text: "text-rose-600",
        iconBg: "bg-rose-100/50",
        line: "from-rose-500 to-transparent"
    },
    emerald: {
        bg: "bg-emerald-50/50",
        border: "border-emerald-100",
        hoverBorder: "hover:border-emerald-400",
        text: "text-emerald-600",
        iconBg: "bg-emerald-100/50",
        line: "from-emerald-500 to-transparent"
    }
};

export default function WhatWhyHow() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#FCFAF7] to-white relative overflow-hidden">
            {/* Background blur */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="page-container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 font-grotesk tracking-tight">
                        How We Prevent <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-rose-600">AI Capital Bleed</span>
                    </h2>
                    <p className="text-zinc-600 mt-4 text-base font-semibold">
                        A systematic approach to aligning model behavior with boardroom economics.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {steps.map((step, idx) => {
                        const colors = colorMap[step.color];
                        const Icon = step.icon;
                        return (
                            <div 
                                key={idx}
                                className={`relative rounded-3xl border ${colors.border} ${colors.hoverBorder} bg-white p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 flex flex-col justify-between`}
                            >
                                <div>
                                    {/* Eyebrow */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-12 h-12 rounded-2xl ${colors.iconBg} flex items-center justify-center`}>
                                            <Icon className={`w-6 h-6 ${colors.text}`} />
                                        </div>
                                        <span className="text-4xl font-extrabold text-zinc-200 font-mono">0{idx + 1}</span>
                                    </div>

                                    {/* Headings */}
                                    <h3 className="text-xs font-bold font-mono text-zinc-600 uppercase tracking-widest mb-1">{step.title}</h3>
                                    <h4 className="text-xl font-bold text-zinc-900 mb-4 font-grotesk">{step.short}</h4>
                                    
                                    <div className={`h-0.5 bg-gradient-to-r ${colors.line} w-16 mb-6`} />

                                    <p className="text-sm font-bold text-zinc-950 mb-4 leading-relaxed">
                                        {step.description}
                                    </p>
                                    <p className="text-sm text-zinc-600 font-medium leading-relaxed">
                                        {step.details}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

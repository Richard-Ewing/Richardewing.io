"use client";

import Link from 'next/link';
import { ArrowRight, DollarSign, ShieldOff, Bug } from 'lucide-react';

const problems = [
    {
        icon: DollarSign,
        label: "UNPREDICTABLE AI INVOICES",
        businessImpact: "Unmonitored AI usage is shrinking gross margins.",
        headline: "AI spending is erratic because nobody is tracking cost per transaction.",
        description: "Uncapped monthly API invoices, unmonitored vendor usage, and runaway computational loops create budget overruns with zero financial accountability attached.",
        metric: "$14,200/mo",
        metricLabel: "Average unmonitored AI overspend found per audit",
        color: {
            border: "border-rose-200",
            hoverBorder: "hover:border-rose-400",
            iconBg: "bg-rose-50",
            iconText: "text-rose-600",
            topBar: "from-rose-400 to-rose-500",
            metricText: "text-rose-600",
        },
    },
    {
        icon: ShieldOff,
        label: "UNMONITORED SECURITY RISKS",
        businessImpact: "Unmanaged employee AI tools create compliance and data liabilities.",
        headline: "Employees are sharing company data with public AI tools without oversight.",
        description: "Unregistered AI tools create data leakage risks. Without explicit administrative controls, internal financial plans and customer records risk exposure to external systems.",
        metric: "73%",
        metricLabel: "of companies lack executive AI data policies",
        color: {
            border: "border-violet-200",
            hoverBorder: "hover:border-violet-400",
            iconBg: "bg-violet-50",
            iconText: "text-violet-600",
            topBar: "from-violet-400 to-violet-500",
            metricText: "text-violet-600",
        },
    },
    {
        icon: Bug,
        label: "UNVERIFIED AI CODE LABILITIES",
        businessImpact: "AI-assisted software development inflates future maintenance costs.",
        headline: "AI-generated software looks complete - until maintenance bills triple.",
        description: "Developers using AI assistants often ship high volumes of unverified software. Without technical governance, this creates technical debt that slows future feature delivery.",
        metric: "42%",
        metricLabel: "engineering capacity consumed by software maintenance",
        color: {
            border: "border-purple-200",
            hoverBorder: "hover:border-purple-400",
            iconBg: "bg-purple-50",
            iconText: "text-purple-600",
            topBar: "from-purple-400 to-purple-600",
            metricText: "text-purple-600",
        },
    },
];

export default function ThreeProblems() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#FCFAF7] to-white relative overflow-hidden">
            {/* Background blur */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-rose-200/15 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="page-container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 font-grotesk tracking-tight">
                        Three Problems That Cost Enterprise AI Teams{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600">Real Money</span>
                    </h2>
                    <p className="text-zinc-600 mt-4 text-base font-semibold">
                        These are not hypothetical risks. They are measurable capital leaks I find in every audit.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {problems.map((problem, idx) => {
                        const Icon = problem.icon;
                        return (
                            <div
                                key={idx}
                                className={`relative rounded-3xl border ${problem.color.border} ${problem.color.hoverBorder} bg-white p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 flex flex-col justify-between overflow-hidden`}
                            >
                                {/* Top color bar */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${problem.color.topBar}`} />

                                <div>
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6 pt-2">
                                        <div className={`w-12 h-12 rounded-2xl ${problem.color.iconBg} flex items-center justify-center`}>
                                            <Icon className={`w-6 h-6 ${problem.color.iconText}`} />
                                        </div>
                                        <span className="text-4xl font-extrabold text-zinc-200 font-mono">0{idx + 1}</span>
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest mb-1">{problem.label}</h3>

                                    {/* Business impact - plain English for any executive */}
                                    <p className="text-sm font-semibold text-zinc-800 mb-3">{problem.businessImpact}</p>

                                    {/* Headline */}
                                    <h4 className="text-lg font-bold text-zinc-900 mb-4 leading-snug font-grotesk">{problem.headline}</h4>

                                    {/* Description */}
                                    <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-6">{problem.description}</p>
                                </div>

                                {/* Metric */}
                                <div className="border-t border-zinc-200 pt-4">
                                    <div className={`text-2xl font-bold ${problem.color.metricText} font-mono`}>{problem.metric}</div>
                                    <p className="text-xs text-zinc-500 font-semibold mt-1">{problem.metricLabel}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/tools/aueb"
                        className="inline-flex items-center gap-2 text-violet-700 font-bold hover:text-violet-500 transition-colors group"
                    >
                        Measure your exposure with the free AI Unit Economics Benchmark
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

"use client";

import Link from 'next/link';
import { ArrowRight, DollarSign, ShieldOff, Bug } from 'lucide-react';

const problems = [
    {
        icon: DollarSign,
        label: "AI BILLING SHOCK",
        headline: "Your AI costs are unpredictable because nobody is measuring them.",
        description: "Runaway inference loops. Unmonitored API calls. Token waste compounding at 3x your projected budget. The CFO sees a growing line item with no unit economics attached.",
        metric: "$14,200/mo",
        metricLabel: "Average token waste before audit",
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
        label: "SHADOW AI LIABILITY",
        headline: "Employees are pasting proprietary data into public LLMs. Your DLP tools are blind to it.",
        description: "Every unsanctioned ChatGPT session is a potential data exfiltration event. OAuth tokens proliferate. Nobody tracks which models have access to which internal systems.",
        metric: "73%",
        metricLabel: "of enterprises lack AI-specific access controls",
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
        label: "VIBE CODING DEBT",
        headline: "AI-generated code looks structurally sound. It is architecturally bankrupt.",
        description: "3,000-line Copilot PRs that compile perfectly and fail in production. Junior developers shipping code they cannot explain. Context rot compounding every sprint.",
        metric: "42%",
        metricLabel: "engineering capacity lost to zombie features",
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
                                    <h3 className="text-xs font-bold font-mono text-zinc-500 uppercase tracking-widest mb-3">{problem.label}</h3>

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

"use client";

import Link from 'next/link';
import { ArrowRight, DollarSign, ShieldOff, Bug } from 'lucide-react';

const problems = [
    {
        icon: DollarSign,
        label: "CRIME SCENE 01 · THE PRICING TRAP",
        businessImpact: "Flat-rate AI pricing turns your best customers into margin losers.",
        headline: "Your most active users are quietly bankrupting your gross margin.",
        description: "When you bundle uncapped LLM inference into a flat monthly SaaS seat price, every power user prompt eats directly into your gross profit. Without usage-tiered packaging and hard cost ceilings, revenue growth accelerates cash burn.",
        metric: "$14,200/mo",
        metricLabel: "Average unmonitored AI margin leak found per product audit",
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
        icon: Bug,
        label: "CRIME SCENE 02 · THE VELOCITY ILLUSION",
        businessImpact: "AI coding tools double PR volume while slowing net-new roadmap delivery.",
        headline: "Your engineers are generating 2x more code, and spending 60% of their week maintaining Zombie Features.",
        description: "Shipping code faster means nothing if 60% of sprint capacity goes to maintaining legacy features with under 3% adoption. Without a ruthless Zombie Feature Kill-List, technical debt compounds until your roadmap freezes.",
        metric: "42%",
        metricLabel: "Engineering capacity recovered by cutting negative-carry features",
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
        icon: ShieldOff,
        label: "CRIME SCENE 03 · THE BOARDROOM BLINDSPOT",
        businessImpact: "CFOs and Product Leaders lack a shared financial language for AI ROI.",
        headline: "The CFO sees a rising cloud invoice. The VP of Product promises 'strategic moat.' Neither has the math.",
        description: "Most product teams walk into board meetings with vanity usage metrics instead of dollar-denominated contribution margins. When leadership cannot tie engineering headcount and AI tokens to net revenue retention, budgets get slashed.",
        metric: "73%",
        metricLabel: "Of enterprise AI roadmaps lack feature-level P&L attribution",
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
                        Three Profit Leaks That Cost Software Teams{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-600">Real Money</span>
                    </h2>
                    <p className="text-zinc-600 mt-4 text-base font-semibold">
                        These are not hypothetical theories. They are the exact P&amp;L and roadmap leaks I fix for CEOs, CFOs, and Product Leaders.
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
                    <Link
                        href="/toolkit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm group"
                    >
                        Download the $29 Operating Kit to Fix All Three
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                        href="/tools/aueb"
                        className="inline-flex items-center gap-2 text-violet-700 font-bold text-sm hover:text-violet-500 transition-colors group"
                    >
                        Or run the free AI Unit Economics Benchmark
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

"use client";

import Link from 'next/link';
import { ArrowRight, Search, FileBarChart, Shield } from 'lucide-react';

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Diagnose",
        subtitle: "Measure the exposure",
        description: "Run the free AI Unit Economics Benchmark to quantify your cost structure. Or book a $450 Gut-Check Evaluation for a 30-minute rapid scan of your AWS and API billing.",
        cta: { text: "Run free benchmark", href: "/tools/aueb" },
        color: "rose",
    },
    {
        number: "02",
        icon: FileBarChart,
        title: "Audit",
        subtitle: "Find the capital leaks",
        description: "A forensic R&D Capital Audit ($2,500 - $7,500) maps exactly where engineering spend is going and what it is producing. You get a written risk report with dollar-denominated findings.",
        cta: { text: "See audit packages", href: "/services" },
        color: "violet",
    },
    {
        number: "03",
        icon: Shield,
        title: "Govern",
        subtitle: "Install deterministic controls",
        description: "Implement runtime cost-caps, token budgets, and policy-as-code enforcement. Move from unpredictable AI expenses to mathematically constrained operating costs.",
        cta: { text: "Explore the framework", href: "/framework" },
        color: "emerald",
    },
];

const colorMap: Record<string, { bg: string; ring: string; text: string; line: string; numberBg: string }> = {
    rose: {
        bg: "bg-rose-50",
        ring: "ring-rose-200",
        text: "text-rose-600",
        line: "bg-rose-300",
        numberBg: "bg-gradient-to-br from-rose-400 to-rose-500",
    },
    violet: {
        bg: "bg-violet-50",
        ring: "ring-violet-200",
        text: "text-violet-600",
        line: "bg-violet-300",
        numberBg: "bg-gradient-to-br from-violet-400 to-violet-500",
    },
    emerald: {
        bg: "bg-emerald-50",
        ring: "ring-emerald-200",
        text: "text-emerald-600",
        line: "bg-emerald-300",
        numberBg: "bg-gradient-to-br from-emerald-400 to-emerald-500",
    },
};

export default function HowItWorks() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

            <div className="page-container relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 font-grotesk tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-zinc-600 mt-4 text-base font-semibold">
                        Three steps. Each one produces a concrete deliverable you can act on.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {steps.map((step, idx) => {
                        const colors = colorMap[step.color];
                        const Icon = step.icon;
                        const isLast = idx === steps.length - 1;

                        return (
                            <div key={idx} className="relative flex gap-6 md:gap-10">
                                {/* Left: Number + connector line */}
                                <div className="flex flex-col items-center">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${colors.numberBg} flex items-center justify-center shadow-md shrink-0`}>
                                        <span className="text-white font-bold font-mono text-lg">{step.number}</span>
                                    </div>
                                    {!isLast && (
                                        <div className={`w-0.5 flex-1 my-2 ${colors.line} opacity-40`} />
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-12'}`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center`}>
                                            <Icon className={`w-5 h-5 ${colors.text}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-zinc-900 font-grotesk">{step.title}</h3>
                                    </div>
                                    <p className={`text-sm font-bold ${colors.text} uppercase tracking-widest font-mono mb-3`}>{step.subtitle}</p>
                                    <p className="text-zinc-600 font-medium leading-relaxed mb-4">{step.description}</p>
                                    <Link
                                        href={step.cta.href}
                                        className={`inline-flex items-center gap-2 ${colors.text} font-bold hover:opacity-80 transition-opacity group text-sm`}
                                    >
                                        {step.cta.text}
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

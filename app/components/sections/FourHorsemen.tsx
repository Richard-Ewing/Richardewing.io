"use client";

import { AlertTriangle, DollarSign, ShieldAlert, PieChart } from 'lucide-react';

const failures = [
    {
        icon: AlertTriangle,
        title: "Unverified Outputs",
        stat: "95%",
        source: "MIT",
        description: "of GenAI pilots fail to reach production. Your AI generates answers — but who verifies they're correct before they hit a customer?",
        color: "rose",
    },
    {
        icon: DollarSign,
        title: "Margin Collapse",
        stat: "80%",
        source: "RAND",
        description: "of AI projects fail to deliver business value. AI features cost money every time they run. Without unit economics, your most popular feature becomes your costliest.",
        color: "violet",
    },
    {
        icon: ShieldAlert,
        title: "Agent Security Gaps",
        stat: "78%",
        source: "Industry Research",
        description: "of AI agents have excessive permissions. One prompt injection = full data exfiltration. EchoLeak (CVE-2025-32711) proved zero-click attacks are real.",
        color: "amber",
    },
    {
        icon: PieChart,
        title: "Capital Misallocation",
        stat: "42%",
        source: "S&P Global",
        description: "of companies abandoned most AI initiatives in 2025. Boards can't distinguish building from patching when 60% of R&D goes to maintenance reported as 'innovation.'",
        color: "purple",
    },
];

const colorMap: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
    rose:   { border: 'border-rose-200', bg: 'bg-rose-50', text: 'text-rose-600', iconBg: 'bg-rose-50' },
    violet: { border: 'border-violet-200', bg: 'bg-violet-50', text: 'text-violet-600', iconBg: 'bg-violet-50' },
    amber:  { border: 'border-amber-200', bg: 'bg-amber-50', text: 'text-amber-600', iconBg: 'bg-amber-50' },
    purple: { border: 'border-purple-200', bg: 'bg-purple-50', text: 'text-purple-600', iconBg: 'bg-purple-50' },
};

const FourHorsemen = () => {
    return (
        <section className="section-sm bg-white/50">
            <div className="page-container">

                <div className="section-header text-center">
                    <h2>Why Enterprise AI Fails</h2>
                    <p>These aren't hypothetical risks. They're verified failure patterns with real-world financial consequences.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                    {failures.map((f, i) => {
                        const colors = colorMap[f.color];
                        const Icon = f.icon;
                        return (
                            <div key={i} className="card hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                                        <Icon className={`w-6 h-6 ${colors.text}`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-zinc-900">{f.title}</h3>
                                        </div>
                                        <div className="flex items-baseline gap-2 mb-3">
                                            <span className={`text-2xl font-extrabold ${colors.text}`}>{f.stat}</span>
                                            <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest font-mono">{f.source}</span>
                                        </div>
                                        <p className="text-zinc-800 text-sm font-medium leading-relaxed">{f.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default FourHorsemen;

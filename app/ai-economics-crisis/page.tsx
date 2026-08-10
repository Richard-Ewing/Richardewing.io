import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingDown, DollarSign, AlertTriangle, ArrowRight, BarChart3, Calculator, Shield, Zap, Users, Target, Clock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'AI Tools Cost $58K/Engineer in & Strategy Diagnostics | Richard Ewing',
    description: 'AI Tools Cost $58K/Engineer in provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: { canonical: 'https://www.richardewing.io/ai-economics-crisis' },
    openGraph: {
        title: 'The AI Economics Crisis: Your Coding Tools Cost More Than You Think',
        description: 'GitHub Copilot just went usage-based. Hidden AI costs are $58K/engineer/year. Run a free audit.',
        url: 'https://www.richardewing.io/ai-economics-crisis',
        type: 'website',
    },
};

const STATS = [
    { value: '$58K', label: 'Hidden cost per engineer per year', sublabel: 'from AI-generated maintenance & rework', icon: DollarSign },
    { value: '19%', label: 'Slower with AI tools', sublabel: 'METR study — experienced devs measured', icon: TrendingDown },
    { value: '41%', label: 'Of new code is AI-generated', sublabel: 'but developer trust is only 29-33%', icon: AlertTriangle },
    { value: '45%', label: 'Contain security vulnerabilities', sublabel: 'of AI-generated code segments', icon: Shield },
    { value: '95%', label: 'Of AI pilots fail to show ROI', sublabel: '"Pilot Purgatory" — never reach production', icon: Target },
    { value: '4.3h', label: 'Per week verifying AI outputs', sublabel: '$14,200/employee/year "verification tax"', icon: Clock },
];

const TOOLS = [
    { name: 'Copilot ROI Calculator', href: '/tools/copilot-roi', description: 'Is your Copilot subscription actually paying off? Calculate true ROI with hidden costs.' },
    { name: 'AI Unit Economics Audit', href: '/tools/aueb', description: 'Map every AI cost from inference to rework. Find your real gross margin.' },
    { name: 'Product Debt Index', href: '/tools/pdi', description: 'Quantify how much AI-generated technical debt is draining your runway.' },
    { name: 'Innovation Tax Calculator', href: '/tools/innovation-tax-calculator', description: 'What % of your R&D budget is maintenance disguised as innovation?' },
    { name: 'FTE Displacement Estimator', href: '/tools/fte-displacement', description: 'Model real AI workforce impact — not vendor fantasies.' },
    { name: 'AI ROI Timeline', href: '/tools/ai-roi-timeline', description: 'When will your AI investment actually break even? Model it.' },
];

export default function AIEconomicsCrisis() {
    return (
        <main className="pt-20">
            {/* HERO */}
            <section className="relative bg-[#FCFAF7] py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-zinc-950 to-purple-950/20" />
                <div className="relative max-w-5xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-xs font-mono uppercase tracking-widest mb-8">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Market Alert — June 2026
                    </div>
                    <h1 className="text-4xl md:text-6xl font-grotesk font-bold text-zinc-900 leading-tight mb-6">
                        Your AI Tools Cost More
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-amber-400">
                            Than Your Engineers Think
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        GitHub Copilot just went usage-based. METR proved experienced devs take <strong className="text-zinc-900">19% longer</strong> with AI.
                        The hidden cost is <strong className="text-red-400">$58K per engineer per year</strong>.
                        Your CFO is about to ask you to prove ROI. Here&apos;s the math.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/tools/aueb" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-zinc-900 font-bold rounded-xl hover:from-red-500 hover:to-amber-500 transition-all text-lg shadow-lg shadow-red-500/20">
                            Run Your Free AI Economics Audit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-300 text-zinc-700 font-medium rounded-xl hover:bg-zinc-100 transition-colors">
                            Book an Advisory Session
                        </Link>
                    </div>
                </div>
            </section>

            {/* STATS GRID */}
            <section className="bg-[#FCFAF7] border-t border-zinc-200/50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-center text-sm font-mono uppercase tracking-widest text-zinc-500 mb-12">
                        The Numbers Nobody Wants to See
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {STATS.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="bg-white border border-zinc-200/50 rounded-2xl p-6 hover:border-red-500/20 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="p-2 bg-red-500/10 rounded-lg">
                                            <Icon className="w-5 h-5 text-red-400" />
                                        </span>
                                    </div>
                                    <p className="text-4xl font-grotesk font-bold text-zinc-900 mb-1">{stat.value}</p>
                                    <p className="text-zinc-700 font-medium text-sm">{stat.label}</p>
                                    <p className="text-zinc-600 text-xs mt-1">{stat.sublabel}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* THESIS */}
            <section className="bg-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-zinc-950 mb-6">
                        You Don&apos;t Have an AI Problem.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                            You Have an AI Economics Problem.
                        </span>
                    </h2>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Everyone else sells &ldquo;better AI.&rdquo; We quantify what AI actually costs.
                        The tools below give you the exact numbers your CFO needs — before they ask.
                    </p>
                    <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
                        <Link href="/methodology" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                            Our Methodology <ChevronRight className="w-3 h-3" />
                        </Link>
                        <Link href="/doctrine" className="hover:text-purple-600 transition-colors flex items-center gap-1">
                            AI Economics Doctrine <ChevronRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* TOOLS GRID */}
            <section className="bg-zinc-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <p className="text-xs font-mono uppercase tracking-widest text-purple-600 mb-3">Free Diagnostic Tools</p>
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950">Quantify Your Real AI Costs</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TOOLS.map((tool, i) => (
                            <Link key={i} href={tool.href} className="group bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-lg hover:border-purple-200 transition-all">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calculator className="w-4 h-4 text-purple-600" />
                                    <h3 className="font-grotesk font-bold text-zinc-900 group-hover:text-purple-700 transition-colors">{tool.name}</h3>
                                </div>
                                <p className="text-sm text-zinc-600 mb-4">{tool.description}</p>
                                <span className="text-xs font-bold text-purple-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Run Free Diagnostic <ArrowRight className="w-3 h-3" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO THIS IS FOR */}
            <section className="bg-[#FCFAF7] py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mb-8 text-center">Who This Is For</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'VP/Director of Engineering', desc: 'You championed AI tools. Now the CFO wants ROI proof. We give you the math.' },
                            { title: 'CTOs Under Board Pressure', desc: '"Why are we spending more on AI with no measurable return?" You need the answer.' },
                            { title: 'Engineering Leaders Scaling 50-500 Devs', desc: 'AI costs compound with headcount. Your hidden costs are growing faster than your team.' },
                            { title: 'PE/VC Portfolio Companies', desc: 'Your portfolio companies are burning capital on AI tools with negative ROI. We quantify it.' },
                        ].map((persona, i) => (
                            <div key={i} className="bg-white border border-zinc-200/50 rounded-xl p-6">
                                <h3 className="font-bold text-zinc-900 mb-2 flex items-center gap-2">
                                    <Users className="w-4 h-4 text-purple-400" />
                                    {persona.title}
                                </h3>
                                <p className="text-sm text-zinc-600">{persona.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-gradient-to-r from-purple-950 to-indigo-950 py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-grotesk font-bold text-zinc-900 mb-4">
                        Stop Guessing. Start Measuring.
                    </h2>
                    <p className="text-lg text-purple-200 mb-8">
                        Run a free AI Economics audit in 5 minutes. Get a board-ready PDF with your real numbers.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/tools/aueb" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:bg-purple-50 transition-colors text-lg">
                            <Zap className="w-5 h-5" />
                            Start Free Audit
                        </Link>
                        <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border border-purple-400/30 text-purple-200 font-medium rounded-xl hover:bg-purple-900/50 transition-colors">
                            Book Advisory Session
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

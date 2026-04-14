'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import { Calculator, Zap, Users, TrendingUp, ArrowRight, Star, Brain } from 'lucide-react';

const tools = [
    {
        id: 'aueb',
        name: 'AI Unit Economics Benchmark',
        acronym: 'AUEB',
        tagline: 'Will your AI scale into bankruptcy?',
        description: 'Calculate your AI gross margin at scale. Factor in LLM costs, third-party APIs, and hosting to see when you hit margin collapse.',
        color: 'red',
        icon: Calculator,
        metrics: ['Gross Margin %', 'Cost per User', 'Months to COGS Crisis'],
        seoKeywords: 'AI unit economics, LLM cost calculator, AI COGS',
    },
    {
        id: 'aper',
        name: 'Revenue Per Engineer',
        acronym: 'APER',
        tagline: 'Is your team over or under capacity?',
        description: 'Benchmark your engineering efficiency against industry standards. Calculate coordination tax and optimal team size.',
        color: 'yellow',
        icon: Users,
        metrics: ['Revenue per Engineer', 'Coordination Tax', 'Optimal Headcount'],
        seoKeywords: 'revenue per engineer, engineering efficiency, team sizing',
    },
    {
        id: 'pdi',
        name: 'Product Debt Index',
        acronym: 'PDI',
        tagline: 'How much are you wasting on maintenance?',
        description: 'AI-powered audit of your backlog. See exactly how much capital is bleeding into maintenance vs. growth work.',
        color: 'cyan',
        icon: Zap,
        metrics: ['Debt Score', 'Annual Waste $', 'Growth vs Maintenance %'],
        seoKeywords: 'product debt, technical debt calculator, backlog audit',
    },
    {
        id: 'ev-se',
        name: 'Valuation Scenario Engine',
        acronym: 'EV-SE',
        tagline: 'What is your execution risk costing you?',
        description: 'Model your valuation gap. See how execution risk factors translate to dollars lost in enterprise value.',
        color: 'purple',
        icon: TrendingUp,
        metrics: ['Potential Value', 'Risk-Adjusted Value', 'Wealth Gap $'],
        seoKeywords: 'startup valuation calculator, execution risk, valuation scenario',
    },
    {
        id: 'audit-interview',
        name: 'Audit Interview',
        acronym: 'AUDIT',
        tagline: 'Quantify candidate judgment and risk.',
        description: 'Production-ready logic for auditing candidates. Evaluate verification depth, architectural reasoning, and economic awareness.',
        color: 'emerald',
        icon: Brain,
        metrics: ['Hiring Verdict', 'Capital Risk', 'Executive Memo'],
        seoKeywords: 'hiring audit engine, engineering interview rubric, product economist',
    },
];

const colorMap: Record<string, { bg: string; text: string; border: string; glow: 'cyan' | 'danger' | 'gold' | 'cobalt' }> = {
    red: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30', glow: 'danger' },
    yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30', glow: 'gold' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'cyan' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30', glow: 'cobalt' },
    emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'cyan' },
};

export default function ToolsPage() {
    return (
        <div className="max-w-5xl w-full relative z-10 mx-auto">
            {/* Hero */}
            <ScrollReveal>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
                        <Star size={12} />
                        Free Diagnostic Tools
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6">
                        Boardroom-Ready Insights<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">In 60 Seconds</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        Stop guessing. These diagnostic tools give you the exact numbers you need to make better decisions about AI costs, team sizing, and product strategy.
                    </p>
                </div>
            </ScrollReveal>

            {/* Tool Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {tools.map((tool, i) => {
                    const colors = colorMap[tool.color];
                    return (
                        <ScrollReveal key={tool.id} delay={i * 100}>
                            <Link href={`/tools/${tool.id}`}>
                                <GlowCard className="p-6 h-full group cursor-pointer" glowColor={colors.glow}>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl ${colors.bg}`}>
                                            <tool.icon className={`w-6 h-6 ${colors.text}`} />
                                        </div>
                                        <span className={`font-mono text-xs ${colors.text} uppercase tracking-widest`}>
                                            {tool.acronym}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {tool.name}
                                    </h2>
                                    <p className={`text-sm font-semibold ${colors.text} mb-3`}>
                                        {tool.tagline}
                                    </p>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        {tool.description}
                                    </p>

                                    {/* Metrics Preview */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {tool.metrics.map((metric, j) => (
                                            <span key={j} className="px-2 py-1 bg-black/30 rounded text-[10px] font-mono text-zinc-500 uppercase">
                                                {metric}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`flex items-center gap-2 text-sm font-semibold ${colors.text} group-hover:translate-x-1 transition-transform`}>
                                        Try Free <ArrowRight size={14} />
                                    </div>
                                </GlowCard>
                            </Link>
                        </ScrollReveal>
                    );
                })}
            </div>

            {/* Trust Section */}
            <ScrollReveal delay={400}>
                <div className="text-center border-t border-zinc-200 pt-12">
                    <p className="text-xs text-zinc-600 mb-4 uppercase tracking-widest">Trusted by product leaders at</p>
                    <div className="flex items-center justify-center gap-8 text-zinc-500 font-mono text-sm">
                        <span>Stripe</span>
                        <span>Figma</span>
                        <span>Linear</span>
                        <span>Notion</span>
                        <span>Vercel</span>
                    </div>
                </div>
            </ScrollReveal>

            {/* FAQ Section for SEO */}
            <ScrollReveal delay={500}>
                <div className="mt-16 capsule-container rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-8">Common Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white font-semibold mb-2">How do I calculate AI unit economics?</h3>
                            <p className="text-zinc-400 text-sm">Use the AUEB tool to input your pricing, AI query volume, and costs. It calculates gross margin, cost per user, and projects when you'll hit margin collapse at your growth rate.</p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">What is a good revenue per engineer ratio?</h3>
                            <p className="text-zinc-400 text-sm">Top-quartile companies achieve $400K-$500K+ ARR per engineer. The APER tool benchmarks your team against industry standards and shows your coordination tax.</p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">How do I measure product debt?</h3>
                            <p className="text-zinc-400 text-sm">The PDI tool uses AI to categorize your backlog into growth, retention, and maintenance work. Your PDI score shows what percentage of engineering capacity is going to non-value-creating work.</p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">How does execution risk affect valuation?</h3>
                            <p className="text-zinc-400 text-sm">Investors discount valuations based on perceived execution risk. The EV-SE tool models risk factors like scope creep, technical complexity, and talent risk to show the dollar impact on your valuation.</p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}

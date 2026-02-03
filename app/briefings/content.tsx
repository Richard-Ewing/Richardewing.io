'use client';

import Link from 'next/link';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';
import ShineBorder from '../components/magicui/shine-border';

interface BriefCardProps {
    number: string;
    title: string;
    subtitle: string;
    href: string;
    isNew?: boolean;
}

const BriefCard = ({ number, title, subtitle, href, isNew }: BriefCardProps) => (
    <GlowCard className="p-5 sm:p-6 relative" glowColor="cyan">
        {isNew && (
            <div className="absolute top-0 right-0 bg-emerald-500/20 text-emerald-400 px-2 py-1 text-[8px] font-mono uppercase tracking-widest rounded-bl-lg">
                New
            </div>
        )}
        <a href={href} className="block group">
            <div className="flex items-start gap-4">
                <div className="text-2xl sm:text-3xl font-mono text-zinc-700 font-bold shrink-0">{number}</div>
                <div className="flex-1">
                    <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-cyan-400 transition mb-1">{title}</h3>
                    <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">{subtitle}</p>
                </div>
                <span className="text-zinc-600 group-hover:text-cyan-400 transition text-lg">→</span>
            </div>
        </a>
    </GlowCard>
);

export default function BriefingsPage() {
    const briefs = [
        { number: '01', title: 'The AI Volatility Tax', subtitle: 'Why AI features are destroying your gross margins', href: '/canonical/ai-margin-autopsy.html', isNew: true },
        { number: '02', title: 'The Senior Ceiling', subtitle: 'Breaking through the IC-to-Executive transition', href: '/canonical/senior-ceiling-playbook.html' },
        { number: '03', title: 'Financial Conway\'s Law', subtitle: 'Why architecture mirrors your funding model', href: '/canonical/financial-conways-law.html' },
        { number: '04', title: 'The Governance of Subtraction', subtitle: 'Why deleting code is higher leverage than writing it', href: '/canonical/governance-of-subtraction.html' },
        { number: '05', title: 'Kill Switch Protocol', subtitle: 'The framework for ruthless feature deprecation', href: '/canonical/kill-switch-governance.html' },
        { number: '06', title: 'Q-PEP Fundamentals', subtitle: 'Qualitative-Profitability Efficiency Protocol', href: '/canonical/q-pep-protocol.html' },
        { number: '07', title: 'The AI Product Business Test', subtitle: 'Built In Editor\'s Pick: Validating AI unit economics before writing code', href: 'https://builtin.com/articles/ai-product-business-test', isNew: true },
    ];

    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                <span>Signal</span><span>/</span><span className="text-white font-bold">Briefings</span>
            </div>

            <ScrollReveal>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 mb-8 overflow-hidden relative text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

                    <div className="relative max-w-3xl mx-auto">
                        <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em] mb-4 block">The Canon</span>
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-grotesk font-bold text-white tracking-tight leading-tight mb-4">
                            Executive<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Briefings.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                            Dense, actionable intelligence for leaders who don't have time for "thought leadership."
                            <span className="text-white font-bold"> Read time: 5-10 minutes each.</span>
                        </p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Brief Cards - 2x3 Grid */}
            <ScrollReveal delay={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {briefs.map((brief, i) => (
                        <BriefCard key={i} {...brief} />
                    ))}
                </div>
            </ScrollReveal>

            {/* AUEB Tool Gateway */}
            <ScrollReveal delay={150}>
                <div className="mb-8 border border-violet-500/20 rounded-2xl p-6 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                                <span className="font-mono text-xs text-violet-400 uppercase tracking-widest">Interactive Tool</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">AI Unit Economics Benchmark™</h3>
                            <p className="text-zinc-400 text-sm">Generative AI introduces linear costs to zero-margin software. Calculate your insolvency horizon.</p>
                        </div>
                        <Link href="/tools/aueb" className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition whitespace-nowrap">
                            Launch AUEB →
                        </Link>
                    </div>
                </div>
            </ScrollReveal>

            {/* Subscribe CTA */}
            <ScrollReveal delay={200}>
                <div className="capsule-container rounded-2xl sm:rounded-[2rem] p-6 sm:p-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">Monthly Dispatch</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Get New Briefs First</h2>
                    <p className="text-zinc-400 text-sm mb-6">One email per month. No spam. Unsubscribe anytime.</p>

                    <a
                        href="https://theproducteconomist.beehiiv.com/subscribe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs sm:text-sm rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                    >
                        Subscribe on Beehiiv <span className="text-lg">→</span>
                    </a>
                </div>
            </ScrollReveal>

            {/* External Publications */}
            <ScrollReveal delay={300}>
                <div className="mt-8 pt-8 border-t border-white/10">
                    <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">Also Published On</div>
                    <div className="flex flex-wrap gap-4">
                        <a href="https://builtin.com/authors/richard-ewing" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">Built In →</a>
                        <a href="https://hackernoon.com/u/richardewing1" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">HackerNoon →</a>
                        {/* <a href="https://www.cio.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">Foundry →</a> */}
                        {/* <a href="https://www.mindtheproduct.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white border-b border-transparent hover:border-white transition">Mind the Product →</a> */}
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}

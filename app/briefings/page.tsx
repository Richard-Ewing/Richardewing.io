'use client';

import Link from 'next/link';
import { GatewayCard } from '../components/gateway-card';
import { ScrollReveal } from '../components/magicui/scroll-reveal';
import { GlowCard } from '../components/magicui/glow-card';

const BriefCard = ({ number, title, date, slug }: { number: string, title: string, date: string, slug: string }) => (
    <Link href={`/briefs/${slug}`} className="block group">
        <GlowCard className="p-6 sm:p-8 h-full flex flex-col justify-between" glowColor="cyan">
            <div>
                <div className="flex justify-between items-start mb-4 pb-3 border-b border-white/5">
                    <span className="font-mono text-zinc-500 text-xs">NO. {number}</span>
                    <span className="font-mono text-zinc-600 text-xs">{date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
            </div>
            <div className="mt-6 pt-3 border-t border-white/5 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-zinc-500">
                <span>Read Brief</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
        </GlowCard>
    </Link>
);

export default function BriefingsPage() {
    return (
        <div className="max-w-4xl w-full relative z-10">
            {/* Breadcrumbs */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Signal</span><span>/</span><span className="text-white font-bold">Briefs</span>
            </div>

            <ScrollReveal>
                <div className="mb-12">
                    <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em] mb-4 block">The Signal from the Noise</span>
                    <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-8">
                        Executive<br />Briefings
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <BriefCard number="001" title='The High Cost of "Maybe"' date="OCT 2025" slug="cost-of-maybe" />
                        <BriefCard number="002" title="Zombie Feature Audit" date="NOV 2025" slug="zombie-feature-audit" />
                        <BriefCard number="003" title="Variance Analysis: AI vs Humans" date="DEC 2025" slug="variance-analysis" />
                    </div>
                </div>
            </ScrollReveal>

            {/* AUEB Calculator Gateway */}
            <ScrollReveal delay={100}>
                <section className="border-t border-white/5 pt-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-cyan-500/30 w-12" />
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-white">AI Unit Economics</h2>
                            <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mt-1">// MARGIN FORENSICS</p>
                        </div>
                    </div>
                    <GatewayCard
                        title="AUEB Calculator™"
                        href="/tools/aueb"
                        color="cyan"
                        description="Launch Unit Economics Model"
                    />
                </section>
            </ScrollReveal>
        </div>
    );
}


'use client';

import Link from 'next/link';
import { GatewayCard } from '../components/gateway-card';

const BriefCard = ({ number, title, date, slug }: { number: string, title: string, date: string, slug: string }) => (
    <Link href={`/briefs/${slug}`} className="block group">
        <div className="border border-white/10 bg-zinc-900/30 p-8 rounded-2xl hover:border-cyan-500/50 transition duration-300 h-full flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                    <span className="font-mono text-zinc-500 text-xs">NO. {number}</span>
                    <span className="font-mono text-zinc-600 text-xs">{date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-zinc-500">
                <span>Read Brief</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
        </div>
    </Link>
);

export default function BriefingsPage() {
    return (
        <div className="max-w-4xl w-full z-10 animate-fade-in-up">
            {/* Breadcrumbs */}
            <div className="mb-8 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <span>Signal</span><span>/</span><span className="text-white font-bold">Briefs</span>
            </div>

            <div className="mb-12">
                <span className="font-mono text-cyan-400 text-xs uppercase tracking-[0.3em] mb-4 block">The Signal from the Noise</span>
                <h1 className="text-5xl font-bold text-white tracking-tight leading-none mb-12">
                    Executive<br />Briefings
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BriefCard number="001" title='The High Cost of "Maybe"' date="OCT 2025" slug="cost-of-maybe" />
                    <BriefCard number="002" title="Zombie Feature Audit" date="NOV 2025" slug="zombie-feature-audit" />
                    <BriefCard number="003" title="Variance Analysis: AI vs Humans" date="DEC 2025" slug="variance-analysis" />
                </div>
            </div>

            {/* AUEB Calculator Gateway */}
            <section className="mt-12 border-t border-white/5 pt-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-white/10 w-16"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">AI Unit Economics</h2>
                        <p className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest mt-2">// MARGIN FORENSICS</p>
                    </div>
                </div>

                <GatewayCard
                    title="AUEB Calculator™"
                    href="/tools/aueb"
                    color="cyan"
                    description="Launch Unit Economics Model"
                />
            </section>
        </div>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';

export const metadata: Metadata = {
    title: 'Engineering Efficiency Blueprint — From Measurement to Optimization | Richard Ewing',
    description: 'How elite engineering orgs measure and optimize output. APER benchmarking, DORA metrics, team topology, build vs buy economics, and budget optimization strategies.',
    keywords: ['engineering efficiency', 'APER benchmark', 'revenue per engineer', 'DORA metrics', 'engineering productivity', 'team topology', 'build vs buy', 'engineering budget optimization'],
    alternates: { canonical: 'https://www.richardewing.io/guides/engineering-efficiency' },
    openGraph: { title: 'Engineering Efficiency Blueprint', description: 'How companies like Stripe achieve $3.2M revenue per engineer. Complete framework.', url: 'https://www.richardewing.io/guides/engineering-efficiency', type: 'article' },
};

const sections = [
    {
        title: 'Measurement Foundations',
        description: 'The metrics that actually matter for engineering output',
        slugs: ['revenue-per-engineer', 'dora-metrics', 'feature-velocity', 'engineering-allocation', 'maintenance-load'],
        color: 'emerald',
    },
    {
        title: 'Team Economics',
        description: 'How team structure drives or destroys efficiency',
        slugs: ['conways-law', 'team-topology', 'cognitive-load', 'platform-engineering', 'developer-experience'],
        color: 'cyan',
    },
    {
        title: 'Build vs Buy',
        description: 'Decision frameworks for make-or-buy choices',
        slugs: ['build-vs-buy', 'total-cost-of-ownership', 'vendor-lock-in', 'api-economy', 'integration-debt'],
        color: 'amber',
    },
    {
        title: 'Budget Optimization',
        description: 'Getting more from your R&D investment',
        slugs: ['rd-capitalization', 'innovation-tax', 'engineering-roi', 'technical-debt-ratio', 'sprint-velocity'],
        color: 'violet',
    },
    {
        title: 'Scaling Patterns',
        description: 'Efficiency patterns for growth-stage organizations',
        slugs: ['microservices', 'monolith', 'event-driven-architecture', 'ci-cd', 'infrastructure-as-code'],
        color: 'rose',
    },
];

const colorMap: Record<string, string> = {
    rose: 'border-rose-500/30 bg-rose-500/5', amber: 'border-amber-500/30 bg-amber-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
};
const textColorMap: Record<string, string> = {
    rose: 'text-rose-400', amber: 'text-amber-400', cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400',
};

export default function EngineeringEfficiencyGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'Engineering Efficiency Blueprint — From Measurement to Optimization',
                description: 'How elite engineering orgs measure and optimize output.',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/engineering-efficiency',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-emerald-400 font-bold">Engineering Efficiency</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Engineering Efficiency{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Blueprint</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        How elite organizations achieve $3.2M revenue per engineer while others struggle at $200K. Covers APER benchmarking, DORA metrics, team topology, build vs buy economics, and budget optimization.
                    </p>
                    <p className="text-sm text-zinc-500 mb-12">35+ linked glossary terms · 40 min read · For CTOs, Engineering Directors</p>

                    <div className="space-y-8 mb-16">
                        {sections.map((section, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[section.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-2 ${textColorMap[section.color]}`}>{section.title}</h2>
                                <p className="text-zinc-400 text-sm mb-6">{section.description}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {section.slugs.map((slug) => {
                                        const term = glossaryTerms.find((t: { slug: string; title: string }) => t.slug === slug);
                                        return (
                                            <Link key={slug} href={`/glossary/${slug}`} className="block rounded-lg border border-white/10 bg-black/30 p-3 hover:border-white/30 transition-colors">
                                                <span className="text-sm text-white font-medium">{term?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Tools for Measuring Efficiency</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aper" className="block rounded-xl border border-emerald-500/20 p-6 hover:border-emerald-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">APER Calculator</h3>
                                <p className="text-sm text-zinc-400">Calculate your Adjusted Product Economic Return — revenue per engineer adjusted for debt.</p>
                            </Link>
                            <Link href="/tools/ev-se" className="block rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">EV-SE Calculator</h3>
                                <p className="text-sm text-zinc-400">Enterprise Value per Software Engineer — how much value each engineer creates.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Get Expert Help</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing advises engineering leaders on efficiency optimization. R&D Capital Audits identify where your investment is being wasted — and how to reclaim it.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:opacity-90 transition-opacity">Book an R&D Capital Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import PremiumGuideCTA from '@/app/components/PremiumGuideCTA';

export const metadata: Metadata = {
    title: 'SaaS Metrics Masterclass — From ARR to Engineering ROI | Richard Ewing',
    description: 'Bridge engineering metrics and SaaS financial metrics: Rule of 40, NRR improvement, CAC payback, engineering ROI, and board slides that connect sprint velocity to ARR growth.',
    keywords: ['SaaS metrics', 'Rule of 40', 'NRR', 'CAC payback', 'engineering ROI', 'SaaS engineering costs', 'magic number SaaS'],
    alternates: { canonical: 'https://www.richardewing.io/guides/saas-metrics' },
    openGraph: { title: 'SaaS Metrics Masterclass', description: 'Bridge engineering metrics and SaaS financials.', url: 'https://www.richardewing.io/guides/saas-metrics', type: 'article' },
};

const sections = [
    {
        title: 'SaaS Fundamentals',
        description: 'The metrics that define SaaS success and how engineering drives them',
        slugs: ['revenue-per-engineer', 'unit-economics', 'total-cost-of-ownership', 'engineering-roi', 'engineering-allocation'],
        color: 'cyan',
    },
    {
        title: 'Rule of 40 Decomposition',
        description: 'Where engineering costs show up in the Rule of 40',
        slugs: ['rd-capitalization', 'capex-vs-opex', 'innovation-tax', 'maintenance-load', 'technical-debt-ratio'],
        color: 'amber',
    },
    {
        title: 'Retention & Revenue',
        description: 'How engineering investment drives NRR and reduces churn',
        slugs: ['feature-velocity', 'technical-debt', 'ux-debt', 'product-debt-index', 'cost-of-delay'],
        color: 'emerald',
    },
    {
        title: 'Growth Efficiency',
        description: 'CAC payback, burn multiple, and engineering-driven growth',
        slugs: ['build-vs-buy', 'dora-metrics', 'ci-cd', 'sprint-velocity', 'developer-experience'],
        color: 'violet',
    },
    {
        title: 'Board Communication',
        description: 'Presenting engineering metrics to investors and boards',
        slugs: ['enterprise-value', 'scalability', 'platform-engineering', 'conways-law', 'team-topology'],
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

export default function SaaSMetricsGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'SaaS Metrics Masterclass — From ARR to Engineering ROI',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/saas-metrics',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-cyan-400 font-bold">SaaS Metrics</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20">🔒 Premium — $29</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        SaaS Metrics{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Masterclass</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        Connect engineering investment to business outcomes. Rule of 40 with engineering cost decomposition, NRR improvement through engineering investment, and board slides that connect sprint velocity to ARR.
                    </p>
                    <p className="text-sm text-zinc-500 mb-4">40+ linked glossary terms · 55 min read · For SaaS Leaders, CFOs, Board Members</p>
                    <PremiumGuideCTA guideSlug="saas-metrics" guideName="SaaS Metrics Masterclass" />

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
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">SaaS Engineering Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aper" className="block rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">APER Calculator</h3>
                                <p className="text-sm text-zinc-400">Revenue per engineer adjusted for product debt — your real engineering ROI.</p>
                            </Link>
                            <Link href="/tools/ev-se" className="block rounded-xl border border-violet-500/20 p-6 hover:border-violet-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">EV-SE Calculator</h3>
                                <p className="text-sm text-zinc-400">Compare engineering value creation against SaaS industry benchmarks.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">SaaS Engineering Economics Advisory</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing helps SaaS companies connect engineering investment to financial outcomes. Board-ready analysis that shows exactly how engineering drives ARR, NRR, and exit multiples.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold hover:opacity-90 transition-opacity">Book SaaS Advisory →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

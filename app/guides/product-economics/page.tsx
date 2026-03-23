import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';

export const metadata: Metadata = {
    title: 'Product Economics Playbook — Unit Economics, Feature P&L & Kill Switch | Richard Ewing',
    description: 'Every feature has a P&L. Learn per-feature profitability, zombie feature identification, Kill Switch Protocol, and WSJF prioritization accounting for cost of delay.',
    keywords: ['product economics', 'feature P&L', 'unit economics', 'kill switch protocol', 'zombie features', 'WSJF', 'cost of delay', 'product management economics'],
    alternates: { canonical: 'https://www.richardewing.io/guides/product-economics' },
    openGraph: { title: 'Product Economics Playbook', description: 'Unit economics, feature P&L, and the Kill Switch Protocol.', url: 'https://www.richardewing.io/guides/product-economics', type: 'article' },
};

const sections = [
    {
        title: 'Feature-Level Economics',
        description: 'Every feature has a P&L — learn to calculate it',
        slugs: ['unit-economics', 'feature-velocity', 'cost-of-delay', 'revenue-per-engineer', 'engineering-allocation'],
        color: 'amber',
    },
    {
        title: 'Zombie Features',
        description: 'The features destroying your margins silently',
        slugs: ['maintenance-load', 'technical-debt', 'sunset-protocol', 'kill-switch-protocol', 'ux-debt'],
        color: 'rose',
    },
    {
        title: 'Prioritization Frameworks',
        description: 'Data-driven prioritization for product leaders',
        slugs: ['cost-of-delay', 'innovation-tax', 'build-vs-buy', 'rd-capitalization', 'engineering-roi'],
        color: 'cyan',
    },
    {
        title: 'AI Feature Economics',
        description: 'When your AI feature costs more than it earns',
        slugs: ['ai-cogs', 'ai-hallucination', 'ai-technical-debt', 'model-drift', 'orchestration-debt'],
        color: 'violet',
    },
    {
        title: 'Product Metrics',
        description: 'Metrics that connect product to revenue',
        slugs: ['product-debt-index', 'dora-metrics', 'sprint-velocity', 'total-cost-of-ownership', 'feature-velocity'],
        color: 'emerald',
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

export default function ProductEconomicsGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'Product Economics Playbook — Unit Economics, Feature P&L & Kill Switch Protocol',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/product-economics',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-amber-400 font-bold">Product Economics</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Product Economics{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Playbook</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        Every feature has a P&L. Most PMs don&apos;t know theirs. Learn to calculate per-feature profitability, identify zombie features, run the Kill Switch Protocol, and apply WSJF prioritization.
                    </p>
                    <p className="text-sm text-zinc-500 mb-12">40+ linked glossary terms · 35 min read · For Product Managers, Product Leaders</p>

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
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Tools for Product Economics</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aueb" className="block rounded-xl border border-amber-500/20 p-6 hover:border-amber-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">AUEB Calculator</h3>
                                <p className="text-sm text-zinc-400">AI Unit Economics Benchmark — is your AI feature profitable or a margin drain?</p>
                            </Link>
                            <Link href="/tools/aper" className="block rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">APER Calculator</h3>
                                <p className="text-sm text-zinc-400">Revenue per engineer adjusted for product debt — the true cost of your team.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Need Product Economics Advice?</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing helps product leaders quantify ROI, identify zombie features, and build business cases that get funding. As a Product Economist, he bridges the gap between engineering and finance.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold hover:opacity-90 transition-opacity">Book an Advisory Session →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

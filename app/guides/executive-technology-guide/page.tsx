import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
    title: 'The Executive\'s Guide to Technology Investment | Richard Ewing',
    description: 'What every CEO & CFO should know about R&D: capitalizability, Innovation Tax impact on EBITDA, technology capital as balance sheet asset, and investment thresholds.',
    keywords: ['executive technology guide', 'R&D investment', 'technology ROI', 'EBITDA impact', 'R&D capitalization', 'CTO board reporting', 'technology investment'],
    alternates: { canonical: 'https://www.richardewing.io/guides/executive-technology-guide' },
    openGraph: { title: 'The Executive\'s Guide to Technology Investment', description: 'Translate engineering investment into financial terms. For CEOs, CFOs, and board members.', url: 'https://www.richardewing.io/guides/executive-technology-guide', type: 'article' },
};

const sections = [
    {
        title: 'R&D as Capital',
        description: 'Understanding engineering investment as a capital asset',
        slugs: ['rd-capitalization', 'engineering-roi', 'total-cost-of-ownership', 'capex-vs-opex', 'depreciation'],
        color: 'violet',
    },
    {
        title: 'The Innovation Tax',
        description: 'How technical debt silently drains EBITDA',
        slugs: ['innovation-tax', 'technical-debt', 'maintenance-load', 'technical-insolvency-date', 'product-debt-index'],
        color: 'amber',
    },
    {
        title: 'Board-Ready Metrics',
        description: 'Metrics that translate engineering to the boardroom',
        slugs: ['revenue-per-engineer', 'dora-metrics', 'feature-velocity', 'engineering-allocation', 'cost-of-delay'],
        color: 'cyan',
    },
    {
        title: 'Investment Decisions',
        description: 'When to increase, decrease, or redirect engineering spend',
        slugs: ['build-vs-buy', 'technical-debt-ratio', 'refactoring', 'modernization', 'sunset-protocol'],
        color: 'emerald',
    },
    {
        title: 'Technology Valuation',
        description: 'How engineering assets affect company valuation',
        slugs: ['enterprise-value', 'due-diligence', 'ip-valuation', 'vendor-lock-in', 'scalability'],
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

export default function ExecutiveTechnologyGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'The Executive\'s Guide to Technology Investment',
                description: 'What every CEO & CFO should know about R&D investment.',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/executive-technology-guide',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-violet-400 font-bold">Executive Technology Guide</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        The Executive&apos;s Guide to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Technology Investment</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        Your engineering team speaks a foreign language. This guide translates technology investment into financial terms: R&D capitalizability, Innovation Tax impact on EBITDA, and when to increase engineering investment.
                    </p>
                    <p className="text-sm text-zinc-500 mb-12">25+ linked glossary terms · 30 min read · For CEOs, CFOs, Board Members</p>

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
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Tools for Executives</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/ev-se" className="block rounded-xl border border-violet-500/20 p-6 hover:border-violet-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">EV-SE Calculator</h3>
                                <p className="text-sm text-zinc-400">Enterprise Value per Software Engineer — the metric boards should be tracking.</p>
                            </Link>
                            <Link href="/tools/pdi" className="block rounded-xl border border-rose-500/20 p-6 hover:border-rose-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">PDI Calculator</h3>
                                <p className="text-sm text-zinc-400">Product Debt Index — quantify your technical debt in dollars and quarters.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Need a Board-Ready Assessment?</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing provides board-level technical oversight and delivers R&D Capital Audit reports in language your board and investors understand.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-bold hover:opacity-90 transition-opacity">Book a Board-Ready Audit →</Link>
                    </div>
                <RelatedContent currentSlug="executive-technology-guide" type="guide" count={3} />
                    </div>
                </div>
            </main>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
    title: 'The Engineering Leadership Handbook — From Team Lead to VP | Richard Ewing',
    description: 'The complete guide for engineering leaders: hiring economics, retention cost, team topology, DORA implementation, career ladders, stakeholder management, and the IC-to-leadership transition.',
    keywords: ['engineering leadership', 'CTO guide', 'engineering manager', 'VP engineering', 'hiring engineers', 'engineering career ladder', 'team topology', 'DORA metrics'],
    alternates: { canonical: 'https://www.richardewing.io/guides/engineering-leadership-handbook' },
    openGraph: { title: 'The Engineering Leadership Handbook', description: 'Every framework an engineering leader needs, from team lead to VP.', url: 'https://www.richardewing.io/guides/engineering-leadership-handbook', type: 'article' },
};

const sections = [
    {
        title: 'Hiring & Retention Economics',
        description: 'The true cost of hiring, mis-hires, and turnover',
        slugs: ['revenue-per-engineer', 'engineering-allocation', 'cognitive-load', 'developer-experience', 'total-cost-of-ownership'],
        color: 'cyan',
    },
    {
        title: 'Team Design',
        description: 'Structure teams for maximum throughput',
        slugs: ['conways-law', 'team-topology', 'platform-engineering', 'microservices', 'monolith'],
        color: 'emerald',
    },
    {
        title: 'Delivery Excellence',
        description: 'Measure and improve delivery performance',
        slugs: ['dora-metrics', 'ci-cd', 'sprint-velocity', 'feature-velocity', 'shift-left-testing'],
        color: 'amber',
    },
    {
        title: 'Technical Strategy',
        description: 'Major technical decisions that define your org',
        slugs: ['build-vs-buy', 'technical-debt', 'refactoring', 'modernization', 'event-driven-architecture'],
        color: 'violet',
    },
    {
        title: 'Stakeholder Communication',
        description: 'Translate engineering into business language',
        slugs: ['innovation-tax', 'rd-capitalization', 'engineering-roi', 'product-debt-index', 'cost-of-delay'],
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

export default function EngineeringLeadershipGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'The Engineering Leadership Handbook',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/engineering-leadership-handbook',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-cyan-400 font-bold">Engineering Leadership</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        The Engineering{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Leadership Handbook</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        From Team Lead to VP — every framework you need. Hiring economics, team topology, DORA implementation, stakeholder management, and the IC-to-leadership transition.
                    </p>
                    <p className="text-sm text-zinc-500 mb-12">45+ linked glossary terms · 50 min read · For Engineering Managers, Directors, VPs</p>

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
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Leadership Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aper" className="block rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">APER Calculator</h3>
                                <p className="text-sm text-zinc-400">Benchmark your team&apos;s economic output against industry leaders.</p>
                            </Link>
                            <Link href="/tools/audit-interview" className="block rounded-xl border border-emerald-500/20 p-6 hover:border-emerald-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Audit Interview</h3>
                                <p className="text-sm text-zinc-400">AI-powered technical assessment for hiring engineering leaders.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Level Up Your Leadership</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing works with engineering leaders at every level — from first-time managers to VPs building 100+ person orgs. Advisory sessions help you navigate transitions and build high-performing teams.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity">Book an Advisory Session →</Link>
                    </div>
                <RelatedContent currentSlug="engineering-leadership-handbook" type="guide" count={3} />
                    </div>
                </div>
            </main>
    );
}

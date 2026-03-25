import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
    title: 'Hybrid AI Architectures & Cloud 3.0 | Richard Ewing',
    description: 'By 2026, over 40% of leading enterprises will adopt hybrid AI infrastructure. How to balance on-premise compute with sovereign cloud data constraints and global edge delivery.',
    keywords: ["Sovereign Cloud","Edge AI","Cost of Bandwidth","On-Prem vs Cloud AI","Infrastructure Abstraction"],
    alternates: { canonical: 'https://www.richardewing.io/guides/hybrid-ai-infrastructure' },
    openGraph: { title: 'Hybrid AI Architectures & Cloud 3.0', description: 'By 2026, over 40% of leading enterprises will adopt hybrid AI infrastructure. How to balance on-premise compute with sovereign cloud data constraints and global edge delivery.', url: 'https://www.richardewing.io/guides/hybrid-ai-infrastructure', type: 'article' },
};

const sections = [
    {
        title: 'Section 1',
        description: 'Sovereign Cloud Focus Area',
        slugs: ['sovereign-cloud', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'rose',
    },
    {
        title: 'Section 2',
        description: 'Edge AI Focus Area',
        slugs: ['edge-ai', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'amber',
    },
    {
        title: 'Section 3',
        description: 'Cost of Bandwidth Focus Area',
        slugs: ['cost-of-bandwidth', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'cyan',
    },
    {
        title: 'Section 4',
        description: 'On-Prem vs Cloud AI Focus Area',
        slugs: ['on-prem-vs-cloud-ai', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'violet',
    },
    {
        title: 'Section 5',
        description: 'Infrastructure Abstraction Focus Area',
        slugs: ['infrastructure-abstraction', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'emerald',
    },
];

const colorMap: Record<string, string> = {
    rose: 'border-rose-500/30 bg-rose-500/5',
    amber: 'border-amber-500/30 bg-amber-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    violet: 'border-violet-500/30 bg-violet-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
};
const textColorMap: Record<string, string> = {
    rose: 'text-rose-400', amber: 'text-amber-400', cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400',
};

export default function HybridAiInfrastructureGuidePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-amber-400 font-bold">Hybrid AI Architectures & Cloud 3.0</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Hybrid AI Architectures & Cloud 3.0{' '}
                        <span className="block mt-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-white">Sovereign Cloud, Edge Latency, and Workload Distribution</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">By 2026, over 40% of leading enterprises will adopt hybrid AI infrastructure. How to balance on-premise compute with sovereign cloud data constraints and global edge delivery.</p>
                    <p className="text-sm text-zinc-500 mb-8">30+ terms linked</p>

                    

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
                                                <span className="text-sm text-white font-medium">{term?.title || slug}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                <RelatedContent currentSlug="hybrid-ai-infrastructure" type="guide" count={3} />
                    </div>
                </div>
            </main>
    );
}

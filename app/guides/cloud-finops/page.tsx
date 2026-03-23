import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';

export const metadata: Metadata = {
    title: 'Cloud FinOps & Infrastructure Economics — Stop Wasting 35% of Cloud Spend | Richard Ewing',
    description: 'The definitive cloud cost optimization guide: right-sizing, reserved instances, spot architecture, FinOps team structure, cost allocation, and the 12-week savings program.',
    keywords: ['cloud FinOps', 'cloud cost optimization', 'right-sizing', 'reserved instances', 'spot instances', 'FinOps', 'cloud economics', 'infrastructure costs'],
    alternates: { canonical: 'https://www.richardewing.io/guides/cloud-finops' },
    openGraph: { title: 'Cloud FinOps & Infrastructure Economics', description: 'Stop wasting 35% of your cloud spend. Complete optimization guide.', url: 'https://www.richardewing.io/guides/cloud-finops', type: 'article' },
};

const sections = [
    {
        title: 'Cloud Cost Anatomy',
        description: 'Understanding where your cloud dollars go',
        slugs: ['total-cost-of-ownership', 'capex-vs-opex', 'infrastructure-debt', 'engineering-allocation', 'maintenance-load'],
        color: 'violet',
    },
    {
        title: 'Right-Sizing & Optimization',
        description: 'The techniques that save 30-40% on infrastructure',
        slugs: ['scalability', 'infrastructure-as-code', 'microservices', 'platform-engineering', 'developer-experience'],
        color: 'emerald',
    },
    {
        title: 'Instance Strategy',
        description: 'Reserved, spot, on-demand — the economics of commitment',
        slugs: ['build-vs-buy', 'vendor-lock-in', 'total-cost-of-ownership', 'rd-capitalization', 'engineering-roi'],
        color: 'amber',
    },
    {
        title: 'FinOps Practice',
        description: 'Building a FinOps function that sustains savings',
        slugs: ['conways-law', 'team-topology', 'innovation-tax', 'cost-of-delay', 'dora-metrics'],
        color: 'cyan',
    },
    {
        title: 'AI Infrastructure Costs',
        description: 'GPU economics, inference costs, and model hosting',
        slugs: ['ai-cogs', 'ai-technical-debt', 'model-drift', 'orchestration-debt', 'unit-economics'],
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

export default function CloudFinOpsGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'Cloud FinOps & Infrastructure Economics — Stop Wasting 35% of Your Cloud Spend',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/cloud-finops',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-violet-400 font-bold">Cloud FinOps</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20">🔒 Premium — $29</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Cloud FinOps &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-emerald-400">Infrastructure Economics</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        Stop wasting 35% of your cloud spend. Right-sizing methodology, reserved instance strategy, spot architecture, FinOps team structure, and the 12-week cloud cost reduction program.
                    </p>
                    <p className="text-sm text-zinc-500 mb-4">30+ linked glossary terms · 50 min read · For DevOps, Platform Teams, CFOs</p>
                    <a href="/api/buy/guide_cloud_finops" className="inline-block mb-12 px-8 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-emerald-500 text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
                        Unlock Full Guide — $29
                    </a>

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
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Infrastructure Economics Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aueb" className="block rounded-xl border border-violet-500/20 p-6 hover:border-violet-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">AUEB Calculator</h3>
                                <p className="text-sm text-zinc-400">AI Unit Economics Benchmark — includes infrastructure cost modeling.</p>
                            </Link>
                            <Link href="/tools/pdi" className="block rounded-xl border border-rose-500/20 p-6 hover:border-rose-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">PDI Calculator</h3>
                                <p className="text-sm text-zinc-400">Infrastructure debt shows up in your Product Debt Index — measure it here.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Cloud Cost Governance Advisory</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing helps organizations build sustainable cloud cost practices. The 12-week program typically saves 30-40% on cloud spend while maintaining performance SLAs.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity">Book Cloud Advisory →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

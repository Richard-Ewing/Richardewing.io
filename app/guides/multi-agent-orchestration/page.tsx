import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
    title: 'The Guide to Multi-Agent Orchestration | Richard Ewing',
    description: 'The definitive playbook for building and managing multi-agent systems (MAS). How to orchestrate agent swarms, manage shared resources, and implement Agentic Operating Systems (AOS) for enterprise architecture.',
    keywords: ["Orchestration vs Prompting","Agentic OS","Swarm Architecture","Resource Allocation","Multi-Agent State Management","Failure Triage"],
    alternates: { canonical: 'https://www.richardewing.io/guides/multi-agent-orchestration' },
    openGraph: { title: 'The Guide to Multi-Agent Orchestration', description: 'The definitive playbook for building and managing multi-agent systems (MAS). How to orchestrate agent swarms, manage shared resources, and implement Agentic Operating Systems (AOS) for enterprise architecture.', url: 'https://www.richardewing.io/guides/multi-agent-orchestration', type: 'article' },
};

const sections = [
    {
        title: 'Section 1',
        description: 'Orchestration vs Prompting Focus Area',
        slugs: ['orchestration-vs-prompting', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'rose',
    },
    {
        title: 'Section 2',
        description: 'Agentic OS Focus Area',
        slugs: ['agentic-os', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'amber',
    },
    {
        title: 'Section 3',
        description: 'Swarm Architecture Focus Area',
        slugs: ['swarm-architecture', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'cyan',
    },
    {
        title: 'Section 4',
        description: 'Resource Allocation Focus Area',
        slugs: ['resource-allocation', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: 'violet',
    },
    {
        title: 'Section 5',
        description: 'Multi-Agent State Management Focus Area',
        slugs: ['multi-agent-state-management', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
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

export default function MultiAgentOrchestrationGuidePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-violet-400 font-bold">The Guide to Multi-Agent Orchestration</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        The Guide to Multi-Agent Orchestration{' '}
                        <span className="block mt-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-white">Moving Beyond Prompt Engineering to Autonomous Systems</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">The definitive playbook for building and managing multi-agent systems (MAS). How to orchestrate agent swarms, manage shared resources, and implement Agentic Operating Systems (AOS) for enterprise architecture.</p>
                    <p className="text-sm text-zinc-500 mb-8">40+ terms linked</p>

                    

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
                <RelatedContent currentSlug="multi-agent-orchestration" type="guide" count={3} />
                    </div>
                </div>
            </main>
    );
}

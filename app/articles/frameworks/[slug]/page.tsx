import { frameworks } from '@/lib/data';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { Metadata } from 'next';
import FrameworkDefinition from '@/components/FrameworkDefinition';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const framework = frameworks.find((f) => f.slug === slug);
    if (!framework) return { title: 'Framework Not Found' };

    const searchTitle: Record<string, string> = {
        'software-phase-transition': 'The Software Phase Transition: Managing Product When Code Costs Near Zero',
        'technical-insolvency-date': 'Technical Insolvency Date: When Technical Debt Kills Innovation',
        'innovation-tax': 'Innovation Tax: Hidden Maintenance Disguised as R&D Investment',
        'cost-of-predictivity': 'Cost of Predictivity: The True Cost of AI Accuracy',
        'audit-interview': 'Audit Interview: AI-Age Engineering Hiring Assessment',
        'kill-switch-protocol': 'Kill Switch Protocol: How to Deprecate Zombie Features',
        'feature-bloat-calculus': 'Feature Bloat Calculus: When Features Cost More Than They Earn',
        'return-on-ai-investment': 'Return on AI Investment (ROAI): Framework for AI Unit Economics',
        'vibe-coding-debt': 'Vibe Coding Debt: Architectural Liabilities of AI Copilots',
        'shadow-agents': 'Shadow Agents: Autonomous AI Governance & Security Framework',
        'agentic-drift': 'Agentic Drift (Logic Drift): Mitigating Recursive Model Failure',
        'dspm': 'Data Security Posture Management (DSPM): Protecting AI Context Layers',
        'sovereign-ai': 'Sovereign AI: On-Premise Enterprise LLM Architecture',
        'graph-rag': 'Graph RAG: Knowledge Graphs for Enterprise Retrieval',
        'slm': 'Small Language Models (SLM): Unit Economic Right-Sizing',
        'the-turing-tax': 'The Turing Tax: The Margin Cost of Frontier Models',
        'synthetic-cogs': 'Synthetic COGS: AI Compute Unit Economics & Margin Engineering',
    };

    const titleStr = searchTitle[slug] || framework.name;

    return {
        title: `${titleStr} | Richard Ewing Framework`,
        description: framework.definition.replace(/\n/g, ' ').slice(0, 155).trim() + '...',
        keywords: [
            framework.name.toLowerCase(), `${framework.name.toLowerCase()} framework`,
            `what is ${framework.name.toLowerCase()}`, 'Richard Ewing', 'AI Economist',
            'technical debt', 'engineering economics', 'R&D capital allocation',
            'product management framework', 'engineering leadership',
        ],
        alternates: { canonical: `https://www.richardewing.io/articles/frameworks/${framework.slug}` },
        openGraph: {
            title: `${framework.name} | Richard Ewing`,
            description: framework.definition.replace(/\n/g, ' ').slice(0, 155),
            url: `https://www.richardewing.io/articles/frameworks/${framework.slug}`,
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${framework.name} | Richard Ewing`,
            description: framework.definition.replace(/\n/g, ' ').slice(0, 155),
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        },
    };
}

export async function generateStaticParams() {
    return frameworks.map((framework) => ({ slug: framework.slug }));
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const framework = frameworks.find((f) => f.slug === slug);

    if (!framework) return <div>Framework not found</div>;

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: framework.name,
        description: framework.definition.replace(/\n/g, ' ').slice(0, 155),
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Person', name: 'Richard Ewing' },
        url: `https://www.richardewing.io/articles/frameworks/${slug}`,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            { '@type': 'Question', name: `What is ${framework.name}?`, acceptedAnswer: { '@type': 'Answer', text: framework.definition.replace(/\n/g, ' ').slice(0, 500) }},
            { '@type': 'Question', name: `Why does ${framework.name} matter?`, acceptedAnswer: { '@type': 'Answer', text: framework.whyItMatters.replace(/\n/g, ' ').slice(0, 500) }},
        ],
    };

    const relatedPublications = RESEARCH_CORPUS.filter(art => {
        const slugNorm = slug.toLowerCase();
        if (art.relatedFrameworkSlugs?.includes(slugNorm)) return true;
        if (art.title.toLowerCase().includes(framework.name.toLowerCase()) || 
            art.thesis.toLowerCase().includes(framework.name.toLowerCase())) return true;
        if (slugNorm.includes('tax') && art.title.toLowerCase().includes('tax')) return true;
        if (slugNorm.includes('insolvency') && art.title.toLowerCase().includes('insolvency')) return true;
        if (slugNorm.includes('debt') && art.title.toLowerCase().includes('debt')) return true;
        if (slugNorm.includes('agent') && (art.title.toLowerCase().includes('agent') || art.domain === 'AI Governance')) return true;
        if (slugNorm.includes('cogs') || slugNorm.includes('margin') || slugNorm.includes('economics')) {
            return art.domain === 'AI Economics' || art.domain === 'Software Economics';
        }
        return false;
    }).slice(0, 4);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <FrameworkDefinition framework={framework} />

            {/* Foundational Research & Publications (Step 1 of Sovereign Asset Engine) */}
            {relatedPublications.length > 0 && (
                <div className="page-container max-w-4xl mx-auto mb-16">
                    <div className="space-y-6 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div>
                                <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-wider block mb-1">
                                    Step 1 &bull; Sovereign Asset Engine
                                </span>
                                <h2 className="text-2xl font-bold font-grotesk text-zinc-950">
                                    Foundational Research &amp; Publications
                                </h2>
                            </div>
                            <Link
                                href="/research/publications"
                                className="text-xs font-mono font-bold text-cyan-900 hover:text-cyan-700 flex items-center gap-1 uppercase tracking-wider"
                            >
                                Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            {relatedPublications.map((art) => (
                                <a
                                    key={art.id}
                                    href={art.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 hover:border-cyan-400 hover:bg-cyan-50/50 transition flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-2">
                                            <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-950 uppercase">{art.publisher}</span>
                                            <span className="text-zinc-500">{art.date}</span>
                                        </div>
                                        <h3 className="text-sm font-bold text-zinc-950 group-hover:text-cyan-900 transition-colors mb-2 leading-snug">
                                            {art.title}
                                        </h3>
                                        <p className="text-xs text-zinc-700 leading-relaxed line-clamp-2">
                                            {art.thesis}
                                        </p>
                                    </div>
                                    <div className="pt-3 mt-3 border-t border-zinc-200 text-[11px] font-mono text-cyan-900 font-bold flex items-center gap-1">
                                        Read Published Work &rarr;
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="page-container max-w-4xl mx-auto">
                <AdvisoryCTA variant={slug === 'return-on-ai-investment' ? 'tool-result' : 'educational'} termTitle={framework.name} />
            </div>
        </>
    );
}

import { frameworks } from '@/lib/data';
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

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <FrameworkDefinition framework={framework} />
            <div className="page-container max-w-4xl mx-auto">
                <AdvisoryCTA variant={slug === 'return-on-ai-investment' ? 'tool-result' : 'educational'} termTitle={framework.name} />
            </div>
        </>
    );
}

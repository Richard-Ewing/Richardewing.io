import { frameworks } from '@/lib/data';
import Link from 'next/link';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { Metadata } from 'next';
import FrameworkDefinition from '@/components/FrameworkDefinition';

import { clampSeoTitle, formatSeoDescription } from '@/app/lib/seo-metadata';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const framework = frameworks.find((f) => f.slug === slug);
    if (!framework) return { title: 'Framework Not Found' };

    const searchTitle: Record<string, string> = {
        'software-phase-transition': 'The Software Phase Transition',
        'technical-insolvency-date': 'Technical Insolvency Date (TID) Formula',
        'innovation-tax': 'The Innovation Tax Framework',
        'cost-of-predictivity': 'Cost of Predictivity Framework',
        'audit-interview': 'The Audit Interview Protocol',
        'kill-switch-protocol': 'The Kill Switch Protocol',
        'feature-bloat-calculus': 'Feature Bloat Calculus',
        'vibe-coding-debt': 'Vibe Coding Debt: Risk & Audit Guide',
        'shadow-agents': 'Shadow Agents Governance & Risk Audit',
        'agentic-drift': 'Agentic Drift & Logic Drift',
        'return-on-ai-investment': 'Return on AI Investment (ROAI) Formula',
        'agentic-governance-blueprint': 'Agentic AI Governance Blueprint',
        'deterministic-execution-harness': 'Deterministic Execution Harness',
        'shadow-ai-remediation': 'Shadow AI Remediation Framework',
        'unit-economics-of-ai': 'Unit Economics of AI Framework',
        'dspm': 'AI Data Security Posture (DSPM)',
        'sovereign-ai': 'Sovereign AI Architecture',
        'graph-rag': 'Enterprise Graph RAG Architecture',
        'slm': 'Small Language Models (SLM)',
        'the-turing-tax': 'The Turing Tax Framework',
        'synthetic-cogs': 'Synthetic COGS Framework',
        'power-user-liability': 'Power User Liability in AI SaaS',
        'deterministic-control-layer': 'Deterministic Control Layer',
        'compute-reseller-trap': 'The Compute Reseller Trap',
        'frontier-model-economics': 'Frontier Model Economics',
        'persistence-vs-authority': 'Persistence vs. Authority in AI',
        'supervisory-review-queue': 'The Supervisory Review Queue',
        'the-transaction-that-succeeds': 'The Transaction That Succeeds',
        'section-174-capitalization': 'Section 174 AI Tax Capitalization',
        'hybrid-cloud-local-runtime': 'Hybrid Cloud-Local AI Runtime',
        'sovereign-dual-chamber-governance': 'Dual-Chamber AI Governance',
        'ai-architecture-decision-records': 'AI Architecture Decision Records',
    };

    const searchDescription: Record<string, string> = {
        'software-phase-transition': 'Manage engineering and product capital as AI drives code creation costs near zero. Prevent feature sprawl and margin collapse with Richard Ewing.',
        'technical-insolvency-date': 'Calculate the exact future quarter when technical debt maintenance consumes 100% of engineering capacity and halts new feature delivery.',
        'innovation-tax': 'Audit the hidden maintenance expenses disguised as R&D feature investment. Expose how agile sprint bundling inflates engineering velocity.',
        'cost-of-predictivity': 'Measure how AI compute expenses scale exponentially with accuracy requirements. Identify your AI margin collapse point before scaling users.',
        'audit-interview': 'Assess engineering candidates on AI code verification, security bug prioritization, and ship judgment instead of whiteboard syntax recall.',
        'kill-switch-protocol': 'Identify and deprecate zombie features that drain engineering maintenance hours while generating zero attributable revenue or user adoption.',
        'feature-bloat-calculus': 'Quantify direct maintenance, opportunity cost, and quadratic complexity tax to expose software features operating at negative financial carry.',
        'vibe-coding-debt': 'Quantify the security exposure, incident drag, and maintenance carry created when teams ship unverified Cursor or Claude Code output to customers.',
        'shadow-agents': 'Detect and govern unsanctioned autonomous AI workflows operating across corporate APIs, vector databases, and financial systems without oversight.',
        'agentic-drift': 'Contain compounding reasoning errors in multi-step autonomous AI agents using deterministic state machines and cryptographic schema checkpoints.',
        'return-on-ai-investment': 'Calculate Return on AI Investment (ROAI) using net gross margin delta, token inference COGS, and verified labor savings instead of pilot hype.',
        'agentic-governance-blueprint': 'Enforce cryptographic signing limits, tool allowlists, and deterministic execution gates across autonomous enterprise AI agent workflows.',
        'deterministic-execution-harness': 'Wrap probabilistic LLM calls inside compiler verification gates, schema validators, and budget kill-switches before touching production.',
        'shadow-ai-remediation': 'Discover unauthorized employee LLM usage, quarantine unvetted MCP servers, and migrate shadow workflows into governed enterprise gateways.',
        'unit-economics-of-ai': 'Model token inference, vector storage, retry cascades, and human review drag per user query to protect B2B SaaS gross margin floors.',
        'dspm': 'Restrict autonomous AI agent context windows and prevent unstructured corporate data exfiltration across multi-cloud vector storage layers.',
        'sovereign-ai': 'Evaluate private bare-metal LLM clusters against commercial cloud APIs to enforce strict data residency, regulatory compliance, and cost control.',
        'graph-rag': 'Combine ontological knowledge graphs with vector embeddings to cut LLM hallucination rates and lower compute costs on complex enterprise queries.',
        'slm': 'Route narrow classification and extraction tasks to distilled Small Language Models to cut AI inference spend and protect SaaS gross margins.',
        'the-turing-tax': 'Eliminate gross margin compression caused by routing simple deterministic tasks through expensive frontier AI models instead of local routers.',
        'synthetic-cogs': 'Account for embeddings, vector retrieval, and token inference as direct variable Cost of Goods Sold on every individual AI user transaction.',
        'power-user-liability': 'Protect flat-rate AI SaaS subscriptions from margin collapse when heavy power users consume more monthly inference compute than they pay for.',
        'deterministic-control-layer': 'Place semantic caching, intent routing, and policy allowlists ahead of probabilistic LLMs to cap token spend and block unauthorized actions.',
        'compute-reseller-trap': 'Escape thin AI wrapper economics by building proprietary data pipelines, deterministic control layers, and multi-system workflow integrations.',
        'frontier-model-economics': 'Balance closed frontier APIs against private open-weight clusters by modeling task ambiguity, multi-turn token compounding, and hosting floors.',
        'persistence-vs-authority': 'Separate how long an unattended AI agent runs from what production records, ledgers, and external systems it has permission to modify.',
        'supervisory-review-queue': 'Prevent senior engineers from drowning in AI code review fatigue by enforcing read-only triggers, narrow scopes, and compiler verification gates.',
        'the-transaction-that-succeeds': 'Stop autonomous AI agents from executing technically clean transactions that violate corporate procurement policies and financial signing limits.',
        'section-174-capitalization': 'Separate maintenance OpEx from amortizable R&D in AI-accelerated sprints to protect corporate cash flow from IRS Section 174 tax penalties.',
        'hybrid-cloud-local-runtime': 'Split developer agent workloads between zero-cost local LiteRT models and cloud frontier reasoning to cut token bills by over eighty percent.',
        'sovereign-dual-chamber-governance': 'Separate board-level strategic invariants from automated sub-50ms production release gates to ship enterprise AI systems without blind spots.',
        'ai-architecture-decision-records': 'Generate structured five-heading Architecture Decision Records directly from git diffs and pre-commit hooks to prevent agentic monorepo drift.',
    };

    const baseTitle = clampSeoTitle(searchTitle[slug] || framework.name, 42);
    const descStr = formatSeoDescription(
        searchDescription[slug] || `Examine the ${framework.name} framework by Richard Ewing for enterprise engineering economics, capital allocation, and AI systems governance.`
    );
    const ogUrl = `https://www.richardewing.io/api/og?title=${encodeURIComponent(framework.name)}&category=Proprietary%20Framework`;

    return {
        title: baseTitle,
        description: descStr,
        keywords: [
            framework.name.toLowerCase(), `${framework.name.toLowerCase()} framework`,
            `what is ${framework.name.toLowerCase()}`, 'Richard Ewing', 'AI Economist',
            'technical debt', 'engineering economics', 'R&D capital allocation',
            'product management framework', 'engineering leadership',
        ],
        alternates: { canonical: `https://www.richardewing.io/articles/frameworks/${framework.slug}` },
        openGraph: {
            title: `${baseTitle} | Richard Ewing`,
            description: descStr,
            url: `https://www.richardewing.io/articles/frameworks/${framework.slug}`,
            type: 'article',
            images: [{ url: ogUrl, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${baseTitle} | Richard Ewing`,
            description: descStr,
            images: [ogUrl],
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
        description: `Examine the ${framework.name} framework by Richard Ewing for enterprise engineering economics, capital allocation, and AI systems governance.`,
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/about' },
        publisher: { '@type': 'Person', name: 'Richard Ewing' },
        url: `https://www.richardewing.io/articles/frameworks/${slug}`,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            { '@type': 'Question', name: `What is ${framework.name}?`, acceptedAnswer: { '@type': 'Answer', text: framework.definition.split('\n\n').slice(0, 2).join(' ').replace(/\n/g, ' ').trim() }},
            { '@type': 'Question', name: `Why does ${framework.name} matter?`, acceptedAnswer: { '@type': 'Answer', text: framework.whyItMatters.split('\n\n').slice(0, 2).join(' ').replace(/\n/g, ' ').trim() }},
        ],
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Articles', item: 'https://www.richardewing.io/articles' },
            { '@type': 'ListItem', position: 3, name: 'Frameworks', item: 'https://www.richardewing.io/doctrine' },
            { '@type': 'ListItem', position: 4, name: framework.name, item: `https://www.richardewing.io/articles/frameworks/${slug}` },
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <FrameworkDefinition framework={framework} />

            {/* Foundational Research & Publications (Step 1 of Sovereign Asset Engine) */}
            {relatedPublications.length > 0 && (
                <div className="max-w-4xl mx-auto px-6 mb-16">
                    <div className="space-y-6 bg-white border border-[var(--line,rgba(36,51,43,0.16))] rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-[var(--line,rgba(36,51,43,0.12))]">
                            <div>
                                <span className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-wider block mb-1">
                                    Step 1 &bull; Sovereign Asset Engine
                                </span>
                                <h2 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)]">
                                    Foundational Research &amp; Publications
                                </h2>
                            </div>
                            <Link
                                href="/research/publications"
                                className="text-xs font-mono font-bold text-[var(--forest,#29473b)] hover:text-[var(--gold,#b77a35)] flex items-center gap-1 uppercase tracking-wider transition-colors"
                            >
                                Full Corpus ({RESEARCH_CORPUS.length} Works) ↗
                            </Link>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            {relatedPublications.map((art) => (
                                <a
                                    key={art.id}
                                    href={art.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] rounded-xl p-5 hover:border-[var(--forest,#29473b)] transition flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-2">
                                            <span className="px-2 py-0.5 rounded bg-[var(--paper,#f4f1e9)] text-[var(--forest,#29473b)] uppercase border border-[var(--line,rgba(36,51,43,0.1))]">
                                                {art.publisher}
                                            </span>
                                            <span className="text-zinc-500">{art.date}</span>
                                        </div>
                                        <h3 className="font-serif text-lg font-medium text-[var(--ink,#1e2924)] group-hover:text-[var(--forest,#29473b)] transition-colors mb-2 leading-snug">
                                            {art.title}
                                        </h3>
                                        <p className="text-xs text-[var(--muted,#66716a)] leading-relaxed line-clamp-2">
                                            {art.thesis}
                                        </p>
                                    </div>
                                    <div className="pt-3 mt-3 border-t border-[var(--line,rgba(36,51,43,0.1))] text-[11px] font-mono text-[var(--forest,#29473b)] font-bold flex items-center justify-between">
                                        <span>Read Published Work</span>
                                        <span className="text-[var(--gold,#b77a35)] group-hover:translate-x-1 transition-transform">↗</span>
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

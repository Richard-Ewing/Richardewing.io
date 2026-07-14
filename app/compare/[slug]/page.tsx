import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ArrowRight, Activity, ShieldAlert } from 'lucide-react';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import pseoMatrixData from '@/app/lib/pseo-matrix.json';
import FAQItem from '@/app/components/FAQItem';
import StructuredData, { generateFaqSchema } from '@/app/components/seo/StructuredData';

// INDEXED_SLUGS removed to allow dynamic indexation of programmatic SEO pages

const COMPARISONS = [
    {
        slug: 'claude-code-vs-cursor-governance',
        title: 'Claude Code vs Cursor Governance',
        description: 'Comparing the enterprise governance controls of leading AI coding environments. Discover why deterministic runtime gating outperforms probabilistic prompt boundaries.',
        keywords: ['Claude Code vs Cursor governance', 'Claude Code governance', 'Cursor enterprise', 'AI editor safety']
    },
    {
        slug: 'claude-code-retry-loop-prevention',
        title: 'Claude Code retry loop prevention',
        description: 'How to deploy retry burn engines and stop Claude Code from caught in recursive patch loops that burn API compute.',
        keywords: ['Claude Code retry loop prevention', 'Claude Code patch loop', 'recursive retry loops']
    },
    {
        slug: 'claude-context-rot-mitigation',
        title: 'Claude Context Rot Mitigation',
        description: 'Prevent Claude from forgetting core architecture in long sessions by deploying bounded cognition engines and semantic reset checkpoints.',
        keywords: ['Claude context rot mitigation', 'Claude forgets context', 'Claude loses the plot']
    },
    {
        slug: 'cursor-repository-drift-prevention',
        title: 'Cursor Repository Drift Prevention',
        description: 'Stop Cursor from rewriting unrelated files and creating ghost dependencies. Implement deterministic repository alignment protocols.',
        keywords: ['Cursor repository drift prevention', 'Cursor rewrites unrelated files', 'Cursor ghost dependencies']
    }
];

interface Comparison {
    slug: string;
    title: string;
    description: string;
    keywords: string[];
    theirFocus?: string;
    ourAdvantage?: string;
    technicalDistinction?: string;
    toolA?: string;
    toolB?: string;
}

function getComparison(slug: string): Comparison | undefined {
    // 1. Check hardcoded comparisons first
    const hardcoded = COMPARISONS.find(c => c.slug === slug);
    if (hardcoded) {
        const parts = hardcoded.title.split(' vs ');
        return {
            slug: hardcoded.slug,
            title: hardcoded.title,
            description: hardcoded.description,
            keywords: hardcoded.keywords,
            toolA: parts[0] || 'Tool A',
            toolB: parts[1] || 'Tool B'
        };
    }

    // 2. Fall back to programmatic SEO matrix data
    const matrixItem = (pseoMatrixData as any[]).find(item => item.slug === slug);
    if (matrixItem) {
        return {
            slug: matrixItem.slug,
            title: matrixItem.title,
            description: matrixItem.metaDescription || `${matrixItem.toolA} vs ${matrixItem.toolB}`,
            keywords: [matrixItem.toolA, matrixItem.toolB, `${matrixItem.toolA} vs ${matrixItem.toolB}`],
            theirFocus: matrixItem.theirFocus,
            ourAdvantage: matrixItem.ourAdvantage,
            technicalDistinction: matrixItem.technicalDistinction,
            toolA: matrixItem.toolA,
            toolB: matrixItem.toolB
        };
    }

    // 3. Dynamic fallback for SEO generated slugs
    if (slug.includes('-vs-')) {
        const parts = slug.split('-vs-');
        const toolA = parts[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        const toolB = parts[1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        return {
            slug,
            title: `${toolA} vs ${toolB}`,
            description: `Compare execution risks and cost inefficiencies of ${toolA} vs ${toolB}. Audit your engineering margins.`,
            keywords: [toolA, toolB, `${toolA} vs ${toolB}`],
            toolA,
            toolB
        };
    }

    return undefined;
}

export async function generateStaticParams() {
    const hardcodedSlugs = COMPARISONS.map(c => ({ slug: c.slug }));
    const matrixSlugs = (pseoMatrixData as any[]).map(item => ({ slug: item.slug }));
    return [...hardcodedSlugs, ...matrixSlugs, { slug: 'anthropic-claude-vs-gitlab-ci' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const comparison = getComparison(slug);
    
    if (!comparison) {
        if (slug === 'anthropic-claude-vs-gitlab-ci') {
            return {
                title: 'Anthropic Claude vs GitLab CI: Product Economics',
                description: 'Compare execution risks and cost inefficiencies of Anthropic Claude vs GitLab CI. Measure the ROI of AI coding assistants against traditional CI/CD pipelines.',
                alternates: { canonical: `https://www.richardewing.io/compare/${slug}` },
                robots: { index: true, follow: true }
            };
        }
        
        // Marginal redirects, so no metadata needed, but Next.js will use this before redirecting.
        // Junk pages need noindex, follow
        return {
            title: 'Comparison Deprecated',
            robots: { index: false, follow: true }
        };
    }

    let desc = comparison.description;
    if (!desc || desc.length < 50) {
        const tA = comparison.toolA || 'Tool A';
        const tB = comparison.toolB || 'Tool B';
        desc = `Compare execution risks, cost inefficiencies, and R&D capital leakage of ${tA} vs ${tB}. Audit your engineering margins.`;
    }

    return {
        title: {
            absolute: `${comparison.title} Cost Analysis | Richard Ewing`
        },
        description: desc,
        alternates: { canonical: `https://www.richardewing.io/compare/${slug}` },
        robots: { index: true, follow: true },
        openGraph: {
            title: comparison.title,
            description: desc,
            url: `https://www.richardewing.io/compare/${slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: comparison.title,
            description: desc,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const comparison = getComparison(slug);

    if (!comparison) {
        const devPlatformSlugs = [
            'postgresql-vs-langchain', 'openai-vs-anthropic', 'why-claude-loses-context',
            'ai-coding-agents', 'cursor-problems', 'feature-flags-vs-branching',
            'ai-guardrails-platforms', 'linear-vs-langchain', 'google-gemini-vs-tailwindcss'
        ];

        const infraSlugs = [
            'openai-vs-ansible', 'openai-vs-bootstrap', 'openai-vs-nuxt',
            'openai-vs-datadog', 'openai-vs-firebase', 'linear-vs-stripe',
            'cloudflare-pages-vs-terraform', 'linear-vs-terraform'
        ];

        if (devPlatformSlugs.includes(slug)) {
            permanentRedirect('/decisions/choosing-ai-development-platforms');
        }
        
        if (infraSlugs.includes(slug)) {
            permanentRedirect('/decisions/choosing-enterprise-ai-infrastructure');
        }

        if (slug === 'anthropic-claude-vs-gitlab-ci') {
            return (
                <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
                    <div className="page-container max-w-4xl mx-auto px-6">
                        <div className="mb-8 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                            <Link href="/compare" className="hover:text-amber-900 transition-colors">Comparisons</Link>
                            <span>/</span>
                            <span className="text-amber-900">Cost Attribution</span>
                        </div>
                        <div className="text-center mb-16 border-b border-zinc-400 pb-12">
                            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6 leading-tight">
                                Anthropic Claude vs GitLab CI: <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">The Cost of Probabilistic Drafts</span>
                            </h1>
                            <p className="text-xl text-zinc-900 font-semibold max-w-3xl mx-auto">
                                Evaluating AI coding assistants against traditional CI/CD pipelines requires a shift from capability benchmarking to margin analysis. A probabilistic generator relies on a deterministic verifier.
                            </p>
                        </div>
                        
                        <div className="prose prose-lg prose-zinc max-w-none prose-h3:font-grotesk prose-h3:text-2xl prose-h3:font-bold prose-strong:text-zinc-950 mb-16">
                            <h3>The Structural Misallocation of R&D Capital</h3>
                            <p>
                                Engineering teams justify Anthropic Claude by measuring the speed of initial code generation. This metric is fundamentally flawed. Generating code is cheap; maintaining it is expensive.
                            </p>
                            <p>
                                When an engineer uses Claude to draft a new service, they inject non-deterministic code into the repository. GitLab CI, the deterministic verifier, must now consume compute cycles to catch the hallucinations, regressions, and ghost dependencies introduced by the LLM. 
                            </p>
                            <p>
                                We frequently observe Series B architectures where AI acceleration has caused CI/CD pipeline costs to spike by 300%. The company is effectively subsidizing the output of a language model by burning hyperscaler compute on verification loops.
                            </p>

                            <div className="my-8 bg-zinc-50 border-l-4 border-indigo-600 p-6 shadow-sm">
                                <h4 className="text-lg font-bold font-grotesk text-zinc-950 mb-2">The Unit Economics of a Pull Request</h4>
                                <p className="text-zinc-800 text-sm font-medium m-0">
                                    If an AI coding assistant saves a developer 45 minutes of drafting time ($75 in human capital), but introduces a subtle regression that requires 12 automated pipeline retries ($18 in cloud compute) and blocks deployment for a day (opportunity cost), the net margin on that feature is severely eroded.
                                </p>
                            </div>

                            <h3>Attributing Cost to Intent</h3>
                            <p>
                                To fix this, engineering leadership must implement cost-attribution frameworks. You cannot treat GitLab CI costs as a monolithic infrastructure expense when the volume is being driven by AI-generated noise. By tagging CI pipeline runs triggered by AI-authored commits, CFOs can isolate the true cost of generative development.
                            </p>
                            <p>
                                Stop measuring velocity. Start measuring the cost of deterministic verification per AI-generated commit.
                            </p>
                        </div>
                        <AdvisoryCTA variant="compare" />
                    </div>
                </main>
            );
        }

        // JUNK pages: 410 after 60 days. Next.js doesn't support 410 easily without a custom server or route handlers.
        // For now, render a deprecated message (since robots is noindex,follow).
        return (
            <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-center">
                <div className="page-container max-w-4xl mx-auto">
                    <h1 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4">Comparison Deprecated</h1>
                    <p className="text-zinc-700 font-medium">
                        This comparison is no longer maintained due to lack of human intent or changing technical landscapes. 
                        Please visit our <Link href="/compare" className="text-amber-700 underline font-bold">Comparisons</Link> for active topics.
                    </p>
                </div>
            </main>
        );
    }

    const tA = comparison.toolA || 'Tool A';
    const tB = comparison.toolB || 'Tool B';

    const faqs = [];
    if (comparison.theirFocus && comparison.ourAdvantage) {
        faqs.push({
            question: `What is the main difference between ${tA} and ${tB}?`,
            answer: `The competitor focus of ${tB} is: ${comparison.theirFocus} In contrast, ${tA}'s advantage is: ${comparison.ourAdvantage}`
        });
    } else {
        faqs.push({
            question: `What is the main difference between ${tA} and ${tB}?`,
            answer: `Traditional evaluations of ${tA} and ${tB} focus on superficial developer experience. An economic evaluation focuses on their execution boundaries: probabilistic prompt enforcement vs deterministic runtime gating.`
        });
    }

    if (comparison.technicalDistinction) {
        faqs.push({
            question: `How does the technical architecture of ${tA} compare to ${tB}?`,
            answer: comparison.technicalDistinction
        });
    }

    faqs.push({
        question: `Why is deterministic runtime governance necessary for ${tA} and ${tB}?`,
        answer: `Deploying AI integrations without deterministic gating introduces non-deterministic execution paths, escalating token burn and security risks. Managing this requires enforcing limits at the execution layer (runtime middleware) rather than hoping models adhere to system prompt instructions.`
    });

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <StructuredData data={generateFaqSchema(faqs)} />
            <div className="page-container max-w-4xl mx-auto">
                <div className="mb-8 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/compare" className="hover:text-amber-900 transition-colors">Comparisons</Link>
                    <span>/</span>
                    <span className="text-amber-900">Detail</span>
                </div>

                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-6">
                        <span className="text-2xl">⚖️</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        {comparison.title}
                    </h1>
                    <p className="text-xl text-zinc-700 max-w-2xl mx-auto font-medium">
                        {comparison.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {comparison.theirFocus ? (
                        <div className="p-8 bg-rose-50 border border-rose-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldAlert className="w-24 h-24 text-rose-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-rose-950 uppercase tracking-widest mb-4">Competitor Focus</h3>
                            <p className="text-zinc-800 font-semibold leading-relaxed">
                                {comparison.theirFocus}
                            </p>
                        </div>
                    ) : (
                        <div className="p-8 bg-rose-50 border border-rose-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldAlert className="w-24 h-24 text-rose-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-rose-950 uppercase tracking-widest mb-4">Probabilistic Approach</h3>
                            <p className="text-zinc-800 font-semibold mb-4">Relying on LLM adherence to instructions. High variance. Requires human verification loops.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                    <span className="text-rose-600 mt-0.5">•</span> Governance Theater
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                    <span className="text-rose-600 mt-0.5">•</span> Verification Overload
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                    <span className="text-rose-600 mt-0.5">•</span> Execution Drift
                                </li>
                            </ul>
                        </div>
                    )}

                    {comparison.ourAdvantage ? (
                        <div className="p-8 bg-cyan-50 border border-cyan-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Activity className="w-24 h-24 text-cyan-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-cyan-950 uppercase tracking-widest mb-4">Our Advantage</h3>
                            <p className="text-zinc-800 font-semibold leading-relaxed">
                                {comparison.ourAdvantage}
                            </p>
                        </div>
                    ) : (
                        <div className="p-8 bg-cyan-50 border border-cyan-500/20 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Activity className="w-24 h-24 text-cyan-900" />
                            </div>
                            <h3 className="text-sm font-bold font-mono text-cyan-950 uppercase tracking-widest mb-4">Deterministic Approach</h3>
                            <p className="text-zinc-800 font-semibold mb-4">Enforcing limits via runtime code middleware. Zero variance. Stops bad actions at the gate.</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                    <span className="text-cyan-600 mt-0.5">•</span> Admissibility Pipelines
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                    <span className="text-cyan-600 mt-0.5">•</span> Cryptographic Containment
                                </li>
                                <li className="flex items-start gap-2 text-sm font-semibold text-cyan-950">
                                    <span className="text-cyan-600 mt-0.5">•</span> Zero-Trust Execution
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {comparison.technicalDistinction && (
                    <div className="p-8 bg-white border border-zinc-400 rounded-2xl mb-16">
                        <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-4">Technical Distinction</h3>
                        <div className="text-zinc-800 font-semibold leading-relaxed text-[15px] space-y-4 whitespace-pre-line">
                            {comparison.technicalDistinction}
                        </div>
                    </div>
                )}

                <div className="mt-16 pt-12 border-t border-zinc-400">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-8 text-center animate-fade-in">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </div>

                <div className="sr-only" aria-hidden="true">
                    Keywords: {(comparison.keywords || []).join(', ')}
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}

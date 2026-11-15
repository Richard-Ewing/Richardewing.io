import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '../../terms';
import { PILLARS, CATEGORY_MAP, KEEP_TERMS } from '../../pillarsMapping';
import ShareButtons from '@/components/ShareButtons';
import { DiagnosticBridge } from '@/components/DiagnosticBridge';
import EditorialAdSlot from '@/components/monetization/EditorialAdSlot';
import ScorecardCheckoutDrawer from '@/app/components/ScorecardCheckoutDrawer';

import { clampSeoTitle, formatSeoDescription } from '@/app/lib/seo-metadata';

type Props = { params: Promise<{ slug: string }> };

interface PillarSeoCopy {
    baseTitle: string;
    metaDesc: string;
    directAnswer: string;
}

const PILLAR_SEO_COPY: Record<string, PillarSeoCopy> = {
    'negative-carry-insolvency': {
        baseTitle: 'Negative-Carry Code & Insolvency Glossary',
        metaDesc: 'Audit negative-carry code, zombie features, and Technical Insolvency Date formulas. Use these CFO and CTO benchmarks to protect SaaS gross margins.',
        directAnswer:
            'Negative-carry code occurs when maintaining a shipped software feature costs more in cloud compute, model inference, and engineering bug-fix hours than the revenue it retains. Left unpruned, compounding maintenance queues push software teams past their Technical Insolvency Date.',
    },
    'ai-unit-economics': {
        baseTitle: 'AI Unit Economics: Margin & Token Formulas',
        metaDesc: 'Calculate AI unit economics, LLM token COGS, inference margin floors, and ROAI payback. Apply these CFO and CTO pricing formulas to protect EBITDA.',
        directAnswer:
            'AI unit economics measures the net gross margin left on every customer prompt or workflow after subtracting foundation model token fees, vector retrieval compute, retry overhead, and human review labor. Without per-tenant attribution, heavy users erase subscription profit.',
    },
    'technical-debt-platform-engineering': {
        baseTitle: 'Technical Debt & Platform FinOps Glossary',
        metaDesc: 'Quantify technical debt in dollars, measure platform engineering ROI, and isolate code review bottlenecks. Run boardroom metrics built for CTOs and CFOs.',
        directAnswer:
            'Technical debt becomes an executive P&L problem when unverified code and brittle platform dependencies force senior engineers to spend over half their sprint fixing regressions instead of shipping revenue work. Measuring debt in payroll dollars enables objective capital allocation.',
    },
    'saas-metrics-due-diligence': {
        baseTitle: 'SaaS Metrics & M&A Diligence Glossary',
        metaDesc: 'Audit SaaS gross margins, Section 174 R&D capitalization, Rule of 40 health, and M&A code liability. Equip CFOs and investors for technical due diligence.',
        directAnswer:
            'SaaS metrics and technical due diligence connect recurring revenue quality directly to underlying software architecture and engineering payroll capitalization. Investors and CFOs inspect feature gross margin, code maintenance drag, and AI vendor concentration before pricing software acquisitions or board budgets.',
    },
    'cloud-infrastructure-finops': {
        baseTitle: 'Cloud FinOps & AI Compute Cost Glossary',
        metaDesc: 'Cut cloud egress fees, GPU inference waste, and multi-cloud compute bloat. Apply FinOps attribution models built for CFOs and VP Infrastructure teams.',
        directAnswer:
            'Cloud infrastructure FinOps ties every compute cluster, GPU reservation, storage bucket, and data egress bill back to a specific product feature and customer tier. Engineering and finance leaders use shared unit-cost telemetry to kill idle workloads before quarterly margins compress.',
    },
    'engineering-leadership': {
        baseTitle: 'Engineering Leadership & Levels Glossary',
        metaDesc: 'Compare L3 to L8 engineering levels, review-queue throughput, and P&L governance models. Built for CTOs, VPs of Engineering, and hiring committees.',
        directAnswer:
            'Engineering leadership in AI-native teams shifts focus from lines of code shipped to verification throughput, architecture boundaries, and R&D capital yield per engineer. Clear promotion gates, IC versus management parity, and P&L accountability keep senior staff focused on revenue durability.',
    },
    'product-economics': {
        baseTitle: 'Product Economics & P&L Margin Glossary',
        metaDesc: 'Connect roadmap prioritization, feature sunsetting, and hybrid AI pricing directly to product P&L. Field-tested frameworks for CPOs and Product Ops Leads.',
        directAnswer:
            'Product economics holds Product Leaders accountable for contribution margin, retention lift, and support burden across every shipped capability rather than raw release velocity. Pairing usage telemetry with engineering cost attribution lets teams kill low-adoption features before they drag down growth.',
    },
    'cpo-product-leadership': {
        baseTitle: 'CPO Strategy & Outcome Pricing Glossary',
        metaDesc: 'Move product teams from feature shipping to P&L ownership, outcome pricing, and kill-list discipline. Written for Chief Product Officers and VPs.',
        directAnswer:
            'CPO product strategy aligns roadmap investments with gross margin expansion, outcome-based monetization, and disciplined feature retirement. Rather than celebrating release volume, product executives price volatile AI compute accurately and reallocate R&D headcount toward durable customer expansion.',
    },
    'ceo-executive-operating-model': {
        baseTitle: 'CEO AI Operating Model & Org Glossary',
        metaDesc: 'Structure AI-native operating models, kill shadow spend, and align engineering payroll to EBITDA. Executive definitions for CEOs and Founders.',
        directAnswer:
            'A CEO executive operating model establishes clear capital gates, verifiable AI payback timelines, and single-threaded P&L owners across product and engineering. Replacing ad-hoc tool sprawl with governed workflows ensures AI investments expand enterprise valuation rather than inflating fixed payroll.',
    },
    'board-executive-governance': {
        baseTitle: 'Board AI Governance & Risk Glossary',
        metaDesc: 'Protect board fiduciary oversight over AI spending, model drift liability, and SOX 404 agent controls. Essential governance lexicon for directors.',
        directAnswer:
            'Board AI governance translates technical model drift, autonomous tool permissions, and unbudgeted token spend into auditable fiduciary risk controls. Directors use concrete threshold metrics, runtime kill-switch standards, and compliance gates to oversee enterprise AI deployments responsibly.',
    },
    'cfo-finance-capital-allocation': {
        baseTitle: 'CFO R&D Capital & Section 174 Glossary',
        metaDesc: 'Separate capitalizable R&D engineering from maintenance OpEx, audit Section 174 rules, and cap variable AI COGS. Built for CFOs and Finance Directors.',
        directAnswer:
            'CFO capital allocation separates genuine revenue-generating software development from uncapitalizable maintenance rework and variable AI inference COGS. Clear tracking across engineering sprints protects Section 174 tax positions, stabilizes gross margin forecasts, and eliminates opaque vendor bloat.',
    },
    'mcp-security-zero-trust': {
        baseTitle: 'MCP Security & Zero-Trust Agent Glossary',
        metaDesc: 'Lock down Model Context Protocol servers, block tool poisoning attacks, and enforce zero-trust agent permissions. Built for CISOs and CTOs.',
        directAnswer:
            'MCP security and zero-trust tool governance require deterministic schema validation, least-privilege credential scoping, and strict runtime allowlists before AI agents touch production databases or APIs. Prompt instructions alone cannot stop poisoned tool descriptions or unauthorized lateral execution.',
    },
    'macro-coding-architecture': {
        baseTitle: 'Macro-Coding & Spec Architecture Glossary',
        metaDesc: 'Eliminate vibe-coding debt with executable specifications, deterministic verification gates, and modular system contracts for senior engineering teams.',
        directAnswer:
            'Macro-coding replaces fragile line-by-line prompt hacking with explicit architectural specifications, typed boundary contracts, and automated red-green test harnesses. Engineering leaders adopt spec-driven workflows so AI coding assistants accelerate delivery without multiplying review bottlenecks or security debt.',
    },
    'probabilistic-product-management': {
        baseTitle: 'Probabilistic Product Management Glossary',
        metaDesc: 'Ship non-deterministic AI features safely using latency budgets, confidence thresholds, and fallback state machines. Built for AI Product Leads.',
        directAnswer:
            'Probabilistic product management governs software features whose outputs vary across identical inputs, requiring statistical confidence gates, deterministic fallback paths, and explicit failure-cost caps. Product managers design verification loops around model outputs instead of assuming binary software determinism.',
    },
    'agentic-governance-engineering': {
        baseTitle: 'Agentic Governance & Runtime Glossary',
        metaDesc: 'Control autonomous agent retry loops, state drift, and execution authority with deterministic policy gates. Technical glossary for AI platform teams.',
        directAnswer:
            'Agentic governance bounds autonomous software workflows using hard token ceilings, cryptographic audit ledgers, and state-integrity checks that fail closed when behavior drifts. Separating agent persistence from execution authority stops silent retry inflation and unintended production mutations.',
    },
    'governance-architecture': {
        baseTitle: 'AI Security & Runtime Governance Glossary',
        metaDesc: 'Enforce runtime policy gates, SOC 2 AI controls, and prompt-injection defenses across enterprise LLM deployments. Built for CISOs and Architects.',
        directAnswer:
            'Security, governance, and runtime architecture establish deterministic control layers outside probabilistic language models so unverified outputs never execute privileged transactions. Combining schema admissibility, audit logging, and human approval gates satisfies enterprise compliance without halting shipping.',
    },
    'delivery-reliability': {
        baseTitle: 'Software Delivery & Reliability Glossary',
        metaDesc: 'Reduce PR review gridlock, eliminate silent syntax failures, and enforce execution harness parity across CI/CD pipelines for VP Engineering teams.',
        directAnswer:
            'Delivery and reliability engineering measure how safely code moves from specification to production without inflating QA cleanup hours or incident downtime. Enforcing automated harness parity and bounded pull-request scopes prevents AI-generated code volume from stalling release pipelines.',
    },
};

export const dynamicParams = false;

export async function generateStaticParams() {
    return PILLARS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const pillar = PILLARS.find(p => p.slug === slug);
    if (!pillar) return {};

    const pillarCopy = PILLAR_SEO_COPY[slug];
    const baseTitle = clampSeoTitle(pillarCopy?.baseTitle || `${pillar.name} Glossary`, 42);
    const metaDesc = formatSeoDescription(
        pillarCopy?.metaDesc ||
            `Audit ${pillar.name} unit costs, governance formulas, and P&L execution playbooks built for CEOs, CFOs, and VPs of Engineering.`
    );
    return {
        title: baseTitle,
        description: metaDesc,
        alternates: { canonical: `https://www.richardewing.io/glossary/pillars/${slug}` },
        openGraph: {
            title: `${baseTitle} | Richard Ewing`,
            description: metaDesc,
            url: `https://www.richardewing.io/glossary/pillars/${slug}`,
            siteName: 'Richard Ewing',
            type: 'website',
            images: [{ url: `https://www.richardewing.io/api/og?title=${encodeURIComponent(pillar.name)}&category=Glossary%20Pillar`, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${baseTitle} | Richard Ewing`,
            description: metaDesc,
            images: [`https://www.richardewing.io/api/og?title=${encodeURIComponent(pillar.name)}&category=Glossary%20Pillar`],
        },
    };
}

export default async function PillarPage({ params }: Props) {
    const { slug } = await params;
    const pillar = PILLARS.find(p => p.slug === slug);
    if (!pillar) notFound();

    const pillarCopy = PILLAR_SEO_COPY[slug];
    const directAnswer =
        pillarCopy?.directAnswer ||
        `${pillar.name} establishes explicit financial formulas, architectural boundaries, and executive accountability across product and engineering budgets. Finance and technology leaders apply these concrete operational definitions to protect SaaS gross margins, isolate hidden compute waste, and govern AI delivery.`;

    // Find all terms that map to this pillar
    const pillarTerms = glossaryTerms.filter(term => {
        const mappedPillarSlug = CATEGORY_MAP[term.category] || 'cloud-infrastructure-finops'; // fallback
        return mappedPillarSlug === slug;
    });

    // Sort terms alphabetically
    pillarTerms.sort((a, b) => a.title.localeCompare(b.title));

    const pillarSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'DefinedTermSet',
                '@id': `https://www.richardewing.io/glossary/pillars/${slug}#termset`,
                name: `${pillar.name} Glossary`,
                description: `Canonical dictionary of ${pillar.name} terminology, definitions, and financial execution frameworks by Richard Ewing.`,
                url: `https://www.richardewing.io/glossary/pillars/${slug}`,
                hasDefinedTerm: pillarTerms.slice(0, 60).map((t) => ({
                    '@type': 'DefinedTerm',
                    name: t.title,
                    description: t.definition.slice(0, 240).replace(/\n/g, ' ').trim(),
                    url: KEEP_TERMS.includes(t.slug)
                        ? `https://www.richardewing.io/glossary/${t.slug}`
                        : `https://www.richardewing.io/glossary/pillars/${slug}#${t.slug}`,
                })),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
                    { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://www.richardewing.io/glossary' },
                    { '@type': 'ListItem', position: 3, name: pillar.name, item: `https://www.richardewing.io/glossary/pillars/${slug}` },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pillarSchema) }}
            />
            <div className="max-w-4xl w-full mx-auto px-4 sm:px-6">
                <div className="mb-6 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/glossary" className="hover:text-cyan-900 transition-colors">Glossary Pillars</Link>
                    <span>/</span>
                    <span className="text-cyan-900">{pillar.name}</span>
                </div>

                <header className="mb-16 border-b border-zinc-400 pb-10">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-4">
                        {pillar.name}
                    </h1>
                    <p className="text-lg sm:text-xl text-zinc-800 font-medium leading-relaxed">
                        {directAnswer}
                    </p>
                </header>

                <div className="space-y-16">
                    {pillarTerms.map((term) => (
                        <div key={term.slug} id={term.slug} className="scroll-mt-32 card p-8 border-cyan-500/20 bg-white">
                            <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4 flex items-center gap-3">
                                {term.title}
                                <a href={`#${term.slug}`} className="text-zinc-400 hover:text-cyan-600 transition-colors text-xl">#</a>
                            </h2>
                            <div className="text-xs font-bold font-mono text-cyan-600 uppercase tracking-widest mb-6 border-b border-zinc-200 pb-4">
                                {term.category}
                            </div>
                            <div className="prose prose-zinc max-w-none text-lg text-zinc-800 leading-relaxed font-semibold">
                                {term.definition.split('\n\n').map((p, i) => (
                                    <p key={i} className="mb-4">{p}</p>
                                ))}
                            </div>
                            {term.whyItMatters && (
                                <div className="mt-8 pt-6 border-t border-zinc-200">
                                    <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-3">Why It Matters</h3>
                                    <p className="text-zinc-700">{term.whyItMatters}</p>
                                </div>
                            )}
                            {term.faqs && term.faqs.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-zinc-200 space-y-4">
                                    <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider">Direct Q&amp;A</h3>
                                    {term.faqs.map((f, fi) => (
                                        <div key={fi} className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
                                            <div className="text-sm font-bold text-zinc-950 mb-1">{f.question}</div>
                                            <div className="text-sm text-zinc-700 leading-relaxed">{f.answer}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {KEEP_TERMS.includes(term.slug) && (
                                <div className="mt-6">
                                    <Link href={`/glossary/${term.slug}`} className="text-cyan-700 hover:text-cyan-900 font-bold underline underline-offset-4">
                                        Read the full guide on {term.title} &rarr;
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="my-12">
                    <EditorialAdSlot pillar="glossary" contextLabel={pillar.name} />
                </div>

                <div className="mt-24">
                    <ScorecardCheckoutDrawer source={`glossary-pillar-${slug}`} />
                    <DiagnosticBridge 
                        diagnosticName="R&D Capital Diagnostic"
                        frameworkSlug="product-debt-index"
                        frameworkName="Product Debt Index"
                        frameworkDescription="Quantify the financial impact of unaddressed technical debt and margin erosion."
                        exogramRisk="Margin Collapse"
                        exogramDescription="Lock down AI execution paths to prevent unpredictable runaway costs at scale."
                    />
                </div>
            </div>
        </main>
    );
}

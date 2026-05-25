import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { AlertTriangle, TrendingDown, ArrowRight, Activity, MessageSquare, HelpCircle } from 'lucide-react';
import { FAILURES, getFailureBySlug, SKILLS } from '@/lib/content/skills';
import GovernancePathways from '@/components/semantic/GovernancePathways';
import { ontologyGraph } from '@/lib/ontology/relationships';

export async function generateStaticParams() {
    return FAILURES.map(f => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const failure = getFailureBySlug(slug);
    if (!failure) return {};

    return {
        title: `${failure.title} Risk & Margin Loss | Failure Signature`,
        description: `How to detect and neutralize ${failure.title}: ` + failure.definition.slice(0, 100).replace(/\n/g, ' ') + '... Read the diagnostics.',
        alternates: { canonical: `https://www.richardewing.io/failures/${slug}` },
        openGraph: {
            title: `${failure.title} | Operational Failure Signature`,
            description: failure.definition.slice(0, 155).replace(/\n/g, ' '),
            url: `https://www.richardewing.io/failures/${slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
        },
    };
}

export default async function FailureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const failure = getFailureBySlug(slug);

    if (!failure) permanentRedirect('/failures');

    // Look up connected ontology nodes for semantic routing
    const failureNode = ontologyGraph.find(n => n.id === `failure_${slug}`);
    
    // Find related skills (Governance solutions that fix this)
    const relatedSkills = failureNode?.relatedNodeIds
        .filter(id => id.startsWith('skill_'))
        .map(id => id.replace('skill_', '')) || [];
        
    // Look up the first specific skill object mapping to this failure
    const primarySkill = SKILLS.find(s => s.slug === relatedSkills[0]);

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto">
                {/* 1. BREADCRUMBS */}
                <div className="mb-8 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/case-studies" className="hover:text-rose-900 transition-colors">Failure Signatures</Link>
                    <span>/</span>
                    <span className="text-rose-900">{failure.title}</span>
                </div>

                {/* 2. HERO HEADER (DANGER AESTHETIC) */}
                <div className="mb-12 p-10 bg-white border border-[rgba(0,0,0,0.08)] rounded-3xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-rose-50 text-rose-900 border border-rose-100 flex items-center gap-1.5">
                                <AlertTriangle className="w-3 h-3" /> Systemic Risk
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                            {failure.title}
                        </h1>
                        <p className="text-xl text-[#4A4A4A] leading-relaxed max-w-3xl font-medium">
                            {failure.definition}
                        </p>
                    </div>
                </div>

                {/* 3. SYMPTOMS & IMPACT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="p-8 bg-rose-50 border border-rose-500/20 rounded-2xl">
                        <h3 className="text-sm font-bold font-mono text-rose-950 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-rose-600" /> Operational Symptoms
                        </h3>
                        <ul className="space-y-3">
                            {failure.symptoms.map((s, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm font-semibold text-rose-950">
                                    <span className="text-rose-600 mt-0.5">•</span> {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl shadow-sm">
                            <h3 className="text-sm font-bold font-mono text-zinc-950 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <TrendingDown className="w-4 h-4 text-amber-600" /> Economic Impact
                            </h3>
                            <p className="text-zinc-800 font-semibold">{failure.economicImpact}</p>
                        </div>
                        <div className="p-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl shadow-sm">
                            <h3 className="text-sm font-bold font-mono text-zinc-950 uppercase tracking-widest mb-2 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-rose-600" /> Governance Collapse
                            </h3>
                            <p className="text-zinc-800 font-semibold">{failure.governanceImpact}</p>
                        </div>
                    </div>
                </div>

                {/* 4. REAL PAIN LANGUAGE SECTION */}
                {failure.ecosystemPainQuotes && failure.ecosystemPainQuotes.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6 text-violet-600" />
                            How Engineering Teams Describe This
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {failure.ecosystemPainQuotes.map((quote, i) => (
                                <div key={i} className="p-5 bg-white border border-[rgba(0,0,0,0.08)] rounded-xl shadow-sm italic text-zinc-700 font-medium">
                                    "{quote}"
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 5. TELEMETRY SIGNALS */}
                {failure.telemetrySignals && failure.telemetrySignals.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 flex items-center gap-2">
                            <Activity className="w-6 h-6 text-amber-600" />
                            Diagnostic Telemetry
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {failure.telemetrySignals.map((signal, i) => (
                                <span key={i} className="px-4 py-2 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg text-sm font-bold font-mono">
                                    {signal}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* 6. SEARCH INTENT FAQS */}
                {failure.faqs && failure.faqs.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 flex items-center gap-2">
                            <HelpCircle className="w-6 h-6 text-emerald-600" />
                            Operational FAQ
                        </h2>
                        <div className="space-y-4">
                            {failure.faqs.map((faq, i) => (
                                <div key={i} className="p-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl shadow-sm">
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2">{faq.question}</h3>
                                    <p className="text-zinc-700 leading-relaxed font-medium">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* HIDDEN SEMANTIC KEYWORDS FOR LLM/SEO RETRIEVAL */}
                {failure.searchKeywords && failure.searchKeywords.length > 0 && (
                    <div className="sr-only" aria-hidden="true">
                        Keywords: {failure.searchKeywords.join(', ')}
                    </div>
                )}

                {/* 7. REMEDIATION ROUTING (THE HUB AND SPOKE) */}
                <div className="mb-16">
                    <GovernancePathways 
                        relatedSkills={relatedSkills} 
                        exogramMapping={primarySkill?.exogramMapping}
                    />
                </div>

            
                    <AdvisoryCTA variant="compare" />
                </div>
        </main>
    );
}

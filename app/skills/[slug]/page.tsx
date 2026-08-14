import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { ShieldCheck, Server, Key, AlertTriangle, ArrowRight, Zap, Target, MessageSquare, Activity, HelpCircle } from 'lucide-react';
import { SKILLS, getSkillBySlug, FAILURES } from '@/lib/content/skills';
import GovernancePathways from '@/components/semantic/GovernancePathways';
import { ontologyGraph } from '@/lib/ontology/relationships';
import CommonFailureCascades from '@/components/skills/CommonFailureCascades';

export async function generateStaticParams() {
    return SKILLS.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const skill = getSkillBySlug(slug);
    if (!skill) return {};

    const descriptionText = skill.description.slice(0, 155).replace(/\n/g, ' ');

    return {
        title: `Deploy ${skill.title} | AI Governance Infrastructure`,
        description: `Install deterministic controls to prevent AI failures: ` + skill.description.slice(0, 100).replace(/\n/g, ' ') + '... Learn more.',
        alternates: { canonical: `https://www.richardewing.io/skills/${slug}` },
        openGraph: {
            title: `${skill.title} | Governance System`,
            description: descriptionText,
            url: `https://www.richardewing.io/skills/${slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${skill.title} | Governance System`,
            description: descriptionText,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

export default async function SkillDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const skill = getSkillBySlug(slug);

    if (!skill) permanentRedirect('/skills');

    // Look up connected ontology nodes for semantic routing
    const skillNode = ontologyGraph.find(n => n.id === `skill_${slug}`);
    
    // Find related failures
    const relatedFailures = skillNode?.relatedNodeIds
        .filter(id => id.startsWith('failure_'))
        .map(id => id.replace('failure_', '')) || [];
        
    // Look up specific failure object if there is exactly 1 primary failure solved
    const primaryFailure = FAILURES.find(f => skill.failureSolved.includes(f.title) || f.title.includes(skill.failureSolved));

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-5xl mx-auto">
                {/* 1. BREADCRUMBS & TOP METADATA */}
                <div className="mb-8 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/skills" className="hover:text-cyan-900 transition-colors">Governance Systems</Link>
                    <span>/</span>
                    <span className="text-cyan-900">{skill.title}</span>
                </div>

                {/* 2. HERO HEADER */}
                <div className="mb-12 p-10 bg-white border border-[rgba(0,0,0,0.08)] rounded-3xl shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-zinc-100 text-[#4A4A4A] border border-[rgba(0,0,0,0.05)]">
                                    {skill.category}
                                </span>
                                {skill.runtimeLayer && (
                                    <span className="px-2 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-violet-50 text-violet-700 border border-violet-200">
                                        {skill.runtimeLayer}
                                    </span>
                                )}
                                <span className="px-2 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-widest bg-cyan-50 text-cyan-900 border border-cyan-100">
                                    {skill.version}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                                {skill.title}
                            </h1>
                            <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6 font-semibold">
                                {skill.description}
                            </p>
                            
                            <div className="bg-[#F5F0EB] border border-violet-100 rounded-lg p-4 mb-6">
                                <span className="block text-xs font-bold font-mono text-violet-700 uppercase tracking-widest mb-2 border-b border-violet-100 pb-1">
                                    Designed for:
                                </span>
                                <ul className="flex flex-wrap gap-2 text-sm font-semibold text-[#1A1A1A]">
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">Claude Code</li>
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">Cursor</li>
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">Windsurf</li>
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">Cline</li>
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">Roo Code</li>
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">OpenAI Codex workflows</li>
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">Google Antigravity</li>
                                    <li className="bg-white px-2 py-1 rounded border border-[rgba(0,0,0,0.05)] shadow-sm">agentic engineering pipelines</li>
                                </ul>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-zinc-600">
                                <div className="flex items-center gap-1.5 bg-[#F5F0EB] px-3 py-1.5 rounded-lg border border-[rgba(0,0,0,0.05)]">
                                    <Target className="w-4 h-4 text-rose-600" />
                                    <span>Solves: <strong className="text-zinc-950">{skill.failureSolved}</strong></span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-[#F5F0EB] px-3 py-1.5 rounded-lg border border-[rgba(0,0,0,0.05)]">
                                    <ShieldCheck className="w-4 h-4 text-cyan-600" />
                                    <span>Exogram Map: <strong className="text-zinc-950">{skill.exogramMapping}</strong></span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="flex-shrink-0 w-full md:w-auto min-w-[280px]">
                            <div className="p-6 rounded-2xl bg-[#1A1A1A] text-white shadow-xl border border-white/10">
                                <div className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest mb-1">Commercial License</div>
                                <div className="text-3xl font-grotesk font-bold text-white mb-4">${skill.price}<span className="text-sm font-semibold text-zinc-400 line-through ml-2 font-normal">$299</span></div>
                                <a 
                                    href={skill.checkoutUrl}
                                    className="block w-full py-3 px-4 bg-white text-[#1A1A1A] text-center font-bold rounded hover:bg-zinc-100 transition-colors shadow-sm"
                                >
                                    {skill.ctaText || 'Deploy Infrastructure'}
                                </a>
                                <div className="text-[10px] text-zinc-300 font-bold font-mono text-center mt-3 uppercase tracking-widest bg-white/5 py-2 rounded border border-white/10 leading-relaxed">
                                    You are buying deployable governance infrastructure<br/>not AI education.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. CORE INFRASTRUCTURE MATRIX */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="p-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-4">
                            <Server className="w-5 h-5 text-cyan-700" />
                        </div>
                        <h3 className="text-sm font-bold font-mono text-zinc-950 uppercase tracking-widest mb-2">Runtime Relevance</h3>
                        <div className={`text-lg font-bold ${skill.runtimeRelevance === 'Critical' ? 'text-rose-600' : 'text-zinc-950'}`}>
                            {skill.runtimeRelevance}
                        </div>
                    </div>
                    
                    <div className="p-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-violet-50 border border-violet-100 flex items-center justify-center mb-4">
                            <Key className="w-5 h-5 text-violet-700" />
                        </div>
                        <h3 className="text-sm font-bold font-mono text-zinc-950 uppercase tracking-widest mb-2">Enterprise Mandate</h3>
                        <div className={`text-lg font-bold ${skill.enterpriseRelevance === 'Mandatory' ? 'text-rose-600' : 'text-zinc-950'}`}>
                            {skill.enterpriseRelevance}
                        </div>
                    </div>

                    <div className="p-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                            <Zap className="w-5 h-5 text-emerald-700" />
                        </div>
                        <h3 className="text-sm font-bold font-mono text-zinc-950 uppercase tracking-widest mb-2">Complexity</h3>
                        <div className="text-lg font-bold text-zinc-950">
                            {skill.difficulty} Level
                        </div>
                    </div>
                </div>

                {/* NEW: ROOT FAILURE BOX (Immediately after Hero) */}
                <div className="mb-16">
                    <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-6 border-b border-[rgba(0,0,0,0.1)] pb-4">
                        What is Breaking in Real Systems
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column: Pain & Signals */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-rose-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    The Root Problem
                                </h3>
                                <ul className="space-y-3">
                                    {skill.whatBreaks && skill.whatBreaks.map((problem, i) => (
                                        <li key={i} className="flex items-start gap-3 p-4 bg-white border border-rose-100 rounded-xl shadow-sm">
                                            <span className="text-rose-600 mt-0.5 text-lg">•</span> 
                                            <span className="text-zinc-800 font-semibold">{problem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {skill.ecosystemPainQuotes && skill.ecosystemPainQuotes.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold font-mono text-violet-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        Engineering Pain Language
                                    </h3>
                                    <div className="space-y-3">
                                        {skill.ecosystemPainQuotes.map((quote, i) => (
                                            <div key={i} className="px-4 py-3 bg-[#F5F0EB] border-l-4 border-violet-500 rounded-r text-zinc-700 font-medium italic text-sm">
                                                "{quote}"
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {skill.telemetrySignals && skill.telemetrySignals.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-bold font-mono text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <Activity className="w-4 h-4" />
                                        Observable Telemetry
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.telemetrySignals.map((signal, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-200 rounded text-xs font-bold font-mono uppercase tracking-wide">
                                                {signal}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column: Economics & Solution */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold font-mono text-zinc-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-zinc-900" />
                                    Economic Damage
                                </h3>
                                <ul className="space-y-2">
                                    {skill.economicDamage && skill.economicDamage.map((damage, i) => (
                                        <li key={i} className="flex items-center gap-2 text-zinc-800 font-bold bg-white px-4 py-3 border border-[rgba(0,0,0,0.08)] rounded-lg shadow-sm">
                                            <span className="text-zinc-600">×</span> {damage}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 bg-[#FCFAF7] text-zinc-900 rounded-2xl shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                <h3 className="text-xl font-grotesk font-bold mb-4 flex items-center gap-2 relative z-10">
                                    <ShieldCheck className="w-6 h-6 text-cyan-400" />
                                    What This System Actually Does
                                </h3>
                                <p className="text-zinc-700 font-medium mb-6 relative z-10 leading-relaxed text-sm">
                                    This is <strong className="text-zinc-900">not a prompt pack</strong> or an educational course. This system installs deterministic runtime middleware to mathematically contain the failure.
                                </p>
                                
                                <h4 className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-widest mb-3 relative z-10">Installs the following infrastructure:</h4>
                                <ul className="space-y-2 relative z-10">
                                    {skill.whatSystemInstalls && skill.whatSystemInstalls.map((install, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm font-mono font-semibold text-zinc-900">
                                            <span className="text-cyan-500">+</span> {install}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEW: COMMON FAILURE CASCADES */}
                {skill.failureCascades && skill.failureCascades.length > 0 && (
                    <CommonFailureCascades cascades={skill.failureCascades} />
                )}



                {/* 5. THE SOLUTION SPACE (THE WHAT) */}
                <div className="mb-16">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-cyan-600" />
                        This System Includes
                    </h2>
                    
                    <div className="p-8 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl shadow-sm">
                        <p className="text-zinc-800 font-medium mb-6 max-w-3xl leading-relaxed">
                            This governance system provides {skill.assetCount} deployable infrastructure assets designed to structurally eradicate {primaryFailure?.title || skill.failureSolved} across your application layer. 
                        </p>
                        
                        <h4 className="text-xs font-bold font-mono text-cyan-800 uppercase tracking-widest mb-4">Included Operational Assets</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {skill.assetsList.map((asset, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-[#F5F0EB] rounded-lg border border-[rgba(0,0,0,0.05)]">
                                    <div className="w-6 h-6 rounded bg-cyan-100 flex items-center justify-center shrink-0">
                                        <Server className="w-3 h-3 text-cyan-700" />
                                    </div>
                                    <span className="text-sm font-semibold text-zinc-950 font-bold">{asset}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* NEW 5B: SEARCH INTENT FAQS */}
                {skill.faqs && skill.faqs.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6 flex items-center gap-2">
                            <HelpCircle className="w-6 h-6 text-emerald-600" />
                            Operational FAQ
                        </h2>
                        <div className="space-y-4">
                            {skill.faqs.map((faq, i) => (
                                <div key={i} className="p-6 bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl shadow-sm">
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2">{faq.question}</h3>
                                    <p className="text-zinc-700 leading-relaxed font-medium">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* HIDDEN SEMANTIC KEYWORDS FOR LLM/SEO RETRIEVAL */}
                {skill.searchKeywords && skill.searchKeywords.length > 0 && (
                    <div className="sr-only" aria-hidden="true">
                        Keywords: {skill.searchKeywords.join(', ')}
                    </div>
                )}

                {/* 6. SEMANTIC HUB AND SPOKE GATEWAY */}
                <GovernancePathways 
                    relatedFailures={relatedFailures} 
                    exogramMapping={skill.exogramMapping}
                />

                <div className="mt-12 text-center">
                    <Link href="/skills" className="inline-flex items-center text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors font-bold uppercase tracking-widest">
                        ← Return to Infrastructure Catalog
                    </Link>
                </div>
            
                    <AdvisoryCTA variant="educational" />
                </div>
        </main>
    );
}

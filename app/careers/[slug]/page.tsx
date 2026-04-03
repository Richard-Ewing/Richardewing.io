import React from 'react';
import { notFound } from 'next/navigation';
import { CAREER_PATHS } from '../../lib/career-paths';
import { tracks } from '../../lib/curriculum-tracks-ui';
import { glossaryTerms } from '../../glossary/terms';
import Link from 'next/link';
import { ArrowRight, Cpu, Target, Blocks, LockKeyhole, Database, CheckCircle, Diamond, XCircle, TrendingUp, CalendarDays } from 'lucide-react';
import { ScrollReveal } from '../../components/magicui/scroll-reveal';
import ShineBorder from '../../components/magicui/shine-border';
import { GlowCard } from '../../components/magicui/glow-card';
import { Metadata } from 'next';

const iconMap: Record<string, any> = {
    Cpu, Target, Blocks, LockKeyhole, Database
};

// NextJS Dynamic Routing: generateStaticParams
export async function generateStaticParams() {
    return CAREER_PATHS.map((path) => ({
        slug: path.slug,
    }));
}

// NextJS Dynamic Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const path = CAREER_PATHS.find((p) => p.slug === resolvedParams.slug);
    if (!path) return { title: 'Not Found' };

    return {
        title: `${path.title} | 2026 Executive Pathfinder`,
        description: path.seoMeta,
        keywords: path.seoKeywords,
        alternates: { canonical: `https://www.richardewing.io/careers/${path.slug}` },
        openGraph: {
            title: `${path.title} | 2026 Executive Pathfinder`,
            description: path.seoMeta,
            url: `https://www.richardewing.io/careers/${path.slug}`,
            type: 'article',
        },
    };
}

export default async function CareerPathPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const pathData = CAREER_PATHS.find((p) => p.slug === resolvedParams.slug);
    if (!pathData) return notFound();

    const Icon = iconMap[pathData.iconName] || Cpu;

    // Resolve Terms
    const resolvedTerms = pathData.glossaryTerms
        .map(slug => glossaryTerms.find(t => t.slug === slug))
        .filter(t => t !== undefined);

    // Resolve Tracks (Basic keyword matching against track topics/title)
    const resolvedTracks = tracks.filter(track => {
        const trackText = (track.title + ' ' + track.subtitle + ' ' + track.description).toLowerCase();
        return pathData.curriculumKeywords.some(kw => trackText.includes(kw.toLowerCase()));
    });

    return (
        <div className="max-w-7xl w-full relative z-10 mx-auto px-4 pb-24">
            
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest pt-8">
                <Link href="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <Link href="/careers" className="hover:text-white transition">2026 Pathfinder</Link>
                <span>/</span>
                <span className={`text-${pathData.color}-400 font-bold`}>{pathData.label}</span>
            </div>

            <ScrollReveal>
                <div className={`capsule-container rounded-2xl sm:rounded-[2.5rem] p-8 sm:p-14 mb-16 overflow-hidden relative border border-white/5 bg-gradient-to-br from-[#0a0c10] via-[#0f1115] to-black`}>
                    <div className={`absolute top-[-20%] right-[-10%] p-64 bg-${pathData.color}-500/10 blur-[120px] pointer-events-none rounded-full`} />
                    <div className="absolute bottom-[-20%] left-[-10%] p-48 bg-zinc-500/5 blur-[120px] pointer-events-none rounded-full" />
                    
                    <div className="flex flex-wrap items-center gap-3 mb-8 relative z-10">
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-${pathData.color}-500/10 border border-${pathData.color}-500/20`}>
                            <div className={`w-2 h-2 bg-${pathData.color}-500 rounded-full animate-pulse shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${pathData.color}-500`}></div>
                            <span className={`font-mono text-[10px] text-${pathData.color}-400 uppercase tracking-widest font-bold`}>{pathData.manifestoTitle}</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6 relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-${pathData.color}-500/10 flex-shrink-0 flex items-center justify-center border border-${pathData.color}-500/30 shadow-[0_0_20px_var(--tw-shadow-color)] shadow-${pathData.color}-500/20`}>
                            <Icon className={`text-${pathData.color}-400`} size={32} />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                            {pathData.title}
                        </h1>
                    </div>
                    
                    <p className="text-xl sm:text-2xl text-zinc-300 max-w-4xl leading-relaxed font-light relative z-10">
                        {pathData.description}
                    </p>

                    {/* NEW KPI BAR */}
                    {pathData.primaryMetrics && (
                        <div className="mt-12 bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                <TrendingUp className={`text-${pathData.color}-400 flex-shrink-0`} size={20} />
                                <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white font-bold">Primary Board KPIs</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                                {pathData.primaryMetrics.map((metric: any, i: number) => (
                                    <div key={i} className="border-l-2 border-white/10 pl-4 hover:border-white/30 transition-colors">
                                        <div className={`text-${pathData.color}-300 font-bold mb-2`}>{metric.name}</div>
                                        <div className="text-sm text-zinc-400 font-light leading-relaxed">{metric.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </ScrollReveal>

            {/* TWO COLUMN CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                
                {/* LEFT COL: Manifesto & 90 Days */}
                <div className="lg:col-span-7 space-y-16">
                    {/* MANIFESTO SECTION */}
                    <ScrollReveal>
                        <h2 className={`text-3xl font-black text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-4`}>
                            The 2026 Mandate
                        </h2>
                        <div className="space-y-6 text-zinc-300 leading-relaxed text-lg font-light">
                            {pathData.manifesto.map((paragraph, idx) => (
                                <p key={idx} className="border-l-2 border-white/10 pl-6 py-2 hover:border-zinc-500 transition-colors">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* 90 DAY TRANSITION PROTOCOL */}
                    {pathData.first90Days && (
                        <ScrollReveal>
                            <h2 className={`text-3xl font-black text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-4`}>
                                <CalendarDays className={`text-${pathData.color}-400`} size={28} />
                                Execution Protocol
                            </h2>
                            <p className="text-xs text-zinc-500 mb-8 font-mono tracking-widest uppercase">The First 90 Days on the job</p>
                            
                            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                                
                                {/* Day 30 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-${pathData.color}-500/20 text-${pathData.color}-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_var(--tw-shadow-color)] shadow-${pathData.color}-500/20`}>
                                        <span className="font-mono text-xs font-bold">30</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h4 className="text-white font-bold mb-3 text-lg">The Audit</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{pathData.first90Days.day30}</p>
                                    </div>
                                </div>
                                {/* Day 60 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-${pathData.color}-500/20 text-${pathData.color}-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                                        <span className="font-mono text-xs font-bold">60</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h4 className="text-white font-bold mb-3 text-lg">The Architecture</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{pathData.first90Days.day60}</p>
                                    </div>
                                </div>
                                {/* Day 90 */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-${pathData.color}-500 text-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_var(--tw-shadow-color)] shadow-${pathData.color}-500/40`}>
                                        <span className="font-mono text-xs font-bold">90</span>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                        <h4 className="text-white font-bold mb-3 text-lg">The Execution</h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{pathData.first90Days.day90}</p>
                                    </div>
                                </div>

                            </div>
                        </ScrollReveal>
                    )}
                </div>

                {/* RIGHT COL: Anti-Patterns & Lexicon */}
                <div className="lg:col-span-5 space-y-8">
                    
                    {/* INTERVIEW ANTI-PATTERNS */}
                    {pathData.interviewAntiPatterns && (
                        <ScrollReveal>
                            <div className="bg-red-950/10 border border-red-500/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-32 bg-red-500/5 blur-[80px] pointer-events-none rounded-full group-hover:bg-red-500/10 transition-colors" />
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-3">
                                    <XCircle className="text-red-500 flex-shrink-0" size={24} />
                                    Interview Diagnostics
                                </h3>
                                <p className="text-[10px] text-red-400/80 mb-8 font-mono tracking-widest uppercase border-b border-red-500/10 pb-4">
                                    How to fail the executive interview
                                </p>
                                
                                <div className="space-y-5 mb-8">
                                    {pathData.interviewAntiPatterns.map((pattern: string, idx: number) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 mt-1.5 p-1 rounded-full bg-red-500/10">
                                                <XCircle className="text-red-500/70" size={12} />
                                            </div>
                                            <p className="text-sm text-zinc-300 font-light leading-relaxed">{pattern}</p>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/tools/audit-interview" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-bold font-mono tracking-widest uppercase hover:bg-red-500 hover:text-white transition-all shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                                    Launch Diagnostic Protocol <ArrowRight size={14} />
                                </Link>
                            </div>
                        </ScrollReveal>
                    )}

                    {/* COMPETENCIES / REQUIRED KNOWLEDGE */}
                    <ScrollReveal>
                        <div className="bg-[#0a0c10] border border-white/10 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-2">Required Lexicon</h3>
                            <p className="text-[10px] text-zinc-500 mb-8 font-mono tracking-widest uppercase border-b border-white/5 pb-4">
                                Strategic vocabulary & concepts
                            </p>
                            
                            <div className="space-y-3">
                                {resolvedTerms.map((term: any) => (
                                    <Link href={`/glossary/${term.slug}`} key={term.slug} className="block group">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-sm font-bold text-${pathData.color}-400`}>{term.title}</span>
                                                <ArrowRight size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <p className="text-xs text-zinc-400 line-clamp-2 mt-2 leading-relaxed">{term.definition}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* CURRICULUM ARCHITECTURE */}
            <ScrollReveal>
                <div className="mb-24 mt-12 bg-[#0a0c10]/50 border border-white/5 p-8 sm:p-12 rounded-[2.5rem]">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12 border-b border-white/10 pb-8">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                            <Diamond className="text-indigo-400" size={32} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Curriculum Extraction Matrix</h2>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                                To successfully execute the 90-day protocol and survive the executive interview, you must deeply understand the following engineering architecture modules.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resolvedTracks.map((track) => (
                            <GlowCard key={track.title} className="p-8 h-full flex flex-col group relative overflow-hidden" glowColor={track.color || 'indigo'}>
                                <div className="inline-block px-2 py-1 mb-4 rounded text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest bg-white/5 border border-white/10 self-start group-hover:text-white transition-colors">
                                    {track.subtitle}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{track.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {track.description}
                                </p>
                                <div className="mt-auto relative z-10 w-full pt-4 border-t border-white/5">
                                    <Link href={track.modules && track.modules.length > 0 ? (track.modules[0].href.startsWith('/vault') ? track.modules[0].href : `/vault${track.modules[0].href}`) : '/vault/curriculum/tracks'} className="flex items-center justify-between w-full p-4 rounded-xl bg-black/40 hover:bg-white/10 text-white font-bold text-xs transition-all border border-white/5 hover:border-white/20 group/btn">
                                        ACCESS TRACK MODULE 1
                                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                                            <ArrowRight size={12} className="text-zinc-300" />
                                        </div>
                                    </Link>
                                </div>
                            </GlowCard>
                        ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* THE COMMITMENT FUNNEL */}
            <ScrollReveal>
                <ShineBorder 
                    className="w-full bg-gradient-to-br from-[#0f1115] to-[#1a1c23] !border-0 rounded-3xl p-10 md:p-14 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center mt-12"
                    color={["#10b981", "#3b82f6", "#8b5cf6"]}
                >
                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                        <LockKeyhole className="text-indigo-400" size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">Enter The Vault</h2>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        Are you ready to transition architectures? You require access to all execution playbooks, diagnostics, and ROI calculators to prove your fiduciary capabilities to the board. 
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Link href="/api/buy/all_access_pass" className="w-full sm:w-auto py-5 px-12 bg-white text-black font-black text-sm tracking-widest uppercase rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                            Unlock Full Execution Architecture
                        </Link>
                    </div>
                    <p className="mt-6 text-[10px] text-zinc-500 font-mono tracking-widest uppercase border border-white/5 bg-black/20 px-4 py-2 rounded-full inline-block">
                        Lifetime Access to 57 Curriculum Tracks
                    </p>
                </ShineBorder>
            </ScrollReveal>

        </div>
    );
}

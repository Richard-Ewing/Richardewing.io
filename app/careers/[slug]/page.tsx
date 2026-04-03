import React from 'react';
import { notFound } from 'next/navigation';
import { CAREER_PATHS } from '../../lib/career-paths';
import { tracks } from '../../lib/curriculum-tracks-ui';
import { glossaryTerms } from '../../glossary/terms';
import Link from 'next/link';
import { ArrowRight, Cpu, Target, Blocks, LockKeyhole, Database, CheckCircle, Diamond } from 'lucide-react';
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
                    
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-${pathData.color}-500/10 border border-${pathData.color}-500/20`}>
                            <div className={`w-2 h-2 bg-${pathData.color}-500 rounded-full animate-pulse shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${pathData.color}-500`}></div>
                            <span className={`font-mono text-[10px] text-${pathData.color}-400 uppercase tracking-widest font-bold`}>{pathData.manifestoTitle}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-${pathData.color}-500/10 flex items-center justify-center border border-${pathData.color}-500/30 shadow-[0_0_20px_var(--tw-shadow-color)] shadow-${pathData.color}-500/20`}>
                            <Icon className={`text-${pathData.color}-400`} size={32} />
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-[0.9]">
                            {pathData.title}
                        </h1>
                    </div>
                    
                    <p className="text-xl sm:text-2xl text-zinc-300 mb-8 max-w-4xl leading-relaxed font-light">
                        {pathData.description}
                    </p>
                </div>
            </ScrollReveal>

            {/* MANIFESTO SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                <div className="lg:col-span-7 space-y-6">
                    <ScrollReveal>
                        <h2 className={`text-3xl font-black text-white mb-8 border-b border-white/10 pb-4`}>
                            The 2026 <span className={`text-${pathData.color}-400`}>Manifesto</span>
                        </h2>
                        <div className="space-y-6 text-zinc-300 leading-relaxed text-lg font-light">
                            {pathData.manifesto.map((paragraph, idx) => (
                                <p key={idx} className="border-l-2 border-white/10 pl-6 py-2 hover:border-zinc-500 transition-colors">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* COMPETENCIES / REQUIRED KNOWLEDGE */}
                <div className="lg:col-span-5">
                    <ScrollReveal>
                        <div className="bg-[#0a0c10] border border-white/10 rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-xl font-bold text-white mb-2">Required Lexicon</h3>
                            <p className="text-sm text-zinc-500 mb-8">You cannot orchestrate this architecture if you do not understand the economics underlying it.</p>
                            
                            <div className="space-y-4">
                                {resolvedTerms.map((term: any) => (
                                    <Link href={`/glossary/${term.slug}`} key={term.slug} className="block group">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-zinc-500/50 transition-all">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-sm font-bold text-${pathData.color}-400`}>{term.title}</span>
                                                <ArrowRight size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <p className="text-xs text-zinc-400 line-clamp-2">{term.definition}</p>
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
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Diamond className="text-indigo-400" size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">Curriculum Extraction Matrix</h2>
                            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest mt-1">Directly associated architecture modules from The Vault</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {resolvedTracks.map((track) => (
                            <GlowCard key={track.title} className="p-8 h-full flex flex-col group relative overflow-hidden" glowColor={track.color || 'indigo'}>
                                <div className="inline-block px-2 py-1 mb-3 rounded text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest bg-white/5 border border-white/10 self-start">
                                    {track.subtitle}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{track.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    {track.description}
                                </p>
                                <div className="mt-auto space-y-3 relative z-10 w-full pt-4">
                                    <Link href={`/vault${track.modules && track.modules.length > 0 ? track.modules[0].href : '/curriculum/tracks'}`} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all border border-white/10 hover:border-white/30">
                                        Explore Track Details
                                        <ArrowRight size={14} className="text-zinc-400" />
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
                    className="w-full bg-gradient-to-br from-[#0f1115] to-[#1a1c23] !border-0 rounded-3xl p-10 md:p-14 shadow-2xl backdrop-blur-xl flex flex-col items-center text-center"
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
                        <Link href="/api/buy/all_access_pass" className="w-full sm:w-auto py-4 px-10 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                            Unlock Full Execution Architecture
                        </Link>
                    </div>
                    <p className="mt-6 text-xs text-zinc-500 font-mono tracking-widest uppercase">Includes absolute access to all 30 Curriculum Tracks</p>
                </ShineBorder>
            </ScrollReveal>

        </div>
    );
}

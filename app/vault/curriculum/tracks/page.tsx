import type { Metadata } from 'next';
import Link from 'next/link';
import TrackAccordion from '@/app/components/TrackAccordion';
import CurriculumDirectoryGrid from '@/app/components/client/CurriculumDirectoryGrid';
import { tracks } from '@/app/lib/curriculum-tracks-ui';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import ShineBorder from '@/app/components/magicui/shine-border';
import BlurIn from '@/app/components/magicui/blur-in';
import { BorderBeam } from '@/app/components/magicui/border-beam';

export const metadata: Metadata = {
    title: 'The Engineering Execution Vault — 57 Economics Tracks',
    description: 'Fifty-seven curriculum tracks for mastering product economics: Core Engineering, Data Pipelines, AI Paradigms, Security, Leadership, UI/UX, TPM, Cloud F...',
    keywords: ['product economics curriculum', 'engineering economics course', 'AI economics training', 'R&D capital management', 'technical debt certification', 'engineering leadership course', 'DevOps economics', 'security economics', 'cloud finops', 'AI agent economics'],
    alternates: { canonical: 'https://www.richardewing.io/vault/curriculum/tracks' },
    openGraph: { title: 'The Engineering Execution Vault', description: 'Master product economics across fifty-seven specialized tracks.', url: 'https://www.richardewing.io/vault/curriculum/tracks', type: 'website' },
};
const colorMap: Record<string, string> = { cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5', emerald: 'border-emerald-500/30 bg-emerald-500/5', amber: 'border-amber-500/30 bg-amber-500/5', orange: 'border-orange-500/30 bg-orange-500/5', pink: 'border-pink-500/30 bg-pink-500/5', red: 'border-red-500/30 bg-red-500/5', sky: 'border-sky-500/30 bg-sky-500/5', indigo: 'border-indigo-500/30 bg-indigo-500/5', rose: 'border-rose-500/30 bg-rose-500/5', teal: 'border-teal-500/30 bg-teal-500/5', lime: 'border-lime-500/30 bg-lime-500/5', fuchsia: 'border-fuchsia-500/30 bg-fuchsia-500/5', blue: 'border-blue-500/30 bg-blue-500/5' };
const textMap: Record<string, string> = { cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400', amber: 'text-amber-400', orange: 'text-orange-400', pink: 'text-pink-400', red: 'text-red-400', sky: 'text-sky-400', indigo: 'text-indigo-400', rose: 'text-rose-400', teal: 'text-teal-400', lime: 'text-lime-400', fuchsia: 'text-fuchsia-400', blue: 'text-blue-400' };

export default async function CurriculumTracksPage() {
    const { userId } = await auth();
    let completedModuleIds: string[] = [];

    if (userId) {
        try {
            const { data } = await supabaseAdmin
                .from('user_content_progress')
                .select('content_id')
                .eq('user_id', userId)
                .eq('is_completed', true);
            if (data) completedModuleIds = data.map(d => d.content_id);
        } catch (e) { console.error('Failed to fetch user progress:', e); }
    }

    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Enterprise Executive HERO */}
                    <div className="text-center mb-16 relative">
                        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none -z-10" />
                        <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                            The Intelligence Division
                        </div>
                        <BlurIn word="The Engineering" className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-1" />
                        <BlurIn word="Execution Vault." className="text-4xl sm:text-6xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-6" />
                        
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                            These aren't courses. These are 57 high-fidelity organizational blueprints spanning engineering economics, AI architectures, B2B SaaS, and C-Suite career trajectories.
                        </p>
                        
                        <div className="flex items-center justify-center gap-8 mt-6">
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">57</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">Sovereign Tracks</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">450+</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-1">Deep Modules</div>
                            </div>
                            <div className="text-center bg-purple-500/10 px-4 py-2 rounded-lg border border-purple-500/20">
                                <div className="text-xl font-mono font-bold text-purple-400">$29</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-purple-500 mt-1">Lifetime Pass</div>
                            </div>
                        </div>
                    </div>

                    {/* METHODOLOGY STEERING UPSELL - $5k/mo Tier 3 Interstitial */}
                    <div className="mb-16 relative group cursor-pointer">
                        <Link href="/advisory">
                            <ShineBorder className="bg-zinc-950/80 p-0 overflow-hidden" color={["#8b5cf6", "#a855f7"]}>
                                <BorderBeam size={200} duration={12} delay={9} borderWidth={1.5} colorFrom="#8b5cf6" colorTo="#ec4899" />
                                <div className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                                            Tier-3 Corporate Advisory
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">Require organizational alignment?</h3>
                                        <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                                            The Vault Pass grants your engineering floor access to the raw blueprints. But adoption requires execution. By securing a <strong>$5,000/mo Methodology Steering</strong> retainer, I will personally integrate specific curriculum tracks into your SDLC through bi-weekly VPE ops and middle-management synchronization.
                                        </p>
                                        <div className="text-xs font-mono font-bold text-purple-400 hover:text-purple-300 transition-colors">
                                            SECURE STEERING RETAINER →
                                        </div>
                                    </div>
                                    <div className="md:w-64 w-full h-full flex flex-col items-center justify-center bg-black/50 rounded-xl border border-white/5 p-6">
                                        <div className="text-3xl font-mono text-white mb-1">$5k<span className="text-sm text-zinc-500">/mo</span></div>
                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">Retained Execution</div>
                                    </div>
                                </div>
                            </ShineBorder>
                        </Link>
                    </div>

                    <CurriculumDirectoryGrid>
                        {/* 1. Foundations (Tracks 1-4) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-widest font-bold">Core Executive Tracks</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(0, 4).map((track, i) => (
                                    <TrackAccordion key={`core-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 2. Architectures (Tracks 5-14) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-violet-500 uppercase tracking-widest font-bold">Specialized Architectures</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(4, 14).map((track, i) => (
                                    <TrackAccordion key={`arch-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 3. Mega Trends (Tracks 23-30) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-sky-500 uppercase tracking-widest font-bold">Hyper-Niche Meta-Trends (2025/2026)</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(22, 30).map((track, i) => (
                                    <TrackAccordion key={`mega-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 4. Industry Verticals (Tracks 51-55) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-pink-500 uppercase tracking-widest font-bold">Industry-Specific Markets</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(50, 55).map((track, i) => (
                                    <TrackAccordion key={`industry-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 5. Operations (Tracks 18-22, 31-35) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-amber-500 uppercase tracking-widest font-bold">Core Software & Operations</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {[...tracks.slice(17, 22), ...tracks.slice(30, 35)].map((track, i) => (
                                    <TrackAccordion key={`ops-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 6. Leadership & Career (Tracks 36-41, 56-57) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-orange-500 uppercase tracking-widest font-bold">Career Trajectory & Leadership</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {[...tracks.slice(35, 41), ...tracks.slice(55, 57)].map((track, i) => (
                                    <TrackAccordion key={`leadership-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 7. Corporate IT (Tracks 42-50) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-zinc-300 uppercase tracking-widest font-bold">Old School & Corporate IT Economics</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(41, 50).map((track, i) => (
                                    <TrackAccordion key={`oldschool-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 8. Free Resources (Tracks 15-17) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-emerald-500/30 flex-grow"></div>
                                <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest font-bold">Tactical Playbooks</h2>
                                <div className="h-px bg-emerald-500/30 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(14, 17).map((track, i) => (
                                    <TrackAccordion key={`free-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>
                    </CurriculumDirectoryGrid>

                    {/* MASSIVE ADVISORY TIER 3 CTA */}
                    <div className="mt-20 pt-16 border-t border-white/5">
                        <div className="rounded-[2.5rem] bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 p-10 sm:p-16 border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[100px] pointer-events-none rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 blur-[100px] pointer-events-none rounded-full" />
                            
                            <h2 className="text-3xl sm:text-5xl font-grotesk font-bold tracking-tighter text-white mb-6 relative z-10">
                                Stop Buying Courses.<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Start Deploying Systems.</span>
                            </h2>
                            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
                                Give your team the $29 Vault Pass. Place me on retainer to ensure they actually execute the architectural frameworks. Let's build a sovereign engineering culture.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                <Link href="/advisory" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-white text-black hover:bg-purple-400 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                    Secure $5k/mo Steering Capacity
                                </Link>
                                <Link href="/vault" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-black/50 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-colors">
                                    Unlock $29 Vault Pass
                                </Link>
                            </div>
                            <div className="mt-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest relative z-10">
                                Currently accepting 2 corporate steering retainers for Q2.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

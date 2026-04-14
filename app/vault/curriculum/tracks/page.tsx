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
    title: 'The Product Economics Academy — 18 Authority Tracks',
    description: 'Eighteen high-fidelity curriculum tracks for mastering product economics, AI financial modeling, leadership, career capital, M&A integration, and executive governance — built by a Product Economist with published authority in CIO.com and Built In.',
    keywords: ['product economics academy', 'product economics curriculum', 'AI economics training', 'R&D capital management', 'technical debt quantification', 'engineering leadership course', 'cloud finops', 'AI pricing strategy', 'career economics', 'CTO training', 'M&A integration', 'vendor economics', 'developer experience', 'remote team economics', 'ai agent economics', 'leadership training'],
    alternates: { canonical: 'https://www.richardewing.io/vault/curriculum/tracks' },
    openGraph: { title: 'The Product Economics Academy', description: 'Master the business of building across eighteen authority tracks.', url: 'https://www.richardewing.io/vault/curriculum/tracks', type: 'website' },
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
                        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none -z-10" />
                        <div className="text-[10px] font-mono text-purple-600 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
                            Product Economics Academy
                        </div>
                        <BlurIn word="The Product Economics" className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-900 mb-1" />
                        <BlurIn word="Academy." className="text-4xl sm:text-6xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6" />
                        
                        <p className="text-lg text-zinc-800 max-w-2xl mx-auto mb-8 leading-relaxed">
                            These aren&apos;t courses. These are 23 deep-authority curriculum tracks built from published frameworks in CIO.com and Built In — spanning product economics, AI agents, leadership, career capital, M&A integration, and executive governance.
                        </p>
                        
                        <div className="flex items-center justify-center gap-8 mt-6">
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-zinc-900">23</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 mt-1">Authority Tracks</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-zinc-900">293</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-700 mt-1">Deep Modules</div>
                            </div>
                            <div className="text-center bg-purple-50 px-4 py-2 rounded-lg border border-purple-200">
                                <div className="text-xl font-mono font-bold text-purple-700">$149</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-purple-500 mt-1">Per Track</div>
                            </div>
                            <div className="text-center bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-200">
                                <div className="text-xl font-mono font-bold text-indigo-700">$799</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-500 mt-1">All 23 Tracks</div>
                            </div>
                        </div>
                    </div>

                    {/* ADVISORY UPSELL */}
                    <div className="mb-16 relative group cursor-pointer">
                        <Link href="/advisory">
                            <ShineBorder className="bg-white p-0 overflow-hidden shadow-lg" color={["#7c3aed", "#8b5cf6"]}>
                                <BorderBeam size={200} duration={12} delay={9} borderWidth={1.5} colorFrom="#7c3aed" colorTo="#ec4899" />
                                <div className="p-8 relative z-10 flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-1">
                                        <div className="text-[10px] font-mono text-purple-600 uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                                            Enterprise Advisory
                                        </div>
                                        <h3 className="text-2xl font-bold text-zinc-900 mb-3">Need organizational implementation?</h3>
                                        <p className="text-sm text-zinc-800 leading-relaxed mb-4">
                                            The curriculum gives your team the frameworks. Advisory ensures they deploy them. I integrate these economic models directly into your SDLC through executive-level coaching and bi-weekly ops alignment.
                                        </p>
                                        <div className="text-xs font-mono font-bold text-purple-600 hover:text-purple-500 transition-colors">
                                            EXPLORE ADVISORY →
                                        </div>
                                    </div>
                                    <div className="md:w-64 w-full h-full flex flex-col items-center justify-center bg-purple-50 rounded-xl border border-purple-100 p-6">
                                        <div className="text-3xl font-mono text-zinc-900 mb-1">Advisory</div>
                                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center">Strategic Partnership</div>
                                    </div>
                                </div>
                            </ShineBorder>
                        </Link>
                    </div>

                    <CurriculumDirectoryGrid>
                        {/* 1. Engineering Economics Foundations (Tracks 1-4) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                                <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-widest font-bold">Engineering Economics Foundations</h2>
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(0, 4).map((track, i) => (
                                    <TrackAccordion key={`core-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 2. AI, Cloud & Agent Economics (Tracks 5-11, 19-21) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                                <h2 className="text-sm font-mono text-violet-500 uppercase tracking-widest font-bold">AI, Cloud & Agent Economics</h2>
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(4, 11).map((track, i) => (
                                    <TrackAccordion key={`ai-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                                {/* AI Agent Tracks 19-21 */}
                                {tracks.slice(18, 21).map((track, i) => (
                                    <TrackAccordion key={`agent-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 3. Career Capital & Leadership (Tracks 12-15, 17, 22) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                                <h2 className="text-sm font-mono text-amber-500 uppercase tracking-widest font-bold">Career Capital & Leadership</h2>
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(11, 14).map((track, i) => (
                                    <TrackAccordion key={`career-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                                {/* Remote Teams Track 15 */}
                                {tracks[14] && <TrackAccordion key="career-remote" track={tracks[14]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* DX Economics Track 17 */}
                                {tracks[16] && <TrackAccordion key="career-dx" track={tracks[16]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Strategic Leadership Track 22 */}
                                {tracks[21] && <TrackAccordion key="career-leadership" track={tracks[21]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                            </div>
                        </div>

                        {/* 4. Executive & Board Economics (Selected executive tracks + 16, 18, 23) */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                                <h2 className="text-sm font-mono text-indigo-500 uppercase tracking-widest font-bold">Executive & Board Economics</h2>
                                <div className="h-px bg-zinc-300 flex-grow"></div>
                            </div>
                            <p className="text-sm text-zinc-800 mb-8 text-center italic">Board reporting, EBITDA translation, M&A leadership, and technical debt at the balance sheet level — curated for senior leaders and aspiring C-suite.</p>
                            <div className="space-y-6">
                                {/* Track 4: Capstone & Applied Practice */}
                                {tracks[3] && <TrackAccordion key="exec-capstone" track={tracks[3]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 9: Tech Debt as Financial Liability */}
                                {tracks[8] && <TrackAccordion key="exec-techdebt" track={tracks[8]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 10: AI Due Diligence */}
                                {tracks[9] && <TrackAccordion key="exec-dd" track={tracks[9]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 13: Engineering-to-Executive */}
                                {tracks[12] && <TrackAccordion key="exec-e2e" track={tracks[12]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 16: M&A Integration */}
                                {tracks[15] && <TrackAccordion key="exec-ma" track={tracks[15]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 18: Vendor & Contract Economics */}
                                {tracks[17] && <TrackAccordion key="exec-vendor" track={tracks[17]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                                {/* Track 23: Executive Presence & Board Leadership */}
                                {tracks[22] && <TrackAccordion key="exec-presence" track={tracks[22]} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />}
                            </div>
                        </div>
                    </CurriculumDirectoryGrid>

                    {/* BOTTOM CTA */}
                    <div className="mt-20 pt-16 border-t border-zinc-200">
                        <div className="rounded-[2.5rem] bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-10 sm:p-16 border border-purple-100 text-center relative overflow-hidden shadow-lg">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/30 blur-[100px] pointer-events-none rounded-full" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 blur-[100px] pointer-events-none rounded-full" />
                            
                            <h2 className="text-3xl sm:text-5xl font-grotesk font-bold tracking-tighter text-zinc-900 mb-6 relative z-10">
                                Stop Guessing at ROI.<br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Start Proving It.</span>
                            </h2>
                            <p className="text-lg text-zinc-800 max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
                                Every module teaches you to connect work to business outcomes. $149 per track. $799 for everything. Lifetime access.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                <Link href="/advisory" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-purple-700 text-white hover:bg-purple-600 transition-colors shadow-lg">
                                    Explore Advisory
                                </Link>
                                <Link href="/vault" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 transition-colors shadow-sm">
                                    Unlock $799 Full Curriculum
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

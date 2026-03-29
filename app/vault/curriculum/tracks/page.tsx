import type { Metadata } from 'next';
import Link from 'next/link';
import TrackAccordion from '@/app/components/TrackAccordion';
import CurriculumTabs from '@/app/components/client/CurriculumTabs';
import { tracks } from '@/app/lib/curriculum-tracks-ui';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export const metadata: Metadata = {
    title: 'Product Economics Curriculum — 400 Modules, 40 Tracks | Richard Ewing',
    description: 'Forty curriculum tracks for mastering product economics: Core Engineering, Data Pipelines, AI Paradigms, Security, Leadership, UI/UX, TPM, Cloud FinOps, and Career Progressions. 400 comprehensive modules.',
    keywords: ['product economics curriculum', 'engineering economics course', 'AI economics training', 'R&D capital management', 'technical debt certification', 'engineering leadership course', 'DevOps economics', 'security economics', 'cloud finops', 'AI agent economics'],
    alternates: { canonical: 'https://www.richardewing.io/curriculum/tracks' },
    openGraph: { title: 'Product Economics Curriculum — 400 Modules, 40 Tracks', description: 'Master product economics across forty specialized tracks.', url: 'https://www.richardewing.io/curriculum/tracks', type: 'website' },
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
                    <div className="text-center mb-16">
                        <div className="text-xs font-mono text-violet-500 uppercase tracking-widest mb-4">Curriculum — 400 Modules</div>
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            Forty Paths to{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Mastery</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            From engineering metrics to AI economics to security, leadership, and startup economics. 400 modules, 1,200+ lessons, each with hands-on framework reviews. 500+ glossary definitions underpin every module.
                        </p>
                        <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">400</div>
                                <div className="text-xs text-zinc-500">Modules</div>
                            </div>

                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">1,200+</div>
                                <div className="text-xs text-zinc-500">Lessons</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">500+</div>
                                <div className="text-xs text-zinc-500">Glossary Terms</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-grotesk font-bold text-white">5</div>
                                <div className="text-xs text-zinc-500">Free Tools</div>
                            </div>
                        </div>
                    </div>

                    <CurriculumTabs>
                        {/* 1. Foundations */}
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

                        {/* 2. Architectures */}
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

                        {/* 3. Mega Trends */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-pink-500 uppercase tracking-widest font-bold">Hyper-Niche Meta-Trends (2025/2026)</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(17, 30).map((track, i) => (
                                    <TrackAccordion key={`mega-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 4. Operations */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-amber-500 uppercase tracking-widest font-bold">Core Software & Operations</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(30, 35).map((track, i) => (
                                    <TrackAccordion key={`ops-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 5. Leadership */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-orange-500 uppercase tracking-widest font-bold">Engineering Leadership & Promotion Trajectories</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(35, 40).map((track, i) => (
                                    <TrackAccordion key={`leadership-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 6. Corporate IT */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-white/10 flex-grow"></div>
                                <h2 className="text-sm font-mono text-zinc-300 uppercase tracking-widest font-bold">Old School & Corporate IT Economics</h2>
                                <div className="h-px bg-white/10 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(40, 50).map((track, i) => (
                                    <TrackAccordion key={`oldschool-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>

                        {/* 7. Free Resources */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-emerald-500/30 flex-grow"></div>
                                <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest font-bold">Free Resources & Playbooks</h2>
                                <div className="h-px bg-emerald-500/30 flex-grow"></div>
                            </div>
                            <div className="space-y-6">
                                {tracks.slice(14, 17).map((track, i) => (
                                    <TrackAccordion key={`free-${i}`} track={track} colorMap={colorMap} textMap={textMap} serverCompletedModuleIds={completedModuleIds} />
                                ))}
                            </div>
                        </div>
                    </CurriculumTabs>

                    {/* CTA */}
                    <div className="mt-16 text-center">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12">
                            <h2 className="text-3xl font-grotesk font-bold text-white mb-4">Ready to Go Deeper?</h2>
                            <p className="text-zinc-400 max-w-xl mx-auto mb-8">Our curriculum gives you the frameworks. Our advisory gives you the implementation. Book a session to apply these concepts to your specific organization.</p>
                            <div className="flex items-center justify-center gap-4 flex-wrap">
                                <Link href="/advisory" className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold hover:opacity-90 transition-opacity">Book Advisory Session</Link>
                                <Link href="/tools/pdi" className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-violet-500/30 transition-colors font-bold">Try Free Tools →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

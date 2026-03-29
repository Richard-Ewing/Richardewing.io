import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getModule, getAllModuleSlugs, type CurriculumModule } from '@/lib/curriculum-data';

// generateStaticParams removed to allow dynamic auth() rendering at request time

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;
    const mod = getModule(slug.join('/'));
    if (!mod) return { title: 'Module Not Found' };
    return {
        title: `${mod.moduleId}: ${mod.title} | Curriculum | Richard Ewing`,
        description: mod.description,
        alternates: { canonical: `https://www.richardewing.io/curriculum/tracks/${slug.join('/')}` },
    };
}

import { auth } from '@clerk/nextjs/server';
import PayGate from '@/app/components/PayGate';

import ProgressCompleteButton from '@/app/components/ProgressCompleteButton';

function ModuleCard({ mod, hasAccess, showPreview }: { mod: CurriculumModule, hasAccess: boolean, showPreview: boolean }) {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/curriculum/tracks" className="hover:text-cyan-400">Tracks</Link>
                        <span>/</span>
                        <span className="hover:text-cyan-400">{mod.trackName}</span>
                        <span>/</span>
                        <span className="text-cyan-400 font-bold">{mod.moduleId}</span>
                    </div>

                    <div className="mb-10">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-3">{mod.trackName}</div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                            {mod.moduleId}:{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{mod.title}</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl">{mod.description}</p>
                        <div className="flex items-center gap-4 mt-4">
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{mod.lessons.length} Lessons</span>
                            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">~45 min</span>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-white mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-300">
                            {mod.takeaways.map((t, i) => (
                                <li key={i} className="flex items-start gap-2"><span className="text-cyan-400 mt-1">✓</span> {t}</li>
                            ))}
                        </ul>
                    </div>

                    <PayGate 
                        moduleTitle={mod.title} 
                        moduleId={mod.moduleId} 
                        trackName={mod.trackName} 
                        totalLessons={mod.lessons.length}
                        hasAccess={hasAccess}
                        showPreview={showPreview}
                        nextHref={mod.nextHref}
                        productId={mod.productId}
                        bundleId={mod.bundleId}
                    >
                        {mod.lessons.map((lesson, i) => (
                            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden mb-8 last:mb-0">
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">{i + 1}</span>
                                        </div>
                                        <h2 className="text-xl font-grotesk font-bold text-white">{lesson.title}</h2>
                                    </div>
                                    <p className="text-zinc-400 mb-6">{lesson.content}</p>
                                    <div className="space-y-3 mb-6">
                                        {lesson.details.map((d, j) => (
                                            <div key={j} className="rounded-xl bg-black/20 border border-white/5 p-5">
                                                <div className="text-sm font-bold text-white mb-1">{d.metric}</div>
                                                <p className="text-xs text-zinc-500 mb-2">{d.description}</p>
                                                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
                                        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">📝 Exercise</div>
                                        <p className="text-sm text-zinc-300">{lesson.exercise}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        <ProgressCompleteButton moduleId={mod.moduleId} nextHref={mod.nextHref} />
                    </PayGate>
                </div>
            </div>
        </main>
    );
}

export default async function DynamicModulePage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const mod = getModule(slug.join('/'));
    if (!mod) notFound();
    
    // Auth check for Stripe Access
    const { userId, sessionClaims } = await auth();
    // @ts-ignore - publicMetadata comes from Clerk session tokens
    const metadata: any = sessionClaims?.metadata || {};
    const hasSubscription = metadata.has_yearly_subscription === true;
    const unlockedItems = (metadata.unlocked_items as string[]) || [];

    // Bypass PayGate for Track 15 (Free Playbooks) and Track 17 (Comparisons). Track 16 remains paid.
    const isExplicitlyFreeTrack = (slug[0] === 'guides' && mod.moduleId.startsWith('15-')) || slug[0] === 'comparisons';

    const hasAccess = isExplicitlyFreeTrack || (!!userId && (
        hasSubscription || 
        unlockedItems.includes(`module_${mod.moduleId}`) || 
        unlockedItems.includes(`module_track_${slug[0]}`) || 
        unlockedItems.includes(`module_${slug[0]}`)
    ));

    // ONLY show free preview for the very first module of the entire platform: Track 1 (CTO), Module 1 (1-1)
    // Removed the "first module of every track" leak.
    const isFreePreviewModule = mod.moduleId === '1-1';

    return <ModuleCard mod={mod} hasAccess={hasAccess} showPreview={isFreePreviewModule} />;
}


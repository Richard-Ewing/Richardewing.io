import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { getModule, getAllModuleSlugs, type CurriculumModule } from '@/lib/curriculum-data';

// generateStaticParams removed to allow dynamic auth() rendering at request time

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;
    const mod = getModule(slug.join('/'));
    if (!mod) return { title: `Module Not Found: ${slug.join('/')}`, description: `Curriculum module ${slug.join('/')} not found.` };
    const cleanModTitle = mod.title.length > 25 ? mod.title.slice(0, 24) + '…' : mod.title;
    return {
        title: `${mod.moduleId}: ${cleanModTitle}`,
        description: mod.description,
        robots: {
            index: true,
            follow: true
        },
        alternates: { canonical: `https://www.richardewing.io/vault/curriculum/tracks/${slug.join('/')}` },
        openGraph: {
            title: `${mod.moduleId}: ${mod.title} | Curriculum | Richard Ewing`,
            description: mod.description,
            url: `https://www.richardewing.io/vault/curriculum/tracks/${slug.join('/')}`,
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${mod.moduleId}: ${mod.title} | Curriculum | Richard Ewing`,
            description: mod.description,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

import { articles } from '@/app/lib/data';

import { auth } from '@clerk/nextjs/server';
import PayGate from '@/app/components/PayGate';
import CurriculumQuiz from '@/app/components/curriculum/CurriculumQuiz';
import ActionChecklist from '@/app/components/curriculum/ActionChecklist';

import ProgressCompleteButton from '@/app/components/ProgressCompleteButton';
import ModuleStepper from '@/app/components/client/ModuleStepper';
import ToolEmbed from '@/app/components/client/ToolEmbed';
import SemanticText from '@/app/components/SemanticText';

import StructuredData, { generateCourseSchema } from '@/app/components/seo/StructuredData';
import ProgrammaticAnswersRelated from '@/components/ProgrammaticAnswersRelated';
import AdvisoryCTA from '@/components/AdvisoryCTA';

function ModuleCard({ mod, hasAccess, showPreview, aiContent, fullSlug }: { mod: CurriculumModule, hasAccess: boolean, showPreview: boolean, aiContent?: any, fullSlug: string }) {
    return (
        <main className="pt-20">
            <StructuredData data={generateCourseSchema(mod.title, mod.description, 'Richard Ewing', `https://www.richardewing.io/vault/curriculum/tracks/${fullSlug}`)} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                        <Link href="/vault/curriculum/tracks" className="hover:text-cyan-900 font-extrabold font-semibold">Tracks</Link>
                        <span>/</span>
                        <span className="hover:text-cyan-900 font-extrabold font-semibold">{mod.trackName}</span>
                        <span>/</span>
                        <span className="text-cyan-900 font-extrabold">{mod.moduleId}</span>
                    </div>

                    <div className="mb-10">
                        {(() => {
                            const trackNumber = parseInt(mod.moduleId.split('-')[0], 10);
                            const supportsFramework = [2, 5, 6, 7, 8, 11, 24].includes(trackNumber)
                                ? 'AI Unit Economics'
                                : 'Production AI Governance';
                            return (
                                <>
                                    <div className="text-xs font-bold font-mono text-cyan-500 uppercase tracking-widest mb-3">
                                        {mod.trackName}
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-900 mb-4">
                                        {mod.moduleId}:{' '}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600">{mod.title}</span>
                                    </h1>
                                    <p className="text-lg text-zinc-950 font-bold max-w-2xl">{mod.description}</p>
                                    <div className="flex flex-wrap items-center gap-3 mt-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-50 text-cyan-900 font-extrabold border border-cyan-200">{mod.lessons.length} Lessons</span>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-50 text-emerald-900 font-extrabold border border-emerald-200">~45 min</span>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-purple-50 text-purple-900 font-extrabold border border-purple-200">Supports Framework: {supportsFramework}</span>
                                    </div>
                                </>
                            );
                        })()}
                    </div>

                    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-8 mb-12">
                        <h2 className="text-lg font-grotesk font-bold text-zinc-900 mb-4">🎯 What You&apos;ll Learn</h2>
                        <ul className="space-y-2 text-zinc-900">
                            {mod.takeaways.map((t, i) => (
                                <li key={i} className="flex items-start gap-2"><span className="text-cyan-900 font-extrabold mt-1">✓</span> {t}</li>
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
                        lessons={mod.lessons}
                        status={mod.status}
                    >
                        {aiContent && typeof aiContent === 'object' ? (
                            <ModuleStepper parsedContent={aiContent} hasAccess={hasAccess}>
                                {mod.embeddedTool && (
                                    <div className="border border-cyan-500/20 bg-zinc-50 rounded-3xl p-6 lg:p-12 mb-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-500/10 text-cyan-900 font-extrabold font-semibold border-b border-l border-cyan-500/20 text-xs font-bold font-medium font-mono uppercase tracking-widest rounded-bl-lg">Interactive Execution Module</div>
                                        <ToolEmbed toolId={mod.embeddedTool} />
                                    </div>
                                )}
                                <ProgressCompleteButton moduleId={mod.moduleId} nextHref={mod.nextHref} />
                            </ModuleStepper>
                        ) : aiContent ? (
                            <>
                                <div className="prose prose-zinc max-w-none ai-content" dangerouslySetInnerHTML={{ __html: aiContent as string }} />
                                {mod.embeddedTool && (
                                    <div className="border border-cyan-500/20 bg-zinc-50 rounded-3xl p-6 lg:p-12 mt-12 mb-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-500/10 text-cyan-900 font-extrabold font-semibold border-b border-l border-cyan-500/20 text-xs font-bold font-medium font-mono uppercase tracking-widest rounded-bl-lg">Interactive Execution Module</div>
                                        <ToolEmbed toolId={mod.embeddedTool} />
                                    </div>
                                )}
                                <ProgressCompleteButton moduleId={mod.moduleId} nextHref={mod.nextHref} />
                            </>
                        ) : (
                            <>
                                {mod.lessons.map((lesson, i) => (
                                    <div key={i} className="rounded-2xl border border-zinc-400 bg-white overflow-hidden mb-8 last:mb-0">
                                        <div className="p-8">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 border border-zinc-400 flex items-center justify-center">
                                                    <span className="text-xs font-bold text-zinc-900">{i + 1}</span>
                                                </div>
                                                <h2 className="text-xl font-grotesk font-bold text-zinc-900">{lesson.title}</h2>
                                            </div>
                                            <div className="space-y-4 mb-6">
                                                {Array.isArray(lesson.content) ? (
                                                    lesson.content.map((block, bIdx) => (
                                                        <p key={bIdx} className="text-zinc-950 font-bold leading-relaxed text-[15px]">
                                                            <SemanticText text={block} />
                                                        </p>
                                                    ))
                                                ) : (
                                                    <p className="text-zinc-950 font-bold leading-relaxed text-[15px]">
                                                        <SemanticText text={lesson.content} />
                                                    </p>
                                                )}
                                            </div>

                                            {lesson.details && lesson.details.length > 0 && (
                                                <div className="space-y-3 mb-6">
                                                    {lesson.details.map((d, j) => (
                                                        <div key={j} className="rounded-xl bg-zinc-50 border border-zinc-400 p-5 relative overflow-hidden group">
                                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                            <div className="text-sm font-semibold font-bold text-zinc-900 mb-1">{d.metric}</div>
                                                            <p className="text-xs font-bold text-zinc-900 font-bold mb-2">{d.description}</p>
                                                            <div className="text-xs font-bold font-medium font-mono text-cyan-500 uppercase tracking-widest">{d.benchmark}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {lesson.exercise && (
                                                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mt-8">
                                                    <div className="text-xs font-bold font-mono text-emerald-900 font-extrabold uppercase tracking-widest mb-2">📝 Exercise</div>
                                                    <p className="text-sm font-semibold text-zinc-900 font-medium">{lesson.exercise}</p>
                                                </div>
                                            )}

                                            {lesson.checklist && lesson.checklist.length > 0 && (
                                                <ActionChecklist id={`${mod.moduleId}-lesson-${i}`} items={lesson.checklist} />
                                            )}

                                            {lesson.quiz && (
                                                <CurriculumQuiz quiz={lesson.quiz} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                                {mod.embeddedTool && (
                                    <div className="border border-cyan-500/20 bg-zinc-50 rounded-3xl p-6 lg:p-12 mb-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-500/10 text-cyan-900 font-extrabold font-semibold border-b border-l border-cyan-500/20 text-xs font-bold font-medium font-mono uppercase tracking-widest rounded-bl-lg">Interactive Execution Module</div>
                                        <ToolEmbed toolId={mod.embeddedTool} />
                                    </div>
                                )}
                                <ProgressCompleteButton moduleId={mod.moduleId} nextHref={mod.nextHref} />
                            </>
                        )}
                    </PayGate>

                    <ProgrammaticAnswersRelated seed={mod.moduleId} maxCount={2} />

                    {mod.relatedArticles && mod.relatedArticles.length > 0 && (
                        <div className="mt-16 border-t border-cyan-500/10 pt-12">
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-900 mb-6">Related Thought Leadership</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {mod.relatedArticles.map((slug) => {
                                    const article = articles.find(a => a.slug === slug);
                                    if (!article) return null;
                                    const href = article.externalUrl || article.legacyUrl || `/articles/${article.slug}`;
                                    return (
                                        <Link key={slug} href={href} className="block p-5 rounded-xl border border-zinc-400 bg-zinc-50 hover:bg-cyan-50 hover:border-cyan-300 transition-all group">
                                            <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mb-2 group-hover:text-cyan-900 font-extrabold">{article.source}</div>
                                            <h3 className="text-zinc-900 font-bold mb-2 group-hover:text-cyan-900 font-extrabold transition-colors">{article.title}</h3>
                                            <p className="text-zinc-950 font-bold text-sm font-semibold line-clamp-2">{article.description}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )}

                    <AdvisoryCTA variant="educational" termTitle={mod.title} />
                </div>
            </div>
        </main>
    );
}

import fs from 'fs';
import path from 'path';

export default async function DynamicModulePage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const mod = getModule(slug.join('/'));
    if (!mod) permanentRedirect('/vault/curriculum/tracks');
    
    // Auth check for Stripe Access
    const { userId, sessionClaims } = await auth();
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

    // Unlock Lesson 1 of EVERY module universally to drive high conversion to the PayGate.
    const isFreePreviewModule = true;

    let aiContent = null;
    let mappedLessons = mod.lessons; // Default to static lessons

    try {
        const jsonPath = path.join(process.cwd(), 'app', 'content', 'parsed', `${mod.moduleId}.json`);
        const htmlPath = path.join(process.cwd(), 'app', 'content', 'modules', `${mod.moduleId}.html`);
        
        if (fs.existsSync(jsonPath)) {
            aiContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            if (aiContent && typeof aiContent === 'object' && Array.isArray(aiContent.lessons)) {
                // Map the JSON AI generated structure to the expected `CurriculumModule` lesson structure for the PayGate
                mappedLessons = aiContent.lessons.map((l: any) => ({
                    title: l.title,
                    content: 'Interactive Module Section.',
                }));
            }
        } else if (fs.existsSync(htmlPath)) {
            aiContent = fs.readFileSync(htmlPath, 'utf8');
        }
    } catch (e) {
        // Silently fallback if content directory or file doesn't exist
    }

    // Pass the unified mappedLessons override
    return <ModuleCard mod={{ ...mod, lessons: mappedLessons }} hasAccess={hasAccess} showPreview={isFreePreviewModule} aiContent={aiContent} fullSlug={slug.join('/')} />;
}

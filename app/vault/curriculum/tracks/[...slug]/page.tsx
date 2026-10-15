import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { getModule, getAllModuleSlugs, type CurriculumModule } from '@/lib/curriculum-data';
export async function generateStaticParams() {
    return getAllModuleSlugs().map(slug => ({
        slug: slug.split('/')
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;
    const mod = getModule(slug.join('/'));
    if (!mod) return { title: `Module Not Found: ${slug.join('/')}`, description: `Curriculum module ${slug.join('/')} not found.` };
    const titleStr = `${mod.title} | Curriculum`;

    const metaDescription = (() => {
        let desc = mod.description.trim().replace(/\s+/g, ' ');
        if (!desc.endsWith('.')) desc += '.';
        if (desc.length >= 140 && desc.length <= 158) return desc;
        if (desc.length > 158) return desc.slice(0, 155) + '...';

        const trackName = mod.trackName || 'Enterprise AI';
        const candidateSuffixes = [
            ` Master ${trackName} and deterministic systems architecture with executive frameworks. Written for CTOs and CFOs.`,
            ` Master ${trackName} and deterministic systems architecture with executive frameworks for engineering leaders.`,
            ` Master ${trackName} and deterministic systems architecture with executive frameworks.`,
            ` Master ${trackName} with executive diagnostics, benchmarks, and audit frameworks.`,
            ` Master ${trackName} with practical executive frameworks for engineering leaders.`,
            ` Master ${trackName} with executive frameworks for CTOs and CFOs.`,
            ` Master ${trackName} with practical executive frameworks.`,
            ` Forensic analysis and frameworks by Richard Ewing.`,
            ` Master ${trackName} with executive frameworks.`,
            ` Executive frameworks by Richard Ewing.`,
            ` Frameworks by Richard Ewing.`
        ];
        for (const suffix of candidateSuffixes) {
            const combined = desc + suffix;
            if (combined.length >= 140 && combined.length <= 158) {
                return combined;
            }
        }
        const fallback = `${desc} Master ${trackName} with executive frameworks by Richard Ewing.`;
        return fallback.length > 158 ? fallback.slice(0, 155) + '...' : fallback;
    })();

    return {
        title: titleStr,
        description: metaDescription,
        robots: {
            index: mod.status !== 'waitlist' && Array.isArray(mod.lessons) && mod.lessons.length > 0,
            follow: true
        },
        alternates: { canonical: `https://www.richardewing.io/vault/curriculum/tracks/${slug.join('/')}` },
        openGraph: {
            title: `${mod.title} | Curriculum | Richard Ewing`,
            description: metaDescription,
            url: `https://www.richardewing.io/vault/curriculum/tracks/${slug.join('/')}`,
            type: 'article',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${mod.title} | Curriculum | Richard Ewing`,
            description: metaDescription,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

import { articles } from '@/app/lib/data';
import { RESEARCH_CORPUS, type CorpusArticle } from '@/app/lib/research-corpus';
import { GooglePreferredBadge } from '@/app/components/GooglePreferredBadge';

function getCurriculumRelatedResearch(mod: CurriculumModule): CorpusArticle[] {
    const trackNumber = parseInt(mod.moduleId.split('-')[0], 10);
    const modTitle = mod.title.toLowerCase();
    const trackName = mod.trackName.toLowerCase();
    
    // 1. Check explicit matches from mod.relatedArticles
    const explicitMatches: CorpusArticle[] = [];
    if (mod.relatedArticles && mod.relatedArticles.length > 0) {
        for (const rel of mod.relatedArticles) {
            const cleanRel = rel.replace(/^\/blog\//, '').replace(/^\/articles\//, '');
            const foundInCorpus = RESEARCH_CORPUS.find(a => 
                a.id === rel || 
                a.id === cleanRel ||
                a.url.toLowerCase().includes(cleanRel.toLowerCase()) || 
                a.title.toLowerCase().includes(cleanRel.toLowerCase())
            );
            if (foundInCorpus && !explicitMatches.some(m => m.id === foundInCorpus.id)) {
                explicitMatches.push(foundInCorpus);
            }
        }
    }

    // 2. Dynamic matching from RESEARCH_CORPUS based on topic & domain
    const dynamicMatches = RESEARCH_CORPUS.filter(art => {
        if (explicitMatches.some(m => m.id === art.id)) return false;
        
        // Exact keyword matching in title or thesis
        const keywords = [
            'frontier model', 'prompt injection', 'semantic caching', 'copilot', 
            'context loss', 'coordination tax', 'vibe coding', 'technical debt', 
            'cogs', 'slm', 'governance', 'persistence', 'review queue', 
            'innovation tax', 'kill switch', 'capitalization', 'insolvency'
        ];
        for (const kw of keywords) {
            if (modTitle.includes(kw) && (art.title.toLowerCase().includes(kw) || art.thesis.toLowerCase().includes(kw))) {
                return true;
            }
        }

        // Domain affinity by track number
        if ([2, 5, 6, 7, 8, 11, 24].includes(trackNumber)) {
            return art.domain === 'AI Economics' || art.domain === 'Software Economics';
        }
        if ([19, 21, 22, 23, 25, 26].includes(trackNumber) || trackName.includes('governance') || trackName.includes('security')) {
            return art.domain === 'AI Governance';
        }
        if ([1, 3, 4, 9, 12, 13, 14, 18, 20].includes(trackNumber) || trackName.includes('engineering') || trackName.includes('leadership')) {
            return art.domain === 'Engineering Leadership' || art.domain === 'Product Leadership';
        }
        return false;
    });

    const combined = [...explicitMatches, ...dynamicMatches];
    return combined.slice(0, 4);
}

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
    const relatedResearch = getCurriculumRelatedResearch(mod);

    return (
        <main className="pt-20">
            <StructuredData data={generateCourseSchema(mod.title, mod.description, 'Richard Ewing', `https://www.richardewing.io/vault/curriculum/tracks/${fullSlug}`)} />
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-[var(--muted,#66716a)] uppercase tracking-widest">
                    <Link href="/vault/curriculum/tracks" className="hover:text-[var(--forest,#29473b)] transition-colors">Tracks</Link>
                    <span>/</span>
                    <span className="hover:text-[var(--forest,#29473b)] transition-colors">{mod.trackName}</span>
                    <span>/</span>
                    <span className="text-[var(--forest,#29473b)]">{mod.moduleId}</span>
                </div>

                <div className="mb-10 pb-8 border-b border-[var(--line,rgba(36,51,43,0.16))]">
                    {(() => {
                        const trackNumber = parseInt(mod.moduleId.split('-')[0], 10);
                        const supportsFramework = [2, 5, 6, 7, 8, 11, 24].includes(trackNumber)
                            ? 'AI Unit Economics'
                            : 'Production AI Governance';
                        return (
                            <>
                                <div className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-3">
                                    {mod.trackName}
                                </div>
                                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[var(--ink,#1e2924)] mb-4 leading-tight">
                                    {mod.moduleId}: {mod.title}
                                </h1>
                                <p className="text-lg text-zinc-700 leading-relaxed font-sans max-w-2xl">{mod.description}</p>
                                <div className="flex flex-wrap items-center gap-3 mt-5">
                                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--paper2,#ebe7dc)] text-[var(--ink,#1e2924)] border border-[var(--line,rgba(36,51,43,0.12))]">{mod.lessons.length} Lessons</span>
                                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">~45 min</span>
                                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white text-zinc-700 border border-[var(--line,rgba(36,51,43,0.12))]">Framework: {supportsFramework}</span>
                                </div>
                            </>
                        );
                    })()}
                </div>

                {/* 5-Step Sovereign Pipeline Trace */}
                <div className="rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-white p-6 sm:p-7 mb-8 shadow-sm">
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--line,rgba(36,51,43,0.1))]">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--gold,#b77a35)] bg-[var(--paper2,#ebe7dc)] px-2.5 py-1 rounded border border-[var(--line,rgba(36,51,43,0.12))]">
                            Sovereign Asset Pipeline Trace
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">
                            Research &rarr; Implementation
                        </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs font-sans">
                        <div className="p-3 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))]">
                            <div className="text-[9px] font-mono text-[var(--gold,#b77a35)] uppercase font-bold">1. Research</div>
                            <div className="text-[var(--ink,#1e2924)] font-bold truncate text-[11px] mt-1">
                                <a href="#foundational-research" className="hover:underline text-[var(--forest,#29473b)]">
                                    {relatedResearch.length > 0 ? `${relatedResearch.length} Studies` : 'Corpus Backed'}
                                </a>
                            </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))]">
                            <div className="text-[9px] font-mono text-[var(--gold,#b77a35)] uppercase font-bold">2. Concept</div>
                            <div className="text-[var(--ink,#1e2924)] font-bold truncate text-[11px] mt-1">
                                <Link href="/concepts" className="hover:underline text-[var(--forest,#29473b)]">132+ Ontology</Link>
                            </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))]">
                            <div className="text-[9px] font-mono text-[var(--gold,#b77a35)] uppercase font-bold">3. Framework</div>
                            <div className="text-[var(--ink,#1e2924)] font-bold truncate text-[11px] mt-1">
                                {parseInt(mod.moduleId.split('-')[0], 10) <= 11 ? 'AI Unit Economics' : 'Systems Governor'}
                            </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))]">
                            <div className="text-[9px] font-mono text-[var(--gold,#b77a35)] uppercase font-bold">4. Diagnostic</div>
                            <div className="text-[var(--ink,#1e2924)] font-bold truncate text-[11px] mt-1">
                                {mod.embeddedTool ? (
                                    <Link href={`/tools/${mod.embeddedTool}`} className="hover:underline text-[var(--forest,#29473b)]">
                                        {mod.embeddedTool.toUpperCase()} Proving Ground
                                    </Link>
                                ) : 'PDI / APER Engine'}
                            </div>
                        </div>
                        <div className="p-3 rounded-xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.12))] col-span-2 sm:col-span-1">
                            <div className="text-[9px] font-mono text-[var(--gold,#b77a35)] uppercase font-bold">5. Implementation</div>
                            <div className="text-[var(--ink,#1e2924)] font-bold truncate text-[11px] mt-1">
                                <Link href="/services" className="hover:underline text-[var(--forest,#29473b)]">Exogram / Advisory</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-[var(--paper2,#ebe7dc)] p-6 sm:p-8 mb-10">
                    <h2 className="text-xl font-serif font-bold text-[var(--ink,#1e2924)] mb-4">What You&apos;ll Learn</h2>
                    <ul className="space-y-2.5 text-zinc-800 font-sans text-sm sm:text-base">
                        {mod.takeaways.map((t, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="text-[var(--forest,#29473b)] font-bold mt-0.5">&bull;</span>
                                <span>{t}</span>
                            </li>
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

                    {/* Step 1 of Sovereign Asset Engine: Foundational Research & Empirical Studies */}
                    {relatedResearch.length > 0 && (
                        <div id="foundational-research" className="mt-16 border-t border-cyan-500/10 pt-12">
                            <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                                <div>
                                    <div className="text-xs font-mono font-bold text-cyan-600 uppercase tracking-widest mb-1">
                                        Step 1 of Sovereign Asset Engine &bull; Primary Research
                                    </div>
                                    <h2 className="text-2xl font-grotesk font-bold text-zinc-900">
                                        Foundational Research &amp; Empirical Studies
                                    </h2>
                                </div>
                                <Link 
                                    href="/research/publications"
                                    className="text-xs font-mono font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 uppercase tracking-wider"
                                >
                                    Explore Full Corpus ({RESEARCH_CORPUS.length} Works) &rarr;
                                </Link>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {relatedResearch.map((pub) => (
                                    <a
                                        key={pub.id}
                                        href={pub.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-5 rounded-xl border border-zinc-300 bg-zinc-50 hover:bg-cyan-50/60 hover:border-cyan-400 transition-all group shadow-xs"
                                    >
                                        <div className="flex items-center justify-between gap-2 mb-2">
                                            <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-cyan-100 text-cyan-950 uppercase tracking-wider">
                                                {pub.publisher}
                                            </span>
                                            <span className="text-[11px] font-mono text-zinc-500">
                                                {pub.date}
                                            </span>
                                        </div>
                                        <h3 className="text-zinc-950 font-bold mb-2 group-hover:text-cyan-900 transition-colors text-base leading-snug">
                                            {pub.title}
                                        </h3>
                                        <p className="text-zinc-700 text-xs leading-relaxed line-clamp-2">
                                            {pub.thesis}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Google Preferred Source Official Credential */}
                    <GooglePreferredBadge variant="card" className="my-10" />

                    <AdvisoryCTA variant="educational" termTitle={mod.title} />
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
    
    // Bypass PayGate for Track 15 (Free Playbooks) and Track 17 (Comparisons). Track 16 remains paid.
    // Client-side PayGate checks Clerk user subscription for paid tracks dynamically in the browser.
    const isExplicitlyFreeTrack = (slug[0] === 'guides' && mod.moduleId.startsWith('15-')) || slug[0] === 'comparisons';
    const hasAccess = isExplicitlyFreeTrack;

    // Access Lesson 1 of EVERY module universally to drive high conversion to the PayGate.
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

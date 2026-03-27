import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '../terms';
import { autoKeyMetrics, autoMaturityLevels, autoComparisons, autoQuiz, autoDiagram, autoCommonMistakes, autoBestPractices, autoIndustryBenchmarks, autoSpokes, autoCurriculum, autoGuides, autoPremiumTool } from '../auto-enrich';
import RelatedContent from '../../components/RelatedContent';
import GlossaryToolCTA from '../../components/GlossaryToolCTA';
import ShareButtons from '../../components/ShareButtons';
import RetroTerminal from '../../components/RetroTerminal';
import GlossaryQuiz from '../../components/GlossaryQuiz';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return glossaryTerms.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);
    if (!term) return {};
    return {
        title: `What is ${term.title}? | Richard Ewing`,
        description: term.definition.slice(0, 155).replace(/\n/g, ' ') + '...',
        keywords: [
            term.title.toLowerCase(), `what is ${term.title.toLowerCase()}`,
            `${term.title.toLowerCase()} definition`, `${term.title.toLowerCase()} explained`,
            `${term.title.toLowerCase()} guide`, `${term.title.toLowerCase()} checklist`,
            `how to apply ${term.title.toLowerCase()}`, 'Richard Ewing', 'Product Economist',
            ...term.relatedTerms.map(r => r.replace(/-/g, ' ')),
        ],
        alternates: { canonical: `https://www.richardewing.io/glossary/${slug}` },
        openGraph: {
            title: `What is ${term.title}? | Richard Ewing`,
            description: term.definition.slice(0, 155).replace(/\n/g, ' '),
            url: `https://www.richardewing.io/glossary/${slug}`,
            type: 'article',
        },
    };
}

// Auto-generate checklist based on category for terms without explicit checklist
function autoChecklist(category: string, title: string): string[] {
    const checklists: Record<string, string[]> = {
        'Technical Debt & Code Quality': [
            `Identify current ${title} instances in your codebase`,
            `Quantify the monetary impact using PDI framework`,
            `Create a prioritized remediation backlog`,
            `Set measurable reduction targets per quarter`,
            `Report results to leadership using financial language`,
        ],
        'AI & Machine Learning': [
            `Calculate per-request ${title} cost at current volume`,
            `Project costs at 10x and 100x scale`,
            `Identify optimization opportunities (caching, batching, model selection)`,
            `Add monitoring for ${title}-related metrics`,
            `Establish cost alerting thresholds`,
        ],
        'Cloud & Infrastructure': [
            `Audit current ${title} configuration and usage`,
            `Document any technical debt in ${title} implementation`,
            `Benchmark against industry best practices`,
            `Create runbook for ${title}-related incidents`,
            `Schedule quarterly review of ${title} setup`,
        ],
        'Security & Compliance': [
            `Assess current ${title} posture against industry standards`,
            `Identify gaps in ${title} coverage`,
            `Create remediation plan with timelines`,
            `Implement monitoring and alerting for ${title}`,
            `Schedule annual ${title} audit`,
        ],
        'Product Management': [
            `Define success metrics for ${title}`,
            `Map ${title} impact to business outcomes`,
            `Create framework for evaluating ${title} decisions`,
            `Build team alignment around ${title} priorities`,
            `Track and report ${title} metrics monthly`,
        ],
    };
    return checklists[category] || [
        `Assess your organization's current ${title} maturity`,
        `Identify quick wins for ${title} improvement`,
        `Create a 90-day ${title} action plan`,
        `Assign ownership for ${title} initiatives`,
        `Measure and report progress quarterly`,
    ];
}

// Auto-generate how-to-apply based on category
function autoHowToApply(category: string, title: string): string {
    const guides: Record<string, string> = {
        'Technical Debt & Code Quality': `**Step 1: Audit** — Identify where ${title} exists in your systems using static analysis tools and code reviews.\n\n**Step 2: Quantify** — Use the Product Debt Index framework to attach dollar values to each instance of ${title}.\n\n**Step 3: Prioritize** — Rank remediation items by economic impact, not just technical severity.\n\n**Step 4: Execute** — Allocate 15-20% of sprint capacity to addressing ${title} issues.\n\n**Step 5: Measure** — Track improvement over time using the same metrics established in Step 2.`,
        'AI & Machine Learning': `**Step 1: Understand** — Map how ${title} fits into your AI product architecture and cost structure.\n\n**Step 2: Measure** — Use the AUEB calculator to quantify ${title}-related costs per user, per request, and per feature.\n\n**Step 3: Optimize** — Apply common optimization patterns (caching, batching, model downsizing) to reduce ${title} costs.\n\n**Step 4: Monitor** — Set up dashboards tracking ${title} costs in real-time. Alert on anomalies.\n\n**Step 5: Scale** — Ensure your ${title} approach remains economically viable at 10x and 100x current volume.`,
        'SaaS & Metrics': `**Step 1: Define** — Establish clear ${title} measurement methodology across your organization.\n\n**Step 2: Benchmark** — Compare your ${title} against industry standards and top-quartile performers.\n\n**Step 3: Analyze** — Identify the levers that most impact ${title} in your specific business.\n\n**Step 4: Improve** — Create initiatives targeting the highest-impact levers for ${title} improvement.\n\n**Step 5: Report** — Build ${title} into your monthly/quarterly reporting cadence for leadership and investors.`,
    };
    return guides[category] || `**Step 1: Assess** — Evaluate your organization's current relationship with ${title}. Where is it strong? Where are the gaps?\n\n**Step 2: Define Goals** — Set specific, measurable targets for ${title} improvement aligned with business outcomes.\n\n**Step 3: Build Plan** — Create a phased implementation plan with clear milestones and ownership.\n\n**Step 4: Execute** — Implement changes incrementally. Start with high-impact, low-risk improvements.\n\n**Step 5: Iterate** — Measure results, learn from outcomes, and continuously refine your approach to ${title}.`;
}

export default async function GlossaryTermPage({ params }: Props) {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);
    if (!term) return notFound();

    const relatedTermObjects = term.relatedTerms
        .map(r => glossaryTerms.find(t => t.slug === r))
        .filter(Boolean);

    // Auto-link: convert glossary term mentions in text to clickable links
    function autoLink(text: string, currentSlug: string): string {
        let result = text;
        const sortedTerms = [...glossaryTerms]
            .filter(t => t.slug !== currentSlug && t.title.length > 3)
            .sort((a, b) => b.title.length - a.title.length);
        for (const t of sortedTerms) {
            const escaped = t.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b(${escaped})\\b`, 'i');
            if (regex.test(result)) {
                result = result.replace(regex, `<a href="/glossary/${t.slug}" class="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 decoration-cyan-500/30 transition-colors">$1</a>`);
            }
        }
        return result;
    }

    // Reading time estimate
    const wordCount = (term.definition + ' ' + term.whyItMatters + ' ' + (term.howToMeasure || '') + ' ' + (term.howToApply || '')).split(/\s+/).length;
    const readingTime = Math.max(2, Math.ceil(wordCount / 200));

    // TL;DR — first sentence of definition
    const tldr = term.definition.split(/[.!?]\s/)[0] + '.';

    // Get checklist and how-to-apply (explicit or auto-generated)
    const checklist = term.checklist || autoChecklist(term.category, term.title);
    const howToApply = term.howToApply || autoHowToApply(term.category, term.title);
    const keyMetrics = term.keyMetrics && term.keyMetrics.length > 0 ? term.keyMetrics : autoKeyMetrics(term.category, term.title);
    const maturityLevels = term.maturityLevels && term.maturityLevels.length > 0 ? term.maturityLevels : autoMaturityLevels(term.category, term.title);
    const comparisons = term.comparisons && term.comparisons.length > 0 ? term.comparisons : autoComparisons(term.category, term.title);
    const quiz = term.quiz && term.quiz.length > 0 ? term.quiz : autoQuiz(term.category, term.title);
    const diagram = term.diagram || autoDiagram(term.category, term.title);
    const commonMistakes = autoCommonMistakes(term.category, term.title);
    const bestPractices = autoBestPractices(term.category, term.title);
    const industryBenchmarks = autoIndustryBenchmarks(term.category, term.title);
    const spokes = autoSpokes(term.category, term.title, slug);
    const curriculumTracks = autoCurriculum(term.category, term.title, slug);
    const executiveGuides = autoGuides(term.category, term.title, slug);
    const premiumTool = autoPremiumTool(term.category, term.title, slug);

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: term.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `What is ${term.title}?`,
        description: term.definition.slice(0, 155).replace(/\n/g, ' '),
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal', jobTitle: 'Product Economist', sameAs: ['https://linkedin.com/in/richard-ewing-mba', 'https://www.cio.com/author/richard-ewing/'] },
        publisher: { '@type': 'Person', name: 'Richard Ewing' },
        url: `https://www.richardewing.io/glossary/${slug}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.richardewing.io/glossary/${slug}` },
        datePublished: '2025-01-01',
        dateModified: new Date().toISOString().split('T')[0],
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: term.title,
        description: term.definition.slice(0, 300).replace(/\n/g, ' '),
        inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            name: 'Richard Ewing Technology Leadership Glossary',
            url: 'https://www.richardewing.io/glossary',
        },
        url: `https://www.richardewing.io/glossary/${slug}`,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://www.richardewing.io/glossary' },
            { '@type': 'ListItem', position: 3, name: term.title, item: `https://www.richardewing.io/glossary/${slug}` },
        ],
    };

    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `What is ${term.title}?`,
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['article header h1', 'section.tldr-box', 'article section h2', 'article section h3'],
        },
        url: `https://www.richardewing.io/glossary/${slug}`,
    };

    // HowTo schema for the how-to-apply section
    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to Apply ${term.title}`,
        description: `A practical guide to applying ${term.title} in your organization.`,
        step: howToApply.split('\n\n').filter(s => s.startsWith('**Step')).map((s, i) => ({
            '@type': 'HowToStep',
            position: i + 1,
            text: s.replace(/\*\*/g, ''),
        })),
    };

    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                <Link href="/glossary" className="hover:text-cyan-400">Glossary</Link>
                <span>/</span>
                <span className="text-cyan-400 font-bold">{term.title}</span>
            </div>

            <RetroTerminal title={term.title} category={term.category} definition={term.definition} whyItMatters={term.whyItMatters} />

            <article>
                <header className="mb-10 border-b border-white/10 pb-10">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest">{term.category}</div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-gray-500 font-mono">{readingTime} min read</span>
                            <ShareButtons url={`/glossary/${slug}`} title={`What is ${term.title}?`} />
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-4">
                        What is {term.title}?
                    </h1>
                </header>

                {/* TL;DR Box — LLM-citation-friendly summary */}
                <section className="tldr-box mb-10 p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-widest">TL;DR</span>
                    </div>
                    <p className="text-zinc-200 leading-relaxed text-lg">{tldr}</p>
                </section>

                {/* At a Glance — Quick Reference Card */}
                <section className="mb-12 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 p-8">
                    <h2 className="text-xl font-grotesk font-bold text-white mb-4">⚡ {term.title} at a Glance</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-start gap-2"><span className="text-cyan-400 font-bold">📂</span><div><span className="text-zinc-500">Category:</span> <span className="text-white">{term.category}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-cyan-400 font-bold">⏱️</span><div><span className="text-zinc-500">Read Time:</span> <span className="text-white">{readingTime} min</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-cyan-400 font-bold">🔗</span><div><span className="text-zinc-500">Related Terms:</span> <span className="text-white">{term.relatedTerms.length}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-cyan-400 font-bold">❓</span><div><span className="text-zinc-500">FAQs Answered:</span> <span className="text-white">{term.faqs.length}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-cyan-400 font-bold">✅</span><div><span className="text-zinc-500">Checklist Items:</span> <span className="text-white">{checklist.length}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-cyan-400 font-bold">🧪</span><div><span className="text-zinc-500">Quiz Questions:</span> <span className="text-white">{quiz.length}</span></div></div>
                    </div>
                </section>

                {/* Key Metrics Dashboard — always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">📊 Key Metrics &amp; Benchmarks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {keyMetrics.map((m, i) => (
                            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-center">
                                <div className="text-3xl font-grotesk font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">{m.value}</div>
                                <div className="text-sm font-bold text-white mt-2">{m.label}</div>
                                <div className="text-xs text-zinc-500 mt-1">{m.description}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Full Definition */}
                <section className="mb-12">
                    <div className="prose prose-invert prose-lg max-w-none">
                        {term.definition.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-300 leading-relaxed mb-4"
                               dangerouslySetInnerHTML={{ __html: autoLink(p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>'), slug) }}
                            />
                        ))}
                    </div>
                </section>

                {/* Why It Matters */}
                <section className="mb-12 card p-8 border-cyan-500/20">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-4">💡 Why It Matters</h2>
                    <div className="prose prose-invert max-w-none">
                        {term.whyItMatters.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-300 leading-relaxed mb-4">{p}</p>
                        ))}
                    </div>
                </section>

                {/* How to Measure (if explicit) */}
                {term.howToMeasure && (
                    <section className="mb-12 card p-8 border-emerald-500/20">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">📏 How to Measure</h2>
                        <div className="prose prose-invert max-w-none">
                            {term.howToMeasure.split('\n').map((line, i) => (
                                <p key={i} className="text-zinc-300 leading-relaxed mb-2">{line}</p>
                            ))}
                        </div>
                    </section>
                )}

                {/* How to Apply — always rendered */}
                <section className="mb-12 card p-8 border-violet-500/20">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">🛠️ How to Apply {term.title}</h2>
                    <div className="prose prose-invert max-w-none">
                        {howToApply.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-300 leading-relaxed mb-4"
                               dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }}
                            />
                        ))}
                    </div>
                </section>

                {/* Actionable Checklist — always rendered */}
                <section className="mb-12 card p-8 border-emerald-500/20">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">✅ {term.title} Checklist</h2>
                    <div className="space-y-3">
                        {checklist.map((item, i) => (
                            <label key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-emerald-500 w-4 h-4 rounded" />
                                <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Maturity Model — always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">📈 {term.title} Maturity Model</h2>
                    <p className="text-zinc-400 text-sm mb-4">Where does your organization stand? Use this model to assess your current level and identify the next milestone.</p>
                    <div className="space-y-3">
                        {maturityLevels.map((level, i) => {
                            const pct = Math.round(((i + 1) / maturityLevels.length) * 100);
                            const barColor = i < 2 ? 'from-red-500 to-red-400' : i < 4 ? 'from-amber-500 to-yellow-400' : i < 6 ? 'from-emerald-500 to-cyan-400' : 'from-violet-500 to-purple-400';
                            return (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.03] transition-all">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                                    <span className="text-sm font-bold text-white">{i + 1}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-sm font-bold text-white">{level.level}</div>
                                        <div className="text-[10px] font-mono text-zinc-600">{pct}%</div>
                                    </div>
                                    <div className="w-full h-1.5 rounded-full bg-white/5 mb-1.5">
                                        {/* eslint-disable-next-line react/forbid-dom-props */}
                                        <div className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all`} style={{ width: `${pct}%` }} />
                                    </div>
                                    <div className="text-xs text-zinc-500">{level.description}</div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </section>

                {/* Comparison Table — always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">⚔️ Comparisons</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 px-4 text-zinc-500 font-mono uppercase tracking-widest text-xs">{term.title} vs.</th>
                                    <th className="text-left py-3 px-4 text-emerald-400 font-mono uppercase tracking-widest text-xs">{term.title} Advantage</th>
                                    <th className="text-left py-3 px-4 text-amber-400 font-mono uppercase tracking-widest text-xs">Other Approach</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((c, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 px-4 text-white font-medium">{c.vs}</td>
                                        <td className="py-3 px-4 text-emerald-400">{c.advantage}</td>
                                        <td className="py-3 px-4 text-amber-400">{c.disadvantage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Visual Diagram — always rendered */}
                <section className="mb-12 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.03] to-cyan-500/[0.03] overflow-hidden">
                    <div className="px-8 pt-6 pb-4 border-b border-white/5 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                            <span className="text-sm">🔄</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-grotesk font-bold text-white">How It Works</h2>
                            <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Visual Framework Diagram</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="bg-black/40 rounded-xl p-6 font-mono text-sm text-zinc-400 whitespace-pre-line border border-white/5 overflow-x-auto">
                            {diagram}
                        </div>
                    </div>
                </section>

                {/* Common Mistakes — always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">🚫 Common Mistakes to Avoid</h2>
                    <div className="space-y-4">
                        {commonMistakes.map((m, i) => (
                            <div key={i} className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-5">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                        <span className="text-xs font-bold text-red-400">{i + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-bold text-white mb-1">{m.mistake}</div>
                                        <div className="text-xs text-red-400/80 mb-2">⚠️ Consequence: {m.consequence}</div>
                                        <div className="text-xs text-emerald-400/80">✅ Fix: {m.fix}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Best Practices — always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">🏆 Best Practices</h2>
                    <div className="space-y-3">
                        {bestPractices.map((bp, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <span className="text-xs font-bold text-emerald-400">✓</span>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">{bp.practice}</div>
                                    <div className="text-xs text-zinc-500 mt-1">Impact: {bp.impact}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Industry Benchmarks — always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-white mb-6">📊 Industry Benchmarks</h2>
                    <p className="text-zinc-400 text-sm mb-4">How does your organization compare? Use these benchmarks to identify where you stand and where to invest.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 px-4 text-zinc-500 font-mono uppercase tracking-widest text-xs">Industry</th>
                                    <th className="text-left py-3 px-4 text-zinc-500 font-mono uppercase tracking-widest text-xs">Metric</th>
                                    <th className="text-left py-3 px-4 text-red-400 font-mono uppercase tracking-widest text-xs">Low</th>
                                    <th className="text-left py-3 px-4 text-amber-400 font-mono uppercase tracking-widest text-xs">Median</th>
                                    <th className="text-left py-3 px-4 text-emerald-400 font-mono uppercase tracking-widest text-xs">Elite</th>
                                </tr>
                            </thead>
                            <tbody>
                                {industryBenchmarks.map((b, i) => (
                                    <tr key={i} className="border-b border-white/5">
                                        <td className="py-3 px-4 text-white font-medium">{b.industry}</td>
                                        <td className="py-3 px-4 text-zinc-400">{b.metric}</td>
                                        <td className="py-3 px-4 text-red-400">{b.low}</td>
                                        <td className="py-3 px-4 text-amber-400">{b.median}</td>
                                        <td className="py-3 px-4 text-emerald-400">{b.elite}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Hub-and-Spoke SEO Matrix — NEW */}
                <section className="mb-12 mt-16 pt-12 border-t border-white/10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                            <span className="text-xl">🌐</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-grotesk font-bold text-white">Explore the {term.title} Ecosystem</h2>
                            <p className="text-sm font-mono text-cyan-400 mt-1 uppercase tracking-widest">Pillar & Spoke Navigation Matrix</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        {/* Spoke Articles Column */}
                        <div className="card p-6 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent flex flex-col h-full">
                            <h3 className="text-lg font-grotesk font-bold text-white flex items-center gap-2 mb-4">
                                <span className="text-cyan-400">📝</span> Deep-Dive Articles
                            </h3>
                            <div className="space-y-4 flex-1">
                                {spokes.map((s, i) => (
                                    <Link key={i} href={s.url} className="block group">
                                        <div className="text-sm font-bold text-zinc-300 group-hover:text-cyan-400 transition-colors mb-1">{s.title}</div>
                                        <div className="text-xs text-zinc-500 line-clamp-2">{s.description}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Curriculum Column */}
                        <div className="card p-6 border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent flex flex-col h-full">
                            <h3 className="text-lg font-grotesk font-bold text-white flex items-center gap-2 mb-4">
                                <span className="text-violet-400">🎓</span> Curriculum Tracks
                            </h3>
                            <div className="space-y-4 flex-1">
                                {curriculumTracks.map((c, i) => (
                                    <Link key={i} href={c.url} className="block group">
                                        <div className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-1">{c.track}</div>
                                        <div className="text-sm font-bold text-zinc-300 group-hover:text-violet-400 transition-colors mb-1">{c.title}</div>
                                        <div className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white mt-1">Premium Track</div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Executive Guides Column */}
                        <div className="card p-6 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent flex flex-col h-full">
                            <h3 className="text-lg font-grotesk font-bold text-white flex items-center gap-2 mb-4">
                                <span className="text-emerald-400">📄</span> Executive Guides
                            </h3>
                            <div className="space-y-4 flex-1">
                                {executiveGuides.map((g, i) => (
                                    <Link key={i} href={g.url} className="block group">
                                        <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-1">{g.type}</div>
                                        <div className="text-sm font-bold text-zinc-300 group-hover:text-emerald-400 transition-colors">{g.title}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Monetization / Premium Diagnostic Column */}
                        <div className="card p-6 border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-red-500/5 to-transparent relative overflow-hidden flex flex-col h-full">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full" />
                            <h3 className="text-lg font-grotesk font-bold text-white flex items-center gap-2 mb-4 relative z-10">
                                <span className="text-amber-400">{premiumTool.icon}</span> Flagship Advisory
                            </h3>
                            <div className="flex-1 flex flex-col relative z-10">
                                <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-1">{premiumTool.tag}</div>
                                <div className="text-base font-bold text-white mb-2 leading-tight">{premiumTool.name}</div>
                                <div className="text-xs text-zinc-400 mb-6 flex-1">{premiumTool.description}</div>
                                
                                <Link 
                                    href={premiumTool.url} 
                                    className="block w-full text-center py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                                >
                                    Deploy Tool
                                </Link>
                                <div className="text-center mt-2 text-[10px] font-mono text-zinc-500 uppercase tracking-wide">
                                    {premiumTool.price}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* FAQs */}
                {term.faqs.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-6">❓ Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {term.faqs.map((faq, i) => (
                                <div key={i} className="card p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                                    <p className="text-zinc-400">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Interactive Quiz — always rendered */}
                <GlossaryQuiz quiz={quiz} title={term.title} />

                {/* External Resources */}
                {term.resources && term.resources.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">📚 Resources</h2>
                        <div className="space-y-2">
                            {term.resources.map((r, i) => (
                                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors group">
                                    <div>
                                        <div className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{r.title}</div>
                                        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">{r.type}</div>
                                    </div>
                                    <span className="text-xs text-cyan-500">→</span>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* Related Tools */}
                {term.relatedTools && term.relatedTools.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">🔧 Free Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {term.relatedTools.map(tool => (
                                <Link key={tool.url} href={tool.url} className="card p-5 hover:border-cyan-500/50 transition-all group">
                                    <div className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{tool.name}</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-500 mt-2">Try Free →</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Related Terms */}
                {relatedTermObjects.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">🔗 Related Terms</h2>
                        <div className="flex flex-wrap gap-3">
                            {relatedTermObjects.map(rt => rt && (
                                <Link key={rt.slug} href={`/glossary/${rt.slug}`}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all">
                                    {rt.title}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                <GlossaryToolCTA slug={slug} category={term.category} termTitle={term.title} />

                <section className="card p-8 border-cobalt/30 bg-gradient-to-br from-cobalt/10 to-transparent">
                    <h2 className="text-xl font-grotesk font-bold text-white mb-2">Need Expert Help?</h2>
                    <p className="text-zinc-400 mb-4">Richard Ewing is a Product Economist and AI Capital Auditor. He helps companies translate technical complexity into financial clarity.</p>
                    <Link href="/advisory" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cobalt text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                        Book Advisory Call →
                    </Link>
                </section>

                <RelatedContent currentSlug={slug} type="guide" />
            </article>
        </div>
    );
}


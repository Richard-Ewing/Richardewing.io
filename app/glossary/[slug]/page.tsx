import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '../terms';
import { CATEGORY_MAP, KEEP_TERMS } from '../pillarsMapping';
import GovernancePathways from '@/components/semantic/GovernancePathways';
import { autoKeyMetrics, autoMaturityLevels, autoComparisons, autoQuiz, autoDiagram, autoCommonMistakes, autoBestPractices, autoIndustryBenchmarks, autoSpokes, autoCurriculum, autoGuides, autoPremiumTool, autoWhereIsItUsed, autoWhoUsesIt, autoBridge } from '../auto-enrich';
import RelatedContent from '../../components/RelatedContent';
import { DiagnosticBridge } from '../../components/DiagnosticBridge';
import GlossaryToolCTA from '../../components/GlossaryToolCTA';
import ShareButtons from '../../components/ShareButtons';
import RetroTerminal from '../../components/RetroTerminal';
import GlossaryQuiz from '../../components/GlossaryQuiz';
import GlossaryMesh from '../../components/GlossaryMesh';
import ProgrammaticAnswersRelated from '@/components/ProgrammaticAnswersRelated';
import { NewsletterForm } from '../../components/newsletter-form';
import { RESEARCH_CORPUS } from '@/app/lib/research-corpus';
import { GooglePreferredBadge } from '../../components/GooglePreferredBadge';
import EditorialAdSlot from '@/components/monetization/EditorialAdSlot';
import { clampSeoTitle, formatSeoDescription } from '@/app/lib/seo-metadata';
import { EXECUTIVE_MATRICES } from '../executive-matrices';

type Props = { params: Promise<{ slug: string }> };

const GLOSSARY_SEO_OVERRIDES: Record<string, { title: string; description: string; h1Override?: string }> = {
    'calculating-roai': {
        title: 'ROAI Calculator: AI Payback & CFO Formula',
        description: 'Test your AI payback threshold in 60 seconds. Compare token burn, engineering cleanup cost, and real SaaS margin benchmarks in the live CFO calculator.',
    },
    'ic-vs-management-track': {
        title: 'IC vs Management Track: Pay & Levels',
        description: 'Compare Staff & Principal IC vs Engineering Manager pay bands, L5 to L8 scope, promotion gates, and P&L accountability across tech teams.',
        h1Override: 'IC Track vs. Engineering Management Track: Pay & Levels',
    },
    'engineering-levels': {
        title: 'Software Engineer Levels: L3-L8 Pay Guide',
        description: 'Compare L3 to L8 Staff and Principal engineer levels, Level 1 to 4 titles, 2026 pay bands, promotion gates, and architecture scope across tech companies.',
        h1Override: 'Software Engineering Levels & Ranks (Level 1-4 and L3-L8)',
    },
    'ai-unit-economics': {
        title: 'AI Unit Economics: SaaS Margin Benchmarks',
        description: 'See where AI SaaS gross margins break under heavy P99 token usage. Compare real failure thresholds and model your query profitability in the live tool.',
    },
    'model-right-sizing': {
        title: 'Model Right-Sizing: Cut LLM Inference Cost',
        description: 'Cut LLM API spend 60% to 85% by routing routine classification and extraction tasks from frontier models to right-sized small language models.',
    },
    'ai-cost-attribution': {
        title: 'AI Cost Attribution: Token COGS Per Tenant',
        description: 'Track LLM inference spend per customer, feature, and workflow so heavy P99 accounts stop subsidizing negative gross margins across SaaS tiers.',
    },
    'pl-ownership-for-pms': {
        title: 'P&L Ownership for Product Managers Guide',
        description: 'Transition from feature velocity to Product Manager P&L ownership across ARR contribution, AI inference COGS, R&D burn, and net gross margin.',
    },
    'product-pl-ownership': {
        title: 'Product P&L Ownership: Margin & Burn Model',
        description: 'Run a product P&L sheet tying ARR, churn, cloud hosting, LLM token COGS, and capitalized engineering payroll to contribution margin per line.',
    },
    'autonomous-agent-readiness-index': {
        title: 'AARI Definition: Agent Readiness Formula',
        description: 'Measure whether your engineering controls, audit logs, and kill-switches can safely govern autonomous AI agents before production rollout.',
    },
    'inference-dividend-cascade': {
        title: 'Inference Dividend Cascade Definition',
        description: 'Compound AI unit-margin gains by routing routine tasks from frontier APIs to cached local SLMs, cutting token COGS by 60% to 85% at scale.',
    },
    'agentic-roi': {
        title: 'Agentic ROI Definition & Task Economics',
        description: 'Calculate net Agentic ROI per completed task after subtracting retry loops, tool-call latency, human review queues, and error remediation.',
    },
    'frontier-model-economics': {
        title: 'Frontier Model Economics Definition',
        description: 'Compare closed frontier API token pricing against open-weight clusters using task ambiguity, multi-turn token growth, and margin floors.',
    },
    'frontier-model-economics-framework': {
        title: 'Frontier Model Economics Framework Guide',
        description: 'Analyze frontier AI as a moving empirical cost threshold and allocate token budgets between reasoning models and distilled local routers.',
    },
    'technical-insolvency-date': {
        title: 'Technical Insolvency Date Definition',
        description: 'Identify the exact quarter when maintenance drag consumes 100% of engineering payroll capacity and halts net-new product feature delivery.',
    },
    'persistence-vs-authority': {
        title: 'Persistence vs Authority Definition',
        description: 'Separate how long an autonomous AI agent stays running from which production records, ledgers, and APIs it has permission to mutate.',
    },
    'the-transaction-that-succeeds': {
        title: 'The Transaction That Succeeds Definition',
        description: 'Audit silent enterprise AI policy failures where infrastructure monitors stay green while agents issue unapproved discounts or credits.',
    },
    'vibe-coding': {
        title: 'Vibe Coding Definition & Debt Risk Guide',
        description: 'Understand how prompt-generated code speeds up initial demos while compounding hidden review queues, security gaps, and maintenance carry.',
    },
    'section-174-rd-capitalization': {
        title: 'Section 174 R&D Capitalization Guide',
        description: 'Navigate Section 174 tax amortization rules requiring 5-year domestic and 15-year foreign R&D write-offs across software engineering payroll.',
    },
};

export const dynamicParams = false;

export async function generateStaticParams() {
    return glossaryTerms.filter(t => KEEP_TERMS.includes(t.slug)).map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);
    if (!term) return {};

    // If it's not a KEEP term, it will redirect, so no metadata needed
    if (!KEEP_TERMS.includes(term.slug)) {
        return { robots: { index: false, follow: true } };
    }

    const override = GLOSSARY_SEO_OVERRIDES[slug];
    const baseTitle = override
        ? clampSeoTitle(override.title, 42)
        : clampSeoTitle(`${term.title}: Definition & Guide`, 42);
    const metaDescription = override
        ? formatSeoDescription(override.description)
        : formatSeoDescription(term.definition);
    const ogImageUrl = `https://www.richardewing.io/api/og?title=${encodeURIComponent(term.title)}&category=${encodeURIComponent(term.category)}`;

    return {
        title: baseTitle,
        description: metaDescription,
        robots: {
            index: true,
            follow: true
        },
        keywords: [
            term.title.toLowerCase(), `what is ${term.title.toLowerCase()}`,
            `${term.title.toLowerCase()} definition`, `${term.title.toLowerCase()} explained`,
            `${term.title.toLowerCase()} guide`, `${term.title.toLowerCase()} checklist`,
            `how to apply ${term.title.toLowerCase()}`, 'Richard Ewing', 'AI Economist',
            ...term.relatedTerms.map(r => r.replace(/-/g, ' ')),
        ],
        alternates: { canonical: `https://www.richardewing.io/glossary/${slug}` },
        openGraph: {
            title: `${baseTitle} | Richard Ewing`,
            description: metaDescription,
            url: `https://www.richardewing.io/glossary/${slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: term.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${baseTitle} | Richard Ewing`,
            description: metaDescription,
            images: [ogImageUrl],
        }
    };
}

function slugHash(slug: string): number {
    let h = 0;
    for (let i = 0; i < slug.length; i++) {
        h = (h * 31 + slug.charCodeAt(i)) >>> 0;
    }
    return h;
}

// Auto-generate checklist based on category and slug for terms without explicit checklist
function autoChecklist(category: string, title: string, slug = ''): string[] {
    const checklists: Record<string, string[]> = {
        'Technical Debt & Code Quality': [
            `Pull the last 30 days of pull-request reverts tied to ${title} modules`,
            `Convert developer waiting hours on ${title} into hard quarterly payroll dollars via PDI`,
            `Freeze new feature tickets in files where ${title} drives repeat bug escapes`,
            `Reserve 15% to 20% of sprint capacity strictly for isolating or deleting ${title}`,
            `Present cost-to-serve deltas to your CFO and VP of Engineering in dollars rather than story points`,
        ],
        'AI & Machine Learning': [
            `Measure p50 and p90 per-request API cost for ${title} across live production traffic`,
            `Model your invoice exposure at 10x and 100x user load before signing enterprise contracts`,
            `Split simple formatting or routing off frontier models onto fast cached paths for ${title}`,
            `Alert your Engineering Manager whenever ${title} input tokens exceed 4x output tokens`,
            `Put a hard daily spend cap in front of uncached ${title} agent loops`,
        ],
        'Cloud & Infrastructure': [
            `Compare committed database and compute capacity for ${title} against peak 7-day utilization`,
            `Tag every ${title} workload by owning product line so no spend lands in an unowned bucket`,
            `Move predictable baseline load onto reservations before approving scale-up tickets`,
            `Write a 1-page rollback runbook covering who kills runaway ${title} queues at 2am`,
            `Have a Director of Finance review unused capacity charges alongside DevOps once a quarter`,
        ],
        'Security & Compliance': [
            `Check which endpoints touching ${title} actually verify callers fail-closed on empty auth`,
            `Strip sensitive tokens and customer payloads out of logs before any vendor processes ${title}`,
            `Set deterministic CI build checks blocking merges that bypass ${title} boundaries`,
            `Run a 15-minute live permission probe against staging every time ${title} routing changes`,
            `Keep audit logs immutable outside the prompt context so compliance reviews finish cleanly`,
        ],
        'Product Management': [
            `Tie ${title} to one verifiable cash line item: expansion ARR, churn reduction, or cost to serve`,
            `Strip bottom-decile maintenance work costing more than customer revenue around ${title}`,
            `Write acceptance boundaries for ${title} in a short spec before assigning build capacity`,
            `Align Engineering Manager, Product Ops Lead, and Finance on one kill threshold for ${title}`,
            `Audit live adoption after 30 days instead of counting shipped tickets`,
        ],
    };
    if (checklists[category]) return checklists[category];
    const fallbacks: string[][] = [
        [
            `Pull 60 days of billing and incident logs touching ${title} before calling another planning meeting`,
            `Ask your Director of Finance what dollar line item shifts if ${title} fails this quarter`,
            `Name one single Engineering Manager or VP of Operations who owns the kill threshold for ${title}`,
            `Cut duplicate wrappers or manual status sheets sitting around ${title} by half this Friday`,
            `Recheck unit margins 30 days after deployment so vanity activity cannot hide operating loss`,
        ],
        [
            `Check whether ${title} replaces real contractor spend or simply shifts work onto another spreadsheet`,
            `Instrument per-user latency and marginal token or compute cost around ${title} on day one`,
            `Cap blast radius on automated actions tied to ${title} with deterministic pre-execution gates`,
            `Have your CFO sign off on the break-even payback window before hiring more staff around ${title}`,
            `Delete legacy steps that ${title} made obsolete instead of stacking two parallel workflows`,
        ],
        [
            `Read three raw customer support or team escalations involving ${title} rather than relying on summary slides`,
            `Price the engineering maintenance hours burned keeping ${title} running over the last quarter`,
            `Test a single constrained workflow slice for ${title} with measurable baseline numbers first`,
            `Set one automatic alert telling the Product Ops Lead when ${title} slips past target latency or spend`,
            `Verify in production billing logs that promised savings actually landed on the ledger`,
        ],
        [
            `Audit every recurring vendor bill connected to ${title} and cancel unused seats immediately`,
            `Write down the exact condition that proves ${title} is costing more than it earns`,
            `Assign clear directory and database ownership before adding parallel automation around ${title}`,
            `Run a weekly 15-minute check comparing planned payback on ${title} against real cash collected`,
            `Document the plain-English failure mode so on-call engineers never guess during an outage`,
        ],
    ];
    return fallbacks[slugHash(slug || title) % fallbacks.length];
}

// Auto-generate first-person operator how-to steps based on category and slug
function autoHowToApply(category: string, title: string, slug = ''): string {
    const guides: Record<string, string> = {
        'Technical Debt & Code Quality': `**Step 1: Pull the Outage & Rework Receipt** - When I audit ${title} with a VP of Engineering, I skip static scorecards and open the last 90 days of bug escapes and reverted PRs.\n\n**Step 2: Price the Payroll Drag** - Convert engineering hours burned fighting ${title} into loaded payroll dollars via the Product Debt Index so the CFO can see the cash drag.\n\n**Step 3: Freeze High-Friction Modules** - I advise teams to stop shipping low-margin features into brittle ${title} directories until defect rates stabilize.\n\n**Step 4: Fund Bounded Cleanup** - Carve out 15% to 20% of active sprint capacity strictly for refactoring or retiring the highest-cost ${title} modules.\n\n**Step 5: Verify Margin Recovery** - Check two sprints later that change-failure rates and support escalations actually fell instead of merely renaming tickets.`,
        'AI & Machine Learning': `**Step 1: Inspect Real Payload Logs** - First thing I check on any ${title} rollout is raw prompt sizes, tool schema bloat, and retry loops in staging traces.\n\n**Step 2: Build the Per-Request P&L** - Run p50 and p90 inference spend for ${title} through the AUEB calculator against actual subscription revenue.\n\n**Step 3: Strip Expensive Frontier Calls** - I route classification and formatting in ${title} onto lightweight models with prompt caching before scaling traffic.\n\n**Step 4: Wire Hard Spend Breakers** - Add per-tenant quota gates and max-turn limits outside the model prompt so runaway loops cannot drain monthly cash.\n\n**Step 5: Stress-Test 10x Power Users** - Confirm the heaviest 5% of accounts remain profitable on ${title} before letting sales launch unlimited tiers.`,
        'SaaS & Metrics': `**Step 1: Audit Raw Cohort Exports** - Before trusting a slide on ${title}, I pull unsmoothed Stripe billing and churn exports directly from source tables.\n\n**Step 2: Isolate Fake Activity** - Split net cash retention and expansion revenue around ${title} from free trials or vanity click metrics.\n\n**Step 3: Find the Costiest Bottleneck** - Show the Director of Finance and Product Ops Lead which single segment leaks gross margin around ${title}.\n\n**Step 4: Kill Unprofitable Surface Area** - I tell leaders to delete or reprice tiers that consistently lose money on ${title} rather than subsidizing heavy users.\n\n**Step 5: Review Cash Weekly** - Track contribution margin weekly with Finance so ${title} never drifts into silent operating drag.`,
    };
    if (guides[category]) return guides[category];
    const fallbackGuides: string[] = [
        `**Step 1: Start With Raw Spend Logs** - When an executive asks me about ${title}, I never start with a workshop deck; I pull 60 days of vendor bills and escalation tickets.\n\n**Step 2: Tie to One P&L Line** - Ask your CFO or Director of Finance which exact cost or revenue line moves if ${title} works.\n\n**Step 3: Isolate One Owner** - I always assign one Engineering Manager or VP of Operations to hold the production kill switch for ${title}.\n\n**Step 4: Ship One Narrow Boundary** - Launch ${title} against a single team workflow with deterministic logging instead of an open company-wide pilot.\n\n**Step 5: Cut What Fails to Pay Back** - After 30 days, inspect live ledger impact and prune any wrapper tool around ${title} without hard ROI.`,
        `**Step 1: Read Customer Friction First** - What I check first around ${title} is ten unedited support threads, not internal engineering status notes.\n\n**Step 2: Price Current Rework** - Total up contractor fees, support handle time, and wasted seats tied to ${title} this quarter.\n\n**Step 3: Pick a Small Test Slice** - I recommend testing ${title} on one noisy bottleneck where baseline defect rates are already recorded.\n\n**Step 4: Enforce Fail-Closed Checks** - Keep validation rules in deterministic code outside prompts so ${title} behaves reliably when volume spikes.\n\n**Step 5: Audit Net Margin Shift** - Re-open the spreadsheet at day 30 with your Product Ops Lead and double down only where margin expanded.`,
        `**Step 1: Cut Duplicate Plumbing** - Before buying software for ${title}, I inventory every half-used tool already billing the corporate card.\n\n**Step 2: Define the Kill Metric** - Agree with the CEO and CFO on one unmistakable dollar threshold that cancels ${title} if missed.\n\n**Step 3: Wire Direct Ownership** - Give a Platform Engineer explicit file and permission scopes for ${title} instead of shared committees.\n\n**Step 4: Validate Under Real Load** - Replay representative edge cases against ${title} and cap automatic retries to avoid runaway bills.\n\n**Step 5: Lock Gains Into Process** - Once ${title} holds positive unit economics for two sprints, automate weekly reporting directly from billing data.`,
        `**Step 1: Strip Out Busywork** - When I evaluate ${title}, I ask which manual status chore we can delete completely before automating anything.\n\n**Step 2: Verify Unit Cost** - Calculate marginal support, compute, and oversight minutes required every time ${title} runs once in production.\n\n**Step 3: Put Guardrails In Code** - I never leave safety limits for ${title} in a policy doc; put timeouts and permission checks in middleware.\n\n**Step 4: Run a Live Financial Check** - Pair your Engineering Manager with a Finance Lead to trace cash retained from ${title} at day 14 and day 45.\n\n**Step 5: Sunset Legacy Steps** - Turn off the old process as soon as ${title} clears target reliability so the team stops maintaining two paths.`,
    ];
    return fallbackGuides[slugHash(slug || title) % fallbackGuides.length];
}

export default async function GlossaryTermPage({ params }: Props) {
    const { slug } = await params;
    const term = glossaryTerms.find(t => t.slug === slug);
    if (!term) permanentRedirect('/glossary');

    // Consolidate thin and eval pages into pillar pages
    if (!KEEP_TERMS.includes(term.slug)) {
        const pillarSlug = CATEGORY_MAP[term.category] || 'cloud-infrastructure-finops';
        permanentRedirect(`/glossary/pillars/${pillarSlug}#${term.slug}`);
    }

    const relatedTermObjects = term.relatedTerms
        .map(r => glossaryTerms.find(t => t.slug === r))
        .filter(Boolean);

    // Auto-link: convert glossary term mentions in text to clickable links safely outside HTML tags
    function autoLink(text: string, currentSlug: string): string {
        // 1. Convert any markdown links to HTML tags first so their anchor boundaries are preserved
        let processed = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

        const sortedTerms = [...glossaryTerms]
            .filter(t => t.slug !== currentSlug && t.title.length > 3)
            .sort((a, b) => b.title.length - a.title.length);

        const linkedSlugs = new Set<string>();
        let segments = processed.split(/(<[^>]+>)/g);

        for (const t of sortedTerms) {
            if (linkedSlugs.has(t.slug)) continue;
            const escaped = t.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b(${escaped})\\b`, 'i');

            let inAnchor = false;
            let inCode = false;
            let matched = false;

            for (let i = 0; i < segments.length; i++) {
                if (i % 2 === 1) {
                    // HTML tag
                    const tag = segments[i].toLowerCase();
                    if (/^<a\b/.test(tag)) inAnchor = true;
                    else if (tag === '</a>') inAnchor = false;
                    else if (/^<(code|pre)\b/.test(tag)) inCode = true;
                    else if (tag === '</code>' || tag === '</pre>') inCode = false;
                } else {
                    // Plain text outside tags: strictly avoid replacing text inside <a> or <code>/<pre> blocks
                    if (!inAnchor && !inCode && regex.test(segments[i])) {
                        const isKept = KEEP_TERMS.includes(t.slug);
                        const pillarSlug = CATEGORY_MAP[t.category] || 'cloud-infrastructure-finops';
                        const targetUrl = isKept ? `/glossary/${t.slug}` : `/glossary/pillars/${pillarSlug}#${t.slug}`;
                        const replacement = `<a href="${targetUrl}" class="text-cyan-900 font-extrabold font-semibold hover:text-cyan-900 font-extrabold font-semibold underline underline-offset-2 decoration-cyan-500/30 transition-colors">$1</a>`;

                        segments[i] = segments[i].replace(regex, replacement);
                        matched = true;
                        linkedSlugs.add(t.slug);
                        break; // Only link first occurrence
                    }
                }
            }

            if (matched) {
                // Re-split so any newly injected tags are protected from subsequent term replacements
                segments = segments.join('').split(/(<[^>]+>)/g);
            }
        }

        return segments.join('');
    }

    // Reading time estimate
    const wordCount = (term.definition + ' ' + term.whyItMatters + ' ' + (term.howToMeasure || '') + ' ' + (term.howToApply || '')).split(/\s+/).length;
    const readingTime = Math.max(2, Math.ceil(wordCount / 200));

    // TL;DR: first complete sentence (abbreviation-safe)
    const firstSentence = term.definition
        .split(/(?<!\b(?:vs|e\.g|i\.e|Mr|Dr|Inc|Ltd|U\.S))[.!?]\s+/)[0]
        .replace(/\.$/, '')
        .trim();
    const tldr = `${firstSentence}.`;

    // Get checklist and how-to-apply (explicit or auto-generated)
    const checklist = term.checklist || autoChecklist(term.category, term.title, slug);
    const howToApply = term.howToApply || autoHowToApply(term.category, term.title, slug);
    const whereIsItUsed = term.whereIsItUsed || autoWhereIsItUsed(term.category, term.title);
    const whoUsesIt = term.whoUsesIt || autoWhoUsesIt(term.category, term.title);
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
    const diagnosticBridgeProps = autoBridge(term.category, term.title);

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
        description: formatSeoDescription(term.definition),
        author: {
            '@type': 'Person',
            name: 'Richard Ewing',
            url: 'https://www.richardewing.io/about',
            jobTitle: 'Product Economist & AI Capital Auditor',
            sameAs: [
                'https://www.linkedin.com/in/richard-ewing-mba',
                'https://github.com/Richard-Ewing',
                'https://www.cio.com/author/richard-ewing/',
                'https://builtin.com/authors/richard-ewing',
                'https://hackernoon.com/u/richardewing',
                'https://www.mindtheproduct.com/profile/richard-ewing',
                'https://theaieconomist.beehiiv.com/',
                'https://exogram.ai',
            ],
        },
        publisher: { '@type': 'Organization', name: 'Richard Ewing', url: 'https://www.richardewing.io' },
        url: `https://www.richardewing.io/glossary/${slug}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.richardewing.io/glossary/${slug}` },
        datePublished: '2025-01-01',
        dateModified: new Date().toISOString().split('T')[0],
    };

    const definedTermSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: term.title,
        description: term.definition.slice(0, 300).replace(/\s+/g, ' ').trim(),
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

            <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-[var(--muted,#66716a)] uppercase tracking-widest">
                <Link href="/glossary" className="hover:text-[var(--forest,#29473b)] transition-colors">Glossary</Link>
                <span>/</span>
                <span className="text-[var(--forest,#29473b)] truncate">{term.title}</span>
            </div>

            <RetroTerminal title={term.title} category={term.category} definition={term.definition} whyItMatters={term.whyItMatters} />

            <article>
                <header className="mb-10 border-b border-[var(--line,rgba(36,51,43,0.16))] pb-10">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest">{term.category}</div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-zinc-600">{readingTime} min read</span>
                            <ShareButtons url={`/glossary/${slug}`} title={`What is ${term.title}?`} />
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[var(--ink,#1e2924)] mb-4 leading-tight">
                        {GLOSSARY_SEO_OVERRIDES[slug]?.h1Override ?? `What is ${term.title}?`}
                    </h1>
                </header>

                {/* TL;DR Box */}
                <section className="tldr-box mb-10 p-6 sm:p-8 rounded-2xl bg-[var(--paper2,#ebe7dc)] border border-[var(--line,rgba(36,51,43,0.16))]">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest">30-Second Executive Summary</span>
                    </div>
                    <p className="text-[var(--ink,#1e2924)] font-serif italic leading-relaxed text-lg sm:text-xl">&ldquo;{tldr}&rdquo;</p>
                </section>

                {/* At a Glance */}
                <section className="mb-12 rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-white p-6 sm:p-8 shadow-sm">
                    <h2 className="text-xl font-serif font-bold text-[var(--ink,#1e2924)] mb-4">{term.title} at a Glance</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                        <div className="flex items-start gap-2"><span className="text-[var(--forest,#29473b)] font-bold">&bull;</span><div><span className="text-zinc-600">Category:</span> <span className="text-[var(--ink,#1e2924)] font-semibold">{term.category}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-[var(--forest,#29473b)] font-bold">&bull;</span><div><span className="text-zinc-600">Read Time:</span> <span className="text-[var(--ink,#1e2924)] font-semibold">{readingTime} min</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-[var(--forest,#29473b)] font-bold">&bull;</span><div><span className="text-zinc-600">Related Terms:</span> <span className="text-[var(--ink,#1e2924)] font-semibold">{term.relatedTerms.length}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-[var(--forest,#29473b)] font-bold">&bull;</span><div><span className="text-zinc-600">FAQs Answered:</span> <span className="text-[var(--ink,#1e2924)] font-semibold">{term.faqs.length}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-[var(--forest,#29473b)] font-bold">&bull;</span><div><span className="text-zinc-600">Checklist Items:</span> <span className="text-[var(--ink,#1e2924)] font-semibold">{checklist.length}</span></div></div>
                        <div className="flex items-start gap-2"><span className="text-[var(--forest,#29473b)] font-bold">&bull;</span><div><span className="text-zinc-600">Quiz Questions:</span> <span className="text-[var(--ink,#1e2924)] font-semibold">{quiz.length}</span></div></div>
                    </div>
                </section>

                {/* Key Metrics Dashboard */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)] mb-6">Key Metrics &amp; Benchmarks</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {keyMetrics.map((m, i) => (
                            <div key={i} className="rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-[var(--paper2,#ebe7dc)] p-5 text-center">
                                <div className="text-2xl sm:text-3xl font-serif font-bold text-[var(--forest2,#162e26)]">{m.value}</div>
                                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--gold,#b77a35)] mt-2">{m.label}</div>
                                <div className="text-xs text-zinc-600 mt-1 font-sans">{m.description}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Full Definition */}
                <section className="mb-12">
                    <div className="prose prose-zinc prose-lg max-w-none">
                        {term.definition.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-950 font-bold leading-relaxed mb-4"
                               dangerouslySetInnerHTML={{ __html: autoLink(p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-950 font-semibold">$1</strong>'), slug) }}
                            />
                        ))}
                    </div>
                </section>

                {/* Executive Reference Matrix (SSR Semantic Table for Featured Snippets & AI Citation) */}
                {EXECUTIVE_MATRICES[slug] && (
                    <section className="mb-12 rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-white p-6 sm:p-8 shadow-sm">
                        <div className="text-[11px] font-mono font-bold text-[var(--gold,#b77a35)] uppercase tracking-widest mb-2">
                            Executive Reference Schedule
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-[var(--ink,#1e2924)] mb-2">
                            {EXECUTIVE_MATRICES[slug].heading}
                        </h2>
                        <p className="text-sm text-zinc-700 mb-6 leading-relaxed">
                            {EXECUTIVE_MATRICES[slug].caption}
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-[var(--forest2,#162e26)] bg-[var(--paper2,#ebe7dc)]">
                                        {EXECUTIVE_MATRICES[slug].columns.map((col, idx) => (
                                            <th key={idx} scope="col" className="text-left py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider text-[var(--forest2,#162e26)]">
                                                {col}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {EXECUTIVE_MATRICES[slug].rows.map((row, rIdx) => (
                                        <tr key={rIdx} className="border-b border-zinc-200 hover:bg-[#FAF9F6] transition-colors">
                                            {row.map((cell, cIdx) => (
                                                <td key={cIdx} className={`py-3.5 px-4 align-top leading-relaxed ${cIdx === 0 ? 'font-bold text-zinc-950 whitespace-nowrap' : 'text-zinc-800'}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {/* Where Is It Used? */}
                {whereIsItUsed && (
                    <section className="mb-12 card p-8 border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.02] to-transparent">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Where {term.title} Applies in Enterprise Operations</h2>
                        <div className="prose prose-zinc max-w-none">
                            {whereIsItUsed.split('\n\n').map((p, i) => (
                                <p key={i} className="text-zinc-950 font-bold leading-relaxed mb-4">{p}</p>
                            ))}
                        </div>
                    </section>
                )}

                {/* Who Uses It? */}
                {whoUsesIt && (
                    <section className="mb-12 card p-8 border-violet-500/20 bg-gradient-to-br from-violet-500/[0.02] to-transparent">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Who Uses {term.title}</h2>
                        <div className="prose prose-zinc max-w-none">
                            {whoUsesIt.split('\n\n').map((p, i) => (
                                <p key={i} className="text-zinc-950 font-bold leading-relaxed mb-4">{p}</p>
                            ))}
                        </div>
                    </section>
                )}

                {/* Why It Matters */}
                <section className="mb-12 card p-8 border-cyan-500/20">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Why {term.title} Matters to P&amp;L Leaders</h2>
                    <div className="prose prose-zinc max-w-none">
                        {term.whyItMatters.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-950 font-bold leading-relaxed mb-4">{p}</p>
                        ))}
                    </div>
                </section>

                {/* How to Measure (if explicit) */}
                {term.howToMeasure && (
                    <section className="mb-12 card p-8 border-emerald-500/20">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">How to Measure {term.title}</h2>
                        <div className="prose prose-zinc max-w-none">
                            {term.howToMeasure.split('\n').map((line, i) => (
                                <p key={i} className="text-zinc-950 font-bold leading-relaxed mb-2">{line}</p>
                            ))}
                        </div>
                    </section>
                )}

                {/* How to Apply  -  always rendered */}
                <section className="mb-12 card p-8 border-violet-500/20">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">How to Apply {term.title}</h2>
                    <div className="prose prose-zinc max-w-none">
                        {howToApply.split('\n\n').map((p, i) => (
                            <p key={i} className="text-zinc-950 font-bold leading-relaxed mb-4"
                               dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-950 font-semibold">$1</strong>') }}
                            />
                        ))}
                    </div>
                </section>

                {/* Actionable Checklist  -  always rendered */}
                <section className="mb-12 card p-8 border-emerald-500/20">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">{term.title} Checklist</h2>
                    <div className="space-y-3">
                        {checklist.map((item, i) => (
                            <label key={i} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 border border-zinc-400 hover:border-emerald-500/20 transition-colors cursor-pointer group">
                                <input type="checkbox" className="mt-1 accent-emerald-500 w-4 h-4 rounded" />
                                <span className="text-zinc-950 font-bold group-hover:text-zinc-900 transition-colors">{item}</span>
                            </label>
                        ))}
                    </div>
                </section>

                {/* Maturity Model  -  always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">{term.title} Maturity Model</h2>
                    <p className="text-zinc-950 font-bold text-sm font-semibold mb-4">Where does your organization stand? Use this model to assess your current level and identify the next milestone.</p>
                    <div className="space-y-3">
                        {maturityLevels.map((level, i) => {
                            const pct = Math.round(((i + 1) / maturityLevels.length) * 100);
                            const barColor = i < 2 ? 'from-red-500 to-red-400' : i < 4 ? 'from-amber-500 to-yellow-400' : i < 6 ? 'from-emerald-500 to-cyan-400' : 'from-violet-500 to-purple-400';
                            return (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-zinc-400 bg-zinc-50 hover:bg-white/[0.03] transition-all">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-zinc-400 flex items-center justify-center">
                                    <span className="text-sm font-semibold font-bold text-zinc-900">{i + 1}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-sm font-semibold font-bold text-zinc-900">{level.level}</div>
                                        <div className="text-xs font-bold font-medium font-mono text-zinc-950">{pct}%</div>
                                    </div>
                                    <div className="w-full h-1.5 rounded-full bg-white/5 mb-1.5">
                                        <div className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all`} style={{ width: `${pct}%` }} />
                                    </div>
                                    <div className="text-xs font-bold text-zinc-900 font-bold">{level.description}</div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </section>

                {/* Comparison Table  -  always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">{term.title} Comparisons</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-400">
                                    <th className="text-left py-3 px-4 text-zinc-950 font-bold font-mono uppercase tracking-widest text-xs">{term.title} vs.</th>
                                    <th className="text-left py-3 px-4 text-emerald-900 font-extrabold font-semibold font-mono uppercase tracking-widest text-xs">{term.title} Advantage</th>
                                    <th className="text-left py-3 px-4 text-amber-900 font-semibold font-mono uppercase tracking-widest text-xs">Other Approach</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((c, i) => (
                                    <tr key={i} className="border-b border-zinc-400">
                                        <td className="py-3 px-4 text-zinc-950 font-medium">{c.vs}</td>
                                        <td className="py-3 px-4 text-emerald-900 font-extrabold font-semibold">{c.advantage}</td>
                                        <td className="py-3 px-4 text-amber-900 font-semibold">{c.disadvantage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Visual Diagram  -  always rendered */}
                <section className="mb-12 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.03] to-cyan-500/[0.03] overflow-hidden">
                    <div className="px-8 pt-6 pb-4 border-b border-zinc-400 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                            <span className="text-xs font-mono font-bold">Flow</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-grotesk font-bold text-zinc-900">How It Works</h2>
                            <p className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">Visual Framework Diagram</p>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="bg-zinc-50 rounded-xl p-6 font-mono text-sm font-semibold text-zinc-900 font-medium whitespace-pre-line border border-zinc-400 overflow-x-auto">
                            {diagram}
                        </div>
                    </div>
                </section>

                {/* Common Mistakes  -  always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">Common {term.title} Mistakes to Avoid</h2>
                    <div className="space-y-4">
                        {commonMistakes.map((m, i) => (
                            <div key={i} className="rounded-xl border border-red-500/10 bg-red-500/[0.02] p-5">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                        <span className="text-xs font-bold text-red-900 font-extrabold font-semibold">{i + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-semibold font-bold text-zinc-950 mb-1">{m.mistake}</div>
                                        <div className="text-xs font-bold text-zinc-900 font-bold/80 mb-2">Consequence: {m.consequence}</div>
                                        <div className="text-xs font-bold text-zinc-900 font-bold/80">Fix: {m.fix}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Best Practices  -  always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">{term.title} Best Practices</h2>
                    <div className="space-y-3">
                        {bestPractices.map((bp, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <span className="text-xs font-bold text-emerald-900 font-extrabold font-semibold">✓</span>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold font-bold text-zinc-900">{bp.practice}</div>
                                    <div className="text-xs font-bold text-zinc-900 font-bold mt-1">Impact: {bp.impact}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Industry Benchmarks  -  always rendered */}
                <section className="mb-12">
                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">{term.title} Industry Benchmarks</h2>
                    <p className="text-zinc-950 font-bold text-sm font-semibold mb-4">How does your organization compare? Use these benchmarks to identify where you stand and where to invest.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-zinc-400">
                                    <th className="text-left py-3 px-4 text-zinc-950 font-bold font-mono uppercase tracking-widest text-xs">Industry</th>
                                    <th className="text-left py-3 px-4 text-zinc-950 font-bold font-mono uppercase tracking-widest text-xs">Metric</th>
                                    <th className="text-left py-3 px-4 text-red-900 font-extrabold font-semibold font-mono uppercase tracking-widest text-xs">Low</th>
                                    <th className="text-left py-3 px-4 text-amber-900 font-semibold font-mono uppercase tracking-widest text-xs">Median</th>
                                    <th className="text-left py-3 px-4 text-emerald-900 font-extrabold font-semibold font-mono uppercase tracking-widest text-xs">Elite</th>
                                </tr>
                            </thead>
                            <tbody>
                                {industryBenchmarks.map((b, i) => (
                                    <tr key={i} className="border-b border-zinc-400">
                                        <td className="py-3 px-4 text-zinc-950 font-medium">{b.industry}</td>
                                        <td className="py-3 px-4 text-zinc-950 font-bold">{b.metric}</td>
                                        <td className="py-3 px-4 text-red-900 font-extrabold font-semibold">{b.low}</td>
                                        <td className="py-3 px-4 text-amber-900 font-semibold">{b.median}</td>
                                        <td className="py-3 px-4 text-emerald-900 font-extrabold font-semibold">{b.elite}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Hub-and-Spoke SEO Matrix  -  NEW (3-Tier Governance) */}
                {term.tier === 'pillar' && (
                    <section className="mb-12 mt-16 pt-12 border-t border-zinc-400">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <span className="text-xs font-mono font-bold uppercase">Web</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-grotesk font-bold text-zinc-900">Explore the {term.title} Ecosystem</h2>
                                <p className="text-sm font-semibold font-mono text-cyan-900 font-extrabold font-semibold mt-1 uppercase tracking-widest">Pillar & Spoke Navigation Matrix</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            
                            {/* Spoke Articles Column */}
                            <div className="card p-6 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent flex flex-col h-full">
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 flex items-center gap-2 mb-4">
                                    <span className="text-cyan-900 font-extrabold font-semibold">Briefings:</span> Deep-Dive Articles
                                </h3>
                                <div className="space-y-4 flex-1">
                                    {spokes.map((s, i) => (
                                        <Link key={i} href={s.url} className="block group">
                                            <div className="text-sm font-semibold font-bold text-zinc-950 font-bold group-hover:text-cyan-900 font-extrabold font-semibold transition-colors mb-1">{s.title}</div>
                                            <div className="text-xs font-bold text-zinc-900 font-bold line-clamp-2">{s.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Curriculum Column */}
                            <div className="card p-6 border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent flex flex-col h-full">
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 flex items-center gap-2 mb-4">
                                    <span className="text-violet-400">Academy:</span> Curriculum Tracks
                                </h3>
                                <div className="space-y-4 flex-1">
                                    {curriculumTracks.map((c, i) => (
                                        <Link key={i} href={c.url} className="block group">
                                            <div className="text-xs font-bold font-medium font-mono text-violet-400 uppercase tracking-widest mb-1">{c.track}</div>
                                            <div className="text-sm font-semibold font-bold text-zinc-950 font-bold group-hover:text-violet-400 transition-colors mb-1">{c.title}</div>
                                            <div className="inline-flex items-center justify-center px-2 py-0.5 rounded text-xs font-bold font-medium font-bold bg-white/10 text-zinc-950 mt-1">Premium Track</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Executive Guides Column */}
                            <div className="card p-6 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent flex flex-col h-full">
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 flex items-center gap-2 mb-4">
                                    <span className="text-emerald-900 font-extrabold font-semibold">Playbooks:</span> Executive Guides
                                </h3>
                                <div className="space-y-4 flex-1">
                                    {executiveGuides.map((g, i) => (
                                        <Link key={i} href={g.url} className="block group">
                                            <div className="text-xs font-bold font-medium font-mono text-emerald-900 font-extrabold font-semibold uppercase tracking-widest mb-1">{g.type}</div>
                                            <div className="text-sm font-semibold font-bold text-zinc-950 font-bold group-hover:text-emerald-900 font-extrabold font-semibold transition-colors">{g.title}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Monetization / Premium Diagnostic Column */}
                            <div className="card p-6 border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-red-500/5 to-transparent relative overflow-hidden flex flex-col h-full">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 blur-2xl rounded-full" />
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 flex items-center gap-2 mb-4 relative z-10">
                                    <span className="text-amber-400">{premiumTool.icon}</span> Flagship Advisory
                                </h3>
                                <div className="flex-1 flex flex-col relative z-10">
                                    <div className="text-xs font-bold font-medium font-mono text-amber-400 uppercase tracking-widest mb-1">{premiumTool.tag}</div>
                                    <div className="text-base font-bold text-zinc-950 mb-2 leading-tight">{premiumTool.name}</div>
                                    <div className="text-xs font-bold text-zinc-900 font-bold mb-6 flex-1">{premiumTool.description}</div>
                                    
                                    <Link 
                                        href={premiumTool.url} 
                                        className="block w-full text-center py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                                    >
                                        Deploy Tool
                                    </Link>
                                    <div className="text-center mt-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-wide">
                                        {premiumTool.price}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                )}

                {term.tier === 'standard' && (
                    <section className="mb-12 mt-16 pt-12 border-t border-zinc-400">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <span className="text-xs font-mono font-bold uppercase">Ref</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-grotesk font-bold text-zinc-900">Related Reading</h2>
                                <p className="text-sm font-semibold font-mono text-cyan-900 font-extrabold font-semibold mt-1 uppercase tracking-widest">Expand Your Knowledge</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="card p-6 border-cyan-500/20 bg-zinc-50">
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-4">Deep-Dive Articles</h3>
                                <div className="space-y-4">
                                    {spokes.slice(0, 2).map((s, i) => (
                                        <Link key={i} href={s.url} className="block group">
                                            <div className="text-sm font-semibold font-bold text-zinc-950 font-bold group-hover:text-cyan-900 font-extrabold font-semibold transition-colors mb-1">{s.title}</div>
                                            <div className="text-xs font-bold text-zinc-900 font-bold line-clamp-2">{s.description}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="card p-6 border-zinc-400 flex flex-col items-center justify-center text-center bg-zinc-50">
                                <div className="text-xs font-mono font-bold uppercase tracking-widest mb-3 text-[var(--gold,#b77a35)]">Executive Curriculum</div>
                                <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-2">Master Technical Execution</h3>
                                <p className="text-sm font-semibold text-zinc-900 font-medium mb-6">Learn how top-quartile engineering organizations systematically manage {term.title.toLowerCase()}.</p>
                                <Link href="/vault/curriculum/tracks" className="w-full max-w-[200px] text-center py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-zinc-400 text-zinc-950 font-bold text-sm font-semibold rounded-lg transition-colors">
                                    Explore Curriculum
                                </Link>
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQs */}
                {term.faqs.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">{term.title} Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {term.faqs.map((faq, i) => (
                                <div key={i} className="card p-6">
                                    <h3 className="text-lg font-bold text-zinc-950 mb-2">{faq.question}</h3>
                                    <p className="text-zinc-950 font-bold">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Interactive Quiz  -  always rendered */}
                <GlossaryQuiz quiz={quiz} title={term.title} />

                {/* External Resources */}
                {term.resources && term.resources.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">{term.title} Resources</h2>
                        <div className="space-y-2">
                            {term.resources.map((r, i) => (
                                <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 border border-zinc-400 hover:border-cyan-500/30 transition-colors group">
                                    <div>
                                        <div className="text-sm font-semibold font-bold text-zinc-950 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors">{r.title}</div>
                                        <div className="text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest mt-1">{r.type}</div>
                                    </div>
                                    <span className="text-xs font-bold text-zinc-900 font-bold">→</span>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* Related Tools */}
                {term.relatedTools && term.relatedTools.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Free Executive Calculators &amp; Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {term.relatedTools.map(tool => (
                                <Link key={tool.url} href={tool.url} className="card p-5 hover:border-cyan-500/50 transition-all group">
                                    <div className="text-lg font-bold text-zinc-950 group-hover:text-cyan-900 font-extrabold font-semibold transition-colors">{tool.name}</div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-cyan-500 mt-2">Try Free →</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Ontology Mesh  -  cross-links to compare, failures, tools, articles */}
                <GlossaryMesh
                    termSlug={slug}
                    termTitle={term.title}
                    termCategory={term.category}
                    relatedArticles={term.relatedArticles}
                    relatedFailures={term.relatedFailures}
                />

                {/* Related Terms */}
                {relatedTermObjects.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Related Executive Terms</h2>
                        <div className="flex flex-wrap gap-3">
                            {relatedTermObjects.map(rt => {
                                if (!rt) return null;
                                const isKept = KEEP_TERMS.includes(rt.slug);
                                const pillarSlug = CATEGORY_MAP[rt.category] || 'cloud-infrastructure-finops';
                                const targetUrl = isKept ? `/glossary/${rt.slug}` : `/glossary/pillars/${pillarSlug}#${rt.slug}`;
                                return (
                                    <Link key={rt.slug} href={targetUrl}
                                        className="px-4 py-2 bg-white/5 border border-zinc-400 rounded-full text-sm font-semibold text-zinc-900 font-medium hover:border-cyan-500/50 hover:text-cyan-900 font-extrabold font-semibold transition-all">
                                        {rt.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                )}

                {diagnosticBridgeProps && (
                    <DiagnosticBridge {...diagnosticBridgeProps} />
                )}

                <GlossaryToolCTA slug={slug} category={term.category} termTitle={term.title} />

                {/* Zero-friction Lead Magnet Conversion Card (Strategy B) */}
                <section className="my-12 p-8 rounded-2xl border-2 border-violet-200 bg-[#F5F0EB]/60 backdrop-blur-sm shadow-md">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-rose-500/10 border border-violet-200 flex items-center justify-center shrink-0">
                            <span className="text-xs font-mono font-bold uppercase">Note</span>
                        </div>
                        <div className="flex-1 w-full">
                            <h3 className="text-xl font-grotesk font-bold text-zinc-950 mb-1">Get the 12-Point Enterprise AI Governance Checklist</h3>
                            <p className="text-sm text-zinc-900 font-medium mb-4 leading-relaxed">
                                Access the exact diagnostic questions used in **$7,500 R&D Capital Audits** to isolate technical insolvency and prevent AI margin leakage.
                            </p>
                            <NewsletterForm 
                                buttonText="Download Checklist" 
                                placeholder="Enter your business email" 
                                redirectTo="/checklist"
                                extraData={{ tool: `glossary_${slug}` }}
                            />
                        </div>
                    </div>
                </section>

                <section className="card p-8 border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.03] to-violet-500/[0.03] rounded-2xl">
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-zinc-400 flex items-center justify-center shrink-0">
                            <span className="text-xs font-mono font-bold uppercase">Audit</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-grotesk font-bold text-zinc-950 mb-1">Expert Definition by Richard Ewing</h2>
                            <p className="text-xs font-bold font-mono text-cyan-600 uppercase tracking-widest mb-3">AI Economist & R&D Capital Auditor</p>
                            <p className="text-sm font-semibold text-zinc-950 mb-4 leading-relaxed">
                                Richard Ewing is the creator of the AI Economics framework and founder of Exogram. His research on R&D capital audits, technical insolvency, and software economics is featured across Tier 1 publications including <strong>CIO.com</strong>, <strong>Built In</strong> (Editor's Pick), and <strong>HackerNoon</strong>.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Link href="/services" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold font-bold text-sm rounded-lg hover:opacity-90 transition-opacity">
                                    Book Advisory Call →
                                </Link>
                                <Link href="/about" className="text-xs font-bold text-zinc-900 font-bold hover:underline font-mono uppercase tracking-wider">
                                    About Richard Ewing →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="my-10">
                    <EditorialAdSlot pillar="glossary" contextLabel={term.title} />
                </div>

                {/* Google Preferred Source Official Credential */}
                <GooglePreferredBadge variant="card" className="my-10" />

                {/* Foundational Multi-Channel Research & Briefings for this Term */}
                {(() => {
                    const relatedWorks = RESEARCH_CORPUS.filter(work => 
                        work.relatedConceptIds?.includes(slug) ||
                        work.relatedGlossarySlugs?.includes(slug) ||
                        work.title.toLowerCase().includes(term.title.toLowerCase()) ||
                        term.definition.toLowerCase().includes(work.title.toLowerCase())
                    ).slice(0, 3);

                    if (relatedWorks.length === 0) return null;

                    return (
                        <section className="my-12 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <span className="text-xs font-mono font-bold text-cyan-900 uppercase tracking-widest block mb-1">
                                        Empirical Research &amp; Multi-Channel Briefings
                                    </span>
                                    <h2 className="text-2xl font-grotesk font-bold text-zinc-950">
                                        Foundational Research for {term.title}
                                    </h2>
                                </div>
                                <Link href="/research/publications" className="text-xs font-mono font-bold text-cyan-900 hover:underline">
                                    Full Catalog →
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {relatedWorks.map(work => (
                                    <a 
                                        key={work.id}
                                        href={work.url}
                                        target={work.url.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="p-5 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-cyan-900 uppercase mb-2">
                                                <span>{work.publisher}</span>
                                                {work.date && <span>{work.date}</span>}
                                            </div>
                                            <h3 className="text-sm font-bold text-zinc-950 group-hover:text-cyan-800 transition-colors mb-2 leading-snug">
                                                {work.title} ↗
                                            </h3>
                                            <p className="text-xs text-zinc-700 font-medium line-clamp-3">
                                                {work.thesis}
                                            </p>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-cyan-900 mt-4 block">Read Work ↗</span>
                                    </a>
                                ))}
                            </div>
                        </section>
                    );
                })()}

                <ProgrammaticAnswersRelated seed={slug} maxCount={2} />

                <RelatedContent currentSlug={slug} type="guide" />
            </article>
        </div>
    );
}


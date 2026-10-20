import { MetadataRoute } from 'next';
import { exogramDocs } from '@/lib/exogram-docs';
import { glossaryTerms } from './glossary/terms';
import { PILLARS, KEEP_TERMS } from './glossary/pillarsMapping';
import { frameworks, articles } from '@/lib/data';
import { getLiveModuleSlugs } from '@/app/lib/curriculum-data';
import { getSortedArticles } from '@/app/lib/blog-data';
import { CAREER_PATHS } from '@/app/lib/career-paths';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';
import { getAllSpokeRoutes } from '@/app/lib/spoke-data';
import { challenges } from './challenges/data';
import compareCategorized from './lib/compare-categorized.json';
import { COMBAT_SEO_MATRIX } from '@/app/lib/combat-seo';
import { SKILLS, FAILURES } from '@/lib/content/skills';
import { subFrameworks } from '@/app/lib/framework-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.richardewing.io';

    // --- DEDUPLICATED SITEMAP ---
    // All URLs are collected into a Map to prevent duplicates.
    // If the same URL appears twice, the later entry overwrites the earlier one.
    const entries = new Map<string, MetadataRoute.Sitemap[number]>();

    // Redirect sources from next.config.ts and middleware to prevent any redirected URL from entering sitemap.xml
    const REDIRECT_DISALLOWED = new Set([
        '/terms', '/terms-of-service', '/terms-and-conditions', '/toc', '/tos', '/tac',
        '/privacy', '/privacy-policy', '/disclaimer', '/disclaimers', '/refunds', '/refund-policy',
        '/frameworks', '/frameworks/innovation-tax', '/frameworks/product-debt-index',
        '/frameworks/technical-insolvency-date', '/frameworks/synthetic-cogs',
        '/research/concepts', '/principal', '/trust',
        '/product-debt-index', '/roai-framework', '/technical-insolvency-date',
        '/career-pathfinder', '/security-trust', '/architectural-doctrine', '/legal-hub',
        '/tools/CloudRepatriationCalculator', '/tools/PromptInjectionSandbox', '/tools/RagChunkingVisualizer',
        '/ideas', '/start',
        '/ai-cost-audit', '/rd-capital-audit', '/ai-spend-calculator',
        '/tools/technical-debt-calculator', '/tools/code-quality-calculator',
        '/tools/vibe-coding-debt-calculator', '/tools/synthetic-debt-calculator',
        '/tools/ai-cost-calculator', '/tools/llm-cost-calculator',
        '/tools/ai-unit-economics-calculator', '/tools/ai-cogs-calculator',
        '/tools/token-cost-calculator', '/tools/revenue-per-engineer',
        '/tools/engineering-efficiency-calculator', '/tools/saas-valuation-calculator',
        '/tools/enterprise-value-calculator', '/tools/subprime-code-auditor',
        '/glossary/subprime-code', '/glossary/subprime-code-crisis',
        '/framework/subprime-code-governance', '/tools/ai-hallucination-cost',
        '/tools/ai-job-displacement-calculator', '/tools/ai-workforce-impact',
        '/tools/self-host-vs-api', '/tools/shadow-ai-risk-calculator',
        '/tools/mcp-security-scanner', '/tools/copilot-roi-calculator',
        '/tools/ai-pilot-roi-calculator', '/tools/roai-calculator',
        '/tools/cloud-repatriation-calculator',
        '/compare/technical-debt-calculator-vs-sonarqube',
        '/compare/revenue-per-engineer-vs-jellyfish',
        '/compare/ai-cost-calculator-vs-aws',
        '/compare/engineering-efficiency-vs-jellyfish',
        '/compare/engineering-metrics-vs-dora',
        '/canonical/financial-conways-law.html',
        '/canonical/governance-of-subtraction.html',
        '/canonical/kill-switch.html',
        '/canonical/capital-allocation-strategy.html',
        '/index.html', '/advisory.html', '/manifesto.html', '/system.html',
        '/briefings.html', '/the-operator.html', '/studio.html',
        '/q-pep-product-economics-protocol', '/10', '/methodology.html',
        '/working-papers.html', '/robots/', '/git', '/github',
        '/partnerships/integrations', '/partnerships/supabase',
        '/docs/integrations/supabase', '/docs/integrations', '/integrations',
        '/media-kit', '/press', '/guides', '/vault/curriculum',
        '/guides/cto-first-90-days', '/guides/technical-debt',
        '/guides/build-vs-buy', '/guides/engineering-efficiency',
        '/guides/product-economics', '/guides/how-to-deploy-small-language-models',
        '/guides/ai-governance-compliance', '/guides/ai-native-development-teams',
        '/comparisons/nextjs-remix-astro', '/comparisons/claude-vs-gpt4',
        '/comparisons/pdi-vs-dora', '/comparisons/agile-vs-kanban',
        '/comparisons/monolith-vs-microservices', '/tools/cloud-finops-calculator',
        '/tools/unit-economics',
        '/vault/curriculum/tracks/agentic-governance/58-7',
        '/vault/curriculum/tracks/dx-economics/17-3',
        '/vault/curriculum/tracks/rd-capital-management/3-17',
        '/vault/curriculum/tracks/rd-capital-management/3-18',
        '/vault/curriculum/tracks/product-economics/5-3',
        '/vault/curriculum/tracks/product-economics/5-14',
        '/vault/curriculum/tracks/ai-pricing/8-5',
        '/curriculum/tracks'
    ]);

    const lastModified = new Date();

    function add(url: string, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number) {
        const path = url.replace(baseUrl, '');
        if (REDIRECT_DISALLOWED.has(path)) return;
        if (path.startsWith('/research/concepts')) return;
        entries.set(url, { url, lastModified, changeFrequency, priority });
    }

    // === CORE PAGES ===
    add(`${baseUrl}/`, 'weekly', 1.0);
    add(`${baseUrl}/advisory`, 'weekly', 0.95);
    add(`${baseUrl}/engagement-paths`, 'weekly', 0.9);
    add(`${baseUrl}/pricing-sprints`, 'weekly', 0.9);
    add(`${baseUrl}/products`, 'weekly', 0.9);
    add(`${baseUrl}/framework`, 'weekly', 0.95);
    add(`${baseUrl}/ai-economist-book`, 'monthly', 0.85);
    add(`${baseUrl}/builder-curriculum`, 'weekly', 0.9);
    add(`${baseUrl}/operating-kit`, 'weekly', 0.9);
    add(`${baseUrl}/glossary`, 'weekly', 0.95);
    add(`${baseUrl}/challenges`, 'weekly', 0.9);
    add(`${baseUrl}/diagnose`, 'weekly', 0.9);
    add(`${baseUrl}/ai-economics-crisis`, 'weekly', 0.9);
    add(`${baseUrl}/ai-unit-economics`, 'weekly', 0.95);
    add(`${baseUrl}/ai-budget-leaks`, 'weekly', 0.95);
    add(`${baseUrl}/ai-economist`, 'weekly', 0.95);
    add(`${baseUrl}/ai-cost-governance`, 'weekly', 0.95);
    add(`${baseUrl}/portfolio`, 'weekly', 1.0);
    add(`${baseUrl}/toolkit`, 'weekly', 0.98);
    add(`${baseUrl}/reality-check`, 'weekly', 0.95);
    add(`${baseUrl}/doctrine`, 'monthly', 0.8);
    add(`${baseUrl}/runtime-architecture`, 'weekly', 0.95);
    add(`${baseUrl}/tools`, 'weekly', 0.95);
    add(`${baseUrl}/system-prompts`, 'monthly', 0.9);
    add(`${baseUrl}/about`, 'monthly', 0.8);
    add(`${baseUrl}/speaking`, 'monthly', 0.9);
    add(`${baseUrl}/case-studies`, 'weekly', 0.95);
    add(`${baseUrl}/roi`, 'monthly', 0.9);
    add(`${baseUrl}/roi-calculator`, 'monthly', 0.9);
    add(`${baseUrl}/security`, 'monthly', 0.8);
    add(`${baseUrl}/faq`, 'monthly', 0.8);
    add(`${baseUrl}/manifesto`, 'yearly', 0.6);
    add(`${baseUrl}/book`, 'monthly', 0.5);
    add(`${baseUrl}/profiles`, 'monthly', 0.5);
    add(`${baseUrl}/system`, 'monthly', 0.5);
    add(`${baseUrl}/pricing`, 'monthly', 0.8);
    add(`${baseUrl}/legal`, 'yearly', 0.3);
    add(`${baseUrl}/methodology`, 'monthly', 0.8);
    add(`${baseUrl}/services`, 'monthly', 0.9);
    add(`${baseUrl}/services/ai-cost-audit`, 'monthly', 0.9);
    add(`${baseUrl}/services/platform-consolidation`, 'monthly', 0.9);
    add(`${baseUrl}/services/technical-due-diligence`, 'monthly', 0.9);
    add(`${baseUrl}/contact`, 'monthly', 0.8);
    add(`${baseUrl}/schedule`, 'monthly', 0.85);
    add(`${baseUrl}/careerwin`, 'monthly', 0.8);
    add(`${baseUrl}/directory`, 'weekly', 0.9);
    add(`${baseUrl}/programs/ai-product-builder`, 'weekly', 1.0);
    add(`${baseUrl}/curriculum`, 'weekly', 0.95);
    add(`${baseUrl}/assessment`, 'weekly', 0.9);
    add(`${baseUrl}/assessments`, 'monthly', 0.8);
    add(`${baseUrl}/apply`, 'weekly', 0.95);
    add(`${baseUrl}/resources/ai-prompt-library`, 'weekly', 0.9);
    add(`${baseUrl}/resources/ai-courses`, 'monthly', 0.85);
    add(`${baseUrl}/vault/blueprints`, 'weekly', 0.9);
    add(`${baseUrl}/starter-kit`, 'weekly', 0.9);
    add(`${baseUrl}/site-map`, 'weekly', 0.8);

    // === TOOL PAGES (All 35+ Diagnostic Calculators & FAQs) ===
    const toolSlugs = [
        'pdi', 'ev-se', 'aueb', 'aper', 'audit-interview', 'scoring',
        'ai-roi-timeline', 'section-174-calculator', 'cfo-capitalization-audit',
        'rag-chunking-visualizer', 'shadow-ai', 'mcp-security-auditor',
        'spec-quality-scorecard', 'copilot-roi', 'prompt-injection-sandbox',
        'slm-vs-api', 'slm-break-even', 'cloud-repatriation',
        'fte-displacement', 'vta', 'negative-carry-code-auditor',
        'aari', 'agent-router', 'agentic-drift-matrix', 'ai-feature-margin',
        'ai-unit-economics-audit', 'board-risk-scorecard', 'board-room',
        'career-pathing', 'code-review-bottleneck-calc',
        'cpo-product-portfolio-matrix', 'due-diligence', 'eu-ai-act-checker',
        'executive-ai-operating-model', 'hallucination-tax',
        'innovation-tax-calculator',
        'pdi/faq', 'ev-se/faq', 'aueb/faq', 'aper/faq',
        'audit-interview/faq', 'due-diligence/faq', 'eu-ai-act-checker/faq'
    ];
    toolSlugs.forEach(slug => add(`${baseUrl}/tools/${slug}`, 'monthly', 0.85));

    // === TOOL VS COMPETITOR PAGES (25 routes) ===
    COMBAT_SEO_MATRIX.forEach(tool => {
        tool.competitors.forEach(comp => {
            add(`${baseUrl}/tools/${tool.toolSlug}/vs/${comp.slug}`, 'monthly', 0.8);
        });
    });

    // === CONTENT & EXOGRAM PAGES ===
    add(`${baseUrl}/research`, 'weekly', 0.95);
    add(`${baseUrl}/research/publications`, 'weekly', 0.95);
    add(`${baseUrl}/articles`, 'weekly', 0.8);
    add(`${baseUrl}/briefings`, 'monthly', 0.7);
    add(`${baseUrl}/newsletter`, 'weekly', 0.8);
    add(`${baseUrl}/exogram`, 'monthly', 0.85);
    add(`${baseUrl}/exogram/demo`, 'monthly', 0.9);
    add(`${baseUrl}/exogram/architecture`, 'monthly', 0.85);
    add(`${baseUrl}/exogram/docs`, 'monthly', 0.85);
    add(`${baseUrl}/exogram/roadmap`, 'monthly', 0.8);
    add(`${baseUrl}/exogram/use-cases`, 'monthly', 0.85);
    add(`${baseUrl}/blog`, 'weekly', 0.9);
    add(`${baseUrl}/resources`, 'weekly', 0.8);

    // === AUDIENCE FUNNEL ===
    add(`${baseUrl}/for-investors`, 'monthly', 0.9);
    add(`${baseUrl}/for-boards`, 'monthly', 0.9);
    add(`${baseUrl}/for-ctos`, 'monthly', 0.9);
    add(`${baseUrl}/for-cfos`, 'monthly', 0.9);
    add(`${baseUrl}/for-coos`, 'monthly', 0.9);
    add(`${baseUrl}/for-general-counsels`, 'monthly', 0.9);

    // === DECISIONS & BENCHMARKS ===
    add(`${baseUrl}/decisions/choosing-ai-development-platforms`, 'monthly', 0.85);
    add(`${baseUrl}/decisions/choosing-enterprise-ai-infrastructure`, 'monthly', 0.85);
    add(`${baseUrl}/benchmark/ai-discoverability`, 'monthly', 0.9);
    add(`${baseUrl}/benchmarks`, 'monthly', 0.8);
    add(`${baseUrl}/missions`, 'monthly', 0.8);

    // === HUB PAGES ===
    add(`${baseUrl}/skills`, 'weekly', 0.95);
    add(`${baseUrl}/diagrams`, 'monthly', 0.9);
    add(`${baseUrl}/industries`, 'monthly', 0.8);
    add(`${baseUrl}/compare`, 'monthly', 0.7);
    add(`${baseUrl}/answers`, 'monthly', 0.8);
    add(`${baseUrl}/failures`, 'monthly', 0.9);

    // === SKILLS & FAILURES DETAIL PAGES (36 routes) ===
    SKILLS.forEach(skill => add(`${baseUrl}/skills/${skill.slug}`, 'monthly', 0.85));
    FAILURES.forEach(failure => add(`${baseUrl}/failures/${failure.slug}`, 'monthly', 0.85));

    // === SUB-FRAMEWORK PILLAR PAGES (18 routes) ===
    Object.keys(subFrameworks).forEach(slug => add(`${baseUrl}/framework/${slug}`, 'monthly', 0.85));

    // === INSTITUTIONAL ===
    add(`${baseUrl}/telemetry`, 'weekly', 0.9);
    add(`${baseUrl}/executive-briefing`, 'monthly', 0.9);
    add(`${baseUrl}/runtime-failure-index`, 'weekly', 0.95);
    add(`${baseUrl}/certification`, 'monthly', 0.7);
    add(`${baseUrl}/benchmark`, 'monthly', 0.7);
    add(`${baseUrl}/workshops`, 'monthly', 0.7);

    // === LEAD MAGNETS, REPORTS & PARTNERSHIPS ===
    add(`${baseUrl}/checklist`, 'monthly', 0.8);
    add(`${baseUrl}/start-here`, 'monthly', 0.9);
    add(`${baseUrl}/reports`, 'monthly', 0.85);
    add(`${baseUrl}/reports/state-of-ai-engineering`, 'monthly', 0.9);
    const reportSlugs = [
        'ai-governance-maturity-index',
        'product-debt-report',
        'hallucination-debt-index',
        'runtime-governance-benchmark',
        'ai-margin-compression-report'
    ];
    reportSlugs.forEach(slug => add(`${baseUrl}/reports/${slug}`, 'monthly', 0.85));
    add(`${baseUrl}/testimonials`, 'monthly', 0.7);
    add(`${baseUrl}/partnerships`, 'monthly', 0.8);
    add(`${baseUrl}/partnerships/integration-docs`, 'weekly', 0.9);
    add(`${baseUrl}/partnerships/brand-assets`, 'monthly', 0.8);
    add(`${baseUrl}/brand`, 'monthly', 0.85);
    add(`${baseUrl}/integrations/supabase`, 'weekly', 0.9);
    add(`${baseUrl}/partner`, 'monthly', 0.7);

    // === AI INTEGRATION & CANONICAL CONCEPTS ===
    add(`${baseUrl}/ai-integration`, 'weekly', 0.95);
    add(`${baseUrl}/ai-integration/system`, 'monthly', 0.9);
    add(`${baseUrl}/case-studies/runtime-incidents`, 'weekly', 0.9);
    add(`${baseUrl}/skills/getting-started`, 'monthly', 0.85);
    add(`${baseUrl}/architecture/deterministic-control-layer`, 'monthly', 0.8);
    add(`${baseUrl}/benchmark/ai-capital-2026`, 'monthly', 0.9);
    add(`${baseUrl}/concepts`, 'weekly', 0.95);

    // === CANONICAL CONCEPTS SPECIFICATIONS ===
    CANONICAL_CONCEPTS.forEach(concept => add(`${baseUrl}/concepts/${concept.slug}`, 'weekly', 0.95));

    // === ARTICLE RECAPS ===
    add(`${baseUrl}/articles/recap/cio-com`, 'monthly', 0.7);
    add(`${baseUrl}/articles/recap/built-in`, 'monthly', 0.7);
    add(`${baseUrl}/articles/recap/hackernoon`, 'monthly', 0.7);

    // === VAULT CURRICULUM & MODULES ===
    const DEPRECATED_TRACK_CATEGORIES = new Set([
        'b2b-saas-economics', 'fintech-economics', 'logistics-ecommerce', 'healthtech-economics',
        'traditional-pm', 'breaking-into-tech', 'junior-to-senior', 'erp-enterprise-integration',
        'outsourcing-economics', 'corporate-it-cost-centers', 'mainframe-legacy-systems',
        'career-mobility-technical-economics', 'classic-qa-quality', 'monolith-classic-database',
        'executive-alignment-governance', 'fullstack-career', 'system-design', 'devops-economics',
        'security-economics', 'data-economics', 'engineering-leadership', 'fractional-engineering',
        'ai-agent-economics', 'synthetic-data', 'enterprise-architecture', 'agile-economics'
    ]);
    add(`${baseUrl}/vault/curriculum/tracks`, 'monthly', 0.8);
    getLiveModuleSlugs()
        .filter(slug => !DEPRECATED_TRACK_CATEGORIES.has(slug.split('/')[0]))
        .forEach(slug => add(`${baseUrl}/vault/curriculum/tracks/${slug}`, 'monthly', 0.8));

    // === CAREER PATHWAYS ===
    add(`${baseUrl}/careers`, 'monthly', 0.85);
    CAREER_PATHS.forEach(path => add(`${baseUrl}/careers/${path.slug}`, 'monthly', 0.85));

    // === CANONICAL ARTICLES ===
    const frameworkSlugSet = new Set(frameworks.map(f => f.slug));
    articles
        .filter(article => !article.externalUrl && !frameworkSlugSet.has(article.slug))
        .forEach(article => add(`${baseUrl}/articles/${article.slug}`, 'monthly', 0.8));

    // === COMPARE PAGES (Tier A Indexed Only) ===
    const tierASlugs: string[] = [
        ...((compareCategorized.tierA_indexed as string[]) || []),
        'exogram-vs-lakera',
        'exogram-vs-langchain',
        'advisory-vs-mckinsey',
        'advisory-vs-bain',
        'advisory-vs-big4',
        'advisory-vs-gartner',
        'advisory-vs-traditional-fractional-cto',
    ];
    tierASlugs.forEach(slug => add(`${baseUrl}/compare/${slug}`, 'monthly', 0.8));

    // === DYNAMICALLY GENERATED PAGES ===

    // Challenges
    challenges.forEach(c => add(`${baseUrl}/challenges/${c.slug}`, 'monthly', 0.8));

    // Glossary
    PILLARS.forEach(pillar => add(`${baseUrl}/glossary/pillars/${pillar.slug}`, 'weekly', 0.6));

    // Only index KEEP_TERMS to avoid thin content drag
    glossaryTerms
        .filter(term => KEEP_TERMS.includes(term.slug))
        .forEach(term => add(`${baseUrl}/glossary/${term.slug}`, 'monthly', 0.5));

    // Frameworks
    frameworks.forEach(f => add(`${baseUrl}/articles/frameworks/${f.slug}`, 'monthly', 0.7));

    // Blog (excluding syndicated content with external canonicals)
    getSortedArticles()
        .filter(article => !article.canonicalUrl || article.canonicalUrl === `${baseUrl}/blog/${article.slug}`)
        .forEach(article => add(`${baseUrl}/blog/${article.slug}`, 'monthly', 0.8));

    // Answers (hub & spoke)
    getAllSpokeRoutes().forEach(r =>
        add(`${baseUrl}/answers/${r.topic}/${r.persona}/${r.questionSlug}`, 'monthly', 0.6)
    );

    // Industries
    const industrySlugs = [
        'fintech', 'healthtech', 'ai-first', 'saas', 'govtech', 'edtech',
        'ecommerce', 'cybersecurity', 'logistics', 'insurtech', 'proptech',
        'legaltech', 'agritech', 'cleantech', 'mediatech', 'manufacturing'
    ];
    industrySlugs.forEach(slug => add(`${baseUrl}/industries/${slug}`, 'monthly', 0.7));

    // Exogram Docs
    exogramDocs.forEach(doc => add(`${baseUrl}/exogram/docs/${doc.slug}`, 'monthly', 0.8));

    return Array.from(entries.values());
}

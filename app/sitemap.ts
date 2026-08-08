import { MetadataRoute } from 'next';
import { exogramDocs } from '@/lib/exogram-docs';
import { glossaryTerms } from './glossary/terms';
import { PILLARS, KEEP_TERMS } from './glossary/pillarsMapping';
import { frameworks, articles } from '@/lib/data';
import { tracks } from '@/app/lib/curriculum-tracks-ui';
import { getAllModuleSlugs } from '@/app/lib/curriculum-data';
import { getSortedArticles } from '@/app/lib/blog-data';
import { COMBAT_SEO_MATRIX } from '@/app/lib/combat-seo';
import { CAREER_PATHS } from '@/app/lib/career-paths';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';
import { getAllSpokeRoutes } from '@/app/lib/spoke-data';
import { challenges } from './challenges/data';
import compareCategorized from './lib/compare-categorized.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.richardewing.io';

    // --- DEDUPLICATED SITEMAP ---
    // All URLs are collected into a Map to prevent duplicates.
    // If the same URL appears twice, the later entry overwrites the earlier one.
    const entries = new Map<string, MetadataRoute.Sitemap[number]>();

    function add(url: string, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'], priority: number) {
        entries.set(url, { url, changeFrequency, priority });
    }

    // === CORE PAGES ===
    add(`${baseUrl}/`, 'weekly', 1.0);
    add(`${baseUrl}/doctrine`, 'monthly', 0.8);
    add(`${baseUrl}/runtime-architecture`, 'weekly', 0.95);
    add(`${baseUrl}/tools`, 'monthly', 0.8);
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
    add(`${baseUrl}/contact`, 'monthly', 0.8);
    add(`${baseUrl}/careerwin`, 'monthly', 0.8);

    // === TOOL PAGES ===
    add(`${baseUrl}/tools/pdi`, 'monthly', 0.7);
    add(`${baseUrl}/tools/ev-se`, 'monthly', 0.7);
    add(`${baseUrl}/tools/aueb`, 'monthly', 0.7);
    add(`${baseUrl}/tools/aper`, 'monthly', 0.7);
    add(`${baseUrl}/tools/audit-interview`, 'monthly', 0.7);
    add(`${baseUrl}/tools/scoring`, 'monthly', 0.5);
    add(`${baseUrl}/tools/ai-roi-timeline`, 'monthly', 0.9);

    // === CONTENT PAGES ===
    add(`${baseUrl}/articles`, 'weekly', 0.8);
    add(`${baseUrl}/briefings`, 'monthly', 0.7);
    add(`${baseUrl}/newsletter`, 'weekly', 0.8);
    add(`${baseUrl}/exogram`, 'monthly', 0.8);
    add(`${baseUrl}/exogram/demo`, 'monthly', 0.9);
    add(`${baseUrl}/blog`, 'weekly', 0.9);
    add(`${baseUrl}/resources`, 'weekly', 0.8);

    // === AUDIENCE FUNNEL ===
    add(`${baseUrl}/for-investors`, 'monthly', 0.9);
    add(`${baseUrl}/for-boards`, 'monthly', 0.9);
    add(`${baseUrl}/for-ctos`, 'monthly', 0.9);
    add(`${baseUrl}/roi`, 'monthly', 0.8);

    // === HUB PAGES ===
    add(`${baseUrl}/skills`, 'weekly', 0.95);
    add(`${baseUrl}/diagrams`, 'monthly', 0.9);
    add(`${baseUrl}/industries`, 'monthly', 0.8);
    add(`${baseUrl}/curriculum`, 'monthly', 0.8);
    add(`${baseUrl}/case-studies`, 'monthly', 0.8);
    add(`${baseUrl}/compare`, 'monthly', 0.7);
    add(`${baseUrl}/answers`, 'monthly', 0.8);
    add(`${baseUrl}/failures`, 'monthly', 0.9);

    // === INSTITUTIONAL ===
    add(`${baseUrl}/telemetry`, 'weekly', 0.9);
    add(`${baseUrl}/executive-briefing`, 'monthly', 0.9);
    add(`${baseUrl}/runtime-failure-index`, 'weekly', 0.95);
    add(`${baseUrl}/certification`, 'monthly', 0.7);
    add(`${baseUrl}/benchmark`, 'monthly', 0.7);
    add(`${baseUrl}/workshops`, 'monthly', 0.7);

    // === LEAD MAGNETS ===
    add(`${baseUrl}/checklist`, 'monthly', 0.8);
    add(`${baseUrl}/faq`, 'monthly', 0.7);
    add(`${baseUrl}/start-here`, 'monthly', 0.9);
    add(`${baseUrl}/reports/state-of-ai-engineering`, 'monthly', 0.9);
    add(`${baseUrl}/testimonials`, 'monthly', 0.7);
    add(`${baseUrl}/partnerships`, 'monthly', 0.7);
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
    add(`${baseUrl}/vault/curriculum/tracks`, 'monthly', 0.8);
    getAllModuleSlugs().forEach(slug => add(`${baseUrl}/vault/curriculum/tracks/${slug}`, 'monthly', 0.7));

    // === CAREER PATHWAYS ===
    add(`${baseUrl}/careers`, 'monthly', 0.85);
    CAREER_PATHS.forEach(path => add(`${baseUrl}/careers/${path.slug}`, 'monthly', 0.85));

    // === CANONICAL ARTICLES ===
    articles
        .filter(article => !article.externalUrl)
        .forEach(article => add(`${baseUrl}/articles/${article.slug}`, 'monthly', 0.8));

    // === COMPARE PAGES (Tier A Indexed Only) ===
    const tierASlugs: string[] = (compareCategorized.tierA_indexed as string[]) || [];
    tierASlugs.forEach(slug => add(`${baseUrl}/compare/${slug}`, 'monthly', 0.8));

    // === DYNAMICALLY GENERATED PAGES ===

    // Challenges
    challenges.forEach(c => add(`${baseUrl}/challenges/${c.slug}`, 'monthly', 0.8));

    // Combat SEO (tool vs competitor)
    COMBAT_SEO_MATRIX.forEach(t =>
        t.competitors.forEach(c =>
            add(`${baseUrl}/tools/${t.toolSlug}/vs/${c.slug}`, 'weekly', 0.9)
        )
    );

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
        'legaltech', 'agritech', 'cleantech', 'mediatech'
    ];
    industrySlugs.forEach(slug => add(`${baseUrl}/industries/${slug}`, 'monthly', 0.7));

    // Exogram Docs
    exogramDocs.forEach(doc => add(`${baseUrl}/exogram/docs/${doc.slug}`, 'monthly', 0.8));

    return Array.from(entries.values());
}

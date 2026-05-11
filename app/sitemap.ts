import { MetadataRoute } from 'next';
import { exogramDocs } from '@/lib/exogram-docs';
import { glossaryTerms } from './glossary/terms';
import { frameworks } from '@/lib/data';
import { tracks } from '@/app/lib/curriculum-tracks-ui';
import { getAllModuleSlugs } from '@/app/lib/curriculum-data';
import { getSortedArticles } from '@/app/lib/blog-data';
import { COMBAT_SEO_MATRIX } from '@/app/lib/combat-seo';
import { CAREER_PATHS } from '@/app/lib/career-paths';
import pseoMatrixData from '@/app/lib/pseo-matrix.json';
import { getAllSpokeRoutes } from '@/app/lib/spoke-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.richardewing.io';

    const combatPages: MetadataRoute.Sitemap = COMBAT_SEO_MATRIX.flatMap(t => 
        t.competitors.map(c => ({
            url: `${baseUrl}/tools/${t.toolSlug}/vs/${c.slug}`,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }))
    );

    const glossaryPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/glossary`,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...glossaryTerms.map(term => ({
            url: `${baseUrl}/glossary/${term.slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];

    const frameworkPages: MetadataRoute.Sitemap = frameworks.map(f => ({
        url: `${baseUrl}/articles/frameworks/${f.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));


    const blogPages: MetadataRoute.Sitemap = getSortedArticles()
        .filter(article => !article.canonicalUrl || article.canonicalUrl === `${baseUrl}/blog/${article.slug}`)
        .map(article => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const careerPages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/careers`,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...CAREER_PATHS.map(path => ({
            url: `${baseUrl}/careers/${path.slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }))
    ];

    const answerPages: MetadataRoute.Sitemap = getAllSpokeRoutes().map(r => ({
        url: `${baseUrl}/answers/${r.topic}/${r.persona}/${r.questionSlug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...careerPages,
        ...combatPages,
        ...glossaryPages,
        ...frameworkPages,
        ...blogPages,
        ...answerPages,
        
        // Core Pages
        {
            url: `${baseUrl}/`,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/system-prompts`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/advisory`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/advisory/licensing`,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/doctrine`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        
        // Tool Pages
        {
            url: `${baseUrl}/tools/ai-roi-timeline`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/tools/pdi`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/ev-se`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/aueb`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/aper`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/audit-interview`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/scoring`,
            changeFrequency: 'monthly',
            priority: 0.5,
        },

        // Content Pages
        {
            url: `${baseUrl}/articles`,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/briefings`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/exogram`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/manifesto`,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/principal`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/book`,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/profiles`,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.5,
        },

        // Monetization Pages
        {
            url: `${baseUrl}/benchmark`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/certification`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/workshops`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/vault/curriculum/tracks`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/pricing`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources`,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resources/ai-courses`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/case-studies`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Lead magnets & help
        {
            url: `${baseUrl}/reports/state-of-ai-engineering`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/checklist`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/start-here`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Comparison pages
        {
            url: `${baseUrl}/compare`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compare/pdi-vs-sonarqube`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/compare/audit-interview-vs-leetcode`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/compare/aueb-vs-aws-cost-explorer`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/compare/audit-interview-vs-hackerrank`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/compare/ev-se-vs-jellyfish`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/compare/pdi-vs-codeclimate`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/compare/aper-vs-linearb`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Industry verticals
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Guides / Content Hubs
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Blog Recap Pages
        {
            url: `${baseUrl}/articles/recap/cio-com`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/recap/built-in`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/articles/recap/hackernoon`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Additional Comparison Pages
        {
            url: `${baseUrl}/compare/audit-interview-vs-traditional`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Audience Funnel Pages
        {
            url: `${baseUrl}/for-investors`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/for-boards`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/for-ctos`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/roi`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Additional Industry Verticals
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // More Industry + Comparison
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compare/pdi-vs-waydev`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Methodology + Social Proof
        {
            url: `${baseUrl}/testimonials`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/partnerships`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/vault/curriculum/tracks`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // More Verticals + Comparisons (Pass 20)
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/system`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compare/aper-vs-jellyfish`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Curriculum Module Pages (Vault Protected Previews)
        ...getAllModuleSlugs().map(slug => ({
            url: `${baseUrl}/vault/curriculum/tracks/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        // --- DYNAMICALLY INJECTED EXOGRAM DOCS ---
        // NOTE: /comparisons/* and /guides/* removed from sitemap — they all 308→ /vault/curriculum/tracks

        ...exogramDocs.map(doc => ({
            url: `${baseUrl}/exogram/docs/${doc.slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),



        // --- PROGRAMMATIC SEO (pSEO) MATRIX ---
        ...(pseoMatrixData || []).map((item: any) => ({
            url: `${baseUrl}/compare/${item.slug}`,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        })),

        // Legal
        {
            url: `${baseUrl}/legal`,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}


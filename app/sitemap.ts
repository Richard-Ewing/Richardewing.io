import { MetadataRoute } from 'next';
import { exogramDocs } from '@/lib/exogram-docs';
import { glossaryTerms } from './glossary/terms';
import { frameworks } from '@/lib/data';
import { tracks } from '@/app/lib/curriculum-tracks-ui';
import { getSortedArticles } from '@/app/lib/blog-data';
import { COMBAT_SEO_MATRIX } from '@/app/lib/combat-seo';
import { CAREER_PATHS } from '@/app/lib/career-paths';
import pseoMatrixData from '@/app/lib/pseo-matrix.json';

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


    const blogPages: MetadataRoute.Sitemap = getSortedArticles().map(article => ({
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

    return [
        ...careerPages,
        ...combatPages,
        ...glossaryPages,
        ...frameworkPages,
        ...blogPages,
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
        {
            url: `${baseUrl}/guides`,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/comparisons`,
            changeFrequency: 'monthly',
            priority: 0.7,
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
            url: `${baseUrl}/curriculum`,
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
            url: `${baseUrl}/industries`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/industries/fintech`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/healthtech`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/ai-first`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/saas`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/govtech`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/edtech`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/ecommerce`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/cybersecurity`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/industries/logistics`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Guides / Content Hubs
        {
            url: `${baseUrl}/industries/insurtech`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Guides / Content Hubs
        {
            url: `${baseUrl}/guides`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides/technical-debt`,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/guides/ai-economics`,
            changeFrequency: 'monthly',
            priority: 0.9,
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
            url: `${baseUrl}/industries/proptech`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/industries/legaltech`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // More Industry + Comparison
        {
            url: `${baseUrl}/industries/agritech`,
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
            url: `${baseUrl}/methodology`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
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
            url: `${baseUrl}/curriculum/tracks`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // More Verticals + Comparisons (Pass 20)
        {
            url: `${baseUrl}/industries/cleantech`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/industries/mediatech`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compare/aper-vs-jellyfish`,
        },
        {
            url: `${baseUrl}/industries/mediatech`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/compare/aper-vs-jellyfish`,
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Curriculum Module Pages (Vault Protected Previews)
        ...tracks.flatMap(t => t.modules.map(mod => ({
            url: `${baseUrl}${mod.href}`,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))),
        // --- DYNAMICALLY INJECTED 50/50 MILESTONE AND EXOGRAM DOCS ---
        ...[
            'rust-vs-go',
            'kafka-vs-rabbitmq',
            'redis-vs-memcached',
            'docker-swarm-vs-kubernetes',
            'grpc-vs-trpc',
            'cypress-vs-playwright',
            'cloudflare-vs-fastly',
            'snowflake-vs-redshift',
            'auth0-vs-clerk',
            'tailwind-vs-css-in-js',
            'pdi-vs-dora',
            'build-vs-buy',
            'graphql-vs-rest',
            'terraform-vs-pulumi',
            'datadog-vs-grafana',
            'revenue-per-engineer',
            'technical-debt-types',
            'agile-vs-kanban',
            'monolith-vs-microservices',
            'fine-tuning-vs-rag',
            'staff-augmentation-vs-delivery',
            'platform-team-vs-sres',
            'capex-vs-opex',
            'dora-vs-space',
            'aws-vs-gcp-vs-azure',
            'copilot-vs-cursor',
            'react-spa-vs-nextjs',
            'postgresql-vs-mongodb',
            'build-ai-vs-buy-ai',
            'soc2-vs-iso27001',
            'scrum-vs-safe',
            'okrs-vs-kpis',
            'feature-flags-vs-branching',
            'self-hosted-ai-vs-ai-saas',
            'tech-debt-vs-design-debt',
            'offshore-vs-nearshore',
            'unit-tests-vs-integration-tests',
            'clickhouse-vs-bigquery',
            'vertical-ai-vs-horizontal-ai',
            'aper-vs-rpe',
            'langchain-vs-llamaindex',
            'openai-vs-anthropic',
            'vercel-vs-netlify',
            'datadog-vs-newrelic',
            'github-actions-vs-gitlab-ci',
            'snowflake-vs-databricks',
            'kubernetes-vs-serverless',
            'linear-vs-jira',
            'supabase-vs-firebase',
            'dbt-vs-airflow'
        ].map(slug => ({
            url: `${baseUrl}/comparisons/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),

        ...[
            'technical-debt',
            'engineering-efficiency',
            'executive-technology-guide',
            'product-economics',
            'engineering-leadership-handbook',
            'multi-agent-orchestration',
            'cto-to-ctro',
            'ai-native-development-teams',
            'post-quantum-migration',
            'hybrid-ai-infrastructure',
            'ai-economics',
            'pe-due-diligence',
            'vc-technology-assessment',
            'saas-metrics',
            'cloud-finops',
            'ai-agent-compliance-framework',
            'confidential-computing-playbook',
            'gpu-finops-supercomputing',
            'ai-security-posture-2026',
            'spatial-computing-economics'
        ].map(slug => ({
            url: `${baseUrl}/guides/${slug}`,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),

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


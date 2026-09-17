import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const commonAllows = ['/', '/curriculum'];
    const commonDisallows = [
        '/_next/',
        '/admin/',
        '/api/',
        '/sandbox/',
        '/experimental/',
        '/brand/*.json',
        '/feed.xml',
        '/curriculum/',
        '/comparisons/',
        '/guides/',
        '/ai-integration/advisor',
        '/tools/*/vs/*',
    ];

    return {
        rules: [
            // Default: Allow all search engines
            {
                userAgent: '*',
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === SEARCH ENGINE CRAWLERS ===
            {
                userAgent: 'Googlebot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'GoogleOther',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Bingbot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Applebot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'YandexBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === AI SEARCH & RETRIEVAL BOTS (Critical for AI search visibility) ===
            {
                userAgent: 'OAI-SearchBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'ChatGPT-User',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Claude-SearchBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Claude-User',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'PerplexityBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Perplexity-User',
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === AI TRAINING CRAWLERS (Allowed for retrieval presence) ===
            {
                userAgent: 'GPTBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'ClaudeBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Google-Extended',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Google-CloudVertexBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'CCBot',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'cohere-ai',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Amazonbot',
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === SOCIAL & PLATFORM CRAWLERS ===
            {
                userAgent: 'meta-externalagent',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'facebookexternalhit',
                allow: commonAllows,
                disallow: commonDisallows,
            },
            {
                userAgent: 'Bytespider',
                allow: commonAllows,
                disallow: commonDisallows,
            },
        ],
        sitemap: 'https://www.richardewing.io/sitemap.xml',
        host: 'https://www.richardewing.io',
    };
}

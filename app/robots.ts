import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Default: Allow all search engines
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/_next/', '/admin/', '/api/', '/sandbox/', '/experimental/'],
            },

            // === SEARCH ENGINE CRAWLERS ===
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'GoogleOther',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'Applebot',
                allow: '/',
            },
            {
                userAgent: 'YandexBot',
                allow: '/',
            },

            // === AI SEARCH & RETRIEVAL BOTS (Critical for AI search visibility) ===
            {
                userAgent: 'OAI-SearchBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Claude-SearchBot',
                allow: '/',
            },
            {
                userAgent: 'Claude-User',
                allow: '/',
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'Perplexity-User',
                allow: '/',
            },

            // === AI TRAINING CRAWLERS (Allowed — we WANT retrieval presence) ===
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Google-CloudVertexBot',
                allow: '/',
            },
            {
                userAgent: 'CCBot',
                allow: '/',
            },
            {
                userAgent: 'cohere-ai',
                allow: '/',
            },
            {
                userAgent: 'Amazonbot',
                allow: '/',
            },

            // === SOCIAL & PLATFORM CRAWLERS ===
            {
                userAgent: 'meta-externalagent',
                allow: '/',
            },
            {
                userAgent: 'facebookexternalhit',
                allow: '/',
            },
            {
                userAgent: 'Bytespider',
                allow: '/',
            },
        ],
        sitemap: 'https://www.richardewing.io/sitemap.xml',
        host: 'https://www.richardewing.io',
    };
}

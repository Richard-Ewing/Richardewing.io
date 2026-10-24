import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const commonAllows = ['/', '/_next/static/', '/llms.txt', '/llms-full.txt'];
    const commonDisallows = [
        '/admin/',
        '/api/',
        '/sandbox/',
        '/experimental/',
        '/sign-in',
        '/sign-in/*',
        '/sign-up',
        '/sign-up/*',
        '/vault/team/',
        '/vault/team/*',
        '/vault/assets/',
        '/vault/assets/*',
        '/vault/join/',
        '/vault/join/*',
    ];

    return {
        rules: [
            // Default: Allow all legitimate search engines
            {
                userAgent: '*',
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === SEARCH ENGINE CRAWLERS ===
            {
                userAgent: [
                    'Googlebot',
                    'GoogleOther',
                    'Bingbot',
                    'Applebot',
                    'YandexBot',
                    'Bravebot',
                    'DuckDuckBot',
                ],
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === LIVE AI SEARCH, CITATION & ASSISTANT RETRIEVAL BOTS ===
            {
                userAgent: [
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'Claude-SearchBot',
                    'Claude-User',
                    'PerplexityBot',
                    'Perplexity-User',
                    'Google-Agent',
                    'Amzn-SearchBot',
                    'DuckAssistBot',
                    'ExaSearchBot',
                    'YouBot',
                ],
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === SOCIAL LINK PREVIEW BOTS ===
            {
                userAgent: [
                    'facebookexternalhit',
                    'LinkedInBot',
                    'Twitterbot',
                    'Slackbot',
                ],
                allow: commonAllows,
                disallow: commonDisallows,
            },

            // === PURE FOUNDATION MODEL TRAINING & UNSOLICITED BULK SCRAPERS (BLOCKED AT CLOUDFLARE EDGE) ===
            {
                userAgent: [
                    'GPTBot',
                    'ClaudeBot',
                    'Google-Extended',
                    'Google-CloudVertexBot',
                    'CCBot',
                    'Amazonbot',
                    'meta-externalagent',
                    'cohere-ai',
                    'Bytespider',
                    'PetalBot',
                    'Diffbot',
                    'ImagesiftBot',
                    'Omgilibot',
                ],
                disallow: '/',
            },
        ],
        sitemap: 'https://www.richardewing.io/sitemap.xml',
        host: 'https://www.richardewing.io',
    };
}


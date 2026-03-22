import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.richardewing.io';

    return [
        // Core Pages
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/advisory`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/doctrine`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Tool Pages
        {
            url: `${baseUrl}/tools/pdi`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/ev-se`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/aueb`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/aper`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/tools/audit-interview`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Content Pages
        {
            url: `${baseUrl}/articles`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/briefings`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/exogram`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/manifesto`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/principal`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/book`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/profiles`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/system`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },

        // Legal
        {
            url: `${baseUrl}/legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}

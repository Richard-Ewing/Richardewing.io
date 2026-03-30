import React from 'react';

/**
 * Universal JSON-LD Structured Data Injector.
 * Forces Google to interpret our routes as premium applications and educational courses
 * rather than simple static web pages or blogs.
 */
export default function StructuredData({ data }: { data: any }) {
    if (!data) return null;
    
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Helper functions for specific schema shapes

export const generateCourseSchema = (name: string, description: string, provider: string, url: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
        '@type': 'Organization',
        name: provider,
        sameAs: 'https://www.richardewing.io'
    },
    url
});

export const generateSoftwareApplicationSchema = (name: string, description: string, url: string) => ({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
    }
});

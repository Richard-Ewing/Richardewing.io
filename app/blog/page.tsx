import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import BlogContent from './blog-content';

export const metadata: Metadata = {
    title: 'AI & Engineering Economics Blog',
    description: 'Forensic insights, case studies, and research breakdowns on AI unit economics, R&D capital allocation, and technical debt.',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'AI economics insights', 'CTO blog'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: {
        title: 'AI & Engineering Economics Blog',
        description: 'Forensic insights, case studies, and research breakdowns on AI unit economics, R&D capital allocation, and technical debt.',
        url: 'https://www.richardewing.io/blog',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI & Engineering Economics Blog',
        description: 'Forensic insights, case studies, and research breakdowns on AI unit economics, R&D capital allocation, and technical debt.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

import { getSortedArticles } from '@/lib/blog-data';

export default function BlogPage() {
    const articles = getSortedArticles();
    const blogSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'AI & Engineering Economics Blog by Richard Ewing',
        'description': 'Forensic insights, case studies, and research breakdowns on AI unit economics, R&D capital allocation, and technical debt.',
        'numberOfItems': articles.length,
        'itemListElement': articles.map((article, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'url': `https://www.richardewing.io/blog/${article.slug}`,
            'name': article.title,
            'description': article.excerpt
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <BlogContent />
        </>
    );
}

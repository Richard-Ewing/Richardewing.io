import type { Metadata } from 'next';
import BlogContent from './blog-content';

export const metadata: Metadata = {
    title: 'Blog — 100+ Engineering Economics Articles | Richard Ewing',
    description: 'Over 100 articles on engineering economics, technical debt, AI costs, cloud optimization, DevOps ROI, and R&D capital management. Written by Richard Ewi...',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'product economics insights', 'CTO blog'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: { title: 'Blog — 100+ Engineering Economics Articles', description: '100+ articles on engineering economics, technical debt, AI costs, and R&D capital.', url: 'https://www.richardewing.io/blog', type: 'website' },
};

export default function BlogPage() {
    return <BlogContent />;
}

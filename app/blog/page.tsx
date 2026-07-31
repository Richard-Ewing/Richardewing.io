import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import BlogContent from './blog-content';

export const metadata: Metadata = {
    title: 'Engineering Economics Blog R&D Capital Audit | Richard Ewing',
    description: 'The engineering economics blog provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    keywords: ['engineering economics blog', 'technical debt articles', 'AI cost analysis', 'R&D capital management', 'AI economics insights', 'CTO blog'],
    alternates: { canonical: 'https://www.richardewing.io/blog' },
    openGraph: {
        title: 'Engineering Economics Blog R&D Capital Audit | Richard Ewing',
        description: 'The engineering economics blog provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
        url: 'https://www.richardewing.io/blog',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Engineering Economics Blog R&D Capital Audit | Richard Ewing',
        description: 'The engineering economics blog provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function BlogPage() {
    return <BlogContent />;
}

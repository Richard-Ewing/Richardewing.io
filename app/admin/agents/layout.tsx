import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Agent Operations Dashboard | Richard Ewing',
    description: 'Real-time autonomous agent monitoring dashboard. View agent run history, lead pipeline, SEO health, and content draft status.',
    robots: 'noindex, nofollow',
};

export default function AdminAgentsLayout({ children }: { children: React.ReactNode }) {
    return children;
}

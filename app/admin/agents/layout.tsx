import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Agent Operations Dashboard',
    description: 'Administrative dashboard for monitoring autonomous agent operations and system prompt performance.',
    robots: 'noindex, nofollow',
};

export default function AdminAgentsLayout({ children }: { children: React.ReactNode }) {
    return children;
}

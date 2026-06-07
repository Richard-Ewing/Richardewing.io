import type { Metadata } from 'next';
import CommandCenter from './content';

export const metadata: Metadata = {
    title: 'Command Center | Admin',
    description: 'Full operations dashboard — revenue, SEO, agents, pipeline.',
    robots: { index: false, follow: false },
};

export default function Page() { return <CommandCenter />; }

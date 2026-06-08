import type { Metadata } from 'next';
import { Suspense } from 'react';
import CommandCenter from './content';

export const metadata: Metadata = {
    title: 'Command Center | Admin',
    description: 'Full operations dashboard — revenue, SEO, agents, pipeline.',
    robots: { index: false, follow: false },
};

export default function Page() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-[#FAFAFA]">
                <div className="text-zinc-500 font-mono text-sm">Loading Command Center...</div>
            </div>
        }>
            <CommandCenter />
        </Suspense>
    );
}

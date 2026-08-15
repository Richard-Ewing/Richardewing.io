import type { Metadata } from 'next';
import { Suspense } from 'react';
import CommandCenter from './content';

export const metadata: Metadata = {
    title: 'Executive Command Center',
    description: 'Unified dashboard for tracking client diagnostic pipelines, research engagement milestones, and telemetry.',
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

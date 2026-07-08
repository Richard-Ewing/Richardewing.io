import type { Metadata } from 'next';
import { Suspense } from 'react';
import CommandCenter from './content';

export const metadata: Metadata = {
    title: 'Command Center & Strategy Diagnostics | Richard Ewing',
    description: 'Command Center provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
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

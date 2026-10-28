import type { Metadata } from 'next';
import { Suspense } from 'react';
import ExogramSidebar from '@/components/ExogramSidebar';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Exogram Developer Documentation | Richard Ewing',
  },
  description: 'Integration guides, EAAP v1.0 protocol specs, and policy manifest schemas for deploying the Exogram deterministic AI governance runtime.',
};

export default function ExogramDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-20 pb-20 min-h-screen">
      <div className="page-container flex flex-col md:flex-row relative">
        <div className="hidden md:block">
          <Suspense fallback={<aside className="w-64" />}>
            <ExogramSidebar />
          </Suspense>
        </div>

        <div className="md:hidden w-full">
          <Suspense fallback={<aside className="w-full" />}>
            <ExogramSidebar />
          </Suspense>
        </div>

        <div className="flex-1 max-w-4xl mx-auto px-4 md:px-12 py-8">
          {children}
        </div>
      </div>
    </main>
  );
}

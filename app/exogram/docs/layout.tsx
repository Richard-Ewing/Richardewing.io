import type { Metadata } from 'next';
import ExogramSidebar from '@/components/ExogramSidebar';

export const metadata: Metadata = {
    title: 'Exogram Developer Documentation',
    description: 'Integration guides, API references, and policy manifest specifications for the Exogram AI governance runtime.',
    alternates: {
        canonical: 'https://www.richardewing.io/exogram/docs',
    },
};

export default function ExogramDocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="pt-20 pb-20 min-h-screen">
            <div className="page-container flex flex-col md:flex-row relative">
                {/* Desktop Sidebar (Left) */}
                <div className="hidden md:block">
                    <ExogramSidebar />
                </div>
                
                {/* Mobile Sidebar Trigger (handled inside ExogramSidebar) */}
                <div className="md:hidden w-full">
                    <ExogramSidebar />
                </div>

                {/* Main Content Area (Right) */}
                <div className="flex-1 max-w-4xl mx-auto px-4 md:px-12 py-8">
                    {children}
                </div>
            </div>
        </main>
    );
}

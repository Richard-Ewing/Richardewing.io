import type { Metadata } from 'next';
import Link from 'next/link';
import ResearchCorpusExplorer from '@/app/components/ResearchCorpusExplorer';

export const metadata: Metadata = {
  title: 'Research Publications Catalog Published Works | Richard Ewing',
  description: 'Explore a complete research catalog of over 100 published works. Read articles on engineering economics and AI capital management.',
  alternates: {
    canonical: 'https://www.richardewing.io/research/publications',
  },
  openGraph: {
    title: 'Research Publications Catalog Published Works | Richard Ewing',
    description: 'Explore a complete research catalog of over 100 published works. Read articles on engineering economics and AI capital management.',
    url: 'https://www.richardewing.io/research/publications',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research Publications Catalog Published Works | Richard Ewing',
    description: 'Explore a complete research catalog of over 100 published works. Read articles on engineering economics and AI capital management.',
    images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
  },
};

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-zinc-950">
      <div className="page-container max-w-6xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/research" className="hover:underline">Research</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">Publications Catalog</span>
        </div>

        {/* Header Section */}
        <div className="space-y-4 border-b border-zinc-400 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 text-cyan-900 border border-cyan-300">
            Research Corpus • 100+ Published Works
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-zinc-950 tracking-tight font-grotesk">
            Research Publications Catalog
          </h1>

          <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-3xl">
            A comprehensive catalog of over 100 published works across CIO.com, Built In, Beehiiv, LinkedIn Newsletters, Mind the Product, and HackerNoon. Explore by knowledge domain, publisher, or research type.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/concepts"
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-cyan-900 text-white hover:bg-cyan-800 transition shadow-sm"
            >
              Canonical Concepts Directory →
            </Link>
            <a
              href="/api/csp/v1/export"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-900 text-white hover:bg-emerald-800 transition shadow-sm"
            >
              CSP Machine API ↗
            </a>
          </div>
        </div>

        {/* Interactive Filterable Corpus Explorer Component */}
        <ResearchCorpusExplorer />
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import ResearchCorpusExplorer from '@/app/components/ResearchCorpusExplorer';

export const metadata: Metadata = {
  title: 'Research & Publications Catalog | Richard Ewing',
  description: 'Master index of 100+ research publications across Tier-1 media (CIO.com, Built In, Mind the Product, HackerNoon), Beehiiv research laboratory, and LinkedIn newsletters.',
  alternates: {
    canonical: 'https://www.richardewing.io/research/publications',
  },
  openGraph: {
    title: 'Research & Publications Catalog | Richard Ewing',
    description: 'Master index of 100+ research publications organized by Knowledge Domain, publisher, and executable framework.',
    url: 'https://www.richardewing.io/research/publications',
    type: 'website',
  },
};

export default function ResearchPublicationsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Breadcrumbs & Intro */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/research" className="hover:underline">Research</Link>
            <span>/</span>
            <span className="text-zinc-400">Publications</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-grotesk">
            Research & Publications Catalog
          </h1>

          <p className="text-lg text-zinc-400 max-w-3xl leading-relaxed">
            A comprehensive corpus of over 100+ published works across Tier-1 media (CIO.com, Built In, Mind the Product, HackerNoon), the Beehiiv research laboratory, and LinkedIn newsletters—organized into 6 core Knowledge Domains.
          </p>

          {/* Nav Pills for Research Hub */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/research"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition"
            >
              ← Research Timeline
            </Link>
            <Link
              href="/research/publications"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-500/50 text-cyan-300"
            >
              Publications Catalog
            </Link>
            <Link
              href="/glossary"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition"
            >
              Canonical Glossary
            </Link>
            <Link
              href="/tools"
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition"
            >
              Diagnostic Tools
            </Link>
          </div>
        </div>

        {/* Interactive Explorer Component */}
        <ResearchCorpusExplorer />
      </div>
    </div>
  );
}

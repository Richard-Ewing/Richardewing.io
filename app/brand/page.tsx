import type { Metadata } from 'next';
import Link from 'next/link';
import BrandAssetsKit from '@/components/partnerships/BrandAssetsKit';

export const metadata: Metadata = {
  title: 'Brand Assets & Media Resources | Richard Ewing',
  description: 'Download official vector SVG logos, PNG marks, executive portraits, and brand guidelines for Richard Ewing and Exogram partnerships.',
  keywords: [
    'Richard Ewing logo download',
    'Richard Ewing brand assets',
    'Exogram media kit',
    'AI economics logo SVG',
    'Richard Ewing headshot',
    'partnership media resources'
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/brand',
  },
  openGraph: {
    title: 'Brand Assets & Media Resources | Richard Ewing',
    description: 'Download official vector SVG logos, PNG marks, executive portraits, and brand guidelines for Richard Ewing and Exogram partnerships.',
    url: 'https://www.richardewing.io/brand',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/assets/brand/richard-ewing-logo-dark.svg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Assets & Media Resources | Richard Ewing',
    description: 'Download official vector SVG logos, PNG marks, executive portraits, and brand guidelines for Richard Ewing and Exogram partnerships.',
    images: ['https://www.richardewing.io/assets/brand/richard-ewing-logo-dark.svg'],
  }
};

export default function BrandPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://www.richardewing.io/brand#webpage',
    'url': 'https://www.richardewing.io/brand',
    'name': 'Brand Assets & Media Kit | Richard Ewing',
    'description': 'Download official vector SVG logos, PNG marks, executive portraits, and brand guidelines for Richard Ewing and Exogram partnerships.',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.richardewing.io' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Partnerships', 'item': 'https://www.richardewing.io/partnerships' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Brand Resources', 'item': 'https://www.richardewing.io/brand' }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24 text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-container max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest">
          <Link href="/" className="hover:text-zinc-950 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/partnerships" className="hover:text-zinc-950 transition-colors">Partnerships</Link>
          <span>/</span>
          <span className="text-cyan-900 font-extrabold">Brand Resources</span>
        </div>

        {/* Page Hero */}
        <div className="border-b border-zinc-300 pb-10 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Official Media Kit &amp; Brand Resources
          </div>
          <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-4 tracking-tight">
            Brand Assets &amp; Media Kit
          </h1>
          <p className="text-lg sm:text-xl text-zinc-800 max-w-3xl leading-relaxed font-medium">
            This repository contains official vector logos, brand marks, executive portraits, hex color palettes, and boilerplate copy for partner directory submissions, co-marketing webinars, and editorial publications.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="/assets/brand/richard-ewing-brand-kit.zip"
              download="richard-ewing-brand-kit.zip"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white font-grotesk font-bold text-sm shadow-md transition-all"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Complete Brand Kit (.zip)
            </a>
            <Link
              href="/partnerships/integration-docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 font-grotesk font-bold text-sm shadow-xs transition-all"
            >
              View Technology Integration Docs →
            </Link>
          </div>
        </div>

        {/* Brand Assets Component */}
        <BrandAssetsKit />

      </div>
    </main>
  );
}

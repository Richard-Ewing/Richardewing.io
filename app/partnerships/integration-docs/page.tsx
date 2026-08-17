import type { Metadata } from 'next';
import Link from 'next/link';
import TechnologyIntegrationDocs from '@/components/partnerships/TechnologyIntegrationDocs';

export const metadata: Metadata = {
  title: 'Technology Integration Docs | Richard Ewing Partnerships',
  description: 'Technical integration docs explaining how developer tools, databases (Supabase, PostgreSQL), vector engines, and edge runtimes integrate with Richard Ewing diagnostics.',
  keywords: [
    'Supabase integration docs',
    'Richard Ewing integration guide',
    'PostgreSQL RLS audit schema',
    'pgvector code smell indexing',
    'MCP server audit protocol',
    'developer platform partnership docs'
  ],
  alternates: {
    canonical: 'https://www.richardewing.io/partnerships/integration-docs',
  },
  openGraph: {
    title: 'Technology Integration Docs | Richard Ewing Partnerships',
    description: 'Technical integration docs explaining how developer tools, databases (Supabase, PostgreSQL), vector engines, and edge runtimes integrate with Richard Ewing diagnostics.',
    url: 'https://www.richardewing.io/partnerships/integration-docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Integration Docs | Richard Ewing Partnerships',
    description: 'Technical integration docs explaining how developer tools, databases (Supabase, PostgreSQL), vector engines, and edge runtimes integrate with Richard Ewing diagnostics.',
  }
};

export default function IntegrationDocsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://www.richardewing.io/partnerships/integration-docs#article',
    'headline': 'Richard Ewing Platform & Developer Tool Integration Documentation',
    'description': 'Comprehensive developer guide explaining how third-party platforms, PostgreSQL databases (including Supabase), vector indices, and serverless edge runtimes connect to the R&D Capital Audit platform.',
    'url': 'https://www.richardewing.io/partnerships/integration-docs',
    'author': {
      '@type': 'Person',
      'name': 'Richard Ewing',
      'url': 'https://www.richardewing.io/about'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Richard Ewing Advisory',
      'url': 'https://www.richardewing.io'
    },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.richardewing.io' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Partnerships', 'item': 'https://www.richardewing.io/partnerships' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Integration Docs', 'item': 'https://www.richardewing.io/partnerships/integration-docs' }
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
          <span className="text-emerald-900 font-extrabold">Integration Docs</span>
        </div>

        {/* Hero Header */}
        <div className="border-b border-zinc-300 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            Developer Platform &amp; Ecosystem Documentation
          </div>
          <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-4 tracking-tight">
            Technology Integration Documentation
          </h1>
          <p className="text-lg sm:text-xl text-zinc-800 max-w-3xl leading-relaxed font-medium">
            This technical documentation outlines how developer platforms, database providers (such as Supabase and PostgreSQL), vector indexes, and serverless compute runtimes integrate with the Richard Ewing R&amp;D Capital Audit platform and Exogram systems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              href="/integrations/supabase"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-white font-grotesk font-bold text-sm shadow-md transition-all"
            >
              Supabase Integration Quickstart Guide →
            </Link>
            <Link
              href="/brand"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-300 font-grotesk font-bold text-sm shadow-xs transition-all"
            >
              Download Logo &amp; Media Kit →
            </Link>
          </div>
        </div>

        {/* Integration Architecture Component */}
        <TechnologyIntegrationDocs />

        {/* Supported Partner Ecosystem Section */}
        <section className="bg-white border border-zinc-300 rounded-3xl p-8 sm:p-10 shadow-sm mb-16">
          <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-4">
            Platform &amp; Service Compatibility Matrix
          </h2>
          <p className="text-sm text-zinc-700 font-medium mb-8">
            Our diagnostic and audit engines interface with standard cloud infrastructure protocols:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                Relational &amp; Vector Databases
              </div>
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-2">Supabase &amp; PostgreSQL</h3>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Stores sovereign audit events, PDI time-series data, and AST embeddings via native pgvector extensions with Row-Level Security.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div className="font-mono text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">
                Vector Retrieval Engines
              </div>
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-2">Pinecone &amp; Vertex AI</h3>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Indexes historical pull requests and architectural modifications for automated technical insolvency similarity queries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200">
              <div className="font-mono text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">
                AI Agent Tool Interfaces
              </div>
              <h3 className="text-base font-bold font-grotesk text-zinc-950 mb-2">Model Context Protocol (MCP)</h3>
              <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                Exposes diagnostic tools directly to AI coding assistants and IDEs (Cursor, Claude Desktop, Antigravity) with typed parameters.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

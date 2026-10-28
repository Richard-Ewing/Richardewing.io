import type { Metadata } from 'next';
import Content from './content';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export const metadata: Metadata = {
  title: 'Executive Boardroom AI Risk Matrix',
  description: 'Aggregate technical debt, revenue per engineer, and AI unit margin diagnostics into a single boardroom scorecard for CEOs, CFOs, and directors.',
  alternates: {
    canonical: 'https://www.richardewing.io/tools/board-room',
  },
  openGraph: {
    title: 'Executive Boardroom AI Risk Matrix | Richard Ewing',
    description: 'Aggregate technical debt, revenue per engineer, and AI unit margin diagnostics into a single boardroom scorecard for CEOs, CFOs, and directors.',
    url: 'https://www.richardewing.io/tools/board-room',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=Executive+Boardroom+AI+Risk+Matrix&category=Board+Governance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Boardroom AI Risk Matrix | Richard Ewing',
    description: 'Aggregate technical debt, revenue per engineer, and AI unit margin diagnostics into a single boardroom scorecard for CEOs, CFOs, and directors.',
    images: ['https://www.richardewing.io/api/og?title=Executive+Boardroom+AI+Risk+Matrix&category=Board+Governance'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
    { '@type': 'ListItem', position: 2, name: 'Diagnostic Tools', item: 'https://www.richardewing.io/tools' },
    { '@type': 'ListItem', position: 3, name: 'Executive Boardroom AI Risk Matrix', item: 'https://www.richardewing.io/tools/board-room' },
  ],
};

export default function BoardRoomPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-4">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35] mb-2">
          Boardroom Telemetry Rollup
        </p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1e2924] mb-3">
          Executive Boardroom AI Risk &amp; Solvency Matrix
        </h1>
        <p itemProp="description" className="text-base text-zinc-700 leading-relaxed max-w-3xl">
          The Executive Boardroom AI Risk Matrix is a composite governance dashboard that consolidates your Product Debt Index (PDI), AI Unit Economics Benchmark (AUEB), and Revenue Per Engineer (APER) runs into a single CFO and board audit readout.
        </p>
      </section>
      <Content />
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <DiagnosticCTA
          variant="primary"
          title="Preparing for a Board Meeting or M&A Diligence Review?"
          subtitle="Turn your diagnostic runs into a verified 12-slide CFO and Board Defense Blueprint or book a live 60-minute working session."
          metrics={['Board Readout', 'P&L Defense', 'M&A Ready']}
        />
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: 'Engineering Efficiency & AI Benchmarks',
  description: 'Compare your revenue per engineer, maintenance ratio, and AI token margin against stage-adjusted B2B SaaS benchmarks compiled by Richard Ewing.',
  alternates: {
    canonical: 'https://www.richardewing.io/benchmarks',
  },
  openGraph: {
    title: 'Engineering Efficiency & AI Benchmarks | Richard Ewing',
    description: 'Compare your revenue per engineer, maintenance ratio, and AI token margin against stage-adjusted B2B SaaS benchmarks compiled by Richard Ewing.',
    url: 'https://www.richardewing.io/benchmarks',
    siteName: 'Richard Ewing',
    type: 'website',
    images: [{ url: 'https://www.richardewing.io/api/og?title=Engineering+Efficiency+Benchmarks&category=Benchmark+Data' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Efficiency & AI Benchmarks | Richard Ewing',
    description: 'Compare your revenue per engineer, maintenance ratio, and AI token margin against stage-adjusted B2B SaaS benchmarks compiled by Richard Ewing.',
    images: ['https://www.richardewing.io/api/og?title=Engineering+Efficiency+Benchmarks&category=Benchmark+Data'],
  },
};

export default function BenchmarksPage() {
  return <Content />;
}

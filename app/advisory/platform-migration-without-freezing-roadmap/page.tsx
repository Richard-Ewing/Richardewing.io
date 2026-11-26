import type { Metadata } from 'next';
import MigrationRoadmapClient from './MigrationRoadmapClient';

export const metadata: Metadata = {
  title: 'Platform Migration Without Freeze',
  description:
    'How to replace aging software systems in quarters without halting customer releases, losing enterprise renewals, or burning a full year of payroll.',
  alternates: {
    canonical: 'https://www.richardewing.io/advisory/platform-migration-without-freezing-roadmap',
  },
  openGraph: {
    title: 'Platform Migration Without Freeze | Richard Ewing',
    description:
      'Keep shipping customer features while swapping out old back-office software in safe parallel slices.',
    url: 'https://www.richardewing.io/advisory/platform-migration-without-freezing-roadmap',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Migration Without Freeze | Richard Ewing',
    description:
      'Keep shipping customer features while swapping out old back-office software in safe parallel slices.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'Why do full roadmap freezes during a platform rebuild almost always blow past deadline?',
    a: 'Because customers and sales teams do not stop asking for fixes just because engineering locked the doors for nine months. Halfway through the freeze, urgent enterprise deals force emergency patches onto the old system, splitting your staff across two half-finished products.',
  },
  {
    q: 'How do you move off an aging platform while still shipping new customer work?',
    a: 'You split the transition into four quarterly slices where new customer work runs on the modern path first while old accounts stay untouched until each piece proves steady in live use. Both paths run side by side without gambling the whole company on one big weekend switch.',
  },
  {
    q: 'What should a CEO or CFO demand to see every thirty days during a migration?',
    a: 'Demand proof of old workflows actually turned off and retired, not ninety percent completion charts. If old servers and old support queues are still running alongside the new build after six months, you are paying double payroll.',
  },
  {
    q: 'When does shutting down features for a clean weekend cutover actually beat parallel slicing?',
    a: 'Shut down and swap over a weekend when your product is small, serves internal staff only, or can afford forty-eight hours of quiet maintenance without losing paying customers. Parallel migration exists for active revenue products where freezing sales for two quarters would kill growth.',
  },
];

export default function PlatformMigrationWithoutFreezingRoadmapPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'They froze the roadmap for nine months to rebuild. Customers left before month six.',
    description:
      'Replacing an aging software platform without freezing your roadmap moves one workflow slice at a time while new customer features keep shipping. Parallel cutover avoids nine-month sales droughts and risky single-weekend launches.',
    datePublished: '2026-11-25',
    dateModified: '2026-11-25',
    image: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Richard Ewing Advisory',
      url: 'https://www.richardewing.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
      },
    },
    mainEntityOfPage:
      'https://www.richardewing.io/advisory/platform-migration-without-freezing-roadmap',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Advisory', item: 'https://www.richardewing.io/advisory' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Platform Migration Without Freeze',
        item: 'https://www.richardewing.io/advisory/platform-migration-without-freezing-roadmap',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <MigrationRoadmapClient faqs={FAQ_ITEMS} />
    </>
  );
}

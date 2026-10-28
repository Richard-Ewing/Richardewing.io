import React from 'react';

export interface HowToStepItem {
  name: string;
  text: string;
}

export interface ToolServerHeaderProps {
  slug: string;
  eyebrow: string;
  h1: string;
  executiveAnswer: string;
  appName: string;
  appDescription: string;
  howToName: string;
  howToDescription: string;
  steps: HowToStepItem[];
}

export default function ToolServerHeader({
  slug,
  eyebrow,
  h1,
  executiveAnswer,
  appName,
  appDescription,
  howToName,
  howToDescription,
  steps,
}: ToolServerHeaderProps) {
  const url = `https://www.richardewing.io/tools/${slug}`;

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: appName,
    url,
    description: appDescription,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      '@id': 'https://www.richardewing.io/#person',
      name: 'Richard Ewing',
      jobTitle: 'Product & AI Economist',
      url: 'https://www.richardewing.io',
    },
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howToName,
    description: howToDescription,
    totalTime: 'PT2M',
    tool: {
      '@type': 'HowToTool',
      name: appName,
    },
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.richardewing.io',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Diagnostics & Tools',
        item: 'https://www.richardewing.io/tools',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: appName,
        item: url,
      },
    ],
  };

  return (
    <header className="max-w-5xl mx-auto px-6 pt-28 pb-6 border-b border-[#24332b]/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#b77a35] mb-2">
        {eyebrow}
      </p>
      <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#162e26] leading-[1.15] mb-4">
        {h1}
      </h1>
      <p
        itemProp="description"
        className="font-sans text-base sm:text-lg text-[#4a5850] leading-relaxed max-w-3xl"
      >
        {executiveAnswer}
      </p>
    </header>
  );
}

import React from 'react';
import Link from 'next/link';

export interface PublicationCardProps {
  id?: string;
  title: string;
  publisher: string;
  date?: string;
  thesis: string;
  url: string;
  domain?: string;
  readTime?: string;
  className?: string;
  relatedConceptIds?: string[];
  relatedFrameworkSlugs?: string[];
  relatedToolIds?: string[];
  relatedGlossarySlugs?: string[];
}

const FRAMEWORK_ROUTE_MAP: Record<string, { href: string; label: string }> = {
  'product-economics': { href: '/framework/product', label: 'product economics framework' },
  'product-leadership': { href: '/framework/cpo-product-strategy', label: 'CPO strategy framework' },
  'software-capital': { href: '/framework/cfo-capital-allocation', label: 'software capital framework' },
  'board-governance': { href: '/framework/board-fiduciary-governance', label: 'board governance framework' },
  'career-economics': { href: '/careers', label: 'career economics' },
  'talent-intelligence': { href: '/careers', label: 'talent intelligence' },
  'runtime-architecture': { href: '/runtime-architecture', label: 'runtime architecture' },
};

const TOOL_ROUTE_MAP: Record<string, { href: string; label: string }> = {
  'reality-check': { href: '/reality-check', label: 'reality check diagnostic' },
  'runtime-governance': { href: '/framework/runtime-governance', label: 'runtime governance' },
  'war-room': { href: '/tools/board-room', label: 'board room tool' },
  'agentic-token-simulator': { href: '/tools/agent-router', label: 'agent router tool' },
};

const NON_KEEP_GLOSSARY_MAP: Record<string, { href: string; label: string }> = {
  'consumption-meter-trap': { href: '/concepts/consumption-meter-trap', label: 'consumption meter trap' },
  'exception-queue-penalty': { href: '/glossary/supervisory-review-queue', label: 'supervisory review queue' },
  'context-engine-architecture': { href: '/concepts/context-engine-architecture', label: 'context engine architecture' },
  'ai-tokenomics': { href: '/concepts/ai-tokenomics', label: 'AI tokenomics' },
  'board-level-ai-governance': { href: '/concepts/board-level-ai-governance', label: 'board AI governance' },
  'ai-margin-squeeze': { href: '/glossary/ai-unit-economics', label: 'AI unit economics' },
  'math-of-ruin': { href: '/concepts/math-of-ruin', label: 'math of ruin' },
  'probabilistic-supervision-failure': { href: '/concepts/probabilistic-supervision-failure', label: 'probabilistic supervision' },
  'platform-engine-leverage': { href: '/concepts/platform-engine-leverage', label: 'platform engine leverage' },
  'assumption-invalidation-loops': { href: '/concepts/assumption-invalidation-loops', label: 'assumption invalidation' },
};

export function PublicationCard({
  title,
  publisher,
  date,
  thesis,
  url,
  domain,
  readTime,
  className = '',
  relatedConceptIds = [],
  relatedFrameworkSlugs = [],
  relatedToolIds = [],
  relatedGlossarySlugs = [],
}: PublicationCardProps) {
  const isExternal = url.startsWith('http');

  const rawInternalLinks = [
    ...relatedConceptIds
      .filter((slug) => slug !== 'induced-demand')
      .slice(0, 1)
      .map((slug) => ({
        href: `/concepts/${slug}`,
        label: slug.replace(/-/g, ' '),
      })),
    ...relatedFrameworkSlugs.slice(0, 1).map((slug) =>
      FRAMEWORK_ROUTE_MAP[slug] || {
        href: `/framework/${slug}`,
        label: `${slug.replace(/-/g, ' ')} framework`,
      }
    ),
    ...relatedToolIds.slice(0, 1).map((slug) =>
      TOOL_ROUTE_MAP[slug] || {
        href: `/tools/${slug}`,
        label: `${slug.replace(/-/g, ' ')} tool`,
      }
    ),
    ...relatedGlossarySlugs.slice(0, 1).map((slug) =>
      NON_KEEP_GLOSSARY_MAP[slug] || {
        href: `/glossary/${slug}`,
        label: slug.replace(/-/g, ' '),
      }
    ),
  ];

  const seenHrefs = new Set<string>();
  const internalLinks = rawInternalLinks.filter((link) => {
    if (seenHrefs.has(link.href)) return false;
    seenHrefs.add(link.href);
    return true;
  });

  return (
    <article
      className={`group rounded-2xl border border-[var(--line,rgba(36,51,43,0.16))] bg-[var(--paper2,#ebe7dc)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[var(--forest,#29473b)] ${className}`}
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-[var(--gold,#b77a35)] mb-3">
          <span className="font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--paper,#f4f1e9)] border border-[var(--line,rgba(36,51,43,0.12))]">
            {publisher}
          </span>
          <div className="flex items-center gap-2 text-zinc-500">
            {readTime && <span>{readTime}</span>}
            {date && <span>{date}</span>}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug text-[var(--ink,#1e2924)] group-hover:text-[var(--forest,#29473b)] transition-colors mb-3">
          <a
            href={url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="hover:underline"
          >
            {title}
          </a>
        </h3>

        {/* Thesis Summary */}
        <p className="text-xs sm:text-sm text-[var(--muted,#66716a)] leading-relaxed line-clamp-3 mb-4">
          {thesis}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          {domain && (
            <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-white/60 px-2 py-0.5 rounded border border-[var(--line,rgba(36,51,43,0.1))]">
              {domain}
            </span>
          )}
          {internalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-block text-[10px] font-mono capitalize text-[var(--forest,#29473b)] bg-white/80 hover:bg-white px-2 py-0.5 rounded border border-[var(--line,rgba(36,51,43,0.16))] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <a
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--line,rgba(36,51,43,0.12))] text-xs font-semibold text-[var(--forest,#29473b)]"
      >
        <span>Read on {publisher}</span>
        <span className="text-[var(--gold,#b77a35)] group-hover:translate-x-1 transition-transform">
          ↗
        </span>
      </a>
    </article>
  );
}

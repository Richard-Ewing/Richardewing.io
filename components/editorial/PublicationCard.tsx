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

  const internalLinks = [
    ...relatedConceptIds.slice(0, 1).map((slug) => ({
      href: `/concepts/${slug}`,
      label: slug.replace(/-/g, ' '),
    })),
    ...relatedFrameworkSlugs.slice(0, 1).map((slug) => ({
      href: `/framework/${slug}`,
      label: `${slug.replace(/-/g, ' ')} framework`,
    })),
    ...relatedToolIds.slice(0, 1).map((slug) => ({
      href: `/tools/${slug}`,
      label: `${slug.replace(/-/g, ' ')} tool`,
    })),
    ...relatedGlossarySlugs.slice(0, 1).map((slug) => ({
      href: `/glossary/${slug}`,
      label: slug.replace(/-/g, ' '),
    })),
  ];

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

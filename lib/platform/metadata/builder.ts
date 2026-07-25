import type { Metadata } from 'next';

/**
 * AI Economics Commercial Knowledge Platform - Type-Safe Metadata Builders
 * Subsystem: /lib/platform/metadata
 */

export interface BaseMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

const DOMAIN = 'https://www.richardewing.io';
const DEFAULT_OG_IMAGE = `${DOMAIN}/assets/images/headshot.jpg`;

/**
 * Construct Metadata for Service & Advisory pages.
 */
export function buildServiceMetadata({ title, description, path, ogImage, noindex }: BaseMetadataOptions): Metadata {
  const fullTitle = `${title.replace(/\s*\|.*/, '')} | Richard Ewing`;
  const canonicalUrl = `${DOMAIN}${path}`;

  return {
    title: fullTitle,
    description: description.slice(0, 155),
    alternates: { canonical: canonicalUrl },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: description.slice(0, 155),
      url: canonicalUrl,
      siteName: 'Richard Ewing',
      type: 'website',
      images: [{ url: ogImage || DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description.slice(0, 155),
      images: [ogImage || DEFAULT_OG_IMAGE],
    },
  };
}

/**
 * Construct Metadata for Research Articles.
 */
export function buildArticleMetadata({ title, description, path, ogImage, noindex }: BaseMetadataOptions): Metadata {
  const fullTitle = `${title.replace(/\s*\|.*/, '')} | Richard Ewing`;
  const canonicalUrl = `${DOMAIN}${path}`;

  return {
    title: fullTitle,
    description: description.slice(0, 155),
    alternates: { canonical: canonicalUrl },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: description.slice(0, 155),
      url: canonicalUrl,
      siteName: 'Richard Ewing',
      type: 'article',
      images: [{ url: ogImage || DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description.slice(0, 155),
      images: [ogImage || DEFAULT_OG_IMAGE],
    },
  };
}

/**
 * Construct Metadata for Entity / Ecosystem pages (Exogram, CareerWin, About).
 */
export function buildEntityMetadata({ title, description, path, ogImage, noindex }: BaseMetadataOptions): Metadata {
  const fullTitle = `${title.replace(/\s*\|.*/, '')} | Richard Ewing`;
  const canonicalUrl = `${DOMAIN}${path}`;

  return {
    title: fullTitle,
    description: description.slice(0, 155),
    alternates: { canonical: canonicalUrl },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: description.slice(0, 155),
      url: canonicalUrl,
      siteName: 'Richard Ewing',
      type: 'profile',
      images: [{ url: ogImage || DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description.slice(0, 155),
      images: [ogImage || DEFAULT_OG_IMAGE],
    },
  };
}

import { notFound } from 'next/navigation';

export default function MissingToolFallback() {
    // Return a proper 404 for non-existent tool paths.
    // Previously this was a 308 redirect to /tools which caused
    // "Page has redirected JavaScript" and "3XX redirect in sitemap" errors.
    // Explicit tool directories (like /tools/aueb) take precedence in Next.js routing.
    notFound();
}

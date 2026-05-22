import { notFound } from 'next/navigation';

export default function CatchAllRoute() {
    // Return a proper 404 for unknown routes.
    // Previously this was a 308 redirect to '/' which caused:
    // - Ahrefs: "Page has redirected JavaScript" (1,547 entries)
    // - Ahrefs: "3XX redirect in sitemap"  
    // - Ahrefs: "Canonical points to redirect"
    // - Google: Confusion about which page is authoritative
    //
    // A proper 404 is SEO-correct: it tells crawlers this page
    // doesn't exist, so they stop wasting crawl budget on it.
    notFound();
}

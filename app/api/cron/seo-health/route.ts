import { NextResponse } from 'next/server';
import { logAgentRun, createAgentTimer } from '@/lib/agents/logger';

/**
 * AGENT 3: SEO Health Monitor Agent
 * 
 * Schedule: Every day at 4am UTC
 * Trigger: Vercel Cron → GET /api/cron/seo-health
 * 
 * What it does:
 * 1. Fetches the live sitemap from richardewing.io/sitemap.xml
 * 2. Validates all URLs respond with 200 status
 * 3. Checks for canonical tag consistency
 * 4. Submits changed URLs to Google via IndexNow API
 * 5. Logs broken URLs, redirect chains, and missing canonicals
 * 
 * This agent catches SEO regressions BEFORE Google penalizes you.
 * No human intervention required.
 */

const SITE_URL = 'https://www.richardewing.io';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '3340d267ae86446787754f0e60a3edc5';

interface HealthCheckResult {
    url: string;
    status: number;
    redirectTarget?: string;
    hasCanonical: boolean;
    canonicalUrl?: string;
    canonicalMismatch: boolean;
    responseTimeMs: number;
    error?: string;
}

async function checkUrl(url: string): Promise<HealthCheckResult> {
    const start = Date.now();
    try {
        const response = await fetch(url, {
            method: 'GET',
            redirect: 'follow',
            headers: { 'User-Agent': 'RichardEwing-SEO-Agent/1.0' },
            signal: AbortSignal.timeout(10000), // 10s timeout
        });

        const responseTime = Date.now() - start;
        const html = await response.text();

        // Extract canonical tag
        const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
        const canonical = canonicalMatch?.[1] || '';
        const hasCanonical = !!canonical;
        const canonicalMismatch = hasCanonical && canonical !== url && !canonical.endsWith(new URL(url).pathname);

        return {
            url,
            status: response.status,
            redirectTarget: response.redirected ? response.url : undefined,
            hasCanonical,
            canonicalUrl: canonical || undefined,
            canonicalMismatch,
            responseTimeMs: responseTime
        };
    } catch (error) {
        return {
            url,
            status: 0,
            hasCanonical: false,
            canonicalMismatch: false,
            responseTimeMs: Date.now() - start,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

async function submitToIndexNow(urls: string[]): Promise<{ submitted: number; error?: string }> {
    if (!INDEXNOW_KEY || urls.length === 0) {
        return { submitted: 0 };
    }

    try {
        const response = await fetch('https://api.indexnow.org/IndexNow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                host: 'www.richardewing.io',
                key: INDEXNOW_KEY,
                keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
                urlList: urls.slice(0, 10000) // IndexNow cap
            })
        });

        if (response.ok || response.status === 202) {
            return { submitted: urls.length };
        }
        return { submitted: 0, error: `IndexNow returned ${response.status}` };
    } catch (error) {
        return { submitted: 0, error: error instanceof Error ? error.message : 'Unknown' };
    }
}

export async function GET(req: Request) {
    const timer = createAgentTimer();

    try {
        // Verify cron authentication
        const authHeader = req.headers.get('authorization');
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
        }

        // 1. Fetch the live sitemap
        const sitemapResponse = await fetch(`${SITE_URL}/sitemap.xml`, {
            headers: { 'User-Agent': 'RichardEwing-SEO-Agent/1.0' },
            signal: AbortSignal.timeout(15000),
        });

        if (!sitemapResponse.ok) {
            throw new Error(`Sitemap fetch failed: ${sitemapResponse.status}`);
        }

        const sitemapXml = await sitemapResponse.text();

        // 2. Extract URLs from sitemap
        const urlMatches = sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g);
        const sitemapUrls = [...urlMatches].map(m => m[1]);

        if (sitemapUrls.length === 0) {
            throw new Error('No URLs found in sitemap');
        }

        // 3. Sample check — check up to 50 URLs per run to stay within function limits
        // Rotate through the sitemap so all pages get checked over time
        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        const batchSize = 50;
        const startIndex = (dayOfYear * batchSize) % sitemapUrls.length;
        const urlsToCheck = sitemapUrls.slice(startIndex, startIndex + batchSize);

        // 4. Run health checks in parallel (batched)
        const results: HealthCheckResult[] = [];
        const batchLimit = 10; // Concurrency limit
        for (let i = 0; i < urlsToCheck.length; i += batchLimit) {
            const batch = urlsToCheck.slice(i, i + batchLimit);
            const batchResults = await Promise.all(batch.map(checkUrl));
            results.push(...batchResults);
        }

        // 5. Analyze results
        const broken = results.filter(r => r.status >= 400 || r.status === 0);
        const redirected = results.filter(r => r.redirectTarget);
        const canonicalIssues = results.filter(r => r.canonicalMismatch);
        const slow = results.filter(r => r.responseTimeMs > 3000);
        const healthy = results.filter(r => r.status === 200 && !r.canonicalMismatch);

        // 6. Submit healthy URLs to IndexNow
        const indexNowResult = await submitToIndexNow(healthy.map(r => r.url));

        // 7. Log results
        await logAgentRun({
            agent: 'seo-health',
            status: broken.length > 0 ? 'failed' : 'completed',
            duration_ms: timer.elapsed(),
            items_processed: results.length,
            summary: `Checked ${results.length}/${sitemapUrls.length} URLs. ${broken.length} broken, ${redirected.length} redirected, ${canonicalIssues.length} canonical issues, ${slow.length} slow. IndexNow: ${indexNowResult.submitted} submitted.`,
            metadata: {
                total_sitemap_urls: sitemapUrls.length,
                checked: results.length,
                broken: broken.map(b => ({ url: b.url, status: b.status, error: b.error })),
                redirected: redirected.map(r => ({ url: r.url, target: r.redirectTarget })),
                canonicalIssues: canonicalIssues.map(c => ({ url: c.url, canonical: c.canonicalUrl })),
                slow: slow.map(s => ({ url: s.url, ms: s.responseTimeMs })),
                indexNow: indexNowResult
            }
        });

        return NextResponse.json({
            success: true,
            total_sitemap_urls: sitemapUrls.length,
            checked: results.length,
            healthy: healthy.length,
            broken: broken.length,
            redirected: redirected.length,
            canonical_issues: canonicalIssues.length,
            slow_pages: slow.length,
            indexnow_submitted: indexNowResult.submitted,
            duration_ms: timer.elapsed(),
            // Surface broken URLs for visibility
            broken_urls: broken.map(b => ({ url: b.url, status: b.status, error: b.error })),
            canonical_mismatches: canonicalIssues.map(c => ({ url: c.url, canonical: c.canonicalUrl })),
        });

    } catch (error) {
        await logAgentRun({
            agent: 'seo-health',
            status: 'failed',
            duration_ms: timer.elapsed(),
            items_processed: 0,
            summary: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
            metadata: { error: String(error) }
        });
        console.error('[AGENT:SEO-HEALTH] Fatal error:', error);
        return NextResponse.json({ error: 'Agent execution failed.' }, { status: 500 });
    }
}

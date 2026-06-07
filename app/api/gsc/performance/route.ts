import { NextResponse } from 'next/server';
import { google } from 'googleapis';

// GSC Performance Data API
// Pulls impressions, clicks, CTR, position from Google Search Console
// Used by: /api/cron/seo-optimizer agent + /admin/seo-performance dashboard

const SITE_URL = 'https://www.richardewing.io';

function getAuth() {
    const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    if (!credentials) {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON environment variable not set');
    }

    const parsed = JSON.parse(credentials);
    return new google.auth.GoogleAuth({
        credentials: parsed,
        scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });
}

export async function GET(request: Request) {
    // Auth check
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    const { searchParams } = new URL(request.url);

    // Allow both cron auth and admin auth
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const auth = getAuth();
        const searchconsole = google.searchconsole({ version: 'v1', auth });

        const days = parseInt(searchParams.get('days') || '28');
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        const formatDate = (d: Date) => d.toISOString().split('T')[0];

        // Query 1: Overall page performance
        const pagePerformance = await searchconsole.searchanalytics.query({
            siteUrl: SITE_URL,
            requestBody: {
                startDate: formatDate(startDate),
                endDate: formatDate(endDate),
                dimensions: ['page'],
                rowLimit: 500,
            },
        });

        // Query 2: Query-level performance for top pages
        const queryPerformance = await searchconsole.searchanalytics.query({
            siteUrl: SITE_URL,
            requestBody: {
                startDate: formatDate(startDate),
                endDate: formatDate(endDate),
                dimensions: ['query'],
                rowLimit: 200,
            },
        });

        // Categorize pages
        const pages = (pagePerformance.data.rows || []).map(row => {
            const url = row.keys?.[0] || '';
            const path = url.replace(SITE_URL, '');
            let category = 'other';

            if (path.startsWith('/glossary')) category = 'glossary';
            else if (path.startsWith('/tools')) category = 'tools';
            else if (path.startsWith('/advisory') || path.startsWith('/for-') || path.startsWith('/roi') || path.startsWith('/pricing')) category = 'advisory';
            else if (path.startsWith('/vault') || path.startsWith('/curriculum') || path.startsWith('/certification') || path.startsWith('/workshops') || path.startsWith('/skills')) category = 'curriculum';
            else if (path.startsWith('/blog')) category = 'blog';
            else if (path.startsWith('/exogram') || path.startsWith('/doctrine') || path.startsWith('/methodology')) category = 'framework';

            return {
                url: path,
                category,
                clicks: row.clicks || 0,
                impressions: row.impressions || 0,
                ctr: row.ctr || 0,
                position: row.position || 0,
            };
        });

        // Aggregate by category
        const categories: Record<string, { clicks: number; impressions: number; pages: number }> = {};
        for (const page of pages) {
            if (!categories[page.category]) {
                categories[page.category] = { clicks: 0, impressions: 0, pages: 0 };
            }
            categories[page.category].clicks += page.clicks;
            categories[page.category].impressions += page.impressions;
            categories[page.category].pages += 1;
        }

        // Find low-CTR pages in paid funnel (tools, advisory, curriculum)
        const lowCtrPages = pages
            .filter(p => ['tools', 'advisory', 'curriculum'].includes(p.category))
            .filter(p => p.impressions > 50 && p.ctr < 0.02)
            .sort((a, b) => b.impressions - a.impressions);

        // Find high-impression glossary vs tools/advisory comparison
        const glossaryImpressions = categories['glossary']?.impressions || 0;
        const toolsImpressions = categories['tools']?.impressions || 0;
        const advisoryImpressions = categories['advisory']?.impressions || 0;
        const curriculumImpressions = categories['curriculum']?.impressions || 0;
        const paidFunnelImpressions = toolsImpressions + advisoryImpressions + curriculumImpressions;

        // Top queries
        const queries = (queryPerformance.data.rows || []).map(row => ({
            query: row.keys?.[0] || '',
            clicks: row.clicks || 0,
            impressions: row.impressions || 0,
            ctr: row.ctr || 0,
            position: row.position || 0,
        }));

        // Query 3: Page + Query pairs (for auto-rewriter — which queries drive which pages)
        let pageQueries: Record<string, string[]> = {};
        try {
            const pageQueryPerformance = await searchconsole.searchanalytics.query({
                siteUrl: SITE_URL,
                requestBody: {
                    startDate: formatDate(startDate),
                    endDate: formatDate(endDate),
                    dimensions: ['page', 'query'],
                    rowLimit: 1000,
                },
            });
            for (const row of pageQueryPerformance.data.rows || []) {
                const pageUrl = (row.keys?.[0] || '').replace(SITE_URL, '');
                const query = row.keys?.[1] || '';
                if (!pageQueries[pageUrl]) pageQueries[pageUrl] = [];
                pageQueries[pageUrl].push(query);
            }
        } catch { /* page+query dimension may not be available */ }

        return NextResponse.json({
            success: true,
            period: { startDate: formatDate(startDate), endDate: formatDate(endDate), days },
            summary: {
                totalPages: pages.length,
                totalClicks: pages.reduce((sum, p) => sum + p.clicks, 0),
                totalImpressions: pages.reduce((sum, p) => sum + p.impressions, 0),
                glossaryVsPaidFunnel: {
                    glossaryImpressions,
                    paidFunnelImpressions,
                    ratio: glossaryImpressions > 0 ? (paidFunnelImpressions / glossaryImpressions).toFixed(2) : 'N/A',
                    goal: 'Paid funnel impressions should exceed glossary impressions',
                },
            },
            categories,
            lowCtrPages: lowCtrPages.slice(0, 20),
            topPages: pages.sort((a, b) => b.impressions - a.impressions).slice(0, 30),
            topQueries: queries.slice(0, 50),
            pageQueries,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';

        // If no credentials, return mock data with setup instructions
        if (message.includes('GOOGLE_SERVICE_ACCOUNT_JSON')) {
            return NextResponse.json({
                success: false,
                error: 'Google Search Console not connected',
                setup: {
                    step1: 'Create a Google Cloud project at console.cloud.google.com',
                    step2: 'Enable the Search Console API',
                    step3: 'Create a Service Account and download the JSON key',
                    step4: 'Add the service account email as a user in Search Console',
                    step5: 'Set GOOGLE_SERVICE_ACCOUNT_JSON as the full JSON key in Vercel env vars',
                },
            }, { status: 503 });
        }

        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}

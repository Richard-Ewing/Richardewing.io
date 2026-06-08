import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { auth as clerkAuth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

// GSC Performance Data API
// Pulls impressions, clicks, CTR, position from Google Search Console
// Used by: /api/cron/seo-optimizer agent + /admin/command-center dashboard

// Try multiple GSC property formats — domain, www, non-www
const SITE_URL_CANDIDATES = [
    'sc-domain:richardewing.io',
    'https://www.richardewing.io/',
    'https://richardewing.io/',
    'https://www.richardewing.io',
    'https://richardewing.io',
];

function getGoogleAuth() {
    let credentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    if (!credentials) {
        throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON environment variable not set');
    }

    // Clean up raw newlines in the private key if present (common when dotenv loads multiline strings from .env files)
    if (credentials.includes('-----BEGIN PRIVATE KEY-----')) {
        credentials = credentials.replace(/("private_key"\s*:\s*")([\s\S]*?)(")/, (match, p1, p2, p3) => {
            return p1 + p2.replace(/\r?\n/g, '\\n') + p3;
        });
    }

    try {
        const parsed = JSON.parse(credentials);
        return new google.auth.GoogleAuth({
            credentials: parsed,
            scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
        });
    } catch (err) {
        throw new Error(`GOOGLE_SERVICE_ACCOUNT_JSON parsing failed: ${err instanceof Error ? err.message : 'Invalid JSON'}`);
    }
}

export async function GET(request: Request) {
    // Auth check — accept CRON_SECRET bearer OR Clerk session
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;
    const { searchParams } = new URL(request.url);

    const hasCronAuth = authHeader === `Bearer ${cronSecret}`;

    if (!hasCronAuth) {
        const { userId } = await clerkAuth();
        if (!userId) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    }

    // Query IndexNow details from agent_runs first, so it is available even if GSC fails
    let indexNowStats = {
        totalSubmitted: 0,
        lastStatus: 'No submissions',
        lastSubmittedAt: null as string | null,
        history: [] as Array<{ date: string; agent: string; submitted: number; status: string; summary: string }>
    };

    try {
        const { data: runs } = await supabaseAdmin
            .from('agent_runs')
            .select('created_at, agent, status, summary, metadata')
            .in('agent', ['seo-health', 'auto-rewriter'])
            .order('created_at', { ascending: false })
            .limit(50);

        if (runs && runs.length > 0) {
            let total = 0;
            let lastSubAt: string | null = null;
            let lastStat = 'No submissions';
            const historyList: typeof indexNowStats.history = [];

            for (const run of runs) {
                const meta = run.metadata as Record<string, any> | null;
                const indexNow = meta?.indexNow;
                if (indexNow && typeof indexNow.submitted === 'number') {
                    const subCount = indexNow.submitted;
                    total += subCount;

                    if (subCount > 0) {
                        if (!lastSubAt) {
                            lastSubAt = run.created_at;
                            lastStat = indexNow.error ? `Error: ${indexNow.error}` : 'Success';
                        }
                        historyList.push({
                            date: run.created_at,
                            agent: run.agent,
                            submitted: subCount,
                            status: indexNow.error ? 'failed' : 'completed',
                            summary: run.summary
                        });
                    }
                }
            }

            indexNowStats = {
                totalSubmitted: total,
                lastStatus: lastStat,
                lastSubmittedAt: lastSubAt,
                history: historyList.slice(0, 10) // show top 10
            };
        }
    } catch (dbErr) {
        console.error('[API:GSC-PERFORMANCE] Failed to query IndexNow runs:', dbErr);
    }

    try {
        const googleAuth = getGoogleAuth();
        const searchconsole = google.searchconsole({ version: 'v1', auth: googleAuth });

        const days = parseInt(searchParams.get('days') || '28');
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        const formatDate = (d: Date) => d.toISOString().split('T')[0];

        // Find which site URL format works
        let siteUrl = '';
        for (const candidate of SITE_URL_CANDIDATES) {
            try {
                await searchconsole.searchanalytics.query({
                    siteUrl: candidate,
                    requestBody: {
                        startDate: formatDate(startDate),
                        endDate: formatDate(endDate),
                        dimensions: ['page'],
                        rowLimit: 1,
                    },
                });
                siteUrl = candidate;
                break;
            } catch {
                continue;
            }
        }

        if (!siteUrl) {
            return NextResponse.json({
                success: false,
                error: 'Service account does not have access to any richardewing.io property in GSC. Tried: ' + SITE_URL_CANDIDATES.join(', '),
                indexNow: indexNowStats,
            }, { status: 403 });
        }

        // Query 1: Overall page performance
        const pagePerformance = await searchconsole.searchanalytics.query({
            siteUrl,
            requestBody: {
                startDate: formatDate(startDate),
                endDate: formatDate(endDate),
                dimensions: ['page'],
                rowLimit: 500,
            },
        });

        // Query 2: Query-level performance for top pages
        const queryPerformance = await searchconsole.searchanalytics.query({
            siteUrl: siteUrl,
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
            const path = new URL(url, 'https://richardewing.io').pathname;
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
                siteUrl: siteUrl,
                requestBody: {
                    startDate: formatDate(startDate),
                    endDate: formatDate(endDate),
                    dimensions: ['page', 'query'],
                    rowLimit: 1000,
                },
            });
            for (const row of pageQueryPerformance.data.rows || []) {
                const pageUrl = new URL(row.keys?.[0] || '/', 'https://richardewing.io').pathname;
                const query = row.keys?.[1] || '';
                if (!pageQueries[pageUrl]) pageQueries[pageUrl] = [];
                pageQueries[pageUrl].push(query);
            }
        } catch { /* page+query dimension may not be available */ }

        // Compute AI performance from GSC queries
        const AI_KEYWORDS = ['ai', 'gpt', 'llm', 'copilot', 'gemini', 'claude', 'chatgpt', 'openai', 'agent', 'vibe coding', 'technical debt', 'hallucination'];
        const aiQueries = queries.filter(q =>
            AI_KEYWORDS.some(k => q.query.toLowerCase().includes(k))
        );
        const totalAiImpressions = aiQueries.reduce((sum, q) => sum + q.impressions, 0);
        const totalAiClicks = aiQueries.reduce((sum, q) => sum + q.clicks, 0);
        const avgAiCtr = totalAiImpressions > 0 ? (totalAiClicks / totalAiImpressions) : 0;
        const avgAiPosition = aiQueries.length > 0 ? (aiQueries.reduce((sum, q) => sum + q.position, 0) / aiQueries.length) : 0;

        const aiPerformance = {
            totalImpressions: totalAiImpressions,
            totalClicks: totalAiClicks,
            ctr: avgAiCtr,
            position: avgAiPosition,
            queries: aiQueries.slice(0, 15),
        };

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
            aiPerformance,
            indexNow: indexNowStats,
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
                indexNow: indexNowStats,
            }, { status: 503 });
        }

        return NextResponse.json({
            success: false,
            error: message,
            indexNow: indexNowStats,
        }, { status: 500 });
    }
}

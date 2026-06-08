import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { generateActionUrl } from '@/app/api/actions/trigger/route';

// Daily SEO Optimizer Agent
// Runs daily: pulls GSC data, identifies underperformers, logs changes, emails digest
// Schedule: 0 9 * * * (9am UTC / 2am PDT)

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.richardewing.io';
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Market intelligence starving crowds — aligned with target keywords
const STARVING_CROWDS = [
    { id: 'ai-economics', name: 'VP Eng (AI Billing Shock)', keywords: ['copilot roi', 'ai coding tool cost', 'ai tool pricing', 'github copilot cost', 'ai economics'], targetPages: ['/tools/copilot-roi', '/ai-economics-crisis', '/tools/aueb'] },
    { id: 'shadow-ai', name: 'CISO (Shadow AI Risk)', keywords: ['shadow ai', 'ai compliance', 'ai governance', 'eu ai act', 'ai policy'], targetPages: ['/tools/shadow-ai', '/tools/eu-ai-act-checker'] },
    { id: 'agent-governance', name: 'Platform Eng (Agent Failures)', keywords: ['ai agent failure', 'agentic drift', 'ai agent production', 'llm agent'], targetPages: ['/tools/agentic-drift-matrix'] },
    { id: 'vibe-coding', name: 'Eng Director (AI Technical Debt)', keywords: ['vibe coding', 'ai technical debt', 'ai code quality', 'copilot code review'], targetPages: ['/tools/pdi'] },
    { id: 'hallucination-tax', name: 'Ops VP (Hallucination Cost)', keywords: ['ai hallucination', 'verification tax', 'ai accuracy', 'llm hallucination cost'], targetPages: ['/tools/hallucination-tax'] },
];

interface PerformanceData {
    success: boolean;
    summary?: {
        totalClicks: number;
        totalImpressions: number;
        glossaryVsPaidFunnel: {
            glossaryImpressions: number;
            paidFunnelImpressions: number;
            ratio: string;
        };
    };
    categories?: Record<string, { clicks: number; impressions: number; pages: number }>;
    lowCtrPages?: Array<{ url: string; category: string; clicks: number; impressions: number; ctr: number; position: number }>;
    topPages?: Array<{ url: string; category: string; clicks: number; impressions: number; ctr: number; position: number }>;
    topQueries?: Array<{ query: string; clicks: number; impressions: number; ctr: number; position: number }>;
    error?: string;
    setup?: Record<string, string>;
}

async function fetchGscData(): Promise<PerformanceData> {
    const cronSecret = process.env.CRON_SECRET;
    const response = await fetch(`${SITE_URL}/api/gsc/performance?days=7`, {
        headers: { 'Authorization': `Bearer ${cronSecret}` },
    });
    return response.json();
}

function analyzeStarvingCrowdAlignment(data: PerformanceData) {
    const queries = data.topQueries || [];
    const alignment: Array<{ crowd: string; matchingQueries: number; totalImpressions: number; topQuery: string }> = [];

    for (const crowd of STARVING_CROWDS) {
        const matches = queries.filter(q =>
            crowd.keywords.some(k => q.query.toLowerCase().includes(k))
        );
        alignment.push({
            crowd: crowd.name,
            matchingQueries: matches.length,
            totalImpressions: matches.reduce((sum, m) => sum + m.impressions, 0),
            topQuery: matches.sort((a, b) => b.impressions - a.impressions)[0]?.query || 'none',
        });
    }

    return alignment.sort((a, b) => b.totalImpressions - a.totalImpressions);
}

function identifyActions(data: PerformanceData) {
    const pageQueries: Record<string, string[]> = ((data as unknown) as Record<string, unknown>).pageQueries as Record<string, string[]> || {};
    const actions: Array<{ type: string; page: string; reason: string; priority: 'high' | 'medium' | 'low'; impressions?: number; clicks?: number; ctr?: number; position?: number; topQueries?: string[] }> = [];

    // Low CTR pages that need meta rewrites
    for (const page of data.lowCtrPages || []) {
        actions.push({
            type: 'meta_rewrite_needed',
            page: page.url,
            reason: `CTR ${(page.ctr * 100).toFixed(1)}% on ${page.impressions} impressions — below 2% threshold`,
            priority: page.impressions > 200 ? 'high' : 'medium',
            impressions: page.impressions,
            clicks: page.clicks,
            ctr: page.ctr,
            position: page.position,
            topQueries: (pageQueries[page.url] || []).slice(0, 10),
        });
    }

    // Glossary vs paid funnel ratio check
    const summary = data.summary?.glossaryVsPaidFunnel;
    if (summary && parseFloat(summary.ratio) < 1) {
        actions.push({
            type: 'funnel_imbalance',
            page: 'site-wide',
            reason: `Paid funnel impressions (${summary.paidFunnelImpressions}) still below glossary (${summary.glossaryImpressions}). Ratio: ${summary.ratio}`,
            priority: 'high',
        });
    }

    return actions;
}

async function sendDigestEmail(data: PerformanceData, alignment: ReturnType<typeof analyzeStarvingCrowdAlignment>, actions: ReturnType<typeof identifyActions>, rewrites: Array<{ url: string; oldTitle: string; newTitle: string; reasoning: string }> = []) {
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) return { sent: false, error: 'No RESEND_API_KEY' };

    const today = new Date().toISOString().split('T')[0];
    const summary = data.summary;
    const categories = data.categories || {};

    const categoryRows = Object.entries(categories)
        .sort(([, a], [, b]) => b.impressions - a.impressions)
        .map(([cat, stats]) =>
            `<tr><td style="padding:8px;border-bottom:1px solid #e4e4e7;font-weight:600;text-transform:capitalize">${cat}</td><td style="padding:8px;border-bottom:1px solid #e4e4e7;text-align:right">${stats.impressions.toLocaleString()}</td><td style="padding:8px;border-bottom:1px solid #e4e4e7;text-align:right">${stats.clicks.toLocaleString()}</td><td style="padding:8px;border-bottom:1px solid #e4e4e7;text-align:right">${stats.pages}</td></tr>`
        ).join('');

    const topPagesRows = (data.topPages || []).slice(0, 15).map(p =>
        `<tr><td style="padding:6px;border-bottom:1px solid #f4f4f5;font-size:13px">${p.url}</td><td style="padding:6px;border-bottom:1px solid #f4f4f5;text-align:right">${p.impressions.toLocaleString()}</td><td style="padding:6px;border-bottom:1px solid #f4f4f5;text-align:right">${p.clicks}</td><td style="padding:6px;border-bottom:1px solid #f4f4f5;text-align:right">${(p.ctr * 100).toFixed(1)}%</td><td style="padding:6px;border-bottom:1px solid #f4f4f5;text-align:right">${p.position.toFixed(1)}</td></tr>`
    ).join('');

    const alignmentRows = alignment.map(a =>
        `<tr><td style="padding:6px;border-bottom:1px solid #f4f4f5;font-size:13px;font-weight:600">${a.crowd}</td><td style="padding:6px;border-bottom:1px solid #f4f4f5;text-align:right">${a.totalImpressions.toLocaleString()}</td><td style="padding:6px;border-bottom:1px solid #f4f4f5;text-align:right">${a.matchingQueries}</td><td style="padding:6px;border-bottom:1px solid #f4f4f5;font-size:12px">${a.topQuery}</td></tr>`
    ).join('');

    // Build actionable items with one-click buttons
    const actionItems = actions.length > 0
        ? actions.map(a => {
            const approveUrl = generateActionUrl('approve-rewrite', {
                url: a.page,
                impressions: String(a.impressions || 0),
                clicks: String(a.clicks || 0),
                ctr: String(a.ctr || 0),
                position: String(a.position || 0),
                queries: (a.topQueries || []).join(','),
            });
            const skipUrl = generateActionUrl('skip', { url: a.page });
            const priorityColor = a.priority === 'high' ? '#dc2626' : '#d97706';
            return `
            <div style="margin-bottom:16px;padding:16px;background:#fafafa;border:1px solid #e4e4e7;border-left:4px solid ${priorityColor};border-radius:8px">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                    <strong style="color:${priorityColor};font-size:11px;text-transform:uppercase">${a.priority}</strong>
                    <code style="background:#f4f4f5;padding:2px 6px;border-radius:4px;font-size:13px">${a.page}</code>
                </div>
                <p style="color:#52525b;font-size:13px;margin:4px 0 12px">${a.reason}</p>
                <div>
                    <a href="${approveUrl}" style="display:inline-block;padding:8px 18px;background:#16a34a;color:white;border-radius:6px;font-size:13px;font-weight:600;text-decoration:none;margin-right:8px">✅ Approve & Deploy</a>
                    <a href="${skipUrl}" style="display:inline-block;padding:8px 18px;background:#e4e4e7;color:#52525b;border-radius:6px;font-size:13px;font-weight:500;text-decoration:none">Skip</a>
                </div>
            </div>`;
        }).join('')
        : '<div style="padding:16px;background:#f0fdf4;border-radius:8px;text-align:center;color:#16a34a;font-weight:600">✓ No critical actions needed today</div>';

    const glossaryRatio = summary?.glossaryVsPaidFunnel;
    const ratioColor = glossaryRatio && parseFloat(glossaryRatio.ratio) >= 1 ? '#16a34a' : '#dc2626';

    const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:700px;margin:0 auto;color:#18181b">
        <div style="background:linear-gradient(135deg,#7c3aed,#4f46e5);padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="color:white;margin:0;font-size:20px">📊 Daily SEO Performance — ${today}</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px">richardewing.io • 7-day rolling window</p>
        </div>

        <div style="background:white;padding:24px 32px;border:1px solid #e4e4e7;border-top:none">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:24px">
                <div style="background:#faf5ff;padding:16px;border-radius:8px;text-align:center">
                    <div style="font-size:24px;font-weight:800;color:#7c3aed">${summary?.totalImpressions?.toLocaleString() || '—'}</div>
                    <div style="font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:1px">Impressions</div>
                </div>
                <div style="background:#f0fdf4;padding:16px;border-radius:8px;text-align:center">
                    <div style="font-size:24px;font-weight:800;color:#16a34a">${summary?.totalClicks?.toLocaleString() || '—'}</div>
                    <div style="font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:1px">Clicks</div>
                </div>
                <div style="background:${parseFloat(glossaryRatio?.ratio || '0') >= 1 ? '#f0fdf4' : '#fef2f2'};padding:16px;border-radius:8px;text-align:center">
                    <div style="font-size:24px;font-weight:800;color:${ratioColor}">${glossaryRatio?.ratio || '—'}x</div>
                    <div style="font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:1px">Paid/Glossary Ratio</div>
                </div>
            </div>

            <h2 style="font-size:16px;margin:24px 0 12px;border-bottom:2px solid #f4f4f5;padding-bottom:8px">📈 Performance by Category</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
                <thead><tr style="background:#f4f4f5"><th style="padding:8px;text-align:left">Category</th><th style="padding:8px;text-align:right">Impressions</th><th style="padding:8px;text-align:right">Clicks</th><th style="padding:8px;text-align:right">Pages</th></tr></thead>
                <tbody>${categoryRows}</tbody>
            </table>

            <h2 style="font-size:16px;margin:24px 0 12px;border-bottom:2px solid #f4f4f5;padding-bottom:8px">🎯 Starving Crowd Alignment</h2>
            <table style="width:100%;border-collapse:collapse;font-size:14px">
                <thead><tr style="background:#f4f4f5"><th style="padding:6px;text-align:left">Crowd</th><th style="padding:6px;text-align:right">Impressions</th><th style="padding:6px;text-align:right">Queries</th><th style="padding:6px;text-align:left">Top Query</th></tr></thead>
                <tbody>${alignmentRows}</tbody>
            </table>

            <h2 style="font-size:16px;margin:24px 0 12px;border-bottom:2px solid #f4f4f5;padding-bottom:8px">🏆 Top 15 Pages</h2>
            <table style="width:100%;border-collapse:collapse;font-size:13px">
                <thead><tr style="background:#f4f4f5"><th style="padding:6px;text-align:left">Page</th><th style="padding:6px;text-align:right">Imp</th><th style="padding:6px;text-align:right">Clicks</th><th style="padding:6px;text-align:right">CTR</th><th style="padding:6px;text-align:right">Pos</th></tr></thead>
                <tbody>${topPagesRows}</tbody>
            </table>

            <h2 style="font-size:16px;margin:24px 0 12px;border-bottom:2px solid #dc2626;padding-bottom:8px">⚠️ Action Items — Click to Deploy</h2>
            ${actionItems}

            ${rewrites.length > 0 ? `
            <h2 style="font-size:16px;margin:24px 0 12px;border-bottom:2px solid #16a34a;padding-bottom:8px">🤖 Autonomous Changes Deployed</h2>
            <p style="font-size:13px;color:#71717a;margin-bottom:12px">The following meta titles were automatically rewritten and committed to production:</p>
            ${rewrites.map(r => `
            <div style="margin-bottom:12px;padding:12px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px">
                <div style="font-size:12px;font-weight:700;color:#16a34a;margin-bottom:4px">${r.url}</div>
                <div style="font-size:12px;color:#dc2626;text-decoration:line-through;margin-bottom:2px">OLD: ${r.oldTitle}</div>
                <div style="font-size:12px;color:#16a34a;font-weight:600;margin-bottom:4px">NEW: ${r.newTitle}</div>
                <div style="font-size:11px;color:#71717a">💡 ${r.reasoning}</div>
            </div>`).join('')}
            ` : ''}

            <div style="margin-top:24px;padding:16px;background:#f4f4f5;border-radius:8px;text-align:center">
                <a href="${SITE_URL}/admin/command-center" style="color:#7c3aed;font-weight:700;text-decoration:none">View Command Center →</a>
            </div>
        </div>

        <div style="background:#fafafa;padding:16px 32px;border-radius:0 0 12px 12px;border:1px solid #e4e4e7;border-top:none;text-align:center;font-size:12px;color:#a1a1aa">
            Autonomous SEO Optimizer • richardewing.io • Powered by Exogram
        </div>
    </div>`;

    const subjectSuffix = rewrites.length > 0 ? ` [${rewrites.length} auto-deployed]` : '';
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            from: 'SEO Agent <seo@updates.richardewing.io>',
            to: ['richardewing@exogram.ai'],
            subject: `[richardewing.io] Daily SEO Performance — ${today}${subjectSuffix}`,
            html,
        }),
    });

    return { sent: response.ok, status: response.status };
}

export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const startTime = Date.now();

    try {
        // 1. Pull GSC data
        const gscData = await fetchGscData();

        if (!gscData.success) {
            // GSC not connected — log and email setup instructions
            await supabase.from('agent_runs').insert({
                agent_name: 'seo-optimizer',
                status: 'warning',
                duration_ms: Date.now() - startTime,
                metadata: { error: gscData.error, setup: gscData.setup },
            });

            return NextResponse.json({
                success: false,
                message: 'GSC not connected. Set GOOGLE_SERVICE_ACCOUNT_JSON in Vercel.',
                setup: gscData.setup,
            });
        }

        // 2. Analyze starving crowd alignment
        const alignment = analyzeStarvingCrowdAlignment(gscData);

        // 3. Identify actions needed
        const actions = identifyActions(gscData);

        // 4. AUTONOMOUS REWRITE — if low-CTR pages found, rewrite meta automatically
        let rewriteResults: Array<{ url: string; oldTitle: string; newTitle: string; reasoning: string }> = [];
        const lowCtrForRewrite = (gscData.lowCtrPages || [])
            .filter(p => ['tools', 'advisory', 'framework'].includes(p.category))
            .filter(p => p.impressions > 100) // Only rewrite pages with meaningful traffic
            .slice(0, 5);

        if (lowCtrForRewrite.length > 0 && process.env.GITHUB_TOKEN) {
            try {
                const pageQueries: Record<string, string[]> = ((gscData as unknown) as Record<string, unknown>).pageQueries as Record<string, string[]> || {};
                const rewritePayload = lowCtrForRewrite.map(p => ({
                    url: p.url,
                    currentTitle: '', // Will be read from file by auto-rewriter
                    currentDescription: '',
                    impressions: p.impressions,
                    clicks: p.clicks,
                    ctr: p.ctr,
                    position: p.position,
                    topQueries: (pageQueries[p.url] || []).slice(0, 10),
                }));

                const rewriteRes = await fetch(`${SITE_URL}/api/cron/auto-rewriter`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.CRON_SECRET}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ pages: rewritePayload }),
                });
                const rewriteData = await rewriteRes.json();
                if (rewriteData.results) {
                    rewriteResults = rewriteData.results;
                }
            } catch { /* auto-rewriter failed — non-fatal */ }
        }

        // 5. Send email digest (now includes rewrite results)
        const emailResult = await sendDigestEmail(gscData, alignment, actions, rewriteResults);

        // 6. Log to Supabase
        await supabase.from('agent_runs').insert({
            agent_name: 'seo-optimizer',
            status: 'success',
            duration_ms: Date.now() - startTime,
            metadata: {
                totalImpressions: gscData.summary?.totalImpressions,
                totalClicks: gscData.summary?.totalClicks,
                glossaryRatio: gscData.summary?.glossaryVsPaidFunnel?.ratio,
                actionsIdentified: actions.length,
                highPriorityActions: actions.filter(a => a.priority === 'high').length,
                emailSent: emailResult.sent,
                starvingCrowdAlignment: alignment,
                autonomousRewrites: rewriteResults.length,
            },
        });

        // 7. Store performance snapshot for trending
        try {
            await supabase.from('seo_snapshots').insert({
                snapshot_date: new Date().toISOString().split('T')[0],
                total_impressions: gscData.summary?.totalImpressions || 0,
                total_clicks: gscData.summary?.totalClicks || 0,
                glossary_impressions: gscData.categories?.['glossary']?.impressions || 0,
                tools_impressions: gscData.categories?.['tools']?.impressions || 0,
                advisory_impressions: gscData.categories?.['advisory']?.impressions || 0,
                curriculum_impressions: gscData.categories?.['curriculum']?.impressions || 0,
                low_ctr_pages: actions.filter(a => a.type === 'meta_rewrite_needed').length,
                categories: gscData.categories,
            });
        } catch { /* table may not exist yet */ }

        return NextResponse.json({
            success: true,
            summary: gscData.summary,
            starvingCrowdAlignment: alignment,
            actions,
            autonomousRewrites: rewriteResults,
            email: emailResult,
            duration: Date.now() - startTime,
        });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';

        await supabase.from('agent_runs').insert({
            agent_name: 'seo-optimizer',
            status: 'error',
            duration_ms: Date.now() - startTime,
            metadata: { error: message },
        });

        return NextResponse.json({ success: false, error: message }, { status: 500 });
    }
}

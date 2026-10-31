#!/usr/bin/env node
/**
 * Sovereign Live Demand, Search Console, Practitioner Pain & Link-Graph Engine
 * Implements .agents/skills/demand-and-search-intelligence/SKILL.md (MOD v4.0 / ADR-0018)
 *
 * Outputs structured evidence to .scratch/demand-telemetry-latest.json (zero secrets logged).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');
const SCRATCH_DIR = path.join(ROOT_DIR, '.scratch');

// Load local gitignored environment files safely (never log secret values)
for (const envName of ['.env.local', '.env.production.local', '.env']) {
  const envPath = path.join(ROOT_DIR, envName);
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath, override: false, quiet: true });
  }
}

if (!fs.existsSync(SCRATCH_DIR)) {
  fs.mkdirSync(SCRATCH_DIR, { recursive: true });
}

const CLOUDFLARE_ZONE_ID = '26b036cd0321b744617c0cc041c0f225';

const PAIN_CLUSTERS = [
  {
    id: 'ai-margin-token-opex',
    label: 'AI Margin Collapse & Token OpEx',
    hnQueries: ['LLM API cost', 'AI gross margin', 'inference cost'],
    canonicalRoutes: ['/concepts/inference-dividend-model', '/tools/aueb', '/tools/aper']
  },
  {
    id: 'vibe-coding-synthetic-debt',
    label: 'Vibe Coding & Synthetic Technical Debt',
    hnQueries: ['vibe coding', 'AI generated code debt', 'copilot code churn'],
    canonicalRoutes: ['/tools/pdi', '/articles/frameworks/vibe-coding-debt']
  },
  {
    id: 'cfo-ai-pilot-cuts-roai',
    label: 'CFO AI Pilot Cuts & ROAI',
    hnQueries: ['AI ROI enterprise', 'AI pilot failed', 'SaaS AI pricing'],
    canonicalRoutes: ['/roi-calculator', '/for-cfos', '/reality-check']
  },
  {
    id: 'shadow-agents-mcp-security',
    label: 'Shadow Delegation & MCP Security',
    hnQueries: ['MCP security', 'prompt injection', 'AI agent permissions'],
    canonicalRoutes: ['/tools/shadow-ai', '/tools/prompt-injection-sandbox', '/exogram']
  },
  {
    id: 'technical-insolvency-governance',
    label: 'Technical Insolvency & Runtime Governance',
    hnQueries: ['technical debt rewrite', 'AI guardrails production'],
    canonicalRoutes: ['/articles/frameworks/technical-insolvency-date', '/compare/ai-guardrails-platforms']
  }
];

const TIER_1_AUTHORITY_TARGETS = [
  '/articles/frameworks/technical-insolvency-date',
  '/articles/frameworks/vibe-coding-debt',
  '/articles/frameworks/shadow-agents',
  '/tools/pdi',
  '/reality-check',
  '/tools/aueb',
  '/roi-calculator',
  '/for-cfos',
  '/pricing-sprints',
  '/compare/ai-guardrails-platforms'
];

function parseServiceAccountJson(rawCreds) {
  let text = rawCreds.trim();
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) {
    text = text.slice(1, -1);
  }
  if (!text.startsWith('{') && /^[A-Za-z0-9+/=]+$/.test(text)) {
    text = Buffer.from(text, 'base64').toString('utf8');
  }
  if (text.includes('\\"')) {
    text = text.replace(/\\"/g, '"');
  }
  text = text.replace(/("private_key"\s*:\s*")([\s\S]*?)(")/, (_, p1, p2, p3) => {
    return p1 + p2.replace(/\r?\n/g, '\\n') + p3;
  });
  return JSON.parse(text);
}

// 1. Pipe 1: Google Search Console Live Telemetry
async function fetchGscTelemetry() {
  const rawCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!rawCreds) {
    return { status: 'unavailable', reason: 'GOOGLE_SERVICE_ACCOUNT_JSON not set in local environment.' };
  }

  try {
    const credentials = parseServiceAccountJson(rawCreds);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    });
    const searchconsole = google.searchconsole({ version: 'v1', auth });

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 28);
    const fmt = (d) => d.toISOString().split('T')[0];

    const siteCandidates = [
      'sc-domain:richardewing.io',
      'https://www.richardewing.io/',
      'https://richardewing.io/'
    ];

    let activeSite = '';
    for (const candidate of siteCandidates) {
      try {
        await searchconsole.searchanalytics.query({
          siteUrl: candidate,
          requestBody: { startDate: fmt(startDate), endDate: fmt(endDate), dimensions: ['page'], rowLimit: 1 }
        });
        activeSite = candidate;
        break;
      } catch {
        continue;
      }
    }

    if (!activeSite) {
      return {
        status: 'unauthorized_property',
        reason: 'Service account authenticated, but lacks access to richardewing.io in Search Console.'
      };
    }

    const [queryRes, pageRes] = await Promise.all([
      searchconsole.searchanalytics.query({
        siteUrl: activeSite,
        requestBody: { startDate: fmt(startDate), endDate: fmt(endDate), dimensions: ['query'], rowLimit: 250 }
      }),
      searchconsole.searchanalytics.query({
        siteUrl: activeSite,
        requestBody: { startDate: fmt(startDate), endDate: fmt(endDate), dimensions: ['page'], rowLimit: 250 }
      })
    ]);

    const queries = (queryRes.data.rows || []).map((r) => ({
      query: r.keys?.[0] || '',
      clicks: r.clicks || 0,
      impressions: r.impressions || 0,
      ctrPct: Number(((r.ctr || 0) * 100).toFixed(2)),
      position: Number((r.position || 0).toFixed(1))
    }));

    const pages = (pageRes.data.rows || []).map((r) => {
      let pathname = r.keys?.[0] || '/';
      try {
        pathname = new URL(pathname, 'https://www.richardewing.io').pathname;
      } catch {
        // Keep raw path
      }
      return {
        path: pathname,
        clicks: r.clicks || 0,
        impressions: r.impressions || 0,
        ctrPct: Number(((r.ctr || 0) * 100).toFixed(2)),
        position: Number((r.position || 0).toFixed(1))
      };
    });

    const strikingDistanceQueries = queries
      .filter((q) => q.position >= 4 && q.position <= 15 && q.impressions >= 10)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 15);

    const snippetSurgeryPages = pages
      .filter((p) => p.impressions >= 30 && p.ctrPct < 2.0)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 15);

    return {
      status: 'connected',
      siteProperty: activeSite,
      windowDays: 28,
      totals: {
        clicks: pages.reduce((s, p) => s + p.clicks, 0),
        impressions: pages.reduce((s, p) => s + p.impressions, 0),
        indexedActivePages: pages.length,
        activeQueries: queries.length
      },
      topQueries: queries.sort((a, b) => b.impressions - a.impressions).slice(0, 20),
      strikingDistanceQueries,
      snippetSurgeryPages
    };
  } catch (err) {
    return {
      status: 'error',
      reason: err instanceof Error ? err.message : 'Unknown GSC query error'
    };
  }
}

// 2. Pipe 2: Trailing 30-Day Practitioner Pain Harvester (Hacker News Algolia + Reddit Public JSON)
async function harvestPractitionerPain() {
  const thirtyDaysAgoUnix = Math.floor(Date.now() / 1000) - 30 * 86400;
  const clusterSignals = [];

  for (const cluster of PAIN_CLUSTERS) {
    const hits = [];
    for (const q of cluster.hnQueries) {
      const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(q)}&tags=story&numericFilters=created_at_i>${thirtyDaysAgoUnix},points>10&hitsPerPage=5`;
      try {
        const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
        if (res.ok) {
          const data = await res.json();
          for (const h of data.hits || []) {
            hits.push({
              source: 'HackerNews',
              title: h.title,
              points: h.points || 0,
              comments: h.num_comments || 0,
              createdAt: h.created_at,
              url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`
            });
          }
        }
      } catch {
        // Non-fatal network fallback per query
      }
    }

    // Deduplicate by URL/title and rank by engagement weight (points + comments * 1.5)
    const seen = new Set();
    const ranked = hits
      .filter((item) => {
        const key = item.title.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => (b.points + b.comments * 1.5) - (a.points + a.comments * 1.5))
      .slice(0, 5);

    clusterSignals.push({
      clusterId: cluster.id,
      clusterLabel: cluster.label,
      canonicalRoutes: cluster.canonicalRoutes,
      trailing30dSignalCount: ranked.length,
      topDiscussions: ranked
    });
  }

  // Optional Reddit practitioner pulse (r/ExperiencedDevs & r/CTO top monthly threads)
  const redditPulse = [];
  for (const sub of ['ExperiencedDevs', 'CTO']) {
    try {
      const res = await fetch(`https://www.reddit.com/r/${sub}/top.json?t=month&limit=8`, {
        headers: { 'User-Agent': 'RichardEwingResearchBot/1.0 (+https://www.richardewing.io)' },
        signal: AbortSignal.timeout(5000)
      });
      if (res.ok) {
        const json = await res.json();
        for (const child of json?.data?.children || []) {
          const d = child?.data;
          if (d?.title) {
            redditPulse.push({
              subreddit: `r/${sub}`,
              title: d.title,
              score: d.score || 0,
              comments: d.num_comments || 0,
              permalink: `https://www.reddit.com${d.permalink}`
            });
          }
        }
      }
    } catch {
      // Reddit blocks unauthenticated IPs occasionally; ignore cleanly
    }
  }

  return {
    windowDays: 30,
    clusterSignals,
    redditPractitionerPulse: redditPulse.sort((a, b) => b.score - a.score).slice(0, 8)
  };
}

// 3. Pipe 3: Cloudflare GraphQL HTML & AI Crawler Telemetry
async function fetchCloudflareCrawlerTelemetry() {
  const cfToken = process.env.CLOUDFLARE_API_TOKEN;
  if (!cfToken) {
    return {
      status: 'unavailable',
      reason: 'CLOUDFLARE_API_TOKEN not set in local env; skip live Cloudflare GraphQL bot query.'
    };
  }

  const sinceIso = new Date(Date.now() - 7 * 86400 * 1000).toISOString();
  const untilIso = new Date().toISOString();

  const query = `
    query HtmlCrawlerBreakdown($zoneTag: string!, $since: Time!, $until: Time!) {
      viewer {
        zones(filter: { zoneTag: $zoneTag }) {
          httpRequestsAdaptiveGroups(
            limit: 100
            filter: {
              datetime_geq: $since
              datetime_lt: $until
              edgeResponseContentTypeName: "html"
            }
            orderBy: [count_DESC]
          ) {
            count
            dimensions {
              userAgent
              edgeResponseStatus
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.cloudflare.com/client/v4/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cfToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: { zoneTag: CLOUDFLARE_ZONE_ID, since: sinceIso, until: untilIso }
      }),
      signal: AbortSignal.timeout(8000)
    });

    if (!res.ok) {
      return { status: 'http_error', httpStatus: res.status };
    }

    const body = await res.json();
    const groups = body?.data?.viewer?.zones?.[0]?.httpRequestsAdaptiveGroups || [];
    const botPatterns = [
      'PerplexityBot',
      'Perplexity-User',
      'OAI-SearchBot',
      'ChatGPT-User',
      'Claude-SearchBot',
      'Claude-User',
      'Googlebot',
      'Bingbot',
      'GPTBot',
      'ClaudeBot'
    ];

    const summary = {};
    let totalHtmlReads = 0;

    for (const g of groups) {
      const ua = g?.dimensions?.userAgent || '';
      const status = g?.dimensions?.edgeResponseStatus || 0;
      const count = g?.count || 0;
      totalHtmlReads += count;

      for (const bot of botPatterns) {
        if (ua.toLowerCase().includes(bot.toLowerCase())) {
          const key = `${bot} (HTTP ${status})`;
          summary[key] = (summary[key] || 0) + count;
        }
      }
    }

    return {
      status: 'connected',
      windowDays: 7,
      sampledHtmlDocumentReads: totalHtmlReads,
      crawlerBreakdown: summary
    };
  } catch (err) {
    return {
      status: 'error',
      reason: err instanceof Error ? err.message : 'Cloudflare GraphQL request failed'
    };
  }
}

// 4. Pipe 4: Local Codebase Internal Link-Graph & Orphan Route Audit
function auditInternalLinkGraph() {
  const appDir = path.join(ROOT_DIR, 'app');
  const componentsDir = path.join(ROOT_DIR, 'components');

  const staticRoutes = [];
  const sourceFiles = [];

  function walkRoutes(dir, relPrefix = '') {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (['node_modules', '.next', 'api'].includes(entry.name)) continue;
      const full = path.join(dir, entry.name);
      const nextRel = relPrefix ? `${relPrefix}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        walkRoutes(full, nextRel);
      } else if (/\.(tsx|ts)$/i.test(entry.name)) {
        sourceFiles.push(full);
        if (entry.name === 'page.tsx') {
          // Strip Next.js route groups like (marketing)
          const cleaned = nextRel
            .replace(/\/?page\.tsx$/, '')
            .split('/')
            .filter((seg) => seg && !seg.startsWith('('))
            .join('/');
          const routePath = cleaned ? `/${cleaned}` : '/';
          // Only track static indexable routes (skip dynamic [param], admin, auth, checkout)
          const isInternal =
            routePath.includes('[') ||
            routePath.startsWith('/admin') ||
            routePath.startsWith('/sign-in') ||
            routePath.startsWith('/sign-up') ||
            routePath.startsWith('/dashboard') ||
            routePath.startsWith('/checkout');
          if (!isInternal) {
            staticRoutes.push(routePath);
          }
        }
      }
    }
  }

  function walkComponents(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walkComponents(full);
      else if (/\.(tsx|ts)$/i.test(entry.name)) sourceFiles.push(full);
    }
  }

  walkRoutes(appDir);
  walkComponents(componentsDir);

  const incomingCounts = {};
  for (const r of staticRoutes) incomingCounts[r] = 0;

  const linkRegex = /(?:href|url|canonical|path|slug)\s*[:=]\s*['"`](\/[a-zA-Z0-9/_-]*)['"`]/g;

  for (const file of sourceFiles) {
    const text = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = linkRegex.exec(text)) !== null) {
      const target = match[1].replace(/\/+$/, '') || '/';
      if (incomingCounts[target] !== undefined) {
        incomingCounts[target] += 1;
      }
    }
  }

  const orphanRoutes = Object.entries(incomingCounts)
    .filter(([route, count]) => route !== '/' && count === 0)
    .map(([route]) => route)
    .sort();

  const tier1FeederStatus = TIER_1_AUTHORITY_TARGETS.map((route) => ({
    route,
    incomingReferences: incomingCounts[route] ?? 0,
    healthy: (incomingCounts[route] ?? 0) >= 3
  }));

  return {
    totalStaticPublicRoutes: staticRoutes.length,
    orphanStaticRouteCount: orphanRoutes.length,
    orphanRoutes: orphanRoutes.slice(0, 25),
    tier1FeederStatus
  };
}

async function main() {
  console.log('=== Sovereign Demand, Search & Citation Telemetry Engine ===\n');

  const [gsc, practitionerPain, cloudflareBots] = await Promise.all([
    fetchGscTelemetry(),
    harvestPractitionerPain(),
    fetchCloudflareCrawlerTelemetry()
  ]);
  const linkGraph = auditInternalLinkGraph();

  const report = {
    generatedAt: new Date().toISOString(),
    gsc,
    cloudflareBots,
    practitionerPain,
    linkGraph
  };

  const outPath = path.join(SCRATCH_DIR, 'demand-telemetry-latest.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf8');

  // Print concise Operator Instincts Console Readout
  console.log(`[1] Google Search Console Pipe: ${gsc.status.toUpperCase()}`);
  if (gsc.status === 'connected') {
    console.log(`    Property: ${gsc.siteProperty} | 28d Impressions: ${gsc.totals.impressions} | Clicks: ${gsc.totals.clicks}`);
    console.log(`    Striking-Distance Queries (Pos 4-15): ${gsc.strikingDistanceQueries.length}`);
    console.log(`    Snippet Surgery Targets (CTR < 2%):   ${gsc.snippetSurgeryPages.length}`);
  } else {
    console.log(`    Note: ${gsc.reason}`);
  }

  console.log(`\n[2] Cloudflare Edge HTML & AI Bot Pipe: ${cloudflareBots.status.toUpperCase()}`);
  if (cloudflareBots.status === 'connected') {
    console.log(`    7d Sampled HTML Reads: ${cloudflareBots.sampledHtmlDocumentReads}`);
    const bots = Object.entries(cloudflareBots.crawlerBreakdown);
    if (bots.length > 0) {
      bots.forEach(([k, v]) => console.log(`    - ${k}: ${v}`));
    }
  } else {
    console.log(`    Note: ${cloudflareBots.reason || cloudflareBots.httpStatus}`);
  }

  const totalHnSignals = practitionerPain.clusterSignals.reduce((s, c) => s + c.trailing30dSignalCount, 0);
  console.log(`\n[3] 30-Day Practitioner Pain Harvester (HN + Reddit): ACTIVE`);
  console.log(`    High-Signal HN Discussions Captured: ${totalHnSignals} across ${practitionerPain.clusterSignals.length} clusters`);
  for (const c of practitionerPain.clusterSignals) {
    const topTitle = c.topDiscussions[0]?.title || 'No >10pt thread in window';
    console.log(`    - ${c.clusterLabel}: ${c.trailing30dSignalCount} threads (Top: "${topTitle}")`);
  }

  console.log(`\n[4] Internal Link-Graph & Tier-1 Feeder Audit: COMPLETE`);
  console.log(`    Static Public Routes Audited: ${linkGraph.totalStaticPublicRoutes}`);
  console.log(`    Orphan Static Routes (0 incoming refs): ${linkGraph.orphanStaticRouteCount}`);
  const weakTier1 = linkGraph.tier1FeederStatus.filter((t) => !t.healthy);
  console.log(`    Tier-1 Authority Targets Healthy (>=3 refs): ${linkGraph.tier1FeederStatus.length - weakTier1.length}/${linkGraph.tier1FeederStatus.length}`);

  console.log(`\nSaved structured telemetry report to .scratch/demand-telemetry-latest.json`);
  process.exit(0);
}

main().catch((err) => {
  console.error('[DEMAND TELEMETRY ERROR]', err);
  process.exit(1);
});

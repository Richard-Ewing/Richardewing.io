#!/usr/bin/env node
/**
 * Post-Deploy Tier-1 Edge Cache Warmer (`scripts/warm-tier1-edge-cache.mjs`)
 * Warms 30 high-intent commercial, diagnostic, and SEO routes on www.richardewing.io
 * so Pillar-9 endpoints serve X-RW-Edge-Cache: HIT immediately after deployment.
 */

import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

const BASE_ORIGIN = (process.env.RICHARD_ORIGIN || 'https://www.richardewing.io').replace(/\/+$/, '');
const CONCURRENCY = 6;

const TIER1_ROUTES = [
  '/',
  '/advisory',
  '/pricing-sprints',
  '/schedule',
  '/glossary',
  '/glossary/calculating-roai',
  '/glossary/ai-unit-economics',
  '/ai-unit-economics',
  '/concepts',
  '/answers',
  '/tools/aueb',
  '/tools/pdi',
  '/tools/aper',
  '/tools/ev-se',
  '/tools/audit-interview',
  '/reality-check',
  '/roi-calculator',
  '/vault/curriculum/tracks',
  '/exogram',
  '/robots.txt',
  '/llms.txt',
  '/sitemap.xml',
  '/for-cfos',
  '/for-ctos',
  '/tools',
  '/contact',
  '/blog',
  '/articles/frameworks/technical-insolvency-date',
  '/articles/frameworks/vibe-coding-debt',
  '/api/og?title=Audit',
];

async function hitRoute(pathname) {
  const url = `${BASE_ORIGIN}${pathname}`;
  const start = Date.now();
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'manual',
    headers: {
      Accept: pathname.startsWith('/api/og') ? 'image/png,image/*;q=0.9,*/*;q=0.8' : 'text/html,application/xhtml+xml',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) RW-Edge-Warmer/1.0',
    },
    signal: AbortSignal.timeout(10000),
  });
  await res.arrayBuffer();
  const cf = (res.headers.get('cf-cache-status') || '').toUpperCase();
  const rawWk = (res.headers.get('x-rw-edge-cache') || '').toUpperCase();
  const edgeCache = ['HIT', 'STALE', 'REVALIDATED'].includes(cf) && (!rawWk || rawWk === 'MISS')
    ? 'CF-HIT'
    : (rawWk || cf || 'NONE');
  return {
    pathname,
    status: res.status,
    elapsedMs: Date.now() - start,
    edgeCache,
  };
}

async function runPool(items, fn) {
  const out = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= items.length) return;
      try {
        out[i] = await fn(items[i]);
      } catch (e) {
        out[i] = { pathname: items[i], status: 0, elapsedMs: 0, edgeCache: 'ERR:' + e.message };
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, () => worker()));
  return out;
}

async function main() {
  const pass1 = await runPool(TIER1_ROUTES, hitRoute);
  await new Promise((r) => setTimeout(r, 1000));
  const pass2 = await runPool(TIER1_ROUTES, hitRoute);

  for (let retry = 0; retry < 2; retry++) {
    const pendingIdx = pass2
      .map((r, idx) => (r.status === 200 && !r.edgeCache.includes('HIT') ? idx : -1))
      .filter((idx) => idx !== -1);
    if (pendingIdx.length === 0) break;
    await new Promise((r) => setTimeout(r, 1000));
    for (const idx of pendingIdx) {
      pass2[idx] = await hitRoute(TIER1_ROUTES[idx]);
    }
  }

  const ok200 = pass2.filter((r) => r.status === 200).length;
  const wkHits = pass2.filter((r) => r.edgeCache.includes('HIT')).length;
  const non200 = pass2.filter((r) => r.status !== 200);
  const missRoutes = pass2.filter((r) => r.status === 200 && !r.edgeCache.includes('HIT'));

  console.log(
    JSON.stringify(
      {
        origin: BASE_ORIGIN,
        routesTotal: TIER1_ROUTES.length,
        pass1Hits: pass1.filter((r) => r.edgeCache.includes('HIT')).length,
        pass2Http200: `${ok200}/${TIER1_ROUTES.length}`,
        pass2EdgeHits: `${wkHits}/${TIER1_ROUTES.length}`,
        non200,
        missRoutes,
      },
      null,
      2
    )
  );

  if (non200.length > 0 || missRoutes.length > 0) {
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error('[warm-tier1-edge-cache] Fatal error:', err.message);
  process.exit(1);
});

#!/usr/bin/env node
/**
 * Zero-Cost Advisory Competitor Sitemap Reconnaissance Radar
 *
 * Fetches /robots.txt and /sitemap.xml trees across direct advisory competitors
 * mapped to richardewing.io's 4 pillars, plus self-audits www.richardewing.io/sitemap.xml
 * for <lastmod> freshness hygiene and zero-coverage money gaps.
 *
 * Usage:
 *   node .agents/scripts/competitor-sitemap-recon.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const COMPETITORS = [
  // Pillar 1: AI Feature Pricing & Unit Economics
  { name: 'Monetizely', domain: 'getmonetizely.com', pillar: 'P1: AI Pricing & Unit Economics' },
  { name: 'Pricing I/O', domain: 'pricingio.com', pillar: 'P1: AI Pricing & Unit Economics' },
  { name: 'Growth Unhinged', domain: 'growthunhinged.com', pillar: 'P1: AI Pricing & Unit Economics' },
  { name: 'Simon-Kucher', domain: 'simon-kucher.com', pillar: 'P1: AI Pricing & Unit Economics' },
  // Pillar 2: Product Operating Model & Backlog Surgery
  { name: 'SVPG', domain: 'svpg.com', pillar: 'P2: Product Operating Model', directSitemaps: ['https://www.svpg.com/post-sitemap.xml'] },
  { name: 'Product Institute', domain: 'productinstitute.com', pillar: 'P2: Product Operating Model' },
  { name: 'Chameleon Collective', domain: 'chameleoncollective.com', pillar: 'P2: Product Operating Model' },
  { name: 'Fractional Product Mgr', domain: 'thefractionalproductmanager.com', pillar: 'P2: Product Operating Model' },
  // Pillar 3: Agentic AI Governance & Operational Controls
  { name: 'Holistic AI', domain: 'holisticai.com', pillar: 'P3: Agentic AI Governance' },
  { name: 'BABL AI', domain: 'babl.ai', pillar: 'P3: Agentic AI Governance' },
  { name: 'RSM US', domain: 'rsmus.com', pillar: 'P3: Agentic AI Governance' },
  { name: 'Baker Tilly', domain: 'bakertilly.com', pillar: 'P3: Agentic AI Governance' },
  // Pillar 4: Capital Allocation, QBRs & PE Diligence
  { name: 'Crosslake', domain: 'crosslaketech.com', pillar: 'P4: PE Diligence & Capital' },
  { name: 'RingStone', domain: 'ringstonetech.com', pillar: 'P4: PE Diligence & Capital' },
  { name: 'Fortium Partners', domain: 'fortiumpartners.com', pillar: 'P4: PE Diligence & Capital' },
  // Self Baseline
  { name: 'RichardEwing.io (SELF)', domain: 'www.richardewing.io', pillar: 'SELF' },
];

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const PILLAR_PATTERNS = {
  p1_pricing: /(pricing|monetiz|unit[-_]econ|token|margin|credit|usage[-_]based|packaging|cogs|seat[-_]based|tier|outcome[-_]based|hybrid[-_]pric|ai[-_]cost|llm[-_]cost|spend|finops|pass[-_]through)/i,
  p2_product_ops: /(operating[-_]model|product[-_]op|backlog|portfolio|roadmap|fractional[-_]cpo|fractional[-_]product|product[-_]debt|technical[-_]debt|prioritiz|product[-_]org|product[-_]strategy)/i,
  p3_governance: /(governance|agentic|ai[-_]agent|shadow[-_]ai|guardrail|risk[-_]audit|ai[-_]audit|compliance|nist|42001|eu[-_]ai[-_]act|mcp|red[-_]team|human[-_]in[-_]the[-_]loop|vendor[-_]risk|ai[-_]policy)/i,
  p4_pe_capital: /(due[-_]diligence|tech[-_]dd|diligence|private[-_]equity|\bpe\b|m[-_]a|qbr|board[-_]|cfo|cto|capital[-_]alloc|r[-_]d|vendor[-_]contract|turnaround|value[-_]creation|post[-_]close|fractional[-_]cto|first[-_]100[-_]days)/i,
  lead_magnet: /(calculator|assessment|benchmark|scorecard|template|checklist|\bvs\b|versus|alternative|quiz|tool|kit|playbook|workbook|roi|report|survey|study)/i,
};

const MAX_GZIP_BYTES = 50 * 1024 * 1024;
const BLOCKED_HOST_RX = /^(localhost|127\.|10\.|192\.168\.|169\.254\.|0\.0\.0\.0|::1|\[::1\]|172\.(1[6-9]|2\d|3[01])\.)/i;

function isSafeSameDomainUrl(rawUrl, targetDomain) {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return false;
    const host = parsed.hostname.toLowerCase();
    if (BLOCKED_HOST_RX.test(host)) return false;
    const base = targetDomain.replace(/^www\./i, '').toLowerCase();
    return host === base || host.endsWith(`.${base}`);
  } catch {
    return false;
  }
}

async function fetchText(url, timeoutMs = 12000, identityEncoding = false, allowedDomain = null) {
  if (allowedDomain && !isSafeSameDomainUrl(url, allowedDomain)) {
    return { ok: false, status: 0, url, error: 'BLOCKED_UNSAFE_HOST', text: '' };
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const headers = {
      'User-Agent': UA,
      'Accept': 'application/xml,text/xml,text/plain,*/*;q=0.8',
    };
    if (identityEncoding) headers['Accept-Encoding'] = 'identity';

    const res = await fetch(url, { headers, redirect: 'follow', signal: controller.signal });
    if (allowedDomain && res.url && !isSafeSameDomainUrl(res.url, allowedDomain)) {
      return { ok: false, status: 0, url: res.url, error: 'BLOCKED_REDIRECT_HOST', text: '' };
    }
    if (!res.ok) return { ok: false, status: res.status, url: res.url, text: '' };
    const buf = Buffer.from(await res.arrayBuffer());
    let text;
    if (buf.length >= 2 && buf[0] === 0x1f && buf[1] === 0x8b) {
      text = zlib.gunzipSync(buf, { maxOutputLength: MAX_GZIP_BYTES }).toString('utf8');
    } else {
      text = buf.toString('utf8');
    }
    return { ok: true, status: res.status, url: res.url, text };
  } catch (err) {
    if (!identityEncoding && /Z_DATA_ERROR|terminated|header check/i.test(String(err?.cause?.message || err?.message))) {
      return fetchText(url, timeoutMs, true, allowedDomain);
    }
    return { ok: false, status: 0, url, error: err.name === 'AbortError' ? 'TIMEOUT' : err.message, text: '' };
  } finally {
    clearTimeout(timer);
  }
}

function extractXmlTags(xml, blockTag) {
  const results = [];
  const regex = new RegExp(`<${blockTag}\\b[^>]*>([\\s\\S]*?)<\\/${blockTag}>`, 'gi');
  let m;
  while ((m = regex.exec(xml)) !== null) {
    const body = m[1];
    const locMatch = body.match(/<loc\b[^>]*>([\s\S]*?)<\/loc>/i);
    const modMatch = body.match(/<lastmod\b[^>]*>([\s\S]*?)<\/lastmod>/i);
    if (locMatch) {
      const loc = locMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim();
      const lastmod = modMatch ? modMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim() : null;
      results.push({ loc, lastmod });
    }
  }
  return results;
}

async function discoverSitemaps(comp) {
  if (comp.directSitemaps?.length) {
    return { sitemaps: comp.directSitemaps, robotsStatus: 200 };
  }
  const domain = comp.domain;
  const bases = domain.startsWith('www.') ? [`https://${domain}`] : [`https://${domain}`, `https://www.${domain}`];
  const found = new Set();
  let robotsStatus = 0;

  for (const base of bases) {
    const r = await fetchText(`${base}/robots.txt`, 8000, false, domain);
    if (r.ok && r.text) {
      robotsStatus = r.status;
      for (const line of r.text.split(/\r?\n/)) {
        const m = line.match(/^\s*Sitemap:\s*(\S+)/i);
        if (m && !m[1].includes('{') && isSafeSameDomainUrl(m[1].trim(), domain)) found.add(m[1].trim());
      }
      if (found.size > 0) break;
    }
  }

  if (found.size === 0) {
    for (const base of bases) {
      for (const p of ['/sitemap.xml', '/sitemap_index.xml', '/wp-sitemap.xml']) {
        const r = await fetchText(`${base}${p}`, 8000, false, domain);
        if (r.ok && /<(urlset|sitemapindex)\b/i.test(r.text)) {
          const target = r.url || `${base}${p}`;
          if (isSafeSameDomainUrl(target, domain)) found.add(target);
          break;
        }
      }
      if (found.size > 0) break;
    }
  }

  return { sitemaps: [...found], robotsStatus };
}

function scoreChildSitemap(url) {
  const u = url.toLowerCase();
  if (/post|blog|article|insight|guide|resource|page|service|solution|ai|pricing|advisory|thought|knowledge|case|whitepaper|report|tool|glossary|compare|publication|newsletter/i.test(u)) return 10;
  if (/author|tag|category|video|image|media|event|webinar|job|career|office|people|bio|team|location|person/i.test(u)) return -5;
  if (/de-|fr-|es-|jp-|cn-|it-|nl-|pt-|br-|pl-|ko-|zh-|ar-|sv-/i.test(u)) return -10;
  return 2;
}

async function crawlDomain(comp) {
  const { sitemaps, robotsStatus } = await discoverSitemaps(comp);
  const visited = new Set();
  const urls = [];
  let childSitemapsFetched = 0;
  const errors = [];
  const queue = [...sitemaps];
  const MAX_CHILD_SITEMAPS = 18;

  while (queue.length > 0 && childSitemapsFetched < MAX_CHILD_SITEMAPS) {
    const smUrl = queue.shift();
    if (!smUrl || visited.has(smUrl) || !isSafeSameDomainUrl(smUrl, comp.domain)) continue;
    visited.add(smUrl);

    const res = await fetchText(smUrl, 12000, false, comp.domain);
    if (!res.ok) {
      errors.push(`${smUrl} -> ${res.status || res.error}`);
      continue;
    }
    childSitemapsFetched++;

    if (/<sitemapindex\b/i.test(res.text)) {
      const children = extractXmlTags(res.text, 'sitemap');
      const sorted = children
        .filter(c => isSafeSameDomainUrl(c.loc, comp.domain))
        .map(c => ({ ...c, score: scoreChildSitemap(c.loc) }))
        .filter(c => c.score >= 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 15);
      for (const c of sorted) {
        if (!visited.has(c.loc)) queue.push(c.loc);
      }
    } else {
      for (const u of extractXmlTags(res.text, 'url')) urls.push(u);
    }
  }

  const dedup = new Map();
  for (const u of urls) {
    if (!dedup.has(u.loc)) dedup.set(u.loc, u);
  }
  const allUrls = [...dedup.values()];

  const now = Date.now();
  const d30 = now - 30 * 86400 * 1000;
  const d90 = now - 90 * 86400 * 1000;

  let last30 = 0;
  let last90 = 0;
  const uniqueDates = new Set();
  const prefixCounts = new Map();
  const recentUrls = [];
  const pillarHits = { p1_pricing: [], p2_product_ops: [], p3_governance: [], p4_pe_capital: [], lead_magnet: [] };

  for (const item of allUrls) {
    let pathname = '';
    try { pathname = new URL(item.loc).pathname; } catch { continue; }
    const segs = pathname.split('/').filter(Boolean);
    const prefix = segs.length > 0 ? `/${segs[0]}/` : '/';
    prefixCounts.set(prefix, (prefixCounts.get(prefix) || 0) + 1);

    let ts = null;
    if (item.lastmod) {
      const parsed = Date.parse(item.lastmod);
      if (!Number.isNaN(parsed)) {
        ts = parsed;
        uniqueDates.add(item.lastmod.slice(0, 10));
        if (ts >= d30) last30++;
        if (ts >= d90) {
          last90++;
          recentUrls.push({ loc: item.loc, pathname, lastmod: item.lastmod.slice(0, 10), ts });
        }
      }
    }

    const lowerPath = pathname.toLowerCase();
    for (const [k, rx] of Object.entries(PILLAR_PATTERNS)) {
      if (rx.test(lowerPath)) {
        pillarHits[k].push({ loc: item.loc, pathname, lastmod: item.lastmod ? item.lastmod.slice(0, 10) : null, ts: ts || 0 });
      }
    }
  }

  recentUrls.sort((a, b) => b.ts - a.ts);
  for (const k of Object.keys(pillarHits)) pillarHits[k].sort((a, b) => b.ts - a.ts);

  return {
    name: comp.name,
    domain: comp.domain,
    pillar: comp.pillar,
    robotsStatus,
    totalUrls: allUrls.length,
    uniqueLastmodDates: uniqueDates.size,
    last30,
    last90,
    topPrefixes: [...prefixCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6).map(([prefix, count]) => ({ prefix, count })),
    pillarCounts: {
      p1_pricing: pillarHits.p1_pricing.length,
      p2_product_ops: pillarHits.p2_product_ops.length,
      p3_governance: pillarHits.p3_governance.length,
      p4_pe_capital: pillarHits.p4_pe_capital.length,
      lead_magnet: pillarHits.lead_magnet.length,
    },
    recentSample: recentUrls.slice(0, 15),
    pillarSamples: {
      p1_pricing: pillarHits.p1_pricing.slice(0, 15),
      p2_product_ops: pillarHits.p2_product_ops.slice(0, 15),
      p3_governance: pillarHits.p3_governance.slice(0, 15),
      p4_pe_capital: pillarHits.p4_pe_capital.slice(0, 15),
      lead_magnet: pillarHits.lead_magnet.slice(0, 15),
    },
    errors,
  };
}

async function main() {
  const results = [];
  for (let i = 0; i < COMPETITORS.length; i += 5) {
    const out = await Promise.all(COMPETITORS.slice(i, i + 5).map(crawlDomain));
    results.push(...out);
  }

  const scratchDir = path.join(process.cwd(), '.scratch');
  fs.mkdirSync(scratchDir, { recursive: true });
  const outPath = path.join(scratchDir, 'competitor-sitemap-recon.json');
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), results }, null, 2), 'utf8');

  console.log('\n=== ADVISORY COMPETITOR SITEMAP RECON ===');
  for (const r of results) {
    const p = r.pillarCounts;
    const err = r.errors.length ? ` | ERR: ${r.errors[0]}` : '';
    console.log(
      `${r.name.padEnd(24)} | URLs:${String(r.totalUrls).padStart(5)} | Dates:${String(r.uniqueLastmodDates).padStart(3)} | 30d:${String(r.last30).padStart(4)} | 90d:${String(r.last90).padStart(4)} | P1:${String(p.p1_pricing).padStart(4)} P2:${String(p.p2_product_ops).padStart(3)} P3:${String(p.p3_governance).padStart(3)} P4:${String(p.p4_pe_capital).padStart(3)} Mag:${String(p.lead_magnet).padStart(3)}${err}`
    );
  }
  console.log(`\nSaved JSON snapshot: ${outPath}`);
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

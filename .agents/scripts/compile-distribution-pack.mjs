#!/usr/bin/env node
/**
 * Sovereign Step 6 Distribution Pack Compiler
 * (`.agents/scripts/compile-distribution-pack.mjs`)
 * =================================================
 * Air-gapped clean-room Step 6 distribution compiler closing the ADR-0018 &
 * ADR-0020 Demand Loop (zero AGPL-3.0 dependencies, zero auto-publish without
 * human approval).
 *
 * Usage:
 *   node .agents/scripts/compile-distribution-pack.mjs --route /tools/aueb
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import Module from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const SCRATCH_DIR = path.join(ROOT_DIR, '.scratch');
const QUEUE_DIR = path.join(SCRATCH_DIR, 'distribution-queue');

// ---------------------------------------------------------------------------
// HWS v2.0 Mechanical Linter Rules (Aligned 1:1 with verify-qa.mjs & AGENTS.md)
// ---------------------------------------------------------------------------

const EM_DASH_RE = /[\u2013\u2014]/g;

const BANNED_PHRASE_PATTERNS = [
  { label: 'unlock*', re: /\bunlock(?:s|ed|ing)?\b/i },
  { label: 'delve*', re: /\bdelv(?:e|es|ed|ing)\b/i },
  { label: 'seamless*', re: /\bseamless(?:ly)?\b/i },
  { label: 'robust*', re: /\brobust(?:ly)?\b/i },
  { label: 'leverage*', re: /\bleverag(?:e|es|ed|ing)\b/i },
  { label: 'the bottom line', re: /\bthe bottom line\b/i },
  { label: 'missing layer', re: /\bmissing layer\b/i },
  { label: 'missing piece', re: /\bmissing piece\b/i },
  { label: 'production-ready', re: /\bproduction-ready\b/i },
  { label: 'empower*', re: /\bempower(?:s|ed|ing|ment)?\b/i },
  { label: 'foster*', re: /\bfoster(?:s|ed|ing)?\b/i },
  { label: 'game-changer', re: /\bgame[- ]changer\b/i },
  { label: 'revolutionary', re: /\brevolutionary\b/i },
  { label: 'transformative', re: /\btransformative\b/i },
  { label: 'navigate the landscape', re: /\bnavigate the landscape\b/i },
  { label: 'at the end of the day', re: /\bat the end of the day\b/i },
  { label: 'let that sink in', re: /\blet that sink in\b/i },
  { label: 'read that again', re: /\bread that again\b/i },
  { label: 'full stop', re: /\bfull stop\b/i },
  { label: 'here is the thing', re: /\bhere(?:'s| is) the thing\b/i },
  { label: 'middle managers', re: /\bmiddle managers\b/i },
  { label: 'the C-suite', re: /\bthe c-suite\b/i },
];

const NAMED_ROLE_RE =
  /\b(?:CEO|CFO|COO|CPO|Chief Product Officer|VP of Operations|VP of Engineering|Director of Finance|Customer Support Manager|Engineering Manager|Product Ops Lead|FinOps Manager)\b/;

function sanitizeExtractedText(raw) {
  let text = String(raw || '')
    .replace(/[\u2013\u2014]/g, ': ')
    .replace(/\s+/g, ' ')
    .trim();

  const replacements = [
    [/\bunlock(?:s|ed|ing)?\b/gi, 'open'],
    [/\bdelv(?:e|es|ed|ing) into\b/gi, 'break down'],
    [/\bdelv(?:e|es|ed|ing)\b/gi, 'examine'],
    [/\bseamless(?:ly)?\b/gi, 'direct'],
    [/\brobust(?:ly)?\b/gi, 'proven'],
    [/\bleverag(?:e|es|ed|ing)\b/gi, 'use'],
    [/\bthe bottom line\b/gi, 'The Financial Readout'],
    [/\bmissing (?:layer|piece)\b/gi, 'operational control'],
    [/\bproduction-ready\b/gi, 'battle-tested'],
    [/\bempower(?:s|ed|ing)?\b/gi, 'equip'],
    [/\bfoster(?:s|ed|ing)?\b/gi, 'build'],
    [/\bgame[- ]changer\b/gi, 'structural advantage'],
    [/\brevolutionary\b/gi, 'practical'],
    [/\btransformative\b/gi, 'measurable'],
    [/\bmiddle managers\b/gi, 'Engineering Managers and Operations Leads'],
    [/\bthe c-suite\b/gi, 'the CEO, CFO, and COO'],
  ];

  for (const [re, sub] of replacements) {
    text = text.replace(re, sub);
  }
  return text;
}

export function lintDistributionPack(pack) {
  const fieldsToScan = [
    { name: 'linkedin.body', text: pack.channels.linkedin.body },
    { name: 'linkedin.first_comment', text: pack.channels.linkedin.first_comment },
    ...pack.channels.x_thread.map((item) => ({
      name: `x_thread[${item.part}]`,
      text: item.text,
    })),
    { name: 'scorecard_card.eyebrow', text: pack.channels.scorecard_card.eyebrow },
    { name: 'scorecard_card.headline', text: pack.channels.scorecard_card.headline },
    { name: 'scorecard_card.primaryMetric', text: pack.channels.scorecard_card.primaryMetric },
    { name: 'scorecard_card.pullQuote', text: pack.channels.scorecard_card.pullQuote },
    { name: 'scorecard_card.ctaLabel', text: pack.channels.scorecard_card.ctaLabel },
  ];

  let emDashes = 0;
  const bannedHits = [];
  const lengthErrors = [];

  for (const field of fieldsToScan) {
    const emMatches = field.text.match(EM_DASH_RE);
    if (emMatches) {
      emDashes += emMatches.length;
    }
    for (const rule of BANNED_PHRASE_PATTERNS) {
      if (rule.re.test(field.text)) {
        bannedHits.push(`${field.name}: matched banned pattern "${rule.label}"`);
      }
    }
  }

  for (const post of pack.channels.x_thread) {
    if (post.text.length > 280) {
      lengthErrors.push(`x_thread[${post.part}] exceeds 280 chars (${post.text.length})`);
    }
  }

  const hasNamedRoles = NAMED_ROLE_RE.test(pack.channels.linkedin.body);
  const violations = [
    ...(emDashes > 0 ? [`Detected ${emDashes} em/en-dash character(s)`] : []),
    ...bannedHits,
    ...lengthErrors,
    ...(!hasNamedRoles ? ['linkedin.body must name concrete operator/executive job titles'] : []),
  ];

  return {
    passed: violations.length === 0,
    emDashes,
    bannedPhrases: bannedHits.length,
    xThreadMaxChars: Math.max(...pack.channels.x_thread.map((t) => t.text.length)),
    hasNamedJobTitles: hasNamedRoles,
    violations,
  };
}

// ---------------------------------------------------------------------------
// In-Memory TypeScript Corpus Loader for Dynamic Routes
// ---------------------------------------------------------------------------

const tsModuleCache = new Map();
const nodeRequire = Module.createRequire(import.meta.url);

function resolveTsPath(baseDir, specifier) {
  let candidateBase = specifier;
  if (specifier.startsWith('@/')) {
    candidateBase = path.join(ROOT_DIR, specifier.slice(2));
  } else if (specifier.startsWith('.')) {
    candidateBase = path.resolve(baseDir, specifier);
  } else {
    return null;
  }

  const candidates = [
    candidateBase,
    `${candidateBase}.ts`,
    `${candidateBase}.tsx`,
    `${candidateBase}.js`,
    path.join(candidateBase, 'index.ts'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) {
      return c;
    }
  }
  return null;
}

function loadTsFile(absPath) {
  const normalized = path.resolve(absPath);
  if (tsModuleCache.has(normalized)) {
    return tsModuleCache.get(normalized).exports;
  }

  const source = fs.readFileSync(normalized, 'utf8');
  const transpiled = ts.transpileModule(source, {
    fileName: normalized,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
    },
  });

  const mod = { exports: {} };
  tsModuleCache.set(normalized, mod);

  const dirname = path.dirname(normalized);
  const customRequire = (specifier) => {
    const resolvedTs = resolveTsPath(dirname, specifier);
    if (resolvedTs && (resolvedTs.endsWith('.ts') || resolvedTs.endsWith('.tsx'))) {
      return loadTsFile(resolvedTs);
    }
    if (resolvedTs) {
      return nodeRequire(resolvedTs);
    }
    return nodeRequire(specifier);
  };

  const wrapper = new Function(
    'exports',
    'require',
    'module',
    '__filename',
    '__dirname',
    transpiled.outputText
  );
  wrapper(mod.exports, customRequire, mod, normalized, dirname);
  return mod.exports;
}

// ---------------------------------------------------------------------------
// Route Metadata Extractor
// ---------------------------------------------------------------------------

function extractStringProp(source, propName) {
  const patterns = [
    new RegExp(`${propName}\\s*:\\s*'([^']+)'`),
    new RegExp(`${propName}\\s*:\\s*"([^"]+)"`),
    new RegExp(`${propName}=\\s*"([^"]+)"`),
    new RegExp(`${propName}=\\s*'([^']+)'`),
  ];
  for (const re of patterns) {
    const m = source.match(re);
    if (m && m[1]) return sanitizeExtractedText(m[1]);
  }
  return '';
}

function stripHtmlToPlainText(rawHtml) {
  const withoutTags = String(rawHtml || '')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
  return sanitizeExtractedText(withoutTags);
}

function extractFirstHtmlParagraph(rawHtml) {
  const pMatch = String(rawHtml || '').match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  if (pMatch && pMatch[1]) {
    const cleaned = stripHtmlToPlainText(pMatch[1]);
    if (cleaned.length >= 25) return cleaned;
  }
  return stripHtmlToPlainText(rawHtml);
}

function resolveRouteContext(rawRoute) {
  const cleanRoute = '/' + String(rawRoute || '').trim().replace(/^\/+/, '').replace(/\/+$/, '');
  if (cleanRoute === '/' || cleanRoute.length < 2) {
    return null;
  }

  // 1. Direct static page in `app/<route>/page.tsx`
  const staticPagePath = path.join(ROOT_DIR, 'app', cleanRoute.slice(1), 'page.tsx');
  if (fs.existsSync(staticPagePath)) {
    const src = fs.readFileSync(staticPagePath, 'utf8');
    const title =
      extractStringProp(src, 'h1') ||
      extractStringProp(src, 'title') ||
      cleanRoute.split('/').pop();
    const execAnswer = extractStringProp(src, 'executiveAnswer');
    const metaDesc = extractStringProp(src, 'description');
    const description =
      execAnswer ||
      metaDesc ||
      `Interactive operational diagnostic and financial audit at ${cleanRoute}.`;
    const category = cleanRoute.startsWith('/tools/') ? 'Diagnostic Calculator' : 'Executive Guide';
    return {
      route: cleanRoute,
      category,
      title,
      summary: description,
      shortSummary: metaDesc || description,
      sourceFile: path.relative(ROOT_DIR, staticPagePath).replace(/\\/g, '/'),
    };
  }

  // 2. Dynamic `/concepts/<slug>`
  if (cleanRoute.startsWith('/concepts/')) {
    const slug = cleanRoute.replace('/concepts/', '');
    const { CANONICAL_CONCEPTS } = loadTsFile(path.join(ROOT_DIR, 'app/lib/concept-corpus.ts'));
    const hit = (CANONICAL_CONCEPTS || []).find((c) => c.slug === slug);
    if (hit) {
      const summary = sanitizeExtractedText(hit.whyItMatters || hit.definition);
      return {
        route: cleanRoute,
        category: 'Canonical Concept',
        title: sanitizeExtractedText(hit.title),
        summary,
        shortSummary: sanitizeExtractedText(hit.aeo?.shortDefinition || hit.definition || summary),
        sourceFile: 'app/lib/concept-corpus.ts',
      };
    }
  }

  // 3. Dynamic `/vault/curriculum/tracks/<slug>`
  if (cleanRoute.startsWith('/vault/curriculum/tracks/')) {
    const slug = cleanRoute.replace('/vault/curriculum/tracks/', '');
    const { modules } = loadTsFile(path.join(ROOT_DIR, 'app/lib/curriculum-data.ts'));
    const mod = modules?.[slug];
    if (mod) {
      const summary = sanitizeExtractedText(mod.description);
      return {
        route: cleanRoute,
        category: 'Academy Curriculum Module',
        title: sanitizeExtractedText(mod.title),
        summary,
        shortSummary: summary,
        sourceFile: 'app/lib/curriculum-data.ts',
      };
    }
  }

  // 4. Dynamic `/answers/<topic>/<persona>/<question>` (`SpokeQuery`: `questionHeadline`, `answerHtml`, `upsellHeadline`)
  if (cleanRoute.startsWith('/answers/')) {
    const parts = cleanRoute.replace('/answers/', '').split('/');
    if (parts.length === 3) {
      const [topicSlug, persona, questionSlug] = parts;
      const { SPOKE_MATRIX } = loadTsFile(path.join(ROOT_DIR, 'app/lib/spoke-data.ts'));
      const topic = (SPOKE_MATRIX || []).find((t) => t.topicSlug === topicSlug);
      const qList = topic?.personas?.[persona] || [];
      const qHit = qList.find((q) => q.questionSlug === questionSlug);
      if (qHit) {
        const headline = sanitizeExtractedText(
          qHit.questionHeadline || qHit.question || questionSlug
        );
        const extractedAnswer = extractFirstHtmlParagraph(qHit.answerHtml);
        const summary =
          extractedAnswer ||
          sanitizeExtractedText(qHit.upsellHeadline || topic?.topicName || headline);
        return {
          route: cleanRoute,
          category: 'Executive Decision Answer',
          title: headline,
          summary,
          shortSummary: trimToMax(summary, 180),
          sourceFile: 'app/lib/spoke-data.ts',
        };
      }
    }
  }

  // 5. Dynamic `/blog/<slug>` matched against `allArticles` (`blog-data.ts`) first, then `RESEARCH_CORPUS`
  if (cleanRoute.startsWith('/blog/')) {
    const slug = cleanRoute.replace('/blog/', '');
    const { allArticles } = loadTsFile(path.join(ROOT_DIR, 'app/lib/blog-data.ts'));
    const blogHit = allArticles?.[slug];
    if (blogHit) {
      const excerpt = sanitizeExtractedText(
        blogHit.excerpt || extractFirstHtmlParagraph(blogHit.content)
      );
      return {
        route: cleanRoute,
        category: 'Executive Essay',
        title: sanitizeExtractedText(blogHit.title),
        summary: excerpt,
        shortSummary: excerpt,
        sourceFile: 'app/lib/blog-data.ts',
      };
    }

    const { RESEARCH_CORPUS } = loadTsFile(path.join(ROOT_DIR, 'app/lib/research-corpus.ts'));
    const hit = (RESEARCH_CORPUS || []).find(
      (r) => r.id === slug || r.url.endsWith(`/${slug}`) || r.id.includes(slug)
    );
    if (hit) {
      const summary = sanitizeExtractedText(hit.thesis);
      return {
        route: cleanRoute,
        category: 'Empirical Research Essay',
        title: sanitizeExtractedText(hit.title),
        summary,
        shortSummary: summary,
        sourceFile: 'app/lib/research-corpus.ts',
      };
    }
  }

  return null;
}

function loadDemandTelemetrySignal(route) {
  const candidatePaths = [
    path.join(SCRATCH_DIR, 'demand-telemetry', 'latest.json'),
    path.join(SCRATCH_DIR, 'demand-telemetry-latest.json'),
  ];

  const slugTokens =
    route
      .split('/')
      .filter(Boolean)
      .pop()
      ?.split('-')
      .filter((t) => t.length >= 3) || [];

  for (const p of candidatePaths) {
    if (!fs.existsSync(p)) continue;
    try {
      const raw = JSON.parse(fs.readFileSync(p, 'utf8'));

      // 1. Primary schema: `practitionerPain.clusterSignals[]` in `.scratch/demand-telemetry-latest.json`
      const clusters = raw?.practitionerPain?.clusterSignals;
      if (Array.isArray(clusters) && clusters.length > 0) {
        const exactCluster = clusters.find(
          (c) => Array.isArray(c?.canonicalRoutes) && c.canonicalRoutes.includes(route)
        );
        const tokenCluster =
          exactCluster ||
          clusters.find((c) => {
            const hay = JSON.stringify({
              id: c?.clusterId,
              label: c?.clusterLabel,
              routes: c?.canonicalRoutes,
            }).toLowerCase();
            return slugTokens.some((tok) => hay.includes(tok.toLowerCase()));
          });

        if (tokenCluster) {
          const clusterLabel = sanitizeExtractedText(tokenCluster.clusterLabel || tokenCluster.clusterId || '');
          const topTitle = sanitizeExtractedText(tokenCluster.topDiscussions?.[0]?.title || '');
          if (clusterLabel) {
            return {
              sourceFile: path.relative(ROOT_DIR, p).replace(/\\/g, '/'),
              clusterId: tokenCluster.clusterId || null,
              matchedQuery: clusterLabel,
              topDiscussion: topTitle || null,
            };
          }
        }
      }

      // 2. Secondary schema: `topQueries` / `queries` / `opportunities`
      const queries = raw.topQueries || raw.queries || raw.opportunities || [];
      if (Array.isArray(queries) && queries.length > 0) {
        const matched = queries.find((q) => {
          const qStr = JSON.stringify(q).toLowerCase();
          return slugTokens.some((tok) => qStr.includes(tok.toLowerCase()));
        });
        const chosen = matched || queries[0];
        const queryText =
          typeof chosen === 'string'
            ? chosen
            : chosen?.query || chosen?.keyword || chosen?.topic || null;
        if (queryText) {
          return {
            sourceFile: path.relative(ROOT_DIR, p).replace(/\\/g, '/'),
            matchedQuery: sanitizeExtractedText(queryText),
          };
        }
      }
    } catch {
      // Ignore malformed optional scratch telemetry
    }
  }
  return null;
}

function trimToMax(text, maxLen) {
  const clean = sanitizeExtractedText(text);
  if (clean.length <= maxLen) return clean;
  if (maxLen <= 4) return clean.slice(0, Math.max(0, maxLen));
  const sliced = clean.slice(0, maxLen - 3);
  const sentenceEnd = Math.max(
    sliced.lastIndexOf('. '),
    sliced.lastIndexOf('? '),
    sliced.lastIndexOf('! ')
  );
  if (sentenceEnd > maxLen * 0.6) {
    const candidateSentence = sliced.slice(0, sentenceEnd + 1).trim();
    if (!/\$\d+$/.test(candidateSentence.slice(0, -1))) {
      return candidateSentence;
    }
  }
  const lastSpace = sliced.lastIndexOf(' ');
  const cut = lastSpace > maxLen * 0.45 ? sliced.slice(0, lastSpace) : sliced;
  return cut.replace(/[.,;:]+$/, '') + '...';
}

function stripDuplicateLeadingTitle(title, summary) {
  const cleanSummary = sanitizeExtractedText(summary);
  const cleanTitle = sanitizeExtractedText(title);
  if (!cleanTitle) return cleanSummary;
  const escaped = cleanTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const prefixRe = new RegExp(`^(?:the\\s+)?${escaped}\\s*[:,-]?\\s*`, 'i');
  if (prefixRe.test(cleanSummary)) {
    const remainder = cleanSummary.replace(prefixRe, '').trim();
    if (remainder.length > 20) {
      return remainder.charAt(0).toUpperCase() + remainder.slice(1);
    }
  }
  return cleanSummary;
}

function buildDistributionPack(ctx, demandSignal) {
  const campaignSlug = ctx.route
    .replace(/^\/+/, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  const utmCampaign = campaignSlug.slice(0, 48).replace(/-+$/, '');

  const baseUrl = `https://www.richardewing.io${ctx.route}`;
  const linkedinUrl = `${baseUrl}?utm_source=linkedin&utm_medium=founder_social&utm_campaign=${utmCampaign}`;
  const xUrl = `${baseUrl}?utm_source=x&utm_medium=founder_social&utm_campaign=${utmCampaign}`;
  const cardUrl = `${baseUrl}?utm_source=boardroom_card&utm_medium=founder_social&utm_campaign=${utmCampaign}`;

  const dateBucket = new Date().toISOString().slice(0, 10);
  const idempotencyKey = crypto
    .createHash('sha256')
    .update(`${ctx.route}:${dateBucket}`, 'utf8')
    .digest('hex');

  const demandHook = demandSignal?.matchedQuery
    ? `Right now, CFOs and VPs of Operations keep hitting the same wall in budget reviews around ${demandSignal.matchedQuery}.`
    : `Most software teams do not lose margin during the demo. They lose it 60 days after launch when nobody owns the unit cost ledger.`;

  const isCalculator = ctx.route.startsWith('/tools/');
  const actionNoun = isCalculator ? 'interactive calculator' : 'executive briefing';

  const linkedinBody = [
    demandHook,
    '',
    `Look at what happens on the floor around ${ctx.title}:`,
    ctx.summary,
    '',
    `When a CEO, CFO, Chief Product Officer, and Engineering Manager sit in the same room without a shared cost threshold, two bad habits take over:`,
    `1. Heavy usage gets celebrated as product adoption even while variable API bills quietly eat subscription gross margin.`,
    `2. Exception queues land on your Customer Support Manager and Product Ops Lead without anyone counting the extra payroll hours.`,
    '',
    `Before signing another vendor contract or shipping a flat-rate pricing tier, run your actual numbers through a cold Stress Test. Put a hard dollar floor on every workflow before you scale traffic.`,
    '',
    `I put the full ${actionNoun} link in the first comment so your finance and product leads can test their own baseline in two minutes.`,
  ].join('\n');

  const linkedinFirstComment = `Run the ${ctx.title} (${ctx.category}) directly here, no login wall: ${linkedinUrl}`;

  const xPart1 = trimToMax(
    `1/ Most AI features look profitable in a 20-user pilot and bleed cash at 2,000 users. Why? Because the CEO, CFO, and CPO price seats flat while model inference scales per query.`,
    275
  );

  const primaryBody = stripDuplicateLeadingTitle(ctx.title, ctx.summary);
  const shortBody = ctx.shortSummary
    ? stripDuplicateLeadingTitle(ctx.title, ctx.shortSummary)
    : primaryBody;
  const fullCandidateX2 = sanitizeExtractedText(`2/ ${ctx.title}: ${primaryBody}`);
  const shortCandidateX2 = sanitizeExtractedText(`2/ ${ctx.title}: ${shortBody}`);
  const xPart2 =
    fullCandidateX2.length <= 275
      ? fullCandidateX2
      : shortCandidateX2.length <= 275
        ? shortCandidateX2
        : trimToMax(shortCandidateX2, 275);

  const availablePrefixBudget = 280 - xUrl.length - 1;
  let xPart3Prefix = '3/';
  const fullCtaPrefix =
    '3/ Stress-test your own numbers before your Director of Finance flags the cloud bill:';
  const mediumCtaPrefix = '3/ Stress-test your own numbers:';
  const compactCtaPrefix = '3/ Full readout:';

  if (availablePrefixBudget >= fullCtaPrefix.length) {
    xPart3Prefix = fullCtaPrefix;
  } else if (availablePrefixBudget >= mediumCtaPrefix.length) {
    xPart3Prefix = mediumCtaPrefix;
  } else if (availablePrefixBudget >= compactCtaPrefix.length) {
    xPart3Prefix = compactCtaPrefix;
  } else if (availablePrefixBudget >= 3) {
    xPart3Prefix = trimToMax(compactCtaPrefix, availablePrefixBudget);
  }
  const xPart3 =
    availablePrefixBudget >= 2 ? `${xPart3Prefix} ${xUrl}` : xUrl.slice(0, 280);

  const scorecardCard = {
    eyebrow: sanitizeExtractedText(`${ctx.category} · Boardroom Readout`),
    headline: trimToMax(ctx.title, 90),
    primaryMetric: isCalculator
      ? 'Seat-vs-Consumption Margin Collapse Point'
      : 'Pre-Commit Gross Margin Floor',
    pullQuote: trimToMax(
      `If your CFO, COO, and VP of Engineering cannot state the exact usage volume where a customer seat turns margin-negative, you do not have a pricing model yet.`,
      220
    ),
    ctaLabel: isCalculator ? 'Run Live Margin Stress Test' : 'Read Executive Readout',
    ctaUrl: cardUrl,
  };

  return {
    schemaVersion: '1.0.0',
    adr: 'ADR-0020',
    status: 'pending_human_approval',
    approved_by_human_at: null,
    idempotency_key: idempotencyKey,
    generated_at: new Date().toISOString(),
    route: ctx.route,
    campaign_slug: campaignSlug,
    source_file: ctx.sourceFile,
    demand_signal: demandSignal,
    channels: {
      linkedin: {
        target_roles: [
          'CEO',
          'CFO',
          'Chief Product Officer',
          'Engineering Manager',
          'Customer Support Manager',
          'Product Ops Lead',
        ],
        body: linkedinBody,
        first_comment: linkedinFirstComment,
        character_count: linkedinBody.length,
      },
      x_thread: [
        { part: 1, text: xPart1, char_count: xPart1.length },
        { part: 2, text: xPart2, char_count: xPart2.length },
        { part: 3, text: xPart3, char_count: xPart3.length },
      ],
      scorecard_card: scorecardCard,
    },
  };
}

// ---------------------------------------------------------------------------
// CLI Entrypoint
// ---------------------------------------------------------------------------

function parseRouteArg(argv) {
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--route' && argv[i + 1]) {
      return argv[i + 1];
    }
    if (a.startsWith('--route=')) {
      return a.slice(8);
    }
  }
  return null;
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.includes('--help')) {
    console.log('Usage: node .agents/scripts/compile-distribution-pack.mjs --route <path>');
    process.exit(0);
  }

  const routeArg = parseRouteArg(argv);
  if (!routeArg || !routeArg.trim()) {
    console.error('[DISTRIBUTION COMPILER ERROR] Missing required --route <path> argument (e.g. --route /tools/aueb).');
    process.exit(1);
  }

  const ctx = resolveRouteContext(routeArg);
  if (!ctx) {
    console.error(`[DISTRIBUTION COMPILER ERROR] Route "${routeArg}" could not be resolved to an active app/ page or corpus entry.`);
    process.exit(1);
  }

  const demandSignal = loadDemandTelemetrySignal(ctx.route);
  const pack = buildDistributionPack(ctx, demandSignal);
  const lintReport = lintDistributionPack(pack);

  if (!lintReport.passed) {
    console.error('[DISTRIBUTION COMPILER HWS v2.0 LINT FAILED]:');
    for (const v of lintReport.violations) {
      console.error(`  - ${v}`);
    }
    process.exit(1);
  }

  pack.lint_report = lintReport;

  fs.mkdirSync(QUEUE_DIR, { recursive: true });
  const outPath = path.join(QUEUE_DIR, `${pack.campaign_slug}.json`);
  fs.writeFileSync(outPath, JSON.stringify(pack, null, 2) + '\n', 'utf8');

  console.log(`[DISTRIBUTION PACK COMPILED] Route=${ctx.route} | Status=${pack.status}`);
  console.log(`  HWS v2.0 Lint: PASS (emDashes=${lintReport.emDashes}, bannedPhrases=${lintReport.bannedPhrases}, maxXChars=${lintReport.xThreadMaxChars})`);
  console.log(`  Idempotency Key: ${pack.idempotency_key.slice(0, 16)}...`);
  console.log(`  Draft queued: ${path.relative(ROOT_DIR, outPath)}`);
}

if (path.resolve(process.argv[1] || '') === __filename) {
  try {
    main();
    process.exit(0);
  } catch (err) {
    console.error(`[DISTRIBUTION COMPILER FATAL] ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  }
}

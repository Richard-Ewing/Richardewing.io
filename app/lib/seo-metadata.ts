/**
 * Centralized SEO & AEO Snippet Governance Utility (ADR-0017)
 * Enforces:
 * - Rendered <title> <= 60 chars (base <= 44 chars with "%s | Richard Ewing"), zero ellipses, zero mid-word cuts.
 * - Meta description strictly 130..155 chars, abbreviation-safe ("vs.", "e.g.", decimals), zero ellipses, zero em-dashes, zero banned HWS words.
 */

const TRAILING_DANGLING_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'nor', 'for', 'so', 'yet',
  'of', 'in', 'to', 'with', 'from', 'by', 'on', 'at', 'as', 'into',
  'over', 'under', 'between', 'through', 'without', 'within', 'across',
  'against', 'during', 'before', 'after', 'above', 'below', 'about',
  'around', 'near', 'upon', 'toward', 'towards', 'via', 'per', 'vs',
  'vs.', 'versus', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'can', 'will', 'should', 'would', 'could', 'may', 'might', 'must',
  'do', 'does', 'did', 'has', 'have', 'had', 'how', 'why', 'what',
  'when', 'where', 'who', 'whom', 'whose', 'that', 'which', 'your',
  'our', 'their', 'its', 'my', 'his', 'her', 'this', 'these', 'those',
  'not', 'no', 'than', 'then', 'if', 'whether', 'while'
]);

const BRAND_SUFFIX = ' | Richard Ewing';

export function sanitizeHwsText(input: string): string {
  return (input || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[\u2014\u2013]/g, ': ')
    .replace(/\s*;\s*/g, '. ')
    .replace(/\bunlock(?:s|ed|ing)?\b/gi, 'access')
    .replace(/\bdelve(?:s|d|ing)?\b/gi, 'examine')
    .replace(/\bseamless(?:ly)?\b/gi, 'direct')
    .replace(/\brobust(?:ly)?\b/gi, 'resilient')
    .replace(/\bleverag(?:e|es|ed|ing)\b/gi, 'use')
    .replace(/\bproduction-ready\b/gi, 'field-tested')
    .replace(/\bmissing (?:layer|piece)\b/gi, 'operational control')
    .replace(/\.{3,}|\u2026/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasBalancedDelimiters(text: string): boolean {
  const openParens = (text.match(/\(/g) || []).length;
  const closeParens = (text.match(/\)/g) || []).length;
  const quotes = (text.match(/"/g) || []).length;
  return openParens === closeParens && quotes % 2 === 0;
}

function stripDanglingTail(phrase: string): string {
  let words = phrase
    .replace(/[\s,:;\-+/|&([{\u2013\u2014]+$/g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  while (words.length > 2) {
    const lastClean = words[words.length - 1].toLowerCase().replace(/[^a-z0-9.]/g, '');
    if (TRAILING_DANGLING_WORDS.has(lastClean)) {
      words.pop();
    } else {
      break;
    }
  }

  // Close unbalanced opening parenthesis or unmatched quote if clipped mid-span
  let result = words.join(' ').replace(/[\s,:;\-+/|&]+$/g, '').trim();
  const openParens = (result.match(/\(/g) || []).length;
  const closeParens = (result.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    result = result.replace(/\s*\([^)]*$/, '').trim();
  }
  if (((result.match(/"/g) || []).length % 2) !== 0) {
    const lastQuote = result.lastIndexOf('"');
    result = (result.slice(0, lastQuote) + result.slice(lastQuote + 1))
      .replace(/\s+/g, ' ')
      .trim();
  }
  return result;
}

/**
 * Clamps a leaf route base title so that when Next.js applies `%s | Richard Ewing` (+16 chars),
 * the final rendered <title> never exceeds 60 characters and never contains `...` or mid-word cuts.
 */
export function clampSeoTitle(rawCore: string, maxCoreChars = 44): string {
  let cleaned = sanitizeHwsText(rawCore)
    // Strip internal curriculum/module catalog prefixes like "6-1: " or "Module 14-2: "
    .replace(/^(?:module\s+|track\s+|lesson\s+)?\d+-\d+\s*:\s*/i, '')
    // Strip accidental duplicate brand suffixes
    .replace(/\s*\|\s*Richard Ewing.*$/i, '')
    .replace(/\s*-\s*Richard Ewing.*$/i, '')
    .trim();

  // Fix accidental doubled word typos such as "AI AI Economist"
  cleaned = cleaned.replace(/\b(\w+)\s+\1\b/gi, '$1');

  const hardLimit = Math.min(maxCoreChars, 60 - BRAND_SUFFIX.length);

  if (cleaned.length <= hardLimit && hasBalancedDelimiters(cleaned)) {
    return cleaned;
  }

  // 1. Try clean delimiter split (`: `, ` - `, ` | `) if primary clause fits [18, hardLimit] and has balanced parens/quotes
  const delimiters = [': ', ' - ', ' | '];
  for (const delim of delimiters) {
    const idx = cleaned.indexOf(delim);
    if (idx >= 18 && idx <= hardLimit && hasBalancedDelimiters(cleaned.slice(0, idx))) {
      const candidate = stripDanglingTail(cleaned.slice(0, idx));
      if (candidate.length >= 16 && candidate.length <= hardLimit) {
        return candidate;
      }
    }
  }

  // Only split on ` (` if the parenthetical closes at the end of the title (trailing qualifier, never mid-sentence)
  const parenIdx = cleaned.indexOf(' (');
  if (parenIdx >= 18 && parenIdx <= hardLimit && cleaned.endsWith(')')) {
    const candidate = stripDanglingTail(cleaned.slice(0, parenIdx));
    if (candidate.length >= 16 && candidate.length <= hardLimit) {
      return candidate;
    }
  }

  // If inline parenthetical glosses (e.g., `Can "Computer Use" (browser agents) automate...`) push a title over budget,
  // remove the inline parenthetical so the full clause fits cleanly.
  const withoutInlineParen = cleaned.replace(/\s*\([^)]+\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
  const workingText = withoutInlineParen.length >= 18 ? withoutInlineParen : cleaned;
  if (workingText.length <= hardLimit && hasBalancedDelimiters(workingText)) {
    return workingText;
  }

  // 2. Word-boundary accumulation up to hardLimit (so +16 <= 60)
  const words = workingText.split(/\s+/);
  let acc = '';
  for (const w of words) {
    const next = acc ? `${acc} ${w}` : w;
    if (next.length <= hardLimit) {
      acc = next;
    } else {
      break;
    }
  }

  // Guard against unclosed opening parenthesis at the cut boundary
  if ((acc.match(/\(/g) || []).length > (acc.match(/\)/g) || []).length) {
    acc = acc.slice(0, acc.lastIndexOf('(')).trim();
  }

  const trimmed = stripDanglingTail(acc);
  if (trimmed.length >= 14) {
    return trimmed;
  }

  return stripDanglingTail(workingText.slice(0, hardLimit));
}

const ABBREV_TOKEN = '__DOT__';

function splitSentencesSafe(text: string): string[] {
  const protectedText = text
    .replace(/\b(vs|e\.g|i\.e|dr|mr|ms|mrs|u\.s|inc|corp|ltd|jr|sr|no|fig|st|jan|feb|mar|apr|jun|jul|aug|sep|sept|oct|nov|dec)\./gi, `$1${ABBREV_TOKEN}`)
    .replace(/(\d)\.(\d)/g, `$1${ABBREV_TOKEN}$2`)
    .replace(/\b([A-Z])\.([A-Z])\./g, `$1${ABBREV_TOKEN}$2${ABBREV_TOKEN}`);

  return protectedText
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.replaceAll(ABBREV_TOKEN, '.').trim())
    .filter(Boolean);
}

const CALIBRATED_SUFFIXES = [
  ' Run interactive P&L models, benchmark unit margins, and stress-test board metrics with Richard Ewing.',
  ' Model unit margins, audit technical debt, and stress-test R&D capital decisions with Richard Ewing.',
  ' Quantify margin risk, audit R&D spend, and run interactive scenarios with Richard Ewing.',
  ' Audit unit margins, R&D capital risk, and board metrics with Richard Ewing.',
  ' Benchmark unit economics and R&D capital risk with Richard Ewing.',
  ' Quantify unit margins and R&D risk with Richard Ewing.',
  ' Run live financial models with Richard Ewing.',
  ' Audit unit margins with Richard Ewing.',
  ' Model P&L risk with Richard Ewing.',
  ' Built by Richard Ewing.',
  ' By Richard Ewing.',
];

function ensureTerminalPeriod(s: string): string {
  const trimmed = s.replace(/[\s,:;\-+/|&]+$/g, '').trim();
  if (!trimmed) return '';
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

/**
 * Formats a meta description strictly inside [130, 155] characters:
 * - Zero `...` or `…` ellipses
 * - Abbreviation-safe (`vs.`, `e.g.`, decimals never split prematurely)
 * - Active voice, clean grammatical sentence ending
 */
export function formatSeoDescription(raw: string, customContextSuffix?: string): string {
  let cleaned = sanitizeHwsText(raw);
  if (!cleaned) {
    cleaned = 'Audit AI unit economics, software gross margins, and R&D capital efficiency across your organization.';
  }

  // If already in ideal range [130, 155] and ends cleanly
  const withPeriod = ensureTerminalPeriod(cleaned);
  if (withPeriod.length >= 130 && withPeriod.length <= 155) {
    return withPeriod;
  }

  // Split into abbreviation-safe sentences
  const sentences = splitSentencesSafe(cleaned);
  let accumulated = '';
  for (const s of sentences) {
    const candidate = ensureTerminalPeriod(accumulated ? `${accumulated} ${s}` : s);
    if (candidate.length <= 155) {
      accumulated = candidate;
    } else {
      break;
    }
  }

  if (accumulated.length >= 130 && accumulated.length <= 155) {
    return accumulated;
  }

  // If first sentence alone exceeded 155 chars, trim at clause or clean word boundary <= 154 chars
  if (!accumulated && cleaned.length > 155) {
    const sliceWindow = cleaned.slice(0, 154);
    const clauseMarkers = [', ', ': ', ' - ', ' while ', ' where ', ' including ', ' across '];
    let bestClause = '';
    for (const marker of clauseMarkers) {
      const idx = sliceWindow.lastIndexOf(marker);
      if (idx >= 129 && idx <= 154) {
        const candidate = ensureTerminalPeriod(stripDanglingTail(sliceWindow.slice(0, idx)));
        if (candidate.length >= 130 && candidate.length <= 155 && candidate.length > bestClause.length) {
          bestClause = candidate;
        }
      }
    }
    if (bestClause) {
      return bestClause;
    }

    // Word-boundary trim <= 154 chars
    const words = cleaned.split(/\s+/);
    let wordAcc = '';
    for (const w of words) {
      const next = wordAcc ? `${wordAcc} ${w}` : w;
      if (next.length <= 153) {
        wordAcc = next;
      } else {
        break;
      }
    }
    const cleanTrimmed = ensureTerminalPeriod(stripDanglingTail(wordAcc));
    if (cleanTrimmed.length >= 130 && cleanTrimmed.length <= 155) {
      return cleanTrimmed;
    }
    accumulated = cleanTrimmed;
  }

  // Base string is currently < 130 chars; pad deterministically into [130, 155]
  let base = ensureTerminalPeriod(accumulated || cleaned);
  if (base.length < 35) {
    base = ensureTerminalPeriod(`${base} Compare real unit costs and margin benchmarks across SaaS and AI workflows`);
  }

  const candidateSuffixes = customContextSuffix
    ? [` ${ensureTerminalPeriod(sanitizeHwsText(customContextSuffix))}`, ...CALIBRATED_SUFFIXES]
    : CALIBRATED_SUFFIXES;

  for (const suffix of candidateSuffixes) {
    const combined = `${base}${suffix}`.replace(/\s+/g, ' ').trim();
    if (combined.length >= 130 && combined.length <= 155) {
      return combined;
    }
  }

  // Final deterministic guard if gap fell between suffixes
  const padded = `${base} Audit unit margins, R&D capital risk, and live P&L scenarios with Richard Ewing.`;
  if (padded.length >= 130 && padded.length <= 155) {
    return padded;
  }
  const words = padded.split(/\s+/);
  let finalAcc = '';
  for (const w of words) {
    const next = finalAcc ? `${finalAcc} ${w}` : w;
    if (next.length <= 153) {
      finalAcc = next;
    } else {
      break;
    }
  }
  return ensureTerminalPeriod(stripDanglingTail(finalAcc));
}

export function countProseWords(htmlOrText = ''): number {
  return htmlOrText
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

const PROTECTED_SYNDICATION_HOSTS = ['cio.com', 'builtin.com', 'hackernoon.com', 'mindtheproduct.com'];

/**
 * Prose-gated canonical URL resolver (ADR-0017 Wave 4):
 * - Preserves external canonicals unconditionally on CIO.com, Built In, HackerNoon, and Mind the Product.
 * - Never emits a bare LinkedIn profile URL as an article canonical.
 * - Reclaims Beehiiv and LinkedIn canonicals to selfUrl ONLY when rendered prose is >= 800 words.
 */
export function resolveProseGatedCanonical(
  externalOrCanonicalUrl: string | undefined,
  selfUrl: string,
  renderedContent: string
): string {
  if (!externalOrCanonicalUrl) return selfUrl;
  const trimmed = externalOrCanonicalUrl.trim();
  if (!trimmed || trimmed === selfUrl) return selfUrl;

  if (trimmed.startsWith('/')) {
    return `https://www.richardewing.io${trimmed}`;
  }

  if (/linkedin\.com\/in\/richard-ewing-mba\/?$/i.test(trimmed)) {
    return selfUrl;
  }

  if (PROTECTED_SYNDICATION_HOSTS.some((host) => trimmed.toLowerCase().includes(host))) {
    return trimmed;
  }

  if (/beehiiv\.com|linkedin\.com/i.test(trimmed)) {
    return countProseWords(renderedContent) >= 800 ? selfUrl : trimmed;
  }

  return trimmed;
}


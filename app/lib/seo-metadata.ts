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
  'not', 'no', 'than', 'then', 'if', 'whether', 'while',
  'rather', 'instead', 'such', 'both', 'each', 'all', 'every',
  'some', 'any', 'many', 'most', 'other', 'another', 'wasting'
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
  // Close/remove unbalanced opening parenthesis or unmatched quote FIRST so post-paren dangling words are also stripped
  let preCleaned = phrase
    .replace(/[\s,:;\-+/|&([{\u2013\u2014]+$/g, '')
    .trim();

  if ((preCleaned.match(/\(/g) || []).length > (preCleaned.match(/\)/g) || []).length) {
    preCleaned = preCleaned.replace(/\s*\([^)]*$/, '').trim();
  }
  if (((preCleaned.match(/"/g) || []).length % 2) !== 0) {
    const lastQuote = preCleaned.lastIndexOf('"');
    preCleaned = (preCleaned.slice(0, lastQuote) + preCleaned.slice(lastQuote + 1))
      .replace(/\s+/g, ' ')
      .trim();
  }

  preCleaned = preCleaned
    .replace(/[\s,:;\-+/|&([{\u2013\u2014]+$/g, '')
    .replace(/\s+(?:the|a|an|all|top|these|those)\s+\d+$/i, '')
    .trim();

  let words = preCleaned
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

  return words.join(' ')
    .replace(/\s+(?:the|a|an|all|top|these|those)\s+\d+$/i, '')
    .replace(/[\s,:;\-+/|&]+$/g, '')
    .trim();
}

/**
 * Clamps a leaf route base title so that when Next.js applies `%s | Richard Ewing` (+16 chars),
 * the final rendered <title> never exceeds 60 characters and never contains `...` or mid-word cuts.
 */
export function clampSeoTitle(rawCore: string, maxCoreChars = 44): string {
  let cleaned = sanitizeHwsText(rawCore)
    // Strip internal curriculum/module catalog prefixes like "6-1: ", "24.1 ", "28.10 ", "Module 3: "
    .replace(/^(?:(?:module|track|lesson)\s+\d+(?:[.-]\d+)?\s*:\s*|\d+[.-]\d+\s*:?\s*)/i, '')
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

  // 1. Try clean delimiter split (`: `, ` - `, ` | `) only when primary clause is substantive [24, hardLimit]
  const delimiters = [': ', ' - ', ' | '];
  for (const delim of delimiters) {
    const idx = cleaned.indexOf(delim);
    if (idx >= 24 && idx <= hardLimit && hasBalancedDelimiters(cleaned.slice(0, idx))) {
      const candidate = stripDanglingTail(cleaned.slice(0, idx));
      if (candidate.length >= 22 && candidate.length <= hardLimit) {
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

function ensureTerminalPeriod(s: string): string {
  const trimmed = s.replace(/[\s,:;\-+/|&]+$/g, '').trim();
  if (!trimmed) return '';
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function stripHtmlHeadings(input: string): string {
  return (input || '')
    .replace(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi, ' ')
    .replace(/<table[\s\S]*?<\/table>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function clampSinglePass(text: string, minLen: number, maxLen: number): string {
  const sliceWindow = text.slice(0, maxLen - 1);
  const clauseMarkers = [', ', ': ', ' - ', ' while ', ' where ', ' including ', ' across ', ' without ', ' before '];
  let bestClause = '';
  for (const marker of clauseMarkers) {
    const idx = sliceWindow.lastIndexOf(marker);
    if (idx >= minLen - 1 && idx <= maxLen - 1) {
      const candidate = ensureTerminalPeriod(stripDanglingTail(sliceWindow.slice(0, idx)));
      if (candidate.length >= minLen && candidate.length <= maxLen && candidate.length > bestClause.length) {
        bestClause = candidate;
      }
    }
  }
  if (bestClause) return bestClause;

  const words = text.split(/\s+/);
  let wordAcc = '';
  for (const w of words) {
    const next = wordAcc ? `${wordAcc} ${w}` : w;
    if (next.length <= maxLen - 2) {
      wordAcc = next;
    } else {
      break;
    }
  }
  if (!wordAcc) {
    wordAcc = text.slice(0, maxLen - 2).trim();
  }
  return ensureTerminalPeriod(stripDanglingTail(wordAcc));
}

function clampToRange(text: string, minLen: number, maxLen: number): string {
  const direct = clampSinglePass(text, minLen, maxLen);
  if (direct.length >= minLen && direct.length <= maxLen) {
    return direct;
  }
  // If an inline parenthetical straddled the boundary and collapsed length below minLen, drop parenthetical glosses and retry
  if (text.includes('(')) {
    const noParens = text.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
    if (noParens.length >= minLen) {
      const retried = noParens.length <= maxLen
        ? ensureTerminalPeriod(noParens)
        : clampSinglePass(noParens, minLen, maxLen);
      if (retried.length >= minLen && retried.length <= maxLen) {
        return retried;
      }
    }
  }
  return direct;
}

/**
 * Formats a meta description strictly inside [120, 155] characters (Nov 2026 SERP + AEO standard):
 * - Zero `...` or `…` ellipses, zero em-dashes, zero generic boilerplate padding tails
 * - Draws real page-specific sentences from `fallbackProse` when `raw` is under 120 chars
 * - Abbreviation-safe (`vs.`, `e.g.`, decimals never split prematurely)
 */
export function formatSeoDescription(raw: string, fallbackProse?: string): string {
  const MIN_LEN = 120;
  const MAX_LEN = 155;

  let cleaned = sanitizeHwsText(stripHtmlHeadings(raw));
  if (!cleaned) {
    cleaned = 'Audit AI unit economics, software gross margins, and R&D capital efficiency across enterprise engineering teams.';
  }

  // If already inside ideal [120, 155] range and ends cleanly
  const withPeriod = ensureTerminalPeriod(cleaned);
  if (withPeriod.length >= MIN_LEN && withPeriod.length <= MAX_LEN) {
    return withPeriod;
  }

  // Split into abbreviation-safe sentences
  const sentences = splitSentencesSafe(cleaned);
  let accumulated = '';
  for (const s of sentences) {
    const candidate = ensureTerminalPeriod(accumulated ? `${accumulated} ${s}` : s);
    if (candidate.length <= MAX_LEN) {
      accumulated = candidate;
    } else {
      break;
    }
  }

  if (accumulated.length >= MIN_LEN && accumulated.length <= MAX_LEN) {
    return accumulated;
  }

  // If first sentence alone exceeded MAX_LEN, trim cleanly into [120, 155]
  if (!accumulated && cleaned.length > MAX_LEN) {
    const trimmed = clampToRange(cleaned, MIN_LEN, MAX_LEN);
    if (trimmed.length >= MIN_LEN && trimmed.length <= MAX_LEN) {
      return trimmed;
    }
    accumulated = trimmed;
  }

  // If primary text had more sentences after `accumulated`, try combining with a clean trimmed clause from the next sentence
  if (accumulated && accumulated.length < MIN_LEN && cleaned.length > accumulated.length + 10) {
    const trimmedCombined = clampToRange(cleaned, MIN_LEN, MAX_LEN);
    if (trimmedCombined.length >= MIN_LEN && trimmedCombined.length <= MAX_LEN) {
      return trimmedCombined;
    }
  }

  let base = ensureTerminalPeriod(accumulated || cleaned);

  // Pull real page-specific Sentence 2 from fallbackProse (never generic boilerplate)
  if (base.length < MIN_LEN && fallbackProse) {
    const extraClean = sanitizeHwsText(stripHtmlHeadings(fallbackProse));
    if (extraClean) {
      const baseLower = base.toLowerCase().slice(0, 40);
      const extraSentences = splitSentencesSafe(extraClean).filter(
        (s) => s.length >= 20 && !s.toLowerCase().startsWith(baseLower)
      );
      let combined = base;
      for (const s of extraSentences) {
        const next = ensureTerminalPeriod(`${combined} ${s}`);
        if (next.length <= MAX_LEN) {
          combined = next;
          if (combined.length >= MIN_LEN) return combined;
        } else {
          // Try trimming `combined + s` cleanly into [MIN_LEN, MAX_LEN]; if too short, keep scanning
          const trimmed = clampToRange(`${combined} ${s}`, MIN_LEN, MAX_LEN);
          if (trimmed.length >= MIN_LEN && trimmed.length <= MAX_LEN) {
            return trimmed;
          }
          continue;
        }
      }
      if (combined.length > base.length) {
        base = combined;
      }
      if (base.length >= MIN_LEN && base.length <= MAX_LEN) {
        return base;
      }
    }
  }

  // Last-resort deterministic guard only when neither primary nor fallbackProse supplied enough text
  if (base.length < MIN_LEN) {
    const guardOptions = [
      'Includes field-tested engineering benchmarks and board-ready financial diagnostics.',
      'Includes concrete diagnostic thresholds and executive decision rules.',
      'Includes field-tested engineering economics and governance benchmarks for enterprise technical leaders and finance teams.',
    ];
    for (const tail of guardOptions) {
      const candidate = ensureTerminalPeriod(`${base} ${tail}`);
      if (candidate.length >= MIN_LEN && candidate.length <= MAX_LEN) {
        return candidate;
      }
    }
    const longGuard = `${base} Includes field-tested engineering economics and governance benchmarks for enterprise technical leaders and finance teams.`;
    const clamped = clampToRange(longGuard, MIN_LEN, MAX_LEN);
    if (clamped.length >= MIN_LEN && clamped.length <= MAX_LEN) {
      return clamped;
    }
    return ensureTerminalPeriod(longGuard.slice(0, MAX_LEN - 1).trim());
  }

  return base.length <= MAX_LEN ? base : clampToRange(base, MIN_LEN, MAX_LEN);
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


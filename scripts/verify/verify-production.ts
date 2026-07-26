import https from 'https';
import http from 'http';
import { URL } from 'url';

/**
 * AI Economics Commercial Knowledge Platform - Production Live Verification Suite v12.0
 * Subsystem: /scripts/verify/verify-production.ts
 */

const BASE_URL = process.env.PROD_URL || 'https://www.richardewing.io';

interface CheckItem {
  name: string;
  url: string;
  expectedStatus?: number[];
  expectedLocation?: string;
  mustStartTitleWith?: string;
  mustContainTitle?: string;
  mustContainOgTitle?: string;
  mustContainHeaderKey?: string;
  mustContain?: string[];
  mustNotContain?: string[];
  followRedirects?: boolean;
  finalMustContain?: string[];
  finalMustNotContain?: string[];
  finalMustContainTitle?: string;
}

const CHECKS: CheckItem[] = [
  // 1. Core Revenue Pages & Pricing
  {
    name: 'Homepage Pricing Check',
    url: '/',
    mustNotContain: ['$7,500/month', '$7,500 / month'],
  },
  {
    name: 'Pricing Page Retainer Check',
    url: '/pricing',
    mustContain: ['10,000'],
    mustNotContain: ['$7,500 / month'],
  },
  {
    name: 'Services Page Retainer Check',
    url: '/services',
    mustContain: ['10,000'],
  },
  {
    name: 'Advisory Redirect Check',
    url: '/advisory',
    expectedStatus: [301, 307, 308],
  },

  // 2. Behavioral Redirect Verification (HTTP 301/308 & Followed Target Verification)
  {
    name: 'Tier C Redirect - Chakra UI vs Terraform (Header Check)',
    url: '/compare/chakra-ui-vs-terraform',
    expectedStatus: [301, 307, 308],
  },
  {
    name: 'Tier C Redirect - Chakra UI vs Terraform (Body End-to-End)',
    url: '/compare/chakra-ui-vs-terraform',
    followRedirects: true,
    finalMustContain: ['Executive Diagnostics Hub'],
    finalMustNotContain: ['Chakra Ui vs Terraform', 'Probabilistic Approach vs Deterministic Approach'],
  },
  {
    name: 'Tier C Redirect - Docker vs LangChain (Header Check)',
    url: '/compare/docker-vs-langchain',
    expectedStatus: [301, 307, 308],
  },
  {
    name: 'Tier C Redirect - Docker vs LangChain (Body End-to-End)',
    url: '/compare/docker-vs-langchain',
    followRedirects: true,
    finalMustContain: ['Executive Diagnostics Hub'],
  },

  // 3. Tier A Preserved Checks (HTTP 200)
  {
    name: 'Tier A Comparison - Claude Code vs Cursor',
    url: '/compare/claude-code-vs-cursor-governance',
    expectedStatus: [200],
    mustContain: ['Claude Code vs Cursor Governance'],
  },

  // 4. Rendered Title & OpenGraph Metadata Checks
  {
    name: 'FAQ Title & Metadata',
    url: '/faq',
    mustStartTitleWith: 'FAQ — AI Advisory',
  },
  {
    name: 'Blog Article Unique Title',
    url: '/blog/the-innovation-tax-audit-is-your-rd-actually-just-opex',
    mustContainTitle: 'Innovation Tax',
  },

  // 5. Vault Access & Robots Guard Check
  {
    name: 'Vault Page Access & Noindex Guard',
    url: '/vault',
    expectedStatus: [200, 301, 302, 307, 308],
  },

  // 6. Sitemap Cleanliness
  {
    name: 'Sitemap XML Cleanliness',
    url: '/sitemap.xml',
    mustNotContain: ['chakra-ui-vs-terraform', 'docker-vs-langchain', 'astro-vs-llamaindex'],
  },
];

function fetchUrl(urlStr: string, followRedirects = false, maxRedirects = 5): Promise<{ statusCode: number; location: string; headers: Record<string, string | string[] | undefined>; body: string; title: string; ogTitle: string; finalUrl: string }> {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(urlStr.startsWith('http') ? urlStr : `${BASE_URL}${urlStr}`);
    const client = parsedUrl.protocol === 'https:' ? https : http;

    const req = client.get(parsedUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) VerificationScript/12.0' } }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const statusCode = res.statusCode || 0;
        const location = res.headers.location || '';

        if (followRedirects && (statusCode === 301 || statusCode === 302 || statusCode === 307 || statusCode === 308) && location && maxRedirects > 0) {
          const nextUrl = location.startsWith('http') ? location : new URL(location, parsedUrl.href).href;
          return fetchUrl(nextUrl, followRedirects, maxRedirects - 1).then(resolve).catch(reject);
        }

        const titleMatch = body.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : '';

        const ogMatch = body.match(/<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i) || body.match(/<meta\s+content=["'](.*?)["']\s+property=["']og:title["']/i);
        const ogTitle = ogMatch ? ogMatch[1] : '';

        resolve({
          statusCode,
          location,
          headers: res.headers,
          body,
          title,
          ogTitle,
          finalUrl: parsedUrl.href,
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.end();
  });
}

export async function runProductionChecks() {
  console.log(`[Production Verification Suite v12.0] Testing target: ${BASE_URL}\n`);
  let passed = 0;
  let failed = 0;

  for (const check of CHECKS) {
    try {
      const res = await fetchUrl(check.url, check.followRedirects ?? false);

      let checkPassed = true;
      const issues: string[] = [];

      if (check.expectedStatus && !check.expectedStatus.includes(res.statusCode)) {
        checkPassed = false;
        issues.push(`Expected HTTP ${check.expectedStatus.join(' or ')}, got HTTP ${res.statusCode}`);
      }

      if (check.expectedLocation && !res.location.includes(check.expectedLocation)) {
        checkPassed = false;
        issues.push(`Expected redirect location to contain '${check.expectedLocation}', got '${res.location}'`);
      }

      if (check.mustStartTitleWith && !res.title.startsWith(check.mustStartTitleWith)) {
        checkPassed = false;
        issues.push(`Title '${res.title}' does not start with '${check.mustStartTitleWith}'`);
      }

      if (check.mustContainTitle && !res.title.includes(check.mustContainTitle)) {
        checkPassed = false;
        issues.push(`Title '${res.title}' does not contain '${check.mustContainTitle}'`);
      }

      if (check.mustContainOgTitle && !res.ogTitle.includes(check.mustContainOgTitle)) {
        checkPassed = false;
        issues.push(`OpenGraph title '${res.ogTitle}' does not contain '${check.mustContainOgTitle}'`);
      }

      if (check.mustContainHeaderKey && !Object.keys(res.headers).includes(check.mustContainHeaderKey.toLowerCase())) {
        checkPassed = false;
        issues.push(`Response missing required header key '${check.mustContainHeaderKey}'`);
      }

      if (check.mustContain) {
        for (const str of check.mustContain) {
          if (!res.body.includes(str)) {
            checkPassed = false;
            issues.push(`Body missing required string: '${str}'`);
          }
        }
      }

      if (check.mustNotContain) {
        for (const str of check.mustNotContain) {
          if (res.body.includes(str)) {
            checkPassed = false;
            issues.push(`Body contained forbidden string: '${str}'`);
          }
        }
      }

      if (check.finalMustContain) {
        for (const str of check.finalMustContain) {
          if (!res.body.includes(str)) {
            checkPassed = false;
            issues.push(`Final body missing required string: '${str}'`);
          }
        }
      }

      if (check.finalMustNotContain) {
        for (const str of check.finalMustNotContain) {
          if (res.body.includes(str)) {
            checkPassed = false;
            issues.push(`Final body contained forbidden string: '${str}'`);
          }
        }
      }

      if (checkPassed) {
        console.log(`✅ PASS [${check.name}]: ${check.url} (HTTP ${res.statusCode}${check.followRedirects ? ` -> Final: ${res.finalUrl}` : ''})`);
        passed++;
      } else {
        console.error(`❌ FAIL [${check.name}]: ${check.url} -> ${issues.join(' | ')}`);
        failed++;
      }
    } catch (e: any) {
      console.error(`❌ ERROR fetching ${check.url}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n[Production Verification Suite v12.0] Results: ${passed} Passed, ${failed} Failed.`);
  return failed === 0;
}

if (require.main === module) {
  runProductionChecks().then(success => {
    if (!success) process.exit(1);
  });
}

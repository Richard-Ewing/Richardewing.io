import https from 'https';

/**
 * AI Economics Commercial Knowledge Platform - Production Live Verification Suite v6.0
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
  mustContain?: string[];
  mustNotContain?: string[];
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

  // 2. Behavioral Redirect Verification (HTTP 301/308)
  {
    name: 'Tier C Redirect - Chakra UI vs Terraform',
    url: '/compare/chakra-ui-vs-terraform',
    expectedStatus: [301, 307, 308],
  },
  {
    name: 'Tier C Redirect - Docker vs LangChain',
    url: '/compare/docker-vs-langchain',
    expectedStatus: [301, 307, 308],
  },

  // 3. Tier A Preserved Checks (HTTP 200)
  {
    name: 'Tier A Comparison - Claude Code vs Cursor',
    url: '/compare/claude-code-vs-cursor-governance',
    expectedStatus: [200],
  },

  // 4. Rendered Title Checks (Behavioral Verification)
  {
    name: 'FAQ Title Metadata',
    url: '/faq',
    mustStartTitleWith: 'FAQ',
  },
  {
    name: 'Blog Article Unique Title',
    url: '/blog/the-innovation-tax-audit-is-your-rd-actually-just-opex',
    mustContainTitle: 'Innovation Tax',
  },

  // 5. Sitemap Cleanliness
  {
    name: 'Sitemap XML Cleanliness',
    url: '/sitemap.xml',
    mustNotContain: ['chakra-ui-vs-terraform', 'docker-vs-langchain', 'astro-vs-llamaindex'],
  },
];

function fetchHeader(urlPath: string): Promise<{ statusCode: number; location: string; body: string; title: string }> {
  return new Promise((resolve, reject) => {
    const fullUrl = `${BASE_URL}${urlPath}`;
    const req = https.get(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) VerificationScript/6.0' } }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const titleMatch = body.match(/<title>(.*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : '';
        resolve({
          statusCode: res.statusCode || 0,
          location: res.headers.location || '',
          body,
          title,
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.end();
  });
}

export async function runProductionChecks() {
  console.log(`[Production Verification Suite v6.0] Testing target: ${BASE_URL}\n`);
  let passed = 0;
  let failed = 0;

  for (const check of CHECKS) {
    try {
      const res = await fetchHeader(check.url);

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

      if (checkPassed) {
        console.log(`✅ PASS [${check.name}]: ${check.url} (HTTP ${res.statusCode})`);
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

  console.log(`\n[Production Verification Suite v6.0] Results: ${passed} Passed, ${failed} Failed.`);
  return failed === 0;
}

if (require.main === module) {
  runProductionChecks().then(success => {
    if (!success) process.exit(1);
  });
}

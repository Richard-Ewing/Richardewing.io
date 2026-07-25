import https from 'https';
import http from 'http';

/**
 * AI Economics Commercial Knowledge Platform - Production Live Verification Suite
 * Subsystem: /scripts/verify/verify-production.ts
 */

const BASE_URL = process.env.PROD_URL || 'https://www.richardewing.io';

interface CheckItem {
  url: string;
  expectedStatus?: number;
  expectedLocation?: string;
  mustContain?: string[];
  mustNotContain?: string[];
}

const CHECKS: CheckItem[] = [
  // 1. Pricing Consistency Checks
  {
    url: '/',
    mustNotContain: ['$7,500/month', '$7,500 / month'],
  },
  {
    url: '/pricing',
    mustContain: ['$10,000'],
    mustNotContain: ['$7,500 / month'],
  },
  {
    url: '/advisory',
    mustContain: ['$10,000'],
  },

  // 2. 301 Redirect Checks (Tier C Spam URLs)
  {
    url: '/compare/chakra-ui-vs-terraform',
    expectedStatus: 301,
  },
  {
    url: '/compare/docker-vs-langchain',
    expectedStatus: 301,
  },

  // 3. Tier A Preserved Checks (HTTP 200)
  {
    url: '/compare/claude-code-vs-cursor-governance',
    expectedStatus: 200,
  },

  // 4. Metadata Basics
  {
    url: '/faq',
    mustContain: ['<title>'],
  },

  // 5. Sitemap Cleanliness
  {
    url: '/sitemap.xml',
    mustNotContain: ['chakra-ui-vs-terraform', 'docker-vs-langchain', 'astro-vs-llamaindex'],
  },
];

function fetchHeader(urlPath: string): Promise<{ statusCode: number; location: string; body: string }> {
  return new Promise((resolve, reject) => {
    const fullUrl = `${BASE_URL}${urlPath}`;
    const req = https.get(fullUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) VerificationScript/1.0' } }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode || 0,
          location: res.headers.location || '',
          body,
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.end();
  });
}

export async function runProductionChecks() {
  console.log(`[Production Verification Suite] Testing target: ${BASE_URL}\n`);
  let passed = 0;
  let failed = 0;

  for (const check of CHECKS) {
    try {
      const res = await fetchHeader(check.url);

      let checkPassed = true;
      const issues: string[] = [];

      if (check.expectedStatus && res.statusCode !== check.expectedStatus) {
        checkPassed = false;
        issues.push(`Expected HTTP ${check.expectedStatus}, got HTTP ${res.statusCode}`);
      }

      if (check.expectedLocation && !res.location.includes(check.expectedLocation)) {
        checkPassed = false;
        issues.push(`Expected redirect location to contain '${check.expectedLocation}', got '${res.location}'`);
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
        console.log(`✅ PASS: ${check.url} (HTTP ${res.statusCode})`);
        passed++;
      } else {
        console.error(`❌ FAIL: ${check.url} -> ${issues.join(' | ')}`);
        failed++;
      }
    } catch (e: any) {
      console.error(`❌ ERROR fetching ${check.url}: ${e.message}`);
      failed++;
    }
  }

  console.log(`\n[Production Verification Suite] Results: ${passed} Passed, ${failed} Failed.`);
  return failed === 0;
}

if (require.main === module) {
  runProductionChecks().then(success => {
    if (!success) process.exit(1);
  });
}

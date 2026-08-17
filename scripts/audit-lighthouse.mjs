import https from 'https';
import http from 'http';

const TARGET_URL = process.env.AUDIT_URL || 'https://www.richardewing.io';
const CORE_ROUTES = [
  '/',
  '/tools',
  '/framework',
  '/services',
  '/case-studies',
  '/roi-calculator',
  '/methodology'
];

console.log(`\n========================================`);
console.log(`🔍 LIGHTHOUSE & SYSTEM AUDITOR (MOD v3.0)`);
console.log(`Target: ${TARGET_URL}`);
console.log(`========================================\n`);

async function fetchRoute(url, maxRedirects = 3) {
  const client = url.startsWith('https') ? https : http;
  const startTime = Date.now();
  
  return new Promise((resolve) => {
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36', 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' }, timeout: 8000 }, (res) => {
      // Handle redirects
      if ((res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) && res.headers.location && maxRedirects > 0) {
        const nextUrl = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).toString();
        fetchRoute(nextUrl, maxRedirects - 1).then(resolve);
        return;
      }

      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const duration = Date.now() - startTime;
        resolve({
          status: res.statusCode,
          headers: res.headers,
          duration,
          body: data
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 408, error: 'Request timeout', duration: 8000, headers: {}, body: '' });
    });

    req.on('error', (err) => {
      resolve({ status: 500, error: err.message, duration: 0, headers: {}, body: '' });
    });
  });
}

function analyzePage(route, response) {
  const issues = [];
  const passes = [];

  if (response.status === 200) {
    passes.push(`Status 200 OK (${response.duration}ms)`);
  } else {
    issues.push(`Non-200 HTTP status: ${response.status}`);
  }

  // 1. Security Headers Audit
  const secHeaders = [
    'strict-transport-security',
    'x-content-type-options',
    'x-frame-options',
    'referrer-policy'
  ];
  secHeaders.forEach(header => {
    if (response.headers[header]) {
      passes.push(`Header: ${header} present`);
    } else {
      issues.push(`Missing security header: ${header}`);
    }
  });

  // 2. SEO & HTML Metadata Audit
  const html = response.body;
  
  // Title tag
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch && titleMatch[1].trim().length > 0) {
    const titleLen = titleMatch[1].trim().length;
    if (titleLen <= 65) {
      passes.push(`Title valid (${titleLen} chars): "${titleMatch[1].trim()}"`);
    } else {
      issues.push(`Title too long (${titleLen} chars, max 65)`);
    }
  } else {
    issues.push(`Missing <title> tag`);
  }

  // Meta description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (metaDescMatch && metaDescMatch[1].trim().length > 0) {
    const descLen = metaDescMatch[1].trim().length;
    if (descLen <= 200) {
      passes.push(`Meta description valid (${descLen} chars)`);
    } else {
      issues.push(`Meta description too long (${descLen} chars, max 200)`);
    }
  } else {
    issues.push(`Missing meta description tag`);
  }

  // Viewport tag
  if (html.includes('name="viewport"')) {
    passes.push(`Mobile viewport meta present`);
  } else {
    issues.push(`Missing mobile viewport meta`);
  }

  // Single H1 check
  const h1Matches = html.match(/<h1[^>]*>/gi) || [];
  if (h1Matches.length === 1) {
    passes.push(`Single H1 tag detected`);
  } else if (h1Matches.length === 0) {
    issues.push(`Missing H1 tag on route`);
  } else {
    issues.push(`Multiple H1 tags (${h1Matches.length}) found`);
  }

  // Image alt check
  const imgTags = html.match(/<img[^>]+>/gi) || [];
  let missingAltCount = 0;
  imgTags.forEach(img => {
    if (!img.includes('alt=') || /alt=["']\s*["']/.test(img)) {
      missingAltCount++;
    }
  });
  if (missingAltCount === 0 && imgTags.length > 0) {
    passes.push(`All ${imgTags.length} images have non-empty alt text`);
  } else if (missingAltCount > 0) {
    issues.push(`${missingAltCount} images missing alt text`);
  }

  return { route, passes, issues, duration: response.duration };
}

async function runAudits() {
  const results = [];
  
  for (const route of CORE_ROUTES) {
    const target = `${TARGET_URL}${route}`;
    process.stdout.write(`Auditing ${route.padEnd(20)} ... `);
    const res = await fetchRoute(target);
    const analysis = analyzePage(route, res);
    results.push(analysis);
    if (analysis.issues.length === 0) {
      console.log(`✅ PERFECT (0 issues)`);
    } else {
      console.log(`⚠️  ${analysis.issues.length} issue(s)`);
    }
  }

  console.log(`\n--- AUDIT SUMMARY ---`);
  let totalIssues = 0;
  results.forEach(r => {
    totalIssues += r.issues.length;
    if (r.issues.length > 0) {
      console.log(`\nRoute: ${r.route} (${r.duration}ms)`);
      r.issues.forEach(iss => console.log(`  ❌ ${iss}`));
    }
  });

  if (totalIssues === 0) {
    console.log(`\n🎉 All audited routes passed with 100% compliance!`);
  } else {
    console.log(`\nFound ${totalIssues} total issue(s) across ${CORE_ROUTES.length} routes.`);
  }
}

runAudits().catch(err => {
  console.warn('Lighthouse audit completed with notice:', err?.message || err);
  process.exit(0);
});

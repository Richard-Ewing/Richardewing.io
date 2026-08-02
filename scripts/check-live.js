const https = require('https');

function checkUrl(urlStr, expectCode, expectLocation) {
  return new Promise((resolve) => {
    https.get(urlStr, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      const status = res.statusCode;
      const location = res.headers.location || '';
      const pass = status === expectCode && (!expectLocation || location.includes(expectLocation));
      const icon = pass ? '✅' : '❌';
      console.log(`${icon} [${status}] ${urlStr} ${location ? '-> ' + location : ''} (expected ${expectCode}${expectLocation ? ' -> ' + expectLocation : ''})`);
      resolve(pass);
    }).on('error', (e) => {
      console.log(`❌ [ERR] ${urlStr}: ${e.message}`);
      resolve(false);
    });
  });
}

async function run() {
  console.log('--- LIVE PRODUCTION HTTP VERIFICATION ---\n');
  const results = [];

  // === REDIRECT TESTS (must return 308/301, NOT 200) ===
  console.log('=== REDIRECT TESTS ===');
  results.push(await checkUrl('https://www.richardewing.io/advisory', 308, '/services'));
  results.push(await checkUrl('https://www.richardewing.io/research/concepts', 308, '/concepts'));
  results.push(await checkUrl('https://www.richardewing.io/research/concepts/ai-volatility-tax', 308, '/concepts/ai-volatility-tax'));

  // Tier C compare redirects
  results.push(await checkUrl('https://www.richardewing.io/compare/docker-vs-astro', 308, '/tools'));
  results.push(await checkUrl('https://www.richardewing.io/compare/ansible-vs-circleci', 308, '/tools'));
  results.push(await checkUrl('https://www.richardewing.io/compare/bootstrap-vs-vue', 308, '/tools'));

  // Legacy .html redirect chains (should go directly to final destination)
  results.push(await checkUrl('https://www.richardewing.io/advisory.html', 308, '/services'));

  // === CONTENT PAGES (must return 200) ===
  console.log('\n=== CONTENT PAGE TESTS ===');
  results.push(await checkUrl('https://www.richardewing.io/services', 200));
  results.push(await checkUrl('https://www.richardewing.io/services/ai-cost-audit', 200));
  results.push(await checkUrl('https://www.richardewing.io/services/technical-due-diligence', 200));
  results.push(await checkUrl('https://www.richardewing.io/services/platform-consolidation', 200));
  results.push(await checkUrl('https://www.richardewing.io/concepts', 200));
  results.push(await checkUrl('https://www.richardewing.io/concepts/ai-volatility-tax', 200));
  results.push(await checkUrl('https://www.richardewing.io/faq', 200));
  results.push(await checkUrl('https://www.richardewing.io/research/publications', 200));

  // Tier A compare pages (should render, not redirect)
  results.push(await checkUrl('https://www.richardewing.io/compare/pdi-vs-sonarqube', 200));
  results.push(await checkUrl('https://www.richardewing.io/compare/claude-code-vs-cursor-governance', 200));

  // === SUMMARY ===
  const passed = results.filter(Boolean).length;
  const total = results.length;
  console.log(`\n--- RESULTS: ${passed}/${total} passed ---`);
  if (passed < total) {
    console.log('❌ FAILURES DETECTED');
    process.exit(1);
  } else {
    console.log('✅ ALL TESTS PASSED');
  }
}

run();

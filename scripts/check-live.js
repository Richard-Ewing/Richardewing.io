const https = require('https');

function checkUrl(urlStr) {
  return new Promise((resolve) => {
    https.get(urlStr, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      console.log(`[${res.statusCode}] ${urlStr} ${res.headers.location ? '-> ' + res.headers.location : ''}`);
      resolve({ status: res.statusCode, location: res.headers.location });
    }).on('error', (e) => {
      console.log(`[ERR] ${urlStr}: ${e.message}`);
      resolve({ status: 0 });
    });
  });
}

async function run() {
  console.log('--- LIVE PRODUCTION HTTP VERIFICATION ---\n');
  await checkUrl('https://www.richardewing.io/advisory');
  await checkUrl('https://www.richardewing.io/research/concepts');
  await checkUrl('https://www.richardewing.io/research/concepts/ai-volatility-tax');
  await checkUrl('https://www.richardewing.io/services/ai-cost-audit');
  await checkUrl('https://www.richardewing.io/services/technical-due-diligence');
  await checkUrl('https://www.richardewing.io/services/platform-consolidation');
  await checkUrl('https://www.richardewing.io/concepts');
  await checkUrl('https://www.richardewing.io/concepts/ai-volatility-tax');
  await checkUrl('https://www.richardewing.io/faq');
}

run();

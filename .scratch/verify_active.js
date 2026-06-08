const http = require('http');

function request(url) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, { method: 'GET' }, (res) => {
      resolve({
        statusCode: res.statusCode,
        headers: res.headers
      });
    });
    req.on('error', reject);
    req.end();
  });
}

const tests = [
  {
    path: '/compare/openai-vs-tailwindcss',
    expectedStatus: 308,
    expectedLocation: '/compare'
  },
  {
    path: '/vault/curriculum/tracks/b2b-saas-economics/51-7',
    expectedStatus: 308,
    expectedLocation: '/vault/curriculum/tracks'
  },
  {
    path: '/curriculum/tracks/devops-economics/5-7',
    expectedStatus: 308,
    expectedLocation: '/vault/curriculum/tracks'
  },
  {
    path: '/guides/spatial-computing-economics',
    expectedStatus: 308,
    expectedLocation: '/vault/curriculum/tracks'
  },
  {
    path: '/tools/invalid-tool-slug',
    expectedStatus: 308,
    expectedLocation: '/tools'
  }
];

async function runTests() {
  console.log('Running tests against active server on http://localhost:3001...');
  let failed = false;
  for (const t of tests) {
    try {
      const res = await request(`http://localhost:3001${t.path}`);
      const actualLocation = res.headers.location;
      const actualStatus = res.statusCode;

      const statusMatch = actualStatus === t.expectedStatus;
      const locationMatch = actualLocation === t.expectedLocation;

      if (statusMatch && locationMatch) {
        console.log(`✅ PASS: ${t.path} -> Status: ${actualStatus}, Location: ${actualLocation}`);
      } else {
        console.error(`❌ FAIL: ${t.path}`);
        console.error(`   Expected status: ${t.expectedStatus}, Actual: ${actualStatus}`);
        console.error(`   Expected location: ${t.expectedLocation}, Actual: ${actualLocation}`);
        failed = true;
      }
    } catch (e) {
      console.error(`❌ ERROR testing ${t.path}:`, e.message);
      failed = true;
    }
  }

  if (failed) {
    console.error('Some tests failed!');
    process.exit(1);
  } else {
    console.log('All redirect tests passed successfully!');
    process.exit(0);
  }
}

runTests().catch((e) => {
  console.error('Test runner exception:', e);
  process.exit(1);
});

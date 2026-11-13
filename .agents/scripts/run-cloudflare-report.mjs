import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

import fs from 'fs';
import crypto from 'crypto';
import dotenv from 'dotenv';

const tomlPath = 'C:\\Users\\richa\\AppData\\Roaming\\xdg.config\\.wrangler\\config\\default.toml';

async function getValidToken() {
  let content = fs.readFileSync(tomlPath, 'utf8');
  const expMatch = content.match(/expiration_time\s*=\s*"([^"]+)"/);
  const refreshMatch = content.match(/refresh_token\s*=\s*"([^"]+)"/);

  if (expMatch && refreshMatch) {
    const expTime = new Date(expMatch[1]).getTime();
    if (Date.now() > expTime - 60000) {
      console.log('Token nearing expiration or expired. Refreshing token...');
      const body = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshMatch[1],
        client_id: '54d11594-84e4-41aa-b438-e81b8fa78ee7',
      });
      const res = await fetch('https://dash.cloudflare.com/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(5000),
      }).then(r => r.json());

      if (res.access_token) {
        console.log('Token refresh successful!');
        const newExp = new Date(Date.now() + (res.expires_in || 3600) * 1000).toISOString();
        content = content
          .replace(/oauth_token\s*=\s*"[^"]+"/, `oauth_token = "${res.access_token}"`)
          .replace(/expiration_time\s*=\s*"[^"]+"/, `expiration_time = "${newExp}"`);
        if (res.refresh_token) {
          content = content.replace(/refresh_token\s*=\s*"[^"]+"/, `refresh_token = "${res.refresh_token}"`);
        }
        fs.writeFileSync(tomlPath, content, 'utf8');
        return res.access_token;
      }
    }
  }
  return content.match(/oauth_token\s*=\s*"([^"]+)"/)[1];
}

const accountId = '5e9b0584ad0ce1d524a631f1bc650ba2';

const zones = [
  { name: 'richardewing.io', id: '26b036cd0321b744617c0cc041c0f225' },
  { name: 'careerwin.ai', id: '4996d7fe425c0542330b8c2fa1ba8746' },
  { name: 'exogram.ai', id: '2bc6a806c53c976577f7749db8f9e1b1' },
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function runAudit() {
  const token = await getValidToken();
  const headers = { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' };

  const nowIso = new Date().toISOString();
  const ptStr = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'full', timeStyle: 'short' });
  console.log(`=== FULL EXECUTIVE AUDIT REPORT: ${ptStr.toUpperCase()} (${nowIso} UTC) ===\n`);

  const dateGeq = new Date(Date.now() - 15 * 24 * 3600 * 1000).toISOString().slice(0, 10);
  const qCombined = `
    query GetAllZonesCombined($z1: String!, $z2: String!, $z3: String!, $dateGeq: Date!) {
      viewer {
        z1: zones(filter: { zoneTag: $z1 }) {
          httpRequests1dGroups(filter: { date_geq: $dateGeq }, limit: 16, orderBy: [date_DESC]) {
            dimensions { date }
            sum { requests cachedRequests threats bytes pageViews responseStatusMap { edgeResponseStatus requests } }
            uniq { uniques }
          }
        }
        z2: zones(filter: { zoneTag: $z2 }) {
          httpRequests1dGroups(filter: { date_geq: $dateGeq }, limit: 16, orderBy: [date_DESC]) {
            dimensions { date }
            sum { requests cachedRequests threats bytes pageViews responseStatusMap { edgeResponseStatus requests } }
            uniq { uniques }
          }
        }
        z3: zones(filter: { zoneTag: $z3 }) {
          httpRequests1dGroups(filter: { date_geq: $dateGeq }, limit: 16, orderBy: [date_DESC]) {
            dimensions { date }
            sum { requests cachedRequests threats bytes pageViews responseStatusMap { edgeResponseStatus requests } }
            uniq { uniques }
          }
        }
      }
    }
  `;

  const resCombined = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: qCombined,
      variables: { z1: zones[0].id, z2: zones[1].id, z3: zones[2].id, dateGeq },
    }),
  }).then(r => r.json());

  const dailyAccountTotals = {};
  const domainSummaries = {
    'richardewing.io': { days: {} },
    'careerwin.ai': { days: {} },
    'exogram.ai': { days: {} },
  };

  const zoneResults = [
    { name: 'richardewing.io', groups: resCombined.data?.viewer?.z1?.[0]?.httpRequests1dGroups || [] },
    { name: 'careerwin.ai', groups: resCombined.data?.viewer?.z2?.[0]?.httpRequests1dGroups || [] },
    { name: 'exogram.ai', groups: resCombined.data?.viewer?.z3?.[0]?.httpRequests1dGroups || [] },
  ];

  for (const zr of zoneResults) {
    for (const g of zr.groups) {
      const d = g.dimensions.date;
      if (!dailyAccountTotals[d]) {
        dailyAccountTotals[d] = { requests: 0, cached: 0, threats: 0, bytes: 0, pageViews: 0, uniques: 0 };
      }
      dailyAccountTotals[d].requests += g.sum.requests;
      dailyAccountTotals[d].cached += g.sum.cachedRequests;
      dailyAccountTotals[d].threats += g.sum.threats;
      dailyAccountTotals[d].bytes += g.sum.bytes;
      dailyAccountTotals[d].pageViews += g.sum.pageViews;
      dailyAccountTotals[d].uniques += g.uniq.uniques;

      domainSummaries[zr.name].days[d] = {
        requests: g.sum.requests,
        cached: g.sum.cachedRequests,
        threats: g.sum.threats,
        bytes: g.sum.bytes,
        pageViews: g.sum.pageViews,
        uniques: g.uniq.uniques,
      };
    }
  }

  console.log('--- PILLAR 1: DAILY EDGE TRAFFIC & CACHING (ACCOUNT-WIDE) ---');
  console.log('Date       | Total Req  | Cached Req (%) | Threats Blocked | Bandwidth (MB) | Pageviews');
  console.log('-----------+------------+----------------+-----------------+----------------+----------');
  const sortedDates = Object.keys(dailyAccountTotals).sort();
  for (const d of sortedDates) {
    const day = dailyAccountTotals[d];
    const cPct = day.requests > 0 ? ((day.cached / day.requests) * 100).toFixed(1) + '%' : '0.0%';
    const mb = (day.bytes / (1024 * 1024)).toFixed(1);
    console.log(
      `${d} | ${String(day.requests).padStart(10)} | ${cPct.padStart(14)} | ${String(day.threats).padStart(15)} | ${mb.padStart(14)} | ${String(day.pageViews).padStart(9)}`
    );
  }

  console.log('\n--- PILLAR 2: RECENT HUMAN PAGEVIEWS & UNIQUES (BY DOMAIN) ---');
  const todayUtcStr = new Date().toISOString().slice(0, 10);
  const elapsedUtcHours = ((Date.now() - Date.parse(todayUtcStr + 'T00:00:00Z')) / 3600000).toFixed(1);
  const targetDays = sortedDates.slice(-7);
  for (const td of targetDays) {
    const label = td === todayUtcStr
      ? ` (Live UTC Pacing: ${elapsedUtcHours}h elapsed)`
      : ` (${td} Full UTC Day CLOSED)`;
    console.log(`\nDate: ${td}${label}`);
    let dayPvs = 0;
    let dayUniques = 0;
    for (const z of zones) {
      const stats = domainSummaries[z.name]?.days[td] || { pageViews: 0, uniques: 0, requests: 0 };
      dayPvs += stats.pageViews;
      dayUniques += stats.uniques;
      console.log(`  ${z.name.padEnd(16)}: ${String(stats.pageViews).padStart(5)} pageviews | ${String(stats.uniques).padStart(5)} unique visitors | (${stats.requests.toLocaleString()} total reqs)`);
    }
    console.log(`  Ecosystem Total : ${dayPvs.toLocaleString()} pageviews | ${dayUniques.toLocaleString()} unique visitors`);
  }

  await sleep(400);

  console.log('\n--- PILLAR 3: WORKER COMPUTE & LIVE FINANCIAL QUOTA (CYCLE ANCHOR: 2ND UTC) ---');
  const nowUtc = new Date();
  let cycleYear = nowUtc.getUTCFullYear();
  let cycleMonth = nowUtc.getUTCMonth();
  if (nowUtc.getUTCDate() < 2) {
    cycleMonth -= 1;
    if (cycleMonth < 0) {
      cycleMonth = 11;
      cycleYear -= 1;
    }
  }
  const cycleStartDate = new Date(Date.UTC(cycleYear, cycleMonth, 2, 0, 0, 0));
  const nextCycleDate = new Date(Date.UTC(cycleMonth === 11 ? cycleYear + 1 : cycleYear, (cycleMonth + 1) % 12, 2, 0, 0, 0));
  const cycleStartIso = cycleStartDate.toISOString();
  const past24hForCpu = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
  const past12hForCpu = new Date(Date.now() - 12 * 3600 * 1000).toISOString();
  const remainingCycleDays = Math.max(0, (nextCycleDate.getTime() - Date.now()) / (24 * 3600 * 1000));

  const scripts = ['richardewing-io', 'careerwin-app', 'exogram-www'];
  let totalCycleReqs = 0;
  let totalCycleCpuMs = 0;
  let total24hCpuMs = 0;
  let total12hCpuMs = 0;
  let total1hCpuMs = 0;

  const qAllScripts = `
    query GetAllScriptsUsage($accountId: String!, $cycleStart: String!, $since24h: String!, $since12h: String!, $postIso: String!, $past1h: String!, $nowIso: String!) {
      viewer {
        accounts(filter: { accountTag: $accountId }) {
          cycle: workersInvocationsAdaptive(filter: { datetime_geq: $cycleStart, datetime_leq: $nowIso }, limit: 25) {
            dimensions { scriptName }
            sum { requests subrequests cpuTimeUs errors }
          }
          last24h: workersInvocationsAdaptive(filter: { datetime_geq: $since24h, datetime_leq: $nowIso }, limit: 25) {
            dimensions { scriptName }
            sum { requests cpuTimeUs errors }
          }
          last12h: workersInvocationsAdaptive(filter: { datetime_geq: $since12h, datetime_leq: $nowIso }, limit: 25) {
            dimensions { scriptName }
            sum { requests cpuTimeUs errors }
          }
          post: workersInvocationsAdaptive(filter: { datetime_geq: $postIso, datetime_leq: $nowIso }, limit: 25) {
            dimensions { scriptName }
            sum { requests cpuTimeUs errors }
          }
          h1: workersInvocationsAdaptive(filter: { datetime_geq: $past1h, datetime_leq: $nowIso }, limit: 25) {
            dimensions { scriptName }
            sum { requests cpuTimeUs errors }
          }
        }
      }
    }
  `;
  const postDeployIso = '2026-11-07T18:00:00Z';
  const postDeployHours = Math.max(0.1, (Date.now() - Date.parse(postDeployIso)) / 3600000);
  const past1h = new Date(Date.now() - 3600 * 1000).toISOString();
  const cpuNowIso = new Date().toISOString();

  await sleep(600);
  const resAllScripts = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: qAllScripts,
      variables: {
        accountId,
        cycleStart: cycleStartIso,
        since24h: past24hForCpu,
        since12h: past12hForCpu,
        postIso: postDeployIso,
        past1h,
        nowIso: cpuNowIso,
      },
    }),
  }).then(r => r.json());

  const acctWorkers = resAllScripts.data?.viewer?.accounts?.[0] || {};
  const sumByScript = (rows, name) => {
    const out = { requests: 0, cpuTimeUs: 0, errors: 0 };
    for (const r of rows || []) {
      if (r.dimensions?.scriptName === name) {
        out.requests += r.sum?.requests || 0;
        out.cpuTimeUs += r.sum?.cpuTimeUs || 0;
        out.errors += r.sum?.errors || 0;
      }
    }
    return out;
  };

  for (const s of scripts) {
    const sum = sumByScript(acctWorkers.cycle, s);
    const s24 = sumByScript(acctWorkers.last24h, s);
    const s12 = sumByScript(acctWorkers.last12h, s);
    const hSum = sumByScript(acctWorkers.h1, s);
    const cpuMs = sum.cpuTimeUs / 1000;
    const cpu24Ms = s24.cpuTimeUs / 1000;
    const cpu12Ms = s12.cpuTimeUs / 1000;
    const cpu1hMs = hSum.cpuTimeUs / 1000;
    totalCycleReqs += sum.requests;
    totalCycleCpuMs += cpuMs;
    total24hCpuMs += cpu24Ms;
    total12hCpuMs += cpu12Ms;
    total1hCpuMs += cpu1hMs;
    const avgCpuMs = sum.requests > 0 ? (cpuMs / sum.requests).toFixed(1) : '0.0';
    const avg24Ms = s24.requests > 0 ? (cpu24Ms / s24.requests).toFixed(1) : '0.0';
    console.log(
      `  ${s.padEnd(18)}: ${sum.requests.toLocaleString().padStart(8)} cycle reqs | ${(cpuMs / 1e6).toFixed(2).padStart(6)}M cycle CPU ms (${avgCpuMs} ms/req) | 24h: ${(cpu24Ms / 1e6).toFixed(2)}M ms (${avg24Ms} ms/req) | ${s24.errors} 24h errs (${sum.errors} cycle errs)`
    );
  }

  const cpuOverageMs = Math.max(0, totalCycleCpuMs - 30_000_000);
  const reqOverage = Math.max(0, totalCycleReqs - 10_000_000);
  const cpuOverageUsd = (cpuOverageMs / 1_000_000) * 0.02;
  const reqOverageUsd = (reqOverage / 1_000_000) * 0.30;
  const projectedCycleEndCpuMs = totalCycleCpuMs + remainingCycleDays * total24hCpuMs;
  const projectedCycleBill =
    5.0 +
    (Math.max(0, projectedCycleEndCpuMs - 30_000_000) / 1_000_000) * 0.02 +
    reqOverageUsd;
  const marginal24hBurnUsd =
    totalCycleCpuMs >= 30_000_000
      ? (total24hCpuMs / 1_000_000) * 0.02
      : Math.max(0, ((total24hCpuMs - 1_000_000) / 1_000_000) * 0.02);
  const pace12hDaily = total12hCpuMs * 2;
  const pace1hDaily = total1hCpuMs * 24;
  const paceFlag =
    total24hCpuMs > 1_000_000
      ? `[BUDGET PACE ALERT: ${(total24hCpuMs / 1e6).toFixed(2)}M ms/day > 1.00M ms/day cap]`
      : `[ON BUDGET: ${(total24hCpuMs / 1e6).toFixed(2)}M ms/day <= 1.00M ms/day cap]`;

  console.log('---------------------------------------------------------------------------------');
  console.log(`  Billing Cycle Window      : ${cycleStartIso.slice(0, 10)} to ${nextCycleDate.toISOString().slice(0, 10)} (${remainingCycleDays.toFixed(1)} days remaining)`);
  console.log(`  Cycle Requests Used       : ${totalCycleReqs.toLocaleString()} of 10,000,000 (${((totalCycleReqs / 10_000_000) * 100).toFixed(2)}%)`);
  console.log(`  Cycle CPU Time Used       : ${(totalCycleCpuMs / 1e6).toFixed(2)}M ms of 30.00M ms (${((totalCycleCpuMs / 30_000_000) * 100).toFixed(1)}%)`);
  console.log(`  Unbilled Usage Overage    : $${(cpuOverageUsd + reqOverageUsd).toFixed(2)} ($${cpuOverageUsd.toFixed(2)} CPU + $${reqOverageUsd.toFixed(2)} reqs; $5.00 base prepaid on 2nd)`);
  console.log(`  Trailing 60m CPU Pace     : ${(pace1hDaily / 1e6).toFixed(2)}M ms/day`);
  console.log(`  Trailing 12h CPU Pace     : ${(pace12hDaily / 1e6).toFixed(2)}M ms/day`);
  console.log(`  Trailing 24h CPU Pace     : ${(total24hCpuMs / 1e6).toFixed(2)}M ms/day ($${marginal24hBurnUsd.toFixed(2)}/day marginal) ${paceFlag}`);
  console.log(`  End-of-Cycle Overage Est. : $${Math.max(0, projectedCycleBill - 5.0).toFixed(2)} overage (+ $5.00 next month base = $${projectedCycleBill.toFixed(2)})`);

  console.log(`\n  [Post-Shield Telemetry since ${postDeployIso} (${postDeployHours.toFixed(2)}h elapsed)]`);
  let postTotalCpuMs = 0;
  for (const s of scripts) {
    const pSum = sumByScript(acctWorkers.post, s);
    const hSum = sumByScript(acctWorkers.h1, s);
    const pCpuMs = pSum.cpuTimeUs / 1000;
    const hCpuMs = hSum.cpuTimeUs / 1000;
    postTotalCpuMs += pCpuMs;
    const pAvg = pSum.requests > 0 ? (pCpuMs / pSum.requests).toFixed(1) : '0.0';
    const hAvg = hSum.requests > 0 ? (hCpuMs / hSum.requests).toFixed(1) : '0.0';
    console.log(
      `    ${s.padEnd(16)}: ${String(pSum.requests).padStart(6)} reqs | ${(pCpuMs / 1000).toFixed(1).padStart(7)}k CPU ms (${pAvg} ms/req) | Last 60m: ${hSum.requests} reqs, ${(hCpuMs / 1000).toFixed(1)}k ms (${hAvg} ms/req, ${hSum.errors} errs)`
    );
  }
  const postDailyRunRateMs = (postTotalCpuMs / postDeployHours) * 24;
  console.log(`    Post-Shield Combined Run Rate: ${(postDailyRunRateMs / 1e6).toFixed(2)}M CPU ms/day ($${((postDailyRunRateMs / 1e6) * 0.02).toFixed(3)}/day marginal)`);

  await sleep(700);

  const past24h = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
  const past16h = new Date(Date.now() - 16 * 3600 * 1000).toISOString();
  const qUnified = `
    query GetUnified24h($accountId: String!, $z1: String!, $z2: String!, $z3: String!, $since: String!, $since16h: String!) {
      viewer {
        accounts(filter: { accountTag: $accountId }) {
          hourly: workersInvocationsAdaptive(filter: { datetime_geq: $since16h }, limit: 150, orderBy: [datetimeHour_ASC]) {
            dimensions { datetimeHour scriptName }
            sum { requests cpuTimeUs errors }
          }
        }
        z1: zones(filter: { zoneTag: $z1 }) {
          top: httpRequestsAdaptiveGroups(filter: { datetime_geq: $since, edgeResponseStatus: 200, requestSource: "eyeball" }, limit: 100, orderBy: [count_DESC]) {
            count dimensions { clientRequestPath }
          }
          geo: httpRequestsAdaptiveGroups(filter: { datetime_geq: $since, requestSource: "eyeball" }, limit: 10, orderBy: [count_DESC]) {
            count dimensions { clientCountryName }
          }
          sched: httpRequestsAdaptiveGroups(filter: { datetime_geq: $since, clientRequestPath: "/schedule", requestSource: "eyeball" }, limit: 25, orderBy: [count_DESC]) {
            count dimensions { clientCountryName clientDeviceType }
          }
        }
        z2: zones(filter: { zoneTag: $z2 }) {
          top: httpRequestsAdaptiveGroups(filter: { datetime_geq: $since, edgeResponseStatus: 200, requestSource: "eyeball" }, limit: 100, orderBy: [count_DESC]) {
            count dimensions { clientRequestPath }
          }
          geo: httpRequestsAdaptiveGroups(filter: { datetime_geq: $since, requestSource: "eyeball" }, limit: 10, orderBy: [count_DESC]) {
            count dimensions { clientCountryName }
          }
        }
        z3: zones(filter: { zoneTag: $z3 }) {
          top: httpRequestsAdaptiveGroups(filter: { datetime_geq: $since, edgeResponseStatus: 200, requestSource: "eyeball" }, limit: 100, orderBy: [count_DESC]) {
            count dimensions { clientRequestPath }
          }
          geo: httpRequestsAdaptiveGroups(filter: { datetime_geq: $since, requestSource: "eyeball" }, limit: 10, orderBy: [count_DESC]) {
            count dimensions { clientCountryName }
          }
        }
      }
    }
  `;

  const resUnified = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query: qUnified,
      variables: { accountId, z1: zones[0].id, z2: zones[1].id, z3: zones[2].id, since: past24h, since16h: past16h },
    }),
  }).then(r => r.json());

  const uViewer = resUnified.data?.viewer || {};
  console.log('\n  [Hourly Worker CPU Curve - Past 16h UTC]');
  const byHour = {};
  for (const r of uViewer.accounts?.[0]?.hourly || []) {
    const h = r.dimensions.datetimeHour;
    const s = r.dimensions.scriptName;
    if (!byHour[h]) byHour[h] = {};
    if (!byHour[h][s]) byHour[h][s] = { reqs: 0, cpuMs: 0, errs: 0 };
    byHour[h][s].reqs += r.sum.requests;
    byHour[h][s].cpuMs += r.sum.cpuTimeUs / 1000;
    byHour[h][s].errs += r.sum.errors;
  }
  for (const h of Object.keys(byHour).sort()) {
    const rw = byHour[h]['richardewing-io'] || { reqs: 0, cpuMs: 0 };
    const cw = byHour[h]['careerwin-app'] || { reqs: 0, cpuMs: 0 };
    const ex = byHour[h]['exogram-www'] || { reqs: 0, cpuMs: 0 };
    const tot = rw.cpuMs + cw.cpuMs + ex.cpuMs;
    console.log(
      `    ${h} | TOT: ${(tot / 1000).toFixed(1).padStart(6)}k ms | RW: ${(rw.cpuMs / 1000).toFixed(1).padStart(5)}k (${String(rw.reqs).padStart(4)}r) | CW: ${(cw.cpuMs / 1000).toFixed(1).padStart(5)}k (${String(cw.reqs).padStart(3)}r) | EX: ${(ex.cpuMs / 1000).toFixed(1).padStart(5)}k (${String(ex.reqs).padStart(3)}r)`
    );
  }

  console.log('\n--- PILLAR 4: TOP REAL HTML PAGEVIEW ROUTES ACROSS ALL DOMAINS (PAST 24 HOURS) ---');
  for (const [alias, z] of [['z1', zones[0]], ['z2', zones[1]], ['z3', zones[2]]]) {
    console.log(`\n  [${z.name} - Top Real HTML Pageviews (24h)]`);
    const raw = uViewer[alias]?.[0]?.top || [];
    const clean = raw.filter(item => {
      const p = item.dimensions.clientRequestPath;
      return !p.includes('.') && !p.startsWith('/_next') && !p.startsWith('/cdn-cgi') && !p.startsWith('/api/');
    });
    clean.slice(0, 15).forEach(item => {
      console.log(`  ${String(item.count).padStart(5)} real pageviews : ${item.dimensions.clientRequestPath}`);
    });
  }

  console.log('\n--- PILLAR 5: TOP GEOGRAPHIC TRAFFIC (PAST 24 HOURS) ---');
  for (const [alias, z] of [['z1', zones[0]], ['z2', zones[1]], ['z3', zones[2]]]) {
    console.log(`\n  [${z.name} - Top Countries (24h Human Pageviews)]`);
    const geos = uViewer[alias]?.[0]?.geo || [];
    for (const g of geos) {
      console.log(`  ${String(g.count).padStart(5)} pageviews : ${g.dimensions.clientCountryName}`);
    }
  }

  console.log('\n--- PILLAR 6: SCHEDULE PAGE EXACT BREAKDOWN (PAST 24 HOURS) ---');
  const schedGroups = uViewer.z1?.[0]?.sched || [];
  let totalSchedPvs = 0;
  for (const sg of schedGroups) {
    totalSchedPvs += sg.count;
    console.log(`  ${String(sg.count).padStart(4)} pageviews : /schedule [${sg.dimensions.clientCountryName} - ${sg.dimensions.clientDeviceType}]`);
  }
  console.log(`  Total Exact /schedule Views (24h): ${totalSchedPvs}`);

  await sleep(400);

  console.log('\n--- PILLAR 7: GOOGLE SEARCH CONSOLE LIVE METRICS (ALL 3 DOMAINS) ---');
  try {
    const env = dotenv.parse(fs.readFileSync('.env.production.local', 'utf8'));
    if (env.GOOGLE_SERVICE_ACCOUNT_JSON) {
      const raw = env.GOOGLE_SERVICE_ACCOUNT_JSON;
      const lines = raw.split('\n');
      const result = {};
      let currentKey = null;
      let currentValueLines = [];
      for (let line of lines) {
        line = line.trim();
        if (line === '{' || line === '}') continue;
        const keyMatch = line.match(/^\\?"([a-zA-Z0-9_-]+)\\?"\s*:\s*(.*)$/);
        if (keyMatch) {
          if (currentKey) result[currentKey] = currentValueLines.join('\n');
          currentKey = keyMatch[1];
          let valPart = keyMatch[2].trim();
          if (valPart.endsWith(',')) valPart = valPart.slice(0, -1).trim();
          valPart = valPart.replace(/^\\?"/, '').replace(/\\?"$/, '');
          currentValueLines = [valPart];
        } else if (currentKey) {
          let cleanedLine = line;
          if (cleanedLine.endsWith(',')) cleanedLine = cleanedLine.slice(0, -1).trim();
          cleanedLine = cleanedLine.replace(/^\\?"/, '').replace(/\\?"$/, '');
          currentValueLines.push(cleanedLine);
        }
      }
      if (currentKey) result[currentKey] = currentValueLines.join('\n');
      if (result.private_key) {
        result.private_key = result.private_key.replace(/\\+n/g, '\n').replace(/\\+/g, '');
      }

      console.log(`  Service Account: ${result.client_email}`);

      const nowSec = Math.floor(Date.now() / 1000);
      const b64u = obj => Buffer.from(JSON.stringify(obj)).toString('base64url');
      const unsignedJwt = `${b64u({ alg: 'RS256', typ: 'JWT' })}.${b64u({
        iss: result.client_email,
        scope: 'https://www.googleapis.com/auth/webmasters.readonly',
        aud: 'https://oauth2.googleapis.com/token',
        iat: nowSec,
        exp: nowSec + 3600,
      })}`;
      const signer = crypto.createSign('RSA-SHA256');
      signer.update(unsignedJwt);
      const assertion = `${unsignedJwt}.${signer.sign(result.private_key, 'base64url')}`;
      const tokRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }).toString(),
        signal: AbortSignal.timeout(8000),
      }).then(r => r.json());

      const gscQuery = async (site, body) =>
        fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${tokRes.access_token}`, 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(8000),
        }).then(r => r.json());

      const gscEnd = new Date().toISOString().slice(0, 10);
      const gscProperties = [
        { label: 'richardewing.io', candidates: ['sc-domain:richardewing.io', 'https://www.richardewing.io/'] },
        { label: 'careerwin.ai', candidates: ['sc-domain:careerwin.ai', 'https://careerwin.ai/'] },
        { label: 'exogram.ai', candidates: ['sc-domain:exogram.ai', 'https://exogram.ai/'] },
      ];

      const resolvedProperties = [];
      for (const prop of gscProperties) {
        let matchedSite = null;
        let matchedRow = null;
        let lastErr = 'No matching property';
        for (const candidate of prop.candidates) {
          const rDom = await gscQuery(candidate, { startDate: '2026-10-01', endDate: gscEnd });
          if (!rDom.error) {
            matchedSite = candidate;
            matchedRow = rDom.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
            break;
          }
          lastErr = rDom.error.message;
        }
        if (matchedSite && matchedRow) {
          console.log(
            `  [${matchedSite}] (2026-10-01 to ${gscEnd}): ${matchedRow.clicks} Clicks | ${matchedRow.impressions.toLocaleString()} Impressions | ${(matchedRow.ctr * 100).toFixed(2)}% CTR | Avg Pos: ${matchedRow.position.toFixed(1)}`
          );
          resolvedProperties.push({ label: prop.label, siteUrl: matchedSite });
        } else {
          console.log(`  [${prop.label}] Unreachable/No access: ${lastErr}`);
        }
      }

      for (const prop of resolvedProperties) {
        const resTopQ = await gscQuery(prop.siteUrl, { startDate: '2026-10-01', endDate: gscEnd, dimensions: ['query'], rowLimit: 10 });
        const topQ = (resTopQ.rows || []).sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions);
        console.log(`\n  Top GSC Queries (${prop.label} via ${prop.siteUrl}):`);
        topQ.forEach(q => console.log(`    - ${q.keys[0].padEnd(42)} | ${q.clicks} clicks | ${q.impressions} impr | pos: ${q.position.toFixed(1)}`));

        const resPages = await gscQuery(prop.siteUrl, { startDate: '2026-10-01', endDate: gscEnd, dimensions: ['page'], rowLimit: 8 });
        console.log(`  Top GSC Landing Pages (${prop.label}):`);
        (resPages.rows || []).forEach(p => console.log(`    - ${p.keys[0].padEnd(65)} | ${p.clicks} clicks | ${p.impressions} impr | pos: ${p.position.toFixed(1)}`));

        if (prop.label === 'richardewing.io') {
          const resDev = await gscQuery(prop.siteUrl, { startDate: '2026-10-01', endDate: gscEnd, dimensions: ['device'] });
          console.log('  GSC Device Breakdown (richardewing.io):');
          (resDev.rows || []).forEach(d => console.log(`    - ${d.keys[0].padEnd(10)} | ${d.clicks} clicks | ${d.impressions} impr | pos: ${d.position.toFixed(1)}`));
        }
      }
    }
  } catch (e) {
    console.log('  GSC Error:', e.message);
  }

  console.log('\n--- PILLAR 8: STRIPE SALES & REVENUE (LIVE API) ---');
  try {
    const env = dotenv.parse(fs.readFileSync('.env.production.local'));
    if (env.STRIPE_SECRET_KEY) {
      const sHeaders = { Authorization: `Bearer ${env.STRIPE_SECRET_KEY}` };
      const balance = await fetch('https://api.stripe.com/v1/balance', { headers: sHeaders, signal: AbortSignal.timeout(8000) }).then(r => r.json());
      const sessions = await fetch('https://api.stripe.com/v1/checkout/sessions?limit=50', { headers: sHeaders, signal: AbortSignal.timeout(8000) }).then(r => r.json());
      const paid = (sessions.data || []).filter(s => s.payment_status === 'paid');
      console.log(`  Available Balance: ${(balance.available || []).map(b => `${(b.amount / 100).toFixed(2)} ${b.currency.toUpperCase()}`).join(', ') || '$0.00'}`);
      console.log(`  Pending Balance  : ${(balance.pending || []).map(b => `${(b.amount / 100).toFixed(2)} ${b.currency.toUpperCase()}`).join(', ') || '$0.00'}`);
      console.log(`  Recent Checkouts : ${(sessions.data || []).length} sessions (${paid.length} paid)`);
      for (const p of paid.slice(0, 10)) {
        console.log(`    - Paid Session: $${((p.amount_total || 0) / 100).toFixed(2)} ${(p.currency || 'usd').toUpperCase()} | ${new Date((p.created || 0) * 1000).toISOString()}`);
      }
    }
  } catch (e) {
    console.log('  Stripe read error:', e.message);
  }

  console.log('\n--- PILLAR 9: LIVE ENDPOINT HEALTH & LATENCY TEST ---');
  const endpoints = [
    { url: 'https://www.richardewing.io/', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/reality-check', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/contact', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/schedule', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/tools/pdi', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/tools/aueb', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/roi-calculator', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/ai-unit-economics', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/glossary/calculating-roai', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/articles/frameworks/technical-insolvency-date', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/articles/frameworks/vibe-coding-debt', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/for-cfos', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/for-ctos', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/pricing-sprints', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/advisory', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/tools', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://www.richardewing.io/blog', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://careerwin.ai/', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://exogram.ai/', accept: 'text/html,application/xhtml+xml' },
    { url: 'https://exogram.ai/mcp', accept: 'text/html,application/xhtml+xml', label: 'https://exogram.ai/mcp [HTML]' },
    { url: 'https://exogram.ai/mcp', accept: 'application/json', label: 'https://exogram.ai/mcp [JSON]' },
  ];

  await Promise.all(endpoints.map(async ep => {
    const start = Date.now();
    const label = ep.label || ep.url;
    try {
      const res = await fetch(ep.url, {
        redirect: 'manual',
        headers: { Accept: ep.accept },
        signal: AbortSignal.timeout(8000),
      });
      const duration = Date.now() - start;
      const cfCache = res.headers.get('cf-cache-status') || '-';
      const wkCache = res.headers.get('x-rw-edge-cache') || res.headers.get('x-cw-edge-cache') || res.headers.get('x-exogram-edge-cache') || '-';
      console.log(`  ${label.padEnd(68)} -> Status: ${res.status} | Time: ${duration}ms | CF: ${cfCache} | WK: ${wkCache}`);
    } catch (e) {
      console.log(`  ${label.padEnd(68)} -> Error: ${e.message}`);
    }
  }));

  process.exit(0);
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});

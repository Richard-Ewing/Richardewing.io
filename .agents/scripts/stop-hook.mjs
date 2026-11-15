import { execFileSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');
const brainDir = path.join(os.homedir(), '.gemini', 'antigravity', 'brain');
const MUTATING_TOOLS = new Set([
  'edit_file',
  'write_file',
  'replace_file_content',
  'multi_replace_file_content',
  'write_to_file',
]);
const MUTATING_RE = /"(?:edit_file|write_file|replace_file_content|multi_replace_file_content|write_to_file)"/;
const HEADER_RE = /"(?:USER_INPUT|USER_EXPLICIT)"/;
const TRUNC_RE = /"truncated_fields"/;

function extractConversationId(parsed) {
  if (!parsed || typeof parsed !== 'object') return '';
  const direct = parsed.conversationId || parsed.conversation_id || parsed.sessionId || parsed.session_id || '';
  if (direct) return String(direct).toLowerCase();
  const tp = String(parsed.transcriptPath || parsed.transcript_path || '');
  const m = tp.match(/brain[\\/]+([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);
  return m ? m[1].toLowerCase() : '';
}

function parseLinesIntoMap(lines, map, checkHeader = true) {
  let sawTruncatedToolCalls = false;
  let hasUserExplicit = false;
  let parsedCount = 0;
  for (const line of lines) {
    if (!line || line[0] !== '{') continue;
    parsedCount++;
    if (checkHeader && !hasUserExplicit && HEADER_RE.test(line)) {
      try {
        const s = JSON.parse(line);
        if (s.type === 'USER_INPUT' || s.source === 'USER_EXPLICIT') {
          hasUserExplicit = true;
        }
      } catch {
        // Ignore malformed line
      }
    }
    const hasMut = MUTATING_RE.test(line);
    const hasTrunc = checkHeader && !sawTruncatedToolCalls && TRUNC_RE.test(line);
    if (!hasMut && !hasTrunc) continue;
    try {
      const step = JSON.parse(line);
      if (Array.isArray(step.truncated_fields) && step.truncated_fields.includes('tool_calls')) {
        sawTruncatedToolCalls = true;
      }
      if (!hasMut) continue;
      const ts = Date.parse(step.created_at || '') || 0;
      for (const tc of step.tool_calls || []) {
        const tn = tc.name || tc.tool_name || '';
        if (!MUTATING_TOOLS.has(tn)) continue;
        const rawArgs = tc.arguments ?? tc.args ?? {};
        const args = typeof rawArgs === 'string' ? JSON.parse(rawArgs) : rawArgs;
        const rawTarget = String(args.Path || args.TargetFile || '').trim().replace(/^"+|"+$/g, '');
        if (!rawTarget) continue;
        const rel = path.relative(rootDir, path.resolve(rawTarget)).replace(/\\/g, '/');
        if (!rel.startsWith('..') && !path.isAbsolute(rel)) {
          const key = rel.toLowerCase();
          if (ts >= (map.get(key) || 0)) map.set(key, ts);
        }
      }
    } catch {
      // Ignore malformed JSONL tail lines
    }
  }
  return { sawTruncatedToolCalls, hasUserExplicit, parsedCount };
}

function getTouchMapForConversation(convId) {
  const map = new Map();
  if (!convId || !fs.existsSync(brainDir)) return { map, isSubagent: false };
  const logsDir = path.join(brainDir, convId, '.system_generated', 'logs');
  const compactPath = path.join(logsDir, 'transcript.jsonl');
  const fullPath = path.join(logsDir, 'transcript_full.jsonl');
  let isSubagent = false;

  if (fs.existsSync(compactPath)) {
    const raw = fs.readFileSync(compactPath, 'utf8');
    const summary = parseLinesIntoMap(raw.split(/\r?\n/), map, true);
    if (summary.parsedCount > 0 && !summary.hasUserExplicit) {
      isSubagent = true;
    }
    if (!isSubagent && summary.sawTruncatedToolCalls && fs.existsSync(fullPath)) {
      const st = fs.statSync(fullPath);
      const readLen = Math.min(st.size, 4 * 1024 * 1024);
      const buf = Buffer.alloc(readLen);
      const fd = fs.openSync(fullPath, 'r');
      try {
        fs.readSync(fd, buf, 0, readLen, Math.max(0, st.size - readLen));
      } finally {
        fs.closeSync(fd);
      }
      parseLinesIntoMap(buf.toString('utf8').split(/\r?\n/), map, false);
    }
  }
  return { map, isSubagent };
}

function buildRecentCommitTimeMap() {
  const ctMap = new Map();
  try {
    const out = execFileSync('git', ['log', '-n', '40', '--format=__CT__%ct', '--name-only'], {
      cwd: rootDir,
      encoding: 'utf8',
    });
    let currentCt = 0;
    for (const rawLine of out.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line) continue;
      if (line.startsWith('__CT__')) {
        currentCt = Number(line.slice(6)) || 0;
      } else if (currentCt > 0) {
        const key = line.replace(/^"+|"+$/g, '').replace(/\\/g, '/').toLowerCase();
        if (!ctMap.has(key)) {
          ctMap.set(key, currentCt);
        }
      }
    }
  } catch {
    // Fallback to empty map
  }
  return ctMap;
}

function parsePorcelain(rawStatus) {
  return rawStatus
    .replace(/[\r\n]+$/, '')
    .split(/\r?\n/)
    .filter(l => l.length > 3)
    .map(l => {
      const rest = l.slice(3).trim();
      const target = rest.includes(' -> ') ? rest.split(' -> ').pop().trim() : rest;
      return target.replace(/^"+|"+$/g, '');
    })
    .filter(f => f && !f.startsWith('.scratch/'));
}

function filterDirtyFilesForConversation(dirtyFiles, convId) {
  if (!convId || !fs.existsSync(brainDir)) return dirtyFiles;

  const { map: myMap, isSubagent } = getTouchMapForConversation(convId);
  if (isSubagent) return [];

  const now = Date.now();
  const siblingMaps = [];
  let hasActiveSibling = false;

  for (const entry of fs.readdirSync(brainDir)) {
    const sibId = entry.toLowerCase();
    if (sibId === convId) continue;
    const tp = path.join(brainDir, entry, '.system_generated', 'logs', 'transcript.jsonl');
    let st;
    try {
      st = fs.statSync(tp);
    } catch {
      continue;
    }
    const ageMs = now - st.mtimeMs;
    if (ageMs < 7200000) {
      const { map: sm } = getTouchMapForConversation(entry);
      if (sm.size > 0) {
        siblingMaps.push(sm);
        if (ageMs < 1800000) hasActiveSibling = true;
      }
    }
  }

  let ctMap = null;
  if (hasActiveSibling && myMap.size > 0) {
    ctMap = buildRecentCommitTimeMap();
  }

  return dirtyFiles.filter(df => {
    const key = df.replace(/\\/g, '/').toLowerCase();
    const myMs = myMap.get(key) || 0;
    let maxSibMs = 0;
    for (const sm of siblingMaps) {
      maxSibMs = Math.max(maxSibMs, sm.get(key) || 0);
    }
    if (maxSibMs > myMs) return false;
    if (myMs > 0) {
      if (hasActiveSibling && ctMap) {
        const ctSec = ctMap.get(key) || 0;
        if (ctSec > 0 && myMs < ctSec * 1000 - 5000) {
          return false;
        }
      }
      return true;
    }
    return !hasActiveSibling;
  });
}

function checkGitState(rawInput = '') {
  try {
    let parsed = null;
    if (rawInput && rawInput.trim()) {
      try {
        parsed = JSON.parse(rawInput);
      } catch {
        parsed = null;
      }
    }

    // Allow clean yielding while background tasks are actively running
    if (parsed && parsed.fullyIdle === false) {
      return { decision: 'allow' };
    }

    const convId = extractConversationId(parsed);

    // 1. Check working directory status scoped to this conversation (do NOT trim leading spaces!)
    const rawStatus = execFileSync('git', ['status', '--porcelain', '-uall'], {
      cwd: rootDir,
      encoding: 'utf8',
    });

    if (rawStatus.trim()) {
      const allDirty = parsePorcelain(rawStatus);
      const enforcedDirty = filterDirtyFilesForConversation(allDirty, convId);
      if (enforcedDirty.length > 0) {
        // Prevent runaway infinite continuation loops after 3 warnings on the same turn
        if (parsed && parsed.continuationActive === true && Number(parsed.executionNum || 0) >= 3) {
          return { decision: 'allow' };
        }
        return {
          decision: 'continue',
          reason: `Mandatory Sovereign Turn-End Gate: Git working tree has ${enforcedDirty.length} uncommitted file(s) owned by this conversation (${enforcedDirty.slice(0, 4).join(', ')}). Run 'node .agents/scripts/verify-qa.mjs', commit, and push to origin main before ending the turn.`,
        };
      }
    }

    // 2. Check for unpushed commits on origin/main
    try {
      const unpushed = execFileSync('git', ['log', 'origin/main..HEAD', '--oneline'], {
        cwd: rootDir,
        encoding: 'utf8',
      }).trim();
      if (unpushed) {
        const count = unpushed.split(/\r?\n/).filter(Boolean).length;
        return {
          decision: 'continue',
          reason: `Mandatory Sovereign Turn-End Gate: ${count} unpushed commit(s) detected. Execute 'git push origin main' and verify 'git status' before ending the turn.`,
        };
      }
    } catch {
      // Remote branch check fallback
    }

    return { decision: 'allow' };
  } catch {
    return { decision: 'allow' };
  }
}

let settled = false;
let inputBuffer = '';
process.stdin.setEncoding('utf8');

function finish() {
  if (settled) return;
  settled = true;
  const result = checkGitState(inputBuffer);
  process.stdout.write(JSON.stringify(result) + '\n');
  process.exit(0);
}

process.stdin.on('data', chunk => {
  inputBuffer += chunk;
});

process.stdin.on('end', finish);
setTimeout(finish, 1500);

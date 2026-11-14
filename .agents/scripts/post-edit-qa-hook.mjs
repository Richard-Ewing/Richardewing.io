/**
 * PostToolUse lightweight hygiene verifier for Antigravity hooks.json.
 * Runs in <50ms with cwd = .agents/ and always emits `{}` JSON to stdout.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../../');

const TEXT_EXTENSIONS = new Set([
  '.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx', '.md', '.mdx', '.json', '.css', '.html', '.txt',
]);

const SECRET_PATTERNS = [
  { name: 'Stripe secret key', regex: /\b(?:sk|rk)_live_[0-9a-zA-Z]{20,}\b/ },
  { name: 'Pinecone API key', regex: /\bpcsk_[0-9a-zA-Z_-]{20,}\b/ },
  { name: 'Supabase secret token', regex: /\bsb(?:_secret|p)_[0-9a-zA-Z_-]{20,}\b/ },
  { name: 'Google API key', regex: /\bAIzaSy[0-9A-Za-z_-]{33}\b/ },
  { name: 'Private cryptographic key', regex: /-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/ },
];

function checkEditedFile(filePath) {
  if (!filePath || typeof filePath !== 'string') return;
  const resolved = path.isAbsolute(filePath)
    ? path.resolve(filePath)
    : path.resolve(ROOT_DIR, filePath);

  const rel = path.relative(ROOT_DIR, resolved).replace(/\\/g, '/');
  if (!rel || rel.startsWith('..') || path.isAbsolute(rel)) return;
  if (rel.includes('verify-qa.mjs') || rel.includes('audit-agent-skills.mjs') || rel.includes('post-edit-qa-hook.mjs')) return;

  const ext = path.extname(resolved).toLowerCase();
  if (!TEXT_EXTENSIONS.has(ext) || !fs.existsSync(resolved)) return;

  const stat = fs.statSync(resolved);
  if (!stat.isFile() || stat.size > 1024 * 1024) return;

  const content = fs.readFileSync(resolved, 'utf8');
  if (/\.(?:md|mdx|tsx|ts|jsx|js|html|txt)$/i.test(resolved)) {
    const dashes = content.match(/[\u2013\u2014]/g);
    if (dashes && dashes.length > 0) {
      process.stderr.write(`[post-edit-qa-hook] WARNING: ${dashes.length} en/em-dash character(s) detected in ${rel}. Remove before commit.\n`);
    }
  }

  for (const rule of SECRET_PATTERNS) {
    if (rule.regex.test(content)) {
      process.stderr.write(`[post-edit-qa-hook] ALERT: Potential ${rule.name} detected in ${rel}. Remove immediately.\n`);
    }
  }
}

function finalize(rawInput) {
  try {
    if (rawInput && rawInput.trim()) {
      const payload = JSON.parse(rawInput);
      const args = payload?.toolCall?.args || {};
      const candidatePath = args.Path || args.TargetFile || args.path || args.targetFile;
      checkEditedFile(candidatePath);
    }
  } catch {
    // Non-blocking PostToolUse contract: always return `{}` cleanly.
  }
  process.stdout.write('{}\n');
  process.exit(0);
}

let inputBuffer = '';
let finished = false;
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  inputBuffer += chunk;
});
process.stdin.on('end', () => {
  if (finished) return;
  finished = true;
  finalize(inputBuffer);
});
setTimeout(() => {
  if (finished) return;
  finished = true;
  finalize(inputBuffer);
}, 300);

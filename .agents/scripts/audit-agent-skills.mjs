import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');
const agentsDir = path.join(rootDir, '.agents');

console.log('=== Running Sovereign Agent Skills Security, Supply-Chain & Hygiene Audit ===');

let errorCount = 0;
let fileCount = 0;

const dangerousPatterns = [
  { regex: /curl\s+.*\|\s*(ba)?sh/i, message: 'Unverified remote script pipe execution' },
  { regex: /npx\s+skills\s+add\s+https?:\/\//i, message: 'Unquarantined remote skill install command inside .agents (violates ADR-0018 clean-room rule)' },
  { regex: /eval\s*\(\s*.*untrusted/i, message: 'Unsafe eval execution' },
  { regex: /ignore\s+all\s+previous\s+instructions/i, message: 'Potential prompt-injection override phrase detected' },
  { regex: /(?:^|[^a-zA-Z0-9_-])sk-[a-zA-Z0-9_-]{20,}/i, message: 'Exposed OpenAI / model secret key pattern' },
  { regex: /(?:^|[^a-zA-Z0-9_-])sk-ant-[a-zA-Z0-9_-]{20,}/i, message: 'Exposed Anthropic secret key pattern' },
  { regex: /(?:^|[^a-zA-Z0-9_-])AIza[0-9A-Za-z-_]{35}/i, message: 'Exposed Google API key pattern' },
  { regex: /(?:^|[^a-zA-Z0-9_-])(?:ghp|gho|ghu|ghs|ghr)_[a-zA-Z0-9]{36,}/i, message: 'Exposed GitHub personal access token' },
  { regex: /(?:^|[^a-zA-Z0-9_-])AKIA[0-9A-Z]{16}/i, message: 'Exposed AWS access key pattern' },
  { regex: /(?:^|[^a-zA-Z0-9_-])pcsk_[a-zA-Z0-9_-]{20,}/i, message: 'Exposed Pinecone secret key pattern' },
  { regex: /(?:^|[^a-zA-Z0-9_-])sbp_[a-zA-Z0-9]{20,}/i, message: 'Exposed Supabase secret key pattern' },
  { regex: /-----BEGIN (?:RSA |EC |OPENSSH |DSA |PGP )?PRIVATE KEY-----/, message: 'Exposed private cryptographic key' },
  { regex: /(?:postgres|postgresql|mysql|mongodb(?:\+srv)?):\/\/[a-zA-Z0-9_.-]+:[^@\s/]+@[a-zA-Z0-9_.-]+/i, message: 'Exposed database connection string with password' },
  { regex: /[\u2013\u2014]/, message: 'En-dash or Em-dash character detected in agent system file' }
];

function validateSkillFrontmatter(fullPath, relPath, content) {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    console.error(`[SKILL SCHEMA ERROR] ${relPath}: Missing YAML frontmatter block (--- ... ---)`);
    errorCount++;
    return;
  }
  const fm = fmMatch[1];
  if (!/^name:\s*\S+/m.test(fm) || !/^description:\s*\S+/m.test(fm)) {
    console.error(`[SKILL SCHEMA ERROR] ${relPath}: Frontmatter must declare non-empty 'name:' and 'description:'`);
    errorCount++;
  }
}

function scanDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '.agents') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (/\.(md|mjs|js|json)$/i.test(entry.name)) {
      fileCount++;
      const content = fs.readFileSync(fullPath, 'utf8');
      const relPath = path.relative(rootDir, fullPath).replace(/\\/g, '/');

      if (entry.name === 'SKILL.md' && relPath.includes('.agents/skills/')) {
        validateSkillFrontmatter(fullPath, relPath, content);
      }

      const isSelfScanner =
        relPath.includes('audit-agent-skills.mjs') ||
        relPath.includes('verify-qa.mjs') ||
        relPath.includes('pull-demand-telemetry.mjs');

      for (const { regex, message } of dangerousPatterns) {
        if (regex.test(content)) {
          if (isSelfScanner && !message.includes('dash')) continue;
          if (
            (relPath.includes('audit-agent-skills.mjs') || relPath.includes('verify-qa.mjs')) &&
            message.includes('dash')
          ) {
            continue;
          }

          console.error(`[SECURITY ERROR] ${relPath}: ${message}`);
          errorCount++;
        }
      }
    }
  }
}

scanDirectory(agentsDir);

console.log(`Audited ${fileCount} agent system files.`);
if (errorCount > 0) {
  console.error(`[FAIL] Security & supply-chain audit failed with ${errorCount} error(s).`);
  process.exit(1);
} else {
  console.log('[PASS] Agent skills security & supply-chain audit passed cleanly.');
  process.exit(0);
}

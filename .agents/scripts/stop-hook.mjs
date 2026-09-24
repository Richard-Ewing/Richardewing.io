import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

function checkGitState() {
  try {
    // 1. Check working directory status
    const status = execSync('git status --porcelain', { cwd: rootDir, encoding: 'utf8' }).trim();
    if (status) {
      const lines = status.split('\n')
        .map(l => l.trim())
        .filter(l => l && !l.includes('.scratch/'));
      if (lines.length > 0) {
        return {
          decision: "continue",
          reason: `Mandatory Sovereign Turn-End Gate: Git working tree is dirty (${lines.length} uncommitted file(s)). You must run 'node .agents/scripts/verify-qa.mjs', 'npm run build', commit, and push to origin main before ending the turn.`
        };
      }
    }

    // 2. Check for unpushed commits on origin/main
    try {
      const unpushed = execSync('git log origin/main..HEAD --oneline', { cwd: rootDir, encoding: 'utf8' }).trim();
      if (unpushed) {
        const count = unpushed.split('\n').filter(Boolean).length;
        return {
          decision: "continue",
          reason: `Mandatory Sovereign Turn-End Gate: ${count} unpushed commit(s) detected. You must execute 'git push origin main' and verify 'git status' is clean before ending the turn.`
        };
      }
    } catch {
      // Remote branch check fallback (e.g. detached HEAD or offline)
    }

    return { decision: "allow" };
  } catch {
    // Graceful fallback to prevent deadlock
    return { decision: "allow" };
  }
}

let inputBuffer = '';
process.stdin.setEncoding('utf8');

process.stdin.on('data', chunk => {
  inputBuffer += chunk;
});

process.stdin.on('end', () => {
  const result = checkGitState();
  process.stdout.write(JSON.stringify(result) + '\n');
  process.exit(0);
});

// Guard timeout if stdin remains open
setTimeout(() => {
  const result = checkGitState();
  process.stdout.write(JSON.stringify(result) + '\n');
  process.exit(0);
}, 2000);

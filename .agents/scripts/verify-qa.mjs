import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

console.log('=== Running MOD v3.0 QA Verification Script ===');

let errorCount = 0;
let warningCount = 0;

// 1. Check Root Directory Hygiene
const rootFiles = fs.readdirSync(rootDir);
const forbiddenRootPatterns = [/^tmp_.*$/i, /^debug.*\.txt$/i, /^temp_.*$/i, /^\.scratch_tmp.*$/i];

rootFiles.forEach(file => {
  if (forbiddenRootPatterns.some(pattern => pattern.test(file))) {
    console.error(`[HYGIENE ERROR] Forbidden temporary file found in workspace root: ${file}`);
    errorCount++;
  }
});

// 2. Audit .agents System Files & Git Modified Files for Em-Dashes
let filesToAudit = [];

// A. Always audit .agents directory
function getAgentFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getAgentFiles(filePath));
    } else if (/\.(md|json|mjs|ts)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}
filesToAudit = filesToAudit.concat(getAgentFiles(path.join(rootDir, '.agents')));

// B. Audit git modified / staged files if inside a git repository
try {
  const gitOutput = execSync('git status --porcelain', { cwd: rootDir, encoding: 'utf8' });
  const modifiedLines = gitOutput.split('\n').filter(Boolean);
  modifiedLines.forEach(line => {
    const file = line.trim().split(/\s+/).slice(1).join(' ');
    if (file && /\.(md|mdx|tsx|ts|jsx|js)$/i.test(file)) {
      const fullPath = path.join(rootDir, file);
      if (fs.existsSync(fullPath) && !filesToAudit.includes(fullPath)) {
        filesToAudit.push(fullPath);
      }
    }
  });
} catch (e) {
  // Fallback if git command fails
}

// 3. Perform Em-Dash, Stat & Accessibility Verification
filesToAudit.forEach(filePath => {
  const relativePath = path.relative(rootDir, filePath);
  if (relativePath.includes('verify-qa.mjs')) return;

  const content = fs.readFileSync(filePath, 'utf8');

  // Rule A: Zero Em-Dashes
  const emDashMatch = content.match(/—/g);
  if (emDashMatch) {
    console.error(`[STYLE ERROR] Found ${emDashMatch.length} illegal em-dash(es) in ${relativePath}`);
    errorCount++;
  }

  // Rule B: Unsourced Stats Fallback Check
  if (content.includes('[HUMAN_INPUT:SOURCE]') && !relativePath.endsWith('SKILL.md')) {
    console.warn(`[STAT WARNING] Found unverified stat fallback in ${relativePath}`);
    warningCount++;
  }

  // Rule C: Basic Image Alt Check for Modified TSX/JSX
  if (/\.(tsx|jsx)$/i.test(relativePath)) {
    const rawImgMatches = content.match(/<img\s+[^>]+>/g) || [];
    rawImgMatches.forEach(tag => {
      if (!tag.includes('alt=') || /alt=["']\s*["']/.test(tag)) {
        console.warn(`[A11Y WARNING] Image tag missing non-empty alt prop in ${relativePath}`);
        warningCount++;
      }
    });
  }
});

// 4. Validate Security Headers in middleware.ts
const middlewarePath = path.join(rootDir, 'middleware.ts');
if (fs.existsSync(middlewarePath)) {
  const mwContent = fs.readFileSync(middlewarePath, 'utf8');
  if (!mwContent.includes('Strict-Transport-Security') || !mwContent.includes('X-Frame-Options')) {
    console.error(`[SECURITY ERROR] middleware.ts is missing standard enterprise security headers`);
    errorCount++;
  }
}

console.log('\n--- Verification Summary ---');
console.log(`Files audited: ${filesToAudit.length}`);
console.log(`Errors: ${errorCount}`);
console.log(`Warnings: ${warningCount}`);

if (errorCount > 0) {
  console.error('❌ QA Verification Failed! Please resolve errors before committing.');
  process.exit(1);
} else {
  console.log('✅ All QA Checks Passed Cleanly.');
  process.exit(0);
}

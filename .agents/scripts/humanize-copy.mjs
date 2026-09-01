#!/usr/bin/env node
/**
 * Sovereign Humanize Copy Script (HWS v2.0 / REWS v2.0)
 * 
 * Replaces banned AI consulting buzzwords with plain, non-technical human English.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

const REPLACEMENTS = [
  // Leverage
  { regex: /\bleveraging\b/g, replacement: 'using' },
  { regex: /\bLeveraging\b/g, replacement: 'Using' },
  { regex: /\bleveraged\b/g, replacement: 'used' },
  { regex: /\bLeveraged\b/g, replacement: 'Used' },
  { regex: /\bleverages\b/g, replacement: 'uses' },
  { regex: /\bLeverages\b/g, replacement: 'Uses' },
  { regex: /\bleverage\b/g, replacement: 'use' },
  { regex: /\bLeverage\b/g, replacement: 'Use' },

  // Unlock (in prose/strings)
  { regex: /\bunlocking\b/g, replacement: 'accessing' },
  { regex: /\bUnlocking\b/g, replacement: 'Accessing' },
  { regex: /\bunlocked\b/g, replacement: 'accessed' },
  { regex: /\bUnlocked\b/g, replacement: 'Accessed' },
  { regex: /\bunlocks\b/g, replacement: 'accesses' },
  { regex: /\bUnlocks\b/g, replacement: 'Accesses' },
  { regex: /\bunlock\b/g, replacement: 'access' },
  { regex: /\bUnlock\b/g, replacement: 'Access' },

  // Elevate
  { regex: /\belevating\b/g, replacement: 'improving' },
  { regex: /\bElevating\b/g, replacement: 'Improving' },
  { regex: /\belevated\b/g, replacement: 'improved' },
  { regex: /\bElevated\b/g, replacement: 'Improved' },
  { regex: /\belevates\b/g, replacement: 'improves' },
  { regex: /\bElevates\b/g, replacement: 'Improves' },
  { regex: /\belevate\b/g, replacement: 'improve' },
  { regex: /\bElevate\b/g, replacement: 'Improve' },

  // Delve
  { regex: /\bdelving\b/g, replacement: 'exploring' },
  { regex: /\bDelving\b/g, replacement: 'Exploring' },
  { regex: /\bdelves\b/g, replacement: 'explores' },
  { regex: /\bDelves\b/g, replacement: 'Explores' },
  { regex: /\bdelve into\b/g, replacement: 'explore' },
  { regex: /\bDelve into\b/g, replacement: 'Explore' },
  { regex: /\bdelve\b/g, replacement: 'explore' },
  { regex: /\bDelve\b/g, replacement: 'Explore' },

  // Revolutionary
  { regex: /\brevolutionary\b/g, replacement: 'breakthrough' },
  { regex: /\bRevolutionary\b/g, replacement: 'Breakthrough' },

  // Seamless
  { regex: /\bseamlessly\b/g, replacement: 'directly' },
  { regex: /\bSeamlessly\b/g, replacement: 'Directly' },
  { regex: /\bseamless\b/g, replacement: 'direct' },
  { regex: /\bSeamless\b/g, replacement: 'Direct' },

  // Robust
  { regex: /\brobust\b/g, replacement: 'resilient' },
  { regex: /\bRobust\b/g, replacement: 'Resilient' },

  // Transformative
  { regex: /\btransformative\b/g, replacement: 'major' },
  { regex: /\bTransformative\b/g, replacement: 'Major' },

  // Rapidly changing
  { regex: /\brapidly changing\b/g, replacement: 'fast-moving' },
  { regex: /\bRapidly changing\b/g, replacement: 'Fast-moving' },

  // Empower
  { regex: /\bempowering\b/g, replacement: 'equipping' },
  { regex: /\bEmpowering\b/g, replacement: 'Equipping' },
  { regex: /\bempowered\b/g, replacement: 'equipped' },
  { regex: /\bEmpowered\b/g, replacement: 'Equipped' },
  { regex: /\bempowers\b/g, replacement: 'equips' },
  { regex: /\bEmpowers\b/g, replacement: 'Equips' },
  { regex: /\bempower\b/g, replacement: 'equip' },
  { regex: /\bEmpower\b/g, replacement: 'Equip' },

  // Foster
  { regex: /\bfostering\b/g, replacement: 'building' },
  { regex: /\bFostering\b/g, replacement: 'Building' },
  { regex: /\bfostered\b/g, replacement: 'built' },
  { regex: /\bFostered\b/g, replacement: 'Built' },
  { regex: /\bfosters\b/g, replacement: 'builds' },
  { regex: /\bFosters\b/g, replacement: 'Builds' },
  { regex: /\bfoster\b/g, replacement: 'build' },
  { regex: /\bFoster\b/g, replacement: 'Build' },

  // Engagement bait
  { regex: /Let that sink in\.?/gi, replacement: '' },
  { regex: /Read that again\.?/gi, replacement: '' },
  { regex: /Full stop\.?/gi, replacement: '' }
];

const targetDirs = ['app'];
let totalReplaced = 0;
let filesModified = 0;

function processDir(dir) {
  const fullDir = path.join(rootDir, dir);
  if (!fs.existsSync(fullDir)) return;
  const entries = fs.readdirSync(fullDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(fullDir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git', '.scratch'].includes(entry.name)) {
        processDir(path.join(dir, entry.name));
      }
    } else if (/\.(tsx|ts|md|mdx)$/i.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const r of REPLACEMENTS) {
        content = content.replace(r.regex, (match) => {
          totalReplaced++;
          return r.replacement;
        });
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        filesModified++;
        console.log(`[HUMANIZED] ${dir}/${entry.name}`);
      }
    }
  }
}

console.log('=== Humanizing Copy Sitewide (HWS v2.0) ===\n');
targetDirs.forEach(processDir);
console.log(`\nCompleted! Modified ${filesModified} files with ${totalReplaced} human rewrites.`);

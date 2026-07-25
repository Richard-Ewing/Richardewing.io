import fs from 'fs';
import path from 'path';

/**
 * AI Economics Commercial Knowledge Platform - Release Tooling: SEO Verification Gate
 * Subsystem: /scripts/verify/seo.ts
 */

const CORE_ROUTES = [
  'app/page.tsx',
  'app/advisory/page.tsx',
  'app/services/page.tsx',
  'app/assessment/page.tsx',
  'app/start-here/page.tsx',
  'app/exogram/layout.tsx',
  'app/pricing/page.tsx',
  'app/faq/page.tsx',
  'app/about/page.tsx',
];

export function verifySeoMetadata() {
  console.log('[SEO Verification Gate] Running static inspection of core metadata exports...');
  let totalErrors = 0;

  CORE_ROUTES.forEach(routePath => {
    const fullPath = path.join(process.cwd(), routePath);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ [Missing File] ${routePath} does not exist.`);
      totalErrors++;
      return;
    }

    const content = fs.readFileSync(fullPath, 'utf-8');

    // Check for metadata export or generateMetadata
    const hasMetadata = content.includes('export const metadata') || content.includes('export async function generateMetadata');
    if (!hasMetadata) {
      console.error(`❌ [Missing Metadata] ${routePath} lacks export const metadata or generateMetadata.`);
      totalErrors++;
    } else {
      console.log(`✅ [Metadata Present] ${routePath}`);
    }

    // Check canonical definition
    const hasCanonical = content.includes('canonical:') || content.includes('alternates:');
    if (!hasCanonical) {
      console.warn(`⚠️ [Missing Explicit Canonical] ${routePath} should define alternates.canonical.`);
    }

    // Check description definition
    const hasDescription = content.includes('description:');
    if (!hasDescription) {
      console.warn(`⚠️ [Missing Description] ${routePath} should define description.`);
    }
  });

  console.log(`\n[SEO Verification Gate] Summary: ${totalErrors} hard errors found.`);
  if (totalErrors > 0) {
    throw new Error(`SEO verification gate failed with ${totalErrors} errors.`);
  }
}

if (require.main === module) {
  verifySeoMetadata();
}

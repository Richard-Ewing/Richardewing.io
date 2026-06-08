/**
 * bulk-add-canonicals.js
 * 
 * Adds `alternates: { canonical: '...' }` to all page.tsx files 
 * that have a static `export const metadata` but no canonical tag.
 * 
 * Skips:
 * - Dynamic pages with generateMetadata (they handle their own)
 * - Pages that already have `alternates`
 * - Pages that are pure redirects
 * - CatchAll, sign-in, sign-up, dashboard, vault (private/auth pages)
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.richardewing.io';

// Pages to skip (auth, private, redirect-only)
const SKIP_PATTERNS = [
    'catchAll', 'sign-in', 'sign-up', 'dashboard', 'checkout-pending',
    'toolkit-success', 'vault/assets', 'vault/page', 'vault/team', 'vault/join',
    'system/download'
];

function walk(dir, list = []) {
    for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) walk(p, list);
        else if (f === 'page.tsx') list.push(p);
    }
    return list;
}

function getCanonicalUrl(filePath) {
    // Convert file path to URL path
    // app/advisory/page.tsx → /advisory
    // app/tools/scoring/page.tsx → /tools/scoring
    let urlPath = filePath
        .replace(/\\/g, '/')
        .replace(/^app\//, '/')
        .replace(/\/page\.tsx$/, '')
        .replace(/^\/$/, '');
    
    if (urlPath === '') return BASE_URL + '/';
    return BASE_URL + urlPath;
}

const pages = walk('app');
let fixed = 0;
let skipped = 0;

for (const pagePath of pages) {
    const normalizedPath = pagePath.replace(/\\/g, '/');
    
    // Skip patterns
    if (SKIP_PATTERNS.some(p => normalizedPath.includes(p))) {
        skipped++;
        continue;
    }
    
    const content = fs.readFileSync(pagePath, 'utf8');
    
    // Skip if already has alternates/canonical
    if (content.includes('alternates') || content.includes('canonical')) {
        continue;
    }
    
    // Skip if it's a dynamic page with generateMetadata (they handle their own)
    if (content.includes('generateMetadata')) {
        continue;
    }
    
    // Skip if it's a pure redirect
    if (content.includes('permanentRedirect') && !content.includes('export const metadata')) {
        continue;
    }
    
    // Only fix pages with static metadata export
    if (!content.includes('export const metadata')) {
        // No metadata at all — skip (these need manual attention)
        continue;
    }
    
    const canonicalUrl = getCanonicalUrl(normalizedPath);
    
    // Find the metadata object and add alternates
    // Pattern: look for the closing of the metadata object before the };
    // We add alternates right after the opening of the metadata
    
    // Strategy: Add `alternates: { canonical: '...' },` after the first line of metadata
    const metadataMatch = content.match(/export const metadata:\s*Metadata\s*=\s*\{/);
    if (!metadataMatch) {
        // Try without type annotation
        const altMatch = content.match(/export const metadata\s*=\s*\{/);
        if (!altMatch) continue;
    }
    
    // Insert alternates after the metadata opening brace
    const insertPattern = /export const metadata[^{]*\{/;
    const match = content.match(insertPattern);
    if (!match) continue;
    
    const insertPos = match.index + match[0].length;
    const newContent = content.slice(0, insertPos) + 
        `\n    alternates: { canonical: '${canonicalUrl}' },` +
        content.slice(insertPos);
    
    fs.writeFileSync(pagePath, newContent, 'utf8');
    fixed++;
    console.log(`✅ Added canonical: ${canonicalUrl}`);
    console.log(`   File: ${normalizedPath}`);
}

console.log(`\n📊 Summary: ${fixed} pages fixed, ${skipped} skipped`);

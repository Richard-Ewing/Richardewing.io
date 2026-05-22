/**
 * add-metadata-to-bare-pages.js
 * 
 * Adds metadata exports (with canonical) to pages that have NO metadata at all.
 * These pages currently inherit only the root layout metadata.
 */

const fs = require('fs');

const BASE = 'https://www.richardewing.io';

// Pages that need metadata + canonical added
const PAGES = [
    {
        file: 'app/advisory/page.tsx',
        url: '/advisory',
        title: 'Advisory Services — R&D Capital Audits & AI Governance',
        description: 'From $450 gut-checks to $7,500 R&D Capital Audits. Diagnose technical insolvency, AI unit economics, and capital misallocation with board-ready deliverables.',
    },
    {
        file: 'app/doctrine/page.tsx',
        url: '/doctrine',
        title: 'The Doctrine — Engineering Economics Framework',
        description: 'The operational governance framework behind every R&D Capital Audit. Technical Insolvency Date, Innovation Tax, Product Debt Index, and more.',
    },
    {
        file: 'app/exogram/page.tsx',
        url: '/exogram',
        title: 'Exogram — Deterministic Verification Infrastructure for AI',
        description: 'AI fails because it doesn\'t know what\'s true. Exogram is the missing trust layer — verification infrastructure that makes AI systems reliable.',
    },
    {
        file: 'app/manifesto/page.tsx',
        url: '/manifesto',
        title: 'Manifesto — The Case for Deterministic AI Governance',
        description: 'Why enterprise AI needs deterministic verification, not probabilistic hope. The founding principles behind Exogram and the AI Economist framework.',
    },
    {
        file: 'app/legal/page.tsx',
        url: '/legal',
        title: 'Legal — Terms, Privacy & Compliance',
        description: 'Legal terms, privacy policy, and compliance information for richardewing.io advisory services and diagnostic tools.',
    },
    {
        file: 'app/system/page.tsx',
        url: '/system',
        title: 'System Architecture — Product Economics Protocol',
        description: 'The operational system architecture powering R&D Capital Audits. Product Economics Protocol, diagnostic frameworks, and governance infrastructure.',
    },
    {
        file: 'app/reports/page.tsx',
        url: '/reports',
        title: 'Reports — Engineering Economics Research',
        description: 'Original research on AI unit economics, technical debt quantification, and R&D capital efficiency. Data-driven reports for enterprise leaders.',
    },
    {
        file: 'app/benchmarks/page.tsx',
        url: '/benchmarks',
        title: 'Engineering Benchmarks — Industry Comparison Data',
        description: 'Benchmark your engineering economics against industry standards. Revenue per engineer, innovation tax rates, and AI cost metrics by stage and vertical.',
    },
    {
        file: 'app/careers/page.tsx',
        url: '/careers',
        title: 'Careers — Join the Engineering Economics Practice',
        description: 'Open roles at Richard Ewing Advisory. We hire for judgment, not syntax. Explore positions in AI economics, product engineering, and governance.',
    },
];

let fixed = 0;

for (const page of PAGES) {
    const content = fs.readFileSync(page.file, 'utf8');
    
    // Check if it already has a Metadata import
    const hasMetadataImport = content.includes("import type { Metadata }") || content.includes("import { Metadata");
    
    // Add the metadata import and export
    const metadataBlock = `\nexport const metadata: Metadata = {
    title: '${page.title}',
    description: '${page.description.replace(/'/g, "\\'")}',
    alternates: { canonical: '${BASE}${page.url}' },
    openGraph: {
        title: '${page.title}',
        description: '${page.description.replace(/'/g, "\\'")}',
        url: '${BASE}${page.url}',
        siteName: 'Richard Ewing',
        type: 'website',
    },
};\n`;

    let newContent;
    if (hasMetadataImport) {
        // Just add the metadata export before the first `export default`
        const exportPos = content.indexOf('export default');
        if (exportPos === -1) continue;
        newContent = content.slice(0, exportPos) + metadataBlock + '\n' + content.slice(exportPos);
    } else {
        // Need to add the import too
        // Find the first import line
        const firstImportMatch = content.match(/^import /m);
        if (firstImportMatch) {
            const importLine = "import type { Metadata } from 'next';\n";
            newContent = importLine + content;
            // Now add the metadata block before export default
            const exportPos = newContent.indexOf('export default');
            if (exportPos === -1) continue;
            newContent = newContent.slice(0, exportPos) + metadataBlock + '\n' + newContent.slice(exportPos);
        } else {
            continue;
        }
    }
    
    fs.writeFileSync(page.file, newContent, 'utf8');
    fixed++;
    console.log('✅ ' + page.file + ' → ' + BASE + page.url);
}

console.log('\n📊 Fixed ' + fixed + ' bare pages');

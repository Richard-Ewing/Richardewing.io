/**
 * fix-client-metadata.js
 * 
 * For "use client" pages, we can't export metadata from the same file.
 * Instead, we need to:
 * 1. Remove the wrongly-inserted import and metadata from the client file
 * 2. Create a layout.tsx in the same directory that exports the metadata
 * 
 * This is the correct Next.js pattern: metadata must come from a Server Component.
 */

const fs = require('fs');
const path = require('path');

const PAGES = [
    {
        dir: 'app/advisory',
        title: 'Advisory Services — R&D Capital Audits & AI Governance',
        description: 'From $450 gut-checks to $7,500 R&D Capital Audits. Diagnose technical insolvency, AI unit economics, and capital misallocation with board-ready deliverables.',
        url: '/advisory',
    },
    {
        dir: 'app/doctrine',
        title: 'The Doctrine — Engineering Economics Framework',
        description: 'The operational governance framework behind every R&D Capital Audit. Technical Insolvency Date, Innovation Tax, Product Debt Index, and more.',
        url: '/doctrine',
    },
    {
        dir: 'app/exogram',
        title: 'Exogram — Deterministic Verification Infrastructure for AI',
        description: "AI fails because it doesn't know what's true. Exogram is the missing trust layer — verification infrastructure that makes AI systems reliable.",
        url: '/exogram',
    },
    {
        dir: 'app/manifesto',
        title: 'Manifesto — The Case for Deterministic AI Governance',
        description: 'Why enterprise AI needs deterministic verification, not probabilistic hope. The founding principles behind Exogram and the AI Economist framework.',
        url: '/manifesto',
    },
    {
        dir: 'app/legal',
        title: 'Legal — Terms, Privacy & Compliance',
        description: 'Legal terms, privacy policy, and compliance information for richardewing.io advisory services and diagnostic tools.',
        url: '/legal',
    },
    {
        dir: 'app/system',
        title: 'System Architecture — Product Economics Protocol',
        description: 'The operational system architecture powering R&D Capital Audits. Product Economics Protocol, diagnostic frameworks, and governance infrastructure.',
        url: '/system',
    },
    {
        dir: 'app/reports',
        title: 'Reports — Engineering Economics Research',
        description: 'Original research on AI unit economics, technical debt quantification, and R&D capital efficiency. Data-driven reports for enterprise leaders.',
        url: '/reports',
    },
    {
        dir: 'app/benchmarks',
        title: 'Engineering Benchmarks — Industry Comparison Data',
        description: 'Benchmark your engineering economics against industry standards. Revenue per engineer, innovation tax rates, and AI cost metrics by stage and vertical.',
        url: '/benchmarks',
    },
    {
        dir: 'app/careers',
        title: 'Careers — Join the Engineering Economics Practice',
        description: 'Open roles at Richard Ewing Advisory. We hire for judgment, not syntax. Explore positions in AI economics, product engineering, and governance.',
        url: '/careers',
    },
];

const BASE = 'https://www.richardewing.io';

for (const page of PAGES) {
    // 1. Fix the page.tsx — remove the wrongly-inserted import and metadata
    const pageFile = path.join(page.dir, 'page.tsx');
    let content = fs.readFileSync(pageFile, 'utf8');
    
    // Remove the inserted import line
    content = content.replace(/^import type \{ Metadata \} from 'next';\n/m, '');
    
    // Remove the inserted metadata block (everything between the metadata export and the next export)
    content = content.replace(/\nexport const metadata: Metadata = \{[\s\S]*?\};\n\n/m, '\n');
    
    fs.writeFileSync(pageFile, content, 'utf8');
    console.log('✅ Cleaned page.tsx: ' + pageFile);
    
    // 2. Check if a layout.tsx already exists in this directory
    const layoutFile = path.join(page.dir, 'layout.tsx');
    if (fs.existsSync(layoutFile)) {
        console.log('⚠️  Layout already exists, skipping: ' + layoutFile);
        continue;
    }
    
    // 3. Create a layout.tsx that exports metadata with canonical
    const layoutContent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
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
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
`;
    
    fs.writeFileSync(layoutFile, layoutContent, 'utf8');
    console.log('✅ Created layout.tsx: ' + layoutFile);
}

console.log('\n📊 Done fixing client component metadata');

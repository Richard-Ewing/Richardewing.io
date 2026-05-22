/**
 * week2-meta-ctr-optimization.js
 * 
 * SKILL: optimize_meta_ctr.md
 * 
 * Bulk update meta titles and descriptions across 15 high-impression pages.
 * Pattern: [Operational Fear] | [Financial Consequence]
 * Rules: title ≤ 60 chars, description ≤ 155 chars
 */

const fs = require('fs');

const OPTIMIZATIONS = [
    {
        file: 'app/glossary/page.tsx',
        oldTitle: "Technology & AI Glossary — 400+ Definitions | Richard Ewing",
        newTitle: "Enterprise AI Glossary | 430+ Terms Defined",
        oldDesc: "The most comprehensive technology leadership glossary. 400+ definitions covering technical debt, AI economics, SaaS metrics, engineering management, pro...",
        newDesc: "Master the lexicon of AI governance. Clear executive definitions for hallucination debt, technical insolvency, retry inflation, and 427 more terms.",
        ogTitle: "Enterprise AI Glossary | 430+ Terms Defined",
        ogDesc: "Master the lexicon of AI governance. Clear executive definitions for hallucination debt, technical insolvency, retry inflation, and 427 more terms.",
    },
    {
        file: 'app/compare/cursor-problems/page.tsx',
        oldTitle: "Cursor Problems 2026 | Why Developers Are Frustrated With Cursor | Richard Ewing",
        newTitle: "Cursor Problems 2026: Why It Rewrites Your Files",
        oldDesc: "Real Cursor AI complaints from G2, Reddit, and developer forums: credit anxiety, file rewriting, .cursorrules ignored, crashes on large codebases, and black box code. What runtime governance fixes.",
        newDesc: "Real user complaints about Cursor: file rewrites, credit anxiety, .cursorrules ignored. The governance fixes that stop the chaos.",
    },
    {
        file: 'app/compare/why-claude-loses-context/page.tsx',
        findTitle: true,
        newTitle: "Why Claude Gets Worse Over Time | Context Rot",
        newDesc: "Claude Code forgets instructions mid-session. The engineering reason and the deterministic fix that prevents context rot in long sessions.",
    },
    {
        file: 'app/compare/why-retry-loops-happen/page.tsx',
        findTitle: true,
        newTitle: "Why AI Retry Loops Burn Thousands Overnight",
        newDesc: "Your AI agent retried 47 times. Each retry costs tokens. How retry inflation silently destroys your API budget and the governance fix.",
    },
    {
        file: 'app/compare/why-cursor-rewrites-files/page.tsx',
        findTitle: true,
        newTitle: "Why Cursor Rewrites Unrelated Files | Fix",
        newDesc: "Cursor modified files you did not ask it to touch. This is repository drift and here is the governance architecture that prevents it.",
    },
    {
        file: 'app/compare/why-ai-coding-burns-money/page.tsx',
        findTitle: true,
        newTitle: "Why AI Coding Agents Burn Your Budget",
        newDesc: "Enterprise AI coding tools cost 10-50x more in production than prototypes. The variable compute economics your CFO needs to see.",
    },
    {
        file: 'app/compare/why-mcp-is-dangerous/page.tsx',
        findTitle: true,
        newTitle: "Why MCP Is a Security Risk | Agent Governance",
        newDesc: "Model Context Protocol gives AI agents broad system access. 78% are over-privileged. The containment architecture that stops breaches.",
    },
    {
        file: 'app/tools/pdi/page.tsx',
        oldTitle: "Product Debt Index Calculator | Richard Ewing",
        newTitle: "Product Debt Index | Calculate Insolvency Date",
        oldDesc: "Calculate your Product Debt Index and quantify hidden technical debt in dollar terms. Free forensic diagnostic tool from Richard Ewing, Product Economis...",
        newDesc: "When will maintenance load exceed engineering capacity? Calculate your Technical Insolvency Date before it arrives. Free diagnostic tool.",
    },
    {
        file: 'app/tools/aueb/page.tsx',
        findTitle: true,
        newTitle: "AI Unit Economics Calculator | Collapse Point",
        newDesc: "Calculate the exact usage volume where your AI feature starts destroying margin. Used in $7,500 R&D Capital Audits. Free.",
    },
    {
        file: 'app/for-ctos/page.tsx',
        oldTitle: "For CTOs — Engineering Economics Toolkit & R&D Benchmarks",
        newTitle: "CTO Toolkit: Free AI & Engineering Diagnostics",
        oldDesc: "Free tools and frameworks for CTOs: Product Debt Index, APER Calculator, AI Unit Economics, and Engineering Audit Interview. Benchmark your engineering ...",
        newDesc: "6 free tools + 430 glossary terms + proprietary frameworks. Everything a CTO needs to speak the board's financial language.",
    },
    {
        file: 'app/for-boards/page.tsx',
        findTitle: true,
        newTitle: "For Board Members | AI Risk & R&D Oversight",
        newDesc: "Your engineering team reports innovation while 60% of R&D pays for maintenance. The audit framework that reveals the truth.",
    },
    {
        file: 'app/for-investors/page.tsx',
        findTitle: true,
        newTitle: "For Investors | Technical Due Diligence Tools",
        newDesc: "42% of companies abandoned most AI initiatives in 2025. Know which ones will survive before you invest. Free diagnostic tools.",
    },
    {
        file: 'app/executive-briefing/page.tsx',
        findTitle: true,
        newTitle: "Executive AI Briefing | Board-Ready Intelligence",
        newDesc: "Monthly intelligence on AI governance, engineering economics, and operational risk. Written for executives who buy outcomes.",
    },
    {
        file: 'app/runtime-failure-index/page.tsx',
        findTitle: true,
        newTitle: "AI Runtime Failure Database | Incident Analysis",
        newDesc: "Real enterprise AI failures: context rot, retry inflation, hallucination cascades. Each with root cause analysis and governance fix.",
    },
];

let fixed = 0;
let errors = [];

for (const opt of OPTIMIZATIONS) {
    if (!fs.existsSync(opt.file)) {
        errors.push(opt.file + ' — FILE NOT FOUND');
        continue;
    }
    
    let content = fs.readFileSync(opt.file, 'utf8');
    
    // Validate title length
    if (opt.newTitle.length > 60) {
        errors.push(opt.file + ' — title too long (' + opt.newTitle.length + ' chars): ' + opt.newTitle);
        continue;
    }
    if (opt.newDesc.length > 155) {
        errors.push(opt.file + ' — desc too long (' + opt.newDesc.length + ' chars): ' + opt.newDesc);
        continue;
    }
    
    if (opt.oldTitle) {
        // Exact string replacement
        if (!content.includes(opt.oldTitle)) {
            // Try with escaped ampersands
            const escaped = opt.oldTitle.replace(/&/g, '&amp;');
            if (!content.includes(escaped)) {
                errors.push(opt.file + ' — old title not found: ' + opt.oldTitle);
                continue;
            }
            content = content.replace(escaped, opt.newTitle.replace(/&/g, '&amp;'));
        } else {
            content = content.replace(opt.oldTitle, opt.newTitle);
        }
    }
    
    if (opt.oldDesc) {
        if (!content.includes(opt.oldDesc)) {
            errors.push(opt.file + ' — old desc not found, trying regex');
            // Try a more flexible approach - find the description line and replace it
            const descRegex = /description:\s*'[^']*'/;
            if (descRegex.test(content)) {
                content = content.replace(descRegex, "description: '" + opt.newDesc.replace(/'/g, "\\'") + "'");
            }
        } else {
            content = content.replace(opt.oldDesc, opt.newDesc);
        }
    }
    
    if (opt.findTitle) {
        // Use regex to find and replace the title in metadata
        // Pattern: title: 'some text' or title: "some text"
        const titleRegex = /title:\s*['"]([^'"]*)['"]/;
        const match = content.match(titleRegex);
        if (match) {
            content = content.replace(match[0], "title: '" + opt.newTitle + "'");
        }
        
        // Same for description
        const descRegex = /description:\s*['"]([^'"]*)['"]/;
        const descMatch = content.match(descRegex);
        if (descMatch) {
            content = content.replace(descMatch[0], "description: '" + opt.newDesc.replace(/'/g, "\\'") + "'");
        }
    }
    
    // Update OG title/desc if specified
    if (opt.ogTitle) {
        const ogTitleRegex = /openGraph:\s*\{[^}]*title:\s*['"]([^'"]*)['"]/s;
        const ogMatch = content.match(ogTitleRegex);
        if (ogMatch) {
            content = content.replace(
                ogMatch[0],
                ogMatch[0].replace(ogMatch[1], opt.ogTitle)
            );
        }
    }
    if (opt.ogDesc) {
        // Find OG description specifically
        const ogBlock = content.match(/openGraph:\s*\{[\s\S]*?\}/);
        if (ogBlock) {
            const ogDescMatch = ogBlock[0].match(/description:\s*['"]([^'"]*)['"]/);
            if (ogDescMatch) {
                const newOgBlock = ogBlock[0].replace(ogDescMatch[1], opt.ogDesc);
                content = content.replace(ogBlock[0], newOgBlock);
            }
        }
    }
    
    fs.writeFileSync(opt.file, content, 'utf8');
    fixed++;
    console.log('✅ ' + opt.file);
    console.log('   Title (' + opt.newTitle.length + '): ' + opt.newTitle);
    console.log('   Desc  (' + opt.newDesc.length + '): ' + opt.newDesc);
}

if (errors.length > 0) {
    console.log('\n⚠️  ISSUES:');
    errors.forEach(e => console.log('  ' + e));
}

console.log('\n📊 Summary: ' + fixed + '/' + OPTIMIZATIONS.length + ' pages optimized');

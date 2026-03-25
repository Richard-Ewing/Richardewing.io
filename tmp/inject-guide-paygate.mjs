import fs from 'fs';
import path from 'path';

const PREMIUM_GUIDES = [
    { dir: 'ai-governance-audit-framework', title: 'AI Governance & Audit Framework', id: 'guide_ai_governance' },
    { dir: 'engineering-due-diligence-ma-2026', title: 'Engineering Due Diligence for M&A 2026', id: 'guide_eng_due_diligence_2026' },
    { dir: 'cybersecurity-economics-playbook', title: 'Cybersecurity Economics Playbook', id: 'guide_cybersecurity_economics' },
    { dir: 'ai-talent-strategy', title: 'AI Talent Strategy & Compensation Guide', id: 'guide_ai_talent_strategy' },
    { dir: 'consumption-based-pricing', title: 'Consumption-Based Pricing Playbook', id: 'guide_consumption_pricing' }
];

const injectPayGate = () => {
    let successCount = 0;
    
    for (const guide of PREMIUM_GUIDES) {
        const filePath = path.join(process.cwd(), 'app', 'guides', guide.dir, 'page.tsx');
        
        if (!fs.existsSync(filePath)) {
            console.log(`[SKIP] Missing file: ${filePath}`);
            continue;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 1. Add Imports
        if (!content.includes('GuidePayGate')) {
            content = content.replace(
                "import RelatedContent from '@/components/RelatedContent';",
                "import RelatedContent from '@/components/RelatedContent';\nimport GuidePayGate from '@/app/components/GuidePayGate';\nimport { auth } from '@clerk/nextjs/server';"
            );
        }

        // 2. Convert to async function
        if (content.includes('export default function')) {
            content = content.replace('export default function', 'export default async function');
        }

        // 3. Inject Auth Check
        const authHook = `
    const { userId, sessionClaims } = await auth();
    // @ts-ignore
    const hasAccess = !!userId && (sessionClaims?.metadata?.has_yearly_subscription === true || sessionClaims?.metadata?.has_premium_guide_access === true);
`;
        if (!content.includes('auth()')) {
            const renderRegex = /(export default async function[a-zA-Z0-9_ ]*\(\) {\n*)([^]*?)(return \()/;
            content = content.replace(renderRegex, `$1$2${authHook}\n    $3`);
        }

        // 4. Wrap the children inside GuidePayGate
        // We find the insertion point: just before <div className="space-y-8 mb-16">
        const startTarget = '<div className="space-y-8 mb-16">';
        const endTarget = '<RelatedContent';
        
        if (content.includes(startTarget) && content.includes(endTarget) && !content.includes('<GuidePayGate')) {
            const startIdx = content.indexOf(startTarget);
            const endIdx = content.indexOf(endTarget);
            
            const before = content.substring(0, startIdx);
            const middle = content.substring(startIdx, endIdx);
            const after = content.substring(endIdx);
            
            const envelopeStart = `\n<GuidePayGate guideTitle="${guide.title}" productId="${guide.id}" hasAccess={hasAccess}>\n`;
            const envelopeEnd = `\n</GuidePayGate>\n`;
            
            content = before + envelopeStart + middle + envelopeEnd + after;
        }

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`[OK] Gated: ${guide.dir}`);
        successCount++;
    }
    
    console.log(`\\nDONE! Gated ${successCount} files.`);
};

injectPayGate();

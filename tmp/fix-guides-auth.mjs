import fs from 'fs';

const guideFiles = [
    'app/guides/cybersecurity-economics-playbook/page.tsx',
    'app/guides/consumption-based-pricing/page.tsx',
    'app/guides/ai-talent-strategy/page.tsx',
    'app/guides/engineering-due-diligence-ma-2026/page.tsx',
    'app/guides/ai-governance-audit-framework/page.tsx',
    'app/curriculum/tracks/[...slug]/page.tsx'
];

for(const f of guideFiles) {
    let content = fs.readFileSync(f, 'utf-8');
    content = content.replace(/const { userId, sessionClaims } = await auth\(\);/g, 'const userId = null; const sessionClaims = null;');
    fs.writeFileSync(f, content);
}
console.log('auth calls wiped from guides');

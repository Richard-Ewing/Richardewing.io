import fs from 'fs';
import path from 'path';

// 1. middleware.ts
fs.writeFileSync('middleware.ts', `import { NextResponse } from 'next/server';\nexport function middleware() { return NextResponse.next(); }\nexport const config = { matcher: [] };`);

// 2. app/layout.tsx
let layout = fs.readFileSync('app/layout.tsx', 'utf-8');
layout = layout.replace(/import { ClerkProvider } from '@clerk\/nextjs';\n/g, '');
layout = layout.replace(/<ClerkProvider[^>]*>/g, '');
layout = layout.replace(/<\/ClerkProvider>/g, '');
fs.writeFileSync('app/layout.tsx', layout);

// 3. Guides
const guideFiles = [
    'app/guides/cybersecurity-economics-playbook/page.tsx',
    'app/guides/consumption-based-pricing/page.tsx',
    'app/guides/ai-talent-strategy/page.tsx',
    'app/guides/engineering-due-diligence-ma-2026/page.tsx',
    'app/guides/ai-governance-audit-framework/page.tsx'
];
for(const f of guideFiles) {
    let raw = fs.readFileSync(f, 'utf-8');
    raw = raw.replace(/import { auth } from '@clerk\/nextjs\/server';\n/g, '');
    raw = raw.replace(/const { sessionClaims } = await auth\(\);\n/g, '');
    raw = raw.replace(/const isUnlocked = sessionClaims\?\.metadata\?\.has_premium_guide_access === true \|\| sessionClaims\?\.metadata\?\.has_yearly_subscription === true;/g, 'const isUnlocked = false;');
    fs.writeFileSync(f, raw);
}

// 4. Curriculum track
let curr = fs.readFileSync('app/curriculum/tracks/[...slug]/page.tsx', 'utf-8');
curr = curr.replace(/import { auth } from '@clerk\/nextjs\/server';\n/g, '');
curr = curr.replace(/const { sessionClaims } = await auth\(\);\n/g, '');
curr = curr.replace(/const hasSubscription = sessionClaims\?\.metadata\?\.has_yearly_subscription === true;/g, 'const hasSubscription = false;');
fs.writeFileSync('app/curriculum/tracks/[...slug]/page.tsx', curr);

// 5. PayGates
let guidePG = fs.readFileSync('app/components/GuidePayGate.tsx', 'utf-8');
guidePG = guidePG.replace(/import { useUser } from '@clerk\/nextjs';\n/g, '');
guidePG = guidePG.replace(/const { isLoaded, user } = useUser\(\);\n/g, '');
guidePG = guidePG.replace(/if \(!isLoaded\) return null;\n/g, '');
guidePG = guidePG.replace(/const isUnlocked = !!user\?\.publicMetadata\?\.has_premium_guide_access \|\| !!user\?\.publicMetadata\?\.has_yearly_subscription;/g, 'const isUnlocked = false;');
guidePG = guidePG.replace(/client_reference_id=\$\{user\.id\}/g, '');
fs.writeFileSync('app/components/GuidePayGate.tsx', guidePG);

let pg = fs.readFileSync('app/components/PayGate.tsx', 'utf-8');
pg = pg.replace(/import { useUser } from '@clerk\/nextjs';\n/g, '');
pg = pg.replace(/const { isLoaded, user } = useUser\(\);\n/g, '');
pg = pg.replace(/if \(!isLoaded\) return null;\n/g, '');
pg = pg.replace(/const hasSubscription = user\?\.publicMetadata\?\.has_yearly_subscription === true;/g, 'const hasSubscription = false;');
pg = pg.replace(/client_reference_id=\$\{user\.id\}/g, '');
fs.writeFileSync('app/components/PayGate.tsx', pg);

// 6. Webhook
let wh = fs.readFileSync('app/api/webhooks/stripe/route.ts', 'utf-8');
wh = wh.replace(/import { clerkClient } from '@clerk\/nextjs\/server';\n/g, '');
wh = wh.replace(/const client = await clerkClient\(\);[\s\S]*?console\.log\(`Successfully provisioned access for Clerk User: \$\{userId\}`\);/g, 'console.log(`Webhook received for user: ${userId}`);');
fs.writeFileSync('app/api/webhooks/stripe/route.ts', wh);

console.log('Clerk removed successfully');

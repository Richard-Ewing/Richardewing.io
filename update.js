const fs = require('fs');

let content = fs.readFileSync('lib/content/skills.ts', 'utf8');

// Update Interface
content = content.replace(
  /searchKeywords\?:\s*string\[\];\s*\}/g,
  `searchKeywords?: string[];
  whatBreaks?: string[];
  economicDamage?: string[];
  whatSystemInstalls?: string[];
  failureCascades?: string[];
}`
);

// Inject default arrays into every skill object
const skillRegex = /(searchKeywords:\s*\[[^\]]*\])\s*\}/g;

content = content.replace(skillRegex, (match, p1) => {
  return p1 + `,
    whatBreaks: [
        'hallucinated execution',
        'unauthorized mutations',
        'unsafe shell execution',
        'recursive execution drift'
    ],
    economicDamage: [
        'synthetic QA overload',
        'engineering review fatigue',
        'API spend inflation',
        'merge instability',
        'architectural entropy'
    ],
    whatSystemInstalls: [
        'execution interceptors',
        'admissibility middleware',
        'rollback circuits',
        'runtime permission enforcement',
        'policy-as-code gating'
    ],
    failureCascades: [
        'Context Rot',
        'Retry Inflation',
        'Verification Collapse',
        'Repository Drift',
        'Runtime Governance Failure'
    ]
  }`;
});

fs.writeFileSync('lib/content/skills.ts', content);

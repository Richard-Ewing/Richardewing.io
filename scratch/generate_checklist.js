const fs = require('fs');
const domains = require('./extract_domains.js');

let md = '# Executive Diagnostic Toolkit\n## Module 1: The Complete R&D Audit Checklist\n\nConfidential framework used for technical due diligence and R&D capital efficiency audits.\n\n';

domains.forEach((d, i) => {
    md += `### Domain ${i+1}: ${d.title} ${d.icon}\n*${d.description}*\n\n`;
    d.questions.forEach((q, qi) => {
        md += `**${qi+1}. ${q.q}**\n- **Why:** ${q.why}\n- **Action:** ${q.action}\n- **Scoring Thresholds:**\n  - 🔴 Critical Risk: ${q.scoring.red}\n  - 🟡 Improvement Needed: ${q.scoring.yellow}\n  - 🟢 On Track: ${q.scoring.green}\n\n`;
    });
    md += '---\n\n';
});

fs.mkdirSync('toolkit', {recursive:true});
fs.writeFileSync('toolkit/1_RnD_Audit_Checklist.md', md);

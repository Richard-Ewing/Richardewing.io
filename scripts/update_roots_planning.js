const fs = require('fs');
const files = ['CLAUDE.md', '.cursorrules', '.windsurfrules', '.antigravityrules'];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  const newStep = `4. **Comprehensive Architectural Planning:** Before writing a single line of code or initiating any complex mutation, you MUST autonomously execute the \`/skills/execute_architectural_planning.md\` procedure. You must present a deep market, UX, and technical blast-radius analysis and persist it to \`/environment/plans/\` before execution.\n`;
  
  content = content.replace('## Procedural Governance', newStep + '\n## Procedural Governance');
  
  fs.writeFileSync(file, content);
}

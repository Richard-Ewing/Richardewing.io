const fs = require('fs');
const files = ['CLAUDE.md', '.cursorrules', '.windsurfrules', '.antigravityrules'];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    '4. **Self-Updating Architecture:** At the conclusion of any task, you must evaluate your actions against the `/skills/auto_optimize_exogram.md` procedure. If you notice you are repeating a complex task without a skill, you must autonomously CREATE that skill. If you find a better way to execute an existing skill, you must autonomously UPDATE it.',
    '4. **Proprietary Self-Updating Architecture:** At the conclusion of any task, evaluate your actions against `/skills/auto_optimize_exogram.md`. If you are repeating a complex workflow that is **strictly specific to the RichardEwing.io platform**, you must autonomously CREATE a skill for it. PURGE and ignore any generic programming tasks. If you find a better way to execute an existing RichardEwing.io skill, autonomously UPDATE it.'
  );
  fs.writeFileSync(file, content);
}

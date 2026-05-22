const fs = require('fs');
const path = require('path');
const dir = 'd:/Antigravity_RichardEwing.io/skills';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('Validation Check:')) {
    const lines = content.split('\n');
    let lastNum = 0;
    for (const line of lines) {
      const match = line.match(/^(\d+)\./);
      if (match) {
        lastNum = parseInt(match[1], 10);
      }
    }
    const appendText = `\n${lastNum + 1}. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.\n`;
    fs.appendFileSync(filePath, appendText);
    console.log(`Appended validation to ${file}`);
  }
}

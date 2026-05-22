const fs = require('fs');
const path = require('path');
const dir = 'd:/Antigravity_RichardEwing.io/skills';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Inject repository_binding
  if (!content.includes('repository_binding: RichardEwing.io')) {
    content = content.replace(
      /(name:.*?\npriority:.*?)\n/s, 
      "$1\nrepository_binding: RichardEwing.io\n"
    );
  }

  // Inject Step 0
  if (!content.includes('0. **Proprietary Binding Check:**')) {
    content = content.replace(
      /# Procedure\n+/, 
      "# Procedure\n\n0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.\n"
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`Audited and bound ${file}`);
}

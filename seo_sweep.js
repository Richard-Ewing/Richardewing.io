const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      if (f.endsWith('.tsx') || f.endsWith('.ts')) {
        callback(dirPath);
      }
    }
  });
}

function extractMetadata(fileContent) {
  // Try to find the title string
  const titleMatch = fileContent.match(/title:\s*['"]((?:\\['"]|[^'"])*)['"]/);
  const descMatch = fileContent.match(/description:\s*['"]((?:\\['"]|[^'"])*)['"]/);
  
  return {
    title: titleMatch ? titleMatch[1] : null,
    description: descMatch ? descMatch[1] : null
  };
}

let violations = [];

walkDir('app', (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('export const metadata')) {
    const meta = extractMetadata(content);
    
    let hasViolation = false;
    let issues = [];

    if (meta.title) {
      if (meta.title.length > 60) {
        hasViolation = true;
        issues.push(`Title too long (${meta.title.length} chars)`);
      }
    }

    if (meta.description) {
      if (meta.description.length < 50) {
        hasViolation = true;
        issues.push(`Desc too short (${meta.description.length} chars)`);
      }
      if (meta.description.length > 160) {
        hasViolation = true;
        issues.push(`Desc too long (${meta.description.length} chars)`);
      }
    }

    if (hasViolation) {
      violations.push({
        file: filePath,
        title: meta.title,
        description: meta.description,
        issues
      });
    }
  }
});

console.log(`Found ${violations.length} files with SEO length violations.\n`);
violations.forEach(v => {
  console.log(`FILE: ${v.file}`);
  console.log(`ISSUES: ${v.issues.join(', ')}`);
  if (v.title && v.issues.some(i => i.includes('Title'))) console.log(`  TITLE: ${v.title}`);
  if (v.description && v.issues.some(i => i.includes('Desc'))) console.log(`  DESC:  ${v.description}`);
  console.log('-----------------------------------');
});

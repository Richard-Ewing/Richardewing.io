const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (filePath.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = walk(path.join(__dirname, 'app'));
const results = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('export const metadata')) {
    const titleMatch = content.match(/title:\s*['"`](.*?)['"`]/);
    const descMatch = content.match(/description:\s*['"`](.*?)['"`]/);
    if (titleMatch || descMatch) {
      results.push({
        file: file.replace(__dirname, ''),
        title: titleMatch ? titleMatch[1] : null,
        description: descMatch ? descMatch[1] : null
      });
    }
  }
}

fs.writeFileSync('current_metadata.json', JSON.stringify(results, null, 2));
console.log(`Found ${results.length} files with metadata.`);

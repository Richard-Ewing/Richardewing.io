const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedCount = 0;
walkDir('app/tools', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace RiskSlider / Input Box descriptions
    content = content.replace(/className="text-\[11px\] text-zinc-950/g, 'className="text-sm font-medium text-zinc-950');
    content = content.replace(/className="text-\[11px\] text-zinc-900/g, 'className="text-sm font-medium text-zinc-900');
    content = content.replace(/className="text-xs text-zinc-900/g, 'className="text-sm font-medium text-zinc-950');
    content = content.replace(/className="text-xs text-zinc-950/g, 'className="text-sm font-medium text-zinc-950');
    
    // Also increase the label size
    content = content.replace(/className="text-sm text-zinc-950 font-medium/g, 'className="text-base text-zinc-950 font-bold');
    content = content.replace(/className="text-sm text-zinc-900 font-medium/g, 'className="text-base text-zinc-950 font-bold');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log('Modified: ' + filePath);
    }
  }
});
console.log('Total files modified: ' + modifiedCount);

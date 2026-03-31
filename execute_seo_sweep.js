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

function trimBranding(text) {
  return text.replace(/\s*[|—-]\s*Richard Ewing\s*(?:-\s*Product Economist)?\s*$/i, '');
}

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num - 3) + '...';
}

function processMetadata(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('export const metadata')) return;

  let modified = false;

  // TITLE PROCESSING
  // Match title: "...", title: '...', title: `...`
  const titleRegex = /(title:\s*)(['"`])((?:\\['"`]|(?!\2).)*)(\2)/g;
  content = content.replace(titleRegex, (match, prefix, quote, innerText) => {
    let newTitle = innerText;
    
    // First attempt: strip branding if over 60
    if (newTitle.length > 60) {
      newTitle = trimBranding(newTitle);
    }
    
    // Fallback: brutal truncate
    if (newTitle.length > 60) {
      newTitle = truncateString(newTitle, 60);
    }
    
    if (newTitle !== innerText) {
      modified = true;
      return `${prefix}${quote}${newTitle}${quote}`;
    }
    return match;
  });

  // DESCRIPTION PROCESSING
  const descRegex = /(description:\s*)(['"`])((?:\\['"`]|(?!\2).)*)(\2)/g;
  content = content.replace(descRegex, (match, prefix, quote, innerText) => {
    let newDesc = innerText;

    // Check if it's too short, just log it, don't auto-expand unless we want to inject a placeholder
    if (newDesc.length < 50) {
      console.log(`[TOO SHORT] ${filePath}: ${newDesc}`);
      // Not modifying here, will handle manually
    }

    if (newDesc.length > 155) {
      newDesc = truncateString(newDesc, 155);
    }

    if (newDesc !== innerText) {
      modified = true;
      return `${prefix}${quote}${newDesc}${quote}`;
    }
    return match;
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[ FIXED  ] ${filePath}`);
  }
}

console.log('--- STARTING SEO SWEEP ---');
walkDir('app', processMetadata);
console.log('--- SWEEP COMPLETE ---');

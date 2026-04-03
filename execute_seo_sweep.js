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

  // Extract the metadata block using simple naive scoping
  const metadataStart = content.indexOf('export const metadata');
  const metadataEnd = content.indexOf('};', metadataStart) + 2;
  if (metadataStart === -1 || metadataEnd === 1) return;

  let metadataBlock = content.substring(metadataStart, metadataEnd);
  let modified = false;

  // TITLE PROCESSING
  const titleRegex = /(title:\s*)(['"`])((?:\\['"`]|(?!\2).)*)(\2)/g;
  metadataBlock = metadataBlock.replace(titleRegex, (match, prefix, quote, innerText) => {
    let newTitle = innerText;
    if (newTitle.length > 60) newTitle = trimBranding(newTitle);
    if (newTitle.length > 60) newTitle = truncateString(newTitle, 60);
    
    if (newTitle !== innerText) {
      modified = true;
      return `${prefix}${quote}${newTitle}${quote}`;
    }
    return match;
  });

  // DESCRIPTION PROCESSING
  // Only target the main SEO description, not openGraph inline descriptions
  const descRegex = /^(\s*description:\s*)(['"`])((?:\\['"`]|(?!\2).)*)(\2)/gm;
  metadataBlock = metadataBlock.replace(descRegex, (match, prefix, quote, innerText) => {
    let newDesc = innerText;

    if (newDesc.length < 50) {
      console.log(`[TOO SHORT] ${filePath}: ${newDesc}`);
    }

    // Increased length allowance for modern AEO optimization (250 chars)
    if (newDesc.length > 250) {
      newDesc = truncateString(newDesc, 250);
    }

    if (newDesc !== innerText) {
      modified = true;
      return `${prefix}${quote}${newDesc}${quote}`;
    }
    return match;
  });

  if (modified) {
    content = content.substring(0, metadataStart) + metadataBlock + content.substring(metadataEnd);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[ FIXED  ] ${filePath}`);
  }
}

console.log('--- STARTING SEO SWEEP ---');
walkDir('app', processMetadata);
console.log('--- SWEEP COMPLETE ---');

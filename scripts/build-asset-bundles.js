const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const skillsDir = path.join(process.cwd(), 'assets/skills');
const outputDir = path.join(process.cwd(), 'public/downloads');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const dirs = fs.readdirSync(skillsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

dirs.forEach(slug => {
  const sourceFolder = path.join(skillsDir, slug);
  const destZip = path.join(outputDir, `${slug}.zip`);
  
  // Copy universal GETTING-STARTED.md into each skill folder
  const gettingStartedSrc = path.join(skillsDir, 'GETTING-STARTED.md');
  const gettingStartedDest = path.join(sourceFolder, 'GETTING-STARTED.md');
  if (fs.existsSync(gettingStartedSrc) && !fs.existsSync(gettingStartedDest)) {
    fs.copyFileSync(gettingStartedSrc, gettingStartedDest);
  }
  
  if (fs.existsSync(destZip)) {
    fs.unlinkSync(destZip); // Remove if exists
  }
  
  console.log(`Bundling ${slug}...`);
  try {
    // We are on Windows, so we can use PowerShell's Compress-Archive
    execSync(`powershell.exe -Command "Compress-Archive -Path '${sourceFolder}\\*' -DestinationPath '${destZip}' -Force"`, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed to bundle ${slug}`, err);
  }
});

console.log(`Successfully generated ${dirs.length} zip bundles in /public/downloads/`);

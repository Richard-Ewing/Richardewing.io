const fs = require('fs');
const path = require('path');

const DIRECTORIES = ['app', 'components'];
const EXTENSIONS = ['.tsx', '.jsx', '.ts'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            const ext = path.extname(file);
            if (EXTENSIONS.includes(ext)) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

const files = [];
DIRECTORIES.forEach(dir => {
    if (fs.existsSync(dir)) {
        getAllFiles(dir, files);
    }
});

const regex = /text-[a-z]+-[123]00/g;
const colorMap = {};

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(regex);
    if (matches) {
        matches.forEach(m => {
            colorMap[m] = (colorMap[m] || 0) + 1;
        });
    }
});

console.log("Light text usage count:");
console.log(JSON.stringify(colorMap, null, 2));

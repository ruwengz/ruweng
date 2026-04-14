const fs = require('fs');
const path = require('path');

function findFiles(dir, ext, files = []) {
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && item !== 'node_modules' && item !== '.git') {
          findFiles(fullPath, ext, files);
        } else if (item.endsWith(ext)) {
          files.push(fullPath);
        }
      } catch (e) {}
    }
  } catch (e) {}
  return files;
}

let count = 0;
const htmlFiles = findFiles('.', '.html');
for (const file of htmlFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('开发者小明')) {
      content = content.replace(/开发者小明/g, '程序员如翁');
      fs.writeFileSync(file, content);
      count++;
      console.log('Updated: ' + file);
    }
  } catch (e) {}
}
console.log(`\nTotal updated: ${count} files`);

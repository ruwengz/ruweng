const fs = require('fs');
const path = require('path');

// Find all HTML files
function findHtmlFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && item !== 'node_modules' && item !== '.git') {
      findHtmlFiles(fullPath, files);
    } else if (item.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Update repo in HTML files
function updateHtmlFiles(files) {
  let count = 0;
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes("repo = 'yourname/yourblog'")) {
      content = content.replace(/repo = 'yourname\/yourblog'/g, "repo = 'ruwengz/ruweng'");
      fs.writeFileSync(file, content);
      count++;
      console.log('Updated: ' + file);
    }
  }
  console.log(`\nTotal updated: ${count} files`);
}

const htmlFiles = findHtmlFiles('.');
updateHtmlFiles(htmlFiles);

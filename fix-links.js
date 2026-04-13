const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Find and process all HTML files
function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Fix /categories/daily/ to /categories/日常/
      if (content.includes('/categories/daily/')) {
        content = content.replace(/\/categories\/daily\//g, '/categories/%E6%97%A5%E5%B8%B8/');
        changed = true;
        console.log('Fixed:', fullPath);
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDir(publicDir);
console.log('Done!');

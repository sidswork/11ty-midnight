const fs = require("fs");
const path = require("path");

const outputDirectory = path.join(__dirname, "..", "_site");
const requiredPages = ["index.html", "posts/index.html", "tags/index.html"];

for (const relativePath of requiredPages) {
  const filePath = path.join(outputDirectory, relativePath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing generated page: ${relativePath}`);
  }
}

const htmlFiles = [];
function collectHtmlFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(entryPath);
    } else if (entry.name.endsWith(".html")) {
      htmlFiles.push(entryPath);
    }
  }
}

collectHtmlFiles(outputDirectory);

for (const filePath of htmlFiles) {
  const html = fs.readFileSync(filePath, "utf8");
  const relativePath = path.relative(outputDirectory, filePath);

  if (!/<html lang="[^"]+">/.test(html)) {
    throw new Error(`Missing language attribute: ${relativePath}`);
  }
  if (!/<link rel="canonical" href="[^"]+">/.test(html)) {
    throw new Error(`Missing canonical URL: ${relativePath}`);
  }
  if (!/<meta name="description" content="[^"]+">/.test(html)) {
    throw new Error(`Missing meta description: ${relativePath}`);
  }
  if (!/<title>[^<]+<\/title>/.test(html)) {
    throw new Error(`Missing page title: ${relativePath}`);
  }
  if (!/<link rel="stylesheet" href="[^"]+">/.test(html)) {
    throw new Error(`Missing stylesheet: ${relativePath}`);
  }
  if (!/<nav aria-label="Primary">/.test(html)) {
    throw new Error(`Missing primary navigation: ${relativePath}`);
  }
}

console.log(`Validated ${htmlFiles.length} generated HTML pages.`);

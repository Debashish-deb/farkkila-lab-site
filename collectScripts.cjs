/**
 * Collect all source scripts in the current project into a single text file.
 * Ideal for documentation, backup, or sharing.
 */

const fs = require('fs');
const path = require('path');

// ------------------------------
// CONFIGURATION
// ------------------------------
const EXCLUDE = new Set([
  '.git',
  '.qodo',
  'node_modules',
  'dist',
  'build',
  '.next',
  '.DS_Store',
  'collected-script.txt'
]);

// Collect script-like extensions
const EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs',
  '.json', '.css', '.scss', '.html', '.vue',
  '.md', '.yml', '.yaml'
]);

const OUTPUT_FILE = 'collected-script.txt';

// ------------------------------
// HELPER FUNCTIONS
// ------------------------------

// Return true if the file is binary (skip those)
function isBinaryFile(filePath) {
  const buffer = fs.readFileSync(filePath);
  for (let i = 0; i < buffer.length; i++) {
    if (buffer[i] === 0) return true;
  }
  return false;
}

// Write header
function writeHeader() {
  const header = [
    '=============================================',
    '  Färkkilä Lab Project Script Collector',
    `  Project Root: ${process.cwd()}`,
    `  Date: ${new Date().toLocaleString()}`,
    '=============================================\n\n'
  ].join('\n');
  fs.writeFileSync(OUTPUT_FILE, header);
}

// ------------------------------
// MAIN RECURSIVE FUNCTION
// ------------------------------
function collectFiles(dir, baseDir = dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  for (const item of items) {
    if (EXCLUDE.has(item.name)) continue;

    const fullPath = path.join(dir, item.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (item.isDirectory()) {
      collectFiles(fullPath, baseDir);
    } else {
      const ext = path.extname(item.name).toLowerCase();

      if (EXTENSIONS.has(ext)) {
        try {
          if (isBinaryFile(fullPath)) {
            console.warn(`Skipping binary file: ${relativePath}`);
            continue;
          }

          const content = fs.readFileSync(fullPath, 'utf8');
          fs.appendFileSync(
            OUTPUT_FILE,
            `\n==== FILE: ${relativePath} ====\n${content}\n`
          );
        } catch (err) {
          console.error(`Failed to read ${relativePath}: ${err.message}`);
        }
      }
    }
  }
}

// ------------------------------
// RUN
// ------------------------------
writeHeader();
collectFiles(process.cwd());
console.log(`✅ All scripts collected into "${OUTPUT_FILE}"`);

const fs = require('node:fs');
const path = require('node:path');

const projectRoot = process.cwd();
const tsLibDir = path.join(projectRoot, 'node_modules', 'typescript', 'lib');
const checkerLibDir = path.join(
  projectRoot,
  'node_modules',
  'vite-plugin-checker',
  'dist',
  'checkers',
  'vueTsc',
  'typescript-vue-tsc',
  'lib'
);

if (!fs.existsSync(tsLibDir) || !fs.existsSync(checkerLibDir)) {
  console.log('[fix-vue-tsc-libs] Skip: required directories were not found.');
  process.exit(0);
}

const filesToCopy = fs
  .readdirSync(tsLibDir)
  .filter((name) => /^lib(\..+)?\.d\.ts$/.test(name));

if (!filesToCopy.length) {
  console.log('[fix-vue-tsc-libs] Skip: no lib*.d.ts files found in typescript/lib.');
  process.exit(0);
}

for (const fileName of filesToCopy) {
  const src = path.join(tsLibDir, fileName);
  const dest = path.join(checkerLibDir, fileName);
  fs.copyFileSync(src, dest);
}

console.log(`[fix-vue-tsc-libs] Copied ${filesToCopy.length} file(s) to vite-plugin-checker.`);
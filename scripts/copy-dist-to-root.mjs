import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function rmDir(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}
function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else if (entry.isFile()) {
      fs.copyFileSync(s, d);
    }
  }
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.dirname(scriptDir);
const rootDir = path.dirname(appDir);
const rootDist = path.join(rootDir, 'dist');
const appDist = path.join(appDir, 'dist');

rmDir(rootDist);
copyDir(appDist, rootDist);
console.log(`Copied build output from ${appDist} to ${rootDist}`);

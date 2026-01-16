import fs from 'fs';
import path from 'path';

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

function main() {
  const root = process.cwd();
  const ts = new Date().toISOString().replace(/[:.]/g, '-');
  const outDir = path.join(root, 'backups', ts);
  ensureDir(outDir);

  const manifest = {
    timestamp: new Date().toISOString(),
    items: [],
  };

  const sources = [
    'src',
    'public',
    'vercel.json',
    'package.json',
    'tsconfig.json',
    'tailwind.config.js',
    'postcss.config.js',
    '.vercel/project.json',
  ];

  for (const rel of sources) {
    const srcPath = path.join(root, rel);
    const destPath = path.join(outDir, rel);
    if (fs.existsSync(srcPath)) {
      const stat = fs.statSync(srcPath);
      if (stat.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        ensureDir(path.dirname(destPath));
        fs.copyFileSync(srcPath, destPath);
      }
      manifest.items.push(rel);
    }
  }

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Backup criado em: ${outDir}`);
}

main();


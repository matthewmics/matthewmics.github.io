import { cpSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '../dist');
const rootDir = resolve(__dirname, '../..');

cpSync(distDir, rootDir, { recursive: true, force: true });
console.log(`Copied dist/ → repo root (${rootDir})`);

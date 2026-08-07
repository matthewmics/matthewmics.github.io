/**
 * Copies the Vite build output to the repository root, which is what GitHub
 * Pages serves (Source: `main` branch, `/` root).
 *
 * The root doubles as the deploy target, so this script tracks what it wrote
 * last time in `.deploy-manifest.json` and removes those entries before
 * copying. Without that step, content-hashed bundles (`assets/index-*.js`)
 * pile up forever — the previous version of this script left 13 stale files
 * behind.
 *
 * Only names recorded in the manifest, or names the new build is about to
 * write, are ever removed. Everything else at the root is left alone.
 */
import { cpSync, existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
import { dirname, join, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')
const rootDir = resolve(__dirname, '../..')
const manifestPath = join(rootDir, '.deploy-manifest.json')

/** Never removed, whatever the manifest says. */
const PROTECTED = new Set([
    '.git',
    '.github',
    '.gitignore',
    '.deploy-manifest.json',
    'site',
    'CLAUDE.md',
    'README.md',
    'LICENSE',
])

if (!existsSync(distDir)) {
    console.error('No dist/ found — run `npm run build` first.')
    process.exit(1)
}

const incoming = readdirSync(distDir)

let previous = []
if (existsSync(manifestPath)) {
    try {
        previous = JSON.parse(readFileSync(manifestPath, 'utf8')).files ?? []
    } catch {
        console.warn('Could not read .deploy-manifest.json — falling back to the new build.')
    }
} else {
    // First run under this scheme: the only safe assumption is that whatever
    // the build is about to write is already-generated output.
    previous = incoming
}

const stale = [...new Set(previous)].filter(name => !PROTECTED.has(name))

for (const name of stale) {
    const target = join(rootDir, name)
    if (existsSync(target)) {
        rmSync(target, { recursive: true, force: true })
    }
}

cpSync(distDir, rootDir, { recursive: true, force: true })

writeFileSync(
    manifestPath,
    JSON.stringify({ generated: new Date().toISOString(), files: incoming.sort() }, null, 2) + '\n',
)

console.log(`Cleaned ${stale.length} previously deployed entr${stale.length === 1 ? 'y' : 'ies'}`)
console.log(`Copied dist/ → repo root (${incoming.length} entries)`)

// Compresses raw CAD exports so they are small enough for git, Vercel and fast page loads.
//
//   1. Export from SolidWorks as .glb and drop the files into cad-raw/ (git-ignored).
//   2. Run `pnpm models:optimize` (or pass specific files as arguments).
//   3. The compressed copies land in public/models/ with the same name.
//
// Draco geometry compression + light mesh simplification usually shrinks a
// 10–15 MB SolidWorks export to under 1 MB with no visible difference.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'

const RAW_DIR = 'cad-raw'
const OUT_DIR = join('public', 'models')

const inputs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : existsSync(RAW_DIR)
    ? readdirSync(RAW_DIR)
        .filter((f) => f.toLowerCase().endsWith('.glb'))
        .map((f) => join(RAW_DIR, f))
    : []

if (!inputs.length) {
  console.log(`No .glb files found. Put SolidWorks exports in ${RAW_DIR}/ and run again.`)
  process.exit(0)
}

mkdirSync(OUT_DIR, { recursive: true })
const mb = (file) => (statSync(file).size / 1024 / 1024).toFixed(2) + ' MB'

for (const input of inputs) {
  const output = join(OUT_DIR, basename(input))
  console.log(`\n→ ${input}`)
  execFileSync(
    'npx',
    [
      '-y',
      '@gltf-transform/cli@4',
      'optimize',
      input,
      output,
      '--compress',
      'draco',
      '--texture-compress',
      'webp',
      '--simplify-error',
      '0.0002',
      // Instancing breaks some SolidWorks exports and confuses camera framing.
      '--instance',
      'false',
    ],
    { stdio: ['ignore', 'ignore', 'inherit'], shell: process.platform === 'win32' },
  )
  console.log(`  ${mb(input)} → ${mb(output)}  (${output})`)
}

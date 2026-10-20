// Publishes the .NET WebAssembly host and copies its _framework folder into public/,
// where Vite serves it in dev and copies it into dist/ on build.
//   node scripts/build-dotnet.mjs              always publish
//   node scripts/build-dotnet.mjs --if-missing publish only if public/_framework is missing
// Set CA_AOT=1 to AOT-compile (requires `dotnet workload install wasm-tools`).
import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const web = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const project = resolve(web, '../CellularAutomata.Web.Host/CellularAutomata.Web.Host.csproj')
const target = join(web, 'public', '_framework')

if (process.argv.includes('--if-missing') && existsSync(join(target, 'dotnet.js'))) {
  process.exit(0)
}

const out = mkdtempSync(join(tmpdir(), 'ca-host-'))
try {
  const args = ['publish', project, '-c', 'Release', '-o', out, '--nologo']
  if (process.env.CA_AOT === '1') args.push('-p:CaAot=true')
  execFileSync('dotnet', args, { stdio: 'inherit' })
  rmSync(target, { recursive: true, force: true })
  cpSync(join(out, 'wwwroot', '_framework'), target, { recursive: true })
  console.log(`Copied .NET host to ${target}`)
} finally {
  rmSync(out, { recursive: true, force: true })
}

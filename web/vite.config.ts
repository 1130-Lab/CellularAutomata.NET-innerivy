import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// public/_framework is the published .NET WASM host (see ../build.sh). It is loaded at
// runtime by the simulation worker, not bundled.
export default defineConfig({
  plugins: [react()],
  // Relative asset URLs so dist/ can be served from any path.
  base: './',
  worker: { format: 'es' },
  build: { chunkSizeWarningLimit: 1000 },
})

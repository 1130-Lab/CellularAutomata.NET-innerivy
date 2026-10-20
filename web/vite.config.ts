import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so dist/ can be served from any folder.
  base: './',
  // three.js is ~550 kB on its own and is already split into the lazily loaded 3D view.
  build: { chunkSizeWarningLimit: 700 },
})

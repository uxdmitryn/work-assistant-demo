import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path matches the original GitHub Pages deployment.
export default defineConfig({
  base: '/work-assistant-demo/',
  plugins: [react(), tailwindcss()],
})

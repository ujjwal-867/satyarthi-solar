import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { localApiPlugin } from './scripts/vite-api-plugin.js'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    localApiPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
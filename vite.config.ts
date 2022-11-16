import { defineConfig } from 'vite'
import analyze from 'rollup-plugin-analyzer'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        analyze({summaryOnly: true, limit: 10}),
      ],
    },
  },
  plugins: [react()]
})

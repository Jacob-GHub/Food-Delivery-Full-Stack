import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  alias: {
    'react-toastify': 'react-toastify/dist/react-toastify.esm.js'
  }
})

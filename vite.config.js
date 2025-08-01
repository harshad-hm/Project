import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',       // Allow access from local network
    port: 5173,            // Or any other port you want
  },
  base: '/Project/'

})

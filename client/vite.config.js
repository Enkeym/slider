import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'

config({ path: path.resolve(__dirname, '../.env') })

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    host: '0.0.0.0'
  }
})

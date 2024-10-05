import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'

config({ path: path.resolve(__dirname, '../.env') })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

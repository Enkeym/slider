import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
import path from 'path'
import { defineConfig } from 'vite'

config({ path: path.resolve(__dirname, '../.env') })

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173, // Измените порт на 4173, чтобы соответствовать клиенту
    host: '0.0.0.0' // Указываем хост для того, чтобы Vite был доступен извне
  }
})

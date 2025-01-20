import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@c': path.resolve('./src/components'),
      '@assets': path.resolve('./src/assets')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve('./src/styles/_variables.scss')}" as *;`
      }
    }
  }
})

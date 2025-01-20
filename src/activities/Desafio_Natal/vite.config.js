import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@c': path.resolve('./src/components'),
      '@img': path.resolve('./src/assets'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve('src/style/_variables.scss')}" as *;`
      }
    }
  }
})

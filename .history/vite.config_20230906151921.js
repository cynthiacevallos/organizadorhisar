import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  cors
  plugins: [ vue() ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:true,
    port:90,
    proxy:{
      '/apis':{
        target: 'http://10.0.54.88:8060/',
        changeOrigin: true,
        ws:true,
        secure:false,
        rewrite: (path) => path.replace(/^\/apis/, ''),
      }
    }
  },
})

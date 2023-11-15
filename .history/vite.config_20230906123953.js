import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host:true,
    proxy:{
      '/APIC':{
        target: 'http://10.0.54.88:8060/',
        ws:true,
        changeOrigin: true,
        rewrite: (path) => path.replace('^/apis', ''),
      }
    }
  },
  //port: 90
})

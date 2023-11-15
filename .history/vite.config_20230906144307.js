import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import http from "https";

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
    port:90,
    proxy:{
      '/apis':{
        target: 'http://10.0.54.88:8060/',
        changeOrigin: true,
        ws:true,
        secure:false,
        agent: new http.Agent(),

        rewrite: (path) => path.replace(/^\/apis/, ''),
      }
    }
  },
})

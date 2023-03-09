import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "^/risk-backend/": {
        target: 'https://dev.ceptinel.com',
        ws: true,
        secure: false,
        https: true,
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
//   build: {
//     outDir: resolve(__dirname, 'dist2'),
//     emptyOutDir: true,
//     manifest: true,
//     rollupOptions: {
//         input: './index.html'
//     },
//   },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    server: {
        fs: {
            // Allow serving files from one level up to the project root.
            // Required fonts located in `node_modules`.
            allow: ['..']
        },
    },
    // Fix uikit path issue
    // @see : https://github.com/uikit/uikit/issues/5024
    css: {
        preprocessorOptions: {
            less: {
                relativeUrls: "all",
            },
        },
    },
})

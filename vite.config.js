import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/helpers/_mixins.scss";
          @import "./src/styles/variables/_layout.scss";
          @import "./src/styles/variables/_colors.scss";
        `,
      },
    },
  },
})

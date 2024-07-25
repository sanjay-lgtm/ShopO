import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensure the server serves index.html for unknown routes
  },
  // optimizeDeps: {
  //   exclude: ['js-big-decimal']
  // }
})

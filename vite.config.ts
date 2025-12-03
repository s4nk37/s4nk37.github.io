import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,      // or "0.0.0.0"
    port: 5173,
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          framer: ['framer-motion'],
          dotlottie: ['@lottiefiles/dotlottie-react'],
          icons: ['lucide-react', 'react-icons'],
        },
      },
      onwarn(warning, warn) {
        // Suppress eval warning from lottie-web (third-party library)
        if (warning.code === 'EVAL' && warning.id?.includes('lottie')) {
          return;
        }
        warn(warning);
      },
    },
  },
})

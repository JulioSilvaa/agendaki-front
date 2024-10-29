import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),  
      "@components" :  path.resolve(__dirname, './src/components'),
      "@pages" :  path.resolve(__dirname, './src/pages'),  
         
    },
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
});
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  publicDir: 'public',
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    host: true,
    port: 3000,
    open: false,
    watch: {
      ignored: ['**/android/**', '**/build/**', '**/dist/**']
    }
  }
});

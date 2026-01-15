/**
 * @fileoverview Vite configuration for Portfolio-JJKxDS-Themed
 * @description Build configuration for a React + TypeScript portfolio application
 * with Anime/Manga themed UI (Jujutsu Kaisen & Demon Slayer)
 * @see https://vitejs.dev/config/
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  publicDir: 'public',
});


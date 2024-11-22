import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  cacheDir: './.vite-cache',
  alias: {
    '@duri-fe/ui': path.resolve(__dirname, '../../packages/ui/src'),
    '@duri-fe/utils': path.resolve(__dirname, '../../packages/utils/src'),
  },
});

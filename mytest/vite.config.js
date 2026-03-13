import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [
    basicSsl() // HTTPS needed for camera access during local dev
  ],
  server: {
    https: true
  },
  build: {
    outDir: 'dist'
  }
});

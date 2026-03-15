import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['icon-192.svg', 'icon-512.svg', '**/*.glb'],
        manifest: {
          name: 'AutoVault — Digital Car Museum',
          short_name: 'AutoVault',
          description: "Explore the world's greatest cars in interactive 3D",
          theme_color: '#10b981',
          background_color: '#0a0a0a',
          display: 'standalone',
          scope: '/',
          start_url: '/',
          categories: ['entertainment', 'lifestyle'],
          icons: [
            { src: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml', purpose: 'any' },
            { src: '/icon-512.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg}'],
          runtimeCaching: [
            {
              urlPattern: /\.glb$/i,
              handler: 'CacheFirst',
              options: {
                cacheName: '3d-models-cache',
                expiration: { maxEntries: 50, maxAgeSeconds: 2592000 },
              },
            },
          ],
        },
        devOptions: { enabled: false },
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

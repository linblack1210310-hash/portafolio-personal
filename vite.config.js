import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      // Actualiza automáticamente el Service Worker
      registerType: 'autoUpdate',

      // Permite probar el PWA también durante npm run dev
      devOptions: {
        enabled: true
      },

      // Archivo utilizado como ícono del PWA
      includeAssets: [
             'gamer.png',
              'images/foto-perfil.jpg'
    ],
      // Configuración del manifest
      manifest: {
        name: 'Portafolio de Bran Smith',
        short_name: 'Portafolio',
        description: 'Landing page tipo portafolio construida con React y Vite',

        theme_color: '#0f172a',
        background_color: '#0f172a',

        display: 'standalone',
        start_url: '/',
        id: '/',

        icons: [
          {
            src: 'gamer.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/tic-tac-toe/', // Cambia "nombre-del-repo" por el nombre de tu repositorio
  build: {
    outDir: 'dist', // Carpeta donde se genera el build
  },
  plugins: [
    tailwindcss(),
  ],
})

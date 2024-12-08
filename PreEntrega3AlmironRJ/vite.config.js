import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Asegura que el servidor se inicie desde la raíz del proyecto
  server: {
    open: true, // Esto abrirá automáticamente el navegador al iniciar el servidor
  },
});

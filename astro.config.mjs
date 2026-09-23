import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://anselmisax.cl',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
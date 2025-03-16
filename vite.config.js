import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Pharmacy-website/", // Use the project folder as base
  plugins: [react()],
});

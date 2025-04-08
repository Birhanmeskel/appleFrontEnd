import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
},
)

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     devSourcemap: false, // Disable source maps for CSS
//   },
//   build: {
//     sourcemap: false, // Disable source maps for JavaScript
//   },
// });

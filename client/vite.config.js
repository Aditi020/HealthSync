// // vite.config.js
// import react from '@vitejs/plugin-react'

// export default {
//   plugins: [react()],
// }
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      clientPort: 5173, // Ensure this matches your dev server port
    },
  },
});
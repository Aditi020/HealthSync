import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  }
})
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"), // Alias for src folder
//     },
//   },
//   server: {
//     port: 5173, // Ensure this matches your dev server port
//     hmr: {
//       clientPort: 5173,
//     },
//   },
// });

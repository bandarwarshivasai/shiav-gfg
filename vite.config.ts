import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Conditionally import dev-only plugin
let runtimeErrorOverlay;
if (process.env.NODE_ENV !== "production") {
  runtimeErrorOverlay = require("@replit/vite-plugin-runtime-error-modal").default;
}

export default defineConfig({
  plugins: [
    react(),
    ...(runtimeErrorOverlay ? [runtimeErrorOverlay()] : []), // Only in dev
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"), // Build output for Vercel
    emptyOutDir: true,
  },
  base: "./", // Ensures assets load correctly on Vercel
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// ✅ No top-level await — works fine in all environments
export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      // Adjust these paths if needed — assuming your React code is under "client/src"
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"), // ✅ simpler output for Vercel
    emptyOutDir: true,
  },
  base: "./", // ✅ ensures assets load correctly on Vercel
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

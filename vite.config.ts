import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      phaser: "phaser", // ensure it's treated as an npm package, not a local file
    },
  },
  build: {
    rollupOptions: {
      external: [], // leave empty unless you explicitly want to exclude a dependency
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
  build: {
    rollupOptions: {
      external: ["fs", "path", "os", "crypto", "stream", "buffer", "util"],
    },
  },
  // 🚫 Disable strict type checking in build
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});

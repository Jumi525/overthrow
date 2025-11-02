import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // ✅ Ignore all unresolved imports — allows Phaser builds to pass
      onwarn(warning, warn) {
        if (warning.code === "UNRESOLVED_IMPORT") {
          console.warn("⚠️  Ignoring unresolved import:", warning.cause);
          return;
        }
        warn(warning);
      },
      // ✅ Externalize node modules that should not be bundled in browser
      external: ["fs", "path", "os", "crypto", "stream", "buffer", "util"],
    },
    sourcemap: false,
  },
  define: {
    "process.env": {}, // prevents "process is not defined" errors
  },
  resolve: {
    alias: {
      // ✅ Optional: helps Phaser resolve cleanly
      phaser: "phaser/dist/phaser.js",
    },
  },
});

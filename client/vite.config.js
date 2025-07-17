import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist", // ✅ Confirm output to dist
  },
  base: "./", // ✅ Ensure relative paths for production
  server: {
    port: 5173, // ✅ Local dev port (optional, for clarity)
  },
});

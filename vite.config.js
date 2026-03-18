import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.webp", "**/*.png"],
  resolve: {
    alias: {
      // Now @ correctly points to your src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

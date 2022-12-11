import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, "./src/Assets"),
      "@Common": path.resolve(__dirname, "./src/Common"),
      "@Pages": path.resolve(__dirname, "./src/Pages"),
      "@Components": path.resolve(__dirname, "./src/Components"),
    },
  },
  plugins: [react()],
});

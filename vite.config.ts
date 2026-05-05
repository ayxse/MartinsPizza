import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // In production (GitHub Pages project site), assets must be served from /MartinsPizza/.
  // In dev, the base stays "/" so the dev server keeps working at localhost:5173/.
  base: command === "build" ? "/MartinsPizza/" : "/",
  plugins: [react(), tailwindcss()],
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <-- Importiamo Tailwind v4

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Diciamo a Vite di attivarlo
  ],
  base: "/bnb-react-tailwind-template/",
  build: {
    outDir: "docs",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/bnb-react-tailwind-template/", // <-- AGGIUNGI QUESTA RIGA
});

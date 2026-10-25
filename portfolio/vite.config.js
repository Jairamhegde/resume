import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves the site at https://<user>.github.io/<repo>/,
// so assets need the repo name as their base path.
export default defineConfig({
  plugins: [react()],
  base: "/resume/",
});

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "pages/about.html",
        community: "pages/community.html",
        products: "pages/products.html",
        subscribe: "pages/subscribe.html",
      },
    },
  },
});
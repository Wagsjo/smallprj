import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: "darkgrey",
        display: "standalone",
        icons: [
          {
            purpose: "any",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
        ],
        name: "Johannes testapp",
        short_name: "J's app",
        start_url: ".",
        theme_color: "grey",
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["assets/**", "index.html", "manifest.webmanifest"],
        runtimeCaching: [
          {
            handler: "NetworkFirst",
            urlPattern:
              "http://api.openweathermap.org/data/2.5/weather?q=gothenburg&units=metric&appid=3453f0c07be23ccba37ed293a1bf6c2b",
          },
          {
            handler: "NetworkFirst",
            urlPattern: "https://v2.jokeapi.dev/joke/Any?safe-mode",
          },
        ],
      },
    }),
    vue(),
  ],
});

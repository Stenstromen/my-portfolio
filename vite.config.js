/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { htmlPrerender } from "vite-plugin-html-prerender";
import path from "path";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      htmlPrerender({
        staticDir: path.resolve(__dirname, "build"),
        fallbackDir: path.resolve(__dirname, "build"),
        routes: [
          "/",
          "/Projects",
          "/Contact",
          "/k8s",
          "/det-blev-ingen-cd",
          "/pgp",
        ],
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
        },
      }),
    ],
  };
});

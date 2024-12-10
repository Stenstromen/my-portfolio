/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { htmlPrerender } from "vite-plugin-html-prerender";
import routes from "./routes.js";
import path from "path";
import { minify } from "html-minifier-terser";
import fs from "fs";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      ssrManifest: true,
    },
    plugins: [
      react(),
      htmlPrerender({
        staticDir: path.resolve(__dirname, "build"),
        fallbackDir: path.resolve(__dirname, "build"),
        routes: ["/"].concat(routes.map((route) => `/${route}`)),
        puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
        rendererConfig: {
          renderAfterDocumentEvent: 'render-event',
          maxConcurrentRoutes: 1,
          timeout: 30000,
        },
        postProcess: (renderedRoute) => {
          renderedRoute.html = renderedRoute.html.replace(
            /<script.*?src="\/src\/index\.jsx".*?><\/script>/,
            ''
          );
          
          if (!fs.existsSync(path.join(process.cwd(), 'build', 'src', 'scripts'))) {
            fs.mkdirSync(path.join(process.cwd(), 'build', 'src', 'scripts'), { recursive: true });
          }
          fs.copyFileSync(
            path.join(process.cwd(), 'src', 'scripts', 'gtag.js'),
            path.join(process.cwd(), 'build', 'src', 'scripts', 'gtag.js')
          );
          
          return renderedRoute;
        },
        minify: (html) => minify(html, {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          decodeEntities: true,
          keepClosingSlash: true,
          sortAttributes: true,
          html5: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
        }),
      }),
    ],
  };
});
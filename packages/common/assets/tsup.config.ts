import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/styles/base.css",
    "src/styles/diveicon.css",
    "src/styles/grid.css",
    "src/styles/components.css",
  ],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["react"],
  injectStyle: false,
  loader: {
    ".png": "dataurl",
    ".jpg": "dataurl",
    ".jpeg": "dataurl",
    ".gif": "dataurl",
    ".svg": "dataurl",
    ".webp": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".ttf": "dataurl",
    ".otf": "dataurl",
    ".css": "css",
  },
});

import path from "path";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  splitting: true,
  treeshake: true,
  clean: true,
  dts: true,
  format: ["esm"],
  external: ["react", "react-dom"],
  platform: "browser",
  target: ["es2020", "chrome70", "edge18", "firefox70", "node18"],
  tsconfig: path.resolve(__dirname, "tsconfig.build.json"),
  sourcemap: !options.watch,
  minify: !options.watch,
  cssMinify: !options.watch,
  cssModules: true,
  postcss: true,
  esbuildOptions(options) {
    options.alias = {
      "@/*": path.resolve(__dirname, "src/*"),
      "@assets/*": path.resolve(__dirname, "public/assets/*"),
    };
  },
}));

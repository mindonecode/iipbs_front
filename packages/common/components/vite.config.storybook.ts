import { defineConfig } from "vite";

export default defineConfig({
  define: {
    "process.env.BASE_ASSETS_PATH": JSON.stringify(
      process.env.BASE_ASSETS_PATH,
    ),
  },
});

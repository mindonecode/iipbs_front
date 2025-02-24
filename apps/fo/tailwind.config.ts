import baseConfig from "../../packages/common/components/tailwind.config";

import type { Config } from "tailwindcss";

export default {
  presets: [baseConfig],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/common/components/src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;

import type { Config } from "tailwindcss";
import presetConfig from "../../tailwind.config.preset";

export default {
  presets: [presetConfig],
  darkMode: ["class", "[data-mode='dark']"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/common/components/src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        blur: "0 0 10px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
} satisfies Config;

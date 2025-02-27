import type { Config } from "tailwindcss";
import presetConfig from "../../tailwind.config.preset";

export default {
  presets: [presetConfig],
  darkMode: ["class", "[data-mode='dark']"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/common/components/src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;

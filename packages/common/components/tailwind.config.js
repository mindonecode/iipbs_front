import presetConfig from "../../../tailwind.config.preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [presetConfig],
  darkMode: ["class", "[data-mode='dark']"],
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./.storybook/**/*.{ts,tsx,js,jsx}"],
  plugins: [require("tailwindcss-animate")],
};

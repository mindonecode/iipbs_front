import presetConfig from "../../../tailwind.config.preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [presetConfig],
  content: ["./src/**/*.{ts,tsx,js,jsx}", "./.storybook/**/*.{ts,tsx,js,jsx}"],
  plugins: [require("tailwindcss-animate")],
};

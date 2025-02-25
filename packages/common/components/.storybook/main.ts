import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["./markdown/Overview.mdx", "../src/ui/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./vite.config.storybook.ts",
      },
    },
  },
};
export default config;

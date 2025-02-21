import "../src/base.css";
import "../src/diveicon.css";

import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

import DocsTemplate from "./markdown/docs-template.mdx";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: DocsTemplate,
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
    (Story) => (
      <div className="rounded-lg bg-background px-28 py-16">
        <Story />
      </div>
    ),
  ],
};

export default preview;

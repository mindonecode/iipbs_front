import type { Meta, StoryObj } from "@storybook/react";
import { FileSearch } from ".";

const meta: Meta<typeof FileSearch> = {
  title: "UI/FileSearch",
  component: FileSearch,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/input#file)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileSearch>;

export const Default: Story = {
  render: () => <FileSearch id="file-search" />,
};

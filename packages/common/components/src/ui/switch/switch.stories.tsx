import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from ".";

const meta: Meta<typeof Switch> = {
  title: "Elements/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/switch)
- [API Reference](https://www.radix-ui.com/primitives/docs/components/switch#api-reference)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch />,
};

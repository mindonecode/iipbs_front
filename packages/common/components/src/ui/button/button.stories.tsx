import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/button)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button>Button</Button>
      <Button color="green">Button</Button>
      <Button color="sky">Button</Button>
      <Button color="yellow">Button</Button>
      <Button color="orange">Button</Button>
      <Button color="emerald">Button</Button>
      <Button color="white">Button</Button>
      <Button color="red">Button</Button>
      <Button color="gray">Button</Button>
      <Button color="lightGray">Button</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Button size="xs">xsmall</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <i className="diveicon di-account-circle text-2xl" />
      With Icon
    </Button>
  ),
};

export const Gradient: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Button className="bg-gradient-blue hover:bg-gradient-blue-hover">
        Gradient Blue
      </Button>
      <Button className="bg-gradient-green hover:bg-gradient-green-hover">
        Gradient Green
      </Button>
      <Button className="bg-gradient-red hover:bg-gradient-red-hover">
        Gradient Red
      </Button>
      <Button className="bg-gradient-purple hover:bg-gradient-purple-hover">
        Gradient Purple
      </Button>
    </div>
  ),
};

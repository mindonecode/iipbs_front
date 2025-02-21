import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Elements/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/badge)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge color="red">Red</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="smokyBlue">Smoky Blue</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="gray">Gray</Badge>
      <Badge color="lightGray">Light Gray</Badge>
    </div>
  ),
};

export const Size: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge color="red" size="lg">
        Red
      </Badge>
      <Badge color="blue" size="lg">
        Blue
      </Badge>
      <Badge color="yellow" size="lg">
        Yellow
      </Badge>
      <Badge color="orange" size="lg">
        Orange
      </Badge>
      <Badge color="smokyBlue" size="lg">
        Smoky Blue
      </Badge>
      <Badge color="purple" size="lg">
        Purple
      </Badge>
      <Badge color="green" size="lg">
        Green
      </Badge>
      <Badge color="gray" size="lg">
        Gray
      </Badge>
      <Badge color="lightGray" size="lg">
        Light Gray
      </Badge>
    </div>
  ),
};

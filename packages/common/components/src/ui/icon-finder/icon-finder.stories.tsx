import type { Meta, StoryObj } from "@storybook/react";
import { IconFinder } from "./index";

const meta: Meta<typeof IconFinder> = {
  title: "UI/IconFinder",
  component: IconFinder,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconFinder>;

export const Default: Story = {
  render: () => <IconFinder />,
};

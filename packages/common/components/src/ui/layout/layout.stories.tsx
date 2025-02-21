import type { Meta, StoryObj } from "@storybook/react";
import { BaseLayout } from "./base";
import "./stories.css";

const meta: Meta<typeof BaseLayout> = {
  title: "Layout/Base",
  component: BaseLayout,
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    actions: { disable: true },
  },
  tags: ["!autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
  render: () => (
    <BaseLayout>
      <div className="h-full bg-muted p-4 text-xl text-muted-foreground">
        개발 영역
      </div>
    </BaseLayout>
  ),
};

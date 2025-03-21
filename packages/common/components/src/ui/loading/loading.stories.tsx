import type { Meta, StoryObj } from "@storybook/react";
import { LoadingWithAnimation, LoadingWithImage } from ".";

const meta: Meta<typeof LoadingWithAnimation> = {
  title: "UI/Loading",
  component: LoadingWithAnimation,
};

export default meta;
type Story = StoryObj<typeof LoadingWithAnimation>;

export const Primary: Story = {
  render: () => (
    <div className="[data-theme='black']:bg-transparent rounded-lg bg-secondary p-10">
      <div className="relative size-[5rem]">
        <LoadingWithAnimation color="primary" />
      </div>
    </div>
  ),
};

export const Secondary: Story = {
  render: () => (
    <div className="[data-theme='black']:bg-transparent rounded-lg bg-secondary p-10">
      <div className="relative size-[5rem]">
        <LoadingWithAnimation color="secondary" />
      </div>
    </div>
  ),
};

export const PrimaryWithImage: Story = {
  render: () => (
    <div className="[data-theme='black']:bg-transparent rounded-lg bg-secondary p-10">
      <div className="relative size-[5rem]">
        <LoadingWithImage color="primary" />
      </div>
    </div>
  ),
};

export const SecondaryWithImage: Story = {
  render: () => (
    <div className="[data-theme='black']:bg-transparent rounded-lg bg-secondary p-10">
      <div className="relative size-[5rem]">
        <LoadingWithImage color="secondary" />
      </div>
    </div>
  ),
};

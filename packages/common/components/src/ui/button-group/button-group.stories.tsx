import "./button-group.css";

import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup, RadioGroupItem } from "../radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Elements/ButtonGroup",
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: `
ButtonGroup 컴포넌트는 RadioGroup 컴포넌트를 기반으로 버튼 모양을 변형한 컴포넌트입니다.
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" variant="button">
      <RadioGroupItem value="default">Default</RadioGroupItem>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
    </RadioGroup>
  ),
};

export const Secondary: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" variant="button" color="secondary">
      <RadioGroupItem value="default">Default</RadioGroupItem>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
    </RadioGroup>
  ),
};

export const Rounded: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" variant="button" shape="rounded">
      <RadioGroupItem value="default">Default</RadioGroupItem>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
    </RadioGroup>
  ),
};

export const SecondaryRounded: Story = {
  render: () => (
    <RadioGroup
      defaultValue="comfortable"
      variant="button"
      color="secondary"
      shape="rounded"
    >
      <RadioGroupItem value="default">Default</RadioGroupItem>
      <RadioGroupItem value="comfortable">Comfortable</RadioGroupItem>
      <RadioGroupItem value="compact">Compact</RadioGroupItem>
    </RadioGroup>
  ),
};

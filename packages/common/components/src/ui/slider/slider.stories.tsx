import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from ".";

const meta: Meta<typeof Slider> = {
  title: "Elements/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/slider)
- [API Reference](https://www.radix-ui.com/primitives/docs/components/slider#api-reference)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <ControlledSlider />,
};

function ControlledSlider() {
  const [value, setValue] = useState([50]);
  const handleValueChange = (value: number[]) => {
    setValue(value);
  };

  return <Slider value={value} onValueChange={handleValueChange} />;
}

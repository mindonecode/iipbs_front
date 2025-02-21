import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  title: "Elements/DatePicker",
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/date-picker)
- [React DayPicker](https://daypicker.dev/)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => <ControlledDatePicker />,
};

function ControlledDatePicker() {
  const [date, setDate] = useState<Date>();
  return <DatePicker mode="single" selected={date} onSelect={setDate} />;
}

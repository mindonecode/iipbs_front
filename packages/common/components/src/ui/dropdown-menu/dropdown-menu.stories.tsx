import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from ".";
import { Button } from "../button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Elements/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://ui.shadcn.com/docs/components/dropdown-menu)
- [API Reference](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#api-reference)
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="group">
          Dropdown
          <i className="diveicon di-chevron-down translate-y-0.5 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Dropdown Item 1</DropdownMenuItem>
        <DropdownMenuItem>Dropdown Item 2</DropdownMenuItem>
        <DropdownMenuItem>Dropdown Item 3</DropdownMenuItem>
        <DropdownMenuItem>Dropdown Item 4</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

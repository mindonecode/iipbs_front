import type { Meta, StoryObj } from "@storybook/react";

import "@common/assets/styles/grid.css";
import Grid from "@toast-ui/react-grid";

const meta: Meta<typeof Grid> = {
  title: "External/Grid",
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://github.com/nhn/tui.grid/blob/master/packages/toast-ui.react-grid/README.md)
- [API Reference](https://nhn.github.io/tui.grid/latest/Grid)
`,
      },
      source: {
        code: `
import "@common/assets/styles/grid.css";
import Grid from "@toast-ui/react-grid";

const data = [
  { id: 1, name: "Editor" },
  { id: 2, name: "Grid" },
  { id: 3, name: "Chart" },
];

const columns = [
  { name: "id", header: "ID" },
  { name: "name", header: "Name" },
];

return (
  <Grid
    data={data}
    columns={columns}
    rowHeight={25}
    bodyHeight={100}
    heightResizable={true}
    rowHeaders={["rowNum"]}
  />
);
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => {
    const data = [
      { id: 1, name: "Editor" },
      { id: 2, name: "Grid" },
      { id: 3, name: "Chart" },
    ];

    const columns = [
      { name: "id", header: "ID" },
      { name: "name", header: "Name" },
    ];

    return (
      <div className="w-[50vw]">
        <Grid
          data={data}
          columns={columns}
          rowHeight={25}
          bodyHeight={100}
          heightResizable={true}
          rowHeaders={["rowNum"]}
        />
      </div>
    );
  },
};

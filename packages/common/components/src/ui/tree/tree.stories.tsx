import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import {
  Tree,
  MultiBackend,
  getBackendOptions,
  type NodeModel,
} from "@minoru/react-dnd-treeview";
import { type CustomData } from "./types";
import { CustomNode } from "./CustomNode";
import SampleData from "./__mock__.json";

const meta: Meta<typeof Tree> = {
  title: "UI/Tree",
  component: Tree,
  parameters: {
    docs: {
      description: {
        component: `
- [Docs](https://github.com/minop1205/react-dnd-treeview/blob/next/README.md)
`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tree>;

export const Default: Story = {
  render: () => <TreeView />,
};

function TreeView() {
  const [treeData, setTreeData] = useState<NodeModel<CustomData>[]>(SampleData);
  const handleDrop = (newTree: NodeModel<CustomData>[]) => setTreeData(newTree);

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree<CustomData>
        tree={treeData}
        rootId={0}
        render={(node: NodeModel<CustomData>, { depth, isOpen, onToggle }) => (
          <CustomNode
            node={node}
            depth={depth}
            isOpen={isOpen}
            onToggle={onToggle}
          />
        )}
        onDrop={handleDrop}
        classes={{
          root: "p-10",
          container: "flex flex-col",
          listItem: "",
          dropTarget: "bg-primary rounded-sm",
          draggingSource: "",
          placeholder: "",
        }}
      />
    </DndProvider>
  );
}

"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { useMutation } from "@tanstack/react-query";
import {
  Tree,
  MultiBackend,
  getBackendOptions,
  type NodeModel,
  type DropOptions,
} from "@minoru/react-dnd-treeview";
import { cn } from "@common/components/lib";
import { MenuApi } from "../api/menu-service";
import {
  menuFormSchema,
  type Menu,
  type MenuFormData,
} from "../model/menu-interface";

function MenuTree({ treeData }: { treeData: NodeModel<Menu>[] }) {
  const { mutate } = useMutation({
    mutationFn: ({ menuCd, data }: { menuCd: number; data: MenuFormData }) =>
      MenuApi.modifyMenu(menuCd, data),
  });

  const [selectedNode, setSelectedNode] = useState<NodeModel<Menu> | null>(
    null,
  );

  const handleSelect = (node: NodeModel<Menu>) => setSelectedNode(node);

  const handleDrop = (
    newTree: NodeModel<Menu>[],
    options: DropOptions<Menu>,
  ) => {
    let saveData: MenuFormData | null = null;
    const dragSourceNode = findNode(options.dragSourceId) ?? options.dragSource;
    const dropTargetNode = findNode(options.dropTargetId) ?? options.dropTarget;

    if (!dropTargetNode) return;

    saveData = menuFormSchema.parse({
      ...dragSourceNode?.data,
    });
    console.log(saveData);
  };

  const findNode = (id?: NodeModel["id"]) => {
    return id ? treeData.find((node) => node.id === id) : null;
  };

  return (
    <DndProvider backend={MultiBackend} options={getBackendOptions()}>
      <Tree
        tree={treeData}
        rootId={0}
        render={(node: NodeModel<Menu>, { depth, isOpen, onToggle }) => (
          <MenuNode
            node={node}
            depth={depth}
            isOpen={isOpen}
            isSelected={selectedNode?.id === node.id}
            onToggle={onToggle}
            onSelect={handleSelect}
          />
        )}
        onDrop={handleDrop}
        classes={{
          root: "p-2",
          container: "flex flex-col",
          listItem: "",
          dropTarget: "!bg-[rgba(32,148,250,0.5)] rounded-sm",
          draggingSource: "",
          placeholder: "",
        }}
      />
    </DndProvider>
  );
}

type MenuNodeProps = {
  node: NodeModel<Menu>;
  depth: number;
  isOpen: boolean;
  isSelected: boolean;
  onToggle: (id: NodeModel["id"]) => void;
  onSelect: (node: NodeModel<Menu>) => void;
};

function MenuNode({
  node,
  depth,
  isOpen,
  isSelected,
  onToggle,
  onSelect,
}: MenuNodeProps) {
  const { droppable, id, text } = node;
  const indent = depth * 24 + 5;

  const handleToggle = () => onToggle(id);
  const handleSelect = () => onSelect(node);

  return (
    <div
      style={{ paddingInlineStart: indent }}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-sm p-2 hover:bg-accent",
        isSelected && "!bg-[rgba(32,148,250,0.2)]",
      )}
      onClick={handleSelect}
    >
      {droppable && (
        <button
          className="inline-flex size-6 items-center justify-center rounded-sm text-label"
          onClick={(e) => {
            e.stopPropagation();
            handleToggle();
          }}
        >
          <i
            className={cn(
              "diveicon di-arrow-forward text-sm",
              isOpen && "rotate-90",
            )}
          />
        </button>
      )}
      <div>
        <span className="text-[1.4rem] font-medium text-label">{text}</span>
      </div>
    </div>
  );
}

export { MenuTree };

"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Tree,
  MultiBackend,
  getBackendOptions,
  type NodeModel,
  type DropOptions,
} from "@minoru/react-dnd-treeview";
import { cn } from "@common/components/lib";
import { MenuApi } from "../api/menu-service";
import type { Menu, TreeMenu } from "../model/menu-interface";
import { generateNewTreeData } from "../lib/utils";
import { ENDPOINT } from "@/shared/config";

type MenuTreeProps = {
  treeData: NodeModel<Menu>[];
  siteId: string;
};

function MenuTree({ treeData, siteId }: MenuTreeProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ data }: { data: TreeMenu[] }) =>
      MenuApi.modifyMenu(siteId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINT.CMS_SERVICE.MENUS],
      });
    },
  });

  const [selectedNode, setSelectedNode] = useState<NodeModel<Menu> | null>(
    null,
  );

  const handleSelect = (node: NodeModel<Menu>) => setSelectedNode(node);

  const handleDrop = (
    newTree: NodeModel<Menu>[],
    options: DropOptions<Menu>,
  ) => {
    const newTreeData = generateNewTreeData(newTree, options);
    if (!newTreeData) return;
    mutate({ data: [newTreeData] });
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
          root: "p-4",
          container: "flex flex-col",
          listItem: "",
          dropTarget: "!bg-[rgba(32,148,250,0.5)] rounded-sm",
          draggingSource: "",
          placeholder: "",
        }}
        sort={false}
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
  const { id, text, data } = node;
  const indent = depth * 10 + 5;

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
      <div className="flex items-center">
        {data?.children?.length && (
          <i
            className={cn(
              "diveicon di-arrow-forward mr-2 text-base text-label",
              isOpen && "rotate-90",
            )}
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
          />
        )}
        <span className="text-[1.4rem] font-medium text-label">{text}</span>
      </div>
    </div>
  );
}

export { MenuTree };

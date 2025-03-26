"use client";

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Tree,
  MultiBackend,
  getBackendOptions,
  type NodeModel,
} from "@minoru/react-dnd-treeview";
import { ENDPOINT } from "@/shared/config";
import { MenuApi } from "../api/menu-service";
import type { Menu, TreeMenu } from "../model/menu-interface";
import { handleDropNode, handleSelectNode } from "../lib/utils";
import { MenuNode } from "./menu-node";

type MenuTreeProps = {
  treeData: NodeModel<Menu>[];
  siteId: string;
};

function MenuTree({ treeData, siteId }: MenuTreeProps) {
  const queryClient = useQueryClient();

  const { mutate: modifyTreeMenu } = useMutation({
    mutationFn: (newTree: TreeMenu) =>
      MenuApi.modifyTreeMenu(siteId, [newTree]),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ENDPOINT.CMS_SERVICE.MENUS],
      });
    },
  });

  const [selectedNode, setSelectedNode] = useState<NodeModel<Menu> | null>(
    null,
  );

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
            onSelect={handleSelectNode(setSelectedNode)}
          />
        )}
        onDrop={handleDropNode(modifyTreeMenu)}
        classes={{
          root: "p-4",
          container: "flex flex-col",
          dropTarget: "!bg-[rgba(32,148,250,0.5)] rounded-sm",
          placeholder: "relative",
        }}
        sort={false}
        dropTargetOffset={5}
        insertDroppableFirst={false}
        canDrop={(_, { dragSource, dropTargetId }) => {
          if (dragSource?.parent === dropTargetId) {
            return true;
          }
        }}
        placeholderRender={(_, { depth }) => {
          return (
            <div
              className="absolute right-0 top-0 h-[0.2rem] bg-primary"
              style={{ left: depth * 10 + 5 }}
            />
          );
        }}
      />
    </DndProvider>
  );
}

export { MenuTree };

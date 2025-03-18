import React from "react";
import { type NodeModel } from "@minoru/react-dnd-treeview";
import { type CustomData } from "./types";
import { TypeIcon } from "./TypeIcon";

type Props = {
  node: NodeModel<CustomData>;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel["id"]) => void;
};

export const CustomNode: React.FC<Props> = (props) => {
  const { droppable, id, text } = props.node;
  const indent = props.depth * 24;

  const handleToggle = (e: React.MouseEvent) => {
    if (!droppable) return;
    e.stopPropagation();
    props.onToggle(id);
  };

  return (
    <div
      style={{ paddingInlineStart: indent }}
      className="flex cursor-pointer items-center gap-3 rounded-sm p-2 hover:bg-accent"
      onClick={handleToggle}
    >
      <div>
        <div>
          <TypeIcon droppable={droppable} isOpen={props.isOpen} />
        </div>
      </div>
      <div>
        <span className="text-[1.4rem] font-medium text-label">{text}</span>
      </div>
    </div>
  );
};

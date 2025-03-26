import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import type { NodeModel } from "@minoru/react-dnd-treeview";
import { cn } from "@common/components/lib";
import { Button, Input } from "@common/components/ui";
import type { Menu } from "../model/menu-interface";
import { MenuApi } from "../api/menu-service";

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

  const { mutateAsync: modifyMenuName } = useMutation({
    mutationFn: (nodeName: string) => {
      const encodedName = encodeURIComponent(nodeName);
      return MenuApi.modifyMenuName(id as number, encodedName);
    },
  });

  const [editMode, setEditMode] = useState(false);
  const [nodeName, setNodeName] = useState(text);

  const handleToggle = () => onToggle(id);
  const handleSelect = () => onSelect(node);

  const handleSave = async () => {
    await modifyMenuName(nodeName);
    setEditMode(false);
  };

  return (
    <div
      style={{ paddingInlineStart: indent }}
      className={cn(
        "group flex cursor-pointer items-center justify-between gap-2 rounded-sm p-2 hover:bg-accent",
        isSelected && "!bg-[rgba(32,148,250,0.2)]",
      )}
      onClick={handleSelect}
    >
      <div className="flex items-center">
        {editMode ? (
          <>
            <Input
              value={nodeName}
              onChange={(e) => setNodeName(e.target.value)}
              className="h-[2.5rem] !text-[1.3rem] text-foreground"
            />
          </>
        ) : (
          <>
            {data?.children?.length && (
              <i
                className={cn(
                  "diveicon di-arrow-forward mr-2 text-base text-label",
                  isOpen && "rotate-90",
                )}
                onClick={handleToggle}
              />
            )}
            <span className="text-[1.4rem] font-medium text-label">{text}</span>
          </>
        )}
      </div>
      {editMode ? (
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-8 !bg-transparent"
            onClick={handleSave}
          >
            <i className="diveicon di-check text-2xl" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 !bg-transparent"
            onClick={() => {
              setEditMode(false);
              setNodeName(text);
            }}
          >
            <i className="diveicon di-x" />
          </Button>
        </div>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="invisible !bg-transparent group-hover:visible"
          onClick={() => setEditMode(true)}
        >
          <i className="diveicon di-pencil" />
        </Button>
      )}
    </div>
  );
}

export { MenuNode };

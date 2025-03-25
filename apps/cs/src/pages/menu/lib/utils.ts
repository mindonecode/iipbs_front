import type { DropOptions, NodeModel } from "@minoru/react-dnd-treeview";
import type { Menu, TreeMenu } from "../model/menu-interface";

export const generateTreeData = (data: Menu[]): NodeModel<Menu>[] => {
  return data.reduce<NodeModel<Menu>[]>((acc, menu) => {
    const node: NodeModel<Menu> = {
      id: menu.menuCd ?? 0,
      parent: menu.parentId ?? 0,
      text: menu.menuKornNm,
      droppable: true,
      data: menu,
    };

    acc.push(node);

    if (menu.children?.length) {
      acc.push(...generateTreeData(menu.children));
    }

    return acc;
  }, []);
};

export const generateNewTreeData = (
  treeData: NodeModel<Menu>[],
  options: DropOptions<Menu>,
): TreeMenu | null => {
  const { dragSourceId, dragSource, dropTargetId, dropTarget } = options;
  if (!dragSource?.data) return null;

  const childNodes = treeData.filter(
    (node) => node.parent === dragSourceId && node.data,
  );

  const baseNode = (node: NodeModel<Menu>): TreeMenu => {
    if (!node.data) return {};
    return {
      menuCd: node.data?.menuCd,
      name: node.data?.menuKornNm,
      icon: node.data?.iconNm,
    };
  };

  const treeMenu: TreeMenu = {
    ...baseNode(dragSource),
    parentId: dropTargetId === 0 ? null : (dropTargetId as number),
    sortSeq: dropTarget?.data?.children?.length ?? 0 + 1,
    levelNo: dropTarget?.data?.levelNo ?? 0 + 1,
  };

  const result: TreeMenu = {
    ...treeMenu,
    children: childNodes.map((child) => ({
      ...baseNode(child),
      parentId: child.data?.parentId === 0 ? null : (dropTargetId as number),
      sortSeq: child.data?.sortSeq,
      levelNo: treeMenu?.levelNo ?? 0 + 1,
    })),
  };

  return result;
};

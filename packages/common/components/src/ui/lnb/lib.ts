import type { MenuItem } from "../../api";

function getParentIds(menuCd: number): (menuList: MenuItem[]) => number[] {
  return (menuList: MenuItem[]) => {
    const parentIds: number[] = [];
    let currentId = menuCd;

    while (true) {
      const menu = findMenuById(currentId)(menuList);
      if (!menu || !menu.parentId) break;
      parentIds.push(menu.parentId);
      currentId = menu.parentId;
    }

    return parentIds;
  };
}

function findMenuById(
  menuCd: number,
): (menuList: MenuItem[]) => MenuItem | undefined {
  function findInMenu(items: MenuItem[]): MenuItem | undefined {
    for (const item of items) {
      if (item.menuCd === menuCd) return item;
      if (item.children) {
        const found = findInMenu(item.children);
        if (found) return found;
      }
    }
    return undefined;
  }

  return findInMenu;
}

export { getParentIds, findMenuById };

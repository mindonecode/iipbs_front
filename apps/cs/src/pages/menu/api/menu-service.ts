import { client } from "@/shared/api";
import { ENDPOINT } from "@/shared/config";
import type { Menu, MenuService, TreeMenu } from "../model/menu-interface";

export class MenuApiService implements MenuService {
  public async getTreeMenuList(siteId: string): Promise<Menu[]> {
    const response = await client.get<Menu[]>(
      `${ENDPOINT.CMS_SERVICE.MENUS}/${siteId}/tree`,
    );
    return response.data;
  }

  public async modifyTreeMenu(siteId: string, data: TreeMenu[]): Promise<void> {
    const response = await client.put<void>(
      `${ENDPOINT.CMS_SERVICE.MENUS}/${siteId}/tree`,
      data,
    );
    return response.data;
  }

  public async modifyMenuName(menuCd: number, name: string): Promise<void> {
    const response = await client.put<void>(
      `${ENDPOINT.CMS_SERVICE.MENUS}/${menuCd}/${name}`,
    );
    return response.data;
  }
}

export const MenuApi = new MenuApiService();

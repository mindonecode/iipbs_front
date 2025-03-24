import { client } from "@/shared/api";
import { ENDPOINT } from "@/shared/config";
import type { Menu, MenuService, TreeMenu } from "../model/menu-interface";

export class MenuApiService implements MenuService {
  public async getMenuList(siteId: string): Promise<Menu[]> {
    const response = await client.get<Menu[]>(
      `${ENDPOINT.CMS_SERVICE.MENUS}/${siteId}/tree`,
    );
    return response.data;
  }

  public async modifyMenu(siteId: string, data: TreeMenu[]): Promise<void> {
    const response = await client.put<void>(
      `${ENDPOINT.CMS_SERVICE.MENUS}/${siteId}/tree`,
      data,
    );
    return response.data;
  }
}

export const MenuApi = new MenuApiService();

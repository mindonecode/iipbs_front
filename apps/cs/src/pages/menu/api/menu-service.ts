import { client } from "@/shared/api";
import { ENDPOINT } from "@/shared/config";
import type { Menu, MenuFormData, MenuService } from "../model/menu-interface";

export class MenuApiService implements MenuService {
  public async getMenuList(siteId: string): Promise<Menu[]> {
    const response = await client.get<Menu[]>(
      `${ENDPOINT.CMS_SERVICE.MENUS}/${siteId}/tree`,
    );
    return response.data;
  }

  public async modifyMenu(menuCd: number, data: MenuFormData): Promise<void> {
    const response = await client.put<void>(
      `${ENDPOINT.CMS_SERVICE.MENUS}/${menuCd}`,
      data,
    );
    return response.data;
  }
}

export const MenuApi = new MenuApiService();

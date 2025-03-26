import { client } from "./client";
import { ENDPOINT } from "../config";

export interface MenuItem {
  menuCd: number;
  menuKornNm: string;
  menuEngNm: string;
  parentId: number | null;
  sortSeq: number;
  iconNm?: string;
  children: MenuItem[] | null;
  levelNo: number;
  urlPath: string;
  menuLnkgTypeCd: string;
  menuLnkgSn: number;
  qrcd: string;
  useYn: string;
  otptYn: string;
  requiredUrlPath: boolean;
}

export const getMenuList = async (siteId: string) => {
  const response = await client.get<MenuItem[]>(
    `${ENDPOINT.CMS_SERVICE.MENU_ROLES}/${siteId}`,
  );
  return response.data;
};

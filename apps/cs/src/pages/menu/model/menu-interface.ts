import { z } from "zod";

export interface Menu {
  menuCd: number;
  menuKornNm: string;
  menuEngNm: string;
  parentId: number;
  sortSeq: number;
  iconNm: string;
  children: Menu[];
  levelNo: number;
  urlPath: string;
  menuLnkgTypeCd: string;
  menuLnkgSn: number;
  qrcd: string;
  useYn: string;
  otptYn: string;
  requiredUrlPath: boolean;
}

export const menuFormSchema = z.object({
  menuKornNm: z.string(),
  menuSubKornNm: z.string().nullish(),
  menuEngNm: z.string().nullish(),
  menuSubEngNm: z.string().nullish(),
  levelNo: z.number(),
  urlPath: z.string().nullish(),
  iconNm: z.string().nullish(),
  menuLnkgTypeCd: z.string().nullish(),
  menuLnkgSn: z.number().nullish(),
  otptYn: z.string().nullish(),
  prntMenuCd: z.number().nullish(),
  sortSeq: z.number(),
  evlUseYn: z.string().nullish(),
  qrcd: z.string().nullish(),
  useYn: z.string().nullish(),
});

export type MenuFormData = z.infer<typeof menuFormSchema>;

export interface MenuService {
  getMenuList: (siteId: string) => Promise<Menu[]>;
  modifyMenu: (menuCd: number, data: MenuFormData) => Promise<void>;
}

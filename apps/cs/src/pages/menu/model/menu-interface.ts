import { z } from "zod";

export const MENU_TYPE = {
  EMPTY: "EMPTY",
  CONTENTS: "CONTENTS",
  BOARD: "BOARD",
  INSIDE: "INSIDE",
  OUTSIDE: "OUTSIDE",
  BOTTOM: "BOTTOM",
} as const;

export type MenuType = (typeof MENU_TYPE)[keyof typeof MENU_TYPE];

export interface TreeMenu {
  menuCd?: number;
  name?: string;
  sortSeq?: number;
  parentId?: number | null;
  levelNo?: number;
  icon?: string;
  children?: TreeMenu[];
}

export interface Menu extends Omit<TreeMenu, "name" | "icon" | "children"> {
  menuKornNm: string;
  menuEngNm: string;
  iconNm: string;
  children: Menu[];
  urlPath: string;
  menuLnkgTypeCd: string;
  menuLnkgSn: number;
  qrcd: string;
  useYn: string;
  otptYn: string;
  requiredUrlPath: boolean;
}

export const menuFormSchema = z.object({
  siteId: z.string(),
  menuKornNm: z.string(),
  menuSubKornNm: z.string().nullish(),
  menuEngNm: z.string().nullish(),
  menuSubEngNm: z.string().nullish(),
  levelNo: z.number(),
  urlPath: z.string().nullish(),
  iconNm: z.string().nullish(),
  menuLnkgTypeCd: z.enum([
    MENU_TYPE.EMPTY,
    MENU_TYPE.CONTENTS,
    MENU_TYPE.BOARD,
    MENU_TYPE.INSIDE,
    MENU_TYPE.OUTSIDE,
    MENU_TYPE.BOTTOM,
  ]),
  menuLnkgSn: z.number().nullish(),
  otptYn: z.enum(["Y", "N"]).default("Y"),
  prntMenuCd: z.number().nullish(),
  sortSeq: z.number(),
  evlUseYn: z.enum(["Y", "N"]).nullish(),
  qrcd: z.string().nullish(),
  useYn: z.enum(["Y", "N"]).default("Y"),
});

export type MenuFormData = z.infer<typeof menuFormSchema>;

export interface MenuService {
  getMenuList: (siteId: string) => Promise<Menu[]>;
  modifyMenu: (siteId: string, data: TreeMenu[]) => Promise<void>;
}

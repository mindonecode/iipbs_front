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
  modifyMenu: (menuCd: number, data: MenuFormData) => Promise<void>;
}

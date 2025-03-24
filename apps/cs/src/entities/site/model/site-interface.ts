import { z } from "zod";
import type { IPageableParams, PageableList } from "@/shared/model";

export interface ISiteParams extends IPageableParams {
  siteNm?: string;
  siteKndCd?: string;
  useYn?: string;
}

export interface ISite {
  siteId: string;
  siteNm: string;
  siteKindCode: string;
  bscSiteYn: string;
  siteAddr: string;
  useYn: string;
  regDt: string;
  rgTrNm: string;
}

export interface ISiteDetail extends SiteFormData {
  siteId: string;
  siteKindNm: string;
  basicSiteYn: string;
  faxNumber: string;
  regDt: string;
  rgTr: string;
  mdfcnDt: string;
  mdFr: string;
  rgTrNm: string;
  mdFrNm: string;
}

export const siteFormSchema = z.object({
  siteId: z.string().max(2).nonempty(),
  siteNm: z.string().max(100).nonempty(),
  siteExpln: z.string().max(1000).nullable(),
  siteKndCd: z.string().max(10).nonempty(),
  siteAddr: z.string().max(2000).nullable(),
  faxNo: z.string().max(100).nullable(),
  telNo: z.string().max(1000).nullable(),
  lwndCn: z.string().max(2000).nullable(),
  bscSiteYn: z.string(),
  bkmkIcon: z.string().max(100).nullable(),
  useYn: z.string(),
  siteSkn: z.string().max(10).nullable(),
});

export type SiteFormData = z.infer<typeof siteFormSchema>;
export type SiteList = PageableList<ISite[]>;

export interface SiteService {
  getSiteList(params: ISiteParams): Promise<SiteList>;
  siteDetail(siteId: string): Promise<ISiteDetail>;
  modifySite(siteId: string, data: SiteFormData): Promise<void>;
  createSite(data: SiteFormData): Promise<void>;
}

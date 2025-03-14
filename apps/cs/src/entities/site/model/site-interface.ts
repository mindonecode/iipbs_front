import { z } from "zod";

export interface ISiteParams {
  siteNm: string;
  siteKndCd: string;
  useYn: string;
  page: number;
  size: number;
  sort: string[];
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

export interface ISiteInfo {
  totalPages: number;
  totalElements: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  content: ISite[];
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
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
  siteId: z.string().max(2),
  siteNm: z.string().max(100),
  siteExpln: z.string().max(1000).optional(),
  siteKndCd: z.string().max(10),
  siteAddr: z.string().max(2000).optional(),
  faxNo: z.string().max(100).optional(),
  telNo: z.string().max(1000).optional(),
  lwndCn: z.string().max(2000).optional(),
  bscSiteYn: z.string().optional(),
  bkmkIcon: z.string().max(100).optional(),
  useYn: z.string().optional(),
  siteSkn: z.string().max(10).optional(),
});

export type SiteFormData = z.infer<typeof siteFormSchema>;

export interface SiteService {
  siteInfo(query: ISiteParams): Promise<ISiteInfo>;
  siteDetail(siteId: string): Promise<ISiteDetail>;
  modifySite(siteId: string, data: SiteFormData): Promise<void>;
}

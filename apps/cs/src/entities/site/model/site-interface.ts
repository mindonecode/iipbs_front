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

export interface ISiteData {
  siteNm: string;
  siteExpln: string;
  siteKndCd: string;
  siteAddr: string;
  faxNo: string;
  telNo: string;
  lwndCn: string;
  bscSiteYn: string;
  bkmkIcon: string;
  useYn: string;
  siteSkn: string;
}

export interface ISiteDetail extends ISiteData {
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

export interface SiteService {
  siteInfo(query: ISiteParams): Promise<ISiteInfo>;
  siteDetail(siteId: string): Promise<ISiteDetail>;
  modifySite(siteId: string, data: ISiteData): Promise<void>;
}

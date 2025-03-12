export interface ISiteQuery {
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

export interface ISiteDetail {
  siteId: string;
  siteNm: string;
  siteExpln: string;
  siteKndCd: string;
  siteKindNm: string;
  siteAddr: string;
  faxNumber: string;
  telNo: string;
  lwndCn: string;
  basicSiteYn: string;
  bkmkIcon: string;
  useYn: string;
  siteSkn: string;
  regDt: string;
  rgTr: string;
  mdfcnDt: string;
  mdFr: string;
  rgTrNm: string;
  mdFrNm: string;
}

export interface SiteService {
  siteInfo(query: ISiteQuery): Promise<ISiteInfo>;
  siteDetail(siteId: string): Promise<ISiteDetail>;
}

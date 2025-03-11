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
  useYn: string;
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

export interface SiteService {
  siteInfo(query: ISiteQuery): Promise<ISiteInfo>;
}

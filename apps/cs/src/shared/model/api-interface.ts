interface SortConfig {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

interface PageableConfig {
  sort: SortConfig;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface PageableList<T> {
  content: T;
  pageable: PageableConfig;
  sort: SortConfig;
  totalPages: number;
  totalElements: number;
  number: number;
  numberOfElements: number;
  size: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface IPageableParams {
  page?: number;
  size?: number;
  sort?: string[];
}

import { z } from "zod";

export const ipSchema = z.object({
  mngNo: z.number().nullish(),
  siteId: z.string(),
  ipAddr: z.string().nonempty(),
  prmYn: z.string(),
  mode: z.string(),
});

export const ipFormSchema = z.object({
  ips: z.array(ipSchema),
});

export type IP = z.infer<typeof ipSchema>;
export type IPFormData = z.infer<typeof ipFormSchema>;

export interface IpList {
  content: IP[];
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
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IpService {
  getIpList(): Promise<IpList>;
  saveIpList(body: IP[]): Promise<void>;
}

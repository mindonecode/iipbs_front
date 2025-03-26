import { z } from "zod";
import type { IPageableParams, PageableList } from "@/shared/model";

export interface IIpParams extends IPageableParams {
  siteId: string;
  ipAddr?: string;
  prmYn?: string;
}

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
export type IpList = PageableList<IP[]>;

export interface IpService {
  getIpList(params: IIpParams): Promise<IpList>;
  saveIpList(body: IP[]): Promise<void>;
}

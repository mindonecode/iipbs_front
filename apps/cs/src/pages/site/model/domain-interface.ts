import { z } from "zod";
import type { IPageableParams, PageableList } from "@/shared/model";

export interface IDomainParams extends IPageableParams {
  keywordType?: string;
  keyword?: string;
  siteId?: string;
  useYn?: string;
}

export const domainSchema = z.object({
  siteDmnNo: z.number().nullish(),
  siteId: z.string(),
  dmnAddr: z.string().nonempty(),
  useYn: z.string(),
  rprsDmnYn: z.string(),
  mode: z.string(),
});

export const domainFormSchema = z.object({
  domains: z.array(domainSchema),
});

export type Domain = z.infer<typeof domainSchema>;
export type DomainFormData = z.infer<typeof domainFormSchema>;
export type DomainList = PageableList<Domain[]>;

export interface DomainService {
  getDomainList(params: IDomainParams): Promise<DomainList>;
  saveDomainList(body: Domain[]): Promise<void>;
}

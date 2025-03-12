import { client } from "@/shared/api/client";
import { ENDPOINT } from "@/shared/config/api";
import type {
  ISiteQuery,
  ISiteInfo,
  SiteService,
  ISiteDetail,
} from "../model/site-interface";

export class SiteApiService implements SiteService {
  public async siteInfo(query: ISiteQuery): Promise<ISiteInfo> {
    const response = await client.get<ISiteInfo>(
      `${ENDPOINT.CMS_SERVICE.SITES}`,
      { params: query },
    );
    return response.data;
  }

  public async siteDetail(siteId: string): Promise<ISiteDetail> {
    const response = await client.get<ISiteDetail>(
      `${ENDPOINT.CMS_SERVICE.SITES}/${siteId}`,
    );
    return response.data;
  }
}

export const SiteApi = new SiteApiService();

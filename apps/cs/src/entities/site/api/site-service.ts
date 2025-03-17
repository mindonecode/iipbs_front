import { client } from "@/shared/api/client";
import { ENDPOINT } from "@/shared/config/api";
import type {
  ISiteQuery,
  ISiteInfo,
  SiteService,
} from "../model/site-interface";

export class SiteApiService implements SiteService {
  public async siteInfo(query: ISiteQuery): Promise<ISiteInfo> {
    const response = await client.get<ISiteInfo>(
      `${ENDPOINT.CMS_SERVICE.SITES}`,
      { params: query },
    );

    return response.data;
  }
}

export const SiteApi = new SiteApiService();

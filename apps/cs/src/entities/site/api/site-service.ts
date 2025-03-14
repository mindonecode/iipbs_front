import { client } from "@/shared/api/client";
import { ENDPOINT } from "@/shared/config/api";
import type {
  ISiteInfo,
  SiteService,
  ISiteDetail,
  ISiteParams,
  SiteFormData,
} from "../model/site-interface";

export class SiteApiService implements SiteService {
  public async siteInfo(params: ISiteParams): Promise<ISiteInfo> {
    const response = await client.get<ISiteInfo>(
      `${ENDPOINT.CMS_SERVICE.SITES}`,
      { params },
    );
    return response.data;
  }

  public async siteDetail(siteId: string): Promise<ISiteDetail> {
    const response = await client.get<ISiteDetail>(
      `${ENDPOINT.CMS_SERVICE.SITES}/${siteId}`,
    );
    return response.data;
  }

  public async modifySite(siteId: string, data: SiteFormData): Promise<void> {
    const response = await client.put<void>(
      `${ENDPOINT.CMS_SERVICE.SITES}/${siteId}`,
      data,
    );
    return response.data;
  }
}

export const SiteApi = new SiteApiService();

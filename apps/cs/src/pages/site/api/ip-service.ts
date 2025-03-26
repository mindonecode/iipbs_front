import { client } from "@/shared/api";
import { ENDPOINT } from "@/shared/config";
import type { IIpParams, IP, IpList, IpService } from "../model/ip-interface";

export class IpApiService implements IpService {
  public async getIpList(params: IIpParams): Promise<IpList> {
    const response = await client.get<IpList>(`${ENDPOINT.CMS_SERVICE.IPS}`, {
      params,
    });
    return response.data;
  }

  public async saveIpList(body: IP[]): Promise<void> {
    const response = await client.post<void>(
      `${ENDPOINT.CMS_SERVICE.IPS}`,
      body,
    );
    return response.data;
  }
}

export const IpApi = new IpApiService();

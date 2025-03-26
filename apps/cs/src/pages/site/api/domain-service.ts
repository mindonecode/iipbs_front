import { client } from "@/shared/api";
import { ENDPOINT } from "@/shared/config";
import type {
  Domain,
  DomainService,
  DomainList,
  IDomainParams,
} from "../model/domain-interface";

export class DomainApiService implements DomainService {
  public async getDomainList(params: IDomainParams): Promise<DomainList> {
    const response = await client.get<DomainList>(
      `${ENDPOINT.CMS_SERVICE.DOMAINS}`,
      { params },
    );
    return response.data;
  }

  public async saveDomainList(body: Domain[]): Promise<void> {
    const response = await client.post<void>(
      `${ENDPOINT.CMS_SERVICE.DOMAINS}`,
      body,
    );
    return response.data;
  }
}

export const DomainApi = new DomainApiService();

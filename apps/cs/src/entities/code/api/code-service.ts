import { client } from "@/shared/api/client";
import { ENDPOINT } from "@/shared/config/api";
import type { CodeService, ICode } from "../model/code-interface";

export class CodeApiService implements CodeService {
  public async getCode(upCd: string): Promise<ICode[]> {
    const response = await client.get<ICode[]>(
      `${ENDPOINT.CMS_SERVICE.CODE}/${upCd}`,
    );
    return response.data;
  }
}

export const CodeApi = new CodeApiService();

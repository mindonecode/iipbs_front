import { client } from "./client";
import { ENDPOINT } from "../config";

export interface SiteInfo {
  siteId: string;
  siteNm: string;
  siteExpln: string;
  siteKndCd: string;
  siteKindNm: string;
  siteAddr: string;
  faxNumber: string;
  telNo: string;
  lwndCn: string;
  basicSiteYn: string;
  bkmkIcon: string;
  useYn: string;
  siteSkn: string;
  regDt: string;
  rgTr: string;
  mdfcnDt: string;
  mdFr: string;
  rgTrNm: string;
  mdFrNm: string;
}

export const getSiteInfo = async (siteId: string) => {
  const response = await client.get<SiteInfo>(
    `${ENDPOINT.CMS_SERVICE.SITES}/${siteId}`,
  );
  return response.data;
};

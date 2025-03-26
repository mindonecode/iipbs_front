import { Client } from "@common/network";
import { BASE_URL, SITE_ID } from "../config";

export const client = Client.getInstance({
  baseURL: BASE_URL,
  siteId: SITE_ID,
});

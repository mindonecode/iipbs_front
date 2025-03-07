import { Client } from "@common/network";
import { SERVER_API_URL, SITE_ID } from "../config";

export const client = Client.getInstance({
  baseURL: SERVER_API_URL as string,
  siteId: SITE_ID as string,
});

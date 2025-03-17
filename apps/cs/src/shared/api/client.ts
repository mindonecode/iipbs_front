import { Client } from "@common/network";
import { BASE_URL } from "../config/api";
import { SITE_ID } from "../config/env";

export const client = Client.getInstance({
  baseURL: BASE_URL,
  siteId: SITE_ID,
});

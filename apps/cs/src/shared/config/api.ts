import { PROXY_HOST } from "./env";

export const BASE_URL = `${PROXY_HOST}/server`;

export const ENDPOINT = {
  USER_SERVICE: {
    LOGIN: "/user-service/login",
    USERS: "/user-service/api/v1/users",
    SILENT_REFRESH: "/user-service/api/v1/users/token/refresh",
  },
  CMS_SERVICE: {
    SITES: "/cms-service/api/v1/sites",
    CODE: "/cms-service/api/v1/code/cache",
    IPS: "/cms-service/api/v1/site-ips",
    DOMAINS: "/cms-service/api/v1/site-dmns",
    MENUS: "/cms-service/api/v1/menus",
  },
};

export const JWT_EXPIRATION_TIME = 1800000;

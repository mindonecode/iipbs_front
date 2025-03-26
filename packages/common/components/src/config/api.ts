import { PROXY_HOST } from "./env";

export const BASE_URL = `${PROXY_HOST}/server`;

export const ENDPOINT = {
  CMS_SERVICE: {
    MENU_ROLES: "/cms-service/api/v1/menu-roles",
    SITES: "/cms-service/api/v1/sites",
  },
  USER_SERVICE: {
    USERS: "/user-service/api/v1/users",
  },
};

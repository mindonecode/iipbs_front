import { PROXY_HOST } from "./env";

export const BASE_URL = `${PROXY_HOST}/server`;

export const ENDPOINT = {
  USER_SERVICE: {
    LOGIN: "/user-service/login",
    USERS: "/user-service/api/v1/users",
    SILENT_REFRESH: "/user-service/api/v1/users/token/refresh",
  },
};

export const JWT_EXPIRATION_TIME = 1800000;

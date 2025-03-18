import { PROXY_HOST } from "./env";

export const BASE_URL = `${PROXY_HOST}/server`;

export const ENDPOINT = {
  USER_SERVICE: {
    USERS: "/user-service/api/v1/users",
  },
};

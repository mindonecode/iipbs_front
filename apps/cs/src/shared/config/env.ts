export const PORT = process.env.NEXT_PUBLIC_PORT || "3000";
export const PROXY_HOST =
  process.env.NEXT_PUBLIC_PROXY_HOST || `http://localhost:${PORT}`;

export const SERVER_API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;
export const SITE_ID = process.env.NEXT_PUBLIC_SITE_ID || "CS";

export const CLAIM_NAME = process.env.NEXT_PUBLIC_CLAIM_NAME || "Authorization";
export const ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN || "access-token";
export const REFRESH_TOKEN =
  process.env.NEXT_PUBLIC_REFRESH_TOKEN || "refresh-token";
export const AUTH_USER_ID = process.env.NEXT_PUBLIC_AUTH_USER_ID || "token-id";

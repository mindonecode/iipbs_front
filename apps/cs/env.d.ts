/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PORT: string;
  readonly VITE_PROXY_HOST: string;
  readonly VITE_SERVER_API_URL: string;
  readonly VITE_SITE_ID: string;
  readonly VITE_CLAIM_NAME: string;
  readonly VITE_ACCESS_TOKEN: string;
  readonly VITE_REFRESH_TOKEN: string;
  readonly VITE_AUTH_USER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

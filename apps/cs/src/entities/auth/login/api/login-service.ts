import { AxiosError } from "axios";
import { ENDPOINT, JWT_EXPIRATION_TIME } from "@/shared/config/api";
import { ACCESS_TOKEN, AUTH_USER_ID, CLAIM_NAME } from "@/shared/config/env";
import type { LoginService, ILogin } from "../model/login-interface";
import { tokenManager } from "../lib/token-manager";

export class LoginApiService implements LoginService {
  private static instance: LoginApiService;

  private constructor() {}

  public static getInstance(): LoginApiService {
    if (!LoginApiService.instance) {
      LoginApiService.instance = new LoginApiService();
    }
    return LoginApiService.instance;
  }

  public async login(payload: ILogin): Promise<void> {
    try {
      const response = await fetch(`/api/proxy${ENDPOINT.USER_SERVICE.LOGIN}`, {
        method: "POST",
        body: JSON.stringify({
          userId: payload.userId,
          password: payload.password,
        }),
      });

      const data = await response.json();
      const accessToken = data[ACCESS_TOKEN];
      const tokenId = data[AUTH_USER_ID];

      if (!accessToken || !tokenId) {
        throw new Error("[login] Missing required authentication tokens");
      }

      tokenManager.setToken(CLAIM_NAME, accessToken);
      tokenManager.setToken(AUTH_USER_ID, tokenId);
      tokenManager.setupRefreshTimer(
        () => this.silentRefresh(),
        JWT_EXPIRATION_TIME,
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          `Login failed: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }

  public async silentRefresh(): Promise<void> {
    try {
      const response = await fetch(
        `/api/proxy${ENDPOINT.USER_SERVICE.SILENT_REFRESH}`,
        { method: "PUT" },
      );

      const data = await response.json();
      const accessToken = data[ACCESS_TOKEN];
      const tokenId = data[AUTH_USER_ID];

      if (!accessToken || !tokenId) {
        throw new Error(
          "[silentRefresh] Missing required authentication tokens",
        );
      }

      tokenManager.setToken(CLAIM_NAME, accessToken);
      tokenManager.setToken(AUTH_USER_ID, tokenId);
    } catch (error) {
      console.warn("Token has expired, logging out.");
      tokenManager.clearAuthToken();
      if (error instanceof AxiosError) {
        throw new Error(
          `Silent refresh failed: ${error.response?.data?.message || error.message}`,
        );
      }
      throw error;
    }
  }
}

export const LoginApi = LoginApiService.getInstance();

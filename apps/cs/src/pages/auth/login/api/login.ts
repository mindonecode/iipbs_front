import { AxiosError } from "axios";
import { client } from "@/shared/api";
import {
  ACCESS_TOKEN,
  CLAIM_NAME,
  ENDPOINT,
  JWT_EXPIRATION_TIME,
  REFRESH_TOKEN,
  TOKEN_ID,
} from "@/shared/config";
import { tokenManager } from "../lib/token-manager";
import type { LoginService, ILogin } from "../model/login";

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
      const response = await client.post(ENDPOINT.USER_SERVICE.LOGIN, {
        userId: payload.userId,
        password: payload.password,
      });

      const accessToken = response.headers[ACCESS_TOKEN];
      const refreshToken = response.headers[REFRESH_TOKEN];
      const tokenId = response.headers[TOKEN_ID];

      if (!refreshToken || !accessToken || !tokenId) {
        throw new Error("Missing required authentication tokens");
      }

      tokenManager.setToken(ACCESS_TOKEN, accessToken);
      tokenManager.setToken(TOKEN_ID, tokenId);
      tokenManager.setRefreshToken(refreshToken);
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
      const refreshToken = tokenManager.getRefreshToken();
      if (!refreshToken) {
        throw new Error("No refresh token available");
      }

      tokenManager.setToken(CLAIM_NAME, refreshToken);

      const response = await client.put(ENDPOINT.USER_SERVICE.SILENT_REFRESH);

      const accessToken = response.headers[ACCESS_TOKEN];
      const tokenId = response.headers[TOKEN_ID];

      if (!accessToken || !tokenId) {
        throw new Error("Missing required authentication tokens");
      }

      tokenManager.setToken(ACCESS_TOKEN, accessToken);
      tokenManager.setToken(TOKEN_ID, tokenId);
    } catch (error) {
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

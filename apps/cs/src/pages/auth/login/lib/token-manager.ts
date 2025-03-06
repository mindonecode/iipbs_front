import axios from "axios";
import Cookies from "js-cookie";
import { CLAIM_NAME, REFRESH_TOKEN, TOKEN_ID } from "@/shared/config";

export class TokenManager {
  private static instance: TokenManager;
  private refreshTimer: NodeJS.Timeout | null = null;

  private constructor() {}

  public static getInstance(): TokenManager {
    if (!TokenManager.instance) {
      TokenManager.instance = new TokenManager();
    }
    return TokenManager.instance;
  }

  public setToken(key: string, value: string): void {
    axios.defaults.headers.common[key] = value;
  }

  public setRefreshToken(token: string): void {
    Cookies.set(REFRESH_TOKEN, token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  }

  public getRefreshToken(): string | undefined {
    return Cookies.get(REFRESH_TOKEN);
  }

  public setupRefreshTimer(
    callback: () => Promise<void>,
    expirationTime: number,
  ): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }

    this.refreshTimer = setTimeout(() => {
      callback().catch((error) => {
        console.error("Silent refresh failed:", error);
        this.clearAuth();
      });
    }, expirationTime - 60000);
  }

  public clearAuth(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    Cookies.remove(REFRESH_TOKEN);
    delete axios.defaults.headers.common[CLAIM_NAME];
    delete axios.defaults.headers.common[TOKEN_ID];
  }
}

export const tokenManager = TokenManager.getInstance();

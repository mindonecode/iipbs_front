import { AUTH_USER_ID, CLAIM_NAME } from "@/shared/config";
import { getCookie, setCookie, removeCookie } from "@/shared/lib";

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

  public getToken(key: string): string | undefined {
    return getCookie(key);
  }

  public setToken(key: string, value: string): void {
    setCookie(key, value, {
      secure: window.location.protocol === "https:",
      sameSite: "lax",
    });
  }

  public removeToken(key: string): void {
    removeCookie(key);
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
        this.clearAuthToken();
      });
    }, expirationTime - 60000);
  }

  public clearAuthToken(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }

    this.removeToken(CLAIM_NAME);
    this.removeToken(AUTH_USER_ID);
  }
}

export const tokenManager = TokenManager.getInstance();

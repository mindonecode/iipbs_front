import { AUTH_USER_ID, CLAIM_NAME } from "@/shared/config/env";
import { setToken, removeToken } from "@/shared/lib/cookie";

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
    setToken(key, value, {
      secure: window.location.protocol === "https:",
      sameSite: "lax",
    });
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

    removeToken(CLAIM_NAME);
    removeToken(AUTH_USER_ID);
  }
}

export const tokenManager = TokenManager.getInstance();

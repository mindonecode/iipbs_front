"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/shared/api";
import type { IUserInfo } from "@/shared/store";
import { getCookie, useUserStore } from "@/shared/lib";
import { ENDPOINT, AUTH_USER_ID } from "@/shared/config";
import { LoginApi } from "../api/login-service";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { userInfo, setUserInfo } = useUserStore((state) => state);

  async function authCheck() {
    const userId = getCookie(AUTH_USER_ID);
    if (!userId) {
      throw new Error("Missing required authentication tokens");
    }

    const response = await client.get<IUserInfo>(
      `${ENDPOINT.USER_SERVICE.USERS}/${userId}`,
    );
    if (!userInfo) setUserInfo(response.data);
  }

  useEffect(() => {
    (async () => {
      try {
        await authCheck();
      } catch (error) {
        console.error(error);

        try {
          await LoginApi.silentRefresh();
          await authCheck();
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          setUserInfo(null);
          router.push("/auth/login");
        }
      }
    })();
  }, []);

  return <>{children}</>;
};

export { AuthWrapper };

"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { client } from "@/shared/api";
import { ENDPOINT, AUTH_USER_ID } from "@/shared/config";
import { getCookie, useUserStore } from "@/shared/lib";
import type { IUserInfo } from "@/shared/store";
import { LoginApi } from "../api/login-service";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { setUserInfo } = useUserStore((state) => state);

  useQuery({
    queryKey: [ENDPOINT.USER_SERVICE.USERS],
    queryFn: async () => {
      try {
        const userId = getCookie(AUTH_USER_ID);

        if (!userId) {
          throw new Error("Missing required authentication tokens");
        }

        const response = await client.get<IUserInfo>(
          `${ENDPOINT.USER_SERVICE.USERS}/${userId}`,
        );
        setUserInfo(response.data);
        return response;
      } catch (error) {
        console.error(error);
        try {
          await LoginApi.silentRefresh();
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          setUserInfo(null);
          router.push("/auth/login");
        }
      }
    },
  });

  return <>{children}</>;
};

export { AuthWrapper };

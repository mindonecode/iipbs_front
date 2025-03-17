"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";
import { client } from "@/shared/api";
import { ENDPOINT, AUTH_USER_ID } from "@/shared/config";
import { getCookie } from "@/shared/lib";
import { LoginApi } from "../api/login-service";

interface IUserInfo {
  regDt: string;
  mdfcnDt: string;
  rgtr: string;
  mdfr: string;
  userUnqId: string;
  userId: string;
  userName: string;
  email: string;
  encryptedPassword: string;
  refreshToken: string;
  userStateCode: string;
  lastLoginDate: string;
  loginFailCount: number;
  pswdHnt: string;
  pswdAns: string;
  mphn: string;
  telno: string;
  zip: string;
  addr: string;
  daddr: string;
  laeSeCd: string;
  ogdpSeCd: string;
  aprvYn: string;
  autzrId: string;
  expryYmd: string;
  lastPswdChgDt: string;
  googleId: string;
  kakaoId: string;
  naverId: string;
  isSocialUser: boolean;
  hasPassword: boolean;
}

export interface AuthContextType {
  userInfo: IUserInfo | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<IUserInfo | null>(null);

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

  const authContextValue: AuthContextType = {
    userInfo,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

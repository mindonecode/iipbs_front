import { ENDPOINT } from "../config";
import { client } from "./client";

export interface IUser {
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

export const getUserInfo = async (userUniqId: string) => {
  const response = await client.get<IUser>(
    `${ENDPOINT.USER_SERVICE.USERS}/${userUniqId}`,
  );
  return response.data;
};

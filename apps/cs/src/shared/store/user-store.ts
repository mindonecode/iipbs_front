import { createStore } from "zustand/vanilla";

export interface IUserInfo {
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

export type UserState = {
  userInfo: IUserInfo | null;
};

export type UserActions = {
  setUserInfo: (userInfo: IUserInfo | null) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  userInfo: null,
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    setUserInfo: (userInfo: IUserInfo | null) => set(() => ({ userInfo })),
  }));
};

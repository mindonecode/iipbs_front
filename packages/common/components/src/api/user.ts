import { useMutation } from "@tanstack/react-query";
import { ENDPOINT } from "../config";
import { client } from "./client";

export interface UserInfo {
  userName: string;
  lastLoginDate: string;
}

export const useUsersMutation = () => {
  return useMutation({
    mutationFn: ({ userUniqId }: { userUniqId: string }) =>
      client.put<UserInfo>(`${ENDPOINT.USER_SERVICE.USERS}/${userUniqId}`),
  });
};

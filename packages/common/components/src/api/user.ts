import { useMutation } from "@tanstack/react-query";
import { client } from "../api/client";
import { ENDPOINT } from "../config/api";

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

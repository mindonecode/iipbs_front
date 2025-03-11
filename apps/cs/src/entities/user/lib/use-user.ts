import { useQuery } from "@tanstack/react-query";
import { UserApi } from "../api/user-service";
import { useCookie } from "@/shared/providers";
import { ENDPOINT } from "@/shared/config/api";
import { AUTH_USER_ID } from "@/shared/config/env";

const useUser = () => {
  const { getToken } = useCookie();
  const { data } = useQuery({
    queryKey: [ENDPOINT.USER_SERVICE.USERS],
    queryFn: () =>
      UserApi.userInfo({
        userUniqId: getToken(AUTH_USER_ID) ?? "",
      }),
  });

  return { userInfo: data };
};

export { useUser };

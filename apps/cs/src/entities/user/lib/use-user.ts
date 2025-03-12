import { useQuery } from "@tanstack/react-query";
import { ENDPOINT } from "@/shared/config/api";
import { AUTH_USER_ID } from "@/shared/config/env";
import { useCookie } from "@/shared/provider";
import { UserApi } from "../api/user-service";

const useUser = () => {
  const { getCookie } = useCookie();
  const { data } = useQuery({
    queryKey: [ENDPOINT.USER_SERVICE.USERS],
    queryFn: () =>
      UserApi.userInfo({
        userUniqId: getCookie(AUTH_USER_ID) ?? "",
      }),
  });

  return { userInfo: data };
};

export { useUser };

import { client } from "@/shared/api";
import { getToken } from "@/shared/lib/cookie";
import { AUTH_USER_ID, CLAIM_NAME, ENDPOINT } from "@/shared/config";
import type { IUser, IUserInfo, UserService } from "../model/user";

export class UsersApiService implements UserService {
  public async userInfo(payload: IUserInfo): Promise<IUser> {
    const response = await client.get<IUser>(
      `${ENDPOINT.USER_SERVICE.USERS}/${payload.userUniqId}`,
      {
        headers: {
          [CLAIM_NAME]: `${getToken(CLAIM_NAME)}`,
          [AUTH_USER_ID]: `${getToken(AUTH_USER_ID)}`,
        },
      },
    );

    return response.data;
  }
}

export const UserApi = new UsersApiService();

import { client } from "@/shared/api/client";
import { ENDPOINT } from "@/shared/config/api";
import type { IUser, IUserInfo, UserService } from "../model/user-interface";

export class UsersApiService implements UserService {
  public async userInfo(payload: IUser): Promise<IUserInfo> {
    const response = await client.get<IUserInfo>(
      `${ENDPOINT.USER_SERVICE.USERS}/${payload.userUniqId}`,
    );

    return response.data;
  }
}

export const UserApi = new UsersApiService();

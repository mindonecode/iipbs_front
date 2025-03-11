import { client } from "@/shared/api";
import { ENDPOINT } from "@/shared/config";
import type { IUser, IUserInfo, UserService } from "../model/user-interface";

export class UsersApiService implements UserService {
  public async userInfo(payload: IUserInfo): Promise<IUser> {
    const response = await client.get<IUser>(
      `${ENDPOINT.USER_SERVICE.USERS}/${payload.userUniqId}`,
    );

    return response.data;
  }
}

export const UserApi = new UsersApiService();

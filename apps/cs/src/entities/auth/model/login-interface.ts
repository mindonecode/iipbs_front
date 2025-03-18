export interface ILogin {
  userId: string;
  password: string;
}

export interface LoginService {
  login(payload: ILogin): Promise<void>;
  silentRefresh(): Promise<void>;
}

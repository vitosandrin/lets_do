import { IUser } from "./user";
export interface IAuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  message: string | null;
  user: IUser | {};
  token: string | null;
}

export interface IUser {
  _id?: string;
  name?: string;
  password?: string;
  email?: string;
  rePassword?: string;
  token?: string | null;
}
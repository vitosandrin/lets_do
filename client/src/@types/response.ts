import { IProject } from "./project";
import { IUser } from "./user";

export interface ILimitedResult {
  limit?: number;
  page?: number;
  result?: IProject[];
  total?: number;
}

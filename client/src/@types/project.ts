import { ITask } from "./task";
import { IUser } from "./user";

export interface IProject {
  _id?: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  user: IUser;
  tasks?: ITask[];
  __v?: string;
}


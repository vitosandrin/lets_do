import { model, Schema, Types } from "mongoose";
import IUser from "./users";
interface ITask {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  completed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export default interface IProject {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  user: IUser;
  tasks: ITask[];
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema<IProject>(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
    tasks: [
      {
        name: String,
        description: String,
        completed: Boolean,
        createdAt: Date,
        updatedAt: Date,
      },
    ],
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const ProjectModel = model<IProject>("projects", schema, "projects");

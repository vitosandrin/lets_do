import { model, Schema, Types } from "mongoose";
import IProject from "./projects";
export default interface IUser {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    }
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUser>("users", schema, "users");

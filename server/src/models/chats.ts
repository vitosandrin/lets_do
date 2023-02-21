import { model, Schema, Types } from "mongoose";
import IProject from "./projects";
import IUser from "./users";
export default interface IChat {
  _id?: Types.ObjectId;
  project: IProject;
  user?: IUser;
  content?: string;
  createdAt?: Date;
}

const schema = new Schema<IChat>(
  {
    project: {
      type: Types.ObjectId,
      ref: "projects",
    },
    user: {
      type: Types.ObjectId,
      ref: "users",
    },
    content: String,
    createdAt: Date,
  },
  {
    timestamps: false,
  }
);

export const ChatModel = model<IChat>("chats", schema, "chats");

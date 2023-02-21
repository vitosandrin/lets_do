import { model, Schema, Types } from "mongoose";
import IUser from "./users";

enum TaskPriority {
  High = "high",
  Median = "median",
  Low = "low",
}

interface ITask {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  priority: TaskPriority;
  completed?: boolean;
  scheduleAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
export default interface IProject {
  _id?: Types.ObjectId;
  name: string;
  description: string;
  user: IUser[];
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
    user: [
      {
        type: Types.ObjectId,
        ref: "users",
      },
    ],
    tasks: [
      {
        name: String,
        description: String,
        priority: {
          type: String,
          enum: [TaskPriority.High, TaskPriority.Median, TaskPriority.Low],
        },
        completed: Boolean,
        scheduleAt: Date,
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
    strict: "throw",
  }
);

export const ProjectModel = model<IProject>("projects", schema, "projects");

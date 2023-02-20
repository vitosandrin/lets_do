import { getToken } from "./../../utils/token";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";
import { ITask } from "../../@types/task";

export const createTask = createAsyncThunk(
  "project/createTask",
  async ({ project, tasks }: { project: string; tasks: any }) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.post(`/project/${project}/task`, tasks, config);
    return result.data;
  }
);
export const removeTask = createAsyncThunk(
  "project/removeTask",
  async ({ project, tasks }: { project: string; tasks: any }) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.post(
      `/project/${project}/task/remove`,
      tasks,
      config
    );
    return result.data;
  }
);

export const setCompletedTask = createAsyncThunk(
  "project/setCompletedTask",
  async ({ project, tasks }: { project: string; tasks: any }) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.patch(
      `/project/${project}/task/set-completed`,
      tasks,
      config
    );
    return result.data;
  }
);

export const updateTask = createAsyncThunk(
  "project/updateTask",
  async ({
    project,
    task,
    data,
  }: {
    project?: string;
    task?: string;
    data?: ITask;
  }) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.patch(
      `/project/${project}/task/${task}`,
      data,
      config
    );
    return result.data;
  }
);

export const getOneTask = createAsyncThunk(
  "project/getOneTask",
  async ({ project, task }: { project: string; task: string }) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.get(`/project/${project}/task/${task}`, config);
    return result.data;
  }
);

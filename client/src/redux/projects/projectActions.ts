import { getToken } from "./../../utils/token";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";

export const getAllProjects = createAsyncThunk(
  "project/getAll",
  async ({ page, limit }: { page: number; limit?: number }) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.get(
      `/project/?page=${page}&limit=${limit || 10}`,
      config
    );
    return result.data;
  }
);

export const getOneProject = createAsyncThunk(
  "project/getOne",
  async (id: string) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.get(`/project/${id}`, config);
    return result.data;
  }
);

export const createProject = createAsyncThunk(
  "project/create",
  async (project: any) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.post(`/project`, project, config);
    return result.data;
  }
);

export const updateProject = createAsyncThunk(
  "project/update",
  async (project: any) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.patch(`/project/${project?._id}`, project, config);
    return result.data;
  }
);

export const removeProject = createAsyncThunk(
  "project/remove",
  async (project: any) => {
    const token = getToken();
    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    };
    const result = await api.post(`/project/remove`, project, config);
    return result.data;
  }
);


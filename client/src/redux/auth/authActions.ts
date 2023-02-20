import { IUser } from "../../@types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/axios";
import { setToken } from "../../utils/token";
export const loginUser = createAsyncThunk("auth/login", async (user: IUser) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const result = await api.post(`/user/login`, user, config);
  setToken(result?.data?.data?.token);
  return result.data;
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: IUser) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await api.post(`/user/register`, user, config);
    setToken(result?.data?.data?.token);
    return result.data;
  }
);

export const updateUser = createAsyncThunk(
  "auth/update",
  async (user: IUser) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await api.patch(`/user/${user?._id}`, user, config);
    setToken(result?.data?.data?.token);
    return result.data;
  }
);

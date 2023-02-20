import { removeToken } from "./../../utils/token";
import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { loginUser, registerUser, updateUser } from "./authActions";
import { IAuthState } from "../../@types/auth";
import { IUser } from "../../@types/user";

const initialState: IAuthState = {
  isLoading: false,
  isAuthenticated: false,
  message: "",
  user: {},
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: IAuthState) => {
      removeToken();
      state.isAuthenticated = false;
      state.user = {};
      state.token = null;
      state.message = "Logout successfully!";
    },
    clearMessage: (state: IAuthState) => {
      state.message = "";
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IAuthState>) => {
    builder.addCase(loginUser.pending, (state: IAuthState) => {
      state.isLoading = true;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.message = action.payload.message;
      }
    );
    builder.addCase(
      loginUser.rejected,
      (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = "Login error!";
      }
    );

    builder.addCase(registerUser.pending, (state: IAuthState) => {
      state.isLoading = true;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action?.payload?.data?.user;
        state.token = action?.payload?.data?.token;
      }
    );
    builder.addCase(
      registerUser.rejected,
      (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        // state.message = action.payload.data.message;
      }
    );

    builder.addCase(updateUser.pending, (state: IAuthState) => {
      state.isLoading = true;
    });
    builder.addCase(
      updateUser.fulfilled,
      (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
      }
    );
    builder.addCase(
      updateUser.rejected,
      (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        // state.message = action.payload.data.message;
      }
    );
  },
});

export const isAuth = (state: { auth: IAuthState }) =>
  state.auth.isAuthenticated;

export const getUser = (state: { auth: IAuthState }): IUser => state.auth.user;
export const getMessage = (state: { auth: IAuthState }): string | null =>
  state.auth.message;

export const { logout, clearMessage } = authSlice.actions;

export default authSlice.reducer;

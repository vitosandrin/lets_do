import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import projectReducer from "./projects/projectSlice";
import toastReducer from "./toastMessage/toastMessageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    toast: toastReducer,
  },
});
export default store;

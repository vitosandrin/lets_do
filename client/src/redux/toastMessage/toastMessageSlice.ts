import { createSlice } from "@reduxjs/toolkit";

interface IToastState {
  message?: string;
  showToast: boolean;
}

const initialState = {
  message: "",
  showToast: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.message = action.payload;
      state.showToast = true;
    },
    hideMessage: (state) => {
      state.showToast = false;
      state.message = "";
    },
  },
});

export const { showMessage, hideMessage } = toastSlice.actions;
export const isShow = (state: { toast: IToastState }): boolean =>
  state.toast.showToast;
export default toastSlice.reducer;

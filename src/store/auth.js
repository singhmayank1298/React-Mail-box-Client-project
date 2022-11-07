import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: "" },
  reducers: {
    responseToken(state, { payload }) {
      state.token = payload;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

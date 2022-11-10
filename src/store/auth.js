import { createSlice } from "@reduxjs/toolkit";

let token = localStorage.getItem("token");
let email = localStorage.getItem("email");
const authSlice = createSlice({
  name: "auth",
  initialState: { token: token, email: email },
  reducers: {
    responseToken(state, { payload }) {
      console.log(payload);
      const convertEmail = payload.email.replace("@", "");
      const newEmail = convertEmail.replace(".", "");
      state.token = payload.id;
      state.email = newEmail;
      localStorage.setItem("email", newEmail);
      localStorage.setItem("token", payload.id);
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;

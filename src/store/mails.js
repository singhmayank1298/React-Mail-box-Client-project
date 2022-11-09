import { createSlice } from "@reduxjs/toolkit";

const mailsSlice = createSlice({
  name: "mails",
  initialState: {},
  reducers: {},
});

export const mailAction = mailsSlice.actions;

export default mailsSlice.reducer;

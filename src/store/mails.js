import { createSlice } from "@reduxjs/toolkit";

const mailsSlice = createSlice({
  name: "mails",
  initialState: { inbox: [] },
  reducers: {
    inboxMailsHandler(state, { payload }) {
      state.inbox = payload;
    },
  },
});

export const mailAction = mailsSlice.actions;

export default mailsSlice.reducer;

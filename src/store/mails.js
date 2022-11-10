import { createSlice } from "@reduxjs/toolkit";

const mailsSlice = createSlice({
  name: "mails",
  initialState: { inbox: [] },
  reducers: {
    inboxMailsHandler(state, { payload }) {
      payload.forEach((element) => {
        state.inbox.push(element);
      });
    },
  },
});

export const mailAction = mailsSlice.actions;

export default mailsSlice.reducer;

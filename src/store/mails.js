import { createSlice } from "@reduxjs/toolkit";

const mailsSlice = createSlice({
  name: "mails",
  initialState: { inbox: [], sent: [], content: false },
  reducers: {
    inboxMailsHandler(state, { payload }) {
      state.inbox = payload;
    },
    sentMailsHandler(state, { payload }) {
      state.sent = payload;
    },
    inboxEditHandler(state, { payload }) {
      const array = state.inbox;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.id === payload) {
          state.inbox[index].read = true;
        }
      }
    },

    inboxDeleteHandler(state, { payload }) {
      const array = state.inbox;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.id === payload) {
          state.inbox.splice(index, 1);
        }
      }
    },
    change(state) {
      state.content = !state.content;
    },
  },
});

export const mailAction = mailsSlice.actions;

export default mailsSlice.reducer;

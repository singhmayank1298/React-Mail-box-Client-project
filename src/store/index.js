import { configureStore } from "@reduxjs/toolkit";
import mailsSlice from "./mails";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    auth: authSlice,
    mail: mailsSlice,
  },
});

export default store;

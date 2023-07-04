import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

/*
export const store = configureStore({
  reducer: { users: userSlice, },
});
*/
export const store = configureStore({
	reducer: { userRedux: userSlice, },
})
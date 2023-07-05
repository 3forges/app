import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: { userRedux: userSlice }, 

	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
})
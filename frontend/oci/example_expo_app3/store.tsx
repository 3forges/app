import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: { userRedux: userSlice }, 
/*
  CONFIG SERIALISATION ERROR HANDLE (todo if needed)
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
*/
})
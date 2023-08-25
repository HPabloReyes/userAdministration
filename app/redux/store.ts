"use client";

import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../redux/features/global/globalSlice";

export const store = configureStore({
  reducer: {
    counter: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

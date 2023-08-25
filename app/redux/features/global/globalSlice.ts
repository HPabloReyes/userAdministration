"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface globalState {
  show: boolean;
}

const initialState: globalState = {
  show: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    isShow: (state) => {
      state.show = !state.show;
    },
  },
});

export const { isShow } = globalSlice.actions;

export default globalSlice.reducer;

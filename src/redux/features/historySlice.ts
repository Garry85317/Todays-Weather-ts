import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Location } from "../type";

const initialState: Location[] = JSON.parse(
  localStorage.getItem("history") || "[]"
);

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<Location>) => {
      state.push(action.payload);
    },
    deleteHistory: (state, action: PayloadAction<Location[]>) => {
      return [...action.payload];
    },
  },
});

export const { setHistory, deleteHistory } = historySlice.actions;
export default historySlice.reducer;

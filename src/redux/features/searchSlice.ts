import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";

import { Location } from "../type";

const initialState: Location = {
  city: "tw",
  country: "taipei",
  time: moment().format("LTS"),
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<Location>) => {
      return { ...action.payload };
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;

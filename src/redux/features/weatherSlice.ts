import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather } from "../type";

const initialState: Weather = {
  main: "",
  description: "",
  minTemp: "",
  maxTemp: "",
  humidity: "",
  time: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<Weather>) => {
      return { ...action.payload };
    },
  },
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;

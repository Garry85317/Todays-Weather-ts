import { configureStore } from "@reduxjs/toolkit";
import { getWeatherApi } from "./services/getWeatherApi";

export const store = configureStore({
  reducer: {
    [getWeatherApi.reducerPath]: getWeatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getWeatherApi.middleware),
});

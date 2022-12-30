import { configureStore } from "@reduxjs/toolkit";
import { getWeatherApi } from "./services/getWeatherApi";
import searchSlice from "./features/searchSlice";
import historySlice from "./features/historySlice";
import weatherSlice from "./features/weatherSlice";

export const store = configureStore({
  reducer: {
    [getWeatherApi.reducerPath]: getWeatherApi.reducer,
    search: searchSlice,
    history: historySlice,
    weatherData: weatherSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getWeatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

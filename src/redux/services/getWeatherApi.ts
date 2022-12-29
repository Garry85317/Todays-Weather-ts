import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getWeatherApi = createApi({
  reducerPath: "getWeatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  }),
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (search) =>
        `?q=${search.country},${search.city}&appid=${
          import.meta.env.VITE_API_KEY
        }`,
    }),
  }),
});

export const { useGetWeatherDataQuery } = getWeatherApi;

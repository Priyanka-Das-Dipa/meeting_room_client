import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://meeting-room-server.vercel.app/api",
  // https://meeting-room-server.vercel.app/

  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth;

    if (token) {
      headers.set(`authorization`, `Berrer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["rooms", "slots", "user", "bookings"],
  endpoints: () => ({}),
});

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const connectionsApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});
export const setToken = (token) => {
  connectionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  connectionsApi.defaults.headers.common.Authorization = ``;
};

export const signUpThunk = createAsyncThunk(
  "auth/signUp",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await connectionsApi.post("/users/signup", credentials);

      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await connectionsApi.post("/users/login", credentials);

      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await connectionsApi.post("/users/logout");
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;
    if (!persistedToken) {
      return rejectWithValue("Token is not found!");
    }
    try {
      setToken(persistedToken);
      const { data } = await connectionsApi.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

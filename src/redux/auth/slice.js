import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  signUpThunk,
} from "./operations";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const pending = (state, action) => {
  state.loading = true;
  state.error = "";
};

const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  error: null,
  loading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = { name: "", email: "" };
        state.token = "";
        state.isLoggedIn = false;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, signUpThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.loading = false;
        }
      )
      .addMatcher(isAnyOf(loginThunk.pending, signUpThunk.pending), pending)
      .addMatcher(isAnyOf(loginThunk.rejected, signUpThunk.rejected), rejected);
  },
});

export const authReducer = authSlice.reducer;

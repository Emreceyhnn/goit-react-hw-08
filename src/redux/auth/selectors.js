import { createSelector } from "@reduxjs/toolkit";

export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectRefresh = (state) => state.auth.isRefreshing;
export const selectUser = createSelector(
  [(state) => state.auth.user],
  (user) => user
);

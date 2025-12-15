import { createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from "./operations";
import { logoutThunk } from "../auth/operations";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};
const pending = (state) => {
  state.loading = true;
  state.error = "";
};
const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logoutThunk.fulfilled, (state) => {
        state.contacts = [];
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          (el) => el.id === action.payload.id
        );
        state.contacts.splice(index, 1);
        state.loading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), pending)
      .addMatcher((action) => action.type.endsWith("/rejected"), rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

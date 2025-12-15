import { createAsyncThunk } from "@reduxjs/toolkit";
import { connectionsApi } from "../auth/operations";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await connectionsApi.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await connectionsApi.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const loading = getState().contacts.loading;
      if (loading) {
        return false;
      }
    },
  }
);

export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (addContact, { rejectWithValue }) => {
    try {
      const { data } = await connectionsApi.post(`/contacts`, addContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { onFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filter;

export const selectFilterData = createSelector(
  [selectFilter],
  (contacts, filter) => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

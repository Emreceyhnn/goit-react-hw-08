import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = (state) => state.contacts.contacts;
export const selectorFilter = (state) => state.filter.filter;
export const selectorLoading = (state) => state.contacts.loading;

export const selectFilterData = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);

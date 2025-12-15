import { createSelector } from "@reduxjs/toolkit";

export const selectorContacts = (state) => state.contacts.contacts;
export const selectorFilter = (state) => state.filter.filter;
export const selectorLoading = (state) => state.contacts.loading;

export const selectFilterData = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(
      (el) =>
        el.name.toLowerCase().includes(normalizedFilter) ||
        el.number.toLowerCase().includes(normalizedFilter)
    );
  }
);

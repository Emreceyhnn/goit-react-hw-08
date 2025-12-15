import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/Search";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import {
  fetchContactsThunk,
  deleteContactThunk,
} from "../redux/contacts/operations";
import {
  selectFilterData,
  selectorFilter,
  selectorLoading,
} from "../redux/contacts/selectors";
import { onFilter } from "../redux/filter/slice";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilterData);
  const filter = useSelector(selectorFilter);
  const isLoading = useSelector(selectorLoading);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContactThunk(id));
  };

  const handleSearchChange = (value) => {
    dispatch(onFilter(value));
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Stack spacing={3}>
        <ContactForm />
        <Divider />

        <SearchBar value={filter} onChange={handleSearchChange} />
        <Divider />

        {isLoading ? (
          <Typography align="center" color="text.secondary">
            Yükleniyor...
          </Typography>
        ) : (
          <ContactList contacts={contacts} onDelete={handleDeleteContact} />
        )}
      </Stack>
    </Box>
  );
}

import { Box, Divider, Stack } from "@mui/material";
import { useState } from "react";
import SearchBar from "../components/Search";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddContact = (contact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Stack spacing={3}>
        <ContactForm onAdd={handleAddContact} />
        <Divider />
        <SearchBar value={search} onChange={setSearch} />
        <Divider />
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      </Stack>
    </Box>
  );
}

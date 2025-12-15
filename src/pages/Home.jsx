import { Box, Typography, Stack, Button } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import SearchIcon from "@mui/icons-material/Search";
import SecurityIcon from "@mui/icons-material/Security";

export default function HomePage() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 6,
        textAlign: "center",
        px: 2,
      }}
    >
      {/* HERO */}
      <ContactPhoneIcon sx={{ fontSize: 64, color: "primary.main", mb: 2 }} />

      <Typography variant="h4" fontWeight={700} gutterBottom>
        Phonebook
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Manage your contacts easily. Add, search and remove contacts in one
        place.
      </Typography>

      {/* FEATURES */}
      <Stack spacing={2} mb={4}>
        <Feature
          icon={<SearchIcon color="primary" />}
          text="Instant search by name or phone number"
        />
        <Feature
          icon={<ContactPhoneIcon color="primary" />}
          text="Add new contacts in seconds"
        />
        <Feature
          icon={<SecurityIcon color="primary" />}
          text="Your data stays safe in your browser"
        />
      </Stack>

      {/* CTA */}
      <Button variant="contained" size="large" href="/login">
        Get Started
      </Button>
    </Box>
  );
}

/* 🔹 Small helper component */
function Feature({ icon, text }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {icon}
      <Typography>{text}</Typography>
    </Stack>
  );
}

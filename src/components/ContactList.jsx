import {
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ContactList({ contacts, onDelete }) {
  if (contacts.length === 0) {
    return (
      <Typography align="center" color="text.secondary">
        Kayıt yok
      </Typography>
    );
  }

  return (
    <Stack spacing={2}>
      {contacts.map((contact) => (
        <Card
          key={contact.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{contact.name}</Typography>
            <Typography color="text.secondary">{contact.phone}</Typography>
          </CardContent>

          <IconButton color="error" onClick={() => onDelete(contact.id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </Stack>
  );
}

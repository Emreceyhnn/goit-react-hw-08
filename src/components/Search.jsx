import { TextField } from "@mui/material";

export default function SearchBar({ value, onChange }) {
  return (
    <TextField
      label="Ara"
      placeholder="İsim veya numara"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
    />
  );
}

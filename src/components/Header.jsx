import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
          {/* Mobile menu */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Link href="/" underline="none">
              PhoneBook
            </Link>
          </Typography>

          <Box>
            <Link
              href="/contacts"
              underline="none"
              sx={{ color: "rgb(50,50,50)" }}
            >
              Contacts
            </Link>
          </Box>

          <>
            <Button variant="contained" href="/register" sx={{ ml: 2 }}>
              Register
            </Button>

            <Button href="/login" variant="outlined" sx={{ ml: 2 }}>
              Login
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

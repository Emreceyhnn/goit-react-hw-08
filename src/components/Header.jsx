import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";
import { logoutThunk } from "../redux/auth/operations";
import { persistor } from "../redux/store";

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    await persistor.purge();
  };

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
            {!isLoggedIn ? (
              <>
                <Button variant="contained" href="/register" sx={{ ml: 2 }}>
                  Register
                </Button>

                <Button href="/login" variant="outlined" sx={{ ml: 2 }}>
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button
                  href="/"
                  variant="outlined"
                  sx={{ ml: 2 }}
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </>
            )}
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// src/components/Navbar.js
import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom"; // for client-side navigation
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  // Grab darkMode and toggleTheme from your ThemeContext
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // useMediaQuery to adapt layout on smaller screens
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Build a gradient that changes slightly in light vs. dark mode
  const gradient =
    theme.palette.mode === "dark"
      ? "linear-gradient(to right, #0d47a1, #1565c0)"
      : "linear-gradient(to right, #1976d2, #6dd5ed)";

  return (
    <AppBar position="static" sx={{ background: gradient }}>
      <Toolbar
        sx={{
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          p: isMobile ? 1 : 2,
          gap: isMobile ? 1 : 0,
        }}
      >
        {/* App title */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          Loan Calculator
        </Typography>

        {/* Navigation buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Home */}
          <Button component={RouterLink} to="/" color="inherit">
            HOME
          </Button>
          {/* Exchange Rates page */}
          <Button component={RouterLink} to="/exchange-rates" color="inherit">
            EXCHANGE RATES (LIVE)
          </Button>
          {/* About (you can wire this later to "/about") */}
          <Button component={RouterLink} to="/about" color="inherit">
            ABOUT
          </Button>
          {/* Error Page */}
          <Button component={RouterLink} to="/error-page" color="inherit">
            ERROR PAGE
          </Button>

          {/* Theme toggle switch */}
          <Switch checked={darkMode} onChange={toggleTheme} color="default" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

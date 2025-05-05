import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Switch,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(to right, #1976d2, #1565c0, #0d47a1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? 1 : 0,
            p: isMobile ? 1 : 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Loan Calculator
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: isMobile ? "flex-start" : "center",
              gap: 1.5,
            }}
          >
            <Button color="inherit">HOME</Button>
            <Button color="inherit">EXCHANGE RATES (LIVE)</Button>
            <Button color="inherit">ABOUT</Button>
            <Button color="inherit">ERROR PAGE</Button>
            <Switch
              checked={toggle}
              onChange={() => setToggle(!toggle)}
              color="default"
            />
          </Box>
        </Toolbar>
      </AppBar>

      
    </Box>
    </>
  );
};

export default Navbar;

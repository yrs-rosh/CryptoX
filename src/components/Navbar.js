import {
  AppBar,
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const darkmode= createTheme({
    palette: {
      primary: {
        main: "#121212",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkmode}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography onClick={() => navigate("/")} className="logo">
              CryptoX
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;

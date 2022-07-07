import * as React from "react";
import { defaultTheme, Layout, AppBar, ToggleThemeButton } from "react-admin";
import { createTheme, Box, Typography } from "@mui/material";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

const MyAppBar = (props) => (
  <AppBar {...props} style={{ backgroundColor: "white", color: "#0079c2" }}>
    <img
      src='https://upload.wikimedia.org/wikipedia/en/c/c6/BMO_Capital_Markets_logo.svg'
      alt='Capital Markets'
      srcSet=''
      style={{ marginRight: "0.75rem" }}
    />
    {/* <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} /> */}
    <Box flex='1'>
      <Typography variant='h6' id='react-admin-title'></Typography>
    </Box>
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
);

export default MyAppBar;

import React, { forwardRef, useLo } from "react";
import { useLocaleState } from "react-admin";
import { AppBar, Logout, UserMenu, useUserMenu } from "react-admin";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import { Language } from "@mui/icons-material";

// It's important to pass the ref to allow MUI to manage the keyboard navigation
const ConfigurationMenu = React.forwardRef((props, ref) => {
  return (
    <MenuItem
      ref={ref}
      component={Link}
      // It's important to pass the props to allow MUI to manage the keyboard navigation
      {...props}
      to='/configuration'
    >
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText>Configuration</ListItemText>
    </MenuItem>
  );
});

// It's important to pass the ref to allow MUI to manage the keyboard navigation
const SwitchLanguage = forwardRef((props, ref) => {
  const [locale, setLocale] = useLocaleState();
  // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
  const { onClose } = useUserMenu();

  return (
    <MenuItem
      ref={ref}
      // It's important to pass the props to allow MUI to manage the keyboard navigation
      {...props}
      sx={{ color: "text.secondary" }}
      onClick={(event) => {
        setLocale(locale === "en" ? "fr" : "en");
        onClose(); // Close the menu
      }}
    >
      <ListItemIcon sx={{ minWidth: 5 }}>
        <Language />
      </ListItemIcon>
      <ListItemText>Switch Language</ListItemText>
    </MenuItem>
  );
});

const AppMenu = (props) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
    <SwitchLanguage />
    <Logout />
  </UserMenu>
);

export default AppMenu;

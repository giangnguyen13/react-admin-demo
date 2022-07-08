import React from "react";
import { createElement } from "react";
import { useMediaQuery } from "@mui/material";
import {
  DashboardMenuItem,
  Menu,
  MenuItemLink,
  useResourceDefinitions,
  useSidebarState,
} from "react-admin";
import DefaultIcon from "@mui/icons-material/ViewList";
import LabelIcon from "@mui/icons-material/Label";
import { Person } from "@mui/icons-material";
import { Logout } from "react-admin";
import SidebarSearch from "../components/SidebarSearch";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import { capitalize } from "../utilities/capitalize";
import CustomMenuDropdown from "../components/CustomMenuDropdown";

export const AppSidebar = (props) => {
  const resources = useResourceDefinitions();
  const [open, setOpen] = useSidebarState();
  return (
    <Menu {...props}>
      {open ? (
        <SidebarSearch />
      ) : (
        <MenuItem onClick={() => setOpen(true)}>
          <SearchIcon />
        </MenuItem>
      )}
      <DashboardMenuItem />
      <CustomMenuDropdown />
      {Object.keys(resources).map((name) => {
        const MemoComponent = resources[name].icon;
        const displayText =
          (resources[name].options && resources[name].options.label) || name;
        return (
          <MenuItemLink
            key={name}
            to={`/${name}`}
            primaryText={capitalize(displayText)}
            leftIcon={
              resources[name].icon ? <MemoComponent /> : <DefaultIcon />
            }
            onClick={props.onMenuClick}
            sidebarIsOpen={open}
          />
        );
      })}
      <MenuItemLink
        to='/tables'
        primaryText='More Tables'
        leftIcon={<DefaultIcon />}
      />
      <MenuItemLink to='/profile' primaryText='Profile' leftIcon={<Person />} />
      <MenuItemLink
        to='/custom-route'
        primaryText='Miscellaneous'
        leftIcon={<LabelIcon />}
      />
      <Logout />
    </Menu>
  );
};
export default AppSidebar;

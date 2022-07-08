import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

import { MenuItemLink } from "react-admin";
import DefaultIcon from "@mui/icons-material/ViewList";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { hasChildren } from "../utilities/hasChildren";

import { bmo_menu } from "../data/menu";

const CustomMenuDropdown = () => {
  return bmo_menu.map((item, key) => <MenuItem key={key} item={item} />);
};

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    // <ListItem button>
    //   <ListItemIcon>{item.icon}</ListItemIcon>
    //   <ListItemText primary={item.title} />
    // </ListItem>
    <MenuItemLink
      to={item.to ? item.to : "#"}
      primaryText={item.title}
      leftIcon={item.icon}
    />
  );
};

const MenuLabel = ({ open, title }) => {
  return (
    <>
      <span>{title}</span>
      {open ? <ExpandLess /> : <ExpandMore />}
    </>
  );
};

const MenuLabelIcon = ({ open, icon }) => {
  return open ? <ExpandMore /> : icon ? icon : <DefaultIcon />;
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      {/* <ListItem button onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem> */}
      <MenuItemLink
        to={item.to ? item.to : "#"}
        // primaryText={<MenuLabel title={item.title} open={open} />}
        primaryText={item.title}
        leftIcon={<MenuLabelIcon open={open} icon={item.icon} />}
        rightIcon
        onClick={handleClick}
      />
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default CustomMenuDropdown;

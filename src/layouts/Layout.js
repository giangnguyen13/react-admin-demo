import React from "react";
import { Layout } from "react-admin";
import MyAppBar from "./AppBar";
import MySidebar from "./AppSidebar";
import MyMenu from "./AppMenu";

const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} sidebar={MySidebar} />
);

export default MyLayout;

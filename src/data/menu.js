// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
// import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
// import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
// import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

import {
  HomeOutlined,
  LocalLibraryOutlined,
  TrendingUpOutlined,
  DescriptionOutlined,
  //
  AccountBalanceOutlined,
  CompareArrowsOutlined,
  TrendingDownOutlined,
  ClearAllOutlined,
  EqualizerOutlined,
  RequestPageOutlined,
  AccountBalanceWalletOutlined,
  BalanceOutlined,
  RemoveOutlined,
  AssignmentIndOutlined,
  PeopleOutlineOutlined,
  AccountCircleOutlined,
  SnippetFolderOutlined,
  AddchartOutlined,
  AttachMoneyOutlined,
  HelpCenterOutlined,
  ConnectWithoutContact,
  ReplayOutlined,
  MedicalInformationOutlined,
  TextSnippetOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";

import CustomSVGLogo from "../components/CustomSVGLogo";

import React from "react";

export const bmo_menu = [
  {
    icon: <AccountBalanceOutlined />,
    title: "Trade Workstation",
    items: [
      {
        title: "Positions",
        icon: <ClearAllOutlined />,
        to: "/trade_workstation/positions",
      },
      {
        title: "Trades",
        to: "/trade_workstation/trades",
        icon: <CompareArrowsOutlined />,
      },
      {
        title: "Risks",
        to: "/trade_workstation/risks",
        icon: <TrendingDownOutlined />,
      },
      {
        title: "PnL",
        to: "/trade_workstation/pnl",
        icon: <RequestPageOutlined />,
      },
    ],
  },
  {
    icon: <EqualizerOutlined />,
    title: "Static Data",
    items: [
      {
        title: "ECNs Account Mapping",
        icon: <AccountBalanceWalletOutlined />,
        items: [
          {
            title: "Candeal",

            to: "/static_data/ecn/candeal",
            icon: <CustomSVGLogo img_src={"CanDeal_Logo_v"} />,
          },
          {
            title: "Shorcan",
            to: "/static_data/ecn/shorcan",
            icon: <CustomSVGLogo img_src={"TMX_Group_logo"} />,
          },
          {
            title: "Trading Tech",
            to: "/static_data/ecn/tt",
            icon: <CustomSVGLogo img_src={"logo-tt-full"} />,
          },
        ],
      },
      {
        title: "References",
        icon: <AssignmentIndOutlined />,
        items: [
          { title: "Something 1", to: "#", icon: <RemoveOutlined /> },
          { title: "Something 2", to: "#", icon: <RemoveOutlined /> },
        ],
      },
      {
        title: "Users",
        icon: <PeopleOutlineOutlined />,
        items: [
          { title: "Profile", to: "/profile", icon: <AccountCircleOutlined /> },
        ],
      },
    ],
  },
  {
    icon: <SnippetFolderOutlined />,
    title: "Reporting",
    items: [
      {
        title: "Trades",
        to: "/reporting/trades",
        icon: <CompareArrowsOutlined />,
      },
      {
        title: "Positions",
        to: "/reporting/position",
        icon: <ClearAllOutlined />,
      },
    ],
  },
  {
    icon: <TrendingDownOutlined />,
    title: "Risks",
    to: "/risks",
  },
  {
    icon: <AddchartOutlined />,
    title: "Market Data",
    to: "/market_data",
  },
  {
    icon: <BalanceOutlined />,
    title: "Regulatory",
    to: "/regulatory",
  },
  {
    icon: <AttachMoneyOutlined />,
    title: "Sales",
    to: "/sales",
  },
  {
    icon: <HelpCenterOutlined />,
    title: "Support",
    items: [
      {
        title: "ECN",
        icon: <ConnectWithoutContact />,
        items: [
          {
            title: "Trade Replay",
            to: "/support/ecn/trade_replay",
            icon: <ReplayOutlined />,
          },
          {
            title: "Health Check",
            to: "/support/ecn/heath_check",
            icon: <MedicalInformationOutlined />,
          },
        ],
      },
      {
        title: "Logging",
        to: "/support/logging",
        icon: <TextSnippetOutlined />,
      },
      {
        title: "Control Center",
        to: "/support/control_center",
        icon: <SupportAgentOutlined />,
      },
    ],
  },
];

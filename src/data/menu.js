// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
// import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
// import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
// import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

import {
  HomeOutlined,
  LocalLibraryOutlined,
  TrendingUpOutlined,
  DescriptionOutlined,
} from "@mui/icons-material";

import React from "react";

export const bmo_menu = [
  {
    icon: <HomeOutlined />,
    title: "Trade Workstation",
    items: [
      {
        title: "Positions",
        to: "/trade_workstation/positions",
      },
      {
        title: "Trades",
        to: "/trade_workstation/trades",
      },
      {
        title: "Risks",
        to: "/trade_workstation/risks",
      },
      {
        title: "PnL",
        to: "/trade_workstation/pnl",
      },
    ],
  },
  {
    icon: <LocalLibraryOutlined />,
    title: "Static Data",
    items: [
      {
        title: "ECNs Account Mapping",
        items: [
          {
            title: "Candeal",
            to: "/static_data/ecn/candeal",
          },
          {
            title: "Shorcan",
            to: "/static_data/ecn/shorcan",
          },
          {
            title: "TT",
            to: "/static_data/ecn/tt",
          },
        ],
      },
      {
        title: "References",
        items: [
          { title: "Something 1", to: "#" },
          { title: "Something 2", to: "#" },
        ],
      },
      {
        title: "Users",
        items: [
          { title: "Profile", to: "/profile" },
          { title: "Password", to: "#" },
        ],
      },
    ],
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Reporting",
    items: [
      {
        title: "Trades",
        to: "/reporting/trades",
      },
      {
        title: "Positions",
        to: "/reporting/position",
      },
    ],
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Risks",
    to: "/risks",
  },
  {
    icon: <DescriptionOutlined />,
    title: "Market Data",
    to: "/market_data",
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Regulatory",
    to: "/regulatory",
  },
  {
    icon: <DescriptionOutlined />,
    title: "Sales",
    to: "/sales",
  },
  {
    icon: <LocalLibraryOutlined />,
    title: "Support",
    items: [
      {
        title: "ECN",
        items: [
          {
            title: "Trade Replay",
            to: "/support/ecn/trade_replay",
          },
          {
            title: "Health Check",
            to: "/support/ecn/heath_check",
          },
        ],
      },
      {
        title: "Logging",
        to: "/support/logging",
      },
      {
        title: "Control Center",
        to: "/support/control_center",
      },
    ],
  },
];

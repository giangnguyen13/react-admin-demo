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

export const menu = [
  {
    icon: <HomeOutlined />,
    title: "Home",
    items: [],
  },
  {
    icon: <LocalLibraryOutlined />,
    title: "Education",
    items: [
      {
        title: "Technical Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Fundamental Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
      {
        title: "Elliot Wave Analysis",
        items: [
          {
            title: "The Dow Theory",
            to: "/thedowtheory",
          },
          {
            title: "Charts & Chart Patterns",
            to: "/chart",
          },
          {
            title: "Trend & Trend Lines",
            to: "/trendlines",
          },
          {
            title: "Support & Resistance",
            to: "/sandr",
          },
        ],
      },
    ],
  },
  {
    icon: <TrendingUpOutlined />,
    title: "Options",
  },
  {
    icon: <DescriptionOutlined />,
    title: "Blog",
  },
];

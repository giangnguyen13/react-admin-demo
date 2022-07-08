import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  imageIcon: {
    width: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
});

const CustomSVGLogo = ({ img_src }) => {
  const classes = useStyles();
  return (
    <Icon classes={{ root: classes.iconRoot }}>
      <img className={classes.imageIcon} src={`/svg_icons/${img_src}.svg`} />
    </Icon>
  );
};

export default CustomSVGLogo;

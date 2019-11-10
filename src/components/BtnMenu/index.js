import React from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    position: "absolute",
    top: 5,
    left: 5
  }
}));
export default function BtnMenu({ active, handle }) {
  const classes = useStyles();

  return (
    <IconButton className={classes.button} onClick={handle} color="primary">
      {active ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
    </IconButton>
  );
}

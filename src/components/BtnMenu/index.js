import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    position: "absolute",
    top: 5,
    left: 5,
    display: "flex",
    alignItems: "center"
  }
}));
export default function BtnMenu({ active, handle }) {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <IconButton onClick={handle} color="primary">
        {active ? (
          <CloseIcon fontSize="large" />
        ) : (
          <MenuIcon fontSize="large" />
        )}
      </IconButton>
      <Typography color="primary">{active ? "" : "Menu"}</Typography>
    </div>
  );
}

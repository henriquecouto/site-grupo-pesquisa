import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },
  internal: {
    transition: "all 1s;",
    padding: theme.spacing(15),
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function Content({ children, active }) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="flex-end"
    >
      <Grid
        item
        className={classes.internal}
        style={{ width: active && "80%", height: active && "50%" }}
      >
        {children}
      </Grid>
    </Grid>
  );
}

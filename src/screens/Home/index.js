import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "height 0.5s"
  }
}));

export default function Home({ handleMenuActive }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Typography color="primary">djshjdh</Typography>
    </Grid>
  );
}

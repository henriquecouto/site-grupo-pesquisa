import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { loadScreen } from "../../services/firebase/db";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "height 0.5s",
    height: "100%"
  },
  title: {
    paddingBottom: 100
  },
  right: {
    display: "flex",
    alignItems: "flex-end"
  },
  logo: {
    width: "100%"
  }
}));

export default function Projects({ screen }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <Typography variant="h2" color="textPrimary" className={classes.title}>
          {screen.name}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          {screen.content}
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.right}>
        <img src={logo} className={classes.logo} alt="" />
      </Grid>
    </Grid>
  );
}

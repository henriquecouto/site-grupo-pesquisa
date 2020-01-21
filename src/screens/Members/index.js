import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";

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

export default function Members() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <Typography variant="h2" color="textPrimary" className={classes.title}>
          Integrantes
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis,
          nisi eros vermeio. Paisis, filhis, espiritis santis. Si num tem leite
          então bota uma pinga aí cumpadi! Não sou faixa preta cumpadi, sou
          preto inteiris, inteiris.
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.right}>
        <img src={logo} className={classes.logo} alt="" />
      </Grid>
    </Grid>
  );
}

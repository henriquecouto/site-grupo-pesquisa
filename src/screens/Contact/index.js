import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import logo from "../../assets/logo.png";

const useStyles = makeStyles(theme => ({
  root: {
    transition: "height 0.5s",
    height: "100%"
  },
  text: {
    paddingBottom: 50
  },
  right: {
    display: "flex",
    alignItems: "flex-end"
  },
  logo: {
    width: "100%"
  },
  input: {
    margin: 0,
    padding: 15,
    width: "100%",
    fontSize: 20,
    border: "none",
    borderRadius: "5px 5px 0 0 ",
    borderStyle: "block",
    outline: "none",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    fontFamily: "roboto",
    transition: "0.3s"
  },
  button: {
    width: "auto",
    cursor: "pointer",
    borderRadius: 5
  },
  mouseOver: {
    backgroundColor: theme.palette.primary.dark
  },
  textarea: {
    resize: "none",
    height: 200
  }
}));

export default function Contact() {
  const classes = useStyles();

  const [onHover, setOnHover] = useState({
    button: false,
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleOnHover = (input, value) => () => {
    setOnHover({ ...onHover, [input]: value });
  };

  return (
    <Grid container className={classes.root} justify="space-between">
      <Grid item xs={8}>
        <Typography variant="h2" color="textPrimary" className={classes.text}>
          Contato
        </Typography>
        <Typography variant="h6" color="textPrimary" className={classes.text}>
          Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis,
          nisi eros vermeio.
        </Typography>

        <Grid container direction="column" spacing={1}>
          <Grid item>
            <input
              className={classNames([
                classes.input,
                onHover.name && classes.mouseOver
              ])}
              placeholder="SEU NOME"
              onMouseEnter={handleOnHover("name", true)}
              onMouseOut={handleOnHover("name", false)}
            />
          </Grid>
          <Grid item>
            <input
              className={classNames([
                classes.input,
                onHover.email && classes.mouseOver
              ])}
              placeholder="SEU E-MAIL"
              onMouseEnter={handleOnHover("email", true)}
              onMouseOut={handleOnHover("email", false)}
            />
          </Grid>
          <Grid item>
            <input
              className={classNames([
                classes.input,
                onHover.subject && classes.mouseOver
              ])}
              placeholder="ASSUNTO DA MENSAGEM"
              onMouseEnter={handleOnHover("subject", true)}
              onMouseOut={handleOnHover("subject", false)}
            />
          </Grid>
          <Grid item>
            <textarea
              className={classNames([
                classes.input,
                classes.textarea,
                onHover.message && classes.mouseOver
              ])}
              placeholder="SUA MENSAGEM"
              onMouseEnter={handleOnHover("message", true)}
              onMouseOut={handleOnHover("message", false)}
            />
          </Grid>
          <Grid item>
            <button
              className={classNames([
                classes.input,
                classes.button,
                onHover.button && classes.mouseOver
              ])}
              onMouseEnter={handleOnHover("button", true)}
              onMouseLeave={handleOnHover("button", false)}
            >
              ENVIAR MENSAGEM
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className={classes.right}>
        <img src={logo} className={classes.logo} alt="" />
      </Grid>
    </Grid>
  );
}

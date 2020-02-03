import React, { useState } from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { addData } from "../../services/firebase/db";

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
    borderRadius: 5,
    borderStyle: "block",
    outline: "none",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    fontFamily: "roboto",
    transition: "0.3s",
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: 5,
    borderBottomStyle: "solid",
    "&:hover": {
      borderBottomColor: theme.palette.primary.light
    }
  },
  button: {
    width: "auto",
    cursor: "pointer",
    borderRadius: 5
  },
  mouseOver: {
    borderBottomColor: theme.palette.primary.dark
  },
  textarea: {
    resize: "none",
    height: 200
  },
  error: {
    borderBottomColor: theme.palette.error.main
  }
}));

export default function Contact({ screen }) {
  const classes = useStyles();

  const [fields, setFields] = useState({
    name: { value: "", error: false },
    email: { value: "", error: false },
    subject: { value: "", error: false },
    message: { value: "", error: false }
  });

  const [send, setSend] = useState("");

  const validateField = (name, content) => {
    const others = () => {
      return !!(content.length > 2);
    };

    const email = () => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(content);
    };

    const tests = {
      email,
      name: others,
      subject: () => true,
      message: others
    };

    return tests[name]();
  };

  const onChange = field => ({ target: { value } }) => {
    const result = validateField(field, value);
    setFields({ ...fields, [field]: { value, error: !result } });
  };

  const sendMessage = async e => {
    e.preventDefault();
    const result = await addData("messages", fields);
    if (result.status) {
      setSend("Mensagem enviada com sucesso!");
      setFields({
        name: { value: "", error: false },
        email: { value: "", error: false },
        subject: { value: "", error: false },
        message: { value: "", error: false }
      });
    } else {
      setSend("Ocorreu um erro, por favor tente novamente!");
      console.log(result.error);
    }
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      alignItems="flex-start"
      spacing={10}
    >
      <Grid item xs={8}>
        <Typography variant="h2" color="textPrimary" className={classes.text}>
          {screen.name}
        </Typography>
        <Typography variant="h6" color="textPrimary" className={classes.text}>
          {screen.content}
        </Typography>

        {!send ? (
          <form onSubmit={sendMessage}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <input
                  required
                  type="name"
                  className={classNames([
                    classes.input,
                    fields.name.error && classes.error
                  ])}
                  placeholder="SEU NOME"
                  value={fields.name.value}
                  onChange={onChange("name")}
                />
              </Grid>
              <Grid item>
                <input
                  required
                  type="email"
                  className={classNames([
                    classes.input,
                    fields.email.error && classes.error
                  ])}
                  placeholder="SEU E-MAIL"
                  value={fields.email.value}
                  onChange={onChange("email")}
                />
              </Grid>
              <Grid item>
                <input
                  className={classNames([
                    classes.input,
                    fields.subject.error && classes.error
                  ])}
                  placeholder="ASSUNTO DA MENSAGEM"
                  value={fields.subject.value}
                  onChange={onChange("subject")}
                />
              </Grid>
              <Grid item>
                <textarea
                  required
                  className={classNames([
                    classes.input,
                    classes.textarea,
                    fields.message.error && classes.error
                  ])}
                  placeholder="SUA MENSAGEM"
                  value={fields.message.value}
                  onChange={onChange("message")}
                />
              </Grid>
              <Grid item>
                <button
                  type="submit"
                  className={classNames([classes.input, classes.button])}
                >
                  ENVIAR MENSAGEM
                </button>
              </Grid>
            </Grid>
          </form>
        ) : (
          <Typography variant="h2" color="textPrimary">
            {send}
          </Typography>
        )}
      </Grid>
      <Grid item xs={3} className={classes.right}>
        <img src={screen.image} className={classes.logo} alt="" />
      </Grid>
    </Grid>
  );
}

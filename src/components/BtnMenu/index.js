import React from "react";
import { IconButton, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon, Close as CloseIcon } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    position: "absolute",
    top: 20,
    left: 20,
    display: "flex",
    alignItems: "center"
  }
}));
export default function BtnMenu({ active, handle }) {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button onClick={handle} color="primary">
        {active ? (
          <>
            <CloseIcon fontSize="large" />
            <Typography variant="h6">Fechar</Typography>
          </>
        ) : (
          <>
            <MenuIcon fontSize="large" />
            <Typography variant="h6">Menu</Typography>
          </>
        )}
      </Button>
    </div>
  );
}

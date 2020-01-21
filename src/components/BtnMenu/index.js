import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HamburgerButton } from "react-hamburger-button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    position: "absolute",
    top: 20,
    left: 20,
    display: "flex",
    alignItems: "center",
    zIndex: 100
  }
}));
export default function BtnMenu({ active, handle }) {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <Button onClick={handle} color="textPrimary">
        <div style={{ marginRight: 10 }}>
          <HamburgerButton
            open={active}
            width={18}
            height={15}
            strokeWidth={1}
            color="#e0e0e0"
            animationDuration={0.5}
          />
        </div>
        {active ? (
          <Typography style={classes.text}>Fechar</Typography>
        ) : (
          <Typography style={classes.text}>Menu</Typography>
        )}
      </Button>
    </div>
  );
}

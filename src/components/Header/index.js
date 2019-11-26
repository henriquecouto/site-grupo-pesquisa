import React from "react";
import { Grid, Button, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import menu from "../../utils/menu";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10),
    height: 0,
    transition: "height 0.5s"
  }
}));

export default function Header({ active, handle }) {
  const classes = useStyles();

  return (
    <Grid
      container
      id="grid-header"
      alignItems="center"
      justify="center"
      spacing={10}
      className={classes.root}
      style={{
        height: active && 500
      }}
    >
      {active &&
        menu.map(({ name, path }, i) => (
          <Zoom key={path} in={active} {...(active ? { timeout: 700 } : {})}>
            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Button
                color="primary"
                className={classes.button}
                component={Link}
                to={path}
              >
                {name}
              </Button>
            </Grid>
          </Zoom>
        ))}
    </Grid>
  );
}

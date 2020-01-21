import React from "react";
import { Grid, Button, Typography, Slide, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import menu from "../../utils/menu";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(7),
    height: 0,
    maxWidth: 1366,
    zIndex: 5
  }
}));

export default function Header({ active, handle }) {
  const classes = useStyles();

  return (
    active && (
      <Grid container justify="center">
        <Grid
          container
          id="grid-header"
          alignItems="center"
          justify="center"
          className={classes.root}
          style={{
            height: active && 400
          }}
        >
          <Hidden mdUp>
            {menu.map(({ name, path }, i) => (
              <Slide
                key={path}
                in={active}
                {...(active ? { timeout: 1500 } : {})}
                style={i === 0 && { marginTop: 30 }}
              >
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-end"
                  }}
                >
                  <Button
                    color="textPrimary"
                    className={classes.button}
                    onClick={handle}
                    component={Link}
                    to={path}
                  >
                    <Typography>{name}</Typography>
                  </Button>
                </Grid>
              </Slide>
            ))}
          </Hidden>
          <Hidden only={["sm", "xs"]}>
            {menu.map(({ name, path }, i) => (
              <Slide
                key={path}
                in={active}
                {...(active ? { timeout: 1500 } : {})}
              >
                <Grid
                  item
                  xs={4}
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <Button
                    color="textPrimary"
                    className={classes.button}
                    onClick={handle}
                    component={Link}
                    to={path}
                  >
                    <Typography>{name}</Typography>
                  </Button>
                </Grid>
              </Slide>
            ))}
          </Hidden>
        </Grid>
      </Grid>
    )
  );
}

import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Paper,
  GridList,
  GridListTile
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { loadMembers } from "../../services/firebase/db";

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
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0)
    // height: 300
  },
  gridMembers: {
    width: "100%",
    height: "100%",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: 5
    },

    "&::-webkit-scrollbar-track": {
      background: theme.palette.primary.main
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#888"
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555"
    }
  }
}));

export default function Members({ screen }) {
  const classes = useStyles();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const unsubscribe = loadMembers(setMembers);
    return () => unsubscribe();
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <Grid container direction="column" spacing={9}>
          <Grid item>
            <Typography
              variant="h2"
              color="textPrimary"
              className={classes.title}
            >
              {screen.name}
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {screen.content}
            </Typography>
          </Grid>
          <Grid item>
            <div style={{ height: 400 }}>
              <Grid container className={classes.gridMembers} spacing={2}>
                {members.map(member => (
                  <Grid item key={member.id} xs={4}>
                    <Paper className={classes.paper}>
                      <img
                        src={member.photo}
                        alt={member.name}
                        style={{
                          width: "100%",
                          objectFit: "contain"
                        }}
                      />
                      <div style={{ padding: "10px 20px" }}>
                        <Typography variant="body1">{member.course}</Typography>
                        <Typography variant="h6">{member.name}</Typography>
                        <Typography variant="body1">{member.acting}</Typography>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className={classes.right}>
        <img src={logo} className={classes.logo} alt="" />
      </Grid>
    </Grid>
  );
}

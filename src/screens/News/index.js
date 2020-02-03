import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";
import { loadScreen, loadNews } from "../../services/firebase/db";

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
  gridNews: {
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

export default function News({ screen }) {
  const classes = useStyles();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const unsubscribe = loadNews(setNews, { limit: 6 });
    return () => unsubscribe();
  }, []);

  return (
    <Grid
      container
      className={classes.root}
      spacing={10}
      alignItems="flex-start"
    >
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
              <Grid container className={classes.gridNews} spacing={2}>
                {[
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news,
                  ...news
                ].map(notice => (
                  <Grid item key={notice.id} xs={4}>
                    <Paper className={classes.paper}>
                      <div style={{ padding: "10px 20px" }}>
                        <Typography variant="h6">{notice.title}</Typography>
                        <Typography variant="body1">{notice.desc}</Typography>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3} className={classes.right}>
        <img src={screen.image} className={classes.logo} alt="" />
      </Grid>
    </Grid>
  );
}

import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { loadNews } from "../../services/firebase/db";
import NoticeModal from "../../components/NoticeModal";

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
    padding: theme.spacing(0),
    // height: 300
    cursor: "pointer"
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
  const [noticeModal, setNoticeModal] = useState({
    status: false,
    notice: null
  });

  useEffect(() => {
    const unsubscribe = loadNews(setNews, { limit: 6 });
    return () => unsubscribe();
  }, []);

  const handleNoticeModal = notice => () => {
    setNoticeModal({ status: !noticeModal.status, notice });
  };

  return (
    <Grid
      container
      className={classes.root}
      spacing={10}
      alignItems="flex-start"
    >
      <NoticeModal
        open={noticeModal.status}
        notice={noticeModal.notice}
        handleClose={() => {
          setNoticeModal({ status: false, notice: null });
        }}
      />
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
                {news.map((notice, i) => (
                  <Grid item key={i} xs={4}>
                    <Paper
                      className={classes.paper}
                      onClick={handleNoticeModal(notice)}
                    >
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

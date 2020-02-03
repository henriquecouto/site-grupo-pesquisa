import React from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Divider,
  Grid,
  IconButton
} from "@material-ui/core";

import { Close as CloseIcon } from "@material-ui/icons";

export default function NoticeModal({ handleClose, open, notice }) {
  return (
    notice && (
      <Dialog onClose={handleClose} open={open} maxWidth="lg" fullWidth>
        <DialogContent style={{ overflow: "hidden" }}>
          <Grid container spacing={4} direction="column">
            <Grid item>
              <Grid container justify="space-between" alignItems="center">
                <Typography variant="h5">{notice.title}</Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon style={{ color: "#fff" }} />
                </IconButton>
              </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ backgroundColor: "#fff" }} />
            <Grid item>
              <Typography variant="h6">{notice.desc}</Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom>
                {notice.text}
                {notice.text}
                {notice.text}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    )
  );
}

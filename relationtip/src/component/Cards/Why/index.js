import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./styles.css";
import { NavBar } from "../../topbar/TopBar";

export default function Why() {
  return (
    <div className="wColor">
      <Card sx={{ maxWidth: 345 }}>
        <NavBar title="Why?!"></NavBar>
        <CardMedia
          component="img"
          className="pic"
          image="../assets/images/why.png"
        />
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1. Work on Yourself
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            2. Take your time with finding new love
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            If you would like a session please visit our site:
            <br></br>
            <a href="https://www.tsbchangingimageswithcoaching.com/">
              TSB Changing Images
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

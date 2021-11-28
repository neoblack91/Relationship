import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./emotion.css";
import { NavBar } from "../../topbar/TopBar";

export default function emotion() {
  return (
    <div className="eColor">
      <Card sx={{ maxWidth: 345 }}>
        <NavBar title="Emotional Safety"></NavBar>
        <CardMedia
          component="img"
          className="pic"
          image="../assets/images/emotions.png"
        />
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1.Protect your emotions always
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

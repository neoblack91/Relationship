import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./yourself.css";
import { NavBar } from "../../topbar/TopBar";

export default function Yourself() {
  return (
    <div className="yColor">
      <NavBar title="Finding Yourself"></NavBar>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          className="pic"
          image="../assets/images/yourself.png"
        />
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1.Getting to know you is important
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

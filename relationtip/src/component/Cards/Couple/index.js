import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./couple.css";
import { NavBar } from "../../topbar/TopBar";

export default function couple() {
  return (
    <div className="coupleColor">
      <NavBar title="Being a Couple"></NavBar>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          className="pic"
          image="../assets/images/couple.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Being a couple
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1. Being a couple is is great if you follow the steps in the goal
            section
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

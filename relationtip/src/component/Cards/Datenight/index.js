import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./styles.css";
import { NavBar } from "../../topbar/TopBar";

export default function DNTCard() {
  return (
    <div className="dnColor">
      <NavBar title="First Date"></NavBar>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          className="pic"
          image="../assets/images/firstdate.png"
        />
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1. Relax
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            2. Positive Communication
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            3. Decide on nightly activities together.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            4. Leave your baggage at the door!
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

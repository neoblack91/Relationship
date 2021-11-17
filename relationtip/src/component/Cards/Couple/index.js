import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./couple.css";

export default function couple() {
  return (
    <div className="coupleColor">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" className="pic" />
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
    </div>
  );
}

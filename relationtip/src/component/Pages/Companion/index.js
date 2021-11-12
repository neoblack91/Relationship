import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./Companion.css";

export default function Companion() {
  const { ComImg } = "./assets/images/companion.png";
  return (
    <div className="comColor">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component={ComImg} className="pic" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Why Companionship
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1. Companionship is important. You were not created to be alone
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

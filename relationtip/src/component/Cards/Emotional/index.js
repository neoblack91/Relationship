import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./emotion.css";

export default function emotion() {
  return (
    <div className="eColor">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" className="pic" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Emotional Safety
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1.Protect your emotions always
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

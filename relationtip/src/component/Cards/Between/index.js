import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./styles.css";

export default function betCard() {
  return (
    <div className="betColor">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" className="pic" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            The in Between
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            1. Address your Personal issues
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            2. Work on you
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            3. Date
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

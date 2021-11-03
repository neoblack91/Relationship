import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./styles.css";

export default function DNTCard() {
  return (
    <div className="dnColor">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" className="pic" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Date Night Tips
          </Typography>
        </CardContent>
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
    </div>
  );
}

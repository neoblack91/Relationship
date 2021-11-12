import React from "react";
import { CardContent, CardMedia, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import "./styles.css";

export default function DNTCard() {
  // const DateImg = {require (`./couples.jpg`)};
  const DateImg = {
    car: require("../Datenight"),
    // phone: require('../phone.png'),
  };
  return (
    <div className="dnColor">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia className="pic" Image source={DateImg.car} />
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

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "image.css";

export default function MediaCard() {
  return (
    <CardActionArea>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src="Thinking"
          alt="people thinking"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Prepare your Relationship
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

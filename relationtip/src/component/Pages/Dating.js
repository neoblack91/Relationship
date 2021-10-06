import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import FDT from "../Images/Coffee Date.jpg";
import DN from "../Images/arcadia-earth-1.jpg";

export default function DatingCard() {
  return (
    <CardActionArea>
      {/* card 1 */}
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={DN}
          alt="ways-to-improve-emotional-support-in-your-relationship"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Date Night Activities
          </Typography>
        </CardContent>
      </Card>

      {/* card 2 */}
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={FDT}
          alt="First Date Tips"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            First Date Tips
          </Typography>
        </CardContent>
      </Card>

      {/* card 3 */}
      {/* <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            component="img"
            height="140"
            img
            src={BreakUp}
            alt="Break Up"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Break Up
            </Typography>
          </CardContent>
        </Card> */}
    </CardActionArea>
  );
}

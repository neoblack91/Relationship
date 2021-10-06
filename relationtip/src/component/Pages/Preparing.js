import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import Support from "../Images/giving-emotional-support.jpg";
import Emotional from "../Images/ways-to-improve-emotional-support-in-your-relationship.jpg";

export default function PrepareCard() {
  return (
    <CardActionArea>
      {/* card 1 */}
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={Emotional}
          alt="ways-to-improve-emotional-support-in-your-relationship"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Emotional Safety
          </Typography>
        </CardContent>
      </Card>

      {/* card 2 */}
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={Support}
          alt="giving-emotional-support"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Support
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

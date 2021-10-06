import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
// import "image.css";
import thinking from "../Images/thinking.jpg";
// import DollarPhoto from "../Images/DollarPhoto.jpg";
// import BreakUp from "../Images/how-to-break-up.jpg"
// import Dating from "../Images/dating.jpg"
// import Couples from "../Images/couples.jpg"
// import Love from "../Images/Kingdom_hearts.png"


export default function MediaCard() {
  return (
    <CardActionArea>

      {/* card 1 */}
      <Card sx={{ maxWidth: 200 }}>
       
        <CardMedia
          component="img"
          height="140"
          img
          src={thinking}
          alt="people thinking"
          onclick={'./Preparing.js'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Prepare your Relationship
          </Typography>
        </CardContent>
        
      </Card>

{/* card 2 */}
      {/* <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={DollarPhoto}
          alt="Goal Setting"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Goal Setting
          </Typography>
        </CardContent>
      </Card> */}

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

{/* card 4*/}

      {/* <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={Dating}
          alt="Dating"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dating Tips
          </Typography>
        </CardContent>
      </Card> */}

{/* card 5 */}

      {/* <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={Couples}
          alt="Couples"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Couples
          </Typography>
        </CardContent>
      </Card> */}

{/* card 6 */}

      {/* <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          height="140"
          img
          src={Love}
          alt="Love"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Love
          </Typography>
        </CardContent>
      </Card> */}
    </CardActionArea>
  );
}

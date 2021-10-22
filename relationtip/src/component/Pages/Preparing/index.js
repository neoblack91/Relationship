// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import Couples from "../Images/couples.jpg";
// import myself from "../Images/travel.jpg";
// import Emotional from "../Images/ways-to-improve-emotional-support-in-your-relationship.jpg";

// export default function PrepareCard() {
//   return (
//     <CardActionArea>
//       {/* card 1 */}
//       <Card sx={{ maxWidth: 200 }}>
//         <CardMedia
//           component="img"
//           height="140"
//           img
//           src={myself}
//           alt="ways-to-improve-emotional-support-in-your-relationship"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Find Yourself
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* card 2 */}
//       <Card sx={{ maxWidth: 200 }}>
//         <CardMedia
//           component="img"
//           height="140"
//           img
//           src={Emotional}
//           alt="ways-to-improve-emotional-support-in-your-relationship"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Emotional Safety
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* card 3 */}
//       <Card sx={{ maxWidth: 200 }}>
//         <CardMedia
//           component="img"
//           height="140"
//           img
//           src={Couples}
//           alt="Couples"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Why companionship?
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* card 3 */}
//       <Card sx={{ maxWidth: 200 }}>
//         <CardMedia component="img" height="140" img src={Couples} alt="Break Up" />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Being a Couple
//           </Typography>
//         </CardContent>
//       </Card>
//     </CardActionArea>
//   );
// }
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";
export default function PrepareCard() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={160}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <a href={item.URL}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="pic"
            />
          </a>
          <ImageListItemBar
            title={item.title}
            // subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "./assets/images/travel.jpg",
    title: "Find Yourself",
    URL: "./Preparing.js",
  },
  {
    img: "./assets/images/ways-to-improve-emotional-support-in-your-relationship.jpg",
    title: "Emotional Safety",
    URL: "./Goal.js",
  },
  {
    img: "./assets/images/companionship-relationship.jpg",
    title: "Why companionship?",
    URL: "./Breakup.js",
  },
  {
    img: "./assets/images/couples.jpg",
    title: "Being a Couple",
    URL: "./Dating.js",
  },
];

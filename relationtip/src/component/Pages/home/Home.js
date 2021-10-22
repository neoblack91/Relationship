// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import { Container, TableRow } from "@mui/material";

// import thinking from "../Images/thinking.jpg";
// // import heart from "../Images/heart.jpg";

// // import Link  from "react-router-dom";
// import DollarPhoto from "../Images/DollarPhoto.jpg";
// import BreakUp from "../Images/how-to-break-up.jpg";
// import Dating from "../Images/dating.jpg";

// export default function MediaCard() {
//   return (
//     <div
//       // style={{ backgroundImage: `url (${heart})` }}
//       style={{
//         backgroundColor: "pink",
//       }}
//     >
//       <Container>
//         <TableRow>
//           <CardActionArea onclick="/PrepareCard">
//             {/* card 1 */}
//             <Card sx={{ maxWidth: 200 }}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 img
//                 src={thinking}
//                 alt="people thinking"
//                 // onclick
//                 // Link
//                 // to="/PrepareCard"
//               />

//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Preparing for a Relationship
//                 </Typography>
//               </CardContent>
//             </Card>
//           </CardActionArea>
//         </TableRow>
//       </Container>

//       <Container>
//         <TableRow>
//           {/* card 2 */}
//           <CardActionArea onclick={"/PrepareCard"}>
//             <Card sx={{ maxWidth: 200 }}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 img
//                 src={DollarPhoto}
//                 alt="Goal Setting"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Goal Setting
//                 </Typography>
//               </CardContent>
//             </Card>
//           </CardActionArea>
//         </TableRow>
//       </Container>

//       {/* card 3 */}

//       <Card sx={{ maxWidth: 200 }}>
//         <CardMedia
//           component="img"
//           height="140"
//           img
//           src={BreakUp}
//           alt="Break Up"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Break Up
//           </Typography>
//         </CardContent>
//       </Card>

//       {/* card 4*/}

//       <Card sx={{ maxWidth: 200 }}>
//         <CardMedia component="img" height="140" img src={Dating} alt="Dating" />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Dating Tips
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./images.css";
export default function MediaCard() {
  return (
    <ImageList  sx={{ width: 500, height: 450 }} cols={2} rowHeight={160}>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <a href={item.URL}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className= "pic"
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
    img: "./assets/images/thinking.jpg",
    title: "Preparing for a Relationship",
    URL: "./Preparing.js",
  },
  {
    img: "./assets/images/DollarPhoto.jpg",
    title: "Goal",
    URL: "./Goal.js",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Break Up",
    URL: "./Breakup.js",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Dating",
    URL: "./Dating.js",
  },
];

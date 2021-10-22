import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";

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
    URL: "./Preparing/index.js",
  },
  {
    img: "./assets/images/DollarPhoto.jpg",
    title: "Goal",
    URL: "./Goal/index.js",
  },
  {
    img: "./assets/images/how-to-break-up.jpg",
    title: "Break Up",
    URL: "./Breakup/index.js",
  },
  {
    img: "./assets/images/dating.jpg",
    title: "Dating",
    URL: "./Dating/index.js",
  },
];

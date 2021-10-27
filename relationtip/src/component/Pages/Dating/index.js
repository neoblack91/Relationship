import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";

export default function DatingCard() {
  return (
    <div className="dateColor">
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <a href={item.URL}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              className={("pic", "responsive")}
            />
          </a>
          <ImageListItemBar title={item.title} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
     </div>
  );
}

const itemData = [
  {
    img: "../assets/images/arcadia-earth-1.jpg",
    title: "Date Night Activities",
    // URL: "./Preparing.js",
  },
  {
    img: "../assets/images/Coffee-Date.jpg",
    title: "First Date Tips",
    // URL: "./Goal.js",
  },
  {
    img: "../assets/images/all-dating.jpg",
    title: "All About Dating",
    // URL: "./Breakup.js",
  },
  {
    img: "../assets/images/stress-awareness-hub.jpg",
    title: "Dealing with Stress",
    // URL: "./Dating.js",
  },
  {
    img: "../assets/images/Slide11.jpg",
    title: "Communication Danger Signs(Dating)",
    // URL: "./Dating.js",
  },
];
